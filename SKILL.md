---
name: giga-this-ui
description: "Transform any React + Tailwind project's UI into the Gigaverse design system with pixel-perfect fidelity. Use this skill whenever the user wants to apply the Gigaverse look-and-feel to an existing project, convert a UI to Gigaverse styling, reskin a project with the giga aesthetic, or apply the giga design system. Triggers on: giga this ui, apply gigaverse design, convert to gigaverse, giga-ify, make it giga, apply giga design system, reskin to giga, gigaverse this, apply giga theme. Also trigger when the user references the gigaverse design system in the context of transforming or restyling an existing UI."
---

# Giga This UI

Transform any React + Tailwind project into the Gigaverse design system — a dark, pixel-art gaming aesthetic with navy surfaces, gold/teal/cyan accents, and retro pixel fonts.

## Source of Truth

All design values, component specs, and guardrails live in a single file:

- **`references/DESIGN_SYSTEM.md`** — The complete design system spec organized in 9 sections:
  1. Visual Theme & Atmosphere — design philosophy and "why" behind decisions
  2. Color Palette & Roles — all color tokens with semantic grouping
  3. Typography Rules — master type scale table, font families, text patterns
  4. Component Catalog — every component with base styles, sizes, and interaction states
  5. Layout Principles — containers, grids, gaps, radius scale, responsive breakpoints
  6. Depth & Elevation — surface hierarchy, shadow tiers, glow effects
  7. Animation System — variants, transitions, springs, constants, entry patterns
  8. Do's and Don'ts — explicit guardrails and common pitfalls
  9. Agent Prompt Guide — quick color cheat sheet, copy-paste component prompts, iteration guide

  **For quick lookups:** Section 9 has a flat color reference and ready-to-use component prompts.
  **For edge cases:** Section 8 has explicit Do's/Don'ts to prevent common mistakes.
  **For full component anatomy:** Section 4 has every component with states.

- **Live demo pages** (primary visual reference): `references/demo/` — interactive HTML pages showing every design system element exactly as it should render:
  - `index.html` — Cover / palette overview
  - `colors.html` — All color tokens with swatches (core, accent, text, faction, rarity)
  - `typography.html` — Bitcell heading scale + m5x7 body scale
  - `buttons.html` — All button variants with shimmer animation
  - `cards.html` — All card variants
  - `inputs.html` — Input states, status pips, ping-pong loader, progress bar
  - `layout.html` — Layout patterns, animation variants, spacing system
  - `states.html` — Component interaction states (default/hover/focus/active/disabled)
  - `templates.html` — Page template skeletons (landing section, legal page, splash panel)

  To serve the demo locally, add this to the project's `.claude/launch.json` (create if missing) and launch via `preview_start`:
  ```json
  {
    "version": "0.0.1",
    "configurations": [
      {
        "name": "giga-reference",
        "runtimeExecutable": "python",
        "runtimeArgs": ["-m", "http.server", "3456", "--directory", "<SKILL_DIR>/references/demo"],
        "port": 3456
      }
    ]
  }
  ```
  Replace `<SKILL_DIR>` with the absolute path to this skill's directory. Then use `preview_eval` to inspect computed styles — faster and more reliable than screenshots.

---

## Workflow

### Phase 1: Project Audit

Before touching any code, understand what you're working with.

1. **Detect stack**: Read `package.json`, `tailwind.config.*`, and global CSS files. Confirm React + Tailwind. If the project uses a component library (MUI, Chakra, shadcn), flag it — the user needs to decide whether to strip it or theme-override it.
2. **Inventory tokens**: Grep for hex values, CSS variables, and theme config entries. Count how many unique colors, font families, and spacing values exist.
3. **Inventory components**: Glob for `.tsx`/`.jsx` files. Classify what exists: buttons, cards, inputs, modals, navbars, footers, layouts.
4. **Present audit**: Tell the user what you found — stack, token count, component count, estimated transformation scope. Ask them to confirm before proceeding.
5. **Read spec sections**: Read `references/DESIGN_SYSTEM.md` sections relevant to the components found. For complex transformations, read the full spec.

### Phase 2: Token Foundation

Set up the design system infrastructure before transforming components.

