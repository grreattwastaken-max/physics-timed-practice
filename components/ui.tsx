"use client";

import { ReactNode, ButtonHTMLAttributes, useEffect, useRef, useState } from "react";
import { motion, animate, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */

export function Card({
  children,
  className,
  hover = false,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl border border-line bg-surface-raised shadow-card",
        hover &&
          "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: [0.2, 0.8, 0.3, 1] }}
      className={cn(
        "rounded-2xl border border-line bg-surface-raised shadow-card",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "success";

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
}) {
  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-accent text-white hover:brightness-110 disabled:opacity-40",
    secondary:
      "bg-surface-raised text-ink border border-line hover:border-ink-muted/50 disabled:opacity-40",
    ghost: "text-ink-secondary hover:bg-surface-sunken disabled:opacity-40",
    danger: "bg-danger text-white hover:brightness-110 disabled:opacity-40",
    success: "bg-success text-white hover:brightness-110 disabled:opacity-40",
  };
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold",
        "transition-all duration-150 ease-out-expo hover:-translate-y-px active:translate-y-0 active:scale-[0.985] disabled:cursor-not-allowed disabled:hover:translate-y-0",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */

/** Animated circular progress — conveys level/score state at a glance. */
export function ProgressRing({
  value, // 0-1
  size = 56,
  stroke = 5,
  tone = "accent",
  children,
}: {
  value: number;
  size?: number;
  stroke?: number;
  tone?: "accent" | "success" | "warning" | "danger";
  children?: ReactNode;
}) {
  const reduce = useReducedMotion();
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(1, value));
  const tones = {
    accent: "stroke-accent",
    success: "stroke-success",
    warning: "stroke-warning",
    danger: "stroke-danger",
  };
  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${Math.round(clamped * 100)}%`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          className="stroke-surface-sunken"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - clamped) }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }
          }
          className={tones[tone]}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

/** Number that counts up to its value on mount — state arriving, not decoration. */
export function CountUp({
  value,
  className,
  duration = 0.8,
}: {
  value: number;
  className?: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (reduce || value === 0) {
      setDone(true);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toString();
      },
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {done || value === 0 ? value : 0}
    </span>
  );
}

/* ------------------------------------------------------------------ */

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "success" | "warning" | "danger" | "violet";
  className?: string;
}) {
  const tones = {
    neutral: "bg-surface-sunken text-ink-secondary border-line",
    accent: "bg-accent/10 text-accent border-accent/20",
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    danger: "bg-danger/10 text-danger border-danger/20",
    violet: "bg-violet/10 text-violet border-violet/20",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */

export function ProgressBar({
  value,
  className,
  tone = "accent",
}: {
  value: number; // 0-1
  className?: string;
  tone?: "accent" | "success" | "warning" | "danger";
}) {
  const tones = {
    accent: "bg-accent",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger",
  };
  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-surface-sunken",
        className
      )}
      role="progressbar"
      aria-valuenow={Math.round(value * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className={cn("h-full rounded-full", tones[tone])}
        initial={{ width: 0 }}
        animate={{ width: `${Math.max(0, Math.min(100, value * 100))}%` }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.3, 1] }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function SectionHeading({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="mt-0.5 text-sm text-ink-secondary">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <p className="mt-1 max-w-2xl text-sm text-ink-secondary">
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <Card className="flex flex-col items-center gap-3 p-10 text-center">
      <p className="text-base font-semibold">{title}</p>
      <p className="max-w-md text-sm text-ink-secondary">{body}</p>
      {action}
    </Card>
  );
}

/* Formula display with light styling */
export function Formula({ children }: { children: ReactNode }) {
  return (
    <span className="formula rounded-lg bg-surface-sunken px-2 py-0.5 font-medium">
      {children}
    </span>
  );
}
