"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { chapters } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { PageHeader } from "@/components/ui";
import { ChapterSelect } from "@/components/chapter-select";
import { QuizEngine } from "@/components/quiz-engine";
import { shuffle } from "@/lib/utils";

function BlanksInner() {
  const params = useSearchParams();
  const customChapters = useProgress((s) => s.customChapters);
  const [chapterId, setChapterId] = useState(params.get("chapter") ?? "all");

  const questions = useMemo(() => {
    const all = [...chapters, ...customChapters];
    const pool =
      chapterId === "all"
        ? all.flatMap((c) => c.quiz)
        : (all.find((c) => c.id === chapterId)?.quiz ?? []);
    return shuffle(pool.filter((q) => q.type === "blank"));
  }, [chapterId, customChapters]);

  return (
    <div>
      <PageHeader
        title="Fill-in-the-blank"
        subtitle="Type the missing word in key laws and definitions. Exact wording is what definition marks are made of."
      />
      <div className="mb-6">
        <ChapterSelect value={chapterId} onChange={setChapterId} />
      </div>
      <QuizEngine
        key={chapterId}
        questions={questions}
        config={{ mode: "quiz", sessionChapterId: chapterId }}
      />
    </div>
  );
}

export default function BlanksPage() {
  return (
    <Suspense>
      <BlanksInner />
    </Suspense>
  );
}
