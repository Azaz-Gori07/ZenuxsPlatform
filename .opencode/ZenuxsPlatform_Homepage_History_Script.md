# ZenuxsPlatform — Home Page Product History & Story Script

## Purpose

This file is the **actual homepage content/story script** for ZenuxsPlatform.

It is intentionally separate from:

- `PRD.md` → what the platform does
- `TRD.md` → how it is technically built
- `style.md` → visual design language

This document answers:

> **What should the homepage actually SAY, SHOW, and REVEAL?**

The homepage must feel like a journey through a real technology ecosystem.

It must NOT feel like a hero section followed by marketing sections.

---

# 01 — IMPORTANT: THE HOMEPAGE IS A STORY

The homepage should be substantially longer than a normal SaaS landing page.

Target:

**12–16 major viewport chapters**, with most major chapters occupying approximately one viewport of visual composition.

Use the viewport as a storytelling canvas.

A section may be approximately `100vh`, but do not force every section to exactly `100vh`.

The goal is:

> **one strong idea + one strong visual composition per viewport.**

The homepage should feel like the visitor is progressively discovering Zenuxs.

Narrative:

```text
What is Zenuxs?
        ↓
Why does it exist?
        ↓
What has been built?
        ↓
What problems do the products solve?
        ↓
How do the products connect?
        ↓
Why is this ecosystem different?
        ↓
Can I use it?
        ↓
Can I inspect it?
        ↓
Can I contribute?
        ↓
Where do I go next?
```

---

# 02 — SOURCE OF TRUTH

The current public Zenuxs ecosystem describes Zenuxs as a developer ecosystem focused on authentication platforms, infrastructure tools, open-source software, developer utilities and plugins. The public platform currently highlights products/projects including Zenuxs Accounts, Easy Mongo, HMAX, Zenuxs CLI and AdvancedAuth. citeturn0search2

The current Zenuxs Accounts site positions Accounts around authentication, developer APIs, account management, configuration and community access. citeturn0search3turn0search1

The current Plugins site presents products including AdvancedAuth, zxSrv, Orbs and Build FFA, alongside plugin support and community functionality. citeturn0search0

AdvancedAuth is publicly described with a web dashboard, REST API, email OTP password reset, API key permissions, IP login history, active session management, user management and security controls. citeturn0search6

**Important:**

Do not turn every claim found on a current public page into a permanent marketing claim.

If a capability, metric, SLA, customer count, technical specification or product feature cannot be verified from the current product/repository, do not invent it.

---

# 03 — THE HISTORY SHOULD FEEL REAL

Do NOT write a fake corporate history such as:

> "Founded in 2022, Zenuxs started with a revolutionary vision..."

unless that exact history is verified.

The homepage should instead tell the **product history through the problems being solved**.

This is more authentic to Zenuxs.

The story is:

```text
Developer problems
        ↓
small tools
        ↓
reusable systems
        ↓
authentication
        ↓
developer tooling
        ↓
security / infrastructure
        ↓
specialized products
        ↓
open-source ecosystem
```

The visitor should understand:

> Zenuxs grew by building solutions to actual technical problems.

That is the central historical narrative.

---

# 04 — HOMEPAGE STRUCTURE

Recommended major chapters:

```text
01  Opening / Identity
02  The problem / Why Zenuxs exists
03  The first principle: Build tools, not walls
04  Accounts / Identity
05  Developer tooling / CLI + Code
06  Data / Easy-Mongoo
07  Security / HMAX
08  Infrastructure / Hosting + DNS
09  Plugins / AdvancedAuth + Minecraft ecosystem
10  The ecosystem connection
11  Open source / Source is the product
12  What you can build with it
13  Community
14  Current state / Growing ecosystem
15  Final question
16  Footer
```

This is deliberately larger than a conventional homepage.

---

# 05 — CHAPTER 01
# OPENING

## Container

Approximately:

`100vh`

