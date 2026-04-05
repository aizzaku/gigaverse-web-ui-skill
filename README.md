# giga-this-ui

A Claude Code skill that transforms any React + Tailwind project into the [Gigaverse](https://gigaverse.io) design system — dark navy, gold/teal/cyan accents, pixel fonts, and motion animations.

## Install

```bash
npx skills add aizzaku/gigaverse-web-ui-skill
```

Works across Claude Code, Cursor, Copilot, Windsurf, and 15+ other agents.

Claude Code only:
```bash
npx claude install aizzaku/gigaverse-web-ui-skill
```

## Usage

In any React + Tailwind project, open Claude Code and say:

```
giga this ui
```

or any of: `make it giga`, `apply gigaverse design`, `giga-ify this`, `convert to gigaverse`

## What it does

Runs a 5-phase transformation:

1. **Audit** — scans your stack, tokens, and components
2. **Token Foundation** — injects all `giga-*` color tokens, pixel fonts, global styles
3. **Components** — transforms buttons, cards, inputs, nav, modals, and layout
4. **Animation** — adds `motion/react` scroll entrances, hover states, and spring physics
5. **Verification** — spins up the bundled reference demo and compares computed styles

## What's included

The skill is fully self-contained — no external dependencies:

- `SKILL.md` — skill instructions and inline token reference
- `references/DESIGN_SYSTEM.md` — full component specs
- `references/demo/` — 7 live HTML reference pages (colors, typography, buttons, cards, inputs, layout)
