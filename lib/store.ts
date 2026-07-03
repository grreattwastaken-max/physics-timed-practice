"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { SrsCard, initialSrs, review, Confidence } from "./srs";
import {
  ACHIEVEMENTS,
  AchievementCheckState,
  XP_REWARDS,
} from "./gamification";
import { todayKey, daysBetween } from "./utils";
import type { CustomChapter } from "./types";

export interface ChapterStats {
  attempts: number;
  correct: number;
  confidenceSum: number; // 0-2 per flashcard review
  confidenceCount: number;
  flashcardsSeen: number;
  examplesCompleted: string[];
  derivationsCompleted: string[];
  summariesRead: string[]; // "quick" | "exam" | "deep"
  lastStudied?: string;
}

export interface AttemptRecord {
  date: string; // ISO date
  chapterId: string;
  mode: string;
  correct: number;
  total: number;
  seconds?: number;
}

export interface MistakeRecord {
  date: string;
  chapterId: string;
  concept: string;
  prompt: string;
  kind: string; // e.g. "quiz", "checkpoint"
}

export interface DayActivity {
  xp: number;
  reviews: number;
  questions: number;
}

interface ProgressState {
  xp: number;
  streak: number;
  bestStreak: number;
  lastStudyDate: string | null;
  achievements: string[]; // unlocked ids
  recentUnlock: string | null;

  // counters for achievements
  flashcardsReviewed: number;
  quizAnswered: number;
  quizCorrect: number;
  timedSessions: number;
  uploadsProcessed: number;
  perfectQuizzes: number;
  chaptersVisited: string[];

  chapterStats: Record<string, ChapterStats>;
  attempts: AttemptRecord[];
  mistakes: MistakeRecord[];
  activity: Record<string, DayActivity>; // by date
  srs: Record<string, SrsCard>;
  customChapters: CustomChapter[];
  tutorNotes: string[]; // rolling memory of tutor sessions

  // actions
  touchDay: () => void;
  awardXp: (amount: number) => void;
  visitChapter: (chapterId: string) => void;
  reviewFlashcard: (
    cardId: string,
    chapterId: string,
    confidence: Confidence
  ) => void;
  recordAnswer: (args: {
    chapterId: string;
    correct: boolean;
    concept: string;
    prompt: string;
    mode: string;
  }) => void;
  recordSession: (args: {
    chapterId: string;
    mode: string;
    correct: number;
    total: number;
    seconds?: number;
  }) => void;
  completeExample: (chapterId: string, exampleId: string) => void;
  completeDerivation: (chapterId: string, derivationId: string) => void;
  markSummaryRead: (chapterId: string, level: string) => void;
  registerUpload: () => void;
  addCustomChapter: (c: CustomChapter) => void;
  removeCustomChapter: (id: string) => void;
  addTutorNote: (note: string) => void;
  clearRecentUnlock: () => void;
  resetAll: () => void;
}

const emptyStats = (): ChapterStats => ({
  attempts: 0,
  correct: 0,
  confidenceSum: 0,
  confidenceCount: 0,
  flashcardsSeen: 0,
  examplesCompleted: [],
  derivationsCompleted: [],
  summariesRead: [],
});