But do NOT make it look like a conventional centered hero.

The first viewport should feel like entering an environment.

---

## Small label

```text
ZENUXS PLATFORM
OPEN TECHNOLOGY ECOSYSTEM
```

---

## Primary headline

Use:

```text
BUILD
BEYOND
THE TOOL.
```

Alternative:

```text
TOOLS
FOR THE
THINGS YOU BUILD.
```

Preferred:

```text
BUILD
BEYOND
THE TOOL.
```

This is intentionally NOT a generic:

> "The future of development"

headline.

---

## Subtext

```text
Zenuxs is a growing ecosystem of developer tools,
identity systems, security software, infrastructure
and open-source projects built to solve real problems.
```

---

## CTA

Primary:

```text
Explore the ecosystem →
```

Secondary:

```text
View source ↗
```

---

## Visual

Do NOT use a generic 3D globe.

Do NOT use a generic AI brain.

Do NOT use a giant gradient.

Instead:

Create a dark technical environment containing fragments of the real ecosystem:

```text
ZENUXS
ACCOUNTS
AI
CODE
EASY-MONGOO
HMAX
DNS
HOSTING
PLUGINS
GITHUB
```

These should initially appear disconnected.

Then very subtly begin forming relationships.

The visual metaphor:

> individual tools becoming an ecosystem.

---

# 06 — CHAPTER 02
# WHY ZENUXS EXISTS

## Container

Approximately:

`100vh`

Use a completely different composition.

No giant hero.

No cards.

---

## Small label

```text
THE PROBLEM
```

---

## Headline

```text
SOFTWARE
IS NEVER
JUST ONE PROBLEM.
```

---

## Subtext

```text
You start with one application.

Then authentication.
Then accounts.
Then APIs.
Then databases.
Then security.
Then infrastructure.
Then deployment.

The work around the product starts becoming
the product itself.
```

---

## Visual

Create a progressively growing technical stack.

Start:

```text
APPLICATION
```

Then animate:

```text
AUTH
DATABASE
SECURITY
API
INFRASTRUCTURE
DNS
DEPLOYMENT
```

The stack slowly becomes visually complicated.

Then transition to:

```text
ZENUXS
```

with the system reorganizing into reusable building blocks.

---

## Narrative

The user should understand:

> Zenuxs is about reducing the repeated infrastructure work surrounding software.

Do NOT claim Zenuxs solves every developer problem.

---

# 07 — CHAPTER 03
# THE PRINCIPLE

## Container

`100vh`

---

## Headline

```text
BUILD THE SYSTEM.
NOT THE SAME SYSTEM
TWICE.
```

---

## Subtext

```text
The ecosystem is built around reusable tools:
systems that can stand alone, connect to applications,
and become part of something larger.
```

---

## Visual

Show independent modules:

```text
Identity
Security
Data
AI
Developer Tools
Infrastructure
Plugins
```

They appear separately.

Then a line connects them.

---

## Micro-copy

```text
REUSABLE
COMPOSABLE
OPEN
```

---

# 08 — CHAPTER 04
# IDENTITY — ZENUXS ACCOUNTS

This is where the story moves from philosophy into actual products.

## Container

`100vh`

---

## Label

```text
01 / IDENTITY
```

---

## Headline

```text
EVERY PRODUCT
STARTS WITH
A USER.
```

---

## Subtext

```text
Zenuxs Accounts provides the identity layer
for applications and developer services —
from account management to developer-facing
authentication infrastructure.
```

The public Accounts site currently exposes account management, developer APIs, configuration and community access, and positions the product around authentication/OAuth infrastructure. citeturn0search3turn0search2

---

## Visual

Use a real Zenuxs Accounts interface if available.

Preferred composition:

```text
        APPLICATION

             ↓

       ZENUXS ACCOUNTS

             ↓

       IDENTITY / SESSION

             ↓

          USER
```

Do not make this a card.

