# Axiom — Style Reference
> Terminal window at midnight — flat black canvas, monospaced text, and one orange cursor blinking

**Theme:** dark

Axiom is a terminal-grade dark interface where every glyph is monospaced, every surface is near-black, and one warm orange does all the chromatic work. The design language borrows from code editors and CLI tools — no gradients, almost no shadows, no rounded softness — instead layering information through subtle shifts in dark neutrals (from #000000 canvas to #191919 cards to #202020 borders) so the UI reads like a well-formatted log file. BerkeleyMono carries the entire voice, from hero headlines to nav labels, giving the product an engineering-native feel that signals audience before it signals brand. Orange appears as a precise tool: the primary CTA fill, the log-bar visualization, and a 2px left border that marks editorial case-study cards — never decorative, always functional.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void | `#000000` | `--color-void` | Page background, nav fill, terminal surface |
| Carbon | `#111111` | `--color-carbon` | Primary surface, card base, hero canvas |
| Graphite | `#191919` | `--color-graphite` | Elevated card background, case-study card fill |
| Iron | `#202020` | `--color-iron` | Hairline borders, dividers, subtle separation |
| Slate | `#3a3a3a` | `--color-slate` | Muted borders, icon strokes, secondary lines |
| Pewter | `#505050` | `--color-pewter` | Subtle dividers, decorative rules |
| Steel | `#606060` | `--color-steel` | Tertiary text, icon detail, inactive labels |
| Ash | `#7e7e7e` | `--color-ash` | Muted helper text, small annotations |
| Fog | `#b4b4b4` | `--color-fog` | Secondary text, label text, muted body |
| Chalk | `#d9d9d9` | `--color-chalk` | Light borders, stroke detail on icons |
| Paper | `#eeeeee` | `--color-paper` | Primary text, nav links, heading fill, button text |
| Ember | `#da5c2c` | `--color-ember` | Orange supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |

## Tokens — Typography

### BerkeleyMono — Universal typeface — headlines, body, nav, buttons, code, table cells, logo. Weight 400 carries prose and UI labels; weight 700 is reserved for emphasis and primary CTAs. The monospaced geometry unifies the brand and signals engineering audience. Every line of text, including navigation and button labels, sits in this monospaced grid — there is no proportional fallback for content. · `--font-berkeleymono`
- **Substitute:** JetBrains Mono, IBM Plex Mono, Fira Code
- **Weights:** 400, 700
- **Sizes:** 12px, 13px, 14px, 16px, 18px, 20px, 24px, 32px
- **Line height:** 1.0–1.71
- **Letter spacing:** normal
- **Role:** Universal typeface — headlines, body, nav, buttons, code, table cells, logo. Weight 400 carries prose and UI labels; weight 700 is reserved for emphasis and primary CTAs. The monospaced geometry unifies the brand and signals engineering audience. Every line of text, including navigation and button labels, sits in this monospaced grid — there is no proportional fallback for content.

### Inter — Secondary text layer — small icon labels, fine print, tertiary annotations where proportional letterforms reduce visual density below the mono baseline · `--font-inter`
- **Substitute:** system-ui, -apple-system, Segoe UI
- **Weights:** 400
- **Sizes:** 12px, 14px, 16px
- **Line height:** 1.33–1.50
- **Role:** Secondary text layer — small icon labels, fine print, tertiary annotations where proportional letterforms reduce visual density below the mono baseline

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | — | `--text-caption` |
| body | 14px | 1.71 | — | `--text-body` |
| heading-sm | 18px | 1.56 | — | `--text-heading-sm` |
| heading | 20px | 1.4 | — | `--text-heading` |
| heading-lg | 24px | 1.33 | — | `--text-heading-lg` |
| display | 32px | 1.25 | — | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 9999px |
| cards | 2px |
| icons | 9999px |
| inputs | 2px |
| buttons | 2px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 40px
- **Card padding:** 32px
- **Element gap:** 16px

## Components

### Primary CTA Button
**Role:** Hero call-to-action, conversion anchor

Filled button with #da5c2c background, #eeeeee text, BerkeleyMono 16px weight 700, 2px border radius, padding 10px 16px. Arrow glyph (→) follows the label. No shadow, no hover lift — color change only.

### Ghost Button
**Role:** Secondary action beside primary CTA

Transparent background, 1px #3a3a3a border, #eeeeee text, BerkeleyMono 16px weight 400, 2px radius, 10px 16px padding. Arrow glyph follows label. Sits in nav as "Sign up" and inline as "Sign up for free".

### Top Navigation Bar
**Role:** Primary site navigation, sticky on scroll

#000000 background, full-width, 16px horizontal padding. Logo (triangle mark + wordmark) left, nav links center in BerkeleyMono 14px weight 400 #eeeeee with dropdown chevrons, login/signup/demo cluster right. Height ~56px. Hairline #202020 bottom border optional.

### Announcement Banner
**Role:** Top-of-page product update strip

Full-width #111111 strip, BerkeleyMono 12px weight 400 #eeeeee text, centered or left-aligned. Closing × icon right. Subtle, not colorful — the message is the emphasis.

### Case Study Card
**Role:** Customer testimonial unit in horizontal scroller

#191919 background, 2px radius, 32px padding. 2px solid #da5c2c left border running full height — the only color in the card, functioning as a category tag. Customer logo top, headline BerkeleyMono 18px weight 400 #eeeeee, body text 14px, quote 14px italic-weight in a nested #111111 sub-card, avatar + name + role footer, underlined "case study →" link at bottom.

### Logo Grid Cell
**Role:** Customer logo display in social-proof band

#111111 background, 2px radius, centered grayscale logo, ~80px tall, 24px padding. Two rows of six cells. Logos rendered in #eeeeee or #b4b4b4 monochrome.

### Product Screenshot Panel
**Role:** Hero visual — the observability product UI

Full-width product mock with #111111 chrome, 2px radius, #202020 inner dividers. Tab bar (Datasets, Stream, Query, Dashboards, Monitor, Flows) in BerkeleyMono 12px with active tab underline. Blue log-bar histogram row (#2a7fff range) is the only interior color; results table below in #111111 with BerkeleyMono 12px monospaced columns and #3a3a3a row dividers.

### Arrow Decoration Field
**Role:** Background texture on hero right side

Repeating `>` glyphs in BerkeleyMono 12px weight 400 #3a3a3a, arranged in a diagonal right-pointing pattern. Fills negative space behind hero copy without adding visual weight — a terminal-style marquee that signals "streaming data".

### Tag / Pill
**Role:** Category label above card content (e.g., SAVINGS, SIMPLICITY)

Transparent background, BerkeleyMono 12px weight 400 #606060 uppercase, 0px padding. Pure typographic label, no border, no fill — the term sits above card headlines as editorial metadata.

### Pill Icon Badge
**Role:** Small circular badge or icon wrapper

9999px radius, ~24px diameter, #111111 or #202020 fill, white icon glyph centered. Used for utility icons and feature markers.

### Chevron Arrow Link
**Role:** Inline link with directional indicator

BerkeleyMono 14px weight 400 #eeeeee underlined text, followed by `→` glyph in same color. Appears at card footers ("Hapn case study →") and CTA-adjacent hints ("Book a demo →").

### Log Bar Histogram
**Role:** Data visualization in product UI and marketing

Tight rows of rectangular bars in #2a7fff or #da5c2c (the Ember accent), 4-8px tall, 2-4px gaps. Represents event volume over time. No axes labels in marketing context — the bar pattern itself is the visual.

## Do's and Don'ts

### Do
- Use BerkeleyMono for all UI text including nav, buttons, and labels — mixing proportional fonts breaks the terminal aesthetic
- Layer surfaces with #000000 → #111111 → #191919 → #202020 steps; never use box-shadow to create elevation
- Use #da5c2c (Ember) exclusively for primary action fills, log-bar visualization, and the 2px left border on case-study cards
- Set all border-radius to 2px for containers, cards, and buttons; reserve 9999px for tiny icon badges and tag pills under 32px
- Place the orange 2px left border on editorial/customer cards as a category mark — it is the only color punctuation in content blocks
- Use arrow glyphs (→) inline after action labels in BerkeleyMono to signal forward motion and reinforce the CLI cadence
- Anchor page background at pure #000000 and let paper-white (#eeeeee) text carry all hierarchy through weight (400 vs 700) and size

### Don't
- Don't introduce gradients, drop shadows beyond the single 1px/2px hairline, or colored backgrounds — the system is deliberately flat
- Don't use proportional sans-serif fonts (Inter, system-ui) for headlines, nav, or button labels — BerkeleyMono is non-negotiable for brand identity
- Don't apply #da5c2c to text, icons, or borders other than the CTA fill, log bars, and case-study left border — it loses meaning when scattered
- Don't round corners above 2px on cards, panels, or buttons — sharp geometry distinguishes this from typical SaaS soft-corner conventions
- Don't add light-theme sections or alternate surface colors — the entire product is dark-mode-only and any light surface breaks the system
- Don't use colored badge backgrounds for status (success/error/warning) — communicate state through BerkeleyMono symbols and border treatment only
- Don't place imagery or photography that isn't product UI or grayscale logo marks — the visual language is screenshots, log patterns, and arrow textures, not lifestyle photography

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void | `#000000` | Page base, nav, terminal canvas |
| 1 | Carbon | `#111111` | Primary content surface, hero background, announcement strip, logo cells |
| 2 | Graphite | `#191919` | Elevated cards, case-study panels, inset blocks |
| 3 | Iron | `#202020` | Borders, dividers, subtle inner separation |

## Elevation

- **Buttons, small interactive surfaces:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`

## Imagery

Visuals are dominated by product UI screenshots — the actual observability dashboard with its blue log-bar histogram and monospaced result tables. Decorative imagery is limited to repeating `>` arrow glyphs in low-contrast #3a3a3a forming a streaming-data pattern behind the hero. Customer logos are rendered in grayscale (#eeeeee or #b4b4b4) on flat #111111 cells — no photography, no lifestyle imagery, no abstract 3D renders. The product screenshot IS the hero.

## Layout

Full-bleed dark canvas with content constrained to a ~1200px max-width centered column. The hero is a left-aligned text block (terminal prompt `~/` above a two-line monospaced headline) paired with a right-side arrow texture and a full-width product screenshot below. Section rhythm is steady: hero → product screenshot → social proof logo grid (2×6) → horizontal-scrolling case study cards (3–4 visible, overflow with ←→ chevrons) → footer. Spacing between sections is 40–64px. The case-study scroller breaks the static grid with horizontal movement, hinting at scroll-driven interaction. Navigation is a simple top bar with no sticky mega-menu — every nav link is a single line of BerkeleyMono with an optional dropdown chevron.

## Agent Prompt Guide

**Quick Color Reference**
- text: #eeeeee
- background: #000000
- surface (card): #111111
- elevated surface: #191919
- border / divider: #202020
No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.
- primary action: no distinct CTA color

**3 Example Component Prompts**
2. Build a customer case-study card: #191919 background, 2px radius, 32px padding, 2px solid #da5c2c left border running full height. Customer logo top in #eeeeee. Headline BerkeleyMono 18px weight 400 #eeeeee. Quote block nested in #111111 with 16px padding, BerkeleyMono 14px weight 400 #b4b4b4. Footer row: 24px circular avatar + name BerkeleyMono 14px weight 700 #eeeeee + role 14px weight 400 #606060. Bottom link BerkeleyMono 14px underlined #eeeeee with → arrow.
3. Build a product screenshot panel: #111111 outer frame, 2px radius. Tab bar in BerkeleyMono 12px weight 400 #b4b4b4 with active tab underlined in #eeeeee. Histogram row of 4px-tall bars in #2a7fff at 2px intervals across full width. Results table in BerkeleyMono 12px weight 400 #eeeeee with #3a3a3a row dividers and #606060 timestamp column. No shadows, no rounded inner elements.

## Similar Brands

- **Vercel** — Same dark-mode developer aesthetic with monospaced accent typography and a near-black canvas, though Vercel uses Geist Mono rather than BerkeleyMono
- **Linear** — Dark-first interface with sharp 2px corners, flat surfaces, and a single warm accent color for primary actions against pure black backgrounds
- **Fly.io** — Engineering-native product UI using monospaced type throughout, near-black surfaces layered with hairline borders, and a single chromatic accent for CTAs
- **PlanetScale** — Dark-mode database product page with monospaced code-style typography, flat card surfaces, and a single warm orange accent on the primary CTA
- **Railway** — Developer-platform dark UI with terminal-inspired layouts, monospaced body text, and near-black surface layering instead of shadows

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void: #000000;
  --color-carbon: #111111;
  --color-graphite: #191919;
  --color-iron: #202020;
  --color-slate: #3a3a3a;
  --color-pewter: #505050;
  --color-steel: #606060;
  --color-ash: #7e7e7e;
  --color-fog: #b4b4b4;
  --color-chalk: #d9d9d9;
  --color-paper: #eeeeee;
  --color-ember: #da5c2c;

  /* Typography — Font Families */
  --font-berkeleymono: 'BerkeleyMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.71;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.56;
  --text-heading: 20px;
  --leading-heading: 1.4;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.33;
  --text-display: 32px;
  --leading-display: 1.25;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 40px;
  --card-padding: 32px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-cards: 2px;
  --radius-icons: 9999px;
  --radius-inputs: 2px;
  --radius-buttons: 2px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  /* Surfaces */
  --surface-void: #000000;
  --surface-carbon: #111111;
  --surface-graphite: #191919;
  --surface-iron: #202020;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void: #000000;
  --color-carbon: #111111;
  --color-graphite: #191919;
  --color-iron: #202020;
  --color-slate: #3a3a3a;
  --color-pewter: #505050;
  --color-steel: #606060;
  --color-ash: #7e7e7e;
  --color-fog: #b4b4b4;
  --color-chalk: #d9d9d9;
  --color-paper: #eeeeee;
  --color-ember: #da5c2c;

  /* Typography */
  --font-berkeleymono: 'BerkeleyMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.71;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.56;
  --text-heading: 20px;
  --leading-heading: 1.4;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.33;
  --text-display: 32px;
  --leading-display: 1.25;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
```




# Dovetail — Style Reference
> Blueprint grid under a black moon — faint graph lines, white type, one violet spark.

**Theme:** dark

Dovetail operates in a midnight command-center language: a near-black canvas structured by a faint blueprint grid, with white type and a single soft indigo accent. Surfaces stack from pure black to charcoal, each step subtle enough to feel like elevation through luminance rather than shadow. The system is compact and data-dense — Inter carries every reading load, JetBrains Mono stamps categorical labels, and 8px radii keep containers crisp rather than soft. Color is rationed: most of the interface stays achromatic, with #6798ff appearing only as functional punctuation on icons, stat markers, and chart elements.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Soft Indigo | `#6798ff` | `--color-soft-indigo` | Brand accent — iconography, stat markers, chart series, link states; the single chromatic note in an otherwise achromatic system |
| Pure Black | `#000000` | `--color-pure-black` | Deepest surface — modal backdrops, full-bleed image fills, inline SVG fills |
| Carbon | `#0a0a0a` | `--color-carbon` | Page canvas — the primary background; near-black with no warmth |
| Graphite | `#141414` | `--color-graphite` | Card surface — one step above the canvas to delineate content blocks |
| Iron | `#1e1e1e` | `--color-iron` | Elevated surface and border — secondary cards, table rows, subtle dividers |
| Slate Edge | `#313131` | `--color-slate-edge` | Hairline borders on imagery and nested elements — visible but recessive |
| Smoke | `#454545` | `--color-smoke` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Mist | `#7c7c7c` | `--color-mist` | Disabled or low-emphasis button text |
| Ash | `#a7a7a7` | `--color-ash` | Secondary text — captions, metadata, helper text, muted labels |
| Bone | `#ffffff` | `--color-bone` | Primary text, icons, filled CTA background, card surface inverts; the dominant light element in the dark system |

## Tokens — Typography

### Inter — Primary typeface for headings, body, navigation, and buttons. Used at 64px/56px for display headlines with tight tracking, 40px for section headings, 24px/20px for subheadings, 16px for body and nav, 14px for captions. Weight 400 is the reading default; 500–600 for labels and emphasis. Negative letter-spacing tightens at scale (–0.036em at 64px tapering to –0.012em at 20px) — the optical correction keeps large display type from feeling airy. · `--font-inter`
- **Substitute:** Inter or any neo-grotesque sans (Söhne, GT America)
- **Weights:** 400, 500, 600
- **Sizes:** 14, 16, 20, 24, 40, 56, 64
- **Line height:** 1.13–1.57
- **Letter spacing:** -2.3px at 64px, -2.0px at 56px, -0.84px at 40px, -0.6px at 24px, -0.5px at 20px, -0.25px at 16px
- **OpenType features:** `"liga"`
- **Role:** Primary typeface for headings, body, navigation, and buttons. Used at 64px/56px for display headlines with tight tracking, 40px for section headings, 24px/20px for subheadings, 16px for body and nav, 14px for captions. Weight 400 is the reading default; 500–600 for labels and emphasis. Negative letter-spacing tightens at scale (–0.036em at 64px tapering to –0.012em at 20px) — the optical correction keeps large display type from feeling airy.

### JetBrains Mono — All-caps category labels, section eyebrows (e.g. "HOW IT WORKS"), beta tags, and micro-text. Wide tracking (+0.071em to +0.083em) gives the type a stamped, technical feel — it reads as metadata, not copy. Sets it apart from Inter's proportional rhythm and signals the product's data/analytics domain. · `--font-jetbrains-mono`
- **Substitute:** JetBrains Mono or IBM Plex Mono
- **Weights:** 400
- **Sizes:** 12, 14
- **Line height:** 1.00, 1.40
- **Letter spacing:** +0.85px at 12px, +1.16px at 14px
- **OpenType features:** `"liga"`
- **Role:** All-caps category labels, section eyebrows (e.g. "HOW IT WORKS"), beta tags, and micro-text. Wide tracking (+0.071em to +0.083em) gives the type a stamped, technical feel — it reads as metadata, not copy. Sets it apart from Inter's proportional rhythm and signals the product's data/analytics domain.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.4 | 0.85px | `--text-caption` |
| body-sm | 14px | 1.57 | -0.25px | `--text-body-sm` |
| body | 16px | 1.5 | -0.25px | `--text-body` |
| heading-sm | 20px | 1.33 | -0.42px | `--text-heading-sm` |
| heading | 24px | 1.29 | -0.6px | `--text-heading` |
| heading-lg | 40px | 1.2 | -0.84px | `--text-heading-lg` |
| display-sm | 56px | 1.14 | -1.74px | `--text-display-sm` |
| display | 64px | 1.13 | -2.3px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 64 | 64px | `--spacing-64` |
| 96 | 96px | `--spacing-96` |
| 200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 4px |
| cards | 8px |
| inputs | 8px |
| buttons | 8px |
| navPills | 9999px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 8px

## Components

### Primary Button (Filled)
**Role:** High-emphasis call to action

White background (#ffffff), black text (#0a0a0a), 8px radius, 8px 16px padding, Inter 14px/500. Used for "Contact sales" and "Request a demo". The inverted treatment against the dark canvas creates maximum contrast — it is the only high-luminance element on most pages.

### Secondary Button (Ghost)
**Role:** Medium-emphasis action

Transparent background, 1px #454545 border, white text, 8px radius, 8px 16px padding, Inter 14px/500. Used for "Try Dovetail free". Reads as the same action class as the primary but defers visual weight.

### Navigation Pill
**Role:** Top-nav link container

Rounded pill shape (9999px radius), transparent background, white text, 8px 14px padding, Inter 14px/500. Product, Use cases, Resources, Enterprise, Customers, Pricing all use this shape. Sits flush on the dark canvas without a border.

### Nav CTA Group
**Role:** Right-aligned action pair in header

"Log in" as plain text link beside a filled white "Contact sales" button. The pair establishes a clear hierarchy: passive text for existing users, high-contrast action for new ones.

### Dashboard Preview Card
**Role:** Product hero visual — a live-looking data UI

Charcoal surface (#141414) with #1e1e1 borders, 8px radius, 24px padding. Contains a header bar (icon + title + tab toggle), a date-range selector, a bar chart with multi-color series, and a sortable data table below. The card demonstrates the product's actual interface — it is rendered, not illustrated.

### Stat Block
**Role:** Three-column KPI presentation

Large numeric value in Inter 40px/500 white, preceded by a small #6798ff icon (up-arrow, clock, speedometer), followed by a bold white label (16px/500) and a descriptive caption in #a7a7a7 (14px/400). Three blocks sit in a row with even spacing, centered within the content width.

### Section Eyebrow Label
**Role:** Categorical heading stamp above section titles

JetBrains Mono 12px/400, uppercase, +0.85px letter-spacing, #a7a7a7 color. Sits 24–32px above the section heading. Examples: "HOW IT WORKS", "PLATFORM", "USE CASES". The mono + caps + wide tracking combination reads as metadata rather than copy.

### Trust Logo Strip
**Role:** Social-proof band

Horizontal row of 6 monochrome customer logos in #a7a7a7, set at small scale (24–32px height) with even spacing. A short white label sits above: "Connecting the world's leading companies to their customers:". Flanked by star-rating summaries on the right.

### Footer Link Column
**Role:** Site-map navigation group

Each column starts with a JetBrains Mono 12px uppercase label in white, followed by 6–8 Inter 14px/400 links in #ffffff stacked with 12px row gap. Five columns total: Platform, Use Cases, Resources, Contact, Explore Outlier. The "Explore Outlier" column includes a long-form link block and a CTA arrow.

### BETA Tag
**Role:** Feature status indicator

Small inline label next to feature names (e.g. "AI Dashboards BETA"). Likely JetBrains Mono 12px in #a7a7a7 or a subtle bordered pill. Signals provisional status without alarming the reader.

### Promo Banner
**Role:** Top-of-page announcement strip

Full-width bar above the nav with a #6798ff or similar accent fill, white text, centered content. Contains a visual badge, short promotional copy, and a CTA. Sits above the main nav and establishes a secondary action channel.

### Chart Bar (Data Series)
**Role:** In-product visualization element

Vertical bars at varied heights with rounded tops, rendered in multiple accent hues (indigo, magenta, orange, green) against the charcoal card surface. Bars are ~6–8px wide with 2–4px gaps. The multi-color treatment is unique to data viz — the rest of the site stays monochromatic.

## Do's and Don'ts

### Do
- Use #0a0a0a as the universal page background — never pure white or lighter charcoal for the main canvas.
- Stack surfaces at #000000 → #0a0a0a → #141414 → #1e1e1 → #313131 to communicate elevation through luminance, not shadow.
- Apply #6798ff only to functional accents (stat icons, chart series, link hovers) — never as a large fill or background wash.
- Set headings in Inter 400–500 with negative letter-spacing scaling from –0.036em at 64px to –0.012em at 20px.
- Stamp section eyebrows in JetBrains Mono 12px, uppercase, with +0.071em tracking and #a7a7a7 color.
- Use 8px as the default radius for buttons, cards, and inputs; reserve 4px for inline tags and micro-elements.
- Pair every primary CTA (white fill) with a ghost secondary (transparent + #454545 border) in the same action group.

### Don't
- Do not introduce a second chromatic accent — the system runs on one indigo; adding green, red, or warm tones dilutes the signal.
- Do not use drop shadows for elevation; depth comes from surface stepping, not box-shadow.
- Do not center-align body copy — left-align paragraphs and descriptions; reserve center-align for headlines and stat blocks.
- Do not use display sizes below 40px in Inter; if something needs to be smaller than body, switch to JetBrains Mono for the label feel.
- Do not round buttons beyond 8px; the 8px radius is the system signature — full pills are reserved for navigation links.
- Do not place colored fills (other than #6798ff on small marks) over the dark canvas; the page should read as black-and-white with one violet spark.
- Do not use #ffffff as a surface or card background except inside the inverted CTA button; white is reserved for text and primary actions.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#0a0a0a` | Full-page background; the field on which all content sits |
| 1 | Card | `#141414` | Content blocks, dashboard previews, feature cards |
| 2 | Elevated | `#1e1e1` | Hover states, popovers, nested cards, table headers |
| 3 | Border | `#313131` | Hairline dividers, image outlines, field borders |
| 4 | Inverted | `#ffffff` | Filled CTA buttons, inverted text blocks |

## Elevation

Elevation is communicated through luminance contrast against the #0a0a0a canvas, not through drop shadows. Each surface level steps up by 10–15 units of brightness (#000 → #0a0a0a → #141414 → #1e1e1 → #313131), creating a quiet z-axis without visual noise. Shadows are absent from the system — depth comes from borders and tonal stepping alone.

## Imagery

The visual language is dominated by a faint blue-gray grid pattern that fills the dark canvas like architectural graph paper — it recedes into the background and provides spatial orientation without competing with content. Product preview mockups (dashboard panels, bar charts, data tables) are the primary illustrative element, rendered in the same dark palette so they feel native to the page. Icons are small, monochromatic, and outlined at ~1.5px stroke weight, occasionally accented with the #6798ff indigo for stat markers and chart legends. Customer logos in the trust strip are presented as flat monochrome marks on the dark background. There is no lifestyle photography; the product IS the hero.

## Layout

Full-bleed dark sections separated by 80px vertical gaps, all content constrained to a 1200px max-width centered container. The hero uses a two-column split: headline + subtext + dual CTAs on the left, a product dashboard preview on the right, both on the gridded dark canvas. Sections alternate between text-left/visual-right patterns and centered stat blocks (3-column grid for KPI rows with large numeric values). Navigation is a top bar with pill-shaped nav links and a high-contrast filled CTA on the far right. The footer is a multi-column link grid organized by category labels in JetBrains Mono, set against the same dark canvas without a visual separator from the page body.

## Agent Prompt Guide

**Quick Color Reference**
- text: #ffffff
- background: #0a0a0a
- card surface: #141414
- border: #1e1e1e or #313131
- accent: #6798ff
- primary action: #1e1e1e (filled action)

**3 Example Component Prompts**

1. **Hero Section**: #0a0a0a background. Headline at 64px Inter weight 500, #ffffff, letter-spacing -2.3px, max 2 lines. Subtext at 16px Inter weight 400, #a7a7a7, max-width 480px. Two buttons side by side: white-filled "Contact sales" (8px radius, 8px 16px padding, #0a0a0a text) and ghost "Try Dovetail free" (transparent, 1px #454545 border, 8px radius, #ffffff text). To the right, a #141414 dashboard preview card with 8px radius, 24px padding, containing a bar chart and data table mockup.

2. **Stat Row**: Three-column grid, centered. Each block: a #6798ff icon (24px), then 40px Inter weight 500 white number, then 16px Inter weight 500 white label, then 14px Inter weight 400 #a7a7a7 description. 32px gap between columns.

3. **Section with Eyebrow**: Centered. JetBrains Mono 12px uppercase #a7a7a7 eyebrow with +0.85px tracking, 32px gap, then 40px Inter weight 500 #ffffff heading, then optional 16px Inter weight 400 #a7a7a7 body below at max-width 640px.

**Grid Background Pattern**: On the #0a0a0a canvas, overlay a 1px grid using #1e1e1e lines at ~48px spacing. The grid is decorative — it recedes at ~5% opacity feel and provides spatial structure without competing with content.

## Grid Background System

The faint blue-gray grid that fills the dark sections is a signature element — it evokes architectural blueprints and data coordinates, reinforcing the product's analytical positioning. The grid uses 1px lines in #1e1e1e at ~48px cell spacing, rendered as a fixed background layer. It spans full-bleed across hero and section backgrounds but is omitted in the footer and content-heavy zones. To recreate: apply a CSS background-image with linear-gradient lines in both axes at the specified spacing, set on the section container behind all content.

## Similar Brands

- **Linear** — Same dark-mode command-center aesthetic with near-black canvas, single accent color, tight Inter typography, and subtle surface stepping instead of shadows
- **Vercel** — Identical monochrome dark palette, 8px radii, and the treatment of color as rare functional punctuation on a gridded black canvas
- **Cursor** — Dark UI with a single soft blue/indigo accent, JetBrains Mono for categorical labels, and product-screenshot hero mockups inlined as live-looking UI
- **Resend** — Same blueprint-grid background pattern on dark sections, compact 8px-radius components, and rationed use of a single chromatic accent
- **Retool** — Developer-tool visual language: charcoal surface stack, data-dense layouts, JetBrains Mono labels for categories, and a single indigo accent for interactive highlights

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-soft-indigo: #6798ff;
  --color-pure-black: #000000;
  --color-carbon: #0a0a0a;
  --color-graphite: #141414;
  --color-iron: #1e1e1e;
  --color-slate-edge: #313131;
  --color-smoke: #454545;
  --color-mist: #7c7c7c;
  --color-ash: #a7a7a7;
  --color-bone: #ffffff;

  /* Typography — Font Families */
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-jetbrains-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.85px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.57;
  --tracking-body-sm: -0.25px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.25px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.42px;
  --text-heading: 24px;
  --leading-heading: 1.29;
  --tracking-heading: -0.6px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.84px;
  --text-display-sm: 56px;
  --leading-display-sm: 1.14;
  --tracking-display-sm: -1.74px;
  --text-display: 64px;
  --leading-display: 1.13;
  --tracking-display: -2.3px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-200: 200px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-full: 66px;

  /* Named Radii */
  --radius-tags: 4px;
  --radius-cards: 8px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --radius-navpills: 9999px;

  /* Surfaces */
  --surface-canvas: #0a0a0a;
  --surface-card: #141414;
  --surface-elevated: #1e1e1;
  --surface-border: #313131;
  --surface-inverted: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-soft-indigo: #6798ff;
  --color-pure-black: #000000;
  --color-carbon: #0a0a0a;
  --color-graphite: #141414;
  --color-iron: #1e1e1e;
  --color-slate-edge: #313131;
  --color-smoke: #454545;
  --color-mist: #7c7c7c;
  --color-ash: #a7a7a7;
  --color-bone: #ffffff;

  /* Typography */
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-jetbrains-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.85px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.57;
  --tracking-body-sm: -0.25px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.25px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.42px;
  --text-heading: 24px;
  --leading-heading: 1.29;
  --tracking-heading: -0.6px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.84px;
  --text-display-sm: 56px;
  --leading-display-sm: 1.14;
  --tracking-display-sm: -1.74px;
  --text-display: 64px;
  --leading-display: 1.13;
  --tracking-display: -2.3px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-200: 200px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-full: 66px;
}
```



# Monologue — Style Reference
> Velvet library with a single blue spark. A vast dark room where a single italic serif headline commands attention and one cyan glow signals action.

**Theme:** dark

Monologue operates as a dark editorial canvas draped in near-black with a single electric teal pulse. The visual identity is anchored by Instrument Serif at dramatic scale — italicized headlines ranging from 28px to 400px create a magazine-cover weight, with the brand wordmark blooming across the full viewport as ghostly gray type. DM Mono handles the technical/UI chrome: labels, tags, and structural annotations that read as system metadata rather than copy. Surfaces are matte and paper-thin against the void; a solitary white download button and the teal-gradient product card provide the only points of physical weight. The mood is late-night workstation meets luxury print — confident, quiet, and typographically opinionated.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Electric Cyan | `#19d0e8` | `--color-electric-cyan` | Accent text, accent borders, the video card surface, the gradient highlight on the product screen — the only chromatic pulse in an otherwise achromatic system |
| Sky Signal | `#44ccff` | `--color-sky-signal` | Secondary cyan for gradient stops and product screen illumination |
| Deep Teal | `#062f34` | `--color-deep-teal` | Card surface base, gradient shadow stop — anchors the teal product card in darkness |
| Void Black | `#000000` | `--color-void-black` | Page canvas, primary background — the uninterrupted dark field |
| Obsidian | `#010101` | `--color-obsidian` | Alternative near-black surface when the canvas shifts fractionally off-pure-black |
| Midnight Surface | `#191919` | `--color-midnight-surface` | Elevated surface — cards, panels, overlay containers sitting one step above the void |
| Graphite | `#282828` | `--color-graphite` | Mid-tier surface and neutral button fills — the interactive control surface |
| Charcoal | `#363636` | `--color-charcoal` | Secondary card surface for stacked or grouped containers |
| Slate | `#3f3f3f` | `--color-slate` | Deep shadow surface and tertiary elevation |
| Steel Gray | `#7f7f7f` | `--color-steel-gray` | Supporting neutral for secondary UI, dividers, and muted labels. Do not promote it to the primary CTA color |
| Paper White | `#ffffff` | `--color-paper-white` | Primary text, light surface fills, download button, high-contrast elements |
| Ghost Gray | `#c0c0c0` | `--color-ghost-gray` | Subtle highlight wash and faint surface luminosity |

## Tokens — Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### Instrument Serif — Display and heading — italicized editorial serif at dramatic scale. The brand wordmark reaches 400px filling the viewport; section headlines land at 64–96px. Negative letter-spacing tightens the serif into compact magazine-display density. · `--font-instrument-serif`
- **Substitute:** Playfair Display, EB Garamond, Cormorant Garamond
- **Weights:** 400
- **Sizes:** 28px, 30px, 32px, 40px, 48px, 64px, 70px, 72px, 96px, 393px, 403px
- **Line height:** 1.0–1.3
- **Letter spacing:** -0.04em at 64px and above; -0.03em at 48px; 0.008em at 32px
- **Role:** Display and heading — italicized editorial serif at dramatic scale. The brand wordmark reaches 400px filling the viewport; section headlines land at 64–96px. Negative letter-spacing tightens the serif into compact magazine-display density.

### DM Mono — Mono UI chrome — labels, tags, metadata, button text, the 'MADE BY EVERY' stamp, the download button label, feature annotations. Reads as system metadata. The 32px usage appears in product device labels. · `--font-dm-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono, Space Mono
- **Weights:** 400
- **Sizes:** 10px, 12px, 14px, 15px, 16px, 18px, 20px, 32px
- **Line height:** 1.2–1.5
- **Letter spacing:** -0.01em at 20px; 0.015–0.021em at 10–14px (slight positive tracking for tag/caps usage)
- **Role:** Mono UI chrome — labels, tags, metadata, button text, the 'MADE BY EVERY' stamp, the download button label, feature annotations. Reads as system metadata. The 32px usage appears in product device labels.

### Geist — Body text — 17px single weight for paragraphs and descriptions. The slightly larger-than-default body size (17 vs 16) gives copy room to breathe against the dense UI chrome. · `--font-geist`
- **Substitute:** Inter, system-ui
- **Weights:** 400
- **Sizes:** 17px
- **Line height:** 1.4
- **Role:** Body text — 17px single weight for paragraphs and descriptions. The slightly larger-than-default body size (17 vs 16) gives copy room to breathe against the dense UI chrome.

### system-ui — Fallback body and link text — appears in utility contexts where a system font is appropriate · `--font-system-ui`
- **Substitute:** Inter, -apple-system, Segoe UI
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.5
- **Role:** Fallback body and link text — appears in utility contexts where a system font is appropriate

### SF Pro Display Regular — SF Pro Display Regular — detected in extracted data but not described by AI · `--font-sf-pro-display-regular`
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.4
- **Letter spacing:** -0.006
- **Role:** SF Pro Display Regular — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.4 | 0.21px | `--text-caption` |
| body | 17px | 1.4 | — | `--text-body` |
| subheading | 20px | 1.2 | -0.2px | `--text-subheading` |
| heading-sm | 32px | 1.1 | 0.26px | `--text-heading-sm` |
| heading | 48px | 1.1 | -1.44px | `--text-heading` |
| heading-lg | 72px | 1 | -2.16px | `--text-heading-lg` |
| display | 96px | 0.9 | -3.84px | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 5 | 5px | `--spacing-5` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 9 | 9px | `--spacing-9` |
| 10 | 10px | `--spacing-10` |
| 11 | 11px | `--spacing-11` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 18 | 18px | `--spacing-18` |
| 19 | 19px | `--spacing-19` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 72 | 72px | `--spacing-72` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 100000px |
| cards | 18px |
| large | 12px |
| small | 4px |
| medium | 8px |
| buttons | 100000px |
| productDevice | 40px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.7) 3px 3px 2px 0px inset, rgba(255, 255, ...` | `--shadow-subtle` |
| sm | `rgba(0, 0, 0, 0.25) 0px 4px 4px 0px, rgba(255, 255, 255, ...` | `--shadow-sm` |
| subtle-2 | `rgba(0, 0, 0, 0.63) 0px 0px 0px 1px` | `--shadow-subtle-2` |
| md | `rgb(14, 93, 102) 6px 6px 10px 0px inset, rgba(255, 255, 2...` | `--shadow-md` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 10px

## Components

### Brand Wordmark Background
**Role:** Atmospheric full-viewport type

The word 'Monologue' rendered in Instrument Serif at ~400px, light gray (#c0c0c0 to #d1d1d1 gradient fading to white), positioned to overflow the viewport edges. Serves as a watermark/ghost text — the primary background element, not a heading. z-index behind all content.

### Product Device Card
**Role:** Hero product visual

White (#ffffff) rounded body at 40px radius, ~360px wide. Contains a dark teal gradient screen (linear-gradient(rgb(32,177,195), rgb(3,67,75))) with a pixelated/dot-matrix display texture, and a speaker grille on the left side rendered as a grid of black dots. A 'Download' pill button with the Apple icon sits at the bottom of the screen. Multi-layer inset and outset shadows create a tangible, physical-device quality. A 'MADE BY EVERY' stamp badge protrudes from the top edge.

### Every Stamp Badge
**Role:** Brand attribution stamp

Navy (#1a3a4a) scalloped/wavy-edge badge, ~140px wide, positioned overlapping the top of the product card. 'MADE BY' in DM Mono 10px white above 'EVERY' in DM Mono 18–20px white. Heavy inset shadow (rgba(0,0,0,0.7) 3px 3px 2px inset) gives it a postage-stamp embossed feel. Attached to the product device at the top.

### Download Button (Light Pill)
**Role:** Primary download CTA

White (#ffffff) background, black text and Apple icon, DM Mono 12px. Fully rounded (100000px radius). ~120px wide × 32px tall. Minimal — no border, no shadow. The sole light element on the dark canvas, creating high-contrast focal weight.

### Watch Video Card
**Role:** Secondary CTA / video preview

Teal-tinted dark surface in the top-right of the hero. Contains a small video thumbnail (landscape crop, ~80px) with a 'Watch video' play-button overlay, plus the label 'Introducing Monologue notes' in white italic serif at 14–16px. Rounded 8px corners. Functions as a soft secondary action.

### Section Heading (Italic Serif)
**Role:** Editorial section title

Instrument Serif 400 italic, 64–72px, white (#ffffff). Left-aligned. Negative letter-spacing -0.04em tightens the serif. Two-line max width creates a magazine-column feel. Paired with a subheading in Geist 17px #7f7f7f or white at reduced opacity.

### Feature Annotation Row
**Role:** Feature callout with product image

Two-column layout: left side has a DM Mono 12–14px label (e.g. 'Auto formatting') in white with positive letter-spacing, plus a Geist 17px description in muted gray (#7f7f7f). Right side has a product screenshot card with the email composition UI. 10px row gap between label and description.

### Email Composition Card
**Role:** Product feature screenshot

Dark surface (#191919 or similar), rounded 8–12px, showing an email draft UI. Contains fields for 'To:', 'Subject:', 'From:' in DM Mono, and body text in Geist. The content area uses a teal-to-dark gradient as background. This is the 'Monologue in action' visual — demonstrates auto-formatted voice output.

### Testimonial Block
**Role:** Social proof quote

Centered layout. Italic Instrument Serif 24–28px white quote text. Below: a small circular avatar placeholder, name in DM Mono 12px, and title/role in DM Mono 10px in muted gray. 40–60px vertical padding. Minimal — no card background, floats on the void.

### Language Pill
**Role:** Feature tag / language support indicator

DM Mono 12px, white or muted gray text, no background, no border. Arranged in a horizontal row at the section bottom. The first item (the language name) is styled in italic Instrument Serif as a section sub-label. Fully rounded layout with ~20px gap between pills.

### Accent Text Link
**Role:** Inline accent / emphasis link

Electric Cyan (#19d0e8) text, Geist or DM Mono, often italic. Used for the word 'Every' in the hero subtext and for other inline emphasis. The cyan appears at most 2–3 times per screen — always as a small punctuation mark, never as a full CTA background.

### Ghost Button
**Role:** Secondary text button

Transparent background, 1px white or gray border, white text in DM Mono 12px, 8px radius, 8–10px vertical padding, 14–16px horizontal padding. Used for secondary actions when a light-fill primary isn't appropriate.

## Do's and Don'ts

### Do
- Use Instrument Serif italic at 64–96px for section headlines — the editorial weight is the brand's primary signature
- Let the brand wordmark bleed beyond viewport edges at ~400px as a ghosted background layer
- Use DM Mono for all UI chrome, labels, buttons, and metadata — never use a proportional font for system annotations
- Apply the teal accent (#19d0e8) at most 2–3 times per viewport — it should feel like a spark, not a wash
- Use fully rounded (100000px) radius for all pills, tags, and the download button
- Use 18–40px radius for cards and the product device — the generous rounding signals physical tangibility
- Layer complex inset + outset shadows on the product device card to create a real-object quality on the void canvas

### Don't
- Do not use bright or warm accent colors — the system is monastically dark with one cold teal point
- Do not use heavy drop shadows on text or flat cards — elevation should be reserved for the product device and stamps
- Do not use Inter or a geometric sans for headings — the italic serif is non-negotiable brand identity
- Do not use small heading sizes (below 28px) for Instrument Serif — it needs scale to function
- Do not apply the teal as a background fill on buttons or large surfaces — it belongs in text, thin borders, and the gradient
- Do not use sharp corners (< 4px radius) on interactive elements — the system curves everything
- Do not center-align body paragraphs — left-align for editorial column behavior, center only for testimonials and the wordmark

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void | `#000000` | Page canvas, unbroken background |
| 1 | Midnight | `#191919` | Cards, panels, raised containers |
| 2 | Graphite | `#282828` | Interactive surfaces, button fills, elevated UI |
| 3 | Charcoal | `#363636` | Nested card backgrounds, grouped content blocks |
| 4 | Paper | `#ffffff` | Inverted light surface — download button, product device body |

## Elevation

- **Product device card:** `rgba(0, 0, 0, 0.25) 0px 4px 4px 0px, rgba(255, 255, 255, 0.25) 1px 1px 2px 0px, rgba(0, 0, 0, 0.5) 1px 1px 1px 0px inset, rgba(0, 0, 0, 0.7) 2px 2px 12px 0px inset`
- **Stamp/badge:** `rgba(0, 0, 0, 0.7) 3px 3px 2px 0px inset, rgba(255, 255, 255, 0.25) 3px 2px 2px 0px`
- **Raised card:** `rgba(0, 0, 0, 0.63) 0px 0px 0px 1px`
- **Teal gradient card:** `rgb(14, 93, 102) 6px 6px 10px 0px inset, rgba(255, 255, 255, 0.2) 4px 4px 4px 0px, rgba(255, 255, 255, 0.25) 1px 1px 2px 0px`

## Imagery

Imagery is minimal and product-centric. The dominant visual is the product device card — a physical, tangible object rendered with multi-layer shadows to feel like a real device sitting on a dark surface. Email composition screenshots appear as feature illustrations inside dark cards, showing the product's output rather than abstract graphics. The background carries a subtle fabric/ripple texture (dark water-like undulations) that adds atmospheric depth without literal imagery. No photography, no lifestyle shots, no people — the product IS the hero, and everything else is typographic atmosphere.

## Layout

Full-bleed dark canvas with content constrained to ~1200px max width. The hero is a split composition: left half holds the headline and download button in generous whitespace, right half holds the teal video card at the top corner. The massive 'Monologue' wordmark spans the full viewport width as a background watermark, overflowing the content container. Below the fold, sections alternate between centered text blocks and two-column layouts (text-left, product-screenshot-right). Vertical rhythm is generous — 80px section gaps create breathing room between dense information blocks. The language support row sits as a horizontal strip near the bottom, single-line, with the italic serif label 'Supports 100+ languages' anchoring the left edge.

## Agent Prompt Guide

**Quick Color Reference**
- text: #ffffff
- background: #000000
- card surface: #191919
- border / hairline: #282828
- accent: #19d0e8
- primary action: #282828 (filled action)

**3-5 Example Component Prompts**

1. **Hero section with ghost brand wordmark**: Black (#000000) full-bleed background. Instrument Serif italic, 72px, #ffffff, letter-spacing -0.04em for the headline. DM Mono 12px, #7f7f7f for subtext. A ghost 'Monologue' wordmark in Instrument Serif ~400px, #c0c0c0, positioned as an absolute background layer overflowing the viewport. Geist 17px, #7f7f7f for body description.

2. **Product device card**: White (#ffffff) rounded body at 40px radius, 360px wide. Contains a dark teal gradient screen (linear-gradient(rgb(32,177,195), rgb(3,67,75))) with a dot-matrix texture. A white 'Download' pill button (DM Mono 12px, Apple icon, 100000px radius) sits at the bottom of the screen. Multi-layer shadow: rgba(0,0,0,0.25) 0px 4px 4px, rgba(255,255,255,0.25) 1px 1px 2px, rgba(0,0,0,0.5) 1px 1px 1px inset, rgba(0,0,0,0.7) 2px 2px 12px inset.

3. **Section heading with two-column feature layout**: Left column: Instrument Serif italic 64px, #ffffff, letter-spacing -0.04em. Geist 17px, #7f7f7f for subtext. Right column: dark card (#191919, 8px radius) containing a product screenshot. 80px vertical gap from previous section. 10px row gap between label and description in the feature annotation.

4. **Language pill row**: Horizontal strip at section bottom. Left anchor: 'Supports 100+ languages' in Instrument Serif italic, 28px, #ffffff. Followed by DM Mono 12px tags (#7f7f7f): 'English', 'Portuguese', 'Cantonese', 'Japanese', 'Korean', 'Russian', 'Italian'. 20px gap between tags, no backgrounds.

5. **Testimonial block**: Centered, no card background. Instrument Serif italic 28px, #ffffff for the quote. Below: 32px circular avatar placeholder (#282828). Name in DM Mono 12px white, role in DM Mono 10px #7f7f7f. 60px vertical padding top and bottom.

## Gradient System

Two distinct gradient families: (1) **Teal signal gradient** — linear-gradient(rgb(32,177,195) 0%, rgb(3,67,75) 100%) — used exclusively on the product device screen and the email composition card backgrounds. This gradient creates the brand's only saturated color field. (2) **Light fade gradient** — linear-gradient(rgb(209,209,209) 0%, rgb(255,255,255) 100%) — applied to the ghosted wordmark text and other large-scale gray type that needs to fade into lighter values. The teal gradient always points vertically with the lighter cyan on top; the light gradient always points vertically with the darker gray on top. No diagonal or multi-stop gradients are used.

## Typography Pairing Philosophy

The system uses a three-font editorial model: Instrument Serif (display), DM Mono (UI/system metadata), and Geist (body). The serif carries voice and personality; the mono carries function and precision; the sans carries readable prose. Never mix these roles. Headlines are always Instrument Serif italic — the italic is a brand marker, not a style option. Mono text often uses positive letter-spacing (0.015–0.021em) at small sizes to give labels a deliberate, spaced-out quality. Serif text always uses negative tracking at display sizes to tighten the magazine-display feel.

## Similar Brands

- **Linear** — Same dark canvas with generous spacing, restrained accent use, and editorial product presentation
- **Vercel** — Similar near-black surfaces, mono labels for system chrome, and one cool accent against monochrome
- **Raycast** — Dark-mode productivity app with mono UI typography and a single chromatic accent for interactive elements
- **Every.to** — The parent publication uses the same Instrument Serif italic + DM Mono pairing for editorial product pages
- **Things 3** — Premium dark UI with generous rounding, physical card metaphors, and restrained accent color philosophy

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-electric-cyan: #19d0e8;
  --color-sky-signal: #44ccff;
  --color-deep-teal: #062f34;
  --color-void-black: #000000;
  --color-obsidian: #010101;
  --color-midnight-surface: #191919;
  --color-graphite: #282828;
  --color-charcoal: #363636;
  --color-slate: #3f3f3f;
  --color-steel-gray: #7f7f7f;
  --color-paper-white: #ffffff;
  --color-ghost-gray: #c0c0c0;

  /* Typography — Font Families */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-instrument-serif: 'Instrument Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-dm-mono: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sf-pro-display-regular: 'SF Pro Display Regular', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.21px;
  --text-body: 17px;
  --leading-body: 1.4;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: 0.26px;
  --text-heading: 48px;
  --leading-heading: 1.1;
  --tracking-heading: -1.44px;
  --text-heading-lg: 72px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -2.16px;
  --text-display: 96px;
  --leading-display: 0.9;
  --tracking-display: -3.84px;

  /* Typography — Weights */
  --font-weight-regular: 400;

  /* Spacing */
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-72: 72px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 10px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 18px;
  --radius-3xl: 24px;
  --radius-3xl-2: 40px;
  --radius-full: 52px;
  --radius-full-2: 56px;
  --radius-full-3: 60px;
  --radius-full-4: 100px;
  --radius-full-5: 900px;
  --radius-full-6: 100000px;

  /* Named Radii */
  --radius-tags: 100000px;
  --radius-cards: 18px;
  --radius-large: 12px;
  --radius-small: 4px;
  --radius-medium: 8px;
  --radius-buttons: 100000px;
  --radius-productdevice: 40px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.7) 3px 3px 2px 0px inset, rgba(255, 255, 255, 0.25) 3px 2px 2px 0px;
  --shadow-sm: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px, rgba(255, 255, 255, 0.25) 1px 1px 2px 0px, rgba(0, 0, 0, 0.5) 1px 1px 1px 0px inset, rgba(0, 0, 0, 0.7) 2px 2px 12px 0px inset;
  --shadow-subtle-2: rgba(0, 0, 0, 0.63) 0px 0px 0px 1px;
  --shadow-md: rgb(14, 93, 102) 6px 6px 10px 0px inset, rgba(255, 255, 255, 0.2) 4px 4px 4px 0px, rgba(255, 255, 255, 0.25) 1px 1px 2px 0px;

  /* Surfaces */
  --surface-void: #000000;
  --surface-midnight: #191919;
  --surface-graphite: #282828;
  --surface-charcoal: #363636;
  --surface-paper: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-electric-cyan: #19d0e8;
  --color-sky-signal: #44ccff;
  --color-deep-teal: #062f34;
  --color-void-black: #000000;
  --color-obsidian: #010101;
  --color-midnight-surface: #191919;
  --color-graphite: #282828;
  --color-charcoal: #363636;
  --color-slate: #3f3f3f;
  --color-steel-gray: #7f7f7f;
  --color-paper-white: #ffffff;
  --color-ghost-gray: #c0c0c0;

  /* Typography */
  --font-sans-serif: 'sans-serif', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-instrument-serif: 'Instrument Serif', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-dm-mono: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sf-pro-display-regular: 'SF Pro Display Regular', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.21px;
  --text-body: 17px;
  --leading-body: 1.4;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: 0.26px;
  --text-heading: 48px;
  --leading-heading: 1.1;
  --tracking-heading: -1.44px;
  --text-heading-lg: 72px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -2.16px;
  --text-display: 96px;
  --leading-display: 0.9;
  --tracking-display: -3.84px;

  /* Spacing */
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-72: 72px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 18px;
  --radius-3xl: 24px;
  --radius-3xl-2: 40px;
  --radius-full: 52px;
  --radius-full-2: 56px;
  --radius-full-3: 60px;
  --radius-full-4: 100px;
  --radius-full-5: 900px;
  --radius-full-6: 100000px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.7) 3px 3px 2px 0px inset, rgba(255, 255, 255, 0.25) 3px 2px 2px 0px;
  --shadow-sm: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px, rgba(255, 255, 255, 0.25) 1px 1px 2px 0px, rgba(0, 0, 0, 0.5) 1px 1px 1px 0px inset, rgba(0, 0, 0, 0.7) 2px 2px 12px 0px inset;
  --shadow-subtle-2: rgba(0, 0, 0, 0.63) 0px 0px 0px 1px;
  --shadow-md: rgb(14, 93, 102) 6px 6px 10px 0px inset, rgba(255, 255, 255, 0.2) 4px 4px 4px 0px, rgba(255, 255, 255, 0.25) 1px 1px 2px 0px;
}
```


# monopo saigon — Style Reference
> Liquid iridescence behind editorial silence — a monochrome editorial gallery floating on molten light.

**Theme:** light

Monopo Saigon runs on radical monochrome discipline: pure black and white with whisper-thin grays, wrapped around massive Roobert typography that breathes across full-bleed canvases. The signature contrast lives between austere editorial restraint (sharp 0px corners on navigation and text links, generous whitespace, 4px-based rhythm) and a single expressive gesture — full-pill 75px-radius buttons that float like liquid over imagery. Hero environments lean into iridescent, fluid, chromatic atmospheres (greens dissolving into amber into deep oxblood) while the interface itself never picks up a hue, creating the feeling of a black-and-white editorial gallery floating on a river of liquid light. Type sets the temperature: weight 300 at 78px whispers, weight 400 at 225px fills the viewport, and weight 400 at 11px labels everything else with confident minimalism. Motion is expressive but patient — cubic-bezier(0.19, 1, 0.22, 1) ease curves stretching up to 1.25s transform transitions, letting elements glide rather than snap.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#000000` | `--color-obsidian` | Primary text, SVG strokes, overlay fills — pure black carries all foreground information and graphic marks |
| Paper | `#ffffff` | `--color-paper` | Light text on dark surfaces, inverse labels, and high-contrast captions. Do not promote it to the primary CTA color |
| Inkstone | `#181818` | `--color-inkstone` | Footer body copy and secondary headings — softened black for long-form reading blocks |
| Felt Gray | `#6d6d6d` | `--color-felt-gray` | Muted helper text, address blocks, legal copy — quiet annotations that recede without disappearing |
| Slate Pill | `#636363` | `--color-slate-pill` | Filled neutral button background — the only solid fill used for actions like Accept |
| Ash Mist | `#9a9a9a` | `--color-ash-mist` | Mid-tone neutral for disabled or low-contrast surfaces in the surface stack |
| Pewter | `#808080` | `--color-pewter` | Secondary mid-tone neutral for hover or muted state layers |
| Iridescent Fade | `linear-gradient(90deg, rgb(160, 224, 171), rgb(255, 172, 46) 50%, rgb(165, 45, 37))` | `--color-iridescent-fade` | Chromatic accent appearing only inside the hero gradient wash — molten oxblood anchor of the iridescent atmosphere, not used in interface controls |

## Tokens — Typography

### Roobert — Primary typeface across all interface text, navigation, hero headlines, body, lists, and footers. The custom sans carries geometric clarity with humanist warmth; its wide weight range (300 whisper through 600 anchor) lets the system breathe from monumental 225px headlines down to 11px labels · `--font-roobert`
- **Substitute:** Inter or Söhne — both share Roobert's geometric-humanist balance and clean aperture
- **Weights:** 300, 400, 600
- **Sizes:** 11px, 12px, 16px, 18px, 29px, 30px, 39px, 45px, 54px, 78px, 94px, 225px
- **Line height:** 0.70–2.34 (tight 0.70–0.76 on display sizes, generous 1.58 on body)
- **Role:** Primary typeface across all interface text, navigation, hero headlines, body, lists, and footers. The custom sans carries geometric clarity with humanist warmth; its wide weight range (300 whisper through 600 anchor) lets the system breathe from monumental 225px headlines down to 11px labels

### Raleway — Reserved for specific heading contexts where a slightly more elegant, narrower sans introduces contrast — appears sparingly as a counterpoint to Roobert's bolder presence · `--font-raleway`
- **Substitute:** Montserrat or Jost
- **Weights:** 400
- **Sizes:** 54px
- **Line height:** 1.39
- **Role:** Reserved for specific heading contexts where a slightly more elegant, narrower sans introduces contrast — appears sparingly as a counterpoint to Roobert's bolder presence

### system-ui — Micro UI labels, cookie banner body, fine print — browser default fallback ensuring legibility at the smallest scale without committing to a custom face · `--font-system-ui`
- **Weights:** 400
- **Sizes:** 9px, 16px
- **Line height:** 1.15–1.32
- **Role:** Micro UI labels, cookie banner body, fine print — browser default fallback ensuring legibility at the smallest scale without committing to a custom face

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.19 | — | `--text-caption` |
| body-sm | 16px | 1.15 | — | `--text-body-sm` |
| body | 18px | 1.21 | — | `--text-body` |
| subheading | 39px | 1.19 | — | `--text-subheading` |
| subheading-lg | 45px | 1.15 | — | `--text-subheading-lg` |
| heading-sm | 54px | 1.39 | — | `--text-heading-sm` |
| heading | 78px | 1.1 | — | `--text-heading` |
| heading-lg | 94px | 0.76 | — | `--text-heading-lg` |
| display | 225px | 1.25 | — | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 28 | 28px | `--spacing-28` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 68 | 68px | `--spacing-68` |
| 152 | 152px | `--spacing-152` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 75px |
| cards | 0px |
| images | 0px |
| inputs | 0px |
| buttons | 75px |

### Layout

- **Page max-width:** 1078px
- **Section gap:** 46px
- **Card padding:** 34px
- **Element gap:** 14px

## Components

### Ghost Pill Button (Dark Surface)
**Role:** Primary action button used over iridescent or dark hero media

Transparent background, 1px solid rgba(255,255,255,0.3) border, #ffffff text, 75px border-radius (full pill), 11px vertical and 33px horizontal padding, Roobert 16px weight 400. The translucent border dissolves into the iridescent background while the pill silhouette stays unmistakable.

### Ghost Pill Button (Light Surface)
**Role:** Secondary action on white or light gray sections

Transparent background, 1px solid #000000 border, #000000 text, 75px border-radius, 11px vertical and 33px horizontal padding, Roobert 16px weight 400. Mirrors the dark-surface variant — same geometry, inverted palette.

### Filled Neutral Pill
**Role:** Cookie consent and utilitarian confirmations

rgba(55,55,55,0.78) background (functionally Slate Pill #636363), #ffffff text, 1px solid #ffffff border, 75px border-radius, 11px vertical and 33px horizontal padding. The only solid-filled action in the system — used sparingly for compliance and consent, never for primary marketing CTAs.

### Underline-Free Text Link
**Role:** Inline navigation, menu items, language switcher, footer links

No background, no border, 0px radius. Roobert 12–16px weight 400, color shifts between #ffffff (on dark) and #000000 (on light). Underlines are absent — context and weight set the link apart from body copy. Generous line-height (1.36 at 11px, 1.19 at 12px) keeps stacked menus airy.

### Hero Display Headline
**Role:** Full-viewport editorial title

Roobert 225px weight 400, line-height 1.25, #ffffff over iridescent dark media. Letter-spacing normal. The headline is the hero — no subhead, no CTA, just one monumental phrase centered in the viewport breathing against fluid light.

### Section Heading (Whisper Weight)
**Role:** Atmospheric headline for manifesto or feature sections

Roobert 78px weight 300, line-height 1.10. The 300-weight at this scale is anti-convention — most sites push 600–700 here. The whisper weight lets the headline feel like it is being spoken, not shouted, giving the editorial chamber its hushed authority.

### Section Heading (Anchor Weight)
**Role:** Bold editorial divider or statement

Roobert 94px weight 400, line-height 0.76. The tight line-height (0.76) is dramatic — text lines almost touch, creating a dense typographic block that reads as art object. Used for large statement moments where the text itself is visual.

### Project Card / List Row
**Role:** Featured work entry — paired image and title

Transparent background, 0px border-radius, no shadow. Image bleeds full-width within the 1078px container; title sits below in Roobert 16–18px weight 400. No card chrome — the card is content, not a container. Spacing between rows controlled by 14–46px gaps depending on section density.

### Language Switcher
**Role:** Top-bar locale selector (EN / VN / 中文)

Three inline text links in Roobert 12px weight 400, color #ffffff or #000000 depending on surface, 0px radius, separated by visual whitespace rather than dividers. Active locale carries the same color but slightly heavier visual weight through spacing alone.

### Rotating Scroll Indicator
**Role:** Bottom-left circular badge prompting downward exploration

Circular SVG badge with text tracing the circumference ('SCROLL DOWN · SCROLL DOWN'), rotating continuously at slow tempo. Sits at 0,0 of the bottom-left corner with small offset. Ink black stroke on transparent fill — a typographic punctuation mark, not a button.

### Footer Address Block
**Role:** Studio contact information

Roobert 11px weight 400 line-height 1.36, #6d6d6d Felt Gray text. Tight 8px top margins between lines create a compact address stack that recedes into the page. No dividers or labels — the muted gray does the work.

### Cookie Banner
**Role:** Compliance notice with single accept action

Fixed bottom bar, rgba(55,55,55,0.78) Slate Pill background, white body text in system-ui 9–16px, paired with Filled Neutral Pill 'Accept' button. Minimal copy, single action, no settings — the banner respects attention by asking for nothing beyond consent.

### Top Navigation Bar
**Role:** Persistent header with logo, locale, and menu

Fixed transparent header 66px tall. Logo wordmark top-left (Roobert 16px weight 400 'monopo saigon'), language switcher centered, menu stack right-aligned (WORK / MANIFESTO / SAIGON SOULS / TEAM / CONTACT at 11–12px weight 400). No background fill — the header is invisible until content scrolls behind it.

### Iridescent Hero Backdrop
**Role:** Atmospheric media behind hero headlines

Full-viewport organic gradient or video: soft sage green (rgb 160,224,171) dissolving through molten amber (rgb 255,172,46) into deep oxblood (rgb 165,45,37). Applied as a flowing, liquid texture — never as a flat gradient. This is the only chromatic surface in the entire system and exists only behind text, never as UI fill.

## Do's and Don'ts

### Do
- Set display headlines at 225px Roobert weight 400 and let them own the viewport — never crowd them with subheads or CTAs
- Use the 75px pill radius exclusively for buttons and tags — keep all other elements (cards, images, inputs) at 0px radius for sharp editorial contrast
- Reserve color for one iridescent hero backdrop per page — keep all interface text, borders, and fills strictly in the black/white/gray scale
- Use weight 300 at 78px for manifesto and atmospheric headlines to create whisper authority — never push above weight 400 at this scale
- Set line-height to 0.70–0.76 on display sizes above 78px to let lines lock together as typographic art objects
- Apply cubic-bezier(0.19, 1, 0.22, 1) easing to transform and color transitions with durations of 0.8–1.25s for patient, gliding motion
- Keep all interactive text links at 0px radius with no underlines — let spacing, color, and context signal affordance

### Don't
- Never introduce a chromatic UI color — black, white, and gray are the interface palette; the iridescent gradient is media only
- Never use box-shadow or elevation on cards, buttons, or images — the system relies on flat surfaces and hairline 1px borders
- Never set border-radius between 1px and 74px — the system jumps from sharp 0px to full 75px pill, no intermediate rounding
- Never use bold or heavy weights (600+) above 45px — large sizes should whisper at 300 or speak at 400, never shout
- Never center-align body copy in address blocks, lists, or project descriptions — left-align with 8–14px line gaps for editorial flow
- Never add gradients to buttons, badges, or UI controls — gradients belong only in the hero atmospheric media
- Never use Raleway for body or navigation — it is a heading accent only, and even there it appears sparingly
- Never fill the canvas with imagery — the system is text-dominant with one hero-sized visual gesture per page

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Paper | `#ffffff` | Primary canvas — most sections sit on pure white |
| 2 | Slate Pill | `#636363` | Filled button surface for cookie consent and neutral actions |
| 3 | Obsidian | `#000000` | Dark overlay and inverse section — full-bleed dark bands behind iridescent media |
| 4 | Ash Mist | `#9a9a9a` | Quiet mid-tone layer for inset panels or disabled zones |

## Elevation

The system deliberately avoids shadow elevation. Surfaces are distinguished by color inversion (white to black bands) and hairline 1px borders rather than stacked shadows. The lone 'elevation' gesture is the translucent slate pill on the cookie banner, which uses background opacity rather than shadow to separate from content.

## Imagery

Imagery is theatrical and singular: one massive iridescent fluid texture dominates the hero — organic greens dissolving through amber into oxblood like oil on water or molten glass. It reads as full-bleed atmospheric media, possibly video or shader-driven canvas, and occupies the entire viewport as a singular sensory moment rather than a repeated pattern. Project showcases use contained editorial photography (tight product crops, campaign stills) presented without frames or borders — the image is the content. No illustration, no icons beyond tiny UI glyphs, no decorative shapes. Iconography is minimal or absent; the rotating circular text badge functions as the system's only typographic ornament. Overall density: text-dominant with one hero-sized visual gesture, then long quiet editorial stretches of typography and product imagery.

## Layout

Layout is max-width contained at 1078px, centered, with full-bleed dark hero sections breaking the container. The hero is full-viewport: centered monumental headline (Un i ted, Unbound) floating over iridescent media, minimal navigation floating at top, single rotating badge at bottom-left. Body sections follow a spacious editorial rhythm — generous 46px section gaps create breathing room between blocks, alternating between white and dark (black with white type) bands. Content arrangement is asymmetric: text-left/image-right and image-left/text-right alternations dominate, with no centered stacks outside the hero. Card grids appear as single-column project lists rather than multi-column grids — each project gets the full width with its image and title. Navigation is a transparent top bar with logo left, locale center, menu right — no sticky color shift, no shadow, just invisible persistence. The footer is a compact three-column address block (Tokyo, Saigon, London) with quiet 11px copy. Overall: editorial magazine pacing in a digital frame.

## Agent Prompt Guide

**Quick Color Reference**
- text primary: #000000
- text muted: #6d6d6d
- background: #ffffff
- dark overlay / inverse section: #000000
- border (light surface): #000000
- border (dark surface): rgba(255,255,255,0.3)
- accent: none — the only chromatic color is the iridescent hero gradient, which is media only
- primary action: no distinct CTA color

**3 Example Component Prompts**
No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.

2. Build a project list row: transparent background, 0px radius, no shadow. Full-bleed image at the top within the 1078px container, sharp corners. Project title below in Roobert 16px weight 400, color #000000. 46px gap to the next row. No card chrome, no borders, no padding around the content itself.

3. Build a Ghost Pill Button on a light surface: transparent background, 1px solid #000000 border, 75px border-radius, 11px padding-top and padding-bottom, 33px padding-left and padding-right. Label in Roobert 16px weight 400, color #000000. No hover fill — animate border opacity and letter-spacing on transition with cubic-bezier(0.19, 1, 0.22, 1) over 0.8s.

## Motion Personality

Motion is expressive but unhurried — the system treats transitions as slow camera moves rather than UI snaps. The signature curve is cubic-bezier(0.19, 1, 0.22, 1) (a gentle ease-out) applied to transform, color, and opacity at 0.8s and 1.25s durations. Shorter easing uses plain 'ease' at 0.4s for color and opacity micro-transitions. A rotating animation runs continuously on the scroll-indicator badge at slow tempo. Transforms dominate over positional animation — elements glide, slide, and reveal through transform rather than repositioning layout. The 1.25s duration on transforms (69 occurrences) signals that the studio prefers patience over responsiveness; nothing should feel abrupt. Border transitions (6 occurrences) and flex-basis shifts are rare and reserved for layout reveals, not micro-interactions.

## Similar Brands

- **Resn** — Same liquid iridescent hero treatment behind monochrome editorial typography and full-pill ghost buttons
- **Active Theory** — Same immersive full-bleed dark hero with single monumental headline and restrained monochrome chrome around it
- **Locomotive** — Same editorial agency rhythm — oversized whisper-weight headlines, generous 46px+ section gaps, and zero shadow elevation
- **Pentagram** — Same austere black-and-white editorial system with sharp 0px corners and custom geometric sans (Roobert echoing Pentagram's house faces)

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #000000;
  --color-paper: #ffffff;
  --color-inkstone: #181818;
  --color-felt-gray: #6d6d6d;
  --color-slate-pill: #636363;
  --color-ash-mist: #9a9a9a;
  --color-pewter: #808080;
  --color-iridescent-fade: #a02d25;
  --gradient-iridescent-fade: linear-gradient(90deg, rgb(160, 224, 171), rgb(255, 172, 46) 50%, rgb(165, 45, 37));

  /* Typography — Font Families */
  --font-roobert: 'Roobert', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-raleway: 'Raleway', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.19;
  --text-body-sm: 16px;
  --leading-body-sm: 1.15;
  --text-body: 18px;
  --leading-body: 1.21;
  --text-subheading: 39px;
  --leading-subheading: 1.19;
  --text-subheading-lg: 45px;
  --leading-subheading-lg: 1.15;
  --text-heading-sm: 54px;
  --leading-heading-sm: 1.39;
  --text-heading: 78px;
  --leading-heading: 1.1;
  --text-heading-lg: 94px;
  --leading-heading-lg: 0.76;
  --text-display: 225px;
  --leading-display: 1.25;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-28: 28px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-152: 152px;

  /* Layout */
  --page-max-width: 1078px;
  --section-gap: 46px;
  --card-padding: 34px;
  --element-gap: 14px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-full: 75.024px;

  /* Named Radii */
  --radius-tags: 75px;
  --radius-cards: 0px;
  --radius-images: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 75px;

  /* Surfaces */
  --surface-paper: #ffffff;
  --surface-slate-pill: #636363;
  --surface-obsidian: #000000;
  --surface-ash-mist: #9a9a9a;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #000000;
  --color-paper: #ffffff;
  --color-inkstone: #181818;
  --color-felt-gray: #6d6d6d;
  --color-slate-pill: #636363;
  --color-ash-mist: #9a9a9a;
  --color-pewter: #808080;
  --color-iridescent-fade: #a02d25;

  /* Typography */
  --font-roobert: 'Roobert', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-raleway: 'Raleway', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.19;
  --text-body-sm: 16px;
  --leading-body-sm: 1.15;
  --text-body: 18px;
  --leading-body: 1.21;
  --text-subheading: 39px;
  --leading-subheading: 1.19;
  --text-subheading-lg: 45px;
  --leading-subheading-lg: 1.15;
  --text-heading-sm: 54px;
  --leading-heading-sm: 1.39;
  --text-heading: 78px;
  --leading-heading: 1.1;
  --text-heading-lg: 94px;
  --leading-heading-lg: 0.76;
  --text-display: 225px;
  --leading-display: 1.25;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-28: 28px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-152: 152px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-full: 75.024px;
}
```
# Wispr Flow — Style Reference
> cream broadsheet, dark velvet chambers

**Theme:** mixed

Wispr Flow reads like an editorial broadsheet rebuilt for software: a warm cream canvas (#ffffeb) hosts weight-400 Eb Garamond at display sizes (48–120px) that commands through sheer scale rather than weight, while Figtree handles every interactive surface. Pages alternate between bright cream chambers and deep near-black rooms, separated by 2px ink borders and oversized corner radii (40–80px) that make each section feel rounded like a polished pebble. The palette stays disciplined to four working colors — cream, black, lavender (#f0d7ff) for primary actions, and forest teal (#034f46) for inner accents — with an occasional ember orange (#ffa946) punctuating active states.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Lavender Whisper | `#f0d7ff` | `--color-lavender-whisper` | Primary CTA fill, accent card surfaces — soft pink-lavender that signals the one clickable thing on any page without ever shouting |
| Forest Ink | `#034f46` | `--color-forest-ink` | Secondary brand surface — teal pill badges, inner dark-panel cards, secondary buttons against dark backgrounds |
| Ember Glow | `#ffa946` | `--color-ember-glow` | Live/active state accent — notification dots, active mic indicators, occasional badge highlights |
| Vast Ink | `#1a1a1a` | `--color-vast-ink` | Primary text, button borders, dark section/card backgrounds — the dominant near-black that defines every dark chamber |
| Lumen Cream | `#ffffeb` | `--color-lumen-cream` | Dominant page canvas, card surfaces, button fills, light text on dark — warm off-white that reads as paper, not screen |
| Lumen Stone | `#e4e4d0` | `--color-lumen-stone` | Subtle borders, nav pill background, muted dividers — one shade darker than the cream canvas for low-contrast separation |
| Fog | `#8a8a80` | `--color-fog` | Muted captions, helper text, and de-emphasized UI labels. |
| Charcoal | `#222222` | `--color-charcoal` | Secondary button text and nav text — slightly lighter than Vast Ink for less critical text |
| Pure White | `#ffffff` | `--color-pure-white` | Badge borders on dark surfaces, light text on color, SVG icon strokes |

## Tokens — Typography

### Eb Garamond — Display and editorial headings — classical serif at regular weight, used at massive sizes (up to 120px) where weight 400 commands through scale alone. The 0.85–0.95 line-height at display sizes tightens lines into a single horizontal gesture. Subtitle: 'EB Garamond' (Google Fonts) or 'Cormorant Garamond' as alternative · `--font-eb-garamond`
- **Substitute:** EB Garamond, Cormorant Garamond, Playfair Display
- **Weights:** 400
- **Sizes:** 32px, 48px, 64px, 120px
- **Line height:** 0.85–1.3
- **Letter spacing:** -3.6px at 120px, -1.92px at 64px, -0.96px at 32px
- **Role:** Display and editorial headings — classical serif at regular weight, used at massive sizes (up to 120px) where weight 400 commands through scale alone. The 0.85–0.95 line-height at display sizes tightens lines into a single horizontal gesture. Subtitle: 'EB Garamond' (Google Fonts) or 'Cormorant Garamond' as alternative

### Figtree — Body text, UI labels, navigation, buttons, badges — geometric sans at weight 400 as default body, 500–700 for emphasis. The 1.3 line-height across all sizes gives comfortable rhythm without excess leading. 16px is the workhorse size (freq=716). · `--font-figtree`
- **Substitute:** Inter, Plus Jakarta Sans, Manrope
- **Weights:** 400, 500, 600, 700
- **Sizes:** 14px, 16px, 20px, 22px, 24px, 32px
- **Line height:** 1.3
- **Role:** Body text, UI labels, navigation, buttons, badges — geometric sans at weight 400 as default body, 500–700 for emphasis. The 1.3 line-height across all sizes gives comfortable rhythm without excess leading. 16px is the workhorse size (freq=716).

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 14px | 1.3 | — | `--text-caption` |
| body-sm | 16px | 1.3 | — | `--text-body-sm` |
| body | 20px | 1.3 | — | `--text-body` |
| subheading | 24px | 1.3 | — | `--text-subheading` |
| heading-sm | 32px | 1.3 | -0.96px | `--text-heading-sm` |
| heading | 48px | 0.95 | — | `--text-heading` |
| heading-lg | 64px | 0.95 | -1.92px | `--text-heading-lg` |
| display | 120px | 0.85 | -3.6px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 104 | 104px | `--spacing-104` |
| 128 | 128px | `--spacing-128` |
| 168 | 168px | `--spacing-168` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 32px |
| badges | 9999px |
| inputs | 12px |
| buttons | 12px |
| sections | 40-80px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64-96px
- **Card padding:** 32px
- **Element gap:** 8-16px

## Components

### Primary CTA Button
**Role:** The main download/purchase action on every page

Fill: #f0d7ff Lavender Whisper. Text: #1a1a1a Vast Ink. Border: 2px solid #1a1a1a. Border-radius: 12px. Padding: 14px 14px (compact) or 16px 24px (standard). Font: Figtree 500, 16px. Includes Apple/platform icon prefix. The 2px border is non-negotiable — it gives the soft lavender a defined edge.

### Outlined Secondary Button
**Role:** Secondary actions: 'Try Flow', 'Watch in action'

Fill: #ffffeb Lumen Cream. Text: #1a1a1a Vast Ink. Border: 2px solid #1a1a1a. Border-radius: 12px. Padding: 16px 24px. Font: Figtree 500, 16px. Matches the CTA's border weight and radius for visual kinship.

### Ghost/Text Button
**Role:** Tertiary actions, inline links in copy

No background. Text: #1a1a1a Vast Ink. No border. Padding: variable. Font: Figtree 400, 16px. Underline on hover. Used for navigation and low-priority links.

### Floating Navigation Pill
**Role:** Top-of-page navigation bar

Container: cream pill (#ffffeb) with 9999px border-radius, 2px solid #1a1a1a border, slight padding. Contains Flow logo (bar-chart mark + wordmark in Figtree 600), nav items (Product, Individuals, Business, Resources, Company) with dropdown chevrons, and a lavender CTA pinned to the right. Floats over the canvas with subtle margin from page edges.

### Cream Content Card
**Role:** Light-surface content blocks, feature panels

Fill: #ffffeb Lumen Cream. Border-radius: 32px. Padding: 32px all sides. No shadow. Optional 2px solid #1a1a1a border. The 32px radius is consistent across all card sizes — no smaller cards, no exceptions.

### Dark Feature Card
**Role:** Dark-chamber content blocks, feature showcases

Fill: #1a1a1a Vast Ink. Border-radius: 40–80px (larger than cream cards for dramatic contrast). Padding: 55–70px. No shadow. Text: #ffffeb Lumen Cream. These are the 'velvet rooms' — sections that feel like stepping into a dark alcove.

### Teal Status Badge
**Role:** Success states, feature labels, 'Grammar corrected'

Fill: #034f46 Forest Ink. Text: #ffffeb Lumen Cream. Border-radius: 1000px (full pill). Padding: 8px 16px. Font: Figtree 500, 14px. May include checkmark or icon prefix. The forest teal against cream text is the most readable badge combination.

### Platform Pill Badge
**Role:** Platform selector on dark sections (Mac, Windows, iPhone, Android)

Fill: transparent. Text: #ffffeb Lumen Cream. Border: 1–2px solid #ffffff. Border-radius: 1000px (full pill). Padding: 8px 16px. Font: Figtree 500, 14px. Includes platform icon prefix. Sits on dark chamber backgrounds.

### Dark Square Badge
**Role:** Inline tags, category labels

Fill: #1a1a1a Vast Ink. Text: #ffffeb Lumen Cream. Border-radius: 8px (sharp contrast to the site's pill-shaped elements). Padding: 8px 16px. Font: Figtree 500, 14px. The 8px radius is deliberately tight — a small geometric counterpoint to the dominant pill shapes.

### Waveform Visualizer
**Role:** Audio/speech indicator, mic active state

Container: cream pill (#ffffeb) with 9999px border-radius, 2px solid #1a1a1a border. Interior: 5–7 vertical bars of varying height in #1a1a1a, evenly spaced. Height range: 8–24px. Animated bars pulse to indicate active recording. Sits inline with text as a functional punctuation mark.

### Phone Mockup
**Role:** Product preview, feature demonstration

Dark device frame (#1a1a1a) with 40px corner radius. Screen shows chat interface with cream message bubbles, user avatar circle, and waveform visualizer at the bottom. No realistic bezel — the mockup is a flat illustration, not a render.

### Section Container
**Role:** Page-level content bands

Alternating fill: #ffffeb (cream) and #1a1a1a (dark). Border-radius: 40–80px on the outer container, creating the rounded-chamber effect. Section gaps: 64–96px vertical. No dividers or separators between sections — the fill alternation and rounded corners do the work.

### Hand-drawn Underline Accent
**Role:** Editorial emphasis on key words in headlines

SVG squiggle or wavy line in #f0d7ff Lavender Whisper, positioned beneath 1–2 words in a display headline. Stroke-width: 3–4px. Slight irregularity in path. The lavender matches the CTA color, creating a visual link between emphasis and action.

## Do's and Don'ts

### Do
- Use Lavender Whisper #f0d7ff as the sole primary action color — never substitute blue, green, or any other hue for CTAs
- Set display headlines in Eb Garamond weight 400 (not bold) — authority comes from 64–120px scale, not font weight
- Apply 2px solid #1a1a1a borders to all interactive elements — the thick border is a signature, not optional
- Alternate cream #ffffeb and dark #1a1a1a sections page-wide — every dark chamber should be bookended by cream
- Use 32px border-radius on standard cards and 40–80px on dark section cards — never use 4px or 8px on content blocks
- Use Figtree 400 as the default body weight; reserve 600–700 for nav items, badges, and button labels
- Pair #f0d7ff (active/accent) with #034f46 (secondary) — these two brand colors are complementary, not alternatives

### Don't
- Do not use bold or weight 700 for display headlines — the serif whispers at weight 400 and commands through size alone
- Do not use box-shadow for card elevation — this design is border-driven; shadows break the editorial flatness
- Do not introduce blue, green, or any non-palette accent color for actions, links, or highlights
- Do not use border-radius below 12px on buttons or below 32px on cards — small radii clash with the oversized chamber geometry
- Do not use gradient fills — the palette is flat; gradients dilute the editorial discipline
- Do not center body text — body copy and subtitles should be left-aligned or follow a strict measure, not centered blocks
- Do not place cream content on cream canvas without a border or background change — the palette needs contrast separation

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Cream Canvas | `#ffffeb` | Default page background — warm paper-like off-white |
| 1 | Dark Chamber | `#1a1a1a` | Alternating section/card background — near-black velvet rooms |
| 2 | Lavender Accent | `#f0d7ff` | Accent card surfaces, highlighted feature panels |
| 3 | Forest Panel | `#034f46` | Secondary accent — badge fills, inner card on dark sections |

## Elevation

This design is deliberately shadowless. All cards rely on flat fill + 2px ink borders for separation — no box-shadows, no depth gradients, no floating effects. The only shadow in the system is a single subtle drop-shadow on display text, which is an artifact of typography rendering, not elevation. The 'elevation' is achieved through fill alternation (cream → dark → cream) and oversized border-radii (40–80px) that make dark sections feel like inset rooms rather than elevated overlays. Do not introduce box-shadow to make cards 'pop' — the editorial flatness is the signature.

## Imagery

Imagery is sparse and editorial: real product app icons (Slack, Notion, Gmail, Messages, etc.) appear in a horizontal parade across dark sections, creating a 'works everywhere' visual proof without lifestyle photography. Phone mockups are flat dark illustrations with cream chat bubbles, not photorealistic renders. Photo backgrounds appear only inside dark feature cards as blurred, desaturated atmospheric layers behind text overlays. Signature graphical elements include curved text arcs following circular paths (the hero's 'going on, no really' loop), hand-drawn lavender SVG underlines beneath key words, and waveform visualizer pills that serve as both audio indicators and decorative rhythm markers. No stock photography, no abstract gradients, no 3D renders — the visual language is editorial print meets functional UI.

## Layout

Page model: centered max-width 1200px content with full-bleed section backgrounds. Hero: centered serif headline (120px) over cream canvas with a floating nav pill at the top and a single CTA below the subtitle. The hero text uses two-tone coloring (Fog gray → Vast Ink) to create a visual cadence across the headline. Sections alternate cream → dark → cream in a deliberate rhythm, with dark chambers taking 40–80px corner radii that make them feel like rounded inset rooms. Content arrangement: text-left/visual-right on feature sections (phone mockup on right), centered stacks for headlines, and side-by-side comparison cards for data sections. The nav is always a floating cream pill (not full-bleed), positioned with breathing room from the page edges. Footer is a full-width dark band. Vertical rhythm: 64–96px between major sections, 32px between cards, 8–16px between elements within a block.

## Agent Prompt Guide

**Quick Color Reference**
- text: #1a1a1a (Vast Ink)
- background: #ffffeb (Lumen Cream)
- border: #1a1a1a (Vast Ink, 2px solid)
- accent: #f0d7ff (Lavender Whisper)
- primary action: #f0d7ff (filled action)
- secondary brand: #034f46 (Forest Ink)

**Example Component Prompts**

1. Create a Primary Action Button: #f0d7ff background, #1a1a1a text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. *Create a dark feature chamber*: Full-width section with #1a1a1a fill, 80px border-radius on outer container. Left column: 64px Eb Garamond weight 400 heading in #ffffeb with -1.92px letter-spacing, 20px Figtree 400 subtitle in #ffffeb, and an outlined cream button (12px radius, 2px #1a1a1a... no — 2px #ffffeb border on this dark bg, cream fill, #1a1a1a text, Figtree 500 16px). Right column: flat phone mockup (40px radius, #1a1a1a frame, cream chat bubbles inside).

3. *Create a comparison card pair*: Two cards side by side on #ffffeb canvas. Left: cream card (#ffffeb fill, 32px radius, 32px padding, 2px #1a1a1a border). Heading 'Keyboard' in 20px Figtree 500 #1a1a1a, stat '45 wpm' in 48px Eb Garamond weight 400. Right: dark card (#1a1a1a fill, 40px radius, 32px padding) with blurred photo overlay. Heading 'Flow' in 20px Figtree 500 #ffffeb, stat '220 wpm' in 48px Eb Garamond weight 400 #ffffeb.

4. *Create a platform selector row*: Four full-pill badges in a horizontal row on #1a1a1a dark background. Each: transparent fill, 1px solid #ffffeb border, 1000px border-radius, 8px 16px padding, Figtree 500 14px #ffffeb text, platform icon prefix (Mac, Windows, iPhone, Android).

5. *Create a status badge*: Forest Ink #034f46 fill, 1000px border-radius, 8px 16px padding, Figtree 500 14px #ffffeb text, optional checkmark icon in #ffffeb prefix.

## Elevation Philosophy

This design is deliberately shadowless. All cards rely on flat fill + 2px ink borders for separation — no box-shadows, no depth gradients, no floating effects. The only shadow in the system is a single subtle drop-shadow on display text, which is an artifact of typography rendering, not elevation. The 'elevation' is achieved through fill alternation (cream → dark → cream) and oversized border-radii (40–80px) that make dark sections feel like inset rooms rather than elevated overlays. Do not introduce box-shadow to make cards 'pop' — the editorial flatness is the signature.

## Similar Brands

- **Mercury** — Editorial serif headings at display scale, cream/near-black palette alternation, restrained color discipline, and thick 2px borders define both systems
- **Linear** — Clean dark-chamber sections breaking up light surfaces, disciplined two-color brand palette, oversized corner radii on feature cards
- **Vercel** — Full-bleed alternating dark/light section rhythm, generous vertical breathing room, and large display typography that anchors each band
- **Arc** — Warm cream canvas with deep near-black chambers, oversized pill-shaped containers, and a sense of rounded geometric softness throughout the layout

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-lavender-whisper: #f0d7ff;
  --color-forest-ink: #034f46;
  --color-ember-glow: #ffa946;
  --color-vast-ink: #1a1a1a;
  --color-lumen-cream: #ffffeb;
  --color-lumen-stone: #e4e4d0;
  --color-fog: #8a8a80;
  --color-charcoal: #222222;
  --color-pure-white: #ffffff;

  /* Typography — Font Families */
  --font-eb-garamond: 'Eb Garamond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-figtree: 'Figtree', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.3;
  --text-body-sm: 16px;
  --leading-body-sm: 1.3;
  --text-body: 20px;
  --leading-body: 1.3;
  --text-subheading: 24px;
  --leading-subheading: 1.3;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: -0.96px;
  --text-heading: 48px;
  --leading-heading: 0.95;
  --text-heading-lg: 64px;
  --leading-heading-lg: 0.95;
  --tracking-heading-lg: -1.92px;
  --text-display: 120px;
  --leading-display: 0.85;
  --tracking-display: -3.6px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-104: 104px;
  --spacing-128: 128px;
  --spacing-168: 168px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64-96px;
  --card-padding: 32px;
  --element-gap: 8-16px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 14px;
  --radius-3xl: 32px;
  --radius-3xl-2: 40px;
  --radius-full: 64px;
  --radius-full-2: 80px;
  --radius-full-3: 992px;
  --radius-full-4: 1000px;
  --radius-full-5: 1600px;
  --radius-full-6: 9999px;

  /* Named Radii */
  --radius-cards: 32px;
  --radius-badges: 9999px;
  --radius-inputs: 12px;
  --radius-buttons: 12px;
  --radius-sections: 40-80px;

  /* Surfaces */
  --surface-cream-canvas: #ffffeb;
  --surface-dark-chamber: #1a1a1a;
  --surface-lavender-accent: #f0d7ff;
  --surface-forest-panel: #034f46;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-lavender-whisper: #f0d7ff;
  --color-forest-ink: #034f46;
  --color-ember-glow: #ffa946;
  --color-vast-ink: #1a1a1a;
  --color-lumen-cream: #ffffeb;
  --color-lumen-stone: #e4e4d0;
  --color-fog: #8a8a80;
  --color-charcoal: #222222;
  --color-pure-white: #ffffff;

  /* Typography */
  --font-eb-garamond: 'Eb Garamond', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-figtree: 'Figtree', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.3;
  --text-body-sm: 16px;
  --leading-body-sm: 1.3;
  --text-body: 20px;
  --leading-body: 1.3;
  --text-subheading: 24px;
  --leading-subheading: 1.3;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.3;
  --tracking-heading-sm: -0.96px;
  --text-heading: 48px;
  --leading-heading: 0.95;
  --text-heading-lg: 64px;
  --leading-heading-lg: 0.95;
  --tracking-heading-lg: -1.92px;
  --text-display: 120px;
  --leading-display: 0.85;
  --tracking-display: -3.6px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-104: 104px;
  --spacing-128: 128px;
  --spacing-168: 168px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 14px;
  --radius-3xl: 32px;
  --radius-3xl-2: 40px;
  --radius-full: 64px;
  --radius-full-2: 80px;
  --radius-full-3: 992px;
  --radius-full-4: 1000px;
  --radius-full-5: 1600px;
  --radius-full-6: 9999px;
}
```


# Your workplace has the answer. Just ask Dala for it. — Style Reference
> constellation floating on black velvet

**Theme:** dark

Dala operates as a dark-stage environment where black voids meet a single vivid violet accent, punctuated by amber sparks. Typography is monolithic and weightless — PPNeueMontreal at weight 400 dominates every heading at outsized scales (78–113px) with aggressive negative tracking, so headlines feel sculptural rather than informational. The visual centerpiece is a constellation of tiny multicolored triangular particles forming an organic brain shape, which acts as the brand's signature gesture: knowledge visualized as distributed intelligence rather than hierarchical data. Layout follows a spacious two-column rhythm — oversized left-aligned headlines paired with generous body copy, floating on pure black with no panels, borders, or cards. Components are intentionally reduced to their most essential form: one violet pill button, ghost text links, and large-format text blocks.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void | `#000000` | `--color-void` | Page canvas, section backgrounds, negative space — pure black is the dominant surface, not dark gray, creating the void that lets chromatic accents float |
| Bone White | `#ffffff` | `--color-bone-white` | Headlines, body text, icon fills, nav active state — the only typographic color, carrying maximum hierarchy on black |
| Ash Gray | `#9a9a9a` | `--color-ash-gray` | Muted nav text, ghost link color, secondary labels — recedes behind primary text without going invisible |
| Silver Mist | `#bdbdbd` | `--color-silver-mist` | Tertiary body text, caption-level information — the quietest readable gray, for supporting context |
| Electric Iris | `#8052ff` | `--color-electric-iris` | Primary action buttons, logo mark, brand accents — the single saturated violet that signals interactivity and brand identity against the black void |
| Saffron Spark | `#ffb829` | `--color-saffron-spark` | Highlight emphasis text, accent links, attention punctuation — warm yellow against violet creates the brand's chromatic tension |
| Deep Verdant | `#15846e` | `--color-deep-verdant` | Secondary surface tint, logo gradient stop — appears as the deeper end of the brand gradient and in subtle accent washes |

## Tokens — Typography

### PPNeueMontreal — Single typeface across all UI contexts. Display sizes (78–113px) carry headlines at weight 400 with -0.04em tracking — the same weight as body text but massive scale creates hierarchy. Weight 200 (ultra-light) is reserved for 18px body copy, a signature choice: most AI/SaaS sites use 400 for body, but Dala strips weight to make paragraphs feel airy and non-aggressive. Weight 600 at 14px with 0.025em tracking and uppercase serves nav and small labels. The number 400 doing both 113px display and 15px body is unusual — it means the brand trusts scale, not weight, for hierarchy. · `--font-ppneuemontreal`
- **Substitute:** Inter
- **Weights:** 200, 400, 600, 700
- **Sizes:** 12, 14, 15, 18, 24, 27, 36, 42, 48, 78, 113px
- **Line height:** 0.81, 0.90, 1.00, 1.10, 1.20, 1.25, 1.30, 1.50
- **Letter spacing:** -4.52px at 113px, -3.12px at 78px, -1.68px at 42px, -0.48px at 24px, normal at 18px body; 0.025em at 14px uppercase nav
- **OpenType features:** `"ss01" on`
- **Role:** Single typeface across all UI contexts. Display sizes (78–113px) carry headlines at weight 400 with -0.04em tracking — the same weight as body text but massive scale creates hierarchy. Weight 200 (ultra-light) is reserved for 18px body copy, a signature choice: most AI/SaaS sites use 400 for body, but Dala strips weight to make paragraphs feel airy and non-aggressive. Weight 600 at 14px with 0.025em tracking and uppercase serves nav and small labels. The number 400 doing both 113px display and 15px body is unusual — it means the brand trusts scale, not weight, for hierarchy.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | — | `--text-caption` |
| nav-label | 14px | 1.2 | 0.35px | `--text-nav-label` |
| body | 18px | 1.5 | — | `--text-body` |
| heading-2xs | 24px | 1.25 | -0.48px | `--text-heading-2xs` |
| heading-xs | 27px | 1 | — | `--text-heading-xs` |
| subheading | 36px | 1.2 | — | `--text-subheading` |
| heading-sm | 42px | 1.2 | -1.68px | `--text-heading-sm` |
| heading | 48px | 1.1 | -1.68px | `--text-heading` |
| heading-lg | 78px | 1.1 | -3.12px | `--text-heading-lg` |
| display | 113px | 1.1 | -4.52px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 6px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 6 | 6px | `--spacing-6` |
| 12 | 12px | `--spacing-12` |
| 18 | 18px | `--spacing-18` |
| 24 | 24px | `--spacing-24` |
| 30 | 30px | `--spacing-30` |
| 36 | 36px | `--spacing-36` |
| 60 | 60px | `--spacing-60` |
| 96 | 96px | `--spacing-96` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 24px |
| tags | 9999px |
| cards | 24px |
| buttons | 24px |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 60-120px
- **Card padding:** 24-38px
- **Element gap:** 6-18px

## Components

### Primary Action Button
**Role:** Filled violet pill, the sole interactive CTA

Background #8052ff (Electric Iris), white text, 22.5px border-radius (pill), 14.4px vertical padding × 15.96px horizontal padding. PPNeueMontreal 14px weight 400 or 600, uppercase with 0.025em tracking. The high radius (22.5px on ~45px height) creates a full pill shape — soft, friendly, unmistakable as the primary action.

### Ghost Text Button
**Role:** Underlined or bare text link, secondary action

No background, no border, color #ffffff or #9a9a9a. PPNeueMontreal 14px weight 400. Used for nav items and inline links. The absence of any container means visual hierarchy comes entirely from type weight and tracking.

### Logo Lockup
**Role:** Brand mark + wordmark in header

Small triangular icon in #8052ff (violet) with a gradient fade through #15846 (teal), paired with 'Dala' wordmark in white. The icon is a stylized angular fragment — geometric, sharp-edged, echoing the triangular particles in the hero visualization.

### Team Member Card
**Role:** Portrait + name + role display

No background, no border, no shadow. Large rounded-rectangle portrait photo (~24px corner radius) with role label in 12px uppercase #8052ff and name in large white display type below. Social icons (Twitter, LinkedIn) appear as small inline glyphs. Cards float on the black canvas with only whitespace separation.

### Carousel Navigation Dot
**Role:** Indicator for slide position in team/investor carousels

Small filled circle ~8px diameter, #8052ff violet for active state. Inactive dots are dimmer or omitted. Padding is minimal — sits directly in the content flow without a container.

### Hero Constellation Visualization
**Role:** Signature brand imagery — brain-shape particle cloud

Thousands of tiny triangular glyphs (outlined, 1-2px) in a full spectrum of vivid colors (violet, amber, teal, magenta, blue) forming an organic brain or cloud shape against pure black. Individual particles are scattered/ambient across the surrounding space as well. This is the site's defining visual — not a static image but an animated field of point-lights.

### Section Headline Block
**Role:** Oversized left-aligned headline + supporting copy

Two-column asymmetric layout: headline at 78–113px weight 400 PPNeueMontreal in white with -0.04em tracking, occupying left half. Body copy at 18px weight 200 (ultra-light) in white or silver, with a small uppercase label (#ffb829 amber) above the body. No boxes, no borders — pure typographic composition on black.

### Navigation Bar
**Role:** Top-aligned site navigation

Transparent background sitting directly on black canvas. Logo left, nav links center/right (Manifesto, Team, Blog) in 14px uppercase PPNeueMontreal with 0.025em tracking. Active or hover state: white. Inactive: #9a9a9a. Request Access button (filled violet pill) anchors the right edge. No border, no backdrop blur on the nav itself.

### Ambient Particle Field
**Role:** Decorative scattered triangle glyphs

Small outlined triangles in various chromatic colors (#8052ff violet, #ffb829 amber, #15846 teal, plus assorted purples and blues) scattered at low opacity across the background outside the main constellation. Creates atmospheric depth without competing with the central visualization.

## Do's and Don'ts

### Do
- Use #8052ff (Electric Iris) exclusively for filled action buttons — no other saturated color should appear as a button background
- Set every headline at weight 400, never bold — Dala achieves hierarchy through scale (78–113px) and tracking (-0.04em), not font weight
- Use PPNeueMontreal weight 200 for 18px body text — the ultra-light weight is a signature, do not substitute weight 400
- Maintain pure #000000 black as every section background — never use dark gray panels or card surfaces; the void is the design
- Apply -0.04em letter-spacing on all display sizes 42px and above, converting to approximately -4.52px at 113px
- Use 24px border-radius for buttons, cards, and nav elements as the consistent radius token — pill shapes only at very small sizes
- Let the particle constellation be the only hero imagery — do not introduce photography, illustrations, or product screenshots into the hero region

### Don't
- Do not use filled violet (#8052ff) for large background blocks or full sections — it is a button and accent color, not a surface
- Do not set body text at weight 400 — Dala's signature ultra-light (200) body copy is what distinguishes the reading experience
- Do not introduce card containers with borders, shadows, or background fills — elements float on black with whitespace alone
- Do not use color #0000ee (default browser link blue) — never specify it; use #ffb829 amber or #ffffff for links
- Do not add gradients to UI components — Dala's palette is flat; gradients belong only in the logo and the particle visualization
- Do not use system fonts as substitutes when PPNeueMontreal-equivalent geometry matters — use Inter as fallback but preserve the weight 200 body and weight 400 headline convention
- Do not place multiple filled buttons in proximity — the violet pill is reserved for singular primary actions per view

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void Canvas | `#000000` | Full-page background, all section backgrounds, the base void |
| 1 | Deep Verdant Tint | `#15846` | Subtle accent surface for brand gradient and logo depth |
| 2 | Electric Iris | `#8052ff` | Highest surface — filled buttons, active interactive elements only |

## Elevation

Dala uses no shadows or elevation. All hierarchy is achieved through scale, color contrast, and whitespace on a flat black canvas. The absence of cards-with-shadows is deliberate — the void is the design, and any shadow would break the floating-in-space quality of the typography and particle constellation.

## Imagery

Imagery is entirely procedural and abstract — no photography except team portraits. The signature visual is a dense cloud of thousands of tiny outlined triangular particles in a full vivid spectrum (violets, ambers, teals, magentas, blues) forming an organic brain/neural shape. This particle field is animated and acts as both hero art and brand identity. Surrounding ambient particles drift at lower density across the page background. Triangles are outlined, 1–2px stroke, sharp-edged, in saturated chromatic colors — never grayscale. Team portraits appear as large rounded-rectangle crops (24px radius) without frames or overlays. No product screenshots, no lifestyle photography, no 3D renders — the particle system IS the visual brand.

## Layout

Full-bleed sections on pure black canvas, max content width ~1280px centered. Hero is a two-column asymmetric split: oversized left-aligned headline (113px) with body copy and CTA on the left half, particle brain visualization occupying the right half at massive scale. Subsequent sections alternate the two-column composition (visual-left/text-right, then text-left/visual-right) creating a zigzag reading rhythm. Section gaps are generous (60–120px vertical). No card grids, no pricing tables, no multi-column feature blocks — content lives in spacious two-column text+visual arrangements. Navigation is a minimal transparent top bar, no sidebar, no mega-menu. Density is extremely spacious — one or two elements per viewport, never information-dense.

## Agent Prompt Guide

## Quick Color Reference
- Text: #ffffff (primary), #9a9a9a (secondary), #bdbdbd (tertiary)
- Background: #000000 (canvas only)
- Border: none — Dala uses no visible borders or dividers
- Accent: #ffb829 (Saffron Spark) for emphasis highlights
- primary action: #8052ff (filled action)

## Example Component Prompts

1. **Hero Section**: Full-bleed #000000 canvas. Two-column split. Left: headline at 78px PPNeueMontreal weight 400, #ffffff, letter-spacing -3.12px, reading 'Unlock collective wisdom.' Body copy at 18px weight 200 PPNeueMontreal, #ffffff, max-width 480px. Above body, a small uppercase label at 14px weight 600, #ffb829 amber, letter-spacing 0.35px. Below body, a filled violet pill button: #8052ff background, white text, 14px weight 600 uppercase, 22.5px border-radius, 14.4px vertical padding × 16px horizontal padding. Right: large particle constellation visualization (thousands of tiny colored triangles forming a brain shape).

2. **Section Headline + Body**: #000000 background. Left-aligned headline at 42px PPNeueMontreal weight 400, #ffffff, letter-spacing -1.68px. Supporting body text at 18px weight 200 PPNeueMontreal, #bdbdbd, max-width 520px. No boxes, no borders, no cards — text floats on void.

3. **Navigation Bar**: Transparent background on black. Left: small violet (#8052ff) triangular logo icon + 'Dala' wordmark in #ffffff 14px. Right: nav links 'Manifesto', 'Team', 'Blog' in 14px PPNeueMontreal weight 600, uppercase, 0.025em letter-spacing, color #9a9a9a (inactive) or #ffffff (active). Far right: filled violet pill 'Request Access' button — #8052ff background, white text, 22.5px radius, 14px weight 600 uppercase.

4. **Team Card**: No background, no border. Large portrait photo with 24px border-radius. Above name: role label 'CO FOUNDER & CTO' at 12px PPNeueMontreal weight 400, #8052ff, uppercase. Below photo: name 'Joel Kang' at 27px PPNeueMontreal weight 400, #ffffff. Social icons inline as small glyphs in #9a9a9a.

5. **Carousel Indicator**: Two small dots ~8px, filled #8052ff for active position, no background or border around the dot container. Sits centered below carousel content with 30px gap.

## Similar Brands

- **Linear** — Same dark-void aesthetic with oversized weight-400 display type, generous whitespace, and a single saturated accent (violet/blue) reserved for action — both treat black as an active design material rather than a fallback
- **Vercel** — Identical pattern: pure black canvas, geometric minimalism, single brand color, weight-400 typography at massive display sizes with aggressive negative tracking — both make black the hero
- **Anthropic** — Dark mode-first philosophy with serif-free geometric sans, restrained color palette where one accent dominates, and a typographic system that trusts scale over weight for hierarchy
- **Runway** — Dark void aesthetic with particle/constellation-style generative visuals as brand identity, combined with ultra-light body type and single vivid accent color for CTAs

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void: #000000;
  --color-bone-white: #ffffff;
  --color-ash-gray: #9a9a9a;
  --color-silver-mist: #bdbdbd;
  --color-electric-iris: #8052ff;
  --color-saffron-spark: #ffb829;
  --color-deep-verdant: #15846e;

  /* Typography — Font Families */
  --font-ppneuemontreal: 'PPNeueMontreal', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-nav-label: 14px;
  --leading-nav-label: 1.2;
  --tracking-nav-label: 0.35px;
  --text-body: 18px;
  --leading-body: 1.5;
  --text-heading-2xs: 24px;
  --leading-heading-2xs: 1.25;
  --tracking-heading-2xs: -0.48px;
  --text-heading-xs: 27px;
  --leading-heading-xs: 1;
  --text-subheading: 36px;
  --leading-subheading: 1.2;
  --text-heading-sm: 42px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -1.68px;
  --text-heading: 48px;
  --leading-heading: 1.1;
  --tracking-heading: -1.68px;
  --text-heading-lg: 78px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -3.12px;
  --text-display: 113px;
  --leading-display: 1.1;
  --tracking-display: -4.52px;

  /* Typography — Weights */
  --font-weight-extralight: 200;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 6px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-60: 60px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 60-120px;
  --card-padding: 24-38px;
  --element-gap: 6-18px;

  /* Border Radius */
  --radius-3xl: 24px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-nav: 24px;
  --radius-tags: 9999px;
  --radius-cards: 24px;
  --radius-buttons: 24px;

  /* Surfaces */
  --surface-void-canvas: #000000;
  --surface-deep-verdant-tint: #15846;
  --surface-electric-iris: #8052ff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void: #000000;
  --color-bone-white: #ffffff;
  --color-ash-gray: #9a9a9a;
  --color-silver-mist: #bdbdbd;
  --color-electric-iris: #8052ff;
  --color-saffron-spark: #ffb829;
  --color-deep-verdant: #15846e;

  /* Typography */
  --font-ppneuemontreal: 'PPNeueMontreal', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-nav-label: 14px;
  --leading-nav-label: 1.2;
  --tracking-nav-label: 0.35px;
  --text-body: 18px;
  --leading-body: 1.5;
  --text-heading-2xs: 24px;
  --leading-heading-2xs: 1.25;
  --tracking-heading-2xs: -0.48px;
  --text-heading-xs: 27px;
  --leading-heading-xs: 1;
  --text-subheading: 36px;
  --leading-subheading: 1.2;
  --text-heading-sm: 42px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -1.68px;
  --text-heading: 48px;
  --leading-heading: 1.1;
  --tracking-heading: -1.68px;
  --text-heading-lg: 78px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -3.12px;
  --text-display: 113px;
  --leading-display: 1.1;
  --tracking-display: -4.52px;

  /* Spacing */
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-60: 60px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-3xl: 24px;
  --radius-full: 9999px;
}
```


# Resend — Style Reference
> black velvet with violet neon

**Theme:** dark

Resend lives in a near-total darkness — pure black canvas, hairline graphite borders, and white-on-black typography that feels like reading text printed on matte glass. The hero is anti-decorative: a single large serif headline at 96px Domaine next to a 3D black cube, with no gradient wash and no marketing illustration. The brand mark is a tight violet (#9281f7) that appears in email-address strings, status icons, and code samples — never on buttons. A monospaced font (Commit Mono) carries the developer identity through every code block, badge, and inline label, making the page read like a terminal wrapped in a luxury interface. Components are sharp-cornered or gently rounded (6px / 16px), low-elevation, and rely on 1px borders rather than shadows to separate layers. Motion is restrained but expressive: fade-and-slide hero text, subtle WebGL rotation on the hero cube, and short 150ms ease-out transitions on hover.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void Black | `#000000` | `--color-void-black` | Page background, card surfaces, overlay scrims — the entire canvas |
| Graphite Hairline | `#292d30` | `--color-graphite-hairline` | 1px borders on cards, inputs, buttons, code blocks, dividers — defines every layer separation |
| White | `#ffffff` | `--color-white` | Primary headings, hero text, button labels, icon fills on dark surfaces |
| Bone White | `#f0f0f0` | `--color-bone-white` | Body text, secondary headings, stroke outlines on icons — the primary reading color |
| Ash Gray | `#a1a4a5` | `--color-ash-gray` | Muted body text, badge labels, icon strokes — third-tier text and metadata |
| Smoke Gray | `#abafb4` | `--color-smoke-gray` | Link color, inactive button text, supporting captions — fourth-tier text |
| Iron | `#6e727a` | `--color-iron` | Subtle decorative strokes, disabled states, low-emphasis borders |
| Charcoal | `#464a4d` | `--color-charcoal` | Inline code text, muted labels — text that should disappear into the surface |
| Iris Violet | `linear-gradient(to right bottom in oklab, rgb(146, 129, 247) 0%, rgb(154, 84, 220) 100%)` | `--color-iris-violet` | Violet text accent for links, tags, and emphasized short phrases; Diagonal violet-to-magenta gradient on icon containers and brand badges |
| Iris Violet Glow | `#baa7ff` | `--color-iris-violet-glow` | Violet text accent for links, tags, and emphasized short phrases |
| Signal Blue | `#3b9eff` | `--color-signal-blue` | Blue action color for filled buttons, selected navigation states, and focused conversion moments. |
| Sky Blue | `#70b8ff` | `--color-sky-blue` | Blue text accent for links, tags, and emphasized short phrases |
| Pulse Green | `#3ad389` | `--color-pulse-green` | Green text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color |
| Alarm Red | `#ff9592` | `--color-alarm-red` | Red text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color |
| Crimson | `#ff6465` | `--color-crimson` | Red wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Use as a supporting accent, not as a status color |
| Amber | `#ffca16` | `--color-amber` | Yellow text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color |
| Amber Glow | `#ffd60a` | `--color-amber-glow` | Yellow wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Use as a supporting accent, not as a status color |
| Surface Gradient | `linear-gradient(rgb(27, 27, 27), rgb(3, 3, 3))` | `--color-surface-gradient` | Subtle card-to-canvas surface lift — used in edge fades and elevated panels |

## Tokens — Typography

### Inter — Body copy, UI labels, navigation, buttons, links. The workhorse — appears 1280 times across every non-code surface. · `--font-inter`
- **Substitute:** Inter (Google Fonts), Söhne, system-ui
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 14px, 16px, 18px, 24px
- **Line height:** 1.00, 1.33, 1.43, 1.50, 1.60
- **Role:** Body copy, UI labels, navigation, buttons, links. The workhorse — appears 1280 times across every non-code surface.

### Domaine — Hero display type — weight 400 at 96px with -0.01em tracking creates an editorial, almost-printed feel. Only used twice on the entire page for the largest hero statement. · `--font-domaine`
- **Substitute:** GT Sectra, Tiempos Headline, Playfair Display
- **Weights:** 400
- **Sizes:** 77px, 96px
- **Line height:** 1.00
- **Letter spacing:** -0.01em
- **OpenType features:** `"ss01", "ss04", "ss11"`
- **Role:** Hero display type — weight 400 at 96px with -0.01em tracking creates an editorial, almost-printed feel. Only used twice on the entire page for the largest hero statement.

### aBC Favorit — Section headlines and sub-headlines. The 56px weight-400 with -0.05em tracking is the signature — extreme negative tracking on a geometric sans creates a compressed, confident display feel that contrasts the editorial Domaine hero. · `--font-abc-favorit`
- **Substitute:** Inter Display, Söhne Breit, GT America
- **Weights:** 400, 500
- **Sizes:** 14px, 16px, 20px, 56px
- **Line height:** 1.00, 1.20, 1.30, 1.50
- **Letter spacing:** -0.05em at 56px, +0.025em at 14px
- **OpenType features:** `"ss01", "ss04", "ss11"; "ss01", "ss03", "ss04"`
- **Role:** Section headlines and sub-headlines. The 56px weight-400 with -0.05em tracking is the signature — extreme negative tracking on a geometric sans creates a compressed, confident display feel that contrasts the editorial Domaine hero.

### Commit Mono — Code blocks, inline code, terminal-style badges, API labels. Monospaced presence is the developer's identity signal — appears 814 times, rivaling Inter. · `--font-commit-mono`
- **Substitute:** JetBrains Mono, Berkeley Mono, IBM Plex Mono
- **Weights:** 400
- **Sizes:** 12px, 14px, 16px
- **Line height:** 1.33, 1.43, 1.50
- **Role:** Code blocks, inline code, terminal-style badges, API labels. Monospaced presence is the developer's identity signal — appears 814 times, rivaling Inter.

### Helvetica — Helvetica — detected in extracted data but not described by AI · `--font-helvetica`
- **Weights:** 400, 600, 700
- **Sizes:** 14px
- **Line height:** 1, 1.71
- **Role:** Helvetica — detected in extracted data but not described by AI

### -apple-system — -apple-system — detected in extracted data but not described by AI · `--font-apple-system`
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.5, 1.55
- **OpenType features:** `"liga" 0`
- **Role:** -apple-system — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.33 | — | `--text-caption` |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1 | — | `--text-subheading` |
| heading-sm | 24px | 1.5 | — | `--text-heading-sm` |
| heading | 56px | 1.2 | -2.8px | `--text-heading` |
| heading-lg | 77px | 1 | -0.77px | `--text-heading-lg` |
| display | 96px | 1 | -0.96px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 104 | 104px | `--spacing-104` |
| 144 | 144px | `--spacing-144` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| badges | 6px |
| inputs | 6px |
| buttons | 6px |
| large-panels | 24px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(176, 199, 217, 0.145) 0px 0px 0px 1px` | `--shadow-subtle` |
| subtle-2 | `rgb(0, 0, 0) 0px 0px 0px 8px` | `--shadow-subtle-2` |
| subtle-3 | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0p...` | `--shadow-subtle-3` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 96px
- **Card padding:** 32px
- **Element gap:** 16px

## Components

### Primary Button (Ghost on Black)
**Role:** Default CTA — 'Get started', 'Log in'

Transparent background, 1px border in #292d30, white text (#ffffff), 6px radius, 12px 16px padding. Hover increases border opacity to white. This is the signature button — never filled, never colorful.

### Nav Link Button
**Role:** Top navigation items — 'Features', 'Company', 'Resources'

Transparent background, no border, text color #f0f0f0 at 14px Inter weight 400, 0px padding. Underline or color shift on hover to #ffffff.

### Text Link with Chevron
**Role:** Inline CTAs — 'Documentation', 'Get started >'

No background, no border, white or #f0f0f0 text at 16px Inter, trailing chevron icon in same color. Restrained, terminal-like.

### Hero Announcement Pill
**Role:** 'Announcing Resend Forward >' badge above hero headline

Transparent fill, 1px border in #292d30, #f0f0f0 text at 14px Inter, 9999px (pill) radius, 6px 12px padding. Small chromatic accent chevron.

### Section Card
**Role:** Content cards in feature sections and testimonial grid

Black background (#000000), 1px border in #292d30, 16px radius, 32px padding, no shadow. Cards rely on the border to separate from the black canvas.

### Testimonial Card
**Role:** Customer quote cards in 'Beyond expectations' section

Black background, 1px #292d30 border, 16px radius, 24px padding. Contains quoted text at 16px Inter, avatar (32px circle), name at 14px weight 500 in #f0f0f0, role/title in #a1a4a5.

### Code Block / Terminal Window
**Role:** Developer-facing code snippets and API examples

Black background, 1px #292d30 border, 16px radius, Commit Mono at 12-14px. Syntax highlighting uses #9281f7 for strings/keywords, #3b9eff for filenames, #3ad389 for success values, #ff9592 for errors. Optional traffic-light dots in top-left for terminal aesthetic.

### Logo Grid
**Role:** Customer logos — Warner Bros, Max, Raycast, etc.

Inline-display logos at their native colors on black canvas, centered in a 4-column grid with 60px row gap. No card wrappers, no labels — just the marks breathing against black.

### Status Indicator Dot
**Role:** Email event status — delivered, opened, clicked, bounced, complained

2-3px diameter filled dot, no border, paired with label text in Commit Mono. Colors map to semantics: #3ad389 delivered, #70b8ff opened, #baa7ff clicked, #ff9592 bounced, #ffca16 complained.

### Email Address Badge
**Role:** 'from:' addresses in code samples and UI

No background, Commit Mono at 12-14px, text color #9281f7 (Iris Violet). The violet-on-black makes email identifiers the most readable code element — a deliberate developer-UX choice.

### Icon Container
**Role:** Rounded-square containers for app icons in integrations grid

32x32 or 48x48 rounded square (16px radius), subtle gradient fill (oklab violet→magenta), white or violet stroke icon inside. Creates the only chromatic surface on the page.

### 3D Hero Cube
**Role:** WebGL-rendered black geometric cube in hero

Full-opacity black cube with subtle edge highlights in #292d30, rotating slowly. No glow, no color — a sculptural object that anchors the right side of the hero against the black canvas.

### Footer Link Row
**Role:** Minimal footer with two text links

Two text links ('Privacy', 'Terms') at 14px Inter in #a1a4a5, separated by space, no decorative elements. Footer is intentionally minimal — no logo, no columns.

## Do's and Don'ts

### Do
- Use pure #000000 as the page canvas — never off-black or tinted dark grays for the background.
- Separate all UI layers with 1px borders in #292d30, not shadows. Cards, inputs, code blocks all rely on hairline borders against the black canvas.
- Use Commit Mono for any code, email address, or developer-facing string. Keep Inter for prose and UI chrome.
- Keep buttons ghost/outlined: transparent fill, 1px border, white text. Never use a filled colorful button as the primary CTA.
- Use 6px radius for buttons, badges, inputs. Use 16px radius for cards and code windows. Never mix — the radius scale is two values.
- Let Iris Violet (#9281f7) mark code strings and developer identifiers. It is the only brand color and should feel like syntax highlighting, not decoration.
- Apply tight -0.05em letter-spacing at 56px display sizes and -0.01em at 96px hero sizes. The compressed tracking is what makes the headlines feel confident.

### Don't
- Don't add gradients, glows, or chromatic washes to the hero or section backgrounds. The canvas is flat black.
- Don't use filled accent-color buttons (blue, violet, green) as primary actions. Buttons stay ghost or white-text-on-black.
- Don't use multiple border radii on a single surface. Cards are 16px, buttons/badges/inputs are 6px — pick one per component.
- Don't introduce colored card backgrounds. Cards sit on black with hairline borders; no #292d30 fills.
- Don't use shadows for elevation. The design relies on 1px borders and subtle backdrop blurs, not drop shadows.
- Don't pair Iris Violet with large type as a decorative heading color. It belongs to code and developer identifiers only.
- Don't break the monochrome-with-one-violet discipline by adding multiple accent hues to UI chrome. The status colors (green, blue, red, amber) are reserved for data/status indicators.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void | `#000000` | Primary page canvas, full-bleed black |
| 1 | Graphite | `#292d30` | Hairline borders defining card and input surfaces against the void |
| 2 | Surface Lift | `#0b0e14` | Elevated panels and overlay scrims via subtle gradient |
| 3 | Backdrop Blur | `#000000f2` | Modal and navigation overlays with blur(25px) |

## Elevation

Elevation is achieved through 1px hairline borders (#292d30) against a flat black canvas, never through drop shadows. The only shadow token in active use is a faint 1px ring (rgba(176, 199, 217, 0.145)) on icon containers, used sparingly to suggest a subtle light source rather than depth.

## Imagery

Imagery is almost entirely WebGL-rendered 3D objects (black cube in hero, rotating geometric forms) and inline product UI screenshots shown inside dark code windows. No photography, no illustrations, no lifestyle imagery. Logos in the trust bar are inline SVGs at native colors. Icons are 1px-1.5px stroke outlines in #f0f0f0 or #a1a4a5. The visual language is: black canvas, 3D object as hero anchor, dark code windows as product proof, white SVG logos as social proof. Nothing decorative — every visual element is either structural (cube) or demonstrative (code window, logo).

## Agent Prompt Guide

Quick Color Reference:
- text/heading: #ffffff
- text/body: #f0f0f0
- text/muted: #a1a4a5
- background/canvas: #000000
- border/hairline: #292d30
- accent/code: #9281f7
- primary action: #3b9eff (filled action)

3-5 Example Component Prompts:

1. Create a section headline: 'Integrate tonight' at 56px aBCFavorit weight 400, color #ffffff, letter-spacing -2.8px, line-height 1.2. Below it, body copy at 18px Inter weight 400, color #a1a4a5. Section sits on a #000000 canvas with no border.

2. Create a code terminal window: #000000 background, 1px border in #292d30, 16px radius, padding 24px. Content in Commit Mono at 14px. Email address strings colored #9281f7, keywords colored #f0f0f0, success values colored #3ad389. Optional 3 traffic-light dots (8px circles) in top-left.

3. Create a navigation bar: transparent background, Resend wordmark logo on left (white), nav items ('Features', 'Company', 'Resources') in Inter 14px weight 400, color #f0f0f0. On the right, a 'Get started' button — transparent fill, 1px border in #292d30, white text, 6px radius, 8px 16px padding. The bar sits on #000000 with no separator.

4. Create a testimonial card: #000000 background, 1px border in #292d30, 16px radius, 32px padding. Quote text in Inter 16px weight 400, color #f0f0f0. Below: 32px circular avatar, name in Inter 14px weight 500 #f0f0f0, role/title in #a1a4a5. No shadow.

5. Create a status indicator row: inline pill with a 2px circle dot in #3ad389 followed by 'Delivered' label in Commit Mono 12px, color #a1a4a5. Dot indicates email event status. No background, no border, sits inline within a dark code window.

## Similar Brands

- **Linear** — Same black-canvas, hairline-border aesthetic with restrained chromatic accents and sharp typography
- **Vercel** — Near-identical pure-black backgrounds with white typography and minimal border-based elevation
- **Plaid** — Dark-mode developer-tool identity with monospaced code emphasis and single-accent palette
- **Railway** — Black canvas with terminal-style code windows as the primary product showcase
- **Stripe (dark mode)** — Editorially confident display type on black with hairline borders and ghost buttons

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void-black: #000000;
  --color-graphite-hairline: #292d30;
  --color-white: #ffffff;
  --color-bone-white: #f0f0f0;
  --color-ash-gray: #a1a4a5;
  --color-smoke-gray: #abafb4;
  --color-iron: #6e727a;
  --color-charcoal: #464a4d;
  --color-iris-violet: #9281f7;
  --gradient-iris-violet: linear-gradient(to right bottom in oklab, rgb(146, 129, 247) 0%, rgb(154, 84, 220) 100%);
  --color-iris-violet-glow: #baa7ff;
  --color-signal-blue: #3b9eff;
  --color-sky-blue: #70b8ff;
  --color-pulse-green: #3ad389;
  --color-alarm-red: #ff9592;
  --color-crimson: #ff6465;
  --color-amber: #ffca16;
  --color-amber-glow: #ffd60a;
  --color-surface-gradient: #0b0e14;
  --gradient-surface-gradient: linear-gradient(rgb(27, 27, 27), rgb(3, 3, 3));

  /* Typography — Font Families */
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-domaine: 'Domaine', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-abc-favorit: 'aBC Favorit', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-commit-mono: 'Commit Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-helvetica: 'Helvetica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-apple-system: '-apple-system', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.5;
  --text-heading: 56px;
  --leading-heading: 1.2;
  --tracking-heading: -2.8px;
  --text-heading-lg: 77px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.77px;
  --text-display: 96px;
  --leading-display: 1;
  --tracking-display: -0.96px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-104: 104px;
  --spacing-144: 144px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 96px;
  --card-padding: 32px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;

  /* Named Radii */
  --radius-cards: 16px;
  --radius-badges: 6px;
  --radius-inputs: 6px;
  --radius-buttons: 6px;
  --radius-large-panels: 24px;

  /* Shadows */
  --shadow-subtle: rgba(176, 199, 217, 0.145) 0px 0px 0px 1px;
  --shadow-subtle-2: rgb(0, 0, 0) 0px 0px 0px 8px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;

  /* Surfaces */
  --surface-void: #000000;
  --surface-graphite: #292d30;
  --surface-surface-lift: #0b0e14;
  --surface-backdrop-blur: #000000f2;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-void-black: #000000;
  --color-graphite-hairline: #292d30;
  --color-white: #ffffff;
  --color-bone-white: #f0f0f0;
  --color-ash-gray: #a1a4a5;
  --color-smoke-gray: #abafb4;
  --color-iron: #6e727a;
  --color-charcoal: #464a4d;
  --color-iris-violet: #9281f7;
  --color-iris-violet-glow: #baa7ff;
  --color-signal-blue: #3b9eff;
  --color-sky-blue: #70b8ff;
  --color-pulse-green: #3ad389;
  --color-alarm-red: #ff9592;
  --color-crimson: #ff6465;
  --color-amber: #ffca16;
  --color-amber-glow: #ffd60a;
  --color-surface-gradient: #0b0e14;

  /* Typography */
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-domaine: 'Domaine', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-abc-favorit: 'aBC Favorit', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-commit-mono: 'Commit Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-helvetica: 'Helvetica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-apple-system: '-apple-system', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.5;
  --text-heading: 56px;
  --leading-heading: 1.2;
  --tracking-heading: -2.8px;
  --text-heading-lg: 77px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -0.77px;
  --text-display: 96px;
  --leading-display: 1;
  --tracking-display: -0.96px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-104: 104px;
  --spacing-144: 144px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;

  /* Shadows */
  --shadow-subtle: rgba(176, 199, 217, 0.145) 0px 0px 0px 1px;
  --shadow-subtle-2: rgb(0, 0, 0) 0px 0px 0px 8px;
  --shadow-subtle-3: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
}
```






ab mujhe e