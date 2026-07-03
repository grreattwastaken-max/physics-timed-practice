import { Chapter } from "../types";
import { ch14 } from "./ch14";
import { ch15 } from "./ch15";
import { ch16 } from "./ch16";
import { ch17 } from "./ch17";
import { ch18 } from "./ch18";
import { ch19 } from "./ch19";
import { ch20 } from "./ch20";

export const chapters: Chapter[] = [ch14, ch15, ch16, ch17, ch18, ch19, ch20];

export const chapterById = (id: string): Chapter | undefined =>
  chapters.find((c) => c.id === id);

export const allFormulas = chapters.flatMap((c) => c.formulas);
export const allFlashcards = chapters.flatMap((c) => c.flashcards);
export const allQuiz = chapters.flatMap((c) => c.quiz);
export const allWorkedExamples = chapters.flatMap((c) => c.workedExamples);
export const allDerivations = chapters.flatMap((c) => c.derivations);

export const findWorkedExample = (id: string) =>
  allWorkedExamples.find((w) => w.id === id);
export const findDerivation = (id: string) =>
  allDerivations.find((d) => d.id === id);
