# ZenuxsPlatform — Motion, 3D & Scroll Storytelling Skill
# File: motion-layout-management.skill.md
# Purpose: Control aggressive modern motion, scroll choreography, 3D composition,
# sticky storytelling, typography motion, visual continuity, and performance.
# Scope: ZenuxsPlatform marketing/product ecosystem website.
# Status: NON-NEGOTIABLE DESIGN + MOTION SYSTEM

---

# 00 — CORE DIRECTIVE

ZenuxsPlatform must NOT use "normal website animations."

Do NOT interpret animation as:

- fade in
- fade out
- slide up
- hover scale
- button bounce
- generic card reveal

Those are utility animations.

They are allowed for small UI interactions, but they are NOT the visual identity.

The visual identity must come from:

```text
SCROLL
+
LAYOUT
+
DEPTH
+
TYPOGRAPHY
+
PERSPECTIVE
+
STICKY NARRATIVE
+
OBJECT CONTINUITY
+
3D SPACE
+
MORPHING
+
CAMERA-LIKE MOVEMENT
+
PRECISE TIMING
```

The website should feel as if the user is moving through a designed physical/digital environment.

The user should not merely scroll past sections.

The user should feel that the page is responding to their movement.

---

# 01 — THE TARGET FEELING

Target:

```text
"How did they even build this?"
```

Then:

```text
"Oh, I understand what is happening."
```

Then:

```text
"This is actually usable."
```

Do NOT target:

```text
"Look, a fade animation."
```

The animation should be impressive because of composition and choreography, not because there are many effects.

---

# 02 — DESIGN REFERENCE FAMILY

The motion/layout language should take inspiration from the type of work found across:

- 21st.dev
- Refero / styles.refero.design
- Impeccable
- Agentation
- Origin Kit
- Particle / Casberry
- Manus
- Lightswind UI
- 60fps.design
- modern Framer / Motion work
- modern GSAP / ScrollTrigger storytelling
- premium interactive product sites
- developer-tool landing pages
- cinematic technical interfaces

These references must NOT be copied.

Extract the principles:

```text
component experimentation
+
art-directed composition
+
strong typography
+
scroll choreography
+
3D depth
+
interactive systems
+
micro-detail
+
high frame-rate motion
```

Lightswind is particularly useful as a component reference because its current library mixes professional UI with animated components, including 3D elements, shader/canvas backgrounds, scroll reveal, scroll carousel, scroll timeline and other motion primitives. It explicitly positions its components as responsive, accessible and production-oriented. 

Impeccable's design workflow is also relevant: establish design context, iterate, critique/audit, then refine. Its current commands include layout, animate, bolder, quieter, critique and audit workflows. 

GSAP ScrollTrigger is a primary reference for advanced scroll choreography because it supports trigger, scrub, pin and snap behavior. 

---

# 03 — MOTION IS PART OF LAYOUT

DO NOT design the layout first and "add animations later."

The layout must be designed around motion.

Wrong workflow:

```text
static page
↓
add Framer Motion
↓
fade everything
```

Correct workflow:

```text
story
↓
visual composition
↓
scroll relationship
↓
spatial model
↓
motion choreography
↓
implementation
```

---

# 04 — THE MOTION HIERARCHY

Use five levels.

## Level 1 — UI motion

Buttons, toggles, menus.

Very fast.

Approx:

```text
120–220ms
```

---

## Level 2 — Component motion

Cards, panels, product screenshots.

Approx:

```text
250–600ms
```

---

## Level 3 — Section motion

Scroll reveals and composition changes.

Approx:

```text
600–1400ms
```

But preferably driven by scroll progress instead of fixed duration.

---

## Level 4 — Cinematic sequence

Pinned scenes, typography transformations, product transitions.

Controlled by:

```text
scroll progress
```

rather than arbitrary timers.

---

## Level 5 — Ambient world

Background particles, technical grid, 3D environment.

These should be extremely slow.

Never compete with the content.

---

# 05 — THE MOST IMPORTANT ANIMATION RULE

If the user scrolls slowly:

the animation must respond slowly.

If the user scrolls quickly:

the animation should progress quickly.

This is the reason scroll-linked motion is preferred for major scenes.

Do not create a long autonomous animation and force the user to wait for it.

---

# 06 — SCROLL-LINKED MOTION

For major storytelling sections, prefer:

```text
scrollY
→ normalized progress 0..1
→ transform state
```

Examples:

```text
0.0 → object enters
0.25 → object settles
0.5 → object transforms
0.75 → next state appears
1.0 → scene exits
```

This creates a direct relationship between user action and visual response.

---

# 07 — STICKY STORYTELLING

THIS IS A PRIMARY ZENUXS PLATFORM PATTERN.

Use when:

```text
text is long
+
visual is small or focused
+
story requires multiple steps
```

Composition:

```text
┌────────────────────────────────────────────┐
│                                            │
│  TEXT / STORY       STICKY VISUAL          │
│                                            │
│  Step 01             ┌──────────────┐      │
│                      │              │      │
│  Step 02             │ PRODUCT UI   │      │
│                      │              │      │
│  Step 03             └──────────────┘      │
│                                            │
│  Step 04                                  │
│                                            │
└────────────────────────────────────────────┘
```

The visual remains pinned.

The text scrolls.

The visual changes state based on the text.

---

# 08 — STICKY STORY SEQUENCE

Example:

```text
STEP 01
Identity request
```

Visual:

```text
Login screen
```

Then:

```text
STEP 02
Authentication
```

Visual morphs into:

```text
OAuth / session
```

Then:

```text
STEP 03
Application
```

Visual morphs into:

```text
authenticated dashboard
```

Then:

```text
STEP 04
Developer
```

Visual expands into:

```text
API / SDK / system
```

The user experiences one continuous object.

DO NOT replace four unrelated images.

---

# 09 — STICKY EXIT

When the text sequence finishes:

```text
sticky visual releases
```

Then the entire scene moves upward.

The next section enters.

This is critical.

Do not leave a sticky element permanently floating over the next section.

---

# 10 — STICKY SECTION ARCHITECTURE

Conceptual structure:

```text
.story-section
    .story-pin
        .story-copy
        .story-visual
```

The section controls:

```text
progress
activeStep
visualState
```

The visual is pinned inside the section.

The section has enough scroll height to complete the narrative.

---

# 11 — TEXT-DRIVEN STORYTELLING

Text itself can control the visual.

Example:

```text
01 AUTHENTICATE
02 VERIFY
03 CREATE SESSION
04 CONNECT
```