Make the authentication flow the visual.

---

## CTA

```text
Explore Zenuxs Accounts →
```

---

# 09 — CHAPTER 05
# DEVELOPER TOOLS

## Container

`100vh`

---

## Label

```text
02 / DEVELOPER TOOLING
```

---

## Headline

```text
THE TERMINAL
SHOULD NOT
FIGHT BACK.
```

---

## Subtext

```text
Zenuxs builds developer-facing tools that bring
platform capabilities closer to the environment
where developers already work.
```

Only mention specific CLI capabilities that are verified in the actual current product/repository.

---

## Visual

Large terminal/editor composition.

Possible layers:

```text
terminal
CLI command
file tree
API output
developer workflow
```

Use real product UI where available.

---

## Secondary statement

```text
FROM COMMAND
TO SYSTEM.
```

---

# 10 — CHAPTER 06
# ZENUXS.CODE / AI

If the current Zenuxs.Code and Zenuxs AI products are active and their capabilities are verified, give them a dedicated visual chapter.

## Container

`100vh`

---

## Label

```text
03 / INTELLIGENCE
```

---

## Headline

```text
LET THE TOOL
MOVE AT THE
SPEED OF THE BUILDER.
```

---

## Subtext

Keep this deliberately broad until the current product capabilities are verified.

Suggested:

```text
Zenuxs is also building around AI-assisted development —
bringing intelligent tooling closer to the code, workflow
and systems developers already use.
```

---

## Visual

Use the actual Zenuxs AI / Code interface.

If no verified screenshot exists:

use:

```text
code
+
terminal
+
agent reasoning state
+
file changes
+
tool execution
```

Do not fake features.

---

## CTA

```text
Explore Zenuxs AI →
Explore Zenuxs.Code →
```

---

# 11 — CHAPTER 07
# EASY-MONGOO

## Container

`100vh`

---

## Label

```text
04 / DATA
```

---

## Headline

```text
DATABASES
SHOULD FEEL
LIKE BUILDING BLOCKS.
```

---

## Subtext

```text
Easy-Mongoo exists to make working with MongoDB
more approachable through a simpler developer
experience and management layer.
```

The current Zenuxs platform describes Easy Mongo as a simple MongoDB management interface, while the broader project positioning describes it as a developer-oriented database utility. citeturn0search2turn0search5

---

## Visual

Do not show a generic database icon.

Show:

```text
code
    ↓
query
    ↓
collection
    ↓
document
    ↓
result
```

Use real Easy-Mongoo UI if available.

---

## Micro-copy

```text
COLLECTIONS
QUERIES
DOCUMENTS
STRUCTURE
```

Only include capabilities confirmed by the current implementation.

---

## CTA

```text
Explore Easy-Mongoo →
```

---

# 12 — CHAPTER 08
# HMAX / SECURITY

## Container

`100vh`

---

## Label

```text
05 / SECURITY
```

---

## Headline

```text
SECURITY
BELONGS
UNDER THE FLOOR.
```

---

## Subtext

```text
Security should not be a decorative layer added
after the application is finished.

Zenuxs builds security-oriented infrastructure
as part of the foundation.
```

---

## Visual

Technical security composition.

Possible verified technical material:

```text
HASH
VERIFY
SESSION
SECRET
ROTATION
```

If current HMAX documentation confirms specific algorithms or primitives, show them.

If not:

DO NOT invent them.

---

## Visual style

Use:

- hash strings
- verification state
- technical metadata
- secure channel visualization
- cryptographic-looking typography

Avoid cliché padlock illustrations.

---

# 13 — CHAPTER 09
# INFRASTRUCTURE

## Container

`100vh`

---

## Label

```text
06 / INFRASTRUCTURE
```

---

## Headline

```text
CODE IS
ONLY THE
BEGINNING.
```

---

## Subtext

