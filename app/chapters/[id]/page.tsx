"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  ListChecks,
  Sigma,
  Timer,
  BookOpenCheck,
  AlertTriangle,
  Target,
  GraduationCap,
} from "lucide-react";
import { chapterById } from "@/lib/content";
import { useProgress } from "@/lib/store";
import {
  Badge,
  Card,
  EmptyState,
  PageHeader,
  SectionHeading,
} from "@/components/ui";
import { ChapterIcon } from "@/components/chapter-icon";
import { ConceptMap } from "@/components/concept-map";
import { PhysicsGraph } from "@/components/physics-graph";
import { cn } from "@/lib/utils";

type Tab =
  | "summaries"
  | "concepts"
  | "formulas"
  | "graphs"
  | "pitfalls"
  | "outcomes";

type SummaryLevel = "quick" | "exam" | "deep";

export default function ChapterPage() {
  const params = useParams<{ id: string }>();
  const customChapters = useProgress((s) => s.customChapters);
  const chapter =
    chapterById(params.id) ??
    customChapters.find((c) => c.id === params.id);

  const visitChapter = useProgress((s) => s.visitChapter);
  const markSummaryRead = useProgress((s) => s.markSummaryRead);
  const [tab, setTab] = useState<Tab>("summaries");
  const [level, setLevel] = useState<SummaryLevel>("exam");

  useEffect(() => {
    if (chapter) visitChapter(chapter.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter?.id]);

  const studyLinks = useMemo(
    () =>
      chapter
        ? [
            {
              href: `/study/flashcards?chapter=${chapter.id}`,
              label: "Flashcards",
              icon: Layers,
              desc: `${chapter.flashcards.length} cards with spaced repetition`,
            },
            {
              href: `/study/quiz?chapter=${chapter.id}`,
              label: "Concept check",
              icon: Target,
              desc: `${chapter.quiz.length} questions with explanations`,
            },
            {
              href: `/practice?chapter=${chapter.id}`,
              label: "Worked solutions",
              icon: ListChecks,
              desc: `${chapter.workedExamples.length} step-by-step examples`,
            },
            {
              href: `/derivations?chapter=${chapter.id}`,
              label: "Derivations",
              icon: Sigma,
              desc: `${chapter.derivations.length} guided derivations`,
            },
            {
              href: `/study/timed?chapter=${chapter.id}`,
              label: "Timed practice",
              icon: Timer,
              desc: "Exam-pressure session",
            },
            {
              href: `/cheatsheet?chapter=${chapter.id}`,
              label: "Cheat sheet",
              icon: GraduationCap,
              desc: "Condensed exam summary",
            },
          ]
        : [],
    [chapter]
  );

  if (!chapter) {
    return (
      <EmptyState
        title="Chapter not found"
        body="This chapter doesn't exist (or a custom upload was removed). Head back to the chapter list."
        action={
          <Link href="/chapters" className="text-sm font-medium text-accent">
            ← All chapters
          </Link>
        }
      />
    );
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "summaries", label: "Smart summaries" },
    { id: "concepts", label: "Concept map" },
    { id: "formulas", label: "Formulas" },
    { id: "graphs", label: "Key graphs" },
    { id: "pitfalls", label: "Misconceptions & tips" },
    { id: "outcomes", label: "Syllabus outcomes" },
  ];

  const summary =
    level === "quick" ? (
      <ul className="space-y-2.5">
        {chapter.quickReview.map((p, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04, duration: 0.2 }}
            className="formula flex gap-2.5 text-sm leading-relaxed"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {p}
          </motion.li>
        ))}
      </ul>
    ) : level === "exam" ? (
      <div className="space-y-5">
        {chapter.examReview.map((sec, i) => (
          <div key={i}>
            <h3 className="mb-2 text-sm font-semibold text-accent">
              {sec.heading}
            </h3>
            <ul className="space-y-2">
              {sec.points.map((p, j) => (
                <li
                  key={j}
                  className="formula flex gap-2.5 text-sm leading-relaxed text-ink-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-line" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ) : (
      <div className="space-y-6">
        {chapter.deepDive.map((sec, i) => (
          <div key={i}>
            <h3 className="mb-1.5 text-sm font-semibold">{sec.heading}</h3>
            <p className="max-w-[72ch] text-sm leading-relaxed text-ink-secondary">
              {sec.body}
            </p>
          </div>
        ))}
      </div>
    );

  return (
    <div>
      <div className="mb-6 flex items-start gap-4">
        <ChapterIcon icon={chapter.icon} color={chapter.color} size="lg" />
        <div>
          <PageHeader
            title={`${chapter.number}. ${chapter.title}`}
            subtitle={chapter.description}
          />
        </div>
      </div>

      {/* Study mode quick links */}
      <div className="mb-8 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {studyLinks.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group rounded-xl border border-line bg-surface-raised p-3 transition-colors hover:border-accent/50 hover:bg-accent/5"
            title={s.desc}
          >
            <s.icon className="h-4 w-4 text-accent" />
            <p className="mt-1.5 text-xs font-semibold group-hover:text-accent">
              {s.label}
            </p>
            <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-ink-muted">
              {s.desc}
            </p>
          </Link>
        ))}
      </div>

      {/* Tabs */}
      <div className="mb-5 flex gap-1 overflow-x-auto border-b border-line pb-px">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "whitespace-nowrap rounded-t-lg px-3.5 py-2 text-sm font-medium transition-colors",
              tab === t.id
                ? "border-b-2 border-accent text-accent"
                : "text-ink-secondary hover:text-ink"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "summaries" && (
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {(
              [
                ["quick", "Quick review", "30 seconds"],
                ["exam", "Exam review", "3 minutes"],
                ["deep", "Deep understanding", "full picture"],
              ] as [SummaryLevel, string, string][]
            ).map(([l, label, time]) => (
              <button
                key={l}
                onClick={() => {
                  setLevel(l);
                  markSummaryRead(chapter.id, l);
                }}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                  level === l
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-line text-ink-secondary hover:border-accent/40"
                )}
              >
                {label} <span className="opacity-60">· {time}</span>
              </button>
            ))}
          </div>
          <Card className="p-6">{summary}</Card>

          <div className="mt-6">
            <SectionHeading
              title="Key ideas"
              subtitle="The compressible core of the chapter"
            />
            <div className="grid gap-2 sm:grid-cols-2">
              {chapter.keyIdeas.map((k, i) => (
                <Card key={i} className="flex gap-3 p-4">
                  <BookOpenCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="formula text-sm leading-relaxed">{k}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <SectionHeading title="Definitions to learn word-perfect" />
            <Card className="divide-y divide-line">
              {chapter.definitions.map((d, i) => (
                <div key={i} className="p-4">
                  <p className="text-sm font-semibold">{d.term}</p>
                  <p className="formula mt-1 max-w-[75ch] text-sm leading-relaxed text-ink-secondary">
                    {d.definition}
                  </p>
                </div>
              ))}
            </Card>
          </div>
        </div>
      )}

      {tab === "concepts" && (
        <ConceptMap
          nodes={chapter.conceptNodes}
          edges={chapter.conceptEdges}
          title={`${chapter.title} — concept map`}
        />
      )}

      {tab === "formulas" && (
        <div className="grid gap-4 lg:grid-cols-2">
          {chapter.formulas.map((f) => (
            <Card key={f.id} className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold">{f.name}</p>
                <Badge tone="accent" className="formula shrink-0">
                  {f.expression}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {f.meaning}
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs">
                  <tbody>
                    {f.variables.map((v, i) => (
                      <tr key={i} className="border-t border-line">
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
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                <span className="font-semibold">Conditions: </span>
                {f.conditions}
              </p>
              {f.commonMistakes.length > 0 && (
                <p className="mt-2 flex gap-1.5 text-xs leading-relaxed text-danger">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {f.commonMistakes[0]}
                </p>
              )}
            </Card>
          ))}
        </div>
      )}

      {tab === "graphs" && (
        <div className="grid gap-4 lg:grid-cols-2">
          {chapter.graphs.map((g) => (
            <PhysicsGraph key={g.id} spec={g} />
          ))}
        </div>
      )}

      {tab === "pitfalls" && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Common misconceptions"
              subtitle="Myth vs reality — where marks are lost"
            />
            <div className="flex flex-col gap-3">
              {chapter.misconceptions.map((m, i) => (
                <Card key={i} className="p-4">
                  <p className="text-sm font-medium text-danger">
                    ✗ {m.myth}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                    <span className="font-semibold text-success">✓ </span>
                    {m.reality}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              title="Exam tips"
              subtitle="From the marking room"
            />
            <Card className="divide-y divide-line">
              {chapter.examTips.map((t, i) => (
                <div key={i} className="flex gap-3 p-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-warning/15 text-xs font-bold text-warning">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    {t}
                  </p>
                </div>
              ))}
            </Card>
          </div>
        </div>
      )}

      {tab === "outcomes" && (
        <Card className="p-6">
          <p className="mb-3 text-sm text-ink-secondary">
            Syllabus {chapter.syllabus} — candidates should be able to:
          </p>
          <ul className="space-y-2.5">
            {chapter.learningOutcomes.map((o, i) => (
              <li
                key={i}
                className="formula flex max-w-[80ch] gap-2.5 text-sm leading-relaxed"
              >
                <span className="font-semibold text-accent">
                  ({String.fromCharCode(97 + i)})
                </span>
                <span className="text-ink-secondary">{o}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
