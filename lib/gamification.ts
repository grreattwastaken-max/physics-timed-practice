/* XP, levels and achievements */

export const XP_REWARDS = {
  flashcardReview: 5,
  quizCorrect: 10,
  quizIncorrect: 2, // effort still counts
  blankCorrect: 12,
  stepRevealed: 2,
  checkpointCorrect: 8,
  exampleCompleted: 30,
  derivationCompleted: 40,
  timedSessionCompleted: 50,
  challengeCompleted: 40,
  recallCompleted: 15,
  chapterSummaryRead: 20,
  uploadProcessed: 60,
} as const;

/** Level n requires cumulative XP of 120·n^1.5 */
export function levelForXp(xp: number): {
  level: number;
  intoLevel: number;
  needed: number;
  progress: number;
} {
  let level = 1;
  while (xpForLevel(level + 1) <= xp) level++;
  const base = xpForLevel(level);
  const next = xpForLevel(level + 1);
  const intoLevel = xp - base;
  const needed = next - base;
  return { level, intoLevel, needed, progress: intoLevel / needed };
}

export function xpForLevel(level: number): number {
  if (level <= 1) return 0;
  return Math.round(120 * Math.pow(level - 1, 1.5));
}

export const LEVEL_TITLES = [
  "Curious Observer",
  "Lab Apprentice",
  "Field Cadet",
  "Circuit Solver",
  "Flux Finder",
  "Quantum Novice",
  "Wave Wrangler",
  "Particle Tracker",
  "Field Theorist",
  "Physics Scholar",
  "Exam Slayer",
  "H2 Virtuoso",
  "Nobel Candidate",
] as const;

export function titleForLevel(level: number): string {
  return LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];
}

export interface AchievementDef {
  id: string;
  name: string;
  description: string;
  icon: string;
  /** predicate receives store snapshot */
  check: (s: AchievementCheckState) => boolean;
}

export interface AchievementCheckState {
  totalXp: number;
  streak: number;
  flashcardsReviewed: number;
  quizAnswered: number;
  quizCorrect: number;
  examplesCompleted: number;
  derivationsCompleted: number;
  timedSessions: number;
  uploadsProcessed: number;
  chaptersVisited: string[];
  masteredChapters: number;
  perfectQuizzes: number;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: "first-steps",
    name: "First Steps",
    description: "Earn your first XP",
    icon: "sparkles",
    check: (s) => s.totalXp > 0,
  },
  {
    id: "first-upload",
    name: "First Upload",
    description: "Process your first PDF into a chapter",
    icon: "upload",
    check: (s) => s.uploadsProcessed >= 1,
  },
  {
    id: "recall-rookie",
    name: "Recall Rookie",
    description: "Review 25 flashcards",
    icon: "layers",
    check: (s) => s.flashcardsReviewed >= 25,
  },
  {
    id: "recall-expert",
    name: "Recall Expert",
    description: "Review 150 flashcards",
    icon: "layers",
    check: (s) => s.flashcardsReviewed >= 150,
  },
  {
    id: "quiz-week",
    name: "Concept Checker",
    description: "Answer 50 quiz questions",
    icon: "check-circle",
    check: (s) => s.quizAnswered >= 50,
  },
  {
    id: "sharpshooter",
    name: "Sharpshooter",
    description: "Score 100% on a quiz of 8+ questions",
    icon: "target",
    check: (s) => s.perfectQuizzes >= 1,
  },
  {
    id: "worked-wonder",
    name: "Method Master",
    description: "Complete 5 worked examples",
    icon: "list-checks",
    check: (s) => s.examplesCompleted >= 5,
  },
  {
    id: "derivation-master",
    name: "Derivation Master",
    description: "Complete 3 guided derivations",
    icon: "sigma",
    check: (s) => s.derivationsCompleted >= 3,
  },
  {
    id: "streak-3",
    name: "Momentum",
    description: "Study 3 days in a row",
    icon: "flame",
    check: (s) => s.streak >= 3,
  },
  {
    id: "streak-7",
    name: "7-Day Streak",
    description: "Study 7 days in a row",
    icon: "flame",
    check: (s) => s.streak >= 7,
  },
  {
    id: "explorer",
    name: "Syllabus Explorer",
    description: "Visit all 7 chapters",
    icon: "compass",
    check: (s) => s.chaptersVisited.length >= 7,
  },
  {
    id: "timed-warrior",
    name: "Exam Conditions",
    description: "Finish 3 timed practice sessions",
    icon: "timer",
    check: (s) => s.timedSessions >= 3,
  },
  {
    id: "chapter-conqueror",
    name: "Chapter Conqueror",
    description: "Reach 80% mastery in any chapter",
    icon: "trophy",
    check: (s) => s.masteredChapters >= 1,
  },
  {
    id: "physics-scholar",
    name: "Physics Scholar",
    description: "Reach 80% mastery in 4 chapters",
    icon: "graduation-cap",
    check: (s) => s.masteredChapters >= 4,
  },
];
