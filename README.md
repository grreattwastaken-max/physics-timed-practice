# Quantum Leap — AI-Powered H2 Physics Revision Platform

A production-quality revision platform for **Singapore-Cambridge H2 Physics (9478)** that turns lecture notes into an intelligent learning ecosystem: smart summaries, AI tutoring, active recall, worked solutions, exam practice and progress analytics — with the polish of a modern consumer app.

Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Recharts and the Anthropic API. Deploys directly to Vercel.

## What's inside

**Seven chapters ship pre-built from real lecture notes** (Chapters 14–20: Electric Fields, Currents, Circuits, Electromagnetic Forces, Electromagnetic Induction, Quantum Physics, Nuclear Physics), each with:

- **Smart summaries at three depths** — Quick Review (30 s), Exam Review (3 min), Deep Understanding
- **Formula Hub** — every formula with variables, units, conditions of use, applications and common mistakes; globally searchable
- **Interactive concept maps** and a cross-chapter **knowledge graph** with the bridges examiners love to test
- **Key physics graphs** rendered as native SVG (V–r/E–r curves, I–V characteristics, RC charging, a.c. power, generator phase, decay curves, the BE/A curve, photoelectric plots…)
- **Flashcards** with confidence ratings and SM-2-style spaced repetition
- **Concept-check quizzes** and **fill-in-the-blank** drills with full explanations
- **Worked solutions** as interactive step players: thinking process → roadmap → givens/unknowns → reveal-next-step with *why* for every step → checkpoint questions → mark scheme → practice variants
- **Derivation trainer** — guided fill-in, from-memory reconstruction, and annotated read-through modes
- **Misconceptions (myth vs reality), exam tips and word-perfect definitions**
- **Printable exam cheat sheets** per chapter

**Study modes** implement the learning science explicitly: active recall, spaced repetition, interleaving (Challenge Mode), elaboration (Explain-It-Yourself), metacognition (confidence before reveal), timed exam conditioning and adaptive Mastery Mode that targets your weakest chapters and most-missed concepts.

**Gamification that serves learning**: XP with level titles, daily streaks, 14 achievements (First Upload, Recall Expert, Derivation Master, 7-Day Streak, Chapter Conqueror, Physics Scholar…), mastery bands per chapter and animated progress everywhere.

**Analytics dashboard**: mastery radar across chapters, accuracy trend over your last sessions, weekly XP activity, personalised insights (improving / declining / revise-next) and a revision planner that rebuilds a prioritised daily plan from spaced-repetition due dates, weak bands, staleness and interleaving rules.

**AI features** (need an Anthropic API key — everything above works without one):

- **AI Tutor** — a personal H2 tutor with three teaching modes (Tutor, **Socratic** guided questioning, **Exam Coach** for command words and marking points), four explanation styles (Simple / A-Level / Deep Dive / Exam-Focused), chapter-grounded context, and **tutor memory**: it sees your weak topics, recent mistakes and past session notes automatically.
- **Mark Scheme Simulator** — paste a question and your answer; an examiner-grade AI estimates the mark, tables the marking points you hit and missed, quotes what lost marks, and writes the model answer.
- **PDF ingestion** — upload new lecture notes (any subject) and Claude converts them into a complete interactive chapter: summaries, formulas, flashcards, quizzes, worked examples and derivations, stored locally in your browser.

## Quick start

```bash
npm install
cp .env.example .env.local   # add your ANTHROPIC_API_KEY (optional but recommended)
npm run dev                  # http://localhost:3000
```

### Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | For AI features only | Powers the AI Tutor, Mark Scheme Simulator and PDF ingestion. Get one at [console.anthropic.com](https://console.anthropic.com/settings/keys). |
| `TUTOR_MODEL` | No | Override the Claude model (defaults to `claude-sonnet-5`). |

Without a key, the seven built-in chapters, all study modes, analytics, planner and gamification work fully offline — the three AI endpoints return a friendly message explaining how to enable them.

## Deploy to Vercel

1. Push this repository to GitHub.
2. [Import it into Vercel](https://vercel.com/new) — the Next.js preset needs no configuration.
3. Add `ANTHROPIC_API_KEY` under **Settings → Environment Variables**.
4. Deploy. PDF ingestion runs as a serverless function (`maxDuration` is declared per-route; on the Hobby plan very large PDFs may hit the function time limit — split them into chapters, which also gives better results).

## Architecture

```
app/
  page.tsx                    # Dashboard: stats, charts, plan, insights
  chapters/[id]/page.tsx      # Chapter hub: summaries · concept map · formulas · graphs · pitfalls · outcomes
  study/                      # flashcards · quiz (quiz/challenge/mastery) · timed · recall/explain · blanks
  practice/[id]/page.tsx      # Interactive worked-solution step player
  derivations/[id]/page.tsx   # Derivation trainer
  formulas/  graph/  planner/  cheatsheet/  upload/  tutor/  marking/
  api/tutor/route.ts          # Streaming Claude chat (modes, styles, learner profile)
  api/mark/route.ts           # Streaming examiner marking
  api/ingest/route.ts         # PDF → structured chapter JSON (native PDF input to Claude)
components/                   # App shell, charts (Recharts), SVG physics plotter, concept map,
                              # quiz engine, flashcard deck, step/derivation players, UI kit
lib/
  content/ch14…ch20.ts        # The knowledge base: authored from the uploaded lecture notes
  store.ts                    # Zustand store persisted to localStorage (XP, streaks, SRS, mastery, mistakes, custom chapters)
  srs.ts  gamification.ts  planner.ts  tutor-prompt.ts  normalize-chapter.ts
```

**Design notes**

- Content is a typed knowledge base (`lib/types.ts`); AI-ingested chapters are normalised into the same shape, so every feature (quizzes, planner, cheat sheets…) works identically for uploaded notes.
- Progress lives client-side in `localStorage` via a persisted Zustand store — private by default, zero-setup, no database required. The store is the single source for XP, streaks, spaced repetition state, mastery, mistake logs and tutor memory.
- Charts follow a validated, colourblind-safe palette with dedicated light/dark steps; physics graphs are dependency-free inline SVG.
- Formulas render as plain Unicode (`F = Q₁Q₂/4πε₀r²`) — robust everywhere, no LaTeX pipeline.
- Light/dark themes, reduced-motion support, keyboard-visible focus states, and responsive layouts from 390 px phones to desktop.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run typecheck` | TypeScript check |

## Extending to other subjects

The content schema is subject-agnostic: a "chapter" is summaries + definitions + formulas + flashcards + quiz + worked examples + derivations + a concept map. Add authored chapters in `lib/content/`, or simply upload PDF notes for any subject — the ingestion prompt extracts the same structure (formulas become "key results" for non-quantitative subjects).