As each text block reaches its active zone:

```text
active item
    ↓
visual state changes
```

Inactive text:

```text
low contrast
```

Active text:

```text
full contrast
```

Optional:

```text
small progress indicator
```

---

# 12 — LARGE TEXT MOTION

Large headlines should not always fade.

Use:

- horizontal translation
- letter spacing
- word displacement
- clipping
- mask reveal
- 3D rotation
- perspective
- line separation
- character stagger
- scale
- blur-to-sharp
- opacity

Example:

```text
BUILD
BEYOND
THE TOOL.
```

At scroll start:

```text
BUILD
```

is slightly behind the viewport.

Then:

```text
BEYOND
```

slides through the composition.

Then:

```text
THE TOOL.
```

locks into place.

This should feel like typography physically moving through space.

---

# 13 — DO NOT OVERUSE LETTER-BY-LETTER ANIMATION

Character animation is powerful.

Therefore it becomes annoying very quickly.

Use it for:

- major opening statement
- final statement
- one or two special moments

Do NOT animate every heading character-by-character.

---

# 14 — TYPOGRAPHY FAMILY

Preferred display family:

```text
Space Grotesk
```

Alternative:

```text
Sora
```

Alternative:

```text
Plus Jakarta Sans
```

The visual target is:

```text
wide
low-feeling
geometric
clean
strong horizontal rhythm
```

The display font should feel broad rather than tall and condensed.

Avoid overly narrow condensed fonts for the main Zenuxs headlines.

---

# 15 — UI FONT

Preferred:

```text
Manrope
```

or:

```text
Inter
```

Use for:

- body
- navigation
- controls
- product descriptions
- labels

---

# 16 — TECHNICAL FONT

Preferred:

```text
IBM Plex Mono
```

Alternative:

```text
JetBrains Mono
```

Use for:

```text
metadata
repository names
API paths
technical labels
system states
code
coordinates
```

---

# 17 — FONT RULE

Do NOT use more than:

```text
1 display family
+
1 UI family
+
1 mono family
```

Three families are enough.

---

# 18 — FONT WIDTH MANAGEMENT

If the chosen font does not provide the desired width:

Do NOT immediately use:

```css
font-stretch
```

or aggressive transforms.

Instead control:

```text
font-size
letter-spacing
max-width
line-height
line-break
```

The headline should look intentionally composed.

---

# 19 — LOW-HEIGHT / LONG-WIDTH HEADLINE RULE

For large headlines:

```text
line-height: approximately 0.85–0.98
```

depending on font.

Keep the line box tight.

Do not allow enormous vertical gaps between headline lines.

The result should feel:

```text
wide
dense
editorial
architectural
```

not:

```text
tall
poster-like
inflated
```

---

# 20 — PERSPECTIVE

Use perspective deliberately.

Example:

```css
perspective: 1400px;
```

Then:

```text
rotateX
rotateY
translateZ
```

Use small values.

The goal is depth.

Not a rotating 3D cube.

---

# 21 — 3D PRODUCT UI

A real screenshot can become a 3D object.

Example:

```text
front
   ↓
slight rotateY
   ↓
translateZ
   ↓
scale
```

As the user scrolls:

```text
flat
→
tilted
→
floating
→
front-facing
```

This is much stronger than simply fading the screenshot in.

---

# 22 — PRODUCT SCREEN TRANSFORMATION

Use one product interface through multiple states.

Example:

```text
dashboard
```

becomes:

```text
dashboard
+ panel
```

then:

```text
panel
+ data
```

then:

```text
API
```

then:

```text
system
```

This creates continuity.

---

# 23 — OBJECT CONTINUITY

A visual object should sometimes travel from one section to another.

Example:

```text
small Zenuxs Accounts node
```

at 10% scroll.

Then:

```text
same node
```

becomes the main product UI at 30%.

Then:

```text
same identity line
```

connects to the ecosystem at 70%.

The user subconsciously understands:

> this is the same system.

---

# 24 — SHARED ELEMENT TRANSITIONS

When moving between sections:

Do not destroy and recreate the visual if it can be transformed.

Prefer:

```text
same DOM object
```

or a controlled shared-layout transition.

Use:

```text
layoutId
```

or equivalent architecture where appropriate.

---

# 25 — MORPHING

Aggressive morphing is encouraged.

Examples:

```text
circle
→
product node
→
dashboard
```

or:

```text
code block
→
API request
→
database result
```

or:

```text
small UI panel
→
full interface
```

The transformation must have semantic meaning.

---

# 26 — CLIP-PATH REVEALS

Use clip-path to reveal large product interfaces.

Examples:

```text
inset()
polygon()
```

or mask-based reveal.

A screenshot can emerge from:

```text
thin vertical slice
→
half screen
→
full screen
```

This is preferred over:

```text
opacity: 0 → 1
```

for major moments.

---

# 27 — IMAGE WIPE

Product screenshots can enter through:

```text
horizontal wipe
vertical wipe
diagonal wipe
```

But use one direction per scene.

Do not create random wipes everywhere.

---

# 28 — CAMERA RAIL

For major 3D scenes, think of the page as a camera.

The camera can move:

```text
left
right
forward
backward
up
down
```

The object remains stable.

This creates a more cinematic result than moving every object independently.

---

# 29 — CAMERA RULE

Do not literally rotate the entire page.

Create the illusion of camera movement inside a controlled scene.

The browser scroll remains normal.

---

# 30 — 3D WORLD

Use a true 3D scene only for major moments.

Possible:

```text
React Three Fiber
Three.js
OGL
WebGL
CSS 3D
```

Use the lightest technology capable of producing the required effect.

---

# 31 — WHEN TO USE CSS 3D

Use CSS 3D when:

- a product screenshot is being tilted
- cards need depth
- typography moves in perspective
- simple spatial composition is required

CSS 3D is often enough.

---

# 32 — WHEN TO USE WEBGL

Use WebGL only when the visual genuinely requires:

- shader
- particles
- volumetric-like atmosphere
- procedural world
- true 3D object
- dynamic field

Do not use WebGL for a simple shadow.

---

# 33 — 3D BACKGROUND

The background may contain:

```text
particles
grid
nodes
lines
soft depth
```

But it should never become a game.

---

# 34 — BACKGROUND 3D MOTION

Good:

```text
slow camera drift
```

Good:

```text
nodes respond slightly to scroll
```

Good:

```text
background depth changes as section changes
```

Bad:

```text
constant spinning galaxy
```

