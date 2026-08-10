# ZenuxsPlatform — MASTER UI/UX + MOTION + FULL IMPLEMENTATION EXECUTION PROMPT

## ROLE

Act as the **lead product designer + creative developer + frontend architect + motion designer + UX auditor + performance engineer** for ZenuxsPlatform.

You are not being asked to make another AI-generated landing page.

You are being asked to take the existing ZenuxsPlatform project and **fully execute the design system, product story, UI system, motion system, component library, and PRD/TRD into one coherent production-quality website.**

The final result must feel like a deliberately art-directed, premium developer ecosystem website — not a template with animations added afterward.

---

# 1. FIRST: READ THE ENTIRE DESIGN KNOWLEDGE BASE

Before changing ANY code, read every relevant file in:

```text
.opencode/
```

and all UI/design/content files shown in the project root.

Current structure includes:

```text
ZENUXS-PLATFORM/
│
├── .opencode/
│
│   ├── skill.md
│   ├── style.md
│   ├── ui-libraries.md
│   ├── ui-prompts.md
│   ├── ui-website.md
│   └── Ui.md
│
├── ZenuxsPlatform_Homepage_History_Script.md
└── ZenuxsPlatform_PRD_TRD.md
```

There may be additional files inside `.opencode/`.

### MANDATORY

Do not only read the filenames.

Actually open and read the contents.

If `.opencode/` contains:

- component references
- button styles
- cursor systems
- animation recipes
- 3D components
- backgrounds
- shaders
- cards
- navigation patterns
- typography systems
- layout recipes
- UI prompts
- website examples
- implementation instructions

you must understand and reuse them where appropriate.

---

# 2. FILE OWNERSHIP / PRIORITY

There are two different categories of documents.

## CATEGORY A — PRODUCT / CONTENT AUTHORITY

These two files define what ZenuxsPlatform is supposed to communicate:

```text
ZenuxsPlatform_PRD_TRD.md
ZenuxsPlatform_Homepage_History_Script.md
```

Read them completely.

### PRD + TRD

This is the authority for:

- product scope
- functionality
- architecture
- technical constraints
- required sections
- product information
- links
- behavior
- responsive requirements
- implementation requirements

Do not invent functionality that conflicts with the PRD/TRD.

---

### Homepage History Script

This is the authority for:

- homepage narrative
- product-story sequence
- section order
- messaging
- historical/product progression
- content direction
- visual storytelling

Do not replace this with generic SaaS copy.

---

# 3. CATEGORY B — VISUAL / UI / DESIGN AUTHORITY

Everything else related to UI/design is the visual language.

Read:

```text
.opencode/skill.md
.opencode/style.md
.opencode/ui-libraries.md
.opencode/ui-prompts.md
.opencode/ui-website.md
.opencode/Ui.md
```

and any additional UI-related files inside `.opencode/`.

These define:

- visual language
- typography
- layout
- animation
- component behavior
- references
- UI patterns
- design rules
- motion
- 3D
- interaction
- visual quality bar

---

# 4. DO NOT TREAT THE FILES AS SEPARATE PROMPTS

This is critical.

Do NOT implement:

```text
style.md
then forget it

skill.md
then forget it

PRD
then forget it
```

Instead create ONE coherent implementation system.

Conceptually:

```text
PRD/TRD
      ↓
What the product must communicate
      ↓
Homepage History Script
      ↓
How the story is told
      ↓
style.md
      ↓
Visual identity
      ↓
skill.md
      ↓
Motion + layout behavior
      ↓
ui-*.md
      ↓
Available UI/component vocabulary
      ↓
IMPLEMENTATION
```

---

# 5. USE THE EXISTING `.opencode` UI LIBRARY AGGRESSIVELY

The project already contains a large collection of UI/component/design knowledge.

Use it.

Do not create a generic component library from scratch while ignoring the provided material.

Look for things such as:

```text
buttons
cards
navigation
cursor systems
hover effects
3D elements
animated backgrounds
text effects
scroll effects
marquees
grids
glows
particles
shaders
badges
tooltips
modals
menus
tabs
timeline
product frames
code blocks
device frames
image treatments
loading states
interaction patterns
```

Use the strongest components where they make sense.

---

# 6. BUT DO NOT USE EVERYTHING BLINDLY

"Full loaded crazy web" does NOT mean:

```text
every component everywhere
every animation everywhere
every cursor effect everywhere
every 3D effect everywhere
```

That creates visual noise.

Instead:

> Use the entire design vocabulary intelligently.

Every component must have a role.

Every major animation must communicate something.

Every decorative effect must support the composition.

---

# 7. THE FINAL WEBSITE MUST FEEL FULLY DESIGNED

Avoid the common AI-generated website pattern:

```text
huge heading
↓
three cards
↓
two-column section
↓
three cards
↓
testimonial
↓
CTA
↓
footer
```

That structure is explicitly NOT acceptable.

ZenuxsPlatform should feel like:

```text
an interactive product world
```

not:

```text
a SaaS template
```

---

# 8. DESIGN THE ENTIRE PAGE AS ONE CONTINUOUS EXPERIENCE

Think of the page as:

```text
ONE LARGE DIGITAL ENVIRONMENT
```

not independent sections.

Visual objects may travel between scenes.

Background systems may evolve.

Typography may transform.

Product interfaces may expand/collapse.

3D objects may become interface elements.

A product node may become a full product scene and later return to the ecosystem.

---

# 9. USE THE HOMEPAGE STORY AS THE STRUCTURAL BACKBONE

The homepage should tell a progression.

Conceptually:

```text
ENTRY
↓
WHY
↓
PROBLEM
↓
ZENUXS
↓
IDENTITY
↓
DEVELOPER TOOLS
↓
AI / CODE
↓
DATA
↓
SECURITY
↓
INFRASTRUCTURE
↓
PLUGINS
↓
OPEN SOURCE
↓
ECOSYSTEM
↓
FUTURE / BUILD
```

Use the exact product/story information from the Homepage History Script.

Do not invent unsupported claims.

---

# 10. MAKE THE HOMEPAGE LONG

The homepage should NOT feel like a short landing page.

Use a long-form editorial/product narrative.

Major scenes should have enough vertical space to breathe.

A rough conceptual structure can include:

```text
INTRO / ENTRY
→
ORIGIN / WHY
→
ZENUXS WORLD
→
PRODUCT DISCOVERY
→
ACCOUNTS
→
AI / CODE
→
DATA
→
SECURITY
→
INFRASTRUCTURE
→
PLUGIN ECOSYSTEM
→
OPEN SOURCE
→
FULL ECOSYSTEM
→
FINAL BUILDING MOMENT
```

The actual section count must be determined from the PRD + History Script.

Do not artificially inflate the page.

---

# 11. 100VH / VIEWPORT CHAPTERS

Major visual chapters should use viewport-oriented compositions.

Prefer concepts such as:

```text
100svh
100dvh
min-height: 100vh
```

where appropriate.

But do not blindly make every section exactly 100vh.

Some scenes need:

```text
150vh
200vh
300vh
```

because they contain scroll-driven storytelling.

The height must be based on the narrative.

---

# 12. STICKY STORYTELLING IS MANDATORY WHERE APPROPRIATE

If one side contains long explanatory text and the other contains a product visual:

use:

```text
sticky visual
+
scrolling text
```

Example:

```text
┌─────────────────────────────────────┐
│                                     │
│  STEP 01            ┌───────────┐   │
│                     │           │   │
│  STEP 02            │ PRODUCT   │   │
│                     │ UI        │   │
│  STEP 03            │           │   │
│                     └───────────┘   │
│                                     │
└─────────────────────────────────────┘
```

The visual stays.

The story changes.

---

# 13. THE VISUAL MUST CHANGE WITH THE STORY

Do not use:

```text
text 1
same screenshot

text 2
same screenshot

text 3
same screenshot
```

Instead:

```text
text 1
→ visual state A

text 2
→ visual state B

text 3
→ visual state C
```

The visual can transform through:

- scale
- perspective
- panel expansion
- content replacement
- camera movement
- clip-path
- morphing
- 3D rotation
- internal UI state
- zoom
- object continuity

---

# 14. WHEN THE STORY ENDS, THE WHOLE SCENE MUST EXIT

Important.

Do not leave sticky visuals floating over the next section.

Correct:

```text
sticky scene
↓
final story state
↓
sticky releases
↓
visual moves with section
↓
whole container exits
↓
next scene begins
```

---

# 15. USE THE PROVIDED MOTION SKILL

If the project contains a motion/layout skill or similar file, treat it as mandatory.

