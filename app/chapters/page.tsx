"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Upload } from "lucide-react";
import { chapters } from "@/lib/content";
import { useProgress, masteryFor } from "@/lib/store";
import { AnimatedCard, Badge, PageHeader, ProgressBar } from "@/components/ui";
import { ChapterIcon } from "@/components/chapter-icon";

export default function ChaptersPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const chapterStats = useProgress((s) => s.chapterStats);
  const customChapters = useProgress((s) => s.customChapters);

  const all = [...chapters, ...(mounted ? customChapters : [])];

  return (
    <div>
      <PageHeader
        title="Chapters"
        subtitle="Seven chapters of H2 Physics 9478 built from your lecture notes — plus any chapters you upload yourself."
        action={
          <Link
            href="/upload"
            className="flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            <Upload className="h-4 w-4" /> Upload notes
          </Link>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {all.map((c, i) => {
          const m = mounted ? masteryFor({ chapterStats }, c.id) : 0;
          return (
            <AnimatedCard key={c.id} delay={i * 0.04} className="p-0">
              <Link
                href={`/chapters/${c.id}`}
                className="flex h-full flex-col p-5 transition-colors hover:bg-surface-sunken/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <ChapterIcon icon={c.icon} color={c.color} size="lg" />
                  {"custom" in c && (
                    <Badge tone="violet">your upload</Badge>
                  )}
                </div>
                <h2 className="mt-4 text-base font-semibold">
                  {c.number}. {c.title}
                </h2>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-secondary">
                  {c.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <Badge tone="neutral">{c.formulas.length} formulas</Badge>
                  <Badge tone="neutral">{c.flashcards.length} cards</Badge>
                  <Badge tone="neutral">{c.quiz.length} questions</Badge>
                  <Badge tone="neutral">
                    {c.workedExamples.length} worked examples
                  </Badge>
                </div>
                <div className="mt-4">
                  <div className="mb-1 flex items-center justify-between text-xs text-ink-muted">
                    <span>Mastery</span>
                    <span className="tabular-nums">{Math.round(m * 100)}%</span>
                  </div>
                  <ProgressBar value={m} />
                </div>
                <span className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                  Open chapter <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </AnimatedCard>
          );
        })}
      </div>
    </div>
  );
}
