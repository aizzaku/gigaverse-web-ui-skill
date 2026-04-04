# Gigaverse Design System

Comprehensive design system reference for the Gigaverse website, landing page, and linked pages. All tokens are defined in `tailwind.config.js` and consumed via Tailwind utility classes.

---

## Table of Contents

- [Color Tokens](#color-tokens)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [Components](#components)
- [Animation System](#animation-system)
- [Page Templates](#page-templates)
- [Rules & Conventions](#rules--conventions)

---

## Color Tokens

All colors live in `tailwind.config.js` under `theme.extend.colors`. Never use hardcoded hex in `className` when a token exists.

### Core Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `giga-navy` | `#060b14` | Page background, primary surface |
| `giga-panel` | `#081420` | Modal/footer/card backgrounds |
| `giga-card` | `#0a1e2e` | Card surfaces |
| `giga-dark-card` | `#070d18` | Darker inner card, recessed surfaces |
| `giga-overlay` | `#02060c` | Modal backdrop (used at `/90` opacity) |

### Text Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `giga-heading` | `#e0e0e0` | Primary headings, titles |
| `giga-muted` | `#7a8a9e` | Secondary text, labels, descriptions |
| `gray-200` | (Tailwind default) | Body prose, paragraph text |
| `gray-300` | (Tailwind default) | Feature list text, legal body copy |

### Accent Colors

| Token | Hex | Role |
| --- | --- | --- |
| `giga-gold` | `#F5C563` | Primary accent: CTAs, active nav, stat values, section accents |
| `giga-gold-light` | `#F5D06B` | Gold button gradient top |
| `giga-gold-dark` | `#E89B0C` | Gold button gradient bottom |
| `giga-button-text` | `#3a1e00` | Dark brown text on gold buttons |
| `giga-teal` | `#0483AB` | Interactive accent, section accent |
| `giga-cyan` | `#02C7D7` | Links, borders, icons, secondary CTA text |
| `giga-green` | `#3dd94e` | Success/authenticated state |
| `giga-green-light` | `#78FD95` | Success text, Foxglove accent |
| `giga-sky` | `#4FC3F7` | Dungeons section accent |
| `giga-lavender` | `#CC86CB` | Market/Athena accent |
| `giga-discord` | `#7C3AED` | Discord brand color |

### Border Colors

| Token | Value | Usage |
| --- | --- | --- |
| `giga-border` | `rgba(4,131,171,0.2)` | Standard subtle border |
| `giga-border-dark` | `#0c2030` | Inner/inset borders, darker dividers |

### Live/Status Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `giga-live` | `#ff7a7a` | Live indicator dot |
| `giga-live-bg` | `#5a1111` | Live indicator background |
| `giga-live-text` | `#ffb2b2` | Live indicator text |

### Faction Colors

Each faction has a primary and light variant. Source of truth: `tailwind.config.js`.

| Faction | Primary | Light |
| --- | --- | --- |
| Crusader | `#C32454` | `#FA4D4D` |
| Overseer | `#EB4F36` | `#EB8575` |
| Athena | `#9026CD` | `#CC86CB` |
| Archon | `#0383AC` | `#88FFEB` |
| Foxglove | `#229062` | `#78FD95` |
| Chobo | `#C7DCD0` | `#FFFFFF` |
| Summoner | `#FEC733` | `#FFC833` |
| Gigus | `#562344` | `#A85E8E` |

Usage: `text-faction-crusader`, `bg-faction-archon-light`, `border-faction-foxglove`. For dynamic inline styles (faction card borders/shadows), hex values in data arrays are acceptable since Tailwind can't resolve dynamic class names.

### Rarity Colors

| Token | Hex |
| --- | --- |
| `rarity-common` | `#E6E6E6` |
| `rarity-uncommon` | `#4DCC4D` |
| `rarity-rare` | `#4D4DFF` |
| `rarity-epic` | `#CC33CC` |
| `rarity-legendary` | `#FFCC00` |
| `rarity-relic` | `#CC4D00` |
| `rarity-giga` | `#FFCC33` |

### Inline Hex Exceptions

Inline hex is acceptable in:
- CSS gradient strings (`style={{ background: "linear-gradient(...)" }}`)
- Dynamic faction/rarity colors from data objects
- Shadow arbitrary values (`shadow-[0_0_24px_#hex]`) where Tailwind can't reference tokens
- Status pip glow shadows (e.g., `shadow-[0_0_10px_rgba(245,197,99,0.5)]`)

---

## Typography

### Font Families

| Token | Font | Fallback | Role |
| --- | --- | --- | --- |
| `font-bitcell` | Bitcell | monospace | Headings, labels, buttons, nav, stat values, all-caps UI text |
| `font-m5x7` | m5x7 | monospace | Body copy, descriptions, prose, feature lists |
| `font-vt323` / `font-sans` | VT323 | system sans | Default sans (pixel fallback for unstyled text) |

Font files loaded from `/fonts/` in `styles/globals.css` via `@font-face`.

### Heading Scale

All headings use `font-bitcell` with responsive sizing. The standard 5-stop responsive scale:

| Level | Mobile | sm | md | xl | 2xl | Usage |
| --- | --- | --- | --- | --- | --- | --- |
| Hero H1 | `42px` | `52px` | `70px` | `80px` | `100px` | Main landing headline |
| Section H2 | `24px` | `34px` | `42px` | — | `54px` | Section titles (via `SectionHeader`) |
| Hero Subtitle | `22px` | `28px` | `32px` | — | `40px` | Gold subtitle below H1 |
| Panel Heading | `24px` | `34px` | — | `42px` | `54px` | Faction name, large panel titles |
| CTA H2 | `32px` | `42px` | `50px` | — | `64px` | Final call-to-action |
| Splash Name | `36px` | `48px` | `56px` | — | — | NoobSplashPanel username |

Common heading classes:
```
font-bitcell leading-[0.9] tracking-[2px] text-giga-heading
font-bitcell leading-[0.95] tracking-[3px] text-giga-heading
```

### Body Text Scale

All body text uses `font-m5x7`:

| Context | Mobile | sm | md/lg | 2xl | Extra |
| --- | --- | --- | --- | --- | --- |
| Paragraph | `17px` | `20px` | `22px` | `28px` | `leading-[1.3]` |
| Description | `17px` | `19px` | `21px` | `26px` | `leading-[1.35]` or `leading-[1.45]` |
| Feature item | `17px` | `18px` | `20px` | `25px` | `leading-[1.3]` |
| Legal body | `17px` | `19px` | — | — | `leading-[1.5]` |

### Label/Caption Scale

Labels use `font-bitcell` at small sizes with wide tracking:

| Context | Mobile | sm | 2xl | Tracking | Color |
| --- | --- | --- | --- | --- | --- |
| Section number/subtitle | `11px` | `12px` | `15px` | `2px`-`2.5px` | Accent color (inline) |
| Stat label | `10px` | `11px` | `14px` | `1.5px`-`2px` | `text-giga-cyan` or `text-giga-muted` |
| Slot label | `11px` | — | `12px` | `2px` | `text-giga-muted` |
| Nav link | `15px` | — | `16px`/`20px` | `1.8px` | `text-giga-muted` / `text-giga-gold` (active) |
| Footer copyright | — | `17px` | `16px` | — | `text-giga-muted/50`, `font-m5x7` |

### Text Color Patterns

| Purpose | Class |
| --- | --- |
| Primary heading | `text-giga-heading` |
| Gold accent heading | `text-giga-gold` |
| Body text | `text-gray-200` |
| Secondary/muted | `text-giga-muted` |
| Link text | `text-giga-cyan` |
| Error text | `text-red-400` |
| Success text | `text-giga-green-light` |
| Faded/tertiary | `text-giga-muted/50` |

---

## Spacing & Layout

### Content Container

All content sections share this padding and max-width pattern:

```
mx-auto max-w-[1440px] px-6 py-3 sm:px-8 sm:py-6 md:py-8 lg:px-10 xl:py-10
```

Narrower variants:
- `max-w-[1400px]` for `SectionDivider`, `FeatureSection`
- `max-w-[820px]` for `CTASection` (centered text layout)
- `max-w-3xl` for legal pages (Terms, Privacy)

### Two-Column Grid Patterns

Sections use asymmetric grids at `xl`:

| Pattern | Usage |
| --- | --- |
| `xl:grid-cols-[minmax(280px,380px)_minmax(0,1fr)]` | Narrow text left, wide content right (Customize, Dungeon) |
| `xl:grid-cols-[minmax(0,1fr)_380px]` | Wide content left, fixed text right (Factions, Market) |
| `xl:grid-cols-[minmax(0,500px)_minmax(320px,1fr)]` | Hero (wider left text) |

Order swap on mobile: `order-2 xl:order-1` reverses column stacking.

### Gap Scale

| Context | Value |
| --- | --- |
| Section grid gap | `gap-3 sm:gap-4 xl:gap-6` or `xl:gap-8` |
| Button row | `gap-3 sm:flex-row` (stacks vertically on mobile) |
| Stat cards | `gap-3 sm:gap-4` |
| Feature cards | `gap-3 sm:gap-4` |
| Inner card content | `gap-2.5 sm:gap-3 xl:gap-4` |

### Snap Scroll Layout

The landing page uses CSS snap scrolling:

```
[--landing-nav-height:52px]
[--landing-footer-height:56px]
[--landing-rail-height:calc(100dvh-var(--landing-nav-height)-var(--landing-footer-height))]

// Rail (scroll container)
absolute inset-x-0 overflow-y-auto snap-y snap-mandatory scroll-smooth overscroll-y-contain

// Each section
relative h-[var(--landing-rail-height)] snap-start overflow-x-hidden overflow-y-auto
```

---

## Components

### PlayNowButton

**File:** `components/landing/PlayNowButton.tsx`
**Role:** Primary gold CTA button used across the entire site.

**Sizes:**
| Size | Classes |
| --- | --- |
| `sm` | `px-5 py-1.5 text-[16px] tracking-[1.8px]` |
| `lg` (default) | `w-full px-8 py-2 text-[20px] tracking-[2px] sm:w-auto sm:text-[24px] sm:tracking-[3px] md:px-12 2xl:text-[30px]` |

**Base styles:**
```
relative overflow-hidden rounded-md border-2 border-giga-gold
font-bitcell font-bold text-giga-button-text
transition-opacity hover:opacity-90
disabled:cursor-not-allowed disabled:opacity-60
```

**Inline gradient:**
```css
background: linear-gradient(180deg, #ffe070 0%, #f0c040 48%, #d8a020 52%, #c08010 100%)
box-shadow: inset 0 1px 0 rgba(255,245,204,0.45), 0 2px 0 0 rgba(0,0,0,0.4)
text-shadow: 0 1px 0 rgba(255,255,255,0.2)
```

**Shimmer effect:** Animated diagonal sweep — `pointer-events-none` overlay with skewed white gradient, 2.8s infinite loop.

**Props:** `onClick`, `label`, `size`, `disabled`, `shimmer`, `className`

---

### SectionHeader

**File:** `components/landing/SectionHeader.tsx`
**Role:** Reusable section title block for all content sections.

**Structure:**
```
[accent-line] [NUMBER - SUBTITLE] [accent-line]
H2 TITLE
optional description paragraph
```

**Props:** `number`, `subtitle`, `title`, `accentColor`, `description?`, `align?` (`"center"` | `"left"`)

**Accent colors used across sections:**
| Section | Color |
| --- | --- |
| Customize | `#0483AB` (teal) |
| Factions | `#F5C563` (gold) |
| Dungeons | `#4FC3F7` (sky) |
| Market | `#F5C563` (gold) |

**Key classes:**
- Wrapper: `mb-2 sm:mb-4 md:mb-8`
- Accent lines: `h-[2px] w-10` (inline bg = accentColor)
- Number/subtitle: `font-bitcell text-[11px] tracking-[2px] sm:text-[12px] 2xl:text-[15px]`
- H2: `mt-2 font-bitcell text-[24px] tracking-[2px] text-giga-heading sm:mt-3 sm:text-[34px] md:text-[42px] md:tracking-[3px] 2xl:text-[54px]`
- Description: `mt-2 max-w-[780px] text-balance font-m5x7 text-[17px] leading-[1.35] text-giga-muted sm:mt-3 sm:text-[19px] lg:text-[21px] 2xl:text-[26px]`

---

### SectionDivider

**File:** `components/landing/SectionDivider.tsx`
**Role:** Decorative horizontal rule between snap sections.

```
mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10
  > h-px w-full bg-gradient-to-r from-transparent via-giga-teal to-transparent opacity-40
```

---

### SectionAmbientPixels

**File:** `components/landing/SectionAmbientPixels.tsx`
**Role:** Decorative floating pixel particles overlaid on each section.

**Props:** `primaryColor`, `secondaryColor`, `className`

**Structure:** `pointer-events-none absolute inset-0 z-10 overflow-hidden` with 10 hardcoded pixel positions. Each pixel is a 5-9px colored square with glow shadow (`0 0 10px`, `0 0 18px`) that animates opacity, drift, and scale over 7-10s loops.

**Section color pairings:**
| Section | Primary | Secondary | Opacity |
| --- | --- | --- | --- |
| Hero | `#F5C563` (gold) | `#02C7D7` (cyan) | 70% |
| Customize | `#0483AB` (teal) | `#02C7D7` (cyan) | 55% |
| Factions | `#F5C563` (gold) | `#EB4F36` (red) | 55% |
| Dungeons | `#4FC3F7` (sky) | `#F5C563` (gold) | 55% |
| Market | `#F5C563` (gold) | `#0483AB` (teal) | 5% |
| CTA | `#02C7D7` (cyan) | `#F5C563` (gold) | 55% |

---

### LandingModalShell

**File:** `components/landing/LandingModalShell.tsx`
**Role:** Reusable modal overlay with themed accent.

**Props:** `isOpen`, `onClose`, `title`, `accent` (`"teal"` | `"gold"`), `size` (`"sm"` | `"lg"`), `children`

**Overlay:** `fixed inset-0 z-[90] bg-giga-overlay/90`

**Panel:**
- `w-full max-w-[440px]` (sm) or `max-w-[960px]` (lg)
- `rounded-lg border-[3px] bg-giga-panel`
- Teal accent: `border-giga-teal`
- Gold accent: `border-giga-gold/40`

**Header gradient:**
- Teal: `linear-gradient(180deg, #0d2334 0%, #081420 52%, #060b14 100%)`
- Gold: `linear-gradient(180deg, #30220a 0%, #121820 52%, #060b14 100%)`

**Close button:** Pixel-art icon (`/images/ui/icon-exit.png`) at 28x28px, `image-pixelated`.

**Animation:** Scale from 0.96 + y: 24 to normal, 0.22s easeOut.

---

### PingPongLoader

**File:** `components/landing/PingPongLoader.tsx`
**Role:** Pixel-art loading indicator.

**Structure:** Row of 4 square blocks (`h-3 w-3 rounded-[2px]`) with bouncing opacity animation.

**Props:** `blocks?`, `color?` (default `#F5C563`), `duration?` (default 1.2s), `label?`

**Label:** `font-m5x7 text-[13px] text-giga-muted`

---

### TweetCarousel

**File:** `components/landing/TweetCarousel.tsx`
**Role:** Auto-advancing testimonial carousel with dot navigation.

**Tweet card:**
```
rounded-xl border border-giga-border bg-giga-panel p-3 sm:p-4
```
- Avatar: 36x36 `rounded-full`
- Name: `font-bitcell text-[14px] tracking-[1px] text-white 2xl:text-[18px]`
- Handle: `font-m5x7 text-[13px] text-giga-muted`
- Body: `font-m5x7 text-[17px] leading-[1.35] text-gray-200 2xl:text-[22px]`

**Dot navigation:**
- Active: gold pill (`w-[24px] h-[6px] opacity-1`)
- Inactive: gold circle (`w-[6px] h-[6px] opacity-0.3`)
- Transition: `SPRING` (stiffness 400, damping 30)

**Auto-advance:** 6000ms interval, pauses on hover.

---

### StatsRow

**File:** `components/landing/StatsRow.tsx`
**Role:** Grid of stat cards with large values.

```
grid gap-4 sm:grid-cols-2 xl:grid-cols-4
```

**Card:**
```
rounded-xl border border-giga-border bg-giga-dark-card/85 px-5 py-5 text-center md:px-6
```
- Value: `font-bitcell text-[34px] tracking-wider text-giga-gold md:text-[42px] 2xl:text-[54px]`
- Label: `mt-2 font-bitcell text-[14px] tracking-[2px] text-giga-muted sm:text-[15px] 2xl:text-[19px]`

---

### SpriteAnimator

**File:** `components/landing/SpriteAnimator.tsx`
**Role:** Canvas-based sprite sheet renderer for pixel-art characters.

**Props:** `headSheetUrl`, `bodySheetUrl`, `fxSheetUrl?`, `animation`, `scale`, `facingLeft?`, `paused?`

- Cell size: 32px base, multiplied by `scale`
- Always `imageSmoothingEnabled = false`
- CSS class: `image-pixelated`
- Common scales: 3 (faction tabs), 6 (customize preview), 7 (splash panel)

---

### LandingNavbar

**File:** `components/landing/LandingNavbar.tsx`
**Role:** Fixed top navigation with scroll progress, section links, wallet status, profile dropdown.

**Fixed bar:** `fixed left-0 right-0 top-0 z-40`
- Height: `h-[52px] md:h-[56px]`
- Background: `bg-giga-navy/92`
- Bottom border: `border-b border-giga-border`

**Scroll progress:** Gold 2px bar at top, driven by scroll position spring.

**Nav links:**
- Active: `text-giga-gold` + animated gold underline (`layoutId="activeTabFill"`, `bg-giga-gold/10 border-b-2 border-giga-gold`)
- Inactive: `text-giga-muted hover:text-giga-heading`
- Font: `font-bitcell text-[15px] tracking-[1.8px] xl:text-[16px] 2xl:text-[20px]`

**StatusPip colors:**
| State | Class | Glow |
| --- | --- | --- |
| Gold (wallet) | `bg-giga-gold` | `rgba(245,197,99,0.5)` |
| Cyan (signing) | `bg-giga-cyan` | `rgba(2,199,215,0.45)` |
| Green (connected) | `bg-giga-green` | `rgba(61,217,78,0.45)` |
| Muted (default) | `bg-giga-muted/60` | none |

**Profile dropdown:** `w-[280px] 2xl:w-[340px]`, gradient background, animated y: -8 to 0.

**Mobile menu:** Full-screen overlay, `font-bitcell text-[28px] tracking-[3px]`.

---

### LandingFooter

**File:** `components/landing/LandingFooter.tsx`
**Role:** Fixed bottom bar with collection links, social icons, partner badges.

**Fixed bar:** `fixed inset-x-0 bottom-0 z-30`
- Height: `h-[56px] md:h-[60px]`
- Background: `bg-giga-panel/95 backdrop-blur-sm`
- Top border: `border-t border-giga-border`

**Collections dropdown:**
- Button: `font-bitcell text-[14px] md:text-[16px] 2xl:text-[20px] tracking-[1.5px] text-giga-muted hover:text-white`
- Dropdown: `rounded-lg border border-giga-border bg-giga-panel/95 p-2 shadow-lg`
- Items: `rounded-md px-3 py-2 font-bitcell text-[13px] 2xl:text-[16px] tracking-[1.5px] text-giga-muted hover:bg-white/5 hover:text-white`

**Social icons:** `h-4 w-4 md:h-5 md:w-5 text-giga-muted hover:text-white`

**Partner badges:** `h-8 opacity-60 group-hover:opacity-100`

---

### FeatureSection

**File:** `components/landing/FeatureSection.tsx`
**Role:** Generic reusable two-column section with image + feature list.

**Props:** `number`, `subtitle`, `title`, `description`, `accentColor`, `imageSrc?`, `imageAlt?`, `imagePosition`, `features[]` (each with `icon` from lucide-react and `text`)

**Feature list item:**
```
flex items-center gap-3 font-m5x7 text-[17px] text-gray-300 sm:text-[18px] lg:text-[20px] 2xl:text-[25px]
```
Icon: `h-4 w-4 lg:h-5 lg:w-5` in accentColor (inline).

---

## Button Variants

### Primary (Gold)
`PlayNowButton` — gold gradient with shimmer. Used for main CTAs.

### Secondary (Outlined)
Discord/teal outline button:
```
rounded-md border border-giga-cyan bg-giga-panel/80
font-bitcell tracking-[2px] text-giga-cyan
transition-colors hover:bg-giga-teal/10
```

### Tertiary (Text)
Text-only navigation:
```
font-bitcell tracking-[2px] text-giga-muted
transition-colors hover:text-giga-heading
```

### Ghost (Dark Card)
Used for secondary actions like DECLINE:
```
rounded-full border border-giga-border bg-giga-dark-card/80
font-bitcell tracking-[1.8px] text-giga-muted
transition-colors hover:border-giga-cyan/50 hover:text-giga-heading
```

### Accept (Gold Gradient, Rounded)
Used in LegalAgreement:
```
rounded-full border-2 border-giga-gold
bg-gradient-to-b from-giga-gold-light to-giga-gold-dark
font-bitcell tracking-[1.8px] text-giga-button-text
```

### Faction Join Button
Two-tone gradient with inline faction colors:
```
rounded-md border-2 font-bitcell tracking-[1.5px]
```
Background: `linear-gradient(180deg, ${colorLight} 0%, ${color} 100%)`
Text: `#1d0d00` (most factions), `#0b1118` (Chobo)

### Small Action (Teal Pill)
Used in dropdowns, Discord connect:
```
rounded-full border border-giga-cyan/70 bg-giga-teal/10
font-bitcell text-[10px] tracking-[1.6px] text-giga-cyan
hover:bg-giga-teal/20
```

### Option Card Button
Used in FundingModal:
```
w-full rounded-lg border-2 px-4 py-3 text-left
transition-colors hover:border-giga-cyan/60
```
Style: `borderColor: rgba(4,131,171,0.3)`, `background: rgba(8,20,32,0.6)`

---

## Card Variants

### Standard Card
```
rounded-xl border border-giga-border bg-giga-dark-card/85 px-5 py-5
```

### Panel Card (rounded-[20px])
Used for large section content areas:
```
overflow-hidden rounded-[20px]
```
Background: inline gradient from faction/section color.

### Equipment Strip Card
```
rounded-[14px] border border-giga-border bg-giga-dark-card/80 p-2.5 sm:p-3 xl:p-4
```

### Tweet Card
```
rounded-xl border border-giga-border bg-giga-panel p-3 sm:p-4
transition-colors hover:border-giga-muted/40
```

### Info Card (Recessed)
```
rounded-lg border border-giga-border/50 bg-giga-dark-card/50 px-4 py-3
```

### Stat Card (Minimal)
```
bg-giga-dark-card/92 px-3 py-2 sm:px-5 sm:py-2.5
```
No border, no border-radius.

---

## Border Radius Scale

| Value | Token | Usage |
| --- | --- | --- |
| `6px` | `rounded-md` | CTA buttons, Discord buttons |
| `8px` | `rounded-lg` | Modals, profile button, dropdowns |
| `12px` | `rounded-xl` | Feature cards, stat cards, tweet cards |
| `14px` | `rounded-[14px]` | Equipment strips, faction tabs |
| `16px` | `rounded-[16px]` | Video containers, population boxes |
| `18px` | `rounded-[18px]` | Legal agreement checkbox card |
| `20px` | `rounded-[20px]` | Large section panels |
| `22px` | `rounded-[22px]` | Faction profile image container |
| `full` | `rounded-full` | Status pips, dots, pill buttons, progress bar |

---

## Input Fields

### Username Input (Login Flow)
```
w-full rounded-lg border-2 bg-transparent px-4 py-2.5 text-center
font-bitcell text-[18px] tracking-[1.5px] text-giga-heading outline-none
placeholder:text-giga-muted/40
```
- Available state: `border-[rgba(61,217,78,0.5)]`
- Default state: `border-[rgba(4,131,171,0.3)]`
- Status colors: available = `text-giga-green-light`, taken/invalid = `text-red-400`, checking = `text-giga-muted`

### Minimal Input (Legacy)
Bottom-border only, no background, borderless sides. Used in legacy `MenuPanel` pages.

---

## Left-Border Text Accent

A repeating pattern across sections for descriptive text blocks:

```
border-l-2 border-{accent} pl-4
```

| Section | Border Color |
| --- | --- |
| Customize | `border-giga-cyan` |
| Factions | `border-giga-gold` |
| Dungeons | `border-giga-sky` |
| Market | `border-giga-gold` |

---

## Progress Indicators

### Step Progress Bar (Login Flow)
- Track: `rounded-full bg-[#0c1620]` with `border: 1px solid rgba(4,131,171,0.2)`
- Segments: `flex-1` with dividers
- Complete: `#3dd94e` (green)
- Active: `#0483AB` (teal) with pulsing glow shadow
- Step labels: `font-bitcell text-[10px] tracking-[1.5px]`
  - Complete: `text-giga-green-light`
  - Active: `text-giga-cyan`
  - Pending: `text-giga-muted/50`

### Scroll Progress Bar (Navbar)
Gold 2px bar at top of navbar, width driven by scroll spring:
```
h-[2px] origin-left bg-giga-gold
```

---

## Animation System

All animations use `motion` from `motion/react`. Variants and constants are centralized in `components/landing/animationVariants.ts`.

### Entrance Variants

| Name | Initial | Animate | Usage |
| --- | --- | --- | --- |
| `fadeUp` | `{ opacity: 0, y: 20 }` | `{ opacity: 1, y: 0 }` | Default section entrance |
| `fadeUpFar` | `{ opacity: 0, y: 30 }` | `{ opacity: 1, y: 0 }` | Emphasized entrance |
| `scaleIn` | `{ opacity: 0, scale: 0.8 }` | `{ opacity: 1, scale: 1 }` | Scale-up reveal |
| `slideInLeft` | `{ opacity: 0, x: -30 }` | `{ opacity: 1, x: 0 }` | Left column entrance |
| `slideInRight` | `{ opacity: 0, x: 30 }` | `{ opacity: 1, x: 0 }` | Right column entrance |
| `fadeIn` | `{ opacity: 0 }` | `{ opacity: 1 }` | Simple fade |

### Content Swap Variants

| Name | Hidden | Visible | Exit | Usage |
| --- | --- | --- | --- | --- |
| `crossfade` | `{ opacity: 0 }` | `{ opacity: 1 }` | `{ opacity: 0 }` | Faction/skin content swap |
| `slideSwap` | `{ opacity: 0, x: 20 }` | `{ opacity: 1, x: 0 }` | `{ opacity: 0, x: -20 }` | Login step transitions |
| `crtReveal` | `{ opacity: 0, filter: "blur(6px) brightness(1.6)" }` | `{ opacity: 1, filter: "blur(0px) brightness(1)" }` | reverse | CRT-style reveal for splash |
| `modalIn` | `{ opacity: 0, scale: 0.95, y: 20 }` | `{ opacity: 1, scale: 1, y: 0 }` | reverse | Modal entrance |
| `spriteReveal` | `{ opacity: 0, scale: 0.9 }` | `{ opacity: 1, scale: 1 }` | — | Sprite appearance |

### Transition Presets

| Name | Duration | Ease | Usage |
| --- | --- | --- | --- |
| `sectionTransition` | 0.5s | easeOut | Section entrance |
| `columnTransition` | 0.6s | easeOut | Secondary column (usually +0.15s delay) |
| `cardTransition` | 0.4s | easeOut | Card reveals |
| `thumbTransition` | 0.3s | easeOut | Thumbnail/small elements |
| `crtTransition` | 0.5s | easeOut | CRT-style reveals |
| `crtExitTransition` | 0.6s | easeIn | CRT-style exits |
| `cycleTransition` | 0.4s | easeInOut | Auto-cycling content |

### Spring Presets

| Name | Stiffness | Damping | Usage |
| --- | --- | --- | --- |
| `SPRING` | 400 | 30 | Nav tabs, carousel dots, carousel strip |
| `SPRING_SOFT` | 300 | 30 | Tweet slide transitions |

### Constants

| Name | Value | Usage |
| --- | --- | --- |
| `STAGGER` | 0.08s | Delay increment between staggered children |
| `INVIEW_MARGIN` | `-100px` | Trigger point for `useInView` |
| `SHIMMER_DURATION` | 2.8s | PlayNowButton shimmer sweep |

### Decorative Animations

**Stat flicker:** 4s loop, opacity pulses `[1, 0.7, 1, 0.6, 1, 0.75, 1]` at specific keyframe times.

**Stat glitch:** 6s loop, x shifts `[-3, 2, 1, -2]` + hue-rotate filter `[30deg, -30deg, 15deg, -15deg]`.

**Ping-pong loader:** Bouncing highlight across block row, 1.2s loop.

**Hero parallax:** `useScroll` + `useTransform` — art drifts `y: [0, 80]`, text drifts `y: [0, -28]`.

### Standard Section Entry Pattern

All sections use `useInView` with `{ once: true, margin: INVIEW_MARGIN }`:

1. Left element: `slideInLeft` + `sectionTransition` (0.5s)
2. Right element: `slideInRight` + `columnTransition` (0.6s, +0.15s delay)
3. Staggered children: `fadeUp` with increasing delays (0.2, 0.28, 0.35, etc.)

Content swaps always use `AnimatePresence mode="wait"`.

Shared element transitions use `layoutId` (active nav tab, carousel underline).

---

## Page Templates

### Landing Section Template

Every snap section follows this structure:

```tsx
<SnapSection id="section-name" onScrollUp={...} onScrollDown={...}>
    <SectionAmbientPixels primaryColor="..." secondaryColor="..." className="opacity-55" />
    <div className="relative z-20 mx-auto flex h-full w-full max-w-[1440px] flex-col justify-center px-6 py-3 sm:px-8 sm:py-6 md:py-8 lg:px-10 xl:py-10">
        <SectionHeader number="02" subtitle="SECTION NAME" title="SECTION TITLE" accentColor="#..." />
        <div className="grid gap-3 sm:gap-4 xl:grid-cols-[...] xl:gap-8">
            {/* Content columns */}
        </div>
    </div>
</SnapSection>
```

### Legal Page Template

Used by `/terms` and `/privacy`:

```tsx
<div className="min-h-screen bg-giga-navy">
    <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
        <Link href="/" className="font-bitcell text-[14px] tracking-[2px] text-giga-cyan hover:text-giga-heading">
            &larr; BACK TO GIGAVERSE
        </Link>
        <h1 className="mt-8 font-bitcell text-[28px] tracking-[2px] text-giga-heading sm:text-[36px]">PAGE TITLE</h1>
        <p className="mt-2 font-m5x7 text-[17px] text-giga-muted">Last Updated: ...</p>
        <div className="mt-8 space-y-8 font-m5x7 text-[17px] leading-[1.5] text-gray-300 sm:text-[19px]">
            {/* Sections */}
        </div>
        <div className="mt-12 border-t border-giga-border pt-6">
            <Link href="/" className="font-bitcell text-[14px] tracking-[2px] text-giga-cyan hover:text-giga-heading">
                &larr; BACK TO GIGAVERSE
            </Link>
        </div>
    </div>
</div>
```

Legal section dividers: `border-t border-giga-border/40 pt-6`
Section headings: `font-bitcell text-[20px] tracking-[2px] text-giga-heading sm:text-[22px]`

### Splash Panel Template

Used by `NoobSplashPanel` for authenticated user greeting:

- Centered column layout: `max-w-[720px]` with `text-center`
- CRT-style reveal animations (`crtReveal` + `crtTransition`)
- Stats grid: `grid-cols-2 sm:grid-cols-4` with border-y divider
- Stat values use accent colors: `text-giga-cyan`, `text-giga-gold`, `text-giga-heading`

---

## Rules & Conventions

### Component Reuse Checklist

When adding or modifying pages:

1. Section headers use `<SectionHeader>` -- not hand-rolled markup
2. Play Now buttons use `<PlayNowButton>` -- not inline gradient buttons
3. Loading states use `<PingPongLoader>` -- not custom spinners
4. Modals use `<LandingModalShell>` -- not custom overlay implementations
5. New colors are added to `tailwind.config.js` first, then referenced via token
6. Faction/rarity colors match tailwind tokens (`faction-*`, `rarity-*`)
7. Animations import from `animationVariants.ts` -- no inline variant objects
8. Icons import from `lucide-react` -- no custom SVG renderers
9. Section layout follows the `SnapSection` pattern in `LandingPage.tsx`

### Color Rules

- All colors must be Tailwind theme tokens. Never hardcoded hex in `className`.
- Inline hex is only acceptable in: CSS gradients, dynamic data-driven colors, shadow arbitrary values.
- Faction/rarity hex in components must match tailwind tokens.

### Typography Rules

- `font-bitcell` for all headings, labels, buttons, nav items, stat values.
- `font-m5x7` for all body copy, descriptions, prose, feature lists.
- Never use `font-sans` or `font-vt323` directly -- those are fallback definitions.
- All text is uppercase by convention (headings, buttons, labels). Body prose is mixed case.

### Animation Rules

- All scroll-triggered animations use `motion` from `motion/react` with `useInView` (`once: true`).
- Import variants from `animationVariants.ts` -- never define `{ opacity: 0, y: 20 }` inline.
- Use shared transition presets. Use `STAGGER` constant for delay increments.
- Content swaps always use `AnimatePresence mode="wait"`.
- Shared element transitions use `layoutId`.

### Styling Rules

- Always Tailwind classes over inline styles.
- `image-pixelated` class for all pixel art (custom utility in globals.css).
- `scrollbar-hidden` class for hidden scrollbars.
- Global scrollbar: thin, `#1a3a4a` thumb on transparent track.

### Responsive Breakpoints

Standard breakpoint usage across the design system:

| Breakpoint | Usage |
| --- | --- |
| Default (mobile) | Single column, stacked layout |
| `sm` (640px) | Button rows go horizontal, 2-col stat grids |
| `md` (768px) | Navbar height increases, footer height increases |
| `lg` (1024px) | Desktop nav visible, wider padding |
| `xl` (1280px) | Two-column section grids activate |
| `2xl` (1536px) | Largest text sizes, wider profile dropdown |