Implement:

- scroll-linked animation
- sticky scenes
- pinned scenes
- perspective
- 3D depth
- product transformations
- object continuity
- typography motion
- clip reveals
- horizontal sub-scenes
- camera-like transitions
- responsive motion
- reduced-motion support
- performance controls

Do NOT reduce it to:

```text
fade-in on scroll
```

---

# 16. ANIMATION QUALITY BAR

The user should sometimes see an animation and think:

> "What just happened?"

but then understand the relationship.

Examples:

```text
small node
→
expands into product UI
```

```text
product UI
→
rotates
→
becomes architecture
```

```text
large headline
→
moves behind UI
→
becomes background
```

```text
background grid
→
turns into product/data grid
```

```text
3D ecosystem
→
camera approaches one product
→
product becomes full scene
→
camera pulls back
→
product becomes ecosystem node again
```

Use these kinds of transitions where meaningful.

---

# 17. 3D MUST BE SEMANTIC

Do not add random:

- cubes
- spheres
- neon blobs
- floating glass
- spinning objects

just because they look "3D".

3D objects should represent something.

Examples:

```text
identity node
data node
repository
connection
network
API
product
system
source
```

---

# 18. BACKGROUND MOTION

The background should have its own visual system.

Possible:

```text
technical grid
particles
nodes
depth field
soft noise
shader
network lines
3D environment
```

But it must remain subordinate to content.

---

# 19. BACKGROUND SHOULD EVOLVE

Do not use one identical background animation from top to bottom.

Different chapters can alter:

```text
density
depth
grid
particles
connections
camera
lighting
```

while preserving the Zenuxs visual identity.

---

# 20. TYPOGRAPHY MUST BE A PRIMARY VISUAL ELEMENT

Use the typography system defined in the design files.

Headlines should be:

```text
large
wide
low-height
tight
editorial
architectural
```

Avoid overly tall condensed headline styling.

Typography should participate in motion.

Possible:

```text
split
mask
clip
translate
perspective
scale
character/word stagger
```

Use character-level animation selectively.

---

# 21. UI SHOULD NOT BE CENTERED BY DEFAULT

This is one of the biggest rules.

Do not make every section:

```text
center aligned
centered card
centered text
```

Use:

```text
left anchored
right anchored
asymmetric
edge aligned
overlapping
offset
full bleed
sticky split
editorial grid
```

Composition must feel intentional.

---

# 22. USE NEGATIVE SPACE AS A STRUCTURAL TOOL

Do not fill every pixel.

Some scenes should be:

```text
70% empty
30% content
```

and others:

```text
40% empty
60% visual
```

The variation creates rhythm.

---

# 23. USE THE FULL WIDTH

Do not trap the entire website inside:

```text
max-width: 1200px
```

for every section.

Use:

```text
full viewport
```

for major visual scenes.

Use constrained widths only where readability requires it.

---

# 24. ASYMMETRIC GRID

Use a responsive grid.

Possible:

```text
2 / 10
3 / 9
4 / 8
5 / 7
6 / 6
```

not only:

```text
6 / 6
```

This will prevent the website from looking like generic AI layout output.

---

# 25. PRODUCT UI SHOULD LOOK REAL

When showing product interfaces:

do not create fake generic dashboard cards.

Use the actual product information available in the project and public product sources where appropriate.

If screenshots/assets exist, use them.

If a product UI needs to be represented conceptually, build a believable interface that reflects the product's real purpose.

Do not fabricate unsupported features.

---

# 26. PRODUCT SCREENS CAN BECOME 3D OBJECTS

Example:

```text
flat UI
↓
perspective
↓
depth
↓
camera move
↓
full-screen UI
```

This should be used for major product chapters.

---

# 27. COMPONENT REUSE

Create reusable primitives for repeated visual behavior.

Examples:

```text
<ScrollScene />
<StickyStory />
<StoryStep />
<MotionProduct />
<PerspectiveFrame />
<TextMask />
<ClipReveal />
<EcosystemScene />
<DepthField />
<MagneticButton />
<MotionImage />
<SceneTransition />
```

Do not copy-paste complex animation logic.

---

# 28. USE `.opencode` COMPONENT REFERENCES AS BUILDING BLOCKS

If `.opencode` contains implementation-ready examples:

adapt them.

If they are only visual references:

rebuild the behavior using the project's actual stack.

Do not blindly paste code that creates dependency conflicts.

---

# 29. COMPONENT AUDIT

Before adding a new component:

ask:

```text
Does this already exist in .opencode?
```

If yes:

reuse or adapt it.

If no:

create a reusable primitive if it will appear more than once.

---

# 30. CURSOR SYSTEM

If the UI files contain custom cursors:

use them intelligently.

Possible:

- context-aware cursor
- magnetic cursor
- cursor label
- hover cursor
- drag indicator
- 3D interaction cursor

But:

- desktop only
- never block clicks
- never interfere with accessibility
- provide normal pointer behavior on touch devices

---

# 31. BUTTON SYSTEM

Use the provided button patterns.

Important CTA buttons should have:

- strong hover
- subtle depth
- intentional focus
- clear pressed state
- keyboard accessibility

Do not make every button flashy.

---

# 32. MICRO INTERACTIONS

Use them for:

- buttons
- navigation
- product links
- cards
- code links
- GitHub links
- external product links

They should support the major motion language.

---

# 33. NAVIGATION

Navigation should be:

```text
minimal
functional
persistent when useful
```

It can become part of the motion system.

Example:

```text
transparent
↓
compact dark surface
↓
scene-aware
```

But never obscure content.

---

# 34. NAVIGATION MUST REMAIN USABLE

No animation should make:

- navigation disappear unexpectedly
- anchors unreliable
- focus impossible
- mobile menu unusable

---

# 35. MOBILE IS NOT AN AFTERTHOUGHT

After desktop implementation:

actually test mobile layouts.

Do not merely shrink desktop.

Mobile may require:

```text
different composition
different sticky arrangement
fewer 3D layers
shorter scroll distances
different typography
different visual hierarchy
```

The story must remain intact.

---

# 36. RESPONSIVE RULE

Use responsive layout transformations, not:

```text
desktop CSS
+
scale(0.5)
```

---

# 37. PERFORMANCE

The site must feel extremely smooth.

Target:

```text
60fps where practical
```

Avoid:

- expensive React state updates per frame
- uncontrolled scroll listeners
- layout thrashing
- giant DOM trees
- unnecessary WebGL
- oversized images
- duplicate animation engines

---

# 38. ANIMATION OWNERSHIP

Never allow:

```text
Framer Motion
+
GSAP
+
CSS
```

to simultaneously control the same property.

Define ownership.

Example:

```text
Motion
→ component interaction

GSAP
→ cinematic scene

R3F
→ 3D world

CSS
→ base visual state
```

---

# 39. REDUCED MOTION

Implement:

```text
prefers-reduced-motion
```

The story must remain understandable.

Disable or reduce:

- aggressive camera movement
- parallax
- continuous particles
- large transformations

Keep:

- hierarchy
- content
- basic transitions

---

# 40. SCROLL MUST NEVER BE HIJACKED

Normal browser scrolling remains the foundation.

Do not trap users inside a custom scroll engine.

---

# 41. REVERSE SCROLL MUST WORK

Every major scene must work:

```text
forward
```

and:

```text
backward
```

No broken state.

---

# 42. DIRECT LOAD MUST WORK

If the user loads the page directly at:

```text
#accounts
```

or another route/anchor:

the visual state must initialize correctly.

---

# 43. RESIZE MUST WORK

Test:

```text
desktop resize
tablet
mobile
orientation change
browser chrome changes
```

No broken sticky boundaries.

---

# 44. FULL PAGE VISUAL AUDIT

After implementation, inspect every section.

Ask:

```text
Is the focal point obvious?
Is the composition balanced?
Is there accidental empty space?
Is there accidental crowding?
Is anything overlapping?
Is anything hidden under navigation?
Is the visual anchored?
Is text readable?
Is the product understandable?
Does the transition feel intentional?
```

---

# 45. DO NOT ACCEPT "IT LOOKS GOOD"

The quality bar is higher.

A section is complete only when:

```text
design
+
content
+
motion
+
responsive behavior
+
performance
+
accessibility
+
interaction
```

all work together.

---

# 46. BUILD IN PASSES

Do NOT attempt to perfect every detail while the architecture is unclear.

Use this sequence.

## PASS 1 — RECON

Read all files.

Create an internal map:

```text
document
→ requirements
→ design rules
→ components
→ sections
→ motion
```

