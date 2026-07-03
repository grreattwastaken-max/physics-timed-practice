"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { Derivation } from "@/lib/types";
import { useProgress } from "@/lib/store";
import { Badge, Button, Card } from "./ui";
import { cn } from "@/lib/utils";

type Mode = "guided" | "reconstruct" | "explain";

/** Derivation trainer: guided (fill the blanked expression), reconstruction
 *  (recall each step from memory), and explanation mode. */
export function DerivationPlayer({ derivation }: { derivation: Derivation }) {
  const completeDerivation = useProgress((s) => s.completeDerivation);
  const [mode, setMode] = useState<Mode>("guided");
  const [revealed, setRevealed] = useState<boolean[]>(
    derivation.steps.map(() => false)
  );
  const [done, setDone] = useState(false);

  const allRevealed = revealed.every(Boolean);

  function revealStep(i: number) {
    setRevealed((r) => {
      const next = [...r];
      next[i] = true;
      return next;
    });
  }

  function complete() {
    if (!done) {
      setDone(true);
      completeDerivation(derivation.chapterId, derivation.id);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Card className="p-6">
        <h2 className="text-lg font-semibold">{derivation.title}</h2>
        <p className="mt-1 text-sm text-ink-secondary">{derivation.goal}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(
            [
              ["guided", "Guided — fill in the steps"],
              ["reconstruct", "Reconstruction — recall from memory"],
              ["explain", "Explanation — read with commentary"],
            ] as [Mode, string][]
          ).map(([m, label]) => (
            <button
              key={m}
              onClick={() => {
                setMode(m);
                setRevealed(
                  derivation.steps.map(() => m === "explain")
                );
              }}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-150",
                mode === m
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-line text-ink-secondary hover:border-accent/50"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </Card>

      <div className="flex flex-col gap-3">
        {derivation.steps.map((step, i) => {
          const show = revealed[i];
          const priorRevealed = i === 0 || revealed[i - 1];
          return (
            <motion.div
              key={`${mode}-${i}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, delay: i * 0.03 }}
            >
              <Card className="p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet/10 text-sm font-bold text-violet">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    {/* Reconstruction hides the text too until revealed */}
                    <p className="text-sm leading-relaxed text-ink-secondary">
                      {mode === "reconstruct" && !show
                        ? "Recall this step: what comes next in the argument?"
                        : step.text}
                    </p>

                    {show ? (
                      <>
                        <p className="formula mt-2 rounded-lg bg-surface-sunken px-3 py-2 text-sm font-semibold">
                          {step.expression}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                          {step.explanation}
                        </p>
                      </>
                    ) : (
                      <div className="mt-2">
                        <div
                          className="flex h-10 items-center rounded-lg border border-dashed border-line px-3 text-xs text-ink-muted"
                          aria-hidden
                        >
                          {mode === "guided"
                            ? "■ ■ ■  expression hidden — write it down first"
                            : "■ ■ ■  step hidden"}
                        </div>
                        <Button
                          variant="secondary"
                          className="mt-2 px-3 py-1.5 text-xs"
                          disabled={!priorRevealed}
                          onClick={() => revealStep(i)}
                        >
                          {priorRevealed ? (
                            <>
                              <Eye className="h-3.5 w-3.5" /> Reveal
                            </>
                          ) : (
                            <>
                              <EyeOff className="h-3.5 w-3.5" /> Reveal previous
                              step first
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {done ? (
            <Card className="flex items-center gap-3 border-success/30 bg-success/5 p-5">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <div>
                <p className="text-sm font-semibold">Derivation complete</p>
                <p className="text-xs text-ink-secondary">
                  Try Reconstruction mode next time — rebuilding from memory is
                  the strongest form of practice.
                </p>
              </div>
              <Badge tone="success" className="ml-auto">
                +40 XP
              </Badge>
            </Card>
          ) : (
            <Button onClick={complete}>
              <CheckCircle2 className="h-4 w-4" /> Mark derivation complete
            </Button>
          )}
        </motion.div>
      )}
    </div>
  );
}
