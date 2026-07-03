"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { chapters } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { PageHeader } from "@/components/ui";
import { ChapterSelect } from "@/components/chapter-select";
import { FlashcardDeck } from "@/components/flashcard-deck";

function FlashcardsInner() {
  const params = useSearchParams();
  const customChapters = useProgress((s) => s.customChapters);
  const [chapterId, setChapterId] = useState(params.get("chapter") ?? "all");

  const cards = useMemo(() => {
    const all = [...chapters, ...customChapters];
    const pool =
      chapterId === "all"
        ? all.flatMap((c) => c.flashcards)
        : (all.find((c) => c.id === chapterId)?.flashcards ?? []);
    return pool;
  }, [chapterId, customChapters]);

  return (
    <div>
      <PageHeader
        title="Flashcards"
        subtitle="Rate your confidence before flipping — the scheduler uses it to decide when each card comes back."
      />
      <div className="mb-6">
        <ChapterSelect value={chapterId} onChange={setChapterId} />
      </div>
      <FlashcardDeck key={chapterId} cards={cards} />
    </div>
  );
}

export default function FlashcardsPage() {
  return (
    <Suspense>
      <FlashcardsInner />
    </Suspense>
  );
}
