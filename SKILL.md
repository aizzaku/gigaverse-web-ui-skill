---
name: giga-this-ui
description: "Transform any React + Tailwind project's UI into the Gigaverse design system with pixel-perfect fidelity. Use this skill whenever the user wants to apply the Gigaverse look-and-feel to an existing project, convert a UI to Gigaverse styling, reskin a project with the giga aesthetic, or apply the giga design system. Triggers on: giga this ui, apply gigaverse design, convert to gigaverse, giga-ify, make it giga, apply giga design system, reskin to giga, gigaverse this, apply giga theme. Also trigger when the user references the gigaverse design system in the context of transforming or restyling an existing UI."
---

# Giga This UI

Transform any React + Tailwind project into the Gigaverse design system — a dark, pixel-art gaming aesthetic with navy surfaces, gold/teal/cyan accents, and retro pixel fonts.

## Source of Truth

All reference files are bundled inside this skill — no external paths needed.

- **Implementation spec**: `references/DESIGN_SYSTEM.md` — detailed component specs, page templates, animation system. Read this for anything not covered by the inline token reference below.
- **Live demo pages** (primary visual reference): `references/demo/` — 7 interactive HTML pages showing every design system element exactly as it should render:
  - `index.html` — Cover / palette overview
  - `colors.html` — All color tokens with swatches (core, accent, text, faction, rarity)
  - `typography.html` — Bitcell heading scale + m5x7 body scale
  - `buttons.html` — All 8 button variants with shimmer animation
  - `cards.html` — All 4 card variants
  - `inputs.html` — Input states, status pips, ping-pong loader, progress bar
  - `layout.html` — Layout patterns, animation variants, spacing system

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

The inline token reference below covers the most-used values. For edge cases or detailed component anatomy, read `references/DESIGN_SYSTEM.md`.

---

## Inline Token Reference

### Colors

#### Surfaces
| Token | Hex | Role |
|---|---|---|
| `giga-navy` | `#060b14` | Page background |
| `giga-panel` | `#081420` | Modal/footer/card bg |
| `giga-card` | `#0a1e2e` | Card surfaces |
| `giga-dark-card` | `#070d18` | Recessed/inner card |
| `giga-overlay` | `#02060c` | Modal backdrop (at `/90`) |

#### Text
| Token | Hex | Role |
|---|---|---|
| `giga-heading` | `#e0e0e0` | Primary headings |
| `giga-muted` | `#7a8a9e` | Labels, descriptions |
| `gray-200` | Tailwind default | Body prose |
| `gray-300` | Tailwind default | Feature lists, legal |

#### Accents
| Token | Hex | Role |
|---|---|---|
| `giga-gold` | `#F5C563` | Primary accent, CTAs, stats |
| `giga-gold-light` | `#F5D06B` | Gold gradient top |
| `giga-gold-dark` | `#E89B0C` | Gold gradient bottom |
| `giga-button-text` | `#3a1e00` | Text on gold buttons |
| `giga-teal` | `#0483AB` | Interactive accent |
| `giga-cyan` | `#02C7D7` | Links, borders, icons |
| `giga-green` | `#3dd94e` | Success state |
| `giga-green-light` | `#78FD95` | Success text |
| `giga-sky` | `#4FC3F7` | Section accent |
| `giga-lavender` | `#CC86CB` | Section accent |
| `giga-discord` | `#7C3AED` | Discord brand |

#### Borders
| Token | Value |
|---|---|
| `giga-border` | `rgba(4,131,171,0.2)` |
| `giga-border-dark` | `#0c2030` |

#### Status
| Token | Hex | Role |
|---|---|---|
| `giga-live` | `#ff7a7a` | Live indicator |
| `giga-live-bg` | `#5a1111` | Live indicator bg |
| `giga-live-text` | `#ffb2b2` | Live indicator text |

### Typography

