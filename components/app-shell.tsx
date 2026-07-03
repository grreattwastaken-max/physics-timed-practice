"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Layers,
  MessageCircleQuestion,
  Sigma,
  Network,
  ListChecks,
  CalendarCheck,
  Upload,
  FileText,
  Sun,
  Moon,
  Flame,
  Menu,
  X,
  Sparkles,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgress } from "@/lib/store";
import { levelForXp, titleForLevel, ACHIEVEMENTS } from "@/lib/gamification";

const nav = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/chapters", label: "Chapters", icon: BookOpen },
  { href: "/study", label: "Study Modes", icon: Layers },
  { href: "/practice", label: "Worked Solutions", icon: ListChecks },
  { href: "/derivations", label: "Derivations", icon: Sigma },
  { href: "/formulas", label: "Formula Hub", icon: Sparkles },
  { href: "/graph", label: "Knowledge Graph", icon: Network },
  { href: "/tutor", label: "AI Tutor", icon: MessageCircleQuestion },
  { href: "/marking", label: "Mark My Answer", icon: GraduationCap },
  { href: "/planner", label: "Revision Planner", icon: CalendarCheck },
  { href: "/cheatsheet", label: "Cheat Sheets", icon: FileText },
  { href: "/upload", label: "Upload Notes", icon: Upload },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return <div className="h-9 w-9 rounded-xl bg-surface-sunken" />;
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface-raised text-ink-secondary transition-colors hover:text-ink"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}

function XpPill() {
  const xp = useProgress((s) => s.xp);
  const streak = useProgress((s) => s.streak);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const { level, progress } = levelForXp(xp);
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex items-center gap-1.5 rounded-full border border-line bg-surface-raised px-3 py-1.5 text-sm"
        title={`${streak}-day streak`}
      >
        <Flame
          className={cn(
            "h-4 w-4",
            streak > 0 ? "text-warning" : "text-ink-muted"
          )}
        />
        <span className="font-semibold tabular-nums">{streak}</span>
      </div>
      <div
        className="hidden items-center gap-2 rounded-full border border-line bg-surface-raised px-3 py-1.5 text-sm sm:flex"
        title={`${titleForLevel(level)} — ${xp} XP`}
      >
        <span className="font-semibold text-accent">Lv {level}</span>
        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-surface-sunken">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="tabular-nums text-ink-secondary">{xp} XP</span>
      </div>
    </div>
  );
}

function AchievementToast() {
  const recentUnlock = useProgress((s) => s.recentUnlock);
  const clear = useProgress((s) => s.clearRecentUnlock);
  useEffect(() => {
    if (recentUnlock) {
      const t = setTimeout(clear, 4200);
      return () => clearTimeout(t);
    }
  }, [recentUnlock, clear]);
  const def = ACHIEVEMENTS.find((a) => a.id === recentUnlock);
  return (
    <AnimatePresence>
      {def && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-warning/30 bg-surface-raised px-5 py-3 shadow-card-hover">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning/15">
              <Trophy className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-warning">
                Achievement unlocked
              </p>
              <p className="text-sm font-semibold">{def.name}</p>
              <p className="text-xs text-ink-secondary">{def.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
    <nav className="flex flex-col gap-0.5">
      {nav.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-accent/10 text-accent"
                : "text-ink-secondary hover:bg-surface-sunken hover:text-ink"
            )}
          >
            <item.icon className="h-4 w-4 shrink-0" strokeWidth={2.1} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-line bg-surface-raised/70 backdrop-blur lg:flex">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold leading-tight">Quantum Leap</p>
            <p className="text-xs text-ink-muted">H2 Physics 9478</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-3 pb-6">
          <NavLinks />
        </div>
      </aside>

      {/* Topbar */}
      <header className="sticky top-0 z-20 border-b border-line bg-surface/80 backdrop-blur lg:pl-60">
        <div className="flex h-14 items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-line lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
            <Link href="/" className="flex items-center gap-2 lg:hidden">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold">Quantum Leap</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <XpPill />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-64 border-r border-line bg-surface-raised p-4 lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold">Quantum Leap</span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-line"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <NavLinks onNavigate={() => setOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="px-4 py-6 sm:px-6 lg:pl-[17rem] lg:pr-8">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
      <AchievementToast />
    </div>
  );
}
