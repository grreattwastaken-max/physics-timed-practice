# Design skills

Vendored anti-AI-slop design skills, checked in so they're available to any
Claude Code session on this repo (including ephemeral web/cloud sessions,
where `~/.claude` does not persist).

| Skill | Version | Source | License |
| --- | --- | --- | --- |
| `impeccable` | 4.0.4 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) (`plugin/skills/impeccable`) | Apache-2.0 |
| `hallmark` | 1.1.0 | [nutlope/hallmark](https://github.com/nutlope/hallmark) (`skills/hallmark`) | MIT |
| `frontend-design` | — | [anthropics/skills](https://github.com/anthropics/skills) (`skills/frontend-design`) | see `LICENSE.txt` |

The four `impeccable-*` subagents that ship with impeccable live in
`.claude/agents/`.

## Which one to reach for

All three overlap — they're all "make the UI not look AI-generated." They
differ in scope:

- **impeccable** is the heavyweight: 23 sub-commands (`/impeccable shape`,
  `audit`, `critique`, `polish`, `animate`, `typeset`, …), a PRODUCT.md /
  DESIGN.md context system, and a Node anti-pattern detector. Start with
  `/impeccable init` — this project has no PRODUCT.md yet, so the other
  commands run in a degraded, refinement-only mode until it does.
- **hallmark** is the lightweight counterpart: picks a macrostructure and a
  theme, then runs 57 slop-test gates. Good for greenfield pages, audits,
  and redesigns without the setup ceremony.
- **frontend-design** is Anthropic's own short prompt-level guidance. No
  commands, no scripts — it just biases aesthetic choices away from
  templated defaults.

Because their trigger descriptions overlap, name the one you want
(`/impeccable polish`, "use hallmark to redesign the hero") rather than
relying on automatic selection.

## Not installed

impeccable also ships `hooks/hooks.json`, which runs its detector on every
`Edit`/`Write` and again on `Stop`. That's deliberately left out — it edits
harness settings and adds latency to every file write. To add it, see
`impeccable/reference/hooks.md`.

## Updating

These are vendored copies, not submodules. To refresh:

```sh
git clone --depth 1 https://github.com/pbakaus/impeccable /tmp/impeccable
rm -rf .claude/skills/impeccable && cp -r /tmp/impeccable/plugin/skills/impeccable .claude/skills/
cp /tmp/impeccable/LICENSE /tmp/impeccable/NOTICE.md .claude/skills/impeccable/
cp /tmp/impeccable/plugin/agents/*.md .claude/agents/
```

Same shape for hallmark (`skills/hallmark`) and frontend-design
(`skills/frontend-design`).