#### Font Families
| Token | Font | Role |
|---|---|---|
| `font-bitcell` | Bitcell | Headings, labels, buttons, nav, stats — always ALL-CAPS with wide tracking |
| `font-m5x7` | m5x7 | Body copy, descriptions, prose — mixed case |
| `font-vt323` | VT323 | Fallback sans |

Font files load from `/fonts/` via `@font-face` in `styles/globals.css`.

#### Heading Scale (font-bitcell)
| Level | Mobile | sm | md | xl | 2xl |
|---|---|---|---|---|---|
| Hero H1 | 42px | 52px | 70px | 80px | 100px |
| Section H2 | 24px | 34px | 42px | — | 54px |
| Hero Subtitle | 22px | 28px | 32px | — | 40px |
| CTA H2 | 32px | 42px | 50px | — | 64px |

Common heading classes: `font-bitcell leading-[0.9] tracking-[2px] text-giga-heading`

#### Body Scale (font-m5x7)
| Context | Mobile | sm | md | 2xl | Leading |
|---|---|---|---|---|---|
| Paragraph | 17px | 20px | 22px | 28px | 1.3 |
| Description | 17px | 19px | 21px | 26px | 1.35 |
| Feature item | 17px | 18px | 20px | 25px | 1.3 |

#### Label Scale (font-bitcell, small)
| Context | Mobile | sm | 2xl | Tracking |
|---|---|---|---|---|
| Section subtitle | 11px | 12px | 15px | 2px-2.5px |
| Stat label | 10px | 11px | 14px | 1.5px-2px |
| Nav link | 15px | — | 20px | 1.8px |

### Component Signatures

#### PlayNowButton (Primary Gold CTA)
```
rounded-md border-2 border-giga-gold font-bitcell font-bold text-giga-button-text
transition-opacity hover:opacity-90
```
Inline gradient: `linear-gradient(180deg, #ffe070 0%, #f0c040 48%, #d8a020 52%, #c08010 100%)`
Box shadow: `inset 0 1px 0 rgba(255,245,204,0.45), 0 2px 0 0 rgba(0,0,0,0.4)`
Sizes: `sm` (px-5 py-1.5 text-[16px]) | `lg` (w-full px-8 py-2 text-[20px] sm:w-auto sm:text-[24px])

#### Secondary Button (Outlined Teal)
```
rounded-md border border-giga-cyan bg-giga-panel/80
font-bitcell tracking-[2px] text-giga-cyan
transition-colors hover:bg-giga-teal/10
```

#### Tertiary Button (Text Only)
```
font-bitcell tracking-[2px] text-giga-muted
transition-colors hover:text-giga-heading
```

#### Ghost Button (Dark)
```
rounded-full border border-giga-border bg-giga-dark-card/80
font-bitcell tracking-[1.8px] text-giga-muted
transition-colors hover:border-giga-cyan/50 hover:text-giga-heading
```

#### Small Action (Teal Pill)
```
rounded-full border border-giga-cyan/70 bg-giga-teal/10
font-bitcell text-[10px] tracking-[1.6px] text-giga-cyan hover:bg-giga-teal/20
```

#### Standard Card
```
rounded-xl border border-giga-border bg-giga-dark-card/85 px-5 py-5
```

#### Panel Card
```
overflow-hidden rounded-[20px]
```
Background: inline gradient from section/faction color.

#### Tweet Card
```
rounded-xl border border-giga-border bg-giga-panel p-3 sm:p-4
transition-colors hover:border-giga-muted/40
```

#### Info Card (Recessed)
```
rounded-lg border border-giga-border/50 bg-giga-dark-card/50 px-4 py-3
```

#### Input Field
```
w-full rounded-lg border-2 bg-transparent px-4 py-2.5 text-center
font-bitcell text-[18px] tracking-[1.5px] text-giga-heading outline-none
placeholder:text-giga-muted/40
```
States: default `border-[rgba(4,131,171,0.3)]` | available `border-[rgba(61,217,78,0.5)]` | error `border-red-400`

