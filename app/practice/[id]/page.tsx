"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { findWorkedExample } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { EmptyState } from "@/components/ui";
import { StepPlayer } from "@/components/step-player";

export default function WorkedExamplePage() {
  const params = useParams<{ id: string }>();
  const customChapters = useProgress((s) => s.customChapters);
  const example =
    findWorkedExample(params.id) ??
    customChapters
      .flatMap((c) => c.workedExamples)
      .find((w) => w.id === params.id);

  if (!example) {
    return (
      <EmptyState
        title="Example not found"
        body="This worked example doesn't exist. Browse the full question bank instead."
        action={
          <Link href="/practice" className="text-sm font-medium text-accent">
            ← All worked solutions
          </Link>
        }
      />
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/practice"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" /> All worked solutions
      </Link>
      <StepPlayer example={example} />
    </div>
  );
}
