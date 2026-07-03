"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { chapters } from "@/lib/content";
import { useProgress, masteryFor } from "@/lib/store";
import { Badge, PageHeader } from "@/components/ui";
import { ChapterSelect } from "@/components/chapter-select";
import { QuizEngine } from "@/components/quiz-engine";
import { shuffle } from "@/lib/utils";

function QuizInner() {
  const params = useSearchParams();
  const mode = (params.get("mode") ?? "quiz") as
    | "quiz"
    | "challenge"
    | "mastery";
  const customChapters = useProgress((s) => s.customChapters);
  const chapterStats = useProgress((s) => s.chapterStats);
  const mistakes = useProgress((s) => s.mistakes);
  const [chapterId, setChapterId] = useState(params.get("chapter") ?? "all");
  const [started, setStarted] = useState(false);

  const questions = useMemo(() => {
    const all = [...chapters, ...customChapters];
    if (mode === "challenge") {
      // interleaved: round-robin across chapters
      const perChapter = all.map((c) => shuffle(c.quiz).slice(0, 3));
      const mixed = shuffle(perChapter.flat());
      return mixed.slice(0, 12);
    }
    if (mode === "mastery") {
      // weakest chapters weighted; missed concepts prioritised
      const ranked = [...all].sort(
        (a, b) =>
          masteryFor({ chapterStats }, a.id) -
          masteryFor({ chapterStats }, b.id)
      );
      const weakest = ranked.slice(0, 3);
      const missedConcepts = new Set(mistakes.slice(-30).map((m) => m.concept));
      const pool = weakest.flatMap((c) => c.quiz);
      const prioritised = [
        ...pool.filter((q) => missedConcepts.has(q.concept)),
        ...shuffle(pool.filter((q) => !missedConcepts.has(q.concept))),
      ];
      return prioritised.slice(0, 10);
    }
    const pool =
      chapterId === "all"
        ? all.flatMap((c) => c.quiz)
        : (all.find((c) => c.id === chapterId)?.quiz ?? []);
    return shuffle(pool).slice(0, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterId, mode, started]);

  const titles = {
    quiz: {
      t: "Concept checks",
      s: "Ten questions with full explanations. Wrong answers feed your weakness profile.",
    },
    challenge: {
      t: "Challenge Mode",
      s: "Twelve interleaved questions across every chapter — discrimination practice, exactly like a real paper.",
    },
    mastery: {
      t: "Mastery Mode",
      s: "Targets your three weakest chapters and the concepts you've missed recently.",
    },
  } as const;

  return (
    <div>
      <PageHeader
        title={titles[mode].t}
        subtitle={titles[mode].s}
        action={mode !== "quiz" ? <Badge tone="violet">{mode}</Badge> : null}
      />
      {mode === "quiz" && (
        <div className="mb-6">
          <ChapterSelect value={chapterId} onChange={setChapterId} />
        </div>
      )}
      <QuizEngine
        key={`${mode}-${chapterId}`}
        questions={questions}
        config={{
          mode: mode === "quiz" ? "quiz" : mode,
          sessionChapterId: mode === "quiz" ? chapterId : "mixed",
        }}
      />
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense>
      <QuizInner />
    </Suspense>
  );
}