#### Content Container
```
mx-auto max-w-[1440px] px-6 py-3 sm:px-8 sm:py-6 md:py-8 lg:px-10 xl:py-10
```

#### Section Divider
```
h-px w-full bg-gradient-to-r from-transparent via-giga-teal to-transparent opacity-40
```

#### Navbar
```
fixed left-0 right-0 top-0 z-40 h-[52px] md:h-[56px]
bg-giga-navy/92 border-b border-giga-border
```
Nav links: `font-bitcell text-[15px] tracking-[1.8px]` | active: `text-giga-gold` | inactive: `text-giga-muted`

#### Modal
Overlay: `fixed inset-0 z-[90] bg-giga-overlay/90`
Panel: `rounded-lg border-[3px] bg-giga-panel` with `max-w-[440px]` (sm) or `max-w-[960px]` (lg)

### Border Radius Scale
| px | Class | Usage |
|---|---|---|
| 6 | `rounded-md` | Buttons |
| 8 | `rounded-lg` | Modals, dropdowns |
| 12 | `rounded-xl` | Cards |
| 14 | `rounded-[14px]` | Equipment strips |
| 16 | `rounded-[16px]` | Video containers |
| 20 | `rounded-[20px]` | Large panels |
| full | `rounded-full` | Pills, dots, pips |

### Animation Quick-Ref

All via `motion` from `motion/react`. Variants go in `animationVariants.ts`.

| Variant | Initial | Animate |
|---|---|---|
| `fadeUp` | `{ opacity: 0, y: 20 }` | `{ opacity: 1, y: 0 }` |
| `fadeUpFar` | `{ opacity: 0, y: 30 }` | `{ opacity: 1, y: 0 }` |
| `scaleIn` | `{ opacity: 0, scale: 0.8 }` | `{ opacity: 1, scale: 1 }` |
| `slideInLeft` | `{ opacity: 0, x: -30 }` | `{ opacity: 1, x: 0 }` |
| `slideInRight` | `{ opacity: 0, x: 30 }` | `{ opacity: 1, x: 0 }` |

| Transition | Duration | Ease |
|---|---|---|
| `sectionTransition` | 0.5s | easeOut |
| `columnTransition` | 0.6s | easeOut |
| `cardTransition` | 0.4s | easeOut |

| Constant | Value |
|---|---|
| `SPRING` | stiffness: 400, damping: 30 |
| `SPRING_SOFT` | stiffness: 300, damping: 30 |
| `STAGGER` | 0.08s |
| `INVIEW_MARGIN` | -100px |

Scroll entry pattern: `useInView({ once: true, margin: INVIEW_MARGIN })` with `AnimatePresence mode="wait"` for swaps.

---

## Workflow

### Phase 1: Project Audit

Before touching any code, understand what you're working with.

1. **Detect stack**: Read `package.json`, `tailwind.config.*`, and global CSS files. Confirm React + Tailwind. If the project uses a component library (MUI, Chakra, shadcn), flag it — the user needs to decide whether to strip it or theme-override it.
2. **Inventory tokens**: Grep for hex values, CSS variables, and theme config entries. Count how many unique colors, font families, and spacing values exist.
3. **Inventory components**: Glob for `.tsx`/`.jsx` files. Classify what exists: buttons, cards, inputs, modals, navbars, footers, layouts.
4. **Present audit**: Tell the user what you found — stack, token count, component count, estimated transformation scope. Ask them to confirm before proceeding.
5. **Read full spec if needed**: For any component category that looks complex, read the relevant section of `references/DESIGN_SYSTEM.md` (bundled with this skill).

### Phase 2: Token Foundation

Set up the design system infrastructure before transforming components.

