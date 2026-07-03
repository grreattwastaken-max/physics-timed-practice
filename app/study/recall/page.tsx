"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ArrowRight, Brain, MessageSquareText } from "lucide-react";
import { chapters } from "@/lib/content";
import { useProgress } from "@/lib/store";
import { XP_REWARDS } from "@/lib/gamification";
import { Badge, Button, Card, PageHeader, ProgressBar } from "@/components/ui";
import { ChapterSelect } from "@/components/chapter-select";
import { shuffle, cn } from "@/lib/utils";

/** Active recall / explain-it-yourself: prompt first, self-assess after. */
function RecallInner() {
  const params = useSearchParams();
  const explainMode = params.get("mode") === "explain";
  const customChapters = useProgress((s) => s.customChapters);
  const awardXp = useProgress((s) => s.awardXp);
  const recordAnswer = useProgress((s) => s.recordAnswer);

  const [chapterId, setChapterId] = useState(params.get("chapter") ?? "all");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [written, setWritten] = useState("");

  const items = useMemo(() => {
    const all = [...chapters, ...customChapters];
    const source =
      chapterId === "all" ? all : all.filter((c) => c.id === chapterId);
    // explain mode uses key ideas + deep-dive headings; recall uses flashcards
    if (explainMode) {
      return shuffle(
        source.flatMap((c) =>
          c.deepDive.map((d) => ({
            chapterId: c.id,
            prompt: `Explain: ${d.heading} (${c.title})`,
            answer: d.body,
            tag: "Explain it yourself",
          }))
        )
      ).slice(0, 8);
    }
    return shuffle(
      source.flatMap((c) =>
        c.flashcards.map((f) => ({
          chapterId: f.chapterId,
          prompt: f.front,
          answer: f.back,
          tag: f.tag,
        }))
      )
    ).slice(0, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterId, explainMode]);

  const item = items[index];
  const finished = index >= items.length;

  function selfAssess(gotIt: boolean) {
    recordAnswer({
      chapterId: item.chapterId,
      correct: gotIt,
      concept: item.tag,
      prompt: item.prompt,
      mode: explainMode ? "explain" : "recall",
    });
    awardXp(XP_REWARDS.recallCompleted);
    setRevealed(false);
    setWritten("");
    setIndex((i) => i + 1);
  }

  return (
    <div>
      <PageHeader
        title={explainMode ? "Explain-It-Yourself" : "Active recall"}
        subtitle={
          explainMode
            ? "Teach the concept back — in writing or out loud — before comparing with the model explanation. Elaboration cements understanding."
            : "The question comes first, the answer only after you've committed. Honest self-assessment feeds your mastery profile."
        }
      />
      <div className="mb-6">
        <ChapterSelect value={chapterId} onChange={setChapterId} />
      </div>

      {finished ? (
        <Card className="mx-auto max-w-lg p-8 text-center">
          <Brain className="mx-auto h-8 w-8 text-accent" />
          <p className="mt-3 text-xl font-bold">Session complete</p>
          <p className="mt-1 text-sm text-ink-secondary">
            {items.length} retrieval attempts logged. Retrieval strengthens
            memory far more than re-reading — come back tomorrow to compound it.
          </p>
          <Button
            className="mt-5"
            variant="secondary"
            onClick={() => {
              setIndex(0);
            }}
          >
            Another round
          </Button>
        </Card>
      ) : (
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 flex items-center justify-between text-sm text-ink-secondary">
            <span>
              {index + 1} of {items.length}
            </span>
            <Badge tone="accent">{item.tag}</Badge>
          </div>
          <ProgressBar value={index / items.length} className="mb-4" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="p-6">
                <p className="text-base font-semibold leading-relaxed">
                  {item.prompt}
                </p>

                {explainMode && !revealed && (
                  <textarea
                    value={written}
                    onChange={(e) => setWritten(e.target.value)}
                    rows={5}
                    placeholder="Write your explanation here — aim for the key idea, the reasoning, and one example…"
                    className="mt-4 w-full rounded-xl border border-line bg-surface p-3 text-sm leading-relaxed outline-none transition-colors focus:border-accent"
                  />
                )}

                {!revealed ? (
                  <Button className="mt-4" onClick={() => setRevealed(true)}>
                    <Eye className="h-4 w-4" />
                    {explainMode ? "Compare with model answer" : "Reveal answer"}
                  </Button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="overflow-hidden"
                  >
                    <div
                      className={cn(
                        "mt-4 grid gap-3",
                        explainMode && written ? "sm:grid-cols-2" : ""
                      )}
                    >
                      {explainMode && written && (
                        <div className="rounded-xl border border-line p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                            Your explanation
                          </p>
                          <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-ink-secondary">
                            {written}
                          </p>
                        </div>
                      )}
                      <div className="rounded-xl bg-surface-sunken p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-success">
                          Model answer
                        </p>
                        <p className="formula mt-1.5 text-sm leading-relaxed text-ink-secondary">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="text-xs text-ink-muted">
                        Honestly — did you have it?
                      </span>
                      <Button
                        variant="secondary"
                        className="border-danger/30 text-danger"
                        onClick={() => selfAssess(false)}
                      >
                        Not quite
                      </Button>
                      <Button
                        variant="secondary"
                        className="border-success/30 text-success"
                        onClick={() => selfAssess(true)}
                      >
                        Got it <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          </AnimatePresence>
          {explainMode && (
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-ink-muted">
              <MessageSquareText className="h-3.5 w-3.5" />
              Speaking your explanation aloud works too — writing is optional.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function RecallPage() {
  return (
    <Suspense>
      <RecallInner />
    </Suspense>
  );
}