Do not code yet.

---

## PASS 2 — CURRENT APP AUDIT

Inspect the existing implementation.

Identify:

- current routes
- current components
- current styles
- current assets
- current dependencies
- existing animation systems
- existing layout system
- reusable components
- broken components
- missing sections

---

## PASS 3 — DESIGN SYSTEM

Create/normalize:

```text
fonts
spacing
grid
container
colors
borders
radii
shadows
motion tokens
z-index
breakpoints
```

Do not duplicate design tokens in random files.

---

## PASS 4 — MOTION ARCHITECTURE

Create:

```text
scene system
sticky story system
scroll progress system
motion primitives
3D environment abstraction
reduced-motion system
performance controls
```

---

## PASS 5 — PAGE STRUCTURE

Implement all major sections from the PRD and History Script.

At this stage:

```text
layout first
content correct
visual hierarchy correct
```

---

## PASS 6 — COMPONENT LIBRARY

Use/adapt `.opencode` components.

Build reusable:

```text
buttons
navigation
cards
product frames
cursor
text effects
3D wrappers
scroll scenes
```

---

## PASS 7 — CINEMATIC MOTION

Add the strongest transitions.

Prioritize:

```text
sticky scenes
product transformations
object continuity
camera movement
3D ecosystem
typography motion
```

Do not spend time polishing tiny hover effects before major scenes work.

---

## PASS 8 — RESPONSIVE

Implement:

```text
desktop
tablet
mobile
```

as intentional compositions.

---

## PASS 9 — PERFORMANCE

Test:

```text
FPS
CPU
GPU
memory
scroll
image loading
WebGL
```

Reduce complexity where required.

---

## PASS 10 — VISUAL AUDIT

Use the browser.

Actually inspect the rendered page.

Do not trust source code alone.

---

# 47. USE BROWSER / RUNTIME VALIDATION

After implementation, run the actual website.

Check:

```text
every route
every anchor
every major interaction
every product link
every CTA
every animation
every sticky section
```

Do not mark completion based only on successful compilation.

---

# 48. TEST THE EXTREMES

Test:

```text
very slow scroll
normal scroll
very fast scroll
reverse scroll
scroll to bottom quickly
jump to section
refresh halfway through page
resize while scene is active
open mobile menu
tab through page
reduced motion
low-power device mode
```

---

# 49. ERROR HANDLING

No:

```text
blank visual
broken canvas
stuck loader
infinite animation
```

If an enhancement fails:

the content must remain usable.

---

# 50. ASSET STRATEGY

Prefer:

```text
real product screenshots
real product logos
real GitHub information
real product links
```

where available.

Do not create fake customer testimonials, fake user counts, fake awards, fake company statistics, or fake historical claims.

---

# 51. EXTERNAL PRODUCT INFORMATION

If additional product details are needed and the PRD does not contain enough information, inspect the official/public product pages or open-source repositories where appropriate.

Use verified information.

Do not invent capabilities.

---

# 52. OPEN SOURCE STORY

ZenuxsPlatform is an ecosystem.

The site should communicate:

```text
products
+
developers
+
open source
+
tools
+
community
```

The GitHub ecosystem should feel like part of the same world.

---

# 53. FINAL ECOSYSTEM SCENE

Build a strong visual ecosystem moment.

Potential structure:

```text
                    AI
                     |
          Accounts — ZENUXS — Code
             |       |        |
          Data     Plugins   Infra
             |       |        |
           DNS     Open Source
```

But do not use a basic SVG diagram.

Turn it into an interactive 3D/spatial composition.

Scroll can move the camera through it.

---

# 54. PRODUCT → ECOSYSTEM TRANSITIONS

Each major product chapter should eventually reconnect to the ecosystem.

Example:

```text
product UI
↓
camera pulls back
↓
UI shrinks
↓
becomes node
↓
connections appear
↓
next product
```

This creates a unified story.

---

# 55. FINAL CTA

Do not end with:

```text
Ready to get started?
[Get Started]
```

unless the PRD explicitly requires that wording.

The ending should feel like a continuation of the story.

Use the actual final message from the Homepage History Script.

Possible direction:

```text
WHAT WILL YOU BUILD?
```

or an equivalent approved line.

---

# 56. FOOTER

The footer should feel like the end of the ecosystem.

Include all required product/community links from the PRD.