1. **Fonts**: Add `@font-face` declarations for Bitcell, m5x7, and VT323 in the global CSS file. Extend `tailwind.config` with `fontFamily` entries (`bitcell`, `m5x7`, `vt323`). If font files aren't available, ask the user to provide them in `/public/fonts/` or `/fonts/`.
2. **Colors**: Extend `tailwind.config.js` `theme.extend.colors` with every `giga-*` token from the inline reference above. Map existing project colors to their closest Gigaverse equivalents:
   - Backgrounds → `giga-navy` > `giga-panel` > `giga-card` > `giga-dark-card` (layered depth)
   - Primary text → `giga-heading`
   - Secondary text → `giga-muted`
   - Body text → `gray-200`
   - Primary accent → `giga-gold`
   - Secondary accent → `giga-cyan` or `giga-teal`
   - Success → `giga-green`
   - Error → `red-400`
   - Links → `giga-cyan`
3. **Borders**: Add `giga-border` and `giga-border-dark` tokens. Remap existing border-radius usage to the Gigaverse scale.
4. **Global styles**: Set `<body>` background to `giga-navy`, default text color to `gray-200`. Add `image-pixelated` utility class. Add custom scrollbar styling (thin, `#1a3a4a` thumb on transparent track).
5. **Start dev server**: Use Claude Preview to launch and verify the token foundation renders correctly before moving on.

### Phase 3: Component Transformation

Transform components category-by-category. For each category, map existing variants to the closest Gigaverse equivalent using the exact class strings from the inline reference.

**3a — Buttons**
Map existing button variants:
- Primary/CTA → PlayNowButton pattern (gold gradient, border-2, shimmer optional)
- Secondary → Outlined teal
- Tertiary/link → Text-only muted
- Destructive/cancel → Ghost dark
- Small actions → Teal pill
- For any button that doesn't map cleanly, pick the closest variant and note the choice.

**3b — Cards**
Map existing card patterns:
- Data/stat cards → Standard Card
- Content/article cards → Tweet Card (if social) or Standard Card
- Sidebar/info panels → Info Card (Recessed)
- Large feature panels → Panel Card (rounded-[20px])
- List item cards → Equipment Strip

**3c — Typography**
- Replace all heading fonts with `font-bitcell`. Apply responsive size scales from the heading table. Add `tracking-[2px]` or `tracking-[3px]` and `leading-[0.9]` or `leading-[0.95]`.
- Replace all body fonts with `font-m5x7`. Apply body size scales with appropriate leading.
- Labels and captions get `font-bitcell` at small sizes with wide tracking.
- Headings and labels should be uppercase. Body text stays mixed case.

**3d — Inputs**
Apply the Gigaverse input pattern: transparent background, rounded-lg, border-2, centered bitcell text, muted placeholder. Wire up status-aware border colors if validation exists.

**3e — Navigation**
Transform to fixed navbar: `giga-navy/92` background, `border-b border-giga-border`, bitcell nav links with gold active state. If the project has a mobile menu, make it full-screen overlay with large bitcell text.

**3f — Modals**
Apply LandingModalShell pattern: `bg-giga-overlay/90` overlay, `bg-giga-panel` panel with `border-[3px]`, header gradient, scale-up entrance animation.

**3g — Layout**
- Wrap main content areas with the standard container pattern.
- Add section dividers between major sections (gradient teal line).
- Apply asymmetric grid patterns where two-column layouts exist.
- If the page has vertical sections, consider snap scroll (`snap-y snap-mandatory`).

### Phase 4: Animation & Polish

1. Install `motion` (`npm install motion`) if not already present.
2. Create `animationVariants.ts` (or equivalent) exporting all variants, transitions, springs, and constants from the animation quick-ref above.
3. Apply scroll-triggered entrances to sections:
   - Left content: `slideInLeft` + `sectionTransition`
   - Right content: `slideInRight` + `columnTransition` (delay +0.15s)
   - Staggered children: `fadeUp` with `STAGGER` delay increments
