"use client";

import Link from "next/link";
import {
  Layers,
  Brain,
  PenLine,
  Target,
  MessageSquareText,
  Shuffle,
  Timer,
  Crosshair,
} from "lucide-react";
import { AnimatedCard, PageHeader, Badge } from "@/components/ui";

const modes = [
  {
    href: "/study/flashcards",
    icon: Layers,
    title: "Flashcards",
    desc: "Front/back cards with confidence ratings. Spaced repetition schedules each card's return.",
    science: "Active recall + spacing",
    tone: "accent",
  },
  {
    href: "/study/recall",
    icon: Brain,
    title: "Active Recall",
    desc: "Answer before you peek. Questions first, model answers second — the order matters.",
    science: "Retrieval practice",
    tone: "accent",
  },
  {
    href: "/study/blanks",
    icon: PenLine,
    title: "Fill-in-the-Blank",
    desc: "Type the missing word in key definitions and laws. Precision builds exam wording.",
    science: "Cued recall",
    tone: "accent",
  },
  {
    href: "/study/quiz",
    icon: Target,
    title: "Concept Checks",
    desc: "Short conceptual quizzes with full explanations for every option.",
    science: "Testing effect",
    tone: "accent",
  },
  {
    href: "/study/recall?mode=explain",
    icon: MessageSquareText,
    title: "Explain-It-Yourself",
    desc: "Explain the concept out loud (or in writing) before comparing with the model explanation.",
    science: "Elaboration",
    tone: "violet",
  },
  {
    href: "/study/quiz?mode=challenge",
    icon: Shuffle,
    title: "Challenge Mode",
    desc: "Mixed-topic session across every chapter — like flipping through a real paper.",
    science: "Interleaving",
    tone: "violet",
  },
  {
    href: "/study/timed",
    icon: Timer,
    title: "Timed Practice",
    desc: "Exam-style pressure: a countdown, no pauses, results at the end.",
    science: "Exam conditioning",
    tone: "warning",
  },
  {
    href: "/study/quiz?mode=mastery",
    icon: Crosshair,
    title: "Mastery Mode",
    desc: "Automatically targets your weakest chapters and most-missed concepts.",
    science: "Adaptive practice",
    tone: "danger",
  },
] as const;

export default function StudyPage() {
  return (
    <div>
      <PageHeader
        title="Study modes"
        subtitle="Eight evidence-based ways to revise. Every mode feeds your mastery profile and earns XP."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {modes.map((m, i) => (
          <AnimatedCard key={m.href} delay={i * 0.04} className="p-0">
            <Link
              href={m.href}
              className="flex h-full flex-col p-5 transition-colors hover:bg-surface-sunken/60"
            >
              <m.icon className="h-6 w-6 text-accent" strokeWidth={1.8} />
              <h2 className="mt-3 text-base font-semibold">{m.title}</h2>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-secondary">
                {m.desc}
              </p>
              <Badge tone="neutral" className="mt-3 self-start">
                {m.science}
              </Badge>
            </Link>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}