```text
A system becomes useful when it can reach the world.

Hosting, networking and DNS form the infrastructure
between what you build and the people who use it.
```

Do not claim exact hosting specifications until verified.

---

## Visual

Build a network journey:

```text
CODE
  ↓
BUILD
  ↓
HOST
  ↓
DNS
  ↓
NETWORK
  ↓
USER
```

Use real Zenuxs Hosting / DNS product material if available.

---

## CTA

```text
Explore Hosting →
Explore DNS →
```

---

# 14 — CHAPTER 10
# PLUGINS / MINECRAFT

This chapter is important because it demonstrates that Zenuxs is not limited to one type of developer tool.

## Container

`100vh`

---

## Label

```text
07 / EXTENSIONS
```

---

## Headline

```text
THE ECOSYSTEM
DOESN'T STOP
AT THE WEB.
```

---

## Subtext

```text
Zenuxs Plugins extends the ecosystem into Minecraft
servers, authentication, integrations and community-driven
server tooling.
```

The current Plugins site lists products including AdvancedAuth and zxSrv and describes plugin support, custom plugin requests and community support. citeturn0search0

---

## Visual

Do not use a generic Minecraft stock image.

Use actual verified plugin screenshots.

For AdvancedAuth, the public product page currently describes a web dashboard, REST API, email OTP password reset, API key permissions, login history, active sessions, user management and analytics. citeturn0search6

---

## AdvancedAuth visual story

Show:

```text
MINECRAFT SERVER
       ↓
ADVANCEDAUTH
       ↓
AUTHENTICATION
       ↓
WEB DASHBOARD
       ↓
API / MANAGEMENT
```

This is a strong example of a Zenuxs product crossing multiple environments.

---

# 15 — CHAPTER 11
# THE PRODUCTS CONNECT

## Container

`100vh`

This should be one of the largest visual moments on the homepage.

---

## Headline

```text
SEPARATE TOOLS.
ONE ECOSYSTEM.
```

---

## Subtext

```text
Each product solves a different problem.

Together, they form a broader set of building blocks
for developers and communities.
```

---

## Visual

Create the final ecosystem network.

Possible nodes:

```text
ZENUXS ACCOUNTS
ZENUXS AI
ZENUXS.CODE
EASY-MONGOO
HMAX
HOSTING
DNS
PLUGINS
DISCORD
GITHUB
```

Connections should represent only real or clearly conceptual relationships.

Do not imply technical integration where none exists.

---

## Interaction

Hovering:

```text
product node
    ↓
highlight
    ↓
short description
    ↓
real destination
```

---

# 16 — CHAPTER 12
# OPEN SOURCE

## Container

`100vh`

---

## Label

```text
08 / OPEN SOURCE
```

---

## Headline

```text
IF IT
MATTERS,
SHOW THE SOURCE.
```

---

## Subtext

```text
Zenuxs is not meant to be a black box.

The source is part of the ecosystem —
something developers can inspect, learn from,
use, improve and build upon.
```

---

## Visual

Do not use generic GitHub cards.

Create a repository field.

Show actual public repositories when available.

Possible fields:

```text
REPOSITORY
LANGUAGE
LICENSE
LAST UPDATE
STARS
DESCRIPTION
```

Only display live values when they are actually fetched.

GitHub's repository API provides public repository metadata and can be used for live/cached repository information. citeturn0search8

---

## CTA

```text
Explore Zenuxs on GitHub ↗
```

---

# 17 — CHAPTER 13
# WHAT CAN I BUILD?

This is where the homepage stops talking about Zenuxs and starts talking to the visitor.

## Container

`100vh`

---

## Headline

```text
START
WITH ONE.
BUILD
AROUND IT.
```

---

## Visual

Interactive builder selector.

Example:

```text
I need...

Authentication
        ↓
Zenuxs Accounts

Database tooling
        ↓
Easy-Mongoo

Security
        ↓
HMAX

AI / coding
        ↓
Zenuxs AI / Zenuxs.Code

Infrastructure
        ↓
Hosting / DNS

Minecraft
        ↓
Zenuxs Plugins
```

