"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sigma } from "lucide-react";
import { chapters } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { AnimatedCard, Badge, PageHeader } from "@/components/ui";
import { ChapterSelect } from "@/components/chapter-select";

function DerivationsInner() {
  const params = useSearchParams();
  const customChapters = useProgress((s) => s.customChapters);
  const chapterStats = useProgress((s) => s.chapterStats);
  const [chapterId, setChapterId] = useState(params.get("chapter") ?? "all");

  const derivations = useMemo(() => {
    const all = [...chapters, ...customChapters];
    const source =
      chapterId === "all" ? all : all.filter((c) => c.id === chapterId);
    return source.flatMap((c) =>
      c.derivations.map((d) => ({ ...d, chapterTitle: c.title }))
    );
  }, [chapterId, customChapters]);

  return (
    <div>
      <PageHeader
        title="Derivation trainer"
        subtitle="Guided fill-ins, from-memory reconstruction, or annotated read-through. Understanding each step beats memorising the result."
      />
      <div className="mb-6">
        <ChapterSelect value={chapterId} onChange={setChapterId} />
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {derivations.map((d, i) => {
          const done =
            chapterStats[d.chapterId]?.derivationsCompleted.includes(d.id) ??
            false;
          return (
            <AnimatedCard key={d.id} delay={i * 0.03} className="p-0">
              <Link
                href={`/derivations/${d.id}`}
                className="flex h-full flex-col p-5 transition-colors hover:bg-surface-sunken/60"
              >
                <div className="flex items-center gap-2">
                  <Sigma className="h-5 w-5 text-violet" />
                  <Badge tone="accent">{d.chapterTitle}</Badge>
                  {done && (
                    <CheckCircle2 className="ml-auto h-4 w-4 text-success" />
                  )}
                </div>
                <h2 className="mt-3 text-base font-semibold">{d.title}</h2>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-secondary">
                  {d.goal}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <Badge tone="neutral">{d.steps.length} steps</Badge>
                  <span className="flex items-center gap-1 text-sm font-medium text-accent">
                    Train it <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </AnimatedCard>
          );
        })}
      </div>
    </div>
  );
}

export default function DerivationsPage() {
  return (
    <Suspense>
      <DerivationsInner />
    </Suspense>
  );
}
