"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, ThumbsDown, Minus, ThumbsUp } from "lucide-react";
import { Flashcard } from "@/lib/types";
import { useProgress } from "@/lib/store";
import { isDue } from "@/lib/srs";
import { Badge, Button, Card, ProgressBar } from "./ui";
import { shuffle } from "@/lib/utils";

export function FlashcardDeck({ cards }: { cards: Flashcard[] }) {
  const srs = useProgress((s) => s.srs);
  const reviewFlashcard = useProgress((s) => s.reviewFlashcard);

  // due cards first, then the rest — computed once per mount
  const ordered = useMemo(() => {
    const due = cards.filter((c) => isDue(srs[c.id]));
    const rest = cards.filter((c) => !isDue(srs[c.id]));
    return [...shuffle(due), ...shuffle(rest)];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(0);

  const card = ordered[index];
  const finished = index >= ordered.length;

  function rate(confidence: 0 | 1 | 2) {
    reviewFlashcard(card.id, card.chapterId, confidence);
    setDone((d) => d + 1);
    setFlipped(false);
    setIndex((i) => i + 1);
  }

  if (ordered.length === 0) return null;

  if (finished) {
    return (
      <Card className="flex flex-col items-center gap-4 p-10 text-center">
        <p className="text-2xl font-bold">Deck complete</p>
        <p className="text-sm text-ink-secondary">
          {done} cards reviewed. Your ratings feed the spaced-repetition
          scheduler — cards you found hard will return sooner.
        </p>
        <Button
          onClick={() => {
            setIndex(0);
            setDone(0);
          }}
          variant="secondary"
        >
          <RotateCcw className="h-4 w-4" /> Go again
        </Button>
      </Card>
    );
  }

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4">
      <div className="flex items-center justify-between text-sm text-ink-secondary">
        <span>
          Card {index + 1} of {ordered.length}
        </span>
        <Badge tone={isDue(srs[card.id]) ? "warning" : "neutral"}>
          {isDue(srs[card.id]) ? "Due for review" : "Ahead of schedule"}
        </Badge>
      </div>
      <ProgressBar value={index / ordered.length} />

      <div
        className="perspective-1000 h-72 cursor-pointer select-none sm:h-64"
        onClick={() => setFlipped((f) => !f)}
        role="button"
        aria-label={flipped ? "Show question" : "Reveal answer"}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${card.id}-${flipped}`}
            initial={{ rotateY: flipped ? -90 : 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: flipped ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <Card className="flex h-full flex-col p-6">
              <div className="mb-3 flex items-center justify-between">
                <Badge tone={flipped ? "success" : "accent"}>
                  {flipped ? "Answer" : card.tag}
                </Badge>
                <span className="text-xs text-ink-muted">
                  {flipped ? "click to see question" : "click to reveal"}
                </span>
              </div>
              <div className="flex flex-1 items-center justify-center overflow-y-auto px-2 text-center">
                <p
                  className={
                    flipped
                      ? "text-sm leading-relaxed text-ink-secondary sm:text-base"
                      : "text-base font-semibold leading-relaxed sm:text-lg"
                  }
                >
                  {flipped ? card.back : card.front}
                </p>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Button
          variant="secondary"
          disabled={!flipped}
          onClick={() => rate(0)}
          className="border-danger/30 text-danger"
        >
          <ThumbsDown className="h-4 w-4" /> Again
        </Button>
        <Button
          variant="secondary"
          disabled={!flipped}
          onClick={() => rate(1)}
          className="border-warning/30 text-warning"
        >
          <Minus className="h-4 w-4" /> Hard
        </Button>
        <Button
          variant="secondary"
          disabled={!flipped}
          onClick={() => rate(2)}
          className="border-success/30 text-success"
        >
          <ThumbsUp className="h-4 w-4" /> Easy
        </Button>
      </div>
      {!flipped && (
        <p className="text-center text-xs text-ink-muted">
          Metacognition first: decide how confident you are before flipping.
        </p>
      )}
    </div>
  );
}
