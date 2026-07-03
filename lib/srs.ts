/* Lightweight SM-2-style spaced repetition for flashcards */

export interface SrsCard {
  ease: number; // 1.3 – 3.0
  intervalDays: number;
  due: string; // ISO date
  reps: number;
}

export type Confidence = 0 | 1 | 2; // again / hard / easy

export function initialSrs(): SrsCard {
  return { ease: 2.3, intervalDays: 0, due: new Date().toISOString().slice(0, 10), reps: 0 };
}

export function review(card: SrsCard, confidence: Confidence): SrsCard {
  let { ease, intervalDays, reps } = card;
  if (confidence === 0) {
    // forgot — reset
    ease = Math.max(1.3, ease - 0.2);
    intervalDays = 0;
    reps = 0;
  } else {
    const factor = confidence === 2 ? 1 : 0.6;
    ease = Math.min(3.0, ease + (confidence === 2 ? 0.08 : -0.05));
    if (reps === 0) intervalDays = confidence === 2 ? 2 : 1;
    else intervalDays = Math.max(1, Math.round(intervalDays * ease * factor));
    reps += 1;
  }
  const due = new Date(Date.now() + intervalDays * 86_400_000)
    .toISOString()
    .slice(0, 10);
  return { ease, intervalDays, due, reps };
}

export function isDue(card: SrsCard | undefined): boolean {
  if (!card) return true;
  return card.due <= new Date().toISOString().slice(0, 10);
}
