"use client";

import { chapters } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ChapterSelect({
  value,
  onChange,
  allowAll = true,
}: {
  value: string;
  onChange: (id: string) => void;
  allowAll?: boolean;
}) {
  const customChapters = useProgress((s) => s.customChapters);
  const all = [...chapters, ...customChapters];
  return (
    <div className="flex flex-wrap gap-2">
      {allowAll && (
        <button
          onClick={() => onChange("all")}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
            value === "all"
              ? "border-accent bg-accent/10 text-accent"
              : "border-line text-ink-secondary hover:border-accent/40"
          )}
        >
          All chapters
        </button>
      )}
      {all.map((c) => (
        <button
          key={c.id}
          onClick={() => onChange(c.id)}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
            value === c.id
              ? "border-accent bg-accent/10 text-accent"
              : "border-line text-ink-secondary hover:border-accent/40"
          )}
        >
          {c.number}. {c.title}
        </button>
      ))}
    </div>
  );
}