Bad:

```text
random particles everywhere
```

---

# 35 — TECHNICAL GRID

A grid can move slightly with scroll.

Example:

```text
grid scale
grid translate
grid opacity
```

The grid should feel like an environment.

---

# 36 — DEPTH STACK

Major scenes can use:

```text
Layer 0
background black

Layer 1
grain

Layer 2
technical grid

Layer 3
3D environment

Layer 4
product UI

Layer 5
headline

Layer 6
metadata

Layer 7
interaction
```

Do not create dozens of z-index layers.

---

# 37 — FOREGROUND / BACKGROUND PARALLAX

Use different scroll multipliers.

Example:

```text
background: 0.15x
middle: 0.5x
product: 0.8x
foreground: 1.0x
```

Do not exaggerate.

Small differences create depth.

---

# 38 — AGGRESSIVE PARALLAX

Aggressive does NOT mean huge movement.

Aggressive means:

> the layers visibly behave differently.

Use:

```text
scale
rotation
perspective
clip
position
opacity
```

together.

But keep the physical movement plausible.

---

# 39 — SCROLL-BOUND HORIZONTAL MOTION

Use vertical scroll to drive horizontal movement when it improves storytelling.

Example:

```text
vertical scroll
        ↓
product lineup moves horizontally
```

This is ideal for:

```text
product ecosystem
repository list
architecture
timeline
```

---

# 40 — HORIZONTAL SCROLL RULE

Do NOT make the entire website horizontal.

Use horizontal motion inside selected scenes.

The browser's vertical scroll remains the primary navigation.

---

# 41 — PINNED HORIZONTAL SCENE

Structure:

```text
vertical page
      ↓
pinned scene
      ↓
horizontal content travels
      ↓
scene ends
      ↓
page continues vertically
```

This creates a cinematic chapter.

---

# 42 — PRODUCT CAROUSEL WITHOUT CAROUSEL FEEL

Instead of:

```text
← card card card →
```

use:

```text
product A
        ↓
product B enters
        ↓
product C replaces
```

The user controls progression through scroll.

---

# 43 — SCROLL PROGRESS

Use progress only when it provides orientation.

Examples:

```text
01 / 09
```

or:

```text
───────●────────
```

or a vertical line.

Do not create a giant progress UI.

---

# 44 — ACTIVE TEXT

During pinned scenes:

inactive:

```text
opacity .35
```

active:

```text
opacity 1
```

supporting details:

```text
opacity .55
```

This creates narrative focus.

---

# 45 — TEXT ENTER / EXIT

Text can:

```text
enter from outside
lock
transform
exit
```

Do not simply:

```text
fade in
fade out
```

for every paragraph.

---

# 46 — TEXT DISPLACEMENT

Large text can move behind product UI.

Example:

```text
                    PRODUCT UI
BUILD
```

Then:

```text
          PRODUCT UI

        BUILD
```

Then:

```text
BUILD        PRODUCT UI
```

This creates spatial storytelling.

---

# 47 — TEXT AS ENVIRONMENT

Large typography can exist as a physical layer.

Example:

```text
OPEN SOURCE
```

behind the product UI.

The UI can move in front of it.

---

# 48 — TEXT MASK

Use the product interface to mask the headline.

Example:

```text
BUILD
```

partially hidden behind:

```text
product screen
```

This makes the product and message feel connected.

---

# 49 — PRODUCT UI PINNING

When a screenshot is the most important object:

keep it fixed while the explanation changes.

Example:

```text
LEFT:
What it solves
How it works
Why it exists
What developers can do

RIGHT:
same product UI
```

The UI changes state.

---

# 50 — STICKY POSITIONING

Prefer CSS:

```css
position: sticky;
top: ...
```

when possible.

Use JavaScript scroll measurement only when necessary.

This reduces complexity.

---

# 51 — STICKY TOP OFFSET

Account for:

```text
navigation
safe area
visual breathing room
```

Do not pin an object underneath the navbar.

---

# 52 — STICKY HEIGHT

The sticky visual must have enough room.

Never:

```text
height: 100vh
```

without accounting for navigation and mobile browser chrome.

Prefer:

```text
100svh
100dvh
```

where appropriate.

---

# 53 — MOBILE STICKY

Sticky storytelling can be powerful on mobile.

But reduce complexity.

Possible:

```text
visual
↓
text step
↓
visual state
```

instead of desktop split-screen.

---

# 54 — SCROLL VELOCITY

Use velocity carefully.

Velocity can influence:

- blur
- background movement
- image trailing
- intensity
- particle response

But never make content disappear because the user scrolls quickly.

---

# 55 — VELOCITY-BASED MOTION

Possible:

```text
slow scroll
→
calm movement

fast scroll
→
slightly stronger movement
```

After scrolling stops:

```text
settle
```

Do not create motion that keeps accelerating.

---

# 56 — SETTLE PHYSICS

Use spring-like settling for UI objects.

The target is:

```text
fast response
+
small physical settle
```

Not:

```text
bouncy toy
```

---

# 57 — EASING

Do not use one easing function everywhere.

Suggested mental model:

```text
micro UI
→
ease-out / spring

section reveal
→
soft ease

scroll-linked
→
direct mapping

cinematic
→
custom curve

ambient
→
linear / slow
```

---

# 58 — SPRINGS

Springs are useful for:

- hover
- magnetic buttons
- interactive panels
- cursor-following objects
- layout changes

Do not use spring physics for everything.

---

# 59 — MAGNETIC INTERACTIONS

Allowed for:

- major CTA
- product nodes
- GitHub button

The interaction should be subtle.

Example:

```text
cursor approaches
→
button shifts 3–8px
```

Not:

```text
button flies across screen
```

---

# 60 — CURSOR FOLLOW

Optional.

Use only on desktop.

Cursor-following objects should be:

- low opacity
- small
- non-blocking
- subtle

Never interfere with clicks.

---

# 61 — HOVER DEPTH

A product UI can respond to pointer position:

```text
rotateX
rotateY
translateZ
```

Keep rotation small.

The user should feel:

> depth

not:

> card is spinning.

---

# 62 — TILT

Recommended approximate range:

```text
±2° to ±6°
```

depending on object size.

Do not exceed this casually.

---

# 63 — PRODUCT CARD TILT

Do NOT apply tilt to every card.

Use tilt only for:

- featured product
- hero object
- special interactive component

---

# 64 — 3D TEXT

3D text is allowed for:

- one major headline
- product name
- ecosystem title