---

## Subtext

```text
You do not have to adopt the entire ecosystem.

Pick the piece that solves your problem.
```

This is important.

Do not pressure the user to use every product.

---

# 18 — CHAPTER 14
# COMMUNITY

## Container

`100vh`

---

## Label

```text
09 / COMMUNITY
```

---

## Headline

```text
SOFTWARE
GETS BETTER
WHEN PEOPLE
CAN TOUCH IT.
```

---

## Subtext

```text
Use the tools.
Read the source.
Report the bugs.
Build something.
Share it.
```

---

## Visual

Show real ecosystem channels:

```text
GitHub
Discord
Plugins
Repositories
Issues
Contributions
```

Do not fabricate community size.

---

## CTA

```text
Join Discord →
Contribute on GitHub →
```

---

# 19 — CHAPTER 15
# THE PRESENT

This is the "current state" chapter.

## Container

`100vh`

---

## Headline

```text
THIS IS
ONLY THE
CURRENT STATE.
```

---

## Subtext

```text
Zenuxs is still being built.

New tools appear.
Existing systems evolve.
Projects become infrastructure.
Infrastructure becomes an ecosystem.
```

This is intentionally honest.

Do not use:

> "The fastest-growing platform"

unless verified.

---

## Visual

Show a timeline-like evolving system.

Not fake historical dates.

Instead show product evolution as states:

```text
IDEA
 ↓
PROJECT
 ↓
TOOL
 ↓
SYSTEM
 ↓
ECOSYSTEM
```

---

# 20 — CHAPTER 16
# FINAL STATEMENT

## Container

Approximately:

`100vh`

This is the final emotional section.

Do NOT make it a normal CTA card.

---

## Headline

```text
WHAT ARE
YOU BUILDING?
```

---

## Subtext

```text
Find the tool.
Read the source.
Connect the pieces.
Build something of your own.
```

---

## Buttons

```text
Explore Zenuxs →
View GitHub ↗
```

---

## Visual

Return to the opening ecosystem visual.

But now:

At the beginning:

```text
disconnected
```

At the end:

```text
connected
```

This closes the story.

---

# 21 — FOOTER

The footer should be smaller and quieter.

Suggested structure:

```text
ZENUXS

Open technology.
Open source.
Built for builders.
```

Columns:

```text
PRODUCTS
Zenuxs AI
Zenuxs.Code
Zenuxs Accounts
Easy-Mongoo
HMAX
Hosting
DNS
Plugins

DEVELOPERS
GitHub
Documentation
API
CLI

COMMUNITY
Discord
GitHub
Plugins

COMPANY
Zenuxs
Contact
```

Only include links that actually exist.

---

# 22 — HOME PAGE VISUAL TIMELINE

The visitor experience should feel approximately like:

```text
0%
│
│   ENTER ZENUXS
│
├────────────────────────
│
│   WHY THIS EXISTS
│
├────────────────────────
│
│   THE PRINCIPLE
│
├────────────────────────
│
│   IDENTITY
│
├────────────────────────
│
│   DEVELOPER TOOLS
│
├────────────────────────
│
│   AI / CODE
│
├────────────────────────
│
│   DATA
│
├────────────────────────
│
│   SECURITY
│
├────────────────────────
│
│   INFRASTRUCTURE
│
├────────────────────────
│
│   PLUGINS
│
├────────────────────────
│
│   THE ECOSYSTEM
│
├────────────────────────
│
│   OPEN SOURCE
│
├────────────────────────
│
│   BUILD WITH IT
│
├────────────────────────
│
│   COMMUNITY
│
├────────────────────────
│
│   CURRENT STATE
│
├────────────────────────
│
│   WHAT ARE YOU BUILDING?
│
└────────────────────────
100%
```

