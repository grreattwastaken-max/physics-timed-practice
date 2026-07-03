"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Printer } from "lucide-react";
import { chapters } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { Badge, Button, Card, PageHeader } from "@/components/ui";
import { ChapterSelect } from "@/components/chapter-select";

function CheatsheetInner() {
  const params = useSearchParams();
  const customChapters = useProgress((s) => s.customChapters);
  const [chapterId, setChapterId] = useState(
    params.get("chapter") ?? chapters[0].id
  );

  const chapter = useMemo(() => {
    const all = [...chapters, ...customChapters];
    return all.find((c) => c.id === chapterId) ?? chapters[0];
  }, [chapterId, customChapters]);

  return (
    <div>
      <div className="no-print">
        <PageHeader
          title="Exam cheat sheets"
          subtitle="A condensed, printable revision sheet per chapter: formulas, definitions, high-yield facts and the classic mistakes."
          action={
            <Button variant="secondary" onClick={() => window.print()}>
              <Printer className="h-4 w-4" /> Print / save PDF
            </Button>
          }
        />
        <div className="mb-6">
          <ChapterSelect
            value={chapterId}
            onChange={setChapterId}
            allowAll={false}
          />
        </div>
      </div>

      <div className="print-sheet">
        <h1 className="text-xl font-bold">
          {chapter.number}. {chapter.title} — exam sheet
        </h1>
        <p className="mt-0.5 text-xs text-ink-muted">{chapter.syllabus}</p>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <Card className="p-4">
            <h2 className="mb-2 text-sm font-bold text-accent">Formulas</h2>
            <table className="w-full text-xs">
              <tbody>
                {chapter.formulas.map((f) => (
                  <tr key={f.id} className="border-t border-line align-top">
                    <td className="formula py-1.5 pr-3 font-semibold whitespace-nowrap">
                      {f.expression}
                    </td>
                    <td className="py-1.5 text-ink-secondary">
                      {f.name} — {f.conditions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Card className="p-4">
            <h2 className="mb-2 text-sm font-bold text-accent">
              Definitions (word-perfect)
            </h2>
            <div className="space-y-2">
              {chapter.definitions.map((d, i) => (
                <p key={i} className="text-xs leading-relaxed">
                  <span className="font-semibold">{d.term}: </span>
                  <span className="formula text-ink-secondary">
                    {d.definition}
                  </span>
                </p>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <h2 className="mb-2 text-sm font-bold text-accent">
              High-yield facts
            </h2>
            <ul className="space-y-1.5">
              {chapter.quickReview.map((q, i) => (
                <li
                  key={i}
                  className="formula flex gap-2 text-xs leading-relaxed text-ink-secondary"
                >
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {q}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-4">
            <h2 className="mb-2 text-sm font-bold text-danger">
              Mistakes that cost marks
            </h2>
            <ul className="space-y-1.5">
              {chapter.misconceptions.slice(0, 6).map((m, i) => (
                <li key={i} className="text-xs leading-relaxed">
                  <span className="font-semibold text-danger">✗ {m.myth}</span>
                  <span className="text-ink-secondary"> → {m.reality}</span>
                </li>
              ))}
            </ul>
            <h2 className="mb-2 mt-4 text-sm font-bold text-warning">
              Examiner tips
            </h2>
            <ul className="space-y-1.5">
              {chapter.examTips.slice(0, 4).map((t, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-xs leading-relaxed text-ink-secondary"
                >
                  <Badge tone="warning" className="h-fit shrink-0">
                    {i + 1}
                  </Badge>
                  {t}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function CheatsheetPage() {
  return (
    <Suspense>
      <CheatsheetInner />
    </Suspense>
  );
}
