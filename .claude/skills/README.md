# Design skills

Vendored anti-AI-slop design skills, checked in so they're available to any
Claude Code session on this repo (including ephemeral web/cloud sessions,
where `~/.claude` does not persist).

## Standalone

| Skill | Version | Source | License |
| --- | --- | --- | --- |
| `impeccable` | 4.0.4 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) (`plugin/skills/impeccable`) | Apache-2.0 |
| `hallmark` | 1.1.0 | [nutlope/hallmark](https://github.com/nutlope/hallmark) (`skills/hallmark`) | MIT |
| `frontend-design` | — | [anthropics/skills](https://github.com/anthropics/skills) | see `frontend-design/LICENSE.txt` |

The four `impeccable-*` subagents that ship with impeccable live in
`.claude/agents/`.

## From [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)

All 13, MIT (`LICENSE-taste-skill.txt`), installed via
`npx skills add ... -a claude-code --copy`. Tracked in `/skills-lock.json`;
update with `npx skills update`. Each is a single `SKILL.md` with no scripts.

**Write code:**

| Skill | What it's for |
| --- | --- |
| `design-taste-frontend` | The headline one, v2. Infers the brief, tunes VARIANCE / MOTION / DENSITY, GSAP skeletons, redesign-audit protocol |
| `design-taste-frontend-v1` | v1, kept only for exact back-compat. Redundant here — remove unless something depends on it |
| `gpt-taste` | Stricter variant tuned for GPT/Codex, not Claude |
| `redesign-existing-projects` | Audit-first pass over an existing UI |
| `high-end-visual-design` | Calm, expensive, soft-contrast direction |
| `minimalist-ui` | Editorial / Linear-ish restraint |
| `industrial-brutalist-ui` | Swiss type, hard contrast, experimental |
| `image-to-code` | Generate design images first, then build to match. Written for Codex |
| `full-output-enforcement` | Not a design skill — bans placeholder/truncated output |
| `stitch-design-taste` | Emits a `DESIGN.md` for Google Stitch |

**Generate images only, no code:** `imagegen-frontend-web`,
`imagegen-frontend-mobile`, `brandkit`. These need an image-generation tool
to be useful.

## Picking one

There are now 16 skills here and most of them describe themselves as
"make the frontend not look AI-generated." Their trigger descriptions
overlap heavily, so **name the skill you want** — `/impeccable polish`,
"use hallmark to redesign the hero", "use minimalist-ui for this" — rather
than relying on automatic selection.

Rough division of labour:

- **impeccable** — heaviest. 23 sub-commands, a PRODUCT.md / DESIGN.md
  context system, a Node anti-pattern detector, subagents. Start with
  `/impeccable init`; this project has no PRODUCT.md yet, so other commands
  run in refinement-only mode until it does.
- **hallmark** — same job, no setup. Picks a macrostructure and theme, runs
  57 slop-test gates. Good for greenfield pages and audits.
- **frontend-design** — Anthropic's short prompt-level nudge. No commands.
- **taste-skill family** — the aesthetic ones (`minimalist-ui`,
  `industrial-brutalist-ui`, `high-end-visual-design`) are the useful part:
  reach for them when you already know the *direction* you want and just
  want it enforced.

## Not installed

impeccable also ships `hooks/hooks.json`, which runs its detector on every
`Edit`/`Write` and again on `Stop`. That's deliberately left out — it edits
harness settings and adds latency to every file write. To add it, see
`impeccable/reference/hooks.md`.

## Updating

taste-skill is lockfile-tracked: `npx skills update`.

The other three are vendored copies, not submodules. To refresh impeccable:

```sh
git clone --depth 1 https://github.com/pbakaus/impeccable /tmp/impeccable
rm -rf .claude/skills/impeccable && cp -r /tmp/impeccable/plugin/skills/impeccable .claude/skills/
cp /tmp/impeccable/LICENSE /tmp/impeccable/NOTICE.md .claude/skills/impeccable/
cp /tmp/impeccable/plugin/agents/*.md .claude/agents/
```

Same shape for hallmark (`skills/hallmark`) and frontend-design
(`skills/frontend-design`).
