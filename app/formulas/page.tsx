"use client";

import { useMemo, useState } from "react";
import { Search, AlertTriangle } from "lucide-react";
import { chapters } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { AnimatedCard, Badge, PageHeader } from "@/components/ui";
import { ChapterSelect } from "@/components/chapter-select";

export default function FormulasPage() {
  const customChapters = useProgress((s) => s.customChapters);
  const [query, setQuery] = useState("");
  const [chapterId, setChapterId] = useState("all");

  const formulas = useMemo(() => {
    const all = [...chapters, ...customChapters];
    const source =
      chapterId === "all" ? all : all.filter((c) => c.id === chapterId);
    const list = source.flatMap((c) =>
      c.formulas.map((f) => ({ ...f, chapterTitle: c.title }))
    );
    if (!query.trim()) return list;
    const q = query.toLowerCase();
    return list.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.expression.toLowerCase().includes(q) ||
        f.meaning.toLowerCase().includes(q) ||
        f.applications.some((a) => a.toLowerCase().includes(q)) ||
        f.variables.some((v) => v.name.toLowerCase().includes(q))
    );
  }, [query, chapterId, customChapters]);

  return (
    <div>
      <PageHeader
        title="Formula Hub"
        subtitle={`${formulas.length} formulas extracted from your notes — searchable by name, symbol, meaning or application.`}
      />
      <div className="mb-4 flex items-center gap-2 rounded-xl border border-line bg-surface-raised px-3">
        <Search className="h-4 w-4 text-ink-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search: “capacitor”, “flux”, “half-life”, “E = hf”…"
          className="w-full bg-transparent py-2.5 text-sm outline-none"
          aria-label="Search formulas"
        />
      </div>
      <div className="mb-6">
        <ChapterSelect value={chapterId} onChange={setChapterId} />
      </div>

      {formulas.length === 0 ? (
        <p className="py-12 text-center text-sm text-ink-muted">
          Nothing matches “{query}”. Try a symbol (“λ”), a unit (“tesla”) or a
          topic word (“decay”).
        </p>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {formulas.map((f, i) => (
            <AnimatedCard key={f.id} delay={Math.min(i * 0.02, 0.3)} className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{f.name}</p>
                  <Badge tone="neutral" className="mt-1">
                    {f.chapterTitle}
                  </Badge>
                </div>
                <p className="formula shrink-0 rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent">
                  {f.expression}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                {f.meaning}
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs">
                  <tbody>
                    {f.variables.map((v, j) => (
                      <tr key={j} className="border-t border-line">
                        <td className="formula py-1.5 pr-2 font-semibold">
                          {v.symbol}
                        </td>
                        <td className="py-1.5 pr-2 text-ink-secondary">
                          {v.name}
                        </td>
                        <td className="formula py-1.5 text-right text-ink-muted">
                          {v.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-3 grid gap-2 text-xs sm:grid-cols-2">
                <div className="rounded-lg bg-surface-sunken p-2.5">
                  <p className="font-semibold text-ink">Use when</p>
                  <p className="mt-0.5 leading-relaxed text-ink-secondary">
                    {f.conditions}
                  </p>
                </div>
                <div className="rounded-lg bg-surface-sunken p-2.5">
                  <p className="font-semibold text-ink">Applications</p>
                  <ul className="mt-0.5 space-y-0.5 leading-relaxed text-ink-secondary">
                    {f.applications.map((a, j) => (
                      <li key={j}>• {a}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {f.commonMistakes.length > 0 && (
                <div className="mt-2.5 flex items-start gap-1.5 text-xs text-danger">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span className="leading-relaxed">
                    {f.commonMistakes.join(" · ")}
                  </span>
                </div>
              )}
            </AnimatedCard>
          ))}
        </div>
      )}
    </div>
  );
}
