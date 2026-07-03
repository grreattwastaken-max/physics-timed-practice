"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Sparkles,
  Square,
  GraduationCap,
  HelpCircle,
  Compass,
} from "lucide-react";
import { chapters } from "@/lib/content";
import { useProgress, masteryFor } from "@/lib/store";
import { TutorMode, ExplainStyle } from "@/lib/tutor-prompt";
import { Badge, Button, Card, PageHeader } from "@/components/ui";
import { Markdown } from "@/components/markdown";
import { cn } from "@/lib/utils";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const starters = [
  "Teach me electric potential from first principles",
  "Why does a magnetic field never change a particle's speed?",
  "Walk me through a velocity selector problem step by step",
  "Quiz me on the photoelectric effect",
  "I keep mixing up e.m.f. and p.d. — help",
  "Generate an exam-style question on capacitors, then mark my attempt",
];

export default function TutorPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<TutorMode>("tutor");
  const [style, setStyle] = useState<ExplainStyle>("alevel");
  const [chapterId, setChapterId] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const chapterStats = useProgress((s) => s.chapterStats);
  const mistakes = useProgress((s) => s.mistakes);
  const tutorNotes = useProgress((s) => s.tutorNotes);
  const addTutorNote = useProgress((s) => s.addTutorNote);
  const touchDay = useProgress((s) => s.touchDay);

  const profile = useMemo(() => {
    const bands = chapters.map((c) => ({
      title: c.title,
      m: masteryFor({ chapterStats }, c.id),
      a: chapterStats[c.id]?.attempts ?? 0,
    }));
    return {
      weakTopics: bands.filter((b) => b.a >= 4 && b.m < 0.45).map((b) => b.title),
      strongTopics: bands.filter((b) => b.a > 0 && b.m >= 0.75).map((b) => b.title),
      recentMistakes: mistakes.slice(-5).map((m) => ({
        concept: m.concept,
        prompt: m.prompt,
      })),
      tutorNotes,
    };
  }, [chapterStats, mistakes, tutorNotes]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  async function send(text?: string) {
    const content = (text ?? input).trim();
    if (!content || busy) return;
    setError(null);
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setBusy(true);
    touchDay();

    const controller = new AbortController();
    abortRef.current = controller;
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: next,
          mode,
          style,
          chapterId: chapterId || undefined,
          profile,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? `Request failed (${res.status})`);
      }
      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: acc }]);
      }
      // tutor memory: remember the theme of this exchange
      addTutorNote(
        `${new Date().toISOString().slice(0, 10)}: asked about "${content.slice(0, 90)}" (${mode}/${style})`
      );
    } catch (e) {
      if ((e as Error).name !== "AbortError") {
        setError((e as Error).message);
        setMessages(next); // drop the empty assistant stub
      }
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  }

  function stop() {
    abortRef.current?.abort();
  }

  const modeOptions: { id: TutorMode; label: string; icon: typeof Sparkles }[] =
    [
      { id: "tutor", label: "Tutor", icon: GraduationCap },
      { id: "socratic", label: "Socratic", icon: HelpCircle },
      { id: "exam-coach", label: "Exam coach", icon: Compass },
    ];

  const styleOptions: { id: ExplainStyle; label: string }[] = [
    { id: "simple", label: "Simple" },
    { id: "alevel", label: "A-Level standard" },
    { id: "deep", label: "Deep dive" },
    { id: "exam", label: "Exam-focused" },
  ];

  return (
    <div className="mx-auto flex h-[calc(100vh-8.5rem)] max-w-3xl flex-col">
      <PageHeader
        title="AI Tutor"
        subtitle="A personal H2 Physics teacher that knows your chapters, remembers your mistakes, and adapts its teaching to you."
      />

      {/* Controls */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="flex rounded-xl border border-line bg-surface-raised p-0.5">
          {modeOptions.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={cn(
                "flex items-center gap-1.5 rounded-[10px] px-3 py-1.5 text-xs font-medium transition-colors",
                mode === m.id
                  ? "bg-accent text-white"
                  : "text-ink-secondary hover:text-ink"
              )}
            >
              <m.icon className="h-3.5 w-3.5" />
              {m.label}
            </button>
          ))}
        </div>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value as ExplainStyle)}
          className="rounded-xl border border-line bg-surface-raised px-3 py-2 text-xs font-medium outline-none"
          aria-label="Explanation style"
        >
          {styleOptions.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
        <select
          value={chapterId}
          onChange={(e) => setChapterId(e.target.value)}
          className="rounded-xl border border-line bg-surface-raised px-3 py-2 text-xs font-medium outline-none"
          aria-label="Chapter context"
        >
          <option value="">Whole syllabus</option>
          {chapters.map((c) => (
            <option key={c.id} value={c.id}>
              {c.number}. {c.title}
            </option>
          ))}
        </select>
      </div>

      {/* Thread */}
      <div className="flex-1 overflow-y-auto rounded-2xl border border-line bg-surface-raised p-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold">
                Ask anything from chapters 14–20 (or the wider H2 syllabus)
              </p>
              <p className="mx-auto mt-1 max-w-md text-xs leading-relaxed text-ink-muted">
                Socratic mode teaches through questions; Exam coach mode drills
                command words and marking points. The tutor sees your weak
                topics and recent mistakes automatically.
              </p>
            </div>
            <div className="flex max-w-lg flex-wrap justify-center gap-2">
              {starters.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-secondary transition-colors hover:border-accent hover:text-accent"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  "max-w-[92%] sm:max-w-[85%]",
                  m.role === "user" ? "self-end" : "self-start"
                )}
              >
                {m.role === "user" ? (
                  <div className="rounded-2xl rounded-br-md bg-accent px-4 py-2.5 text-sm leading-relaxed text-white">
                    {m.content}
                  </div>
                ) : (
                  <div className="rounded-2xl rounded-bl-md bg-surface-sunken px-4 py-3">
                    {m.content ? (
                      <Markdown>{m.content}</Markdown>
                    ) : (
                      <div className="flex gap-1 py-1" aria-label="Thinking">
                        {[0, 1, 2].map((d) => (
                          <span
                            key={d}
                            className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted"
                            style={{ animationDelay: `${d * 0.15}s` }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {error && (
        <Card className="mt-3 border-danger/30 bg-danger/5 p-3 text-sm text-danger">
          {error}
        </Card>
      )}

      {/* Composer */}
      <div className="mt-3 flex items-end gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          rows={2}
          placeholder={
            mode === "socratic"
              ? "Describe the problem — I'll guide you to the answer with questions…"
              : "Ask a question, paste a problem, or request practice…"
          }
          className="flex-1 resize-none rounded-xl border border-line bg-surface-raised px-4 py-3 text-sm leading-relaxed outline-none transition-colors focus:border-accent"
        />
        {busy ? (
          <Button variant="secondary" onClick={stop} aria-label="Stop">
            <Square className="h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={() => send()} disabled={!input.trim()} aria-label="Send">
            <Send className="h-4 w-4" />
          </Button>
        )}
      </div>
      <p className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-ink-muted">
        <Badge tone="neutral">memory on</Badge>
        The tutor personalises using your mastery profile, recent mistakes and
        past session notes.
      </p>
    </div>
  );
}
