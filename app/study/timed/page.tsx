"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Timer } from "lucide-react";
import { chapters } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { Button, Card, PageHeader } from "@/components/ui";
import { ChapterSelect } from "@/components/chapter-select";
import { QuizEngine } from "@/components/quiz-engine";
import { shuffle, cn } from "@/lib/utils";

const DURATIONS = [
  { label: "Sprint — 5 min", seconds: 300, questions: 6 },
  { label: "Section — 10 min", seconds: 600, questions: 10 },
  { label: "Paper practice — 15 min", seconds: 900, questions: 14 },
];

function TimedInner() {
  const params = useSearchParams();
  const customChapters = useProgress((s) => s.customChapters);
  const [chapterId, setChapterId] = useState(params.get("chapter") ?? "all");
  const [duration, setDuration] = useState(DURATIONS[1]);
  const [started, setStarted] = useState(false);

  const questions = useMemo(() => {
    if (!started) return [];
    const all = [...chapters, ...customChapters];
    const pool =
      chapterId === "all"
        ? all.flatMap((c) => c.quiz)
        : (all.find((c) => c.id === chapterId)?.quiz ?? []);
    return shuffle(pool).slice(0, duration.questions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  if (started) {
    return (
      <div>
        <PageHeader
          title="Timed practice"
          subtitle="The clock is running. Answer as many as you can — unanswered questions score zero."
        />
        <QuizEngine
          questions={questions}
          config={{
            mode: "timed",
            timeLimit: duration.seconds,
            sessionChapterId: chapterId,
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Timed practice"
        subtitle="Exam conditioning: fixed time, no pauses, results at the end. Choose your session and go."
      />
      <div className="mb-6">
        <ChapterSelect value={chapterId} onChange={setChapterId} />
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {DURATIONS.map((d) => (
          <button
            key={d.seconds}
            onClick={() => setDuration(d)}
            className={cn(
              "rounded-2xl border p-5 text-left transition-colors",
              duration.seconds === d.seconds
                ? "border-accent bg-accent/5"
                : "border-line bg-surface-raised hover:border-accent/40"
            )}
          >
            <Timer
              className={cn(
                "h-5 w-5",
                duration.seconds === d.seconds
                  ? "text-accent"
                  : "text-ink-muted"
              )}
            />
            <p className="mt-2 text-sm font-semibold">{d.label}</p>
            <p className="text-xs text-ink-muted">{d.questions} questions</p>
          </button>
        ))}
      </div>
      <Card className="mt-6 flex flex-col items-start gap-3 p-6">
        <p className="text-sm text-ink-secondary">
          Tip from the exam room: read the question stem twice, identify the
          topic, then commit. Around 60–90 seconds per mark is the pace H2
          papers expect.
        </p>
        <Button onClick={() => setStarted(true)}>
          <Timer className="h-4 w-4" /> Start {duration.label.toLowerCase()}
        </Button>
      </Card>
    </div>
  );
}

export default function TimedPage() {
  return (
    <Suspense>
      <TimedInner />
    </Suspense>
  );
}
