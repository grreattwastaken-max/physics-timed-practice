"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  Loader2,
  CheckCircle2,
  Trash2,
  ArrowRight,
} from "lucide-react";
import { useProgress } from "@/lib/store";
import { normalizeIngestedChapter } from "@/lib/normalize-chapter";
import { Badge, Button, Card, PageHeader } from "@/components/ui";
import { cn } from "@/lib/utils";

type Phase = "idle" | "uploading" | "done" | "error";

export default function UploadPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastTitle, setLastTitle] = useState<string | null>(null);

  const customChapters = useProgress((s) => s.customChapters);
  const addCustomChapter = useProgress((s) => s.addCustomChapter);
  const removeCustomChapter = useProgress((s) => s.removeCustomChapter);
  const registerUpload = useProgress((s) => s.registerUpload);

  const process = useCallback(
    async (file: File) => {
      if (file.type !== "application/pdf") {
        setError("Only PDF files are supported.");
        setPhase("error");
        return;
      }
      setPhase("uploading");
      setError(null);
      try {
        const form = new FormData();
        form.append("file", file);
        const res = await fetch("/api/ingest", { method: "POST", body: form });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? `Failed (${res.status})`);
        const chapter = normalizeIngestedChapter(
          data.chapter,
          customChapters.length
        );
        addCustomChapter(chapter);
        registerUpload();
        setLastTitle(chapter.title);
        setPhase("done");
      } catch (e) {
        setError((e as Error).message);
        setPhase("error");
      }
    },
    [addCustomChapter, registerUpload, customChapters.length]
  );

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title="Upload notes"
        subtitle="Drop in PDF lecture notes (up to ~50 pages) and the AI converts them into a full chapter: summaries, formulas, flashcards, quizzes, worked examples and derivations."
      />

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          const f = e.dataTransfer.files?.[0];
          if (f) process(f);
        }}
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-12 text-center transition-colors",
          dragOver
            ? "border-accent bg-accent/5"
            : "border-line bg-surface-raised"
        )}
      >
        {phase === "uploading" ? (
          <>
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
            <p className="text-sm font-semibold">Analysing your notes…</p>
            <p className="max-w-md text-xs leading-relaxed text-ink-muted">
              Extracting structure, formulas, worked examples and questions.
              For a 20–50 page document this typically takes one to three
              minutes — keep this tab open.
            </p>
          </>
        ) : phase === "done" ? (
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <CheckCircle2 className="h-8 w-8 text-success" />
            <p className="text-sm font-semibold">
              “{lastTitle}” added to your chapters
            </p>
            <div className="flex gap-2">
              <Link href="/chapters">
                <Button>
                  Open chapters <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="secondary" onClick={() => setPhase("idle")}>
                Upload another
              </Button>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
              <Upload className="h-7 w-7 text-accent" />
            </div>
            <p className="text-sm font-semibold">
              Drag a PDF here, or choose a file
            </p>
            <p className="max-w-md text-xs leading-relaxed text-ink-muted">
              Works best with structured lecture notes. Requires an
              ANTHROPIC_API_KEY on the server — the seven built-in physics
              chapters work without it.
            </p>
            <Button onClick={() => inputRef.current?.click()}>
              <FileText className="h-4 w-4" /> Choose PDF
            </Button>
            <input
              ref={inputRef}
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) process(f);
                e.target.value = "";
              }}
            />
          </>
        )}
      </div>

      {phase === "error" && error && (
        <Card className="mt-4 border-danger/30 bg-danger/5 p-4 text-sm text-danger">
          {error}
        </Card>
      )}

      {customChapters.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">Your uploaded chapters</h2>
          <div className="flex flex-col gap-2">
            {customChapters.map((c) => (
              <Card key={c.id} className="flex items-center gap-4 p-4">
                <FileText className="h-5 w-5 shrink-0 text-violet" />
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/chapters/${c.id}`}
                    className="text-sm font-semibold hover:text-accent"
                  >
                    {c.title}
                  </Link>
                  <p className="text-xs text-ink-muted">
                    {new Date(c.createdAt).toLocaleDateString()} ·{" "}
                    {c.formulas.length} formulas · {c.quiz.length} questions ·{" "}
                    {c.workedExamples.length} worked examples
                  </p>
                </div>
                <Badge tone="violet">custom</Badge>
                <button
                  onClick={() => removeCustomChapter(c.id)}
                  className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-danger/10 hover:text-danger"
                  aria-label={`Delete ${c.title}`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </Card>
            ))}
          </div>
        </div>
      )}

      <Card className="mt-8 p-5">
        <p className="text-sm font-semibold">What the analyser extracts</p>
        <div className="mt-3 grid gap-2 text-xs text-ink-secondary sm:grid-cols-2">
          {[
            "Chapter and section structure",
            "Learning outcomes",
            "Formulas with variables, units and conditions",
            "Worked examples → interactive step-by-step players",
            "Derivations → guided derivation trainer",
            "Definitions, misconceptions and exam tips",
            "Flashcards with spaced repetition",
            "Quiz questions with explanations",
          ].map((t) => (
            <p key={t} className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" />
              {t}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
}
