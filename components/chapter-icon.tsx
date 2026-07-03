"use client";

import {
  Zap,
  Activity,
  Cpu,
  Magnet,
  RefreshCw,
  Atom,
  Radiation,
  BookOpen,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  zap: Zap,
  activity: Activity,
  cpu: Cpu,
  magnet: Magnet,
  refresh: RefreshCw,
  atom: Atom,
  radiation: Radiation,
  book: BookOpen,
};

const colorClasses: Record<number, string> = {
  1: "text-[var(--series-1)] bg-[var(--series-1)]/10",
  2: "text-[var(--series-2)] bg-[var(--series-2)]/10",
  3: "text-[var(--series-3)] bg-[var(--series-3)]/10",
  4: "text-[var(--series-4)] bg-[var(--series-4)]/10",
  5: "text-[var(--series-5)] bg-[var(--series-5)]/10",
  6: "text-[var(--series-6)] bg-[var(--series-6)]/10",
};

export function ChapterIcon({
  icon,
  color,
  size = "md",
  className,
}: {
  icon: string;
  color: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const Icon = icons[icon] ?? BookOpen;
  const sizes = {
    sm: "h-8 w-8 rounded-lg [&>svg]:h-4 [&>svg]:w-4",
    md: "h-10 w-10 rounded-xl [&>svg]:h-5 [&>svg]:w-5",
    lg: "h-14 w-14 rounded-2xl [&>svg]:h-7 [&>svg]:w-7",
  };
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        sizes[size],
        colorClasses[color] ?? colorClasses[1],
        className
      )}
    >
      <Icon strokeWidth={2} />
    </div>
  );
}
