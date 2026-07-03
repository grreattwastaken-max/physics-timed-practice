"use client";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

/* Chart tokens come from the validated dataviz palette defined in globals.css */

const tooltipStyle = {
  backgroundColor: "rgb(var(--surface-raised))",
  border: "1px solid rgb(var(--line))",
  borderRadius: "12px",
  fontSize: "12px",
  color: "rgb(var(--ink))",
  boxShadow: "0 4px 16px rgba(11,11,11,0.08)",
};

export function MasteryRadar({
  data,
}: {
  data: { topic: string; mastery: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data} outerRadius="72%">
        <PolarGrid stroke="var(--chart-grid)" />
        <PolarAngleAxis
          dataKey="topic"
          tick={{ fill: "var(--chart-muted)", fontSize: 11 }}
        />
        <Radar
          name="Mastery"
          dataKey="mastery"
          stroke="var(--series-1)"
          fill="var(--series-1)"
          fillOpacity={0.22}
          strokeWidth={2}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v: number | string) => [`${v}%`, "Mastery"]}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export function AccuracyTrend({
  data,
}: {
  data: { label: string; accuracy: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: -18 }}>
        <CartesianGrid stroke="var(--chart-grid)" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fill: "var(--chart-muted)", fontSize: 11 }}
          axisLine={{ stroke: "var(--chart-axis)" }}
          tickLine={false}
        />
        <YAxis
          domain={[0, 100]}
          tick={{ fill: "var(--chart-muted)", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          unit="%"
        />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v: number | string) => [`${v}%`, "Accuracy"]}
        />
        <Line
          type="monotone"
          dataKey="accuracy"
          stroke="var(--series-2)"
          strokeWidth={2}
          dot={{ r: 3.5, fill: "var(--series-2)", strokeWidth: 0 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function ActivityBars({
  data,
}: {
  data: { label: string; xp: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: -18 }}>
        <CartesianGrid stroke="var(--chart-grid)" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fill: "var(--chart-muted)", fontSize: 11 }}
          axisLine={{ stroke: "var(--chart-axis)" }}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "var(--chart-muted)", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          cursor={{ fill: "rgb(var(--ink) / 0.04)" }}
          formatter={(v: number | string) => [`${v} XP`, "Earned"]}
        />
        <Bar
          dataKey="xp"
          fill="var(--series-1)"
          radius={[4, 4, 0, 0]}
          maxBarSize={36}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
