"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Target } from "lucide-react";
import { chapters } from "@/lib/content";
import { useProgress, masteryFor, masteryBand } from "@/lib/store";
import { buildPlan, weeklyGoals } from "@/lib/planner";
import {
  AnimatedCard,
  Badge,
  Card,
  PageHeader,
  ProgressBar,
  SectionHeading,
} from "@/components/ui";

export default function PlannerPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const chapterStats = useProgress((s) => s.chapterStats);
  const srs = useProgress((s) => s.srs);

  const plan = useMemo(
    () => (mounted ? buildPlan({ chapters, chapterStats, srs }) : []),
    [mounted, chapterStats, srs]
  );
  const goals = useMemo(
    () => (mounted ? weeklyGoals({ chapters, chapterStats }) : []),
    [mounted, chapterStats]
  );

  const totalMinutes = plan.reduce((n, p) => n + p.minutes, 0);

  return (
    <div>
      <PageHeader
        title="Revision planner"
        subtitle="A prioritised plan rebuilt from your live profile: spaced-repetition due dates, weak bands, stale chapters and interleaving."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading
            title="Today's sessions"
            subtitle={
              plan.length
                ? `${plan.length} sessions · ~${totalMinutes} minutes total`
                : undefined
            }
          />
          <div className="flex flex-col gap-2">
            {plan.map((item, i) => (
              <AnimatedCard key={`${item.href}-${i}`} delay={i * 0.04} className="p-0">
                <Link
                  href={item.href}
                  className="flex items-center gap-4 p-4 transition-colors hover:bg-surface-sunken/60"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-sm font-bold text-accent">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">{item.activity}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-secondary">
                      <span className="font-medium text-ink">
                        {item.chapterTitle}
                      </span>{" "}
                      — {item.reason}
                    </p>
                  </div>
                  <Badge tone="neutral" className="shrink-0">
                    ~{item.minutes} min
                  </Badge>
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted" />
                </Link>
              </AnimatedCard>
            ))}
            {mounted && plan.length === 0 && (
              <Card className="p-6 text-sm text-ink-secondary">
                Do a first flashcard or quiz session and the planner will start
                prioritising for you.
              </Card>
            )}
          </div>

          <div className="mt-8">
            <SectionHeading title="Chapter roadmap" subtitle="Where each chapter stands" />
            <Card className="divide-y divide-line">
              {chapters.map((c) => {
                const m = mounted ? masteryFor({ chapterStats }, c.id) : 0;
                const attempts = chapterStats[c.id]?.attempts ?? 0;
                const band = masteryBand(m, attempts);
                const last = chapterStats[c.id]?.lastStudied;
                return (
                  <div key={c.id} className="flex items-center gap-4 p-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">
                        {c.number}. {c.title}
                      </p>
                      <p className="text-xs text-ink-muted">
                        {last ? `Last studied ${last}` : "Not started"} ·{" "}
                        {attempts} attempts
                      </p>
                    </div>
                    <div className="w-28">
                      <ProgressBar
                        value={m}
                        tone={
                          band === "strong"
                            ? "success"
                            : band === "weak"
                              ? "danger"
                              : "accent"
                        }
                      />
                    </div>
                    <Badge
                      tone={
                        band === "strong"
                          ? "success"
                          : band === "developing"
                            ? "warning"
                            : band === "weak"
                              ? "danger"
                              : "neutral"
                      }
                      className="w-24 justify-center"
                    >
                      {band === "untouched" ? "not started" : band}
                    </Badge>
                  </div>
                );
              })}
            </Card>
          </div>
        </div>

        <div>
          <SectionHeading title="This week's goals" />
          <Card className="divide-y divide-line">
            {goals.map((g, i) => (
              <div key={i} className="flex gap-3 p-4">
                <Target className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-ink-secondary">{g}</p>
              </div>
            ))}
            {mounted && goals.length === 0 && (
              <p className="p-4 text-sm text-ink-muted">
                Goals appear after your first sessions.
              </p>
            )}
          </Card>

          <Card className="mt-4 p-5">
            <div className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-accent" />
              <p className="text-sm font-semibold">How the planner thinks</p>
            </div>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-ink-secondary">
              <li>
                <span className="font-semibold text-ink">1. Due reviews first</span>{" "}
                — spaced repetition beats everything; forgetting is most
                reversible right before it happens.
              </li>
              <li>
                <span className="font-semibold text-ink">2. Weak bands next</span>{" "}
                — chapters under 45% accuracy get targeted Mastery Mode and a
                worked example rebuild.
              </li>
              <li>
                <span className="font-semibold text-ink">3. Stale topics</span>{" "}
                — anything untouched for 5+ days gets a refresh before decay
                sets in.
              </li>
              <li>
                <span className="font-semibold text-ink">4. Interleaving</span>{" "}
                — once 2+ chapters are active, mixed sessions train
                discrimination between look-alike concepts.
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
