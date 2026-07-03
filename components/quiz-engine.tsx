"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Timer,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import { QuizQuestion } from "@/lib/types";
import { useProgress } from "@/lib/store";
import { Badge, Button, Card, ProgressBar } from "./ui";
import { cn, formatDuration } from "@/lib/utils";

export interface QuizConfig {
  mode: "quiz" | "timed" | "challenge" | "mastery" | "recall";
  /** seconds; only for timed mode */
  timeLimit?: number;
  sessionChapterId: string; // chapter to attribute the session to ("mixed" ok)
}

export function QuizEngine({
  questions,
  config,
}: {
  questions: QuizQuestion[];
  config: QuizConfig;
}) {
  const recordAnswer = useProgress((s) => s.recordAnswer);
  const recordSession = useProgress((s) => s.recordSession);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [typed, setTyped] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const sessionLogged = useRef(false);
  const answeredRef = useRef(0);
  const correctRef = useRef(0);

  const q = questions[index];
  const timeLimit = config.timeLimit ?? 0;
  const timeLeft = timeLimit - elapsed;

  useEffect(() => {
    if (finished) return;
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, [finished]);

  // timed mode: force finish at zero
  useEffect(() => {
    if (config.mode === "timed" && timeLimit > 0 && timeLeft <= 0 && !finished) {
      finish();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, finished]);

  function finish() {
    if (!sessionLogged.current) {
      sessionLogged.current = true;
      recordSession({
        chapterId: config.sessionChapterId,
        mode: config.mode,
        correct: correctRef.current,
        total: answeredRef.current,
        seconds: elapsed,
      });
    }
    setFinished(true);
  }

  function submit(choice?: number) {
    if (revealed || !q) return;
    let isCorrect = false;
    if (q.type === "mcq") {
      const c = choice ?? selected;
      if (c === null || c === undefined) return;
      setSelected(c);
      isCorrect = c === q.answerIndex;
    } else {
      const norm = typed.trim().toLowerCase();
      if (!norm) return;
      isCorrect = (q.answers ?? []).some((a) => a.toLowerCase() === norm);
    }
    answeredRef.current += 1;
    if (isCorrect) {
      correctRef.current += 1;
      setCorrectCount((c) => c + 1);
    }
    recordAnswer({
      chapterId: q.chapterId,
      correct: isCorrect,
      concept: q.concept,
      prompt: q.prompt,
      mode: config.mode,
    });
    setRevealed(true);
  }

  function next() {
    if (index + 1 >= questions.length) {
      finish();
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setTyped("");
      setRevealed(false);
    }
  }

  const accuracy = useMemo(
    () =>
      answeredRef.current === 0
        ? 0
        : Math.round((correctRef.current / answeredRef.current) * 100),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [finished, revealed]
  );

  if (questions.length === 0) {
    return (
      <Card className="p-8 text-center text-sm text-ink-secondary">
        No questions match this selection yet. Try another chapter or mode.
      </Card>
    );
  }

  if (finished) {
    const total = answeredRef.current;
    const score = correctRef.current;
    const pct = total ? Math.round((score / total) * 100) : 0;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Card className="mx-auto max-w-lg p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-ink-muted">
            Session complete
          </p>
          <p className="mt-2 text-5xl font-bold tabular-nums">
            {score}
            <span className="text-2xl text-ink-muted">/{total}</span>
          </p>
          <p className="mt-1 text-sm text-ink-secondary">
            {pct >= 80
              ? "Excellent — this is exam-ready accuracy."
              : pct >= 55
                ? "Solid. Review the explanations you missed, then go again."
                : "Good effort — the fastest gains come from re-attempting what you missed."}
          </p>
          <div className="mt-4">
            <ProgressBar
              value={total ? score / total : 0}
              tone={pct >= 80 ? "success" : pct >= 55 ? "accent" : "warning"}
            />
          </div>
          <div className="mt-3 text-xs text-ink-muted">
            Time: {formatDuration(elapsed)}
            {config.mode === "timed" && timeLimit > 0 && (
              <> of {formatDuration(timeLimit)}</>
            )}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            <Button variant="secondary" onClick={() => location.reload()}>
              <RotateCcw className="h-4 w-4" /> New session
            </Button>
            <Link href="/">
              <Button>Back to dashboard</Button>
            </Link>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-3 flex items-center justify-between gap-3 text-sm">
        <span className="text-ink-secondary">
          Question {index + 1} of {questions.length}
        </span>
        <div className="flex items-center gap-2">
          <Badge tone="accent">{q.concept}</Badge>
          <Badge
            tone={
              q.difficulty === "challenging"
                ? "danger"
                : q.difficulty === "standard"
                  ? "warning"
                  : "success"
            }
          >
            {q.difficulty}
          </Badge>
          {config.mode === "timed" && timeLimit > 0 && (
            <Badge tone={timeLeft < 30 ? "danger" : "neutral"}>
              <Timer className="h-3 w-3" /> {formatDuration(Math.max(0, timeLeft))}
            </Badge>
          )}
        </div>
      </div>
      <ProgressBar value={index / questions.length} className="mb-4" />

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="p-6">
            <p className="text-base font-medium leading-relaxed">{q.prompt}</p>

            {q.type === "mcq" ? (
              <div className="mt-5 flex flex-col gap-2">
                {q.options!.map((opt, i) => {
                  const isAnswer = i === q.answerIndex;
                  const isSelected = i === selected;
                  return (
                    <button
                      key={i}
                      disabled={revealed}
                      onClick={() => submit(i)}
                      className={cn(
                        "flex items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors duration-150",
                        !revealed &&
                          "border-line hover:border-accent hover:bg-accent/5",
                        revealed && isAnswer &&
                          "border-success bg-success/10",
                        revealed && isSelected && !isAnswer &&
                          "border-danger bg-danger/10",
                        revealed && !isSelected && !isAnswer && "border-line opacity-60"
                      )}
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-xs font-semibold">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="formula">{opt}</span>
                      {revealed && isAnswer && (
                        <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-success" />
                      )}
                      {revealed && isSelected && !isAnswer && (
                        <XCircle className="ml-auto h-5 w-5 shrink-0 text-danger" />
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="mt-5">
                <input
                  value={typed}
                  onChange={(e) => setTyped(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submit()}
                  disabled={revealed}
                  placeholder="Type the missing word…"
                  className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                />
                {!revealed && (
                  <Button className="mt-3" onClick={() => submit()}>
                    Check answer
                  </Button>
                )}
                {revealed && (
                  <div className="mt-3 flex items-center gap-2 text-sm">
                    {(q.answers ?? []).some(
                      (a) => a.toLowerCase() === typed.trim().toLowerCase()
                    ) ? (
                      <>
                        <CheckCircle2 className="h-5 w-5 text-success" />
                        <span className="font-medium text-success">Correct</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-danger" />
                        <span>
                          Answer:{" "}
                          <strong className="text-success">
                            {q.answers?.[0]}
                          </strong>
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            <AnimatePresence>
              {revealed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 rounded-xl bg-surface-sunken p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Why
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                      {q.explanation}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button onClick={next}>
                      {index + 1 >= questions.length ? "Finish" : "Next"}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      </AnimatePresence>

      <p className="mt-3 text-center text-xs text-ink-muted">
        Score so far: {correctCount}/{answeredRef.current || 0} ·{" "}
        {answeredRef.current ? `${accuracy}%` : "—"}
      </p>
    </div>
  );
}
