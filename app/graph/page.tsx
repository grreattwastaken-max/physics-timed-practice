"use client";

import { useMemo, useState } from "react";
import { chapters } from "@/lib/content";
import { PageHeader } from "@/components/ui";
import { ConceptMap } from "@/components/concept-map";
import { ChapterSelect } from "@/components/chapter-select";
import { ConceptEdge, ConceptNode } from "@/lib/types";

/** Cross-chapter bridges connecting the whole subject. */
const bridges: ConceptEdge[] = [
  { from: "n14-field", to: "n17-field", label: "fields of force" },
  { from: "n14-uniform", to: "n17-compare", label: "E vs B deflection" },
  { from: "n15-current", to: "n17-bil", label: "currents feel forces" },
  { from: "n15-current", to: "n16-resistance", label: "circuit analysis" },
  { from: "n14-capacitor", to: "n16-rc", label: "RC timing" },
  { from: "n17-sources", to: "n18-flux", label: "B fields → flux" },
  { from: "n18-rotating", to: "n15-ac", label: "generates a.c." },
  { from: "n16-rc", to: "n20-decay", label: "same exponential" },
  { from: "n14-potential", to: "n19-pe", label: "eV energy scale" },
  { from: "n19-debroglie", to: "n17-circle", label: "electron beams" },
  { from: "n19-spectra", to: "n20-massenergy", label: "E = hf ↔ E = mc²" },
];

export default function GraphPage() {
  const [chapterId, setChapterId] = useState("all");

  const { nodes, edges } = useMemo(() => {
    if (chapterId !== "all") {
      const ch = chapters.find((c) => c.id === chapterId)!;
      return { nodes: ch.conceptNodes, edges: ch.conceptEdges };
    }
    // global view: chapter hub nodes + their CORE concepts only, in columns
    const shortTitles: Record<string, string> = {
      ch14: "14 · E-Fields",
      ch15: "15 · Currents",
      ch16: "16 · Circuits",
      ch17: "17 · EM Forces",
      ch18: "18 · Induction",
      ch19: "19 · Quantum",
      ch20: "20 · Nuclear",
    };
    const nodes: ConceptNode[] = [];
    const edges: ConceptEdge[] = [];
    chapters.forEach((c, i) => {
      const cx = (i + 0.5) / chapters.length;
      const hubId = `hub-${c.id}`;
      nodes.push({
        id: hubId,
        label: shortTitles[c.id] ?? c.title,
        tier: "core",
        x: cx,
        y: 0.1,
        explanation: c.description,
        example: c.sections.slice(0, 3).join(" · "),
        application: `${c.formulas.length} formulas, ${c.quiz.length} questions, ${c.workedExamples.length} worked examples.`,
        related: c.conceptNodes.filter((n) => n.tier === "core").map((n) => n.id),
      });
      const cores = c.conceptNodes.filter((n) => n.tier === "core").slice(0, 3);
      cores.forEach((n, j) => {
        nodes.push({
          ...n,
          tier: "major",
          x: cx + (i % 2 === 0 ? 0 : 0.012),
          y: 0.4 + j * 0.26,
        });
        edges.push({ from: hubId, to: n.id });
      });
    });
    const present = new Set(nodes.map((n) => n.id));
    bridges.forEach((b) => {
      if (present.has(b.from) && present.has(b.to)) edges.push(b);
    });
    // intra-chapter edges between included nodes
    chapters.forEach((c) => {
      c.conceptEdges.forEach((e) => {
        if (present.has(e.from) && present.has(e.to)) edges.push(e);
      });
    });
    return { nodes, edges };
  }, [chapterId]);

  return (
    <div>
      <PageHeader
        title="Knowledge graph"
        subtitle="Navigate the whole subject visually. In the all-chapters view, cross-links show where topics power each other — the connections examiners love to test."
      />
      <div className="mb-6">
        <ChapterSelect value={chapterId} onChange={setChapterId} />
      </div>
      <ConceptMap
        nodes={nodes}
        edges={edges}
        compact={chapterId === "all"}
        title={
          chapterId === "all"
            ? "H2 Physics — chapters 14–20 and their bridges"
            : undefined
        }
      />
    </div>
  );
}