Do not turn all typography into extruded 3D.

---

# 65 — ROLLING TEXT

Cylindrical/rolling text can be used once as a signature moment.

Example:

```text
ZENUXS
```

rolling through a 3D cylinder.

Then stop.

Do not repeat the gimmick.

---

# 66 — MASKED PRODUCT REVEAL

A product UI can begin as:

```text
thin line
```

and expand into:

```text
full interface
```

while the headline moves away.

This is preferred for major product chapters.

---

# 67 — IMAGE SCALE STORY

Example:

```text
0% scroll
scale .75

30%
scale .92

60%
scale 1.0

80%
scale 1.05

100%
exit
```

Do not blindly use these values.

Tune per composition.

---

# 68 — DEPTH STORY

An object can move:

```text
far
→
near
→
inside scene
→
far
```

This can simulate camera travel.

---

# 69 — SECTION EXIT

Do not abruptly switch from one scene to another.

Use:

```text
object exits
+
background shifts
+
next section enters
```

The user should feel continuity.

---

# 70 — BACKGROUND TRANSITION

Background can change subtly:

```text
black
→
dark gray
→
black
```

or:

```text
grid
→
no grid
```

or:

```text
sparse
→
dense
```

This can mark narrative changes.

---

# 71 — COLOR TRANSITION

The Zenuxs platform remains predominantly monochrome.

A product-specific accent may appear briefly.

It should behave like:

```text
signal
```

not:

```text
theme
```

Do not turn each product into a different colorful page.

---

# 72 — 3D PRODUCT ECOSYSTEM

For the ecosystem chapter:

Imagine a large 3D field.

Center:

```text
ZENUXS
```

Nodes:

```text
Accounts
AI
Code
Easy-Mongoo
HMAX
Hosting
DNS
Plugins
GitHub
Discord
```

Nodes are positioned in 3D space.

Scroll:

```text
camera moves
```

rather than every node independently flying around.

---

# 73 — ECOSYSTEM CAMERA SEQUENCE

Example:

```text
scene start
→
wide ecosystem
→
camera approaches Accounts
→
Accounts becomes product UI
→
camera pulls back
→
moves toward Easy-Mongoo
→
returns to ecosystem
→
all nodes connect
```

This is the type of animation that should feel difficult to explain.

That is intentional.

---

# 74 — DON'T MAKE THE 3D SCENE A GAME

No:

- health bars
- floating coins
- neon cubes
- game-like UI
- random spinning objects

This is a developer ecosystem.

The 3D language should feel technical and editorial.

---

# 75 — BACKGROUND PARTICLES

Use very low particle counts.

Prefer:

```text
hundreds
```

over:

```text
thousands
```

unless the implementation is genuinely optimized.

Particles should communicate atmosphere.

Not density.

---

# 76 — PARTICLE BEHAVIOR

Particles can:

- drift
- react slightly to pointer
- align to grid
- form nodes
- connect during ecosystem scenes

Avoid constant chaotic movement.

---

# 77 — SHADER RULE

A shader is justified when:

```text
the visual cannot reasonably be achieved
with CSS/DOM/canvas.
```

Do not add shaders because:

> WebGL looks premium.

---

# 78 — CANVAS RULE

Canvas/WebGL must have:

- resize handling
- DPR control
- visibility pause
- cleanup
- mobile quality reduction
- reduced-motion fallback

---

# 79 — PERFORMANCE BUDGET

Target:

```text
60fps
```

under normal desktop conditions.

For mobile:

prioritize stable responsiveness over visual complexity.

A 45fps "amazing" effect is worse than a clean 60fps effect.

---

# 80 — MAIN THREAD

Avoid unnecessary work during scroll.

Do not run expensive React state updates every frame.

Bad:

```text
scroll event
→ setState()
→ React render
→ every frame
```

Prefer:

```text
requestAnimationFrame
+
MotionValue
+
GSAP ticker
+
CSS transforms
```

where appropriate.

---

# 81 — DOM ANIMATION

Prefer animating:

```text
transform
opacity
filter
clip-path
```

where performance allows.

Avoid repeatedly animating:

```text
width
height
top
left
margin
padding
```

for cinematic motion.

---

# 82 — LAYOUT THRASHING

Do not repeatedly call:

```text
getBoundingClientRect()
```

inside uncontrolled scroll loops.

Measure once.

Cache.

Update only when required.

---

# 83 — IMAGE PERFORMANCE

Use:

```text
AVIF/WebP
responsive srcset
lazy loading
priority loading for hero
```

Do not lazy-load the main visual if it is required immediately.

---

# 84 — 3D QUALITY LEVELS

Create quality tiers:

```text
HIGH
MEDIUM
LOW
```

Desktop:

more depth.

Mobile:

simpler scene.

Low-power device:

static fallback.

---

# 85 — VISIBILITY

When a scene is far outside the viewport:

pause expensive animation.

Use:

```text
IntersectionObserver
```

or equivalent.

---

# 86 — REDUCED MOTION

When:

```text
prefers-reduced-motion: reduce
```

disable:

- aggressive camera movement
- parallax
- continuous particles
- large transforms
- scroll hijacking

Keep:

- content
- hierarchy
- simple reveals
- state transitions

---

# 87 — NO SCROLL HIJACKING

Never replace browser scrolling with a custom system that makes the page feel trapped.

Smooth scrolling is allowed.

Scroll hijacking is not.

---

# 88 — SMOOTH SCROLL

A smooth-scroll layer such as Lenis can be used if it does not break:

- accessibility
- anchors
- browser behavior
- touch
- reduced motion
- focus
- performance

Do not use smooth scrolling merely because it is fashionable.

---

# 89 — SCROLL ENGINE CHOICE

Recommended architecture:

### Framer Motion / Motion

Use for:

- UI transitions
- layout animations
- component interactions
- simple scroll-linked transforms

### GSAP + ScrollTrigger

Use for:

- pinned scenes
- long cinematic sequences
- scrubbed timelines
- complex scroll choreography
- horizontal scroll scenes

### React Three Fiber / Three.js / OGL

Use for:

- true 3D
- WebGL
- shaders
- spatial ecosystems
- procedural backgrounds

Do not make all three mandatory.

Use the minimum necessary.

---

# 90 — MOTION OWNERSHIP

Every animation must have one owner.

Example:

```text
Scene owns camera.
Product owns hover.
Scroll system owns progress.
Component owns micro-interaction.
```

Do not have:

```text
Framer Motion
+
GSAP
+
CSS animation
+
setInterval
```

