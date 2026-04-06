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

- `SKILL.md` — skill workflow (5-phase transformation process)
- `references/DESIGN_SYSTEM.md` — complete design system spec in 9 sections:
  1. Visual Theme & Atmosphere
  2. Color Palette & Roles
  3. Typography Rules
  4. Component Catalog (with interaction states)
  5. Layout Principles (with responsive breakpoints)
  6. Depth & Elevation
  7. Animation System
  8. Do's and Don'ts
  9. Agent Prompt Guide
- `references/demo/` — 9 live HTML reference pages:
  - `colors.html` — all color tokens with swatches
  - `typography.html` — Bitcell heading scale + m5x7 body scale
  - `buttons.html` — all button variants with shimmer animation
  - `cards.html` — all card variants
  - `inputs.html` — input states, status pips, ping-pong loader, progress bar
  - `layout.html` — layout patterns, animation variants, spacing system
  - `states.html` — every interactive component in all 5 states (default/hover/focus/active/disabled)
  - `templates.html` — page template skeletons (landing section, legal page, splash panel)
- `references/demo/tokens.css` — all design tokens as CSS custom properties (inspectable via `getComputedStyle`)
- `references/demo/shared-config.js` — shared Tailwind CDN config for demo pages
