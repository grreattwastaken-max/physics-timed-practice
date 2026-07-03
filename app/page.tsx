"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Flame,
  Trophy,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Clock3,
} from "lucide-react";
import { chapters } from "@/lib/content";
import { useProgress, masteryFor, masteryBand } from "@/lib/store";
import { levelForXp, titleForLevel, ACHIEVEMENTS } from "@/lib/gamification";
import { buildPlan } from "@/lib/planner";
import {
  AnimatedCard,
  Badge,
  Card,
  PageHeader,
  ProgressBar,
  SectionHeading,
} from "@/components/ui";
import { ChapterIcon } from "@/components/chapter-icon";
import {
  MasteryRadar,
  AccuracyTrend,
  ActivityBars,
} from "@/components/charts";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const xp = useProgress((s) => s.xp);
  const streak = useProgress((s) => s.streak);
  const bestStreak = useProgress((s) => s.bestStreak);
  const chapterStats = useProgress((s) => s.chapterStats);
  const attempts = useProgress((s) => s.attempts);
  const activity = useProgress((s) => s.activity);
  const achievements = useProgress((s) => s.achievements);
  const quizAnswered = useProgress((s) => s.quizAnswered);
  const quizCorrect = useProgress((s) => s.quizCorrect);
  const srs = useProgress((s) => s.srs);
  const mistakes = useProgress((s) => s.mistakes);

  const { level, progress, intoLevel, needed } = levelForXp(xp);

  const radarData = useMemo(
    () =>
      chapters.map((c) => ({
        topic: c.title.length > 14 ? c.title.slice(0, 13) + "…" : c.title,
        mastery: Math.round(masteryFor({ chapterStats }, c.id) * 100),
      })),
    [chapterStats]
  );

  const trendData = useMemo(() => {
    return attempts.slice(-12).map((a, i) => ({
      label: `${i + 1}`,
      accuracy: a.total ? Math.round((a.correct / a.total) * 100) : 0,
    }));
  }, [attempts]);

  const activityData = useMemo(() => {
    const days: { label: string; xp: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86_400_000);
      const key = d.toISOString().slice(0, 10);
      days.push({
        label: d.toLocaleDateString("en-SG", { weekday: "short" }),
        xp: activity[key]?.xp ?? 0,
      });
    }
    return days;
  }, [activity]);

  const plan = useMemo(
    () => buildPlan({ chapters, chapterStats, srs }).slice(0, 4),
    [chapterStats, srs]
  );

  const insights = useMemo(() => {
    const out: { icon: "up" | "down" | "clock"; text: string }[] = [];
    const bands = chapters.map((c) => ({
      c,
      m: masteryFor({ chapterStats }, c.id),
      a: chapterStats[c.id]?.attempts ?? 0,
    }));
    const strong = bands.filter((b) => b.a > 0 && b.m >= 0.75);
    const weak = bands.filter((b) => b.a >= 4 && b.m < 0.45);
    if (strong.length)
      out.push({
        icon: "up",
        text: `Improving: ${strong.map((b) => b.c.title).join(", ")} — keep consolidating with timed practice.`,
      });
    if (weak.length)
      out.push({
        icon: "down",
        text: `Needs attention: ${weak.map((b) => b.c.title).join(", ")} — accuracy is below 45%. Mastery Mode targets these.`,
      });
    const recentMistakes = mistakes.slice(-5);
    if (recentMistakes.length >= 3) {
      const concepts = Array.from(
        new Set(recentMistakes.map((m) => m.concept))
      ).slice(0, 3);
      out.push({
        icon: "clock",
        text: `Recent slip-ups cluster around: ${concepts.join(", ")}. Review those flashcards next.`,
      });
    }
    if (out.length === 0)
      out.push({
        icon: "up",
        text: "Complete a few quizzes and flashcard sessions and personalised insights will appear here.",
      });
    return out;
  }, [chapterStats, mistakes]);

  if (!mounted) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-28 animate-pulse rounded-2xl bg-surface-sunken"
          />
        ))}
      </div>
    );
  }

  const overallAccuracy = quizAnswered
    ? Math.round((quizCorrect / quizAnswered) * 100)
    : 0;

  return (
    <div>
      <PageHeader
        title="Your study dashboard"
        subtitle="Track mastery across all seven chapters, follow your plan, and jump straight into the highest-value session."
      />

      {/* Stat row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatedCard className="p-5" delay={0}>
          <div className="flex items-center justify-between">
            <p className="text-sm text-ink-secondary">Level</p>
            <Badge tone="accent">{titleForLevel(level)}</Badge>
          </div>
          <p className="mt-1 text-3xl font-bold tabular-nums">{level}</p>
          <div className="mt-2">
            <ProgressBar value={progress} />
            <p className="mt-1 text-xs text-ink-muted">
              {intoLevel}/{needed} XP to level {level + 1}
            </p>
          </div>
        </AnimatedCard>
        <AnimatedCard className="p-5" delay={0.05}>
          <div className="flex items-center justify-between">
            <p className="text-sm text-ink-secondary">Streak</p>
            <Flame
              className={
                streak > 0 ? "h-4 w-4 text-warning" : "h-4 w-4 text-ink-muted"
              }
            />
          </div>
          <p className="mt-1 text-3xl font-bold tabular-nums">
            {streak}
            <span className="text-base font-medium text-ink-muted"> days</span>
          </p>
          <p className="mt-2 text-xs text-ink-muted">
            Best: {bestStreak} days. One session a day keeps it alive.
          </p>
        </AnimatedCard>
        <AnimatedCard className="p-5" delay={0.1}>
          <p className="text-sm text-ink-secondary">Questions answered</p>
          <p className="mt-1 text-3xl font-bold tabular-nums">{quizAnswered}</p>
          <p className="mt-2 text-xs text-ink-muted">
            {quizAnswered > 0
              ? `${overallAccuracy}% overall accuracy`
              : "Start a quiz to build your profile"}
          </p>
        </AnimatedCard>
        <AnimatedCard className="p-5" delay={0.15}>
          <div className="flex items-center justify-between">
            <p className="text-sm text-ink-secondary">Achievements</p>
            <Trophy className="h-4 w-4 text-warning" />
          </div>
          <p className="mt-1 text-3xl font-bold tabular-nums">
            {achievements.length}
            <span className="text-base font-medium text-ink-muted">
              /{ACHIEVEMENTS.length}
            </span>
          </p>
          <div className="mt-2">
            <ProgressBar
              value={achievements.length / ACHIEVEMENTS.length}
              tone="warning"
            />
          </div>
        </AnimatedCard>
      </div>

      {/* Charts */}
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <AnimatedCard className="p-5" delay={0.1}>
          <SectionHeading
            title="Topic mastery"
            subtitle="Accuracy × coverage per chapter"
          />
          <MasteryRadar data={radarData} />
        </AnimatedCard>
        <div className="flex flex-col gap-4">
          <AnimatedCard className="p-5" delay={0.15}>
            <SectionHeading
              title="Accuracy trend"
              subtitle="Your last 12 sessions"
            />
            {trendData.length >= 2 ? (
              <AccuracyTrend data={trendData} />
            ) : (
              <p className="py-10 text-center text-sm text-ink-muted">
                Finish two or more quiz sessions to see your trend line.
              </p>
            )}
          </AnimatedCard>
          <AnimatedCard className="p-5" delay={0.2}>
            <SectionHeading title="This week" subtitle="XP earned per day" />
            <ActivityBars data={activityData} />
          </AnimatedCard>
        </div>
      </div>

      {/* Plan + insights */}
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading
            title="Today's plan"
            subtitle="Prioritised by weakness, spacing and staleness"
            action={
              <Link
                href="/planner"
                className="text-sm font-medium text-accent hover:underline"
              >
                Full planner →
              </Link>
            }
          />
          <div className="flex flex-col gap-2">
            {plan.map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.05} className="p-0">
                <Link
                  href={item.href}
                  className="flex items-center gap-4 p-4 transition-colors hover:bg-surface-sunken/60"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-sm font-bold text-accent">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {item.activity}
                    </p>
                    <p className="truncate text-xs text-ink-secondary">
                      {item.chapterTitle} · {item.reason}
                    </p>
                  </div>
                  <Badge tone="neutral" className="shrink-0">
                    ~{item.minutes} min
                  </Badge>
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted" />
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading title="Learning insights" />
          <Card className="divide-y divide-line">
            {insights.map((ins, i) => (
              <div key={i} className="flex gap-3 p-4">
                {ins.icon === "up" && (
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                )}
                {ins.icon === "down" && (
                  <TrendingDown className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                )}
                {ins.icon === "clock" && (
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                )}
                <p className="text-sm leading-relaxed text-ink-secondary">
                  {ins.text}
                </p>
              </div>
            ))}
          </Card>
        </div>
      </div>

      {/* Chapter strip */}
      <div className="mt-8">
        <SectionHeading
          title="Chapters"
          subtitle="Strong / developing / weak at a glance"
          action={
            <Link
              href="/chapters"
              className="text-sm font-medium text-accent hover:underline"
            >
              All chapters →
            </Link>
          }
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {chapters.map((c, i) => {
            const m = masteryFor({ chapterStats }, c.id);
            const attemptsN = chapterStats[c.id]?.attempts ?? 0;
            const band = masteryBand(m, attemptsN);
            return (
              <AnimatedCard key={c.id} delay={i * 0.03} className="p-0">
                <Link
                  href={`/chapters/${c.id}`}
                  className="flex flex-col gap-3 p-4 transition-colors hover:bg-surface-sunken/60"
                >
                  <div className="flex items-center gap-3">
                    <ChapterIcon icon={c.icon} color={c.color} size="sm" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">
                        {c.number}. {c.title}
                      </p>
                      <p className="text-xs text-ink-muted">
                        {attemptsN} attempts
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
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
                      >
                        {band === "untouched" ? "not started" : band}
                      </Badge>
                      <span className="text-xs tabular-nums text-ink-muted">
                        {Math.round(m * 100)}%
                      </span>
                    </div>
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
                </Link>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
