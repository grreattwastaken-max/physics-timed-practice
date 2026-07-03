/* ------------------------------------------------------------------ */
/*  Core content types for the knowledge base                          */
/* ------------------------------------------------------------------ */

export type Difficulty = "foundation" | "standard" | "challenging";

export interface Definition {
  term: string;
  definition: string;
}

export interface Misconception {
  myth: string;
  reality: string;
}

export interface FormulaEntry {
  id: string;
  name: string;
  /** Unicode-rendered formula, e.g. "F = Q₁Q₂ / 4πε₀r²" */
  expression: string;
  meaning: string;
  variables: { symbol: string; name: string; unit: string }[];
  conditions: string;
  applications: string[];
  commonMistakes: string[];
  chapterId: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  chapterId: string;
  tag: string;
}

export interface QuizQuestion {
  id: string;
  chapterId: string;
  type: "mcq" | "blank";
  prompt: string;
  /** for mcq */
  options?: string[];
  answerIndex?: number;
  /** for blank: acceptable answers (case-insensitive) */
  answers?: string[];
  explanation: string;
  difficulty: Difficulty;
  concept: string;
}

export interface SolutionStep {
  title: string;
  content: string;
  /** why this step is performed */
  why: string;
  /** optional checkpoint asked BEFORE revealing this step */
  checkpoint?: {
    question: string;
    options: string[];
    answerIndex: number;
    feedback: string;
  };
}

export interface WorkedExample {
  id: string;
  chapterId: string;
  title: string;
  question: string;
  topic: string;
  subtopic: string;
  difficulty: Difficulty;
  conceptsTested: string[];
  requiredFormulas: string[];
  /** what to recognise immediately */
  thinking: string;
  /** overall strategy */
  roadmap: string;
  givens: string[];
  unknowns: string[];
  steps: SolutionStep[];
  finalAnswer: string;
  hints: string[]; // progressively stronger
  markScheme: { point: string; mark: string }[];
  variants: {
    question: string;
    answer: string;
    hint: string;
  }[];
}

export interface DerivationStep {
  text: string;
  /** the key expression, shown blanked in guided mode */
  expression: string;
  explanation: string;
}

export interface Derivation {
  id: string;
  chapterId: string;
  title: string;
  goal: string;
  steps: DerivationStep[];
}

export interface ConceptNode {
  id: string;
  label: string;
  explanation: string;
  example: string;
  application: string;
  related: string[]; // ids
  /** 0-1 layout hints on the canvas */
  x: number;
  y: number;
  tier: "core" | "major" | "detail";
}

export interface ConceptEdge {
  from: string;
  to: string;
  label?: string;
}

/* ------------------------------------------------------------------ */
/*  Physics graphs — plotted as inline SVG from function samples       */
/* ------------------------------------------------------------------ */

export interface PhysicsCurve {
  label: string;
  /** sampled points, x in [0,1] domain units */
  points: { x: number; y: number }[];
  color: 1 | 2 | 3 | 4 | 5 | 6; // series token index
  dashed?: boolean;
}

export interface PhysicsGraphSpec {
  id: string;
  title: string;
  caption: string;
  xLabel: string;
  yLabel: string;
  curves: PhysicsCurve[];
  /** show y=0 axis line through the middle */
  zeroLine?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Chapter                                                            */
/* ------------------------------------------------------------------ */

export interface Chapter {
  id: string;
  number: number;
  title: string;
  syllabus: string;
  icon: string; // lucide icon name key
  color: 1 | 2 | 3 | 4 | 5 | 6;
  description: string;
  sections: string[];
  learningOutcomes: string[];
  quickReview: string[]; // 30-second overview bullets
  examReview: { heading: string; points: string[] }[]; // 3-minute summary
  deepDive: { heading: string; body: string }[]; // comprehensive
  keyIdeas: string[];
  definitions: Definition[];
  misconceptions: Misconception[];
  examTips: string[];
  formulas: FormulaEntry[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  workedExamples: WorkedExample[];
  derivations: Derivation[];
  conceptNodes: ConceptNode[];
  conceptEdges: ConceptEdge[];
  graphs: PhysicsGraphSpec[];
}

/* Custom chapters generated from user PDF uploads share the shape but
   are stored client-side. */
export type CustomChapter = Chapter & { custom: true; createdAt: number };
