import { Chapter } from "./types";
import { ChapterStats } from "./store";
import { masteryFor } from "./store";
import { isDue, SrsCard } from "./srs";

export interface PlanItem {
  chapterId: string;
  chapterTitle: string;
  activity: string;
  href: string;
  reason: string;
  minutes: number;
  priority: number; // higher = more urgent
}

/** Build a prioritised revision plan from the learner profile. */
export function buildPlan(args: {
  chapters: Chapter[];
  chapterStats: Record<string, ChapterStats>;
  srs: Record<string, SrsCard>;
}): PlanItem[] {
  const { chapters, chapterStats, srs } = args;
  const items: PlanItem[] = [];

  for (const ch of chapters) {
    const stats = chapterStats[ch.id];
    const mastery = masteryFor({ chapterStats }, ch.id);
    const attempts = stats?.attempts ?? 0;

    // 1. Due flashcards (spaced repetition)
    const dueCards = ch.flashcards.filter((f) => isDue(srs[f.id])).length;
    if (dueCards > 0 && (stats?.flashcardsSeen ?? 0) > 0) {
      items.push({
        chapterId: ch.id,
        chapterTitle: ch.title,
        activity: `Review ${dueCards} due flashcards`,
        href: `/study/flashcards?chapter=${ch.id}`,
        reason: "Spaced repetition: these cards are scheduled for today.",
        minutes: Math.min(15, Math.ceil(dueCards * 0.7)),
        priority: 90 + Math.min(9, dueCards),
      });
    }

    // 2. Untouched chapters — start with the summary
    if (attempts === 0 && (stats?.summariesRead?.length ?? 0) === 0) {
      items.push({
        chapterId: ch.id,
        chapterTitle: ch.title,
        activity: "Read the Exam Review summary",
        href: `/chapters/${ch.id}`,
        reason: "Not started yet — build the foundation before practising.",
        minutes: 5,
        priority: 55,
      });
      continue;
    }

    // 3. Weak chapters — targeted practice
    if (attempts >= 4 && mastery < 0.45) {
      items.push({
        chapterId: ch.id,
        chapterTitle: ch.title,
        activity: "Mastery Mode: targeted questions",
        href: `/study/quiz?chapter=${ch.id}&mode=mastery`,
        reason: `Accuracy is low here (mastery ${(mastery * 100).toFixed(
          0
        )}%). Focused recall is the fastest fix.`,
        minutes: 12,
        priority: 100,
      });
      items.push({
        chapterId: ch.id,
        chapterTitle: ch.title,
        activity: "Walk one worked example step-by-step",
        href: `/practice?chapter=${ch.id}`,
        reason: "Method rebuild: see the reasoning before more solo attempts.",
        minutes: 10,
        priority: 84,
      });
    }

    // 4. Developing chapters — mixed quiz
    if (attempts >= 4 && mastery >= 0.45 && mastery < 0.75) {
      items.push({
        chapterId: ch.id,
        chapterTitle: ch.title,
        activity: "Concept check quiz",
        href: `/study/quiz?chapter=${ch.id}`,
        reason: `Solid foundation (mastery ${(mastery * 100).toFixed(
          0
        )}%) — push to strong with retrieval practice.`,
        minutes: 10,
        priority: 70,
      });
    }

    // 5. Strong chapters — maintain with interleaving and exam practice
    if (mastery >= 0.75) {
      items.push({
        chapterId: ch.id,
        chapterTitle: ch.title,
        activity: "Timed exam questions",
        href: `/study/timed?chapter=${ch.id}`,
        reason: "Strong topic — convert mastery into marks under time pressure.",
        minutes: 15,
        priority: 45,
      });
    }

    // 6. Stale chapters — revisit if not touched for 5+ days
    if (stats?.lastStudied) {
      const days = Math.round(
        (Date.now() - new Date(stats.lastStudied).getTime()) / 86_400_000
      );
      if (days >= 5) {
        items.push({
          chapterId: ch.id,
          chapterTitle: ch.title,
          activity: "Quick refresh: flashcards + 30-second summary",
          href: `/study/flashcards?chapter=${ch.id}`,
          reason: `Last studied ${days} days ago — refresh before forgetting sets in.`,
          minutes: 8,
          priority: 75 + Math.min(15, days),
        });
      }
    }
  }

  // Always offer one interleaved challenge if the user has practised 2+ chapters
  const practised = Object.entries(chapterStats).filter(
    ([, v]) => v.attempts > 0
  );
  if (practised.length >= 2) {
    items.push({
      chapterId: "mixed",
      chapterTitle: "All topics",
      activity: "Challenge Mode: mixed-topic session",
      href: "/study/quiz?mode=challenge",
      reason:
        "Interleaving strengthens discrimination between similar concepts and mirrors real exam papers.",
      minutes: 15,
      priority: 60,
    });
  }

  return items
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 8);
}

/** Weekly goals derived from current state */
export function weeklyGoals(args: {
  chapters: Chapter[];
  chapterStats: Record<string, ChapterStats>;
}): string[] {
  const { chapters, chapterStats } = args;
  const goals: string[] = [];
  const weak = chapters.filter((c) => {
    const m = masteryFor({ chapterStats }, c.id);
    const a = chapterStats[c.id]?.attempts ?? 0;
    return a >= 4 && m < 0.45;
  });
  const untouched = chapters.filter(
    (c) => (chapterStats[c.id]?.attempts ?? 0) === 0
  );
  if (weak.length)
    goals.push(
      `Lift ${weak
        .map((c) => c.title)
        .join(" and ")} out of the weak band with 3 mastery sessions each.`
    );
  if (untouched.length)
    goals.push(
      `Open ${untouched
        .slice(0, 2)
        .map((c) => c.title)
        .join(" and ")}: read the exam summary and try 8 quiz questions.`
    );
  goals.push("Keep the streak alive: at least one review session daily.");
  goals.push("Finish one timed session under full exam conditions.");
  return goals.slice(0, 4);
}
