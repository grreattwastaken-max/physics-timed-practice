import { CustomChapter, Chapter } from "./types";

/** Convert the AI-ingested chapter JSON into a fully-formed CustomChapter:
 *  fills in ids, chapterId back-references and safe defaults. */
export function normalizeIngestedChapter(
  raw: Record<string, unknown>,
  existingCount: number
): CustomChapter {
  const id = `custom-${Date.now().toString(36)}`;
  const s = (v: unknown, fallback = ""): string =>
    typeof v === "string" ? v : fallback;
  const arr = <T>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

  const number = 100 + existingCount;

  const formulas = arr<Record<string, unknown>>(raw.formulas).map((f, i) => ({
    id: `${id}-f${i}`,
    chapterId: id,
    name: s(f.name, `Formula ${i + 1}`),
    expression: s(f.expression),
    meaning: s(f.meaning),
    variables: arr<{ symbol: string; name: string; unit: string }>(
      f.variables
    ).map((v) => ({
      symbol: s(v.symbol),
      name: s(v.name),
      unit: s(v.unit, "—"),
    })),
    conditions: s(f.conditions),
    applications: arr<string>(f.applications),
    commonMistakes: arr<string>(f.commonMistakes),
  }));

  const flashcards = arr<Record<string, unknown>>(raw.flashcards).map(
    (f, i) => ({
      id: `${id}-fc${i}`,
      chapterId: id,
      front: s(f.front),
      back: s(f.back),
      tag: s(f.tag, "Concept"),
    })
  );

  const quiz = arr<Record<string, unknown>>(raw.quiz)
    .map((q, i) => {
      const type = q.type === "blank" ? ("blank" as const) : ("mcq" as const);
      const options = arr<string>(q.options);
      const difficulty = ["foundation", "standard", "challenging"].includes(
        s(q.difficulty)
      )
        ? (s(q.difficulty) as "foundation" | "standard" | "challenging")
        : "standard";
      return {
        id: `${id}-q${i}`,
        chapterId: id,
        type,
        prompt: s(q.prompt),
        options: type === "mcq" ? options : undefined,
        answerIndex:
          type === "mcq" && typeof q.answerIndex === "number"
            ? q.answerIndex
            : type === "mcq"
              ? 0
              : undefined,
        answers: type === "blank" ? arr<string>(q.answers) : undefined,
        explanation: s(q.explanation),
        difficulty,
        concept: s(q.concept, "General"),
      };
    })
    .filter(
      (q) =>
        q.prompt &&
        (q.type === "blank"
          ? (q.answers?.length ?? 0) > 0
          : (q.options?.length ?? 0) >= 2)
    );

  const workedExamples = arr<Record<string, unknown>>(raw.workedExamples).map(
    (w, i) => ({
      id: `${id}-we${i}`,
      chapterId: id,
      title: s(w.title, `Worked example ${i + 1}`),
      question: s(w.question),
      topic: s(w.topic, s(raw.title, "Custom chapter")),
      subtopic: s(w.subtopic),
      difficulty: (["foundation", "standard", "challenging"].includes(
        s(w.difficulty)
      )
        ? s(w.difficulty)
        : "standard") as "foundation" | "standard" | "challenging",
      conceptsTested: arr<string>(w.conceptsTested),
      requiredFormulas: arr<string>(w.requiredFormulas),
      thinking: s(w.thinking),
      roadmap: s(w.roadmap),
      givens: arr<string>(w.givens),
      unknowns: arr<string>(w.unknowns),
      steps: arr<Record<string, unknown>>(w.steps).map((st) => ({
        title: s(st.title),
        content: s(st.content),
        why: s(st.why),
      })),
      finalAnswer: s(w.finalAnswer),
      hints: arr<string>(w.hints),
      markScheme: arr<Record<string, unknown>>(w.markScheme).map((m) => ({
        point: s(m.point),
        mark: s(m.mark, "B1"),
      })),
      variants: arr<Record<string, unknown>>(w.variants).map((v) => ({
        question: s(v.question),
        answer: s(v.answer),
        hint: s(v.hint),
      })),
    })
  );

  const derivations = arr<Record<string, unknown>>(raw.derivations).map(
    (d, i) => ({
      id: `${id}-d${i}`,
      chapterId: id,
      title: s(d.title, `Derivation ${i + 1}`),
      goal: s(d.goal),
      steps: arr<Record<string, unknown>>(d.steps).map((st) => ({
        text: s(st.text),
        expression: s(st.expression),
        explanation: s(st.explanation),
      })),
    })
  );

  // Simple auto-generated concept layout from key ideas
  const keyIdeas = arr<string>(raw.keyIdeas);
  const conceptNodes = keyIdeas.slice(0, 8).map((k, i) => ({
    id: `${id}-n${i}`,
    label: k.length > 34 ? k.slice(0, 32) + "…" : k,
    explanation: k,
    example: "",
    application: "",
    related: [] as string[],
    x: 0.12 + (i % 4) * 0.25,
    y: 0.18 + Math.floor(i / 4) * 0.45,
    tier: (i < 3 ? "core" : "major") as "core" | "major",
  }));
  const conceptEdges = conceptNodes.slice(1).map((n, i) => ({
    from: conceptNodes[i].id,
    to: n.id,
  }));

  const chapter: Chapter = {
    id,
    number,
    title: s(raw.title, "Uploaded chapter"),
    syllabus: "Custom upload",
    icon: "book",
    color: ((existingCount % 6) + 1) as Chapter["color"],
    description: s(raw.description),
    sections: arr<string>(raw.sections),
    learningOutcomes: arr<string>(raw.learningOutcomes),
    quickReview: arr<string>(raw.quickReview),
    examReview: arr<{ heading: string; points: string[] }>(raw.examReview).map(
      (e) => ({ heading: s(e.heading), points: arr<string>(e.points) })
    ),
    deepDive: arr<{ heading: string; body: string }>(raw.deepDive).map((e) => ({
      heading: s(e.heading),
      body: s(e.body),
    })),
    keyIdeas,
    definitions: arr<{ term: string; definition: string }>(raw.definitions).map(
      (d) => ({ term: s(d.term), definition: s(d.definition) })
    ),
    misconceptions: arr<{ myth: string; reality: string }>(
      raw.misconceptions
    ).map((m) => ({ myth: s(m.myth), reality: s(m.reality) })),
    examTips: arr<string>(raw.examTips),
    formulas,
    flashcards,
    quiz,
    workedExamples,
    derivations,
    conceptNodes,
    conceptEdges,
    graphs: [],
  };

  return { ...chapter, custom: true, createdAt: Date.now() };
}