---

# 23 — 100VH RULE

The user explicitly wants major containers to feel like viewport chapters.

Use approximately:

```css
min-height: 100svh;
```

or equivalent responsive viewport sizing.

But:

**DO NOT blindly use `height: 100vh` everywhere.**

Some sections need:

```text
100svh
+
content overflow
```

especially on mobile.

The principle is:

> Every major chapter should feel like a complete visual scene.

Not:

> Every DOM section must mathematically equal 100vh.

---

# 24 — FIRST VIEWPORT MUST NOT LOOK LIKE A HERO

This is critical.

The opening should not visually communicate:

```text
Hero section
↓
marketing page
```

Instead it should communicate:

```text
opening scene
↓
environment
↓
story
```

The first viewport should contain enough visual information to make the user curious.

The second viewport should continue the story naturally.

There should not be an obvious "hero ends here" feeling.

---

# 25 — IMAGE STRATEGY

Images should tell the product story.

Priority:

### 1. Real product screenshots

Best option.

### 2. Real product interface captures

Crop aggressively.

### 3. Technical UI

Code / terminal / dashboards.

### 4. Architecture visualization

Use when no screenshot exists.

### 5. Abstract generated visual

Only for conceptual sections.

Never use:

- random stock photos
- generic developer photos
- fake people
- fake product screenshots
- fake dashboards

---

# 26 — IMAGE COMPOSITION

Do NOT place every image like:

```text
┌────────────────────┐
│                    │
│     SCREENSHOT     │
│                    │
└────────────────────┘
```

Instead:

```text
        TEXT

                  ┌─────────────
                  │ PRODUCT UI
                  │
                  │             ─────
                  │
        metadata
```

Allow the interface to extend outside the grid.

Use crops.

Use depth.

Use scale.

---

# 27 — IMAGE SIZE

Product interfaces should generally be large enough that the user can understand the product visually.

If the screenshot is so small that the UI is unreadable:

the screenshot is being used as decoration.

That is wrong.

Either:

- enlarge it
- crop it
- simplify it
- or replace it with a focused detail.

---

# 28 — PRODUCT HISTORY WITHOUT FAKE DATES

Do NOT write:

```text
2021
Founded

2022
Accounts

2023
AI

2024
Infrastructure
```

unless those dates are verified.

Instead use:

```text
A PROBLEM
↓
A TOOL
↓
A SYSTEM
↓
A PRODUCT
↓
AN ECOSYSTEM
```

This communicates history without inventing facts.

---

# 29 — REAL PRODUCT HISTORY STYLE

The history should be told through product evolution.

Example:

```text
Authentication
```

becomes:

```text
Accounts
```

Then:

```text
Developer tooling
```

Then:

```text
Security
```

Then:

```text
Data
```

Then:

```text
Infrastructure
```

Then:

```text
Plugins
```

Then:

```text
Open ecosystem
```

The story:

> More problems were worth solving, so the toolbox became an ecosystem.

This is the most natural ZenuxsPlatform narrative.

---

# 30 — COPYWRITING STYLE

Use:

- short sentences
- direct language
- technical confidence
- no corporate jargon
- no exaggerated claims
- no empty superlatives

Avoid:

```text
revolutionary
game-changing
next-generation
world-class
cutting-edge
unparalleled
seamless
empowering
transformative
```

unless there is a genuine reason.

Prefer:

```text
Build.
Connect.
Inspect.
Extend.
Deploy.
```

---

# 31 — SUBTEXT STYLE

Subtext should answer:

> Why should I care?

Not:

> How can we fill this area?

Bad:

```text
Our platform provides innovative solutions
for developers across various industries.
```

Good:

```text
Authentication, data, security and infrastructure
are easier to reuse when they are built as systems.
```

---

# 32 — SECTION COPY LENGTH

Recommended:

```text
label:
1–3 words

headline:
2–8 words

subtext:
1–3 short sentences

CTA:
1–4 words
```