1. **Fonts**: Add `@font-face` declarations for Bitcell, m5x7, and VT323 in the global CSS file. Extend `tailwind.config` with `fontFamily` entries. If font files aren't available, ask the user to provide them in `/public/fonts/` or `/fonts/`. Font files are non-negotiable — the aesthetic breaks without them.
2. **Colors**: Extend `tailwind.config.js` with every `giga-*` token. Map existing project colors to Gigaverse equivalents using the surface hierarchy: `giga-navy` > `giga-panel` > `giga-card` > `giga-dark-card`.
3. **Borders**: Add `giga-border` and `giga-border-dark` tokens. Remap border-radius to the Gigaverse scale (see Section 5 of spec).
4. **Global styles**: Set `<body>` background to `giga-navy`, default text color to `gray-200`. Add `image-pixelated` utility class. Add custom scrollbar styling (thin, `#1a3a4a` thumb on transparent track).
5. **Start dev server**: Use Claude Preview to launch and verify the token foundation renders correctly.

### Phase 3: Component Transformation

Transform components category-by-category using the exact patterns from Section 4 of the spec. For each category, map existing variants to the closest Gigaverse equivalent.

**3a — Buttons**: Map to gold/teal/text/ghost/pill patterns. See Section 4 for all 7 button types with states.
**3b — Cards**: Map to standard/panel/tweet/info/equipment patterns. See Section 4 Card Variants.
**3c — Typography**: Headings → `font-bitcell` uppercase with tracking. Body → `font-m5x7` mixed case. Use the master type scale table in Section 3.
**3d — Inputs**: Apply transparent bg, `border-2`, centered bitcell text, muted placeholder. See Section 4 Input Field.
**3e — Navigation**: Fixed navbar with gold active states. See Section 4 LandingNavbar.
**3f — Modals**: `LandingModalShell` pattern with gradient header. See Section 4.
**3g — Layout**: Container pattern, section dividers, asymmetric grids. See Section 5.

### Phase 4: Animation & Polish

1. Install `motion` (`npm install motion`) if not already present.
2. Create `animationVariants.ts` exporting all variants, transitions, springs, and constants from Section 7 of the spec.
3. Apply scroll-triggered entrances following the Standard Section Entry Pattern.
4. Apply `AnimatePresence mode="wait"` for content swaps.
5. Add hover transitions to interactive elements.
6. Apply `image-pixelated` to pixel-art images. Style global scrollbar.

### Phase 5: Pixel-Perfect Verification

This is the critical phase. The goal is visual fidelity to the design system.

1. **Launch the reference demo**: Serve `references/demo/` from this skill's directory. These live pages are the ground truth.

2. **Cross-check computed styles**: For each major element type, eval the computed style on the demo page, then do the same on the user's UI. They should match:
   - Body bg → `rgb(6, 11, 20)` (#060b14)
   - Gold text → `rgb(245, 197, 99)` (#F5C563)
   - Cyan border → `rgb(2, 199, 215)` (#02C7D7)
   ```js
   getComputedStyle(document.querySelector('button')).background
   getComputedStyle(document.body).backgroundColor
   ```

3. **Check Do's/Don'ts**: Review Section 8 of the spec for common pitfalls. Verify:
   - Progress bar gradient is gold → teal (NOT green)
   - Status pip glows match exact rgba values
   - Input placeholder is `text-giga-muted/40`
   - PingPongLoader squares are `rounded-[2px]`

4. **Fix and recheck**: For each discrepancy, fix the specific value and re-eval to confirm.

5. **Responsive sweep**: Resize to mobile (375px), tablet (768px), and desktop (1280px+). Verify each breakpoint.

6. **Final checklist**:
   - [ ] All backgrounds use giga-navy/panel/card/dark-card hierarchy
   - [ ] All heading text uses font-bitcell, uppercase, with tracking
   - [ ] All body text uses font-m5x7
   - [ ] Primary accent is giga-gold, secondary is giga-cyan/teal
   - [ ] Border radii follow the Gigaverse scale
   - [ ] Animations use motion/react with imported variants
   - [ ] Responsive at mobile/sm/md/xl/2xl
   - [ ] No hardcoded hex in className (exceptions: CSS gradients, dynamic colors, shadow arbitraries)