function bumpActivity(
  activity: Record<string, DayActivity>,
  patch: Partial<DayActivity>
): Record<string, DayActivity> {
  const key = todayKey();
  const cur = activity[key] ?? { xp: 0, reviews: 0, questions: 0 };
  return {
    ...activity,
    [key]: {
      xp: cur.xp + (patch.xp ?? 0),
      reviews: cur.reviews + (patch.reviews ?? 0),
      questions: cur.questions + (patch.questions ?? 0),
    },
  };
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      xp: 0,
      streak: 0,
      bestStreak: 0,
      lastStudyDate: null,
      achievements: [],
      recentUnlock: null,
      flashcardsReviewed: 0,
      quizAnswered: 0,
      quizCorrect: 0,
      timedSessions: 0,
      uploadsProcessed: 0,
      perfectQuizzes: 0,
      chaptersVisited: [],
      chapterStats: {},
      attempts: [],
      mistakes: [],
      activity: {},
      srs: {},
      customChapters: [],
      tutorNotes: [],

      touchDay: () => {
        const { lastStudyDate, streak, bestStreak } = get();
        const today = todayKey();
        if (lastStudyDate === today) return;
        let next = 1;
        if (lastStudyDate) {
          const gap = daysBetween(lastStudyDate, today);
          next = gap === 1 ? streak + 1 : 1;
        }
        set({
          lastStudyDate: today,
          streak: next,
          bestStreak: Math.max(bestStreak, next),
        });
      },

      awardXp: (amount) => {
        get().touchDay();
        set((s) => ({
          xp: s.xp + amount,
          activity: bumpActivity(s.activity, { xp: amount }),
        }));
        checkAchievements(set, get);
      },

      visitChapter: (chapterId) => {
        set((s) => ({
          chaptersVisited: s.chaptersVisited.includes(chapterId)
            ? s.chaptersVisited
            : [...s.chaptersVisited, chapterId],
          chapterStats: {
            ...s.chapterStats,
            [chapterId]: {
              ...(s.chapterStats[chapterId] ?? emptyStats()),
              lastStudied: todayKey(),
            },
          },
        }));
        checkAchievements(set, get);
      },

      reviewFlashcard: (cardId, chapterId, confidence) => {
        const card = get().srs[cardId] ?? initialSrs();
        const updated = review(card, confidence);
        set((s) => {
          const stats = s.chapterStats[chapterId] ?? emptyStats();
          return {
            srs: { ...s.srs, [cardId]: updated },
            flashcardsReviewed: s.flashcardsReviewed + 1,
            activity: bumpActivity(s.activity, { reviews: 1 }),
            chapterStats: {
              ...s.chapterStats,
              [chapterId]: {
                ...stats,
                flashcardsSeen: stats.flashcardsSeen + 1,
                confidenceSum: stats.confidenceSum + confidence,
                confidenceCount: stats.confidenceCount + 1,
                lastStudied: todayKey(),
              },
            },
          };
        });
        get().awardXp(XP_REWARDS.flashcardReview);
      },

      recordAnswer: ({ chapterId, correct, concept, prompt, mode }) => {
        set((s) => {
          const stats = s.chapterStats[chapterId] ?? emptyStats();
          return {
            quizAnswered: s.quizAnswered + 1,
            quizCorrect: s.quizCorrect + (correct ? 1 : 0),
            activity: bumpActivity(s.activity, { questions: 1 }),
            chapterStats: {
              ...s.chapterStats,
              [chapterId]: {
                ...stats,
                attempts: stats.attempts + 1,
                correct: stats.correct + (correct ? 1 : 0),
                lastStudied: todayKey(),
              },
            },
            mistakes: correct
              ? s.mistakes
              : [
                  ...s.mistakes.slice(-99),
                  { date: todayKey(), chapterId, concept, prompt, kind: mode },
                ],
          };
        });
        get().awardXp(
          correct ? XP_REWARDS.quizCorrect : XP_REWARDS.quizIncorrect
        );
      },

      recordSession: ({ chapterId, mode, correct, total, seconds }) => {
        set((s) => ({
          attempts: [
            ...s.attempts.slice(-199),
            { date: todayKey(), chapterId, mode, correct, total, seconds },
          ],
          timedSessions:
            mode === "timed" ? s.timedSessions + 1 : s.timedSessions,
          perfectQuizzes:
            total >= 8 && correct === total
              ? s.perfectQuizzes + 1
              : s.perfectQuizzes,
        }));
        if (mode === "timed") get().awardXp(XP_REWARDS.timedSessionCompleted);
        else if (mode === "challenge")
          get().awardXp(XP_REWARDS.challengeCompleted);
        checkAchievements(set, get);
      },

      completeExample: (chapterId, exampleId) => {
        set((s) => {
          const stats = s.chapterStats[chapterId] ?? emptyStats();
          if (stats.examplesCompleted.includes(exampleId)) return {};
          return {
            chapterStats: {
              ...s.chapterStats,
              [chapterId]: {
                ...stats,
                examplesCompleted: [...stats.examplesCompleted, exampleId],
                lastStudied: todayKey(),
              },
            },
          };
        });
        get().awardXp(XP_REWARDS.exampleCompleted);
      },

      completeDerivation: (chapterId, derivationId) => {
        set((s) => {
          const stats = s.chapterStats[chapterId] ?? emptyStats();
          if (stats.derivationsCompleted.includes(derivationId)) return {};
          return {
            chapterStats: {
              ...s.chapterStats,
              [chapterId]: {
                ...stats,
                derivationsCompleted: [
                  ...stats.derivationsCompleted,
                  derivationId,
                ],
                lastStudied: todayKey(),
              },
            },
          };
        });
        get().awardXp(XP_REWARDS.derivationCompleted);
      },

      markSummaryRead: (chapterId, level) => {
        const stats = get().chapterStats[chapterId] ?? emptyStats();
        if (stats.summariesRead.includes(level)) return;
        set((s) => ({
          chapterStats: {
            ...s.chapterStats,
            [chapterId]: {
              ...(s.chapterStats[chapterId] ?? emptyStats()),
              summariesRead: [...stats.summariesRead, level],
              lastStudied: todayKey(),
            },
          },
        }));
        get().awardXp(XP_REWARDS.chapterSummaryRead);
      },

      registerUpload: () => {
        set((s) => ({ uploadsProcessed: s.uploadsProcessed + 1 }));
        get().awardXp(XP_REWARDS.uploadProcessed);
      },

      addCustomChapter: (c) =>
        set((s) => ({
          customChapters: [...s.customChapters.filter((x) => x.id !== c.id), c],
        })),

      removeCustomChapter: (id) =>
        set((s) => ({
          customChapters: s.customChapters.filter((x) => x.id !== id),
        })),

      addTutorNote: (note) =>
        set((s) => ({ tutorNotes: [...s.tutorNotes.slice(-19), note] })),

      clearRecentUnlock: () => set({ recentUnlock: null }),

      resetAll: () =>
        set({
          xp: 0,
          streak: 0,
          bestStreak: 0,
          lastStudyDate: null,
          achievements: [],
          recentUnlock: null,
          flashcardsReviewed: 0,
          quizAnswered: 0,
          quizCorrect: 0,
          timedSessions: 0,
          uploadsProcessed: 0,
          perfectQuizzes: 0,
          chaptersVisited: [],
          chapterStats: {},
          attempts: [],
          mistakes: [],
          activity: {},
          srs: {},
          tutorNotes: [],
        }),
    }),
    {
      name: "quantum-leap-progress",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

function checkAchievements(
  set: (fn: (s: ProgressState) => Partial<ProgressState>) => void,
  get: () => ProgressState
) {
  const s = get();
  const masteredChapters = Object.keys(s.chapterStats).filter(
    (id) => masteryFor(s, id) >= 0.8
  ).length;
  const snapshot: AchievementCheckState = {
    totalXp: s.xp,
    streak: s.streak,
    flashcardsReviewed: s.flashcardsReviewed,
    quizAnswered: s.quizAnswered,
    quizCorrect: s.quizCorrect,
    examplesCompleted: Object.values(s.chapterStats).reduce(
      (n, c) => n + c.examplesCompleted.length,
      0
    ),
    derivationsCompleted: Object.values(s.chapterStats).reduce(
      (n, c) => n + c.derivationsCompleted.length,
      0
    ),
    timedSessions: s.timedSessions,
    uploadsProcessed: s.uploadsProcessed,
    chaptersVisited: s.chaptersVisited,
    masteredChapters,
    perfectQuizzes: s.perfectQuizzes,
  };
  const newly = ACHIEVEMENTS.filter(
    (a) => !s.achievements.includes(a.id) && a.check(snapshot)
  );
  if (newly.length > 0) {
    set((st) => ({
      achievements: [...st.achievements, ...newly.map((a) => a.id)],
      recentUnlock: newly[newly.length - 1].id,
    }));
  }
}

/** Mastery 0-1: accuracy weighted by coverage (needs ~15 attempts for full weight) */
export function masteryFor(
  s: Pick<ProgressState, "chapterStats">,
  chapterId: string
): number {
  const st = s.chapterStats[chapterId];
  if (!st || st.attempts === 0) return 0;
  const accuracy = st.correct / st.attempts;
  const coverage = Math.min(1, st.attempts / 15);
  const confidence =
    st.confidenceCount > 0 ? st.confidenceSum / (2 * st.confidenceCount) : 0.5;
  return accuracy * 0.7 * coverage + confidence * 0.3 * coverage;
}

export type MasteryBand = "weak" | "developing" | "strong" | "untouched";

export function masteryBand(m: number, attempts: number): MasteryBand {
  if (attempts === 0) return "untouched";
  if (m < 0.45) return "weak";
  if (m < 0.75) return "developing";
  return "strong";
}
