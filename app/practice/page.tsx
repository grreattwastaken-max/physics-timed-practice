"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { chapters } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { AnimatedCard, Badge, PageHeader } from "@/components/ui";
import { ChapterSelect } from "@/components/chapter-select";

function PracticeInner() {
  const params = useSearchParams();
  const customChapters = useProgress((s) => s.customChapters);
  const chapterStats = useProgress((s) => s.chapterStats);
  const [chapterId, setChapterId] = useState(params.get("chapter") ?? "all");

  const examples = useMemo(() => {
    const all = [...chapters, ...customChapters];
    const source =
      chapterId === "all" ? all : all.filter((c) => c.id === chapterId);
    return source.flatMap((c) =>
      c.workedExamples.map((w) => ({ ...w, chapterTitle: c.title }))
    );
  }, [chapterId, customChapters]);

  return (
    <div>
      <PageHeader
        title="Worked solutions"
        subtitle="Every example converts into an interactive experience: try it, take hints, answer checkpoints, reveal steps one at a time — then attempt the variants."
      />
      <div className="mb-6">
        <ChapterSelect value={chapterId} onChange={setChapterId} />
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {examples.map((ex, i) => {
          const done =
            chapterStats[ex.chapterId]?.examplesCompleted.includes(ex.id) ??
            false;
          return (
            <AnimatedCard key={ex.id} delay={i * 0.03} className="p-0">
              <Link
                href={`/practice/${ex.id}`}
                className="flex h-full flex-col p-5 transition-colors hover:bg-surface-sunken/60"
              >
                <div className="flex items-center gap-2">
                  <Badge tone="accent">{ex.chapterTitle}</Badge>
                  <Badge
                    tone={
                      ex.difficulty === "challenging"
                        ? "danger"
                        : ex.difficulty === "standard"
                          ? "warning"
                          : "success"
                    }
                  >
                    {ex.difficulty}
                  </Badge>
                  {done && (
                    <CheckCircle2 className="ml-auto h-4 w-4 text-success" />
                  )}
                </div>
                <h2 className="mt-3 text-base font-semibold">{ex.title}</h2>
                <p className="mt-1 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-secondary">
                  {ex.question}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {ex.conceptsTested.slice(0, 3).map((c) => (
                    <Badge key={c} tone="neutral">
                      {c}
                    </Badge>
                  ))}
                </div>
                <span className="mt-3 flex items-center gap-1 text-sm font-medium text-accent">
                  {done ? "Revisit" : "Solve it"}{" "}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </AnimatedCard>
          );
        })}
      </div>
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense>
      <PracticeInner />
    </Suspense>
  );
}