all controlling the same property.

---

# 91 — PROPERTY OWNERSHIP

Never have multiple systems fight over:

```text
transform
opacity
position
```

at the same time.

Example failure:

```text
GSAP controls transform
+
Framer controls transform
+
CSS hover controls transform
```

This causes jitter and unpredictable state.

---

# 92 — MOTION STATE MACHINE

Complex scenes should have explicit states.

Example:

```text
INTRO
ACTIVE_01
ACTIVE_02
ACTIVE_03
TRANSITION
EXIT
```

Do not create hundreds of boolean states.

---

# 93 — SCROLL PROGRESS MAPPING

Use normalized progress.

Example:

```text
0.00–0.15
entry

0.15–0.45
state A

0.45–0.70
state B

0.70–0.90
state C

0.90–1.00
exit
```

This makes timelines understandable.

---

# 94 — SCROLL SNAP

Use snap only when useful.

Example:

```text
ecosystem nodes
```

can snap gently to a meaningful state.

Do NOT snap every scroll section.

---

# 95 — SCROLL VELOCITY + SNAP

If using velocity:

fast scrolling should not produce aggressive snapping.

The user must remain in control.

---

# 96 — SECTION HEIGHT CALCULATION

Do not randomly choose:

```text
300vh
```

because a section has an animation.

Calculate required scroll distance from:

```text
number of narrative states
+
visual transformation complexity
+
reading time
```

---

# 97 — READING TIME

Never make the user scroll through text faster than they can read.

If the copy is:

```text
4 lines
```

the sticky state must remain active long enough.

---

# 98 — VISUAL READING RHYTHM

During a sticky scene:

```text
visual changes
→
user reads
→
visual settles
→
next text activates
```

Do not make the visual change constantly.

---

# 99 — SETTLE ZONES

Major animation should contain small moments of stillness.

Example:

```text
MOVE
→
SETTLE
→
READ
→
MOVE
→
SETTLE
```

Without settle zones the page feels chaotic.

---

# 100 — AGGRESSIVE DOES NOT MEAN FAST

This is critical.

Aggressive animation can be:

```text
large
spatial
unexpected
structural
```

without being:

```text
fast
jerky
bouncy
```

---

# 101 — UNEXPECTED TRANSITIONS

Use occasionally:

```text
image becomes background
```

```text
text becomes a mask
```

```text
small node becomes full interface
```

```text
horizontal scene becomes vertical scene
```

```text
product screen rotates into architecture
```

These are the "hard to explain" moments.

---

# 102 — TRANSFORMATION EXAMPLE

Zenuxs Accounts:

```text
small authentication node
        ↓
node expands
        ↓
login interface
        ↓
interface tilts
        ↓
camera moves through interface
        ↓
dashboard appears
        ↓
dashboard becomes ecosystem node
```

This is one continuous visual story.

---

# 103 — EASY-MONGOO EXAMPLE

Start:

```text
MongoDB document
```

Then:

```text
document expands
```

Then:

```text
collection appears
```

Then:

```text
query crosses the scene
```

Then:

```text
result appears in Easy-Mongoo UI
```

Then:

```text
camera pulls back
```

Then:

```text
Easy-Mongoo becomes one ecosystem node
```

---

# 104 — SECURITY EXAMPLE

Start:

```text
raw request
```

Then:

```text
verification layer
```

Then:

```text
session
```

Then:

```text
security state
```

Then:

```text
system protected
```

Avoid padlock graphics.

Show the system behavior.

---

# 105 — INFRASTRUCTURE EXAMPLE

Start:

```text
localhost
```

Then:

```text
build
```

Then:

```text
host
```

Then:

```text
DNS
```

Then:

```text
public endpoint
```

Then:

```text
user
```

This is much more meaningful than a generic server illustration.

---

# 106 — OPEN SOURCE EXAMPLE

Start:

```text
PRODUCT UI
```

Then zoom into:

```text
source
```

Then:

```text
repository
```

Then:

```text
file tree
```

Then:

```text
code
```

Then zoom back out:

```text
PRODUCT
```

Message:

> The product and its source are connected.

---

# 107 — FINAL SCENE

The final scene should reuse the opening visual language.

At the start:

```text
nodes disconnected
```

At the end:

```text
nodes connected
```

Then:

```text
WHAT ARE YOU BUILDING?
```

appears.

The visual should settle.

Do not add a final fireworks animation.

---

# 108 — ANIMATION COMPONENT LIBRARY

Create reusable primitives.

Suggested:

```text
<Reveal>
<ScrollProgress>
<ScrollScene>
<StickyStory>
<StickyVisual>
<StoryStep>
<ScrollMorph>
<ParallaxLayer>
<PerspectiveFrame>
<MagneticButton>
<TextMask>
<TextSplit>
<WordReveal>
<ClipReveal>
<SharedVisual>
<CameraScene>
<DepthField>
<EcosystemGraph>
<SceneTransition>
<MotionImage>
<MotionPanel>
```

These should be generic enough to reuse.

---

# 109 — DO NOT CREATE ONE-OFF CHAOS

If the same behavior appears twice:

extract it.

Example:

```text
sticky product storytelling
```

becomes:

```text
<StickyStory>
```

not two unrelated implementations.

---

# 110 — MOTION TOKENS

Create shared tokens.

Example:

```text
--motion-fast
--motion-base
--motion-slow
--motion-cinematic
```

And:

```text
--ease-out
--ease-smooth
--ease-cinematic
```

And:

```text
--perspective-standard
--perspective-deep
```

---

# 111 — MOTION NAMING

Names should describe intent.

Good:

```text
enterProduct
revealSource
transitionToNode
pinStory
cameraApproach
```

Bad:

```text
animation1
anim2
weirdThing
testMove
```

---

# 112 — DEBUG MODE

Build a development-only motion debug mode.

It should expose:

```text
current scene
scroll progress
active step
fps
motion state
quality tier
```

Optional visual:

```text
scene boundaries
sticky boundaries
```

This makes complex animation maintainable.

---

# 113 — FPS MONITOR

During development, measure frame performance.

Watch for:

```text
long tasks
layout shifts
dropped frames
```

Do not rely only on subjective smoothness.

---

# 114 — NO MOTION BUGS

Test:

```text
scroll down
scroll up
fast scroll
slow scroll
jump to anchor
reload mid-page
resize
mobile rotation
tab switch
return to page
```

The animation state must recover.

---

# 115 — REVERSE SCROLL

Every major scroll scene must work backward.

If:

```text
A → B → C
```

then:

```text
C → B → A
```

must also work.

No broken state.

---

# 116 — DIRECT URL / ANCHOR

If the user enters the page at a later section:

the visual state should initialize correctly.

Do not assume the user started at scroll position 0.

---

# 117 — RESIZE

If viewport changes:

recalculate:

```text
scene dimensions
sticky bounds
camera
image scale
text wrapping
```

Do not reload the page.

---

# 118 — MOBILE QUALITY

Mobile should not receive a completely dead static version.

It should retain:

```text
sticky storytelling
depth
transitions
product reveals
```

but with reduced complexity.

---

# 119 — MOBILE 3D

Use:

```text
CSS 3D
```

or simplified canvas.

Avoid heavy WebGL scenes on low-power mobile devices.

---

# 120 — TOUCH

Never depend on hover.

Every hover effect needs a touch-safe equivalent.

---

# 121 — POINTER EVENTS

Decorative layers:

```css
pointer-events: none;
```

unless interactive.

Do not let a 3D background block buttons.

---

# 122 — Z-INDEX

Establish a strict layer system.

Example:

```text
0 background
10 atmosphere
20 scene
30 product
40 text
50 controls
60 navigation
100 modal
```

Do not use:

```text
z-index: 999999
```

everywhere.

---

# 123 — SCENE BOUNDARIES

Each cinematic scene must have:

```text
entry
active range
exit
```

Do not allow it to bleed unpredictably into adjacent scenes.

---

# 124 — NO GLOBAL SCROLL ANIMATION

Avoid one giant global timeline controlling the entire page.

Prefer:

```text
page
 ├── scene 01
 ├── scene 02
 ├── scene 03
 ├── scene 04
 ...
```

Each scene owns its own behavior.

---

# 125 — SCENE ISOLATION

A scene should be able to:

```text
mount
measure
animate
pause
unmount
cleanup
```

without affecting another scene.

---

# 126 — LOADING

3D scenes should load progressively.

First:

```text
text
```

Then:

```text
static visual
```

Then:

```text
enhanced motion
```

Then:

```text
WebGL
```

Do not block the page waiting for a 3D scene.

---

# 127 — FALLBACK

If WebGL fails:

show:

```text
static product visual
+
CSS motion
```

The story must remain understandable.

---

# 128 — NETWORK FAILURE

If a live asset fails:

do not leave:

```text
black rectangle
```

Show the fallback visual.

---

# 129 — ACCESSIBILITY

Animations must never communicate information only through motion.

If:

```text
step 03
```

is active visually:

also reflect state semantically.

---

# 130 — FOCUS

Keyboard focus must remain visible.

Do not hide focus rings simply because they clash with the design.

Create a Zenuxs-style focus treatment instead.

---

# 131 — REDUCED MOTION STORY

With reduced motion:

```text
scene 01
static composition

step 01
visible

step 02
visible

step 03
visible
```

The user can still understand the sequence.

---

# 132 — MOTION AUDIT

For every animated element ask:

1. Why does it move?
2. What does the movement communicate?
3. Who controls it?
4. What happens when scrolling backward?
5. What happens on mobile?
6. What happens with reduced motion?
7. What happens when the page loads at this scroll position?
8. What happens if the user scrolls extremely fast?
9. Does it maintain performance?
10. Can the effect be removed without hurting comprehension?

If the answer to #2 is "nothing":

remove the animation.

---

# 133 — LAYOUT AUDIT

For every scene ask:

```text
Where is the focal point?
Where is the user reading?
Where is the visual anchored?
What moves?
What stays still?
What changes state?
What exits?
What enters?
```

If everything moves:

the composition has no anchor.

---

# 134 — ANCHOR RULE

Every scene needs at least one stable anchor.

Possible:

```text
headline
product UI
grid
navigation
central node
```

The rest can move around it.

---

# 135 — MOTION CONTRAST

Good motion uses contrast:

```text
moving background
+
stable text
```

or:

```text
stable UI
+
moving typography
```

or:

```text
moving camera
+
stable object
```

Motion contrast creates clarity.

---

# 136 — DO NOT MOVE EVERYTHING

If everything moves simultaneously:

nothing feels important.

At any moment:

```text
1 primary motion
+
1 secondary motion
+
ambient background
```

is usually enough.

---

# 137 — TEMPORAL HIERARCHY

Animation should have hierarchy just like typography.

Primary:

```text
major product transformation
```

Secondary:

```text
text
```

Ambient:

```text
background
```

Never let ambient motion become primary.

---

# 138 — MOTION DENSITY

The page should have peaks and valleys.

Example:

```text
calm
↓
movement
↓
major transformation
↓
stillness
↓
movement
↓
major transformation
```

This creates cinematic rhythm.

---

# 139 — DON'T KEEP THE USER IN A CONSTANT "WOW"

Constant spectacle becomes normal.

Use quiet scenes.

Then make the next major transition matter.

---

# 140 — AGGRESSIVE LAYOUT PATTERNS

Use these patterns intentionally:

### Pattern A
Sticky visual + scrolling text.

### Pattern B
Pinned horizontal ecosystem.

### Pattern C
Camera travels through product UI.

### Pattern D
Headline becomes a mask.

### Pattern E
Product UI becomes background.

### Pattern F
Small node becomes full-screen interface.

### Pattern G
Interface collapses into a node.

### Pattern H
Code becomes data visualization.

### Pattern I
Image rotates into architecture.

### Pattern J
Two sections share one object.

### Pattern K
Text exits one edge while product enters another.

### Pattern L
Scene compresses vertically into the next section.

### Pattern M
Background grid becomes foreground product grid.

### Pattern N
One product screenshot splits into multiple semantic panels.

### Pattern O
A vertical page creates a temporary horizontal world.

These are the preferred "hard to explain" compositions.

---

# 141 — PATTERN A: STICKY SPLIT

Desktop:

```text
┌─────────────────────────────────────────────┐
│                                             │
│  STEP TEXT             STICKY PRODUCT       │
│                                             │
│  step 01               ┌──────────────┐     │
│                        │              │     │
│  step 02               │    UI        │     │
│                        │              │     │
│  step 03               └──────────────┘     │
│                                             │
└─────────────────────────────────────────────┘
```

Use for Accounts, Easy-Mongoo, HMAX, infrastructure.

---

# 142 — PATTERN B: PINNED HORIZONTAL ECOSYSTEM