4. Apply `AnimatePresence mode="wait"` to any content that swaps (tabs, carousels, modals).
5. Add hover transitions to interactive elements (buttons, cards, nav links).
6. Apply `image-pixelated` class to any pixel-art or icon images.
7. Style global scrollbar.

### Phase 5: Pixel-Perfect Verification

This is the critical phase. The goal is visual fidelity to the design system.

1. **Launch the reference demo**: Serve `references/demo/` from this skill's directory (see setup in Source of Truth above). Navigate to `http://localhost:3456/buttons.html`, `colors.html`, `inputs.html`, etc. in Claude Preview. These live pages are the ground truth — every element on them is correct and inspectable.

2. **Screenshot both**: Take screenshots of the user's transformed UI and the corresponding demo page. Compare side-by-side. If screenshots time out (Tailwind CDN JIT can block paint), use `preview_eval` to inspect computed styles directly:
   ```js
   // Example: verify button background
   getComputedStyle(document.querySelector('button')).background
   // Example: verify body background
   getComputedStyle(document.body).backgroundColor  // should be rgb(6, 11, 20)
   ```

3. **Cross-check computed styles**: For each major element type, navigate to the demo page, eval the computed style, then do the same on the user's UI. They should match:
   - Body bg → `rgb(6, 11, 20)` (#060b14)
   - Gold text → `rgb(245, 197, 99)` (#F5C563)
   - Cyan border → `rgb(2, 199, 215)` (#02C7D7)
   - Progress bar gradient → gold (`#F5C563`) → teal (`#0483AB`), NOT green
   - Button border-radius: primary/faction = 6px, cards = 8–12px, pills = 9999px

4. **Common pitfalls to check**:
   - Progress bar gradient should be **gold → teal** (`#F5C563, #0483AB`), not green → teal
   - Status pip glow colors: gold pip uses `rgba(245,197,99,0.5)`, cyan uses `rgba(2,199,215,0.45)`, green uses `rgba(61,217,78,0.45)`
   - Input placeholder opacity: `text-giga-muted/40` (40%, not full opacity)
   - Ping-pong loader squares: `rounded-[2px]` with `bg-giga-dark-card` and `border-giga-border-dark`

5. **Fix and recheck**: For each discrepancy, fix the specific value and re-eval to confirm. Do not move on until computed values match.

6. **Responsive sweep**: Resize to mobile (375px), tablet (768px), and desktop (1280px+). Verify each breakpoint.

7. **Final checklist**:
   - [ ] All backgrounds use giga-navy/panel/card/dark-card hierarchy
   - [ ] All heading text uses font-bitcell, uppercase, with tracking
   - [ ] All body text uses font-m5x7
   - [ ] Primary accent is giga-gold, secondary is giga-cyan/teal
   - [ ] Border radii follow the Gigaverse scale
   - [ ] Animations use motion/react with imported variants
   - [ ] Responsive at mobile/sm/md/xl/2xl
   - [ ] No hardcoded hex in className (exceptions: CSS gradients, dynamic colors, shadow arbitraries)

---

## Edge Cases

- **Font files missing**: Ask the user to provide Bitcell and m5x7 font files. Without them, the aesthetic will not match — these are non-negotiable.
- **Component library present** (MUI/Chakra/shadcn): Warn the user that deep theming overrides are needed, or suggest stripping the library in favor of raw Tailwind components matching the Gigaverse patterns.
- **Existing animation library** (GSAP, react-spring, etc.): Replace with `motion` from `motion/react` for consistency. The Gigaverse animation system is built entirely on it.
- **Dark mode toggle**: Gigaverse IS the dark mode. Remove the toggle or remap light mode to also use the Gigaverse palette.
- **Non-Tailwind CSS**: This skill targets React + Tailwind. If the project doesn't use Tailwind, recommend adding it first (`npx @tailwindcss/upgrade`) before running this transformation.
- **TypeScript strict mode**: Ensure animation variant objects are properly typed. The DESIGN_SYSTEM.md has the exact variant shapes.
