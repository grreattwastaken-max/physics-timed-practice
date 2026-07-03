"use client";

import { useMemo, useState } from "react";
import { PhysicsGraphSpec } from "@/lib/types";
import { Card } from "./ui";

const SERIES: Record<number, string> = {
  1: "var(--series-1)",
  2: "var(--series-2)",
  3: "var(--series-3)",
  4: "var(--series-4)",
  5: "var(--series-5)",
  6: "var(--series-6)",
};

const W = 560;
const H = 300;
const PAD = { top: 18, right: 16, bottom: 40, left: 48 };

/** Inline SVG function plotter for physics curves (V-r, decay, AC, BE/A …). */
export function PhysicsGraph({ spec }: { spec: PhysicsGraphSpec }) {
  const [hover, setHover] = useState<{ x: number; y: number } | null>(null);

  const { paths, xMin, xMax, yMin, yMax } = useMemo(() => {
    const allPts = spec.curves.flatMap((c) => c.points);
    const xs = allPts.map((p) => p.x);
    const ys = allPts.map((p) => p.y);
    let xMin = Math.min(...xs);
    let xMax = Math.max(...xs);
    let yMin = Math.min(...ys, spec.zeroLine ? 0 : Infinity);
    let yMax = Math.max(...ys, spec.zeroLine ? 0 : -Infinity);
    if (yMax === yMin) yMax = yMin + 1;
    const yPadding = (yMax - yMin) * 0.08;
    yMin -= yPadding;
    yMax += yPadding;

    const sx = (x: number) =>
      PAD.left + ((x - xMin) / (xMax - xMin)) * (W - PAD.left - PAD.right);
    const sy = (y: number) =>
      H - PAD.bottom - ((y - yMin) / (yMax - yMin)) * (H - PAD.top - PAD.bottom);

    const paths = spec.curves.map((c) => {
      let d = "";
      c.points.forEach((p, i) => {
        d += `${i === 0 ? "M" : "L"}${sx(p.x).toFixed(1)},${sy(p.y).toFixed(1)}`;
      });
      return { d, curve: c };
    });
    return { paths, xMin, xMax, yMin, yMax, sx, sy };
  }, [spec]);

  const zeroY =
    spec.zeroLine && yMin < 0 && yMax > 0
      ? H - PAD.bottom - ((0 - yMin) / (yMax - yMin)) * (H - PAD.top - PAD.bottom)
      : null;

  return (
    <Card className="p-4">
      <p className="mb-1 text-sm font-semibold">{spec.title}</p>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full min-w-[320px]"
          role="img"
          aria-label={`${spec.title}. ${spec.caption}`}
          onMouseLeave={() => setHover(null)}
        >
          {/* frame */}
          <line
            x1={PAD.left}
            y1={H - PAD.bottom}
            x2={W - PAD.right}
            y2={H - PAD.bottom}
            stroke="var(--chart-axis)"
            strokeWidth={1.5}
          />
          <line
            x1={PAD.left}
            y1={PAD.top}
            x2={PAD.left}
            y2={H - PAD.bottom}
            stroke="var(--chart-axis)"
            strokeWidth={1.5}
          />
          {/* light gridlines */}
          {[0.25, 0.5, 0.75].map((f) => (
            <line
              key={f}
              x1={PAD.left}
              y1={PAD.top + f * (H - PAD.top - PAD.bottom)}
              x2={W - PAD.right}
              y2={PAD.top + f * (H - PAD.top - PAD.bottom)}
              stroke="var(--chart-grid)"
              strokeWidth={1}
            />
          ))}
          {zeroY !== null && (
            <line
              x1={PAD.left}
              y1={zeroY}
              x2={W - PAD.right}
              y2={zeroY}
              stroke="var(--chart-axis)"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
          )}
          {/* curves */}
          {paths.map(({ d, curve }, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={SERIES[curve.color]}
              strokeWidth={2}
              strokeDasharray={curve.dashed ? "6 4" : undefined}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
          {/* axis labels */}
          <text
            x={(W + PAD.left - PAD.right) / 2}
            y={H - 10}
            textAnchor="middle"
            className="fill-[var(--chart-muted)]"
            fontSize={13}
          >
            {spec.xLabel}
          </text>
          <text
            x={14}
            y={(H + PAD.top - PAD.bottom) / 2}
            textAnchor="middle"
            fontSize={13}
            className="fill-[var(--chart-muted)]"
            transform={`rotate(-90 14 ${(H + PAD.top - PAD.bottom) / 2})`}
          >
            {spec.yLabel}
          </text>
        </svg>
      </div>
      {/* legend */}
      {spec.curves.length >= 2 && (
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {spec.curves.map((c, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 text-xs text-ink-secondary"
            >
              <svg width="18" height="6">
                <line
                  x1="0"
                  y1="3"
                  x2="18"
                  y2="3"
                  stroke={SERIES[c.color]}
                  strokeWidth="2.5"
                  strokeDasharray={c.dashed ? "4 3" : undefined}
                />
              </svg>
              {c.label}
            </span>
          ))}
        </div>
      )}
      <p className="mt-2 text-xs leading-relaxed text-ink-muted">
        {spec.caption}
      </p>
    </Card>
  );
}
