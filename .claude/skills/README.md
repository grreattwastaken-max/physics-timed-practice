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

MIT (`LICENSE-taste-skill.txt`), installed via
`npx skills add ... -a claude-code --copy`. Tracked in `/skills-lock.json`;
update with `npx skills update`. Each is a single `SKILL.md` with no scripts.

| Skill | What it's for |
| --- | --- |
| `design-taste-frontend` | The headline one, v2. Infers the brief, tunes VARIANCE / MOTION / DENSITY, GSAP skeletons, redesign-audit protocol |
| `redesign-existing-projects` | Audit-first pass over an existing UI |
| `high-end-visual-design` | Calm, expensive, soft-contrast direction |
| `minimalist-ui` | Editorial / Linear-ish restraint |
| `industrial-brutalist-ui` | Swiss type, hard contrast, experimental |

The repo ships 13. The other 8 were installed, then removed as a poor fit
for this project — restore any of them with
`npx skills add https://github.com/Leonxlnx/taste-skill --skill "<name>" -a claude-code --copy`:

- `design-taste-frontend-v1` — v1 back-compat only; nothing here depends on it
- `gpt-taste`, `image-to-code` — written for GPT/Codex, not Claude
- `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit` — emit
  reference images, never code, and need an image-generation tool
- `stitch-design-taste` — targets Google Stitch; this is Next.js + Tailwind
- `full-output-enforcement` — not a design skill, and its "any task
  requiring exhaustive output" trigger competes with everything

## Picking one

Eight skills remain and most describe themselves as "make the frontend not
look AI-generated." Their trigger descriptions still overlap, so **name the
skill you want** — `/impeccable polish`, "use hallmark to redesign the
hero", "use minimalist-ui for this" — rather than relying on automatic
selection.

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
