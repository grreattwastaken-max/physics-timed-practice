"use client";

import { useState } from "react";
import { GraduationCap, Loader2 } from "lucide-react";
import { Button, Card, PageHeader } from "@/components/ui";
import { Markdown } from "@/components/markdown";
import { useProgress } from "@/lib/store";

export default function MarkingPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [marks, setMarks] = useState("");
  const [result, setResult] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const touchDay = useProgress((s) => s.touchDay);

  async function mark() {
    if (!question.trim() || !answer.trim() || busy) return;
    setBusy(true);
    setError(null);
    setResult("");
    touchDay();
    try {
      const res = await fetch("/api/mark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer, marks: marks || undefined }),
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
        setResult(acc);
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title="Mark Scheme Simulator"
        subtitle="Paste a question and your answer. An examiner-grade AI estimates your mark, shows the marking points you hit and missed, and writes the model answer."
      />
      <Card className="p-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          The question
        </label>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={3}
          placeholder="e.g. Explain why the resistance of a filament lamp increases as the p.d. across it increases. [3]"
          className="mt-1.5 w-full rounded-xl border border-line bg-surface p-3 text-sm leading-relaxed outline-none transition-colors focus:border-accent"
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_130px]">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Your answer — exactly as you would write it
            </label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows={6}
              placeholder="Write your full answer here, including working and units…"
              className="mt-1.5 w-full rounded-xl border border-line bg-surface p-3 text-sm leading-relaxed outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Marks (optional)
            </label>
            <input
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              placeholder="e.g. 3"
              className="mt-1.5 w-full rounded-xl border border-line bg-surface px-3 py-3 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
        </div>
        <Button
          className="mt-4"
          onClick={mark}
          disabled={busy || !question.trim() || !answer.trim()}
        >
          {busy ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <GraduationCap className="h-4 w-4" />
          )}
          {busy ? "Marking…" : "Mark my answer"}
        </Button>
      </Card>

      {error && (
        <Card className="mt-4 border-danger/30 bg-danger/5 p-4 text-sm text-danger">
          {error}
        </Card>
      )}

      {result && (
        <Card className="mt-4 p-6">
          <Markdown>{result}</Markdown>
        </Card>
      )}
    </div>
  );
}