```text
vertical scroll
      ↓
┌───────────────────────────────┐
│        pinned scene           │
│                               │
│  [A] → [B] → [C] → [D] → [E] │
│                               │
└───────────────────────────────┘
      ↓
vertical scroll resumes
```

---

# 143 — PATTERN C: CAMERA APPROACH

```text
wide environment
       ↓
camera moves forward
       ↓
product becomes readable
       ↓
camera passes through
       ↓
internal interface
```

Use sparingly.

---

# 144 — PATTERN D: HEADLINE MASK

```text
BIG TEXT
████████████████

      PRODUCT UI
      covers part

text becomes a physical layer.
```

---

# 145 — PATTERN E: PRODUCT BECOMES BACKGROUND

A product UI starts foreground.

As the next section appears:

```text
scale up
blur slightly
move behind
```

Then new foreground content appears.

This creates continuity.

---

# 146 — PATTERN F: NODE → PRODUCT

```text
small node
    ↓
scale
    ↓
expand
    ↓
product interface
```

This is ideal for ecosystem → product transitions.

---

# 147 — PATTERN G: PRODUCT → NODE

Reverse:

```text
product interface
    ↓
collapse
    ↓
simplify
    ↓
node
```

This is ideal for returning to ecosystem.

---

# 148 — PATTERN H: CODE → SYSTEM

```text
code
↓
request
↓
data
↓
visual system
```

Use for developer tooling.

---

# 149 — PATTERN I: IMAGE → ARCHITECTURE

A screenshot can rotate/translate and become one panel in an architecture diagram.

---

# 150 — PATTERN J: SHARED OBJECT

The same visual object appears across two chapters.

Do not duplicate it visually.

Make the transition feel continuous.

---

# 151 — PATTERN K: CROSS-SCREEN TRANSITION

An object exits:

```text
right
```

while the next object enters:

```text
left
```

They cross briefly.

This creates directional storytelling.

---

# 152 — PATTERN L: COMPRESSION

A large scene:

```text
100vh
```

compresses:

```text
100vh
→
60vh
→
20vh
```

and becomes the header/visual of the next chapter.

---

# 153 — PATTERN M: GRID TRANSFORMATION

Background grid:

```text
technical grid
```

becomes:

```text
product cards
```

or:

```text
repository grid
```

This is a powerful transition.

---

# 154 — PATTERN N: PANEL SPLIT

One dashboard:

```text
FULL UI
```

splits into:

```text
AUTH PANEL
API PANEL
SESSION PANEL
```

Each panel becomes part of the story.

---

# 155 — PATTERN O: TEMPORARY HORIZONTAL WORLD

Vertical page:

```text
scroll ↓
```

enters:

```text
horizontal world →
```

then exits back to:

```text
vertical ↓
```

Use only for strong narrative sections.

---

# 156 — MOTION + CONTENT RULE

Never animate an object before its meaning is understood.

Reveal:

```text
label
```

then:

```text
object
```

then:

```text
transformation
```

unless the mystery is intentionally part of the scene.

---

# 157 — MYSTERY SCENES

One or two scenes may deliberately begin abstractly.

Example:

```text
small glowing line
```

User scrolls.

It becomes:

```text
authentication flow
```

This is a good use of mystery.

---

# 158 — VISUAL SURPRISE

A visual surprise should reveal meaning.

Not merely:

```text
random 3D object appears.
```

---

# 159 — 3D OBJECT RULE

Every 3D object must answer:

```text
What does this represent?
```

Possible:

```text
node
database
interface
connection
source
system
```

If the answer is "decoration":

remove it.

---

# 160 — BACKGROUND WORLD RULE

The background world should react to the current chapter.

Example:

```text
Accounts chapter
→ identity nodes

Database chapter
→ data grid

Security chapter
→ verification field

Infrastructure chapter
→ network field

Open source chapter
→ source graph
```

This is better than one generic animated background throughout the site.

---

# 161 — SCENE THEMING

Keep colors consistent.

Change:

```text
density
geometry
motion
lighting
```

rather than changing the entire palette.

---

# 162 — PRODUCT-SPECIFIC MOTION

Each product can have a motion metaphor.

### Accounts

```text
identity
verification
connection
```

### AI / Code

```text
reasoning
execution
code transformation
```

### Easy-Mongoo

```text
query
document
collection
```

### HMAX

```text
verification
protection
trust
```

### Hosting / DNS

```text
route
resolve
connect
```

### Plugins

```text
extension
server
integration
```

Do not invent technical behavior that the actual product does not support.

These are visual metaphors.

---

# 163 — MOTION METAPHORS MUST NOT LIE

If a product does not technically perform:

```text
real-time syncing
```

do not animate it as if it does.

Visual storytelling must remain honest.

---

# 164 — COMPONENT SOURCES

Use modern component references as inspiration.

Lightswind currently exposes 3D carousels, hover galleries, scroll triggers, scroll reveals, scroll timelines, shaders and other animated components. 

Use these as primitives or inspiration, not as a reason to fill the site with effects.

---

# 165 — DESIGN AUDIT LOOP

After each major scene:

```text
IMPLEMENT
↓
RUN
↓
SCROLL SLOWLY
↓
SCROLL FAST
↓
SCROLL BACK
↓
RESIZE
↓
MOBILE
↓
REDUCED MOTION
↓
FPS CHECK
↓
VISUAL CRITIQUE
↓
REFINE
```

This loop is mandatory.

---

# 166 — AGENTATION / VISUAL REVIEW MINDSET

Treat visual review as a first-class development step.

Do not say:

> "It works."

Ask:

```text
Is the focal point correct?
Is the object anchored?
Does the transition communicate meaning?
Is the scroll distance justified?
Does the visual get stuck?
Does anything overlap accidentally?
Does the next scene enter naturally?
```

---

# 167 — AUTOMATED CHECKS

Build development checks where practical:

```text
no horizontal overflow
no sticky element escaping scene
no missing image
no animation controller conflict
no excessive DOM nodes
no WebGL context leak
```

---

# 168 — SCROLL BUGS TO PREVENT

Watch for:

- sticky element covering next section
- scene height too short
- scene height too long
- reverse scroll broken
- image flickering
- transform origin wrong
- mobile browser chrome changing viewport
- layout shift during font load
- image dimensions missing
- 3D canvas resizing incorrectly
- scroll-trigger firing twice
- duplicate listeners
- stale animation contexts

---

# 169 — FONT LOADING

Font loading must not cause headline layout jumps.

Use:

```text
font-display
preload where appropriate
fallback metrics
```

