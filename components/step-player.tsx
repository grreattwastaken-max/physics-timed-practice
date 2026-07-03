"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Lightbulb,
  ChevronDown,
  CheckCircle2,
  XCircle,
  ClipboardList,
  Shuffle,
} from "lucide-react";
import { WorkedExample } from "@/lib/types";
import { useProgress } from "@/lib/store";
import { XP_REWARDS } from "@/lib/gamification";
import { Badge, Button, Card } from "./ui";
import { cn } from "@/lib/utils";

/** Interactive reveal-mode player for worked examples:
 *  step-by-step reveal, progressive hints, checkpoint questions,
 *  mark scheme and practice variants. */
export function StepPlayer({ example }: { example: WorkedExample }) {
  const awardXp = useProgress((s) => s.awardXp);
  const completeExample = useProgress((s) => s.completeExample);
  const recordAnswer = useProgress((s) => s.recordAnswer);

  const [revealedSteps, setRevealedSteps] = useState(0);
  const [hintsShown, setHintsShown] = useState(0);
  const [checkpointAnswer, setCheckpointAnswer] = useState<number | null>(null);
  const [checkpointDone, setCheckpointDone] = useState(false);
  const [showMarkScheme, setShowMarkScheme] = useState(false);
  const [variantsOpen, setVariantsOpen] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  const nextStep = example.steps[revealedSteps];
  const pendingCheckpoint =
    nextStep?.checkpoint && !checkpointDone ? nextStep.checkpoint : null;
  const allRevealed = revealedSteps >= example.steps.length;

  function reveal() {
    if (pendingCheckpoint) return;
    setRevealedSteps((n) => n + 1);
    setCheckpointDone(false);
    setCheckpointAnswer(null);
    awardXp(XP_REWARDS.stepRevealed);
    if (revealedSteps + 1 >= example.steps.length && !completed) {
      setCompleted(true);
      completeExample(example.chapterId, example.id);
    }
  }

  function answerCheckpoint(i: number) {
    if (checkpointDone || !pendingCheckpoint) return;
    setCheckpointAnswer(i);
    setCheckpointDone(true);
    const correct = i === pendingCheckpoint.answerIndex;
    recordAnswer({
      chapterId: example.chapterId,
      correct,
      concept: example.subtopic,
      prompt: pendingCheckpoint.question,
      mode: "checkpoint",
    });
    if (correct) awardXp(XP_REWARDS.checkpointCorrect);
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Question */}
      <Card className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge tone="accent">{example.topic}</Badge>
          <Badge tone="neutral">{example.subtopic}</Badge>
          <Badge
            tone={
              example.difficulty === "challenging"
                ? "danger"
                : example.difficulty === "standard"
                  ? "warning"
                  : "success"
            }
          >
            {example.difficulty}
          </Badge>
        </div>
        <h2 className="text-lg font-semibold">{example.title}</h2>
        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-ink-secondary">
          {example.question}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-surface-sunken p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Given
            </p>
            <ul className="mt-1 space-y-0.5 text-sm text-ink-secondary">
              {example.givens.map((g, i) => (
                <li key={i} className="formula">
                  • {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-surface-sunken p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Find
            </p>
            <ul className="mt-1 space-y-0.5 text-sm text-ink-secondary">
              {example.unknowns.map((u, i) => (
                <li key={i}>• {u}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Thinking + roadmap */}
      <Card className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          Thinking process — recognise this first
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
          {example.thinking}
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Solution roadmap
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
          {example.roadmap}
        </p>
      </Card>

      {/* Hints */}
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="secondary"
          onClick={() => setHintsShown((h) => Math.min(h + 1, example.hints.length))}
          disabled={hintsShown >= example.hints.length}
        >
          <Lightbulb className="h-4 w-4" />
          {hintsShown === 0
            ? "Need a hint?"
            : `Stronger hint (${hintsShown}/${example.hints.length})`}
        </Button>
        <span className="text-xs text-ink-muted">
          Try the problem yourself before revealing steps.
        </span>
      </div>
      <AnimatePresence>
        {hintsShown > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {example.hints.slice(0, hintsShown).map((h, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-warning/25 bg-warning/5 px-4 py-2.5 text-sm text-ink-secondary"
                >
                  <span className="font-semibold text-warning">
                    Hint {i + 1}:
                  </span>{" "}
                  {h}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Steps */}
      <div className="flex flex-col gap-3">
        {example.steps.slice(0, revealedSteps).map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{step.title}</p>
                  <p className="formula mt-1.5 whitespace-pre-line text-sm leading-relaxed">
                    {step.content}
                  </p>
                  <p className="mt-2 rounded-lg bg-surface-sunken px-3 py-2 text-xs leading-relaxed text-ink-secondary">
                    <span className="font-semibold text-accent">Why: </span>
                    {step.why}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Checkpoint gate before next step */}
        {pendingCheckpoint && (
          <Card className="border-accent/30 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Checkpoint — what should happen next?
            </p>
            <p className="mt-1.5 text-sm font-medium">
              {pendingCheckpoint.question}
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {pendingCheckpoint.options.map((opt, i) => {
                const isAnswer = i === pendingCheckpoint.answerIndex;
                const isSelected = checkpointAnswer === i;
                return (
                  <button
                    key={i}
                    disabled={checkpointDone}
                    onClick={() => answerCheckpoint(i)}
                    className={cn(
                      "flex items-start gap-2 rounded-xl border px-4 py-2.5 text-left text-sm transition-colors duration-150",
                      !checkpointDone &&
                        "border-line hover:border-accent hover:bg-accent/5",
                      checkpointDone && isAnswer && "border-success bg-success/10",
                      checkpointDone && isSelected && !isAnswer &&
                        "border-danger bg-danger/10",
                      checkpointDone && !isSelected && !isAnswer && "opacity-60"
                    )}
                  >
                    {checkpointDone && isAnswer && (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    )}
                    {checkpointDone && isSelected && !isAnswer && (
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                    )}
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
            {checkpointDone && (
              <p className="mt-3 rounded-lg bg-surface-sunken px-3 py-2 text-xs leading-relaxed text-ink-secondary">
                {pendingCheckpoint.feedback}
              </p>
            )}
          </Card>
        )}

        {!allRevealed && (
          <Button
            onClick={reveal}
            disabled={!!pendingCheckpoint}
            className="self-start"
          >
            <Eye className="h-4 w-4" />
            {pendingCheckpoint
              ? "Answer the checkpoint to continue"
              : revealedSteps === 0
                ? "Reveal first step"
                : "Reveal next step"}
          </Button>
        )}
      </div>

      {/* Final answer + mark scheme + variants */}
      {allRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4"
        >
          <Card className="border-success/30 bg-success/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-success">
              Final answer
            </p>
            <p className="formula mt-1 text-sm font-semibold leading-relaxed">
              {example.finalAnswer}
            </p>
          </Card>

          <Card className="p-5">
            <button
              onClick={() => setShowMarkScheme((s) => !s)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <ClipboardList className="h-4 w-4 text-accent" />
                Mark scheme ({example.markScheme.length} marking points)
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  showMarkScheme && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {showMarkScheme && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <table className="mt-3 w-full text-sm">
                    <tbody>
                      {example.markScheme.map((m, i) => (
                        <tr key={i} className="border-t border-line">
                          <td className="py-2 pr-3 text-ink-secondary">
                            {m.point}
                          </td>
                          <td className="py-2 text-right">
                            <Badge tone="accent">{m.mark}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>

          <div>
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Shuffle className="h-4 w-4 text-violet" />
              Practice variants — same physics, new context
            </p>
            <div className="flex flex-col gap-2">
              {example.variants.map((v, i) => (
                <Card key={i} className="p-4">
                  <p className="text-sm leading-relaxed">{v.question}</p>
                  {variantsOpen === i ? (
                    <div className="mt-2 rounded-lg bg-surface-sunken px-3 py-2 text-sm text-ink-secondary">
                      <span className="font-semibold text-success">
                        Answer:{" "}
                      </span>
                      {v.answer}
                    </div>
                  ) : (
                    <div className="mt-2 flex gap-2">
                      <Button
                        variant="ghost"
                        className="px-2 py-1 text-xs"
                        onClick={() => setVariantsOpen(i)}
                      >
                        Show answer
                      </Button>
                      <span
                        className="self-center text-xs text-ink-muted"
                        title={v.hint}
                      >
                        Hint: {v.hint}
                      </span>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