It can use:

- oversized typography
- subtle 3D background
- product constellation
- repository visual
- animated wordmark

But it must remain functional.

---

# 57. IMPORTANT: DO NOT OVER-COPY REFERENCES

The listed design references are inspiration.

Do not make the page look like:

```text
Framer clone
21st.dev clone
Manus clone
Apple clone
```

The result must feel specifically:

```text
ZENUXS
```

---

# 58. THE "AI GENERATED WEBSITE" TEST

Before declaring completion, ask:

Would someone look at this and say:

> "This looks like an AI made a SaaS landing page."

If yes:

STOP.

Fix:

- layout
- asymmetry
- visual continuity
- typography
- motion
- spacing
- hierarchy
- product storytelling

until the result feels art-directed.

---

# 59. THE "TOO MUCH" TEST

If someone says:

> "This is crazy."

That is good.

If they say:

> "I can't use this."

That is bad.

The goal is:

```text
crazy visual language
+
calm usability
```

---

# 60. THE "FULL LOADED" DEFINITION

"Full loaded" means:

```text
rich
+
interactive
+
deep
+
layered
+
responsive
+
motion-rich
+
3D-aware
+
product-focused
```

It does NOT mean:

```text
cluttered
+
random
+
every component visible
```

---

# 61. ABSOLUTE STOP CONDITIONS

STOP and redesign if:

- only fade-in animations are being used
- every section looks like the same layout
- every section is centered
- every section uses the same card grid
- product visuals are static everywhere
- sticky storytelling is missing where it clearly fits
- 3D is purely decorative
- cursor effects block usability
- animations fight each other
- mobile is broken
- reverse scroll is broken
- sticky sections overlap incorrectly
- navigation gets hidden behind content
- text overlaps product UI unintentionally
- horizontal overflow appears
- page becomes janky
- WebGL causes serious performance problems
- fake product capabilities are introduced
- unsupported company claims are introduced
- `.opencode` components were ignored
- PRD/TRD requirements were skipped
- Homepage History Script content was replaced with generic copy

---

# 62. COMPLETION CRITERIA

Do not say "done" until all of these are true:

### Documentation

- all `.opencode` UI/design files read
- PRD/TRD read
- Homepage History Script read
- existing implementation audited

### UI

- complete visual system implemented
- typography correct
- responsive layout correct
- navigation correct
- buttons/interactions correct
- product sections complete

### Motion

- major scroll scenes implemented
- sticky scenes implemented where useful
- product transformations implemented
- 3D/depth implemented where useful
- object continuity implemented
- section transitions implemented
- reduced motion implemented

### Functionality

- all required links work
- all CTAs work
- navigation works
- anchors work
- external links work
- responsive navigation works

### Performance

- no obvious jank
- no layout thrashing
- no runaway RAF
- no WebGL leaks
- no broken scroll state

### QA

- desktop tested
- tablet tested
- mobile tested
- slow scroll tested
- fast scroll tested
- reverse scroll tested
- direct section load tested
- reduced motion tested

---

# 63. FINAL EXECUTION COMMAND

Now execute the project as a **single unified design system**.

First read:

```text
.opencode/**
ZenuxsPlatform_PRD_TRD.md
ZenuxsPlatform_Homepage_History_Script.md
```

Then audit the current implementation.

Then build.

Do not ask for permission to fix obvious UI problems.

Do not stop after creating a mockup.

Do not stop after implementing only the hero.

Do not stop after adding a few animations.

Do not produce a "concept".

Produce the actual working ZenuxsPlatform website.

Reuse and adapt the existing `.opencode` UI/component vocabulary aggressively.

Use the PRD/TRD as the functional authority.

Use the Homepage History Script as the content/story authority.

Use all UI/design/skill files as the visual/motion authority.

Make the entire page feel like one continuous product world.

The final result should be:

```text
PREMIUM
+
UNEXPECTED
+
CINEMATIC
+
TECHNICAL
+
3D
+
INTERACTIVE
+
PRODUCT-DRIVEN
+
FAST
+
ACCESSIBLE
+
RESPONSIVE
+
COHERENT
```

The objective is NOT to make a page that has many animations.

The objective is:

> **Build a website where the layout itself behaves like a living interface.**

And the final quality bar is:

> **If the user can explain every animation as "it fades in when I scroll", the implementation is not finished.**