Measure final layout after fonts are available if animation depends on text geometry.

---

# 170 — TEXT MEASUREMENT

If animation depends on:

```text
line width
character position
headline height
```

do not assume fixed dimensions.

Measure responsively.

---

# 171 — ANIMATION CLEANUP

Every scene must clean up:

```text
listeners
timelines
RAF loops
observers
WebGL resources
```

when unmounted.

---

# 172 — ROUTE CHANGE

When navigating away:

destroy:

```text
ScrollTrigger
timelines
canvas
RAF
listeners
```

No ghost animation.

---

# 173 — DEVELOPMENT MODE

During development, expose:

```text
MOTION_DEBUG=true
```

Possible overlays:

```text
FPS
SCENE
PROGRESS
ACTIVE STEP
GPU MODE
REDUCED MOTION
```

Remove debug UI from production.

---

# 174 — FINAL MOTION QUALITY BAR

The user should be able to:

```text
scroll slowly
```

and discover details.

They should be able to:

```text
scroll normally
```

and understand the story.

They should be able to:

```text
scroll quickly
```

without the page breaking.

They should be able to:

```text
scroll backward
```

without seeing broken states.

---

# 175 — FINAL PERFORMANCE QUALITY BAR

Target:

```text
60fps where practical
```

But prioritize:

```text
interaction responsiveness
```

over visual complexity.

No animation should make buttons, text selection, scrolling or navigation feel delayed.

---

# 176 — FINAL DESIGN QUALITY BAR

The site should feel:

```text
cinematic
spatial
technical
alive
precise
unexpected
controlled
premium
```

Not:

```text
bouncy
random
over-animated
template-like
AI-generated
```

---

# 177 — FINAL ANTI-GENERIC RULE

If an animation can be described as:

> "The card fades in when you scroll to it."

that is NOT enough for a major section.

Ask:

> What spatial relationship can change instead?

Possibilities:

```text
camera
perspective
scale
mask
position
depth
text
product state
background
```

---

# 178 — FINAL ANTI-PERFORMANCE RULE

If the effect looks impressive but causes:

```text
jank
input lag
long tasks
mobile overheating
```

remove it or downgrade it.

Performance is part of premium design.

---

# 179 — FINAL ANTI-3D RULE

If 3D does not improve storytelling:

remove it.

3D is not a badge of quality.

Good composition is.

---

# 180 — FINAL ANTI-MOTION RULE

If everything is animated:

nothing is important.

Create stillness.

Then movement.

Then stillness.

That contrast is what makes aggressive motion feel expensive.

---

# 181 — MASTER SCENE RECIPE

For a major ZenuxsPlatform scene:

```text
1. Establish environment
2. Introduce headline
3. Introduce visual object
4. Pin the object if needed
5. Scroll activates story
6. Text steps change
7. Visual transforms
8. Camera/depth shifts
9. Scene settles
10. Object transitions toward next scene
11. Sticky releases
12. Next chapter enters
```

---

# 182 — MASTER IMPLEMENTATION RECIPE

Recommended React architecture:

```text
App
└── Home
    ├── Navigation
    ├── Scene
    │   ├── SceneIntro
    │   └── MotionScene
    ├── StickyStory
    ├── ProductScene
    ├── EcosystemScene
    ├── OpenSourceScene
    └── FinalScene
```

Motion primitives:

```text
motion/
  ScrollScene.tsx
  StickyStory.tsx
  ParallaxLayer.tsx
  PerspectiveFrame.tsx
  TextReveal.tsx
  TextMask.tsx
  MotionImage.tsx
  SceneTransition.tsx
  Magnetic.tsx
  CameraScene.tsx
```

---

# 183 — LIBRARY RESPONSIBILITY

Do not create a dependency soup.

Possible stack:

```text
React + TypeScript
+
Motion / Framer Motion
+
GSAP + ScrollTrigger
+
optional Lenis
+
optional React Three Fiber / Three.js
```

But:

> A library is not a feature.

Install only what a scene actually needs.

---

# 184 — MOTION LIBRARY SPLIT

Use Motion/Framer for:

```text
layout
micro interactions
component transitions
simple scroll progress
```

Use GSAP/ScrollTrigger for:

```text
pin
scrub
long timelines
horizontal scenes
complex sequencing
```

Use R3F/Three/OGL for:

```text
true 3D
WebGL
shader
camera
spatial environment
```

---

# 185 — DO NOT MIX LIBRARIES WITHOUT REASON

Bad:

```text
Framer controls opacity
GSAP controls opacity
CSS controls opacity
```

Good:

```text
Framer → component state
GSAP → scene timeline
R3F → 3D scene
CSS → base styling
```

Clear ownership.

---

# 186 — FINAL AGENT PROMPT

When implementing ZenuxsPlatform motion, behave like a senior motion designer + creative developer + performance engineer.

Do not add conventional animations simply because the page needs motion.

Design the animation and layout together.

Use:

- sticky storytelling
- scroll-linked transformations
- pinned scenes
- horizontal sub-scenes
- perspective
- 3D product UI
- camera-like movement
- object continuity
- morphing
- masks
- clipping
- typography displacement
- shared visual transitions
- subtle ambient worlds
- responsive motion
- reduced-motion fallbacks

Create a small number of extremely strong scenes rather than hundreds of weak effects.

The goal is not:

> "animated website."

The goal is:

> **"a website whose layout itself is animated."**

---

# 187 — ABSOLUTE STOP CONDITIONS

STOP and redesign if:

- every section uses fade-in
- every card moves upward
- every image scales from 0.9 to 1
- every heading is character-staggered
- every button has the same hover
- every section is centered
- sticky scenes are not used where they clearly improve storytelling
- product screenshots remain static when they could meaningfully transform
- 3D objects are decorative rather than semantic
- scrolling feels hijacked
- fast scrolling breaks state
- reverse scrolling breaks state
- mobile becomes static
- reduced motion removes the story
- FPS becomes unstable
- animation controllers fight each other
- the page feels like a template with motion sprinkled on top

---

# 188 — THE FINAL STANDARD

The implementation should make a designer say:

> "This is a motion system."

Not:

> "This website has animations."

And make a developer say:

> "I can understand why every animation exists."

Not:

> "Where did this random transform come from?"

And make a user feel:

> "The website is moving because I am exploring it."

Not:

> "The website is moving because the designer wanted animation."

---

# 189 — ONE-LINE COMMAND

> **Do not animate the website; animate the relationship between the user, the story, the typography, the product interface, the camera, and the space.**