Do not turn the homepage into documentation.

---

# 33 — MICRO-COPY

Use tiny technical labels to establish authenticity.

Examples:

```text
OPEN SOURCE
DEVELOPER TOOLING
AUTHENTICATION
SECURITY
DATABASE
INFRASTRUCTURE
PLUGIN
COMMUNITY
```

These should support the story, not clutter it.

---

# 34 — VISUAL STORY OF THE WHOLE PAGE

The homepage should visually evolve:

### Beginning

Dark / sparse / disconnected.

### Middle

More systems appear.

### Product chapters

Interfaces become increasingly tangible.

### Ecosystem chapter

Everything connects.

### Open source

The system becomes transparent.

### Final

The ecosystem becomes an invitation.

Visual metaphor:

```text
UNKNOWN
  ↓
DISCOVERY
  ↓
SYSTEMS
  ↓
PRODUCTS
  ↓
CONNECTION
  ↓
SOURCE
  ↓
BUILD
```

---

# 35 — ANIMATION STORY

Do not animate every section the same way.

### Opening

slow system initialization.

### Problem

stack builds.

### Products

interfaces reveal.

### Ecosystem

nodes connect.

### Open source

repositories appear.

### Final

ecosystem returns to stable state.

This creates a narrative rather than random motion.

---

# 36 — SCROLL BEHAVIOR

Normal scrolling must remain natural.

Do NOT hijack scrolling.

Use scroll position to control subtle visual transitions.

Examples:

```text
opacity
translate
scale
mask
line reveal
```

Do not force the user through an animation.

---

# 37 — PRODUCT SECTION TRANSITIONS

The next product should not simply appear after a hard border.

Example:

Accounts:

```text
identity line
```

transitions into:

Code:

```text
API request
```

then into:

Easy-Mongoo:

```text
data request
```

then:

HMAX:

```text
verification
```

then:

Infrastructure:

```text
network
```

This makes the ecosystem feel connected.

---

# 38 — RESPONSIVE HOME PAGE

Desktop:

rich cinematic compositions.

Tablet:

preserve hierarchy.

Mobile:

simplify composition but preserve story.

Do not remove the story simply because the viewport is smaller.

---

# 39 — MOBILE CHAPTERS

Each chapter can still feel like a complete scene:

```text
label
headline
visual
subtext
CTA
```

but the visual order should be intentionally redesigned.

---

# 40 — MOBILE IMAGE RULE

Do not shrink a giant desktop screenshot until it becomes unreadable.

Instead:

crop to the meaningful region.

Example:

Desktop:

```text
full dashboard
```

Mobile:

```text
important dashboard panel
```

---

# 41 — MOBILE ECOSYSTEM

Desktop:

interactive network.

Mobile:

interactive vertical story.

Do not squeeze a graph into 390px.

---

# 42 — HOME PAGE SHOULD BE LONG

Target:

approximately 12–16 major visual chapters.

Expected experience:

```text
5–10 minutes
```

if the user explores everything.

Normal browsing should still allow quick scanning.

Long does NOT mean bloated.

Every chapter must introduce something new.

---

# 43 — LONG PAGE DOES NOT MEAN LONG COPY

The page can be long because of:

- product UI
- visual transitions
- ecosystem visualization
- code
- diagrams
- screenshots
- whitespace
- interactive sections

Not because every section contains 800 words.

---

# 44 — WHAT NOT TO ADD

Unless real data exists, do not add:

- pricing
- customer logos
- testimonials
- review scores
- user counts
- team section
- awards
- investor section
- press section
- fake integrations
- fake enterprise clients

The ecosystem itself is enough.

---

# 45 — FINAL HOME PAGE COPY MAP

The final copy sequence:

```text
ZENUXS PLATFORM

BUILD
BEYOND
THE TOOL.

Zenuxs is a growing ecosystem of developer tools,
identity systems, security software, infrastructure
and open-source projects built to solve real problems.

[Explore the ecosystem] [View source]


THE PROBLEM

SOFTWARE
IS NEVER
JUST ONE PROBLEM.

You start with an application.
Then come the systems around it.


THE PRINCIPLE

BUILD THE SYSTEM.
NOT THE SAME SYSTEM TWICE.

Reusable.
Composable.
Open.


01 / IDENTITY

EVERY PRODUCT
STARTS WITH
A USER.

Zenuxs Accounts.


02 / DEVELOPER TOOLING

THE TERMINAL
SHOULD NOT
FIGHT BACK.

Zenuxs developer tooling.


03 / INTELLIGENCE

LET THE TOOL
MOVE AT THE
SPEED OF THE BUILDER.

Zenuxs AI / Zenuxs.Code.


04 / DATA

DATABASES
SHOULD FEEL
LIKE BUILDING BLOCKS.

Easy-Mongoo.


05 / SECURITY

SECURITY
BELONGS
UNDER THE FLOOR.

HMAX.


06 / INFRASTRUCTURE

CODE IS
ONLY THE
BEGINNING.

Hosting + DNS.


07 / EXTENSIONS

THE ECOSYSTEM
DOESN'T STOP
AT THE WEB.

Zenuxs Plugins / AdvancedAuth.


SEPARATE TOOLS.
ONE ECOSYSTEM.

Everything begins to connect.


08 / OPEN SOURCE

IF IT
MATTERS,
SHOW THE SOURCE.

Read it.
Inspect it.
Build on it.


START
WITH ONE.
BUILD
AROUND IT.

Pick the piece that solves your problem.


09 / COMMUNITY

SOFTWARE
GETS BETTER
WHEN PEOPLE
CAN TOUCH IT.

Use.
Inspect.
Report.
Build.
Share.


THIS IS
ONLY THE
CURRENT STATE.

Zenuxs is still being built.


WHAT ARE
YOU BUILDING?

Find the tool.
Read the source.
Connect the pieces.
Build something of your own.
```

---

# 46 — FINAL DESIGN AGENT INSTRUCTION

Implement the homepage from this document as a **long-form visual product story**, not as a conventional landing page.

Do not compress these chapters into a short page.

Do not turn the chapters into cards.

Do not create a generic hero followed by feature sections.

Do not use the same layout twice consecutively.

Use approximately one viewport per major chapter where composition benefits from it.

The first viewport must feel like entering the Zenuxs ecosystem.

The final viewport must feel like leaving with an invitation to build.

The entire page should feel like:

> **the history of a growing developer ecosystem told through the products that came out of solving real problems.**

The visual progression is:

```text
ENTER
  ↓
QUESTION
  ↓
UNDERSTAND
  ↓
DISCOVER
  ↓
EXPLORE
  ↓
CONNECT
  ↓
INSPECT
  ↓
BUILD
```

The website is successful when the visitor reaches the bottom and understands:

> **Zenuxs is not one product. It is a growing set of systems built around the real problems that appear when you build software.**

---

# 47 — ABSOLUTE STOP CONDITIONS

Do not consider the homepage complete if:

- it looks like a generic SaaS landing page
- the first viewport looks like a standard hero
- the page is only 5–7 sections
- every section is a card grid
- every section is centered
- product screenshots are tiny
- products are described without visual evidence
- fake historical dates are used
- fake statistics are used
- fake people are used
- fake customers are used
- product capabilities are invented
- every section has identical spacing
- every section has identical animation
- 100vh is used mechanically
- mobile is only desktop stacked vertically
- the ecosystem relationship is unclear
- open source is hidden in the footer
- the final CTA feels like a generic SaaS CTA
- the page has large dead space with no compositional purpose

The final result must feel like:

> **A real technology ecosystem telling its own story.**

Not:

> **An AI trying to sell a SaaS product.**
