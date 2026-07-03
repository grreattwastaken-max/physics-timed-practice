"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ConceptNode, ConceptEdge } from "@/lib/types";
import { Card, Badge } from "./ui";
import { cn } from "@/lib/utils";

const W = 900;
const H = 560;

const tierStyleFull: Record<
  ConceptNode["tier"],
  { r: number; fill: string; stroke: string; font: number }
> = {
  core: { r: 46, fill: "var(--series-1)", stroke: "var(--series-1)", font: 12 },
  major: { r: 38, fill: "var(--series-2)", stroke: "var(--series-2)", font: 11 },
  detail: { r: 32, fill: "var(--series-5)", stroke: "var(--series-5)", font: 10 },
};

const tierStyleCompact: typeof tierStyleFull = {
  core: { r: 40, fill: "var(--series-1)", stroke: "var(--series-1)", font: 10.5 },
  major: { r: 30, fill: "var(--series-2)", stroke: "var(--series-2)", font: 9.5 },
  detail: { r: 26, fill: "var(--series-5)", stroke: "var(--series-5)", font: 9 },
};

export function ConceptMap({
  nodes,
  edges,
  title,
  compact = false,
}: {
  nodes: ConceptNode[];
  edges: ConceptEdge[];
  title?: string;
  compact?: boolean;
}) {
  const tierStyle = compact ? tierStyleCompact : tierStyleFull;
  const [selected, setSelected] = useState<ConceptNode | null>(null);
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  const px = (x: number) => 60 + x * (W - 120);
  const py = (y: number) => 40 + y * (H - 80);

  const isConnected = (id: string) =>
    selected &&
    (selected.id === id ||
      selected.related.includes(id) ||
      byId[id]?.related.includes(selected.id));

  return (
    <div className="relative">
      <Card className="overflow-hidden p-2">
        {title && (
          <p className="px-3 pt-2 text-sm font-semibold">{title}</p>
        )}
        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full min-w-[560px]"
            role="img"
            aria-label="Interactive concept map — click a node to explore"
          >
            {/* edges */}
            {edges.map((e, i) => {
              const a = byId[e.from];
              const b = byId[e.to];
              if (!a || !b) return null;
              const active =
                selected &&
                (e.from === selected.id || e.to === selected.id);
              return (
                <g key={i}>
                  <line
                    x1={px(a.x)}
                    y1={py(a.y)}
                    x2={px(b.x)}
                    y2={py(b.y)}
                    stroke={
                      active ? "var(--series-1)" : "var(--chart-grid)"
                    }
                    strokeWidth={active ? 2 : 1.2}
                  />
                  {e.label && active && (
                    <text
                      x={(px(a.x) + px(b.x)) / 2}
                      y={(py(a.y) + py(b.y)) / 2 - 5}
                      textAnchor="middle"
                      fontSize={10}
                      className="fill-[var(--chart-muted)]"
                    >
                      {e.label}
                    </text>
                  )}
                </g>
              );
            })}
            {/* nodes */}
            {nodes.map((n) => {
              const s = tierStyle[n.tier];
              const dimmed = selected && !isConnected(n.id);
              return (
                <g
                  key={n.id}
                  transform={`translate(${px(n.x)},${py(n.y)})`}
                  onClick={() =>
                    setSelected(selected?.id === n.id ? null : n)
                  }
                  className="cursor-pointer"
                  opacity={dimmed ? 0.3 : 1}
                >
                  <circle
                    r={s.r}
                    fill={s.fill}
                    fillOpacity={selected?.id === n.id ? 0.32 : 0.14}
                    stroke={s.stroke}
                    strokeWidth={selected?.id === n.id ? 2.5 : 1.5}
                  />
                  <foreignObject
                    x={-s.r + 4}
                    y={-s.r + 4}
                    width={s.r * 2 - 8}
                    height={s.r * 2 - 8}
                  >
                    <div
                      className="flex h-full w-full items-center justify-center text-center font-medium leading-tight text-ink"
                      style={{ fontSize: s.font }}
                    >
                      {n.label}
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>
        <div className="flex flex-wrap gap-3 px-3 pb-2">
          {(
            [
              ["core", "Core concept"],
              ["major", "Major idea"],
              ["detail", "Detail"],
            ] as const
          ).map(([tier, label]) => (
            <span
              key={tier}
              className="flex items-center gap-1.5 text-xs text-ink-secondary"
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: tierStyle[tier].fill }}
              />
              {label}
            </span>
          ))}
          <span className="text-xs text-ink-muted">
            Click a concept to expand it
          </span>
        </div>
      </Card>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-3"
          >
            <Card className="p-5">
              <div className="mb-2 flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold">{selected.label}</h3>
                  <Badge
                    tone={
                      selected.tier === "core"
                        ? "accent"
                        : selected.tier === "major"
                          ? "success"
                          : "violet"
                    }
                  >
                    {selected.tier}
                  </Badge>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-lg p-1 text-ink-muted hover:bg-surface-sunken"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    Explanation
                  </p>
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    {selected.explanation}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    Example
                  </p>
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    {selected.example}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    Where it's used
                  </p>
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    {selected.application}
                  </p>
                </div>
              </div>
              {selected.related.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    Related:
                  </span>
                  {selected.related.map((rid) =>
                    byId[rid] ? (
                      <button
                        key={rid}
                        onClick={() => setSelected(byId[rid])}
                        className={cn(
                          "rounded-full border border-line px-2.5 py-0.5 text-xs font-medium",
                          "text-ink-secondary transition-colors hover:border-accent hover:text-accent"
                        )}
                      >
                        {byId[rid].label}
                      </button>
                    ) : null
                  )}
                </div>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
