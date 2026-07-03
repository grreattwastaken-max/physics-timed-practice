"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { findDerivation } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { EmptyState } from "@/components/ui";
import { DerivationPlayer } from "@/components/derivation-player";

export default function DerivationPage() {
  const params = useParams<{ id: string }>();
  const customChapters = useProgress((s) => s.customChapters);
  const derivation =
    findDerivation(params.id) ??
    customChapters
      .flatMap((c) => c.derivations)
      .find((d) => d.id === params.id);

  if (!derivation) {
    return (
      <EmptyState
        title="Derivation not found"
        body="This derivation doesn't exist. Browse the trainer instead."
        action={
          <Link href="/derivations" className="text-sm font-medium text-accent">
            ← All derivations
          </Link>
        }
      />
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/derivations"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" /> All derivations
      </Link>
      <DerivationPlayer derivation={derivation} />
    </div>
  );
}
