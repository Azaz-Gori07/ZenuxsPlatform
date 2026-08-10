# ZenuxsPlatform — Product Requirements Document (PRD) + Technical Requirements Document (TRD)

> **Document type:** Master product + technical specification  
> **Product:** ZenuxsPlatform  
> **Company:** Zenuxs  
> **Primary goal:** Build one authoritative, premium, functional website that presents the entire Zenuxs ecosystem, explains every product clearly, and gives users a direct path to the product, documentation, source code, community, or account system they need.
>
> **Implementation target:** React + TypeScript + modern animation system using Framer Motion / Motion for React.

---

# PART I — PRODUCT REQUIREMENTS DOCUMENT

## 1. Product Definition

### 1.1 What is ZenuxsPlatform?

ZenuxsPlatform is the public-facing ecosystem website for Zenuxs.

It is **not just a company landing page**.

It should function as:

- the central product directory
- the ecosystem map
- the product discovery layer
- the product documentation gateway
- the open-source discovery hub
- the primary "what is Zenuxs?" explanation
- the bridge between products
- the bridge to GitHub
- the bridge to community/support
- the bridge to Zenuxs Accounts
- the authoritative source for product descriptions

The visitor should be able to arrive at:

> "What is Zenuxs?"

and quickly understand:

> "What does Zenuxs build, which product solves my problem, how do I use it, and where do I go next?"

---

# 2. Current Ecosystem

The currently identified Zenuxs ecosystem includes:

| Product | URL | Category | Primary purpose |
|---|---|---|---|
| Zenuxs Accounts | https://zenuxs.in | Identity / OAuth | Authentication, accounts and OAuth infrastructure |
| Zenuxs AI | https://ai.zenuxs.in | AI | AI product / unified AI experience |
| Zenuxs.Code | https://code.zenuxs.in | AI / Developer | AI coding/developer environment |
| Easy-Mongoo | https://easy-mongoo.zenuxs.in | Database / OSS | Simplified MongoDB wrapper |
| HMAX-SECURE | https://hmax.zenuxs.in | Security / OSS | Password hashing/security library |
| Zenuxs Hosting | https://host.zenuxs.in | Infrastructure | Hosting/infrastructure product |
| Zenuxs Plugins | https://plugins.zenuxs.in | Minecraft | Minecraft plugins ecosystem |
| Zenuxs Discord | https://discord.zenuxs.in | Community | Developer/gaming/community hub |
| Zenuxs DNS | https://dns.zenuxs.in | Infrastructure | DNS product/tool |
| Zenuxs GitHub | https://github.com/zenuxs-dev | Open Source | Source code and repositories |

### Important source-of-truth rule

The platform must **never invent product capabilities**.

For every product, content must be derived from:

1. official product site
2. official GitHub repository
3. official documentation
4. official community/product page
5. verified company-provided metadata

If a product site is temporarily inaccessible or its frontend is client-rendered, show only verified information and mark unknown fields internally as `TBD`.

---

# 3. Verified Ecosystem Information

## 3.1 Zenuxs Accounts

Zenuxs Accounts is the authentication/OAuth layer.

The public `zenuxs-oauth` repository describes a universal OAuth 2.0 + PKCE client for Zenuxs auth supporting browsers, Node.js, React Native and hybrid applications. It documents automatic token refresh, user info, logout, authenticated fetch, multiple login modes and social-provider fallback behavior.

The platform should position this product as:

> **Identity infrastructure for the Zenuxs ecosystem and developer applications.**

Primary actions:

- Open Accounts
- Read Developer Docs
- View GitHub
- Explore OAuth

---

# 4. Zenuxs AI

Current official positioning:

> **One Memory. Every AI.**

Treat this as a first-class AI product.

Because the public site is dynamically rendered, the implementation must crawl/read the actual product source and documentation before writing detailed feature claims.

The product page should support:

- product overview
- core capabilities
- use cases
- screenshots/video if available
- documentation
- launch/open-app CTA
- source code if available
- status
- related Zenuxs products

Do not invent model/provider capabilities.

---

# 5. Zenuxs.Code

Current official positioning:

> **The AI Operating System**

Treat this as a developer/AI product.

The product page should explain:

- what it is
- who it is for
- primary workflow
- supported environments
- integrations
- key capabilities
- documentation
- source repository if available
- launch CTA

Detailed claims must come from the actual product/repository.

---

# 6. Easy-Mongoo

Easy-Mongoo is an open-source MongoDB wrapper.

The official documentation describes it as a simplified MongoDB wrapper intended to provide Mongoose-like capabilities with easier syntax.

Verified concepts include:

- connection handling
- schema creation
- models
- CRUD
- virtual fields
- methods and statics
- middleware
- transactions
- aggregation
- status operations
- soft delete
- field updates
- environment-based connection
- model helpers

The GitHub repository is public.

Primary audience:

- Node.js developers
- JavaScript/TypeScript developers
- developers who want simpler MongoDB usage

Primary CTAs:

- Read Docs
- npm
- GitHub
- Quick Start

---

# 7. HMAX-SECURE

HMAX-SECURE is a security/password hashing library.

Verified repository capabilities include:

- HMAC-SHA512 sealing
- secret
- pepper
- Argon2id/PBKDF2 KDF options
- secret rotation
- timing-safe verification
- versioned output
- TypeScript support
- zero dependencies
- hash migration
- CLI utilities
- hash auditing

The website positions it as an enterprise-grade password hashing library.

Important product-page rule:

Do not use exaggerated security claims such as "unbreakable" or "military-grade" unless officially documented and technically justified.

Preferred positioning:

> Layered password hashing and security primitives for Node.js applications.

Primary CTAs:

- Read Docs
- GitHub
- npm
- Security details

---

# 8. Zenuxs Hosting

The official product domain exists, but detailed crawlable product information is currently limited.

Therefore:

- do not fabricate hosting plans
- do not fabricate server specs
- do not fabricate pricing
- do not fabricate uptime
- do not fabricate regions
- do not fabricate deployment capabilities

The implementation should create a product shell that can consume verified hosting metadata later.

Possible content fields:

```ts
hosting:
  status
  description
  features
  plans
  regions
  deployment
  docsUrl
  dashboardUrl
  githubUrl
```

Unknown values remain absent rather than invented.

---

# 9. Zenuxs Plugins

Zenuxs Plugins is the Minecraft plugin ecosystem.

The official site describes:

- premium plugins
- free support
- bug reporting
- custom plugin requests
- plugin ecosystem
- Discord-based community/support

Current highlighted plugins include:

- AdvancedAuth
- zxSrv

The official AdvancedAuth repository describes:

- Minecraft server authentication
- external account system
- email identity verification
- REST API
- account linking
- session management
- IP tracking
- premium/offline account separation

The public product listing also describes cloud synchronization, web dashboards, REST API, security features and developer integration.

Primary CTAs:

- Browse Plugins
- Discord
- Plugin Docs
- GitHub

---

# 10. Zenuxs Discord

The official Discord site positions the community around:

- developers
- gaming
- Minecraft
- coding help
- project discussion
- live member/status information
- community support

The Discord website states that live member information is powered by the Discord API.

ZenuxsPlatform should treat Discord as the community entry point.

CTA:

> Join the Zenuxs Community

---

# 11. Zenuxs DNS

The DNS product exists at:

https://dns.zenuxs.in

Detailed product capabilities should be read from the live product/repository before final content is published.

Do not invent DNS features.

---

# 12. GitHub / Open Source

Official organization:

https://github.com/zenuxs-dev

The public organization describes Zenuxs as an open-source developer ecosystem focused on:

- authentication
- security
- databases
- CLI/project scaffolding
- APIs
- developer utilities
- plugins

Public repositories currently include projects such as:

- zenuxs-oauth
- easy-mongoo
- HMAX-SECURE
- zenuxs-cli
- AdvancedAuth

ZenuxsPlatform should make open source a major part of the product identity.

---

# 13. Product Categories

Do not display the ecosystem as a flat list only.

Use meaningful categories:

## AI & Developer

- Zenuxs AI
- Zenuxs.Code
- Zenuxs CLI

## Identity & Security

- Zenuxs Accounts
- HMAX-SECURE
- AdvancedAuth

## Data & Backend

- Easy-Mongoo

## Infrastructure

- Zenuxs Hosting
- Zenuxs DNS

## Minecraft & Community

- Zenuxs Plugins
- Discord

## Open Source

- GitHub
- open-source repositories

This makes discovery significantly easier.

---

# 14. Target Users

## Developer

Needs:

- libraries
- APIs
- authentication
- database tools
- CLI
- AI coding tools

Primary path:

```text
Home
→ Developer
→ Products
→ Product
→ Docs/GitHub
```

## Founder / Builder

Needs:

- ecosystem overview
- infrastructure
- AI
- authentication
- deployment

Path:

```text
Home
→ Explore ecosystem
→ compare products
→ product
→ launch
```

## Minecraft Server Owner

Needs:

- plugins
- authentication
- support
- Discord

Path:

```text
Home
→ Minecraft
→ Plugins
→ AdvancedAuth
→ Docs / Download / Discord
```

## Open Source Contributor

Needs:

- GitHub
- repositories
- documentation
- contribution information

Path:

```text
Home
→ Open Source
→ GitHub
→ Repository
```

## Curious Visitor

Needs:

- understand Zenuxs quickly
- see what exists
- understand the philosophy

Path:

```text
Home
→ Ecosystem
→ Product
```

---

# 15. Primary Product Goals

### G1 — Ecosystem clarity

A first-time visitor understands Zenuxs within seconds.

### G2 — Product discovery

A visitor can find the correct product quickly.

### G3 — Product conversion

Every product has an obvious next step.

### G4 — Open-source discovery

Visitors can easily reach repositories, docs and contribution paths.

### G5 — Trust

The site clearly distinguishes:

- product
- documentation
- source
- community
- status
- external links

### G6 — Maintainability

Adding a new Zenuxs product should require adding structured metadata, not rewriting pages.

---

# 16. Non-Goals

ZenuxsPlatform is NOT initially:

- a replacement for each product dashboard
- a universal account dashboard
- a documentation replacement for every product
- an e-commerce marketplace unless required by Plugins
- an AI chat application
- a CMS that requires manual editing of hardcoded React components

---

# 17. Website Information Architecture

```text
/
├── /
├── /products
├── /products/:slug
├── /categories/:slug
├── /opensource
├── /about
├── /community
├── /docs
├── /github
├── /status
├── /contact
└── /search
```

Optional:

```text
/pricing
/changelog
/roadmap
/security
```

Only add these when verified data exists.

---

# 18. Homepage

## Hero

Primary message:

> Build without limits.

Supporting idea:

> Open-source developer tools, infrastructure and products from Zenuxs.

Do not make the hero excessively promotional.

Primary CTAs:

```text
Explore Products
View GitHub
```

Secondary:

```text
Join Discord
```

---

# 19. Homepage Sections

Recommended sequence:

```text
Hero
↓
Ecosystem overview
↓
Featured products
↓
Product categories
↓
Open-source section
↓
Developer ecosystem
↓
Community
↓
Why Zenuxs
↓
Final CTA
↓
Footer
```

---

# 20. Product Cards

Each product card should contain:

```text
product logo/icon
product name
short description
category
status
open-source indicator
primary action
secondary action
```

Example:

```text
Easy-Mongoo
Simple MongoDB wrapper for Node.js

OPEN SOURCE
DATABASE

[Docs] [GitHub]
```

Do not put long paragraphs in cards.

---

# 21. Product Detail Page

Every product gets the same data model but a page layout adapted to the product.

Structure:

```text
Product identity
↓
Short positioning
↓
Primary CTA
↓
Key capabilities
↓
How it works
↓
Use cases
↓
Technical details
↓
Open source / repository
↓
Documentation
↓
Related Zenuxs products
↓
Final CTA
```

---

# 22. Product Status

Products should support:

```text
LIVE
BETA
ALPHA
DEVELOPMENT
ARCHIVED
COMING SOON
```

Status must be data-driven.

---

# 23. Search

Search across:

```text
products
categories
tags
repositories
documentation links
```

Example queries:

```text
mongo
oauth
authentication
minecraft
ai
hosting
dns
security
```

Search should return product cards with category context.

---

# 24. Open Source Page

Show:

```text
GitHub organization
featured repositories
languages
stars
forks
last updated
license
documentation
```

Where live GitHub API data is used, cache it.

Do not call GitHub on every render.

---

# 25. About Page

Explain:

```text
What Zenuxs is
Why it exists
What it builds
Open-source philosophy
Developer-first philosophy
Ecosystem
Community
```

Avoid exaggerated corporate language.

---

# 26. Community Page

Focus on:

```text
Discord
GitHub
contributions
support
discussions
```

Primary CTA:

> Join Discord

Secondary:

> Explore GitHub

---

# 27. Footer

Organize links:

### Products

All products

### Developers

Docs
GitHub
CLI
OAuth

### Community

Discord
GitHub

### Company

About
Contact

### Legal

Privacy
Terms

---

# 28. UX Principles

The site must feel:

```text
technical
premium
clean
confident
open
developer-first
fast
```

Avoid:

```text
generic SaaS
corporate stock imagery
overly colorful gradients
fake 3D
excessive glassmorphism
marketing fluff
huge text everywhere
```

---

# 29. PRODUCT DISCOVERY RULE

Every page should answer:

```text
What is this?
Who is it for?
Why should I care?
What can I do with it?
Where do I go next?
```

---

# 30. Functional Requirements

## FR-01 Product Registry

Products must live in structured data.

Example:

```ts
export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;

  category: ProductCategory[];

  url: string;
  docsUrl?: string;
  githubUrl?: string;
  npmUrl?: string;
  discordUrl?: string;

  status: ProductStatus;

  openSource: boolean;

  tags: string[];

  features: ProductFeature[];

  audience: string[];

  logo?: string;
  icon?: string;

  relatedProducts?: string[];
}
```

---

# 31. FR-02 No Hardcoded Product Pages

Adding a product should require:

```text
product registry entry
assets
optional custom section configuration
```

not copying a React page.

---

# 32. FR-03 External Links

Every product must provide the correct destination.

Buttons must not point to placeholder routes.

Use explicit link metadata.

---

# 33. FR-04 Product Filtering

Allow:

```text
All
AI
Developer
Security
Database
Infrastructure
Minecraft
Community
Open Source
```

---

# 34. FR-05 Product Comparison

Optional but recommended.

Allow users to compare products by:

```text
category
open source
language
target audience
primary use
documentation
GitHub
```

---

# 35. FR-06 GitHub Integration

Optional live integration:

```text
GitHub REST API
```

Fetch:

```text
stars
forks
language
license
updatedAt
openIssues
```

Cache results.

---

# 36. FR-07 Product Health

Optional status data:

```text
operational
degraded
maintenance
offline
unknown
```

Do not display "operational" unless it is backed by an actual check.

---

# 37. FR-08 Responsive Design

Desktop:

```text
sidebar/compact navigation
wide product grid
split layouts
```

Tablet:

```text
compressed navigation
2-column layouts
```

Mobile:

```text
top navigation
single column
stacked CTAs
```

---

# 38. FR-09 Accessibility

Support:

- keyboard navigation
- focus indicators
- semantic HTML
- reduced motion
- screen readers
- appropriate contrast
- meaningful labels

---

# 39. FR-10 Motion

Motion must communicate:

```text
navigation
hierarchy
continuity
state
feedback
```

Do not animate everything.

---

# 40. PART II — TECHNICAL REQUIREMENTS DOCUMENT

# 41. Technical Stack

Recommended:

```text
React
TypeScript
Vite
React Router
Tailwind CSS
Framer Motion / Motion for React
Lucide React
```

Optional:

```text
TanStack Query
Zod
Vitest
Playwright
```

Do not add dependencies without a clear reason.

---

# 42. Application Architecture

Recommended:

```text
src/
├── app/
│   ├── router/
│   ├── providers/
│   └── config/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── product/
│   └── motion/
│
├── data/
│   ├── products.ts
│   ├── categories.ts
│   └── ecosystem.ts
│
├── pages/
│   ├── Home/
│   ├── Products/
│   ├── ProductDetail/
│   ├── OpenSource/
│   ├── Community/
│   ├── About/
│   ├── Search/
│   └── Status/
│
├── hooks/
├── services/
│   ├── github/
│   └── health/
│
├── lib/
├── types/
├── styles/
└── assets/
```

---

# 43. Product Registry Architecture

Use a typed registry.

```ts
export const products: Product[] = [
  {
    id: "zenuxs-accounts",
    slug: "accounts",
    name: "Zenuxs Accounts",
    tagline: "Authentication and OAuth infrastructure.",
    category: ["identity", "security"],
    status: "live",
    openSource: true,
    url: "https://zenuxs.in",
    docsUrl: "https://zenuxs.in/developers",
    githubUrl: "https://github.com/zenuxs-dev/zenuxs-oauth",
    tags: ["oauth", "authentication", "identity"],
    features: []
  }
];
```

The exact data must be populated from verified sources.

---

# 44. Component Architecture

Core reusable components:

```text
AppShell
Navbar
Footer
ProductCard
ProductGrid
ProductHero
ProductBadge
StatusBadge
CategoryBadge
FeatureList
FeatureSection
CodeBlock
RepoStats
ExternalLinkButton
CTA
SearchCommand
FilterBar
SectionHeading
LogoCloud
OpenSourcePanel
CommunityPanel
```

---

# 45. Layout Components

Create:

```text
PageContainer
Section
SplitLayout
BentoGrid
ProductGrid
ContentColumn
FullBleedSection
```

Do not use arbitrary page-level margins.

---

# 46. Design Tokens

Create tokens for:

```text
background
surface
surface-elevated
text
text-muted
border
accent
success
warning
danger

spacing
radius
shadow
font
motion
```

The exact visual theme can be refined after the first UI audit.

---

# 47. Typography

Use a premium technical type hierarchy.

Suggested:

```text
Display
H1
H2
H3
Body
Small
Mono
```

Use a monospace face selectively for:

```text
code
URLs
commands
technical metadata
repository names
```

Do not make the entire UI monospace.

---

# 48. Motion Architecture

Create shared motion primitives:

```tsx
<Reveal />
<Stagger />
<MagneticButton />
<HoverLift />
<PageTransition />
<ParallaxSection />
```

Motion should be centralized.

Do not scatter arbitrary animation values across components.

---

# 49. Motion Rules

Default:

```text
fast
subtle
interruptible
GPU-friendly
```

Use:

```text
opacity
transform
clip-path
scale
```

carefully.

Avoid huge layout shifts.

---

# 50. Page Transitions

Use subtle:

```text
fade
translateY
```

Do not make navigation feel like a presentation.

---

# 51. Product Card Motion

On hover:

```text
small translate
border emphasis
icon movement
```

Avoid:

```text
large rotation
continuous floating
heavy blur
```

---

# 52. Hero Motion

Hero animation should be subtle.

Potential:

```text
staggered text reveal
small grid movement
background noise
slow technical signal
```

No perpetual distracting animation.

---

# 53. Reduced Motion

Respect:

```css
prefers-reduced-motion
```

and Framer Motion's reduced-motion configuration.

When reduced motion is enabled:

```text
remove parallax
remove large transforms
reduce transitions
keep state clarity
```

---

# 54. Data Fetching

For live GitHub/status information use:

```text
TanStack Query
```

with:

```text
staleTime
cacheTime/gcTime
retry policy
error fallback
```

Do not request live data for every component independently.

---

# 55. GitHub API Strategy

Preferred:

```text
client
↓
Zenuxs API/proxy
↓
GitHub
```

rather than exposing unrestricted GitHub calls from every browser render.

If direct browser access is used:

- respect rate limits
- cache aggressively
- handle API failure
- show last known data when safe

---

# 56. Health Check Strategy

Do not perform expensive health checks from the browser.

Preferred:

```text
scheduled backend health worker
↓
cached status
↓
ZenuxsPlatform API
```

The frontend consumes status.

---

# 57. SEO

Every route needs:

```text
title
description
canonical
Open Graph
Twitter/X metadata
structured data where appropriate
```

Product pages should generate unique metadata from the product registry.

---

# 58. Open Graph

Every product should have:

```text
product title
short description
Zenuxs branding
product visual
```

Avoid generic OG images.

---

# 59. Performance

Targets:

```text
fast first render
minimal JS
lazy-loaded secondary sections
optimized images
no unnecessary API calls
```

Use:

```text
code splitting
lazy routes
image optimization
preload only critical assets
```

---

# 60. Animation Performance

Avoid animating:

```text
large DOM trees
layout-heavy properties
hundreds of elements simultaneously
```

Prefer composited properties.

---

# 61. Security

Never put secrets in the frontend.

Do not expose:

```text
API keys
private GitHub tokens
service credentials
OAuth client secrets
```

If a backend proxy is required, keep credentials server-side.

---

# 62. Content Security

External links should be explicit.

For external navigation:

```html
target="_blank"
rel="noopener noreferrer"
```

when appropriate.

---

# 63. Error Handling

Global states:

```text
Loading
Error
Empty
Unavailable
```

No blank screen.

Example:

```text
GitHub data unavailable

Product information is still available.

[Open GitHub]
```

---

# 64. Product Data Validation

Validate product registry with Zod or equivalent.

Reject invalid builds where:

```text
missing slug
duplicate slug
invalid URL
missing name
invalid category
```

---

# 65. Testing

## Unit

Test:

```text
product registry
filters
search
formatters
status mapping
```

## Component

Test:

```text
ProductCard
ProductHero
Search
Filters
Navigation
```

## E2E

Test:

```text
home → products
home → product
search → product
GitHub link
docs link
Discord link
mobile navigation
```

---

# 66. Visual Testing

Use Playwright screenshots for:

```text
desktop
tablet
mobile
```

Check:

```text
layout
overflow
text wrapping
CTA position
navigation
```

---

# 67. Responsive Breakpoints

Do not design for one screenshot.

Test at minimum:

```text
360
390
430
768
1024
1280
1440
1920
```

---

# 68. Mobile Navigation

Mobile:

```text
menu button
logo
search
```

Navigation should not become a 30-item drawer.

Group:

```text
Products
Developers
Community
Company
```

---

# 69. Desktop Navigation

Recommended:

```text
Zenuxs logo

Products
Open Source
Community
About

                Search
                GitHub
```

Optional:

```text
Accounts
```

if authentication is integrated.

---

# 70. Search UX

Desktop:

```text
⌘K / Ctrl+K
```

Mobile:

```text
search button
```

Results should group by:

```text
Products
Repositories
Documentation
```

---

# 71. URL / Routing Rules

Use stable slugs:

```text
/products/accounts
/products/ai
/products/code
/products/easy-mongoo
/products/hmax
/products/hosting
/products/plugins
/products/discord
/products/dns
```

Do not use product names as unstable route strings.

---

# 72. Product Relationships

Each product can declare:

```ts
relatedProducts: string[]
```

Example:

```text
Zenuxs Accounts
→ HMAX-SECURE
→ AdvancedAuth
→ Zenuxs CLI
```

This turns the site into an ecosystem rather than a directory.

---

# 73. Ecosystem Graph

Optional interactive section:

```text
Zenuxs
├── AI
│   ├── Zenuxs AI
│   └── Zenuxs.Code
│
├── Developer
│   ├── Zenuxs CLI
│   ├── Easy-Mongoo
│   └── HMAX
│
├── Identity
│   ├── Accounts
│   └── AdvancedAuth
│
├── Infrastructure
│   ├── Hosting
│   └── DNS
│
└── Community
    ├── Plugins
    ├── Discord
    └── GitHub
```

This should be optional and should not replace the accessible product list.

---

# 74. Open Source Labels

Use:

```text
OPEN SOURCE
```

only when the source repository/license actually supports that claim.

---

# 75. External Product Links

Buttons should distinguish:

```text
Open Product ↗
Read Docs →
View Source ↗
Join Discord ↗
```

Users should know when leaving ZenuxsPlatform.

---

# 76. Accessibility Requirements

Every interactive element:

```text
keyboard accessible
focusable
visible focus
semantic
screen-reader understandable
```

Decorative animation:

```text
aria-hidden
```

when appropriate.

---

# 77. Color Accessibility

Do not use color alone for:

```text
status
category
availability
open-source
```

Use labels/icons too.

---

# 78. Analytics

Optional privacy-respecting analytics.

Track:

```text
product_view
product_cta_click
github_click
docs_click
discord_click
search
search_result_click
category_filter
```

Do not collect unnecessary personal data.

---

# 79. Event Schema

Example:

```ts
type AnalyticsEvent =
  | {
      type: "product_view";
      productId: string;
    }
  | {
      type: "product_cta_click";
      productId: string;
      destination: string;
    }
  | {
      type: "search";
      query: string;
    };
```

---

# 80. Content Maintenance

The platform must support a simple product-update workflow.

Preferred future architecture:

```text
product registry
+
GitHub metadata
+
optional CMS/content files
```

The initial version can use TypeScript/JSON/Markdown content.

---

# 81. Changelog

Optional product-level changelog:

```text
product
version
date
change
link
```

Do not invent release information.

---

# 82. Product Documentation Link Strategy

A product page can have:

```text
Launch
Docs
GitHub
npm
Discord
Download
Dashboard
```

Only render actions whose destination actually exists.

---

# 83. Branding

ZenuxsPlatform must feel like the umbrella brand.

Products retain their identities, but the site creates one coherent visual system.

Use:

```text
Zenuxs
Platform
Products
Ecosystem
Open Source
Community
```

consistently.

---

# 84. Visual Direction

Recommended direction:

```text
premium
technical
minimal
high contrast
black/white foundation
controlled accent
precise grids
large but purposeful typography
subtle motion
developer aesthetic
```

Avoid:

```text
generic startup gradient
AI rainbow
excessive glass
excessive neon
template-looking cards
```

---

# 85. Spatial Design

Do not repeat the common mistake of making every page:

```text
giant hero
huge heading
large empty space
content below
```

ZenuxsPlatform is an application-like ecosystem site.

Use page-specific composition.

Examples:

### Product directory

```text
header
filters
product grid
```

### Product detail

```text
product hero
features
technical details
CTA
```

### Open source

```text
GitHub hero
repo grid
stats
contribution CTA
```

### Community

```text
community hero
Discord
GitHub
support
```

---

# 86. Page Height

Do not force every section to exactly 100vh.

Use 100vh selectively for:

```text
hero
interactive ecosystem visualization
major cinematic section
```

Content-heavy sections should size naturally.

---

# 87. Avoid Empty Viewports

Never create artificial whitespace merely to make a page feel "premium."

Premium = intentional spacing.

---

# 88. Product Detail Density

The product detail page should expose enough information to be useful without becoming documentation itself.

Use progressive disclosure:

```text
overview
↓
key features
↓
technical details
↓
docs
```

---

# 89. Code Blocks

For developer products:

- syntax highlighting
- copy button
- language label
- compact line height
- horizontal scrolling on mobile

Never allow code to break the page.

---

# 90. Product Demo

If verified media exists:

```text
video
interactive demo
screenshots
terminal animation
```

Use it.

Do not fabricate product screenshots.

---

# 91. Ecosystem Cross-Selling

Cross-sell by relevance, not advertising.

Example:

```text
Using Easy-Mongoo?

You may also need:
Zenuxs Accounts
HMAX-SECURE
Zenuxs CLI
```

---

# 92. 404

Create a useful 404:

```text
This route doesn't exist.

Explore the Zenuxs ecosystem.

[Products]
[GitHub]
```

---

# 93. Offline / API Failure

If GitHub/API data fails:

The core website must remain usable.

Product descriptions must be local/static enough that a temporary API failure does not blank the page.

---

# 94. Deployment

Recommended:

```text
build
→ CI
→ preview
→ production
```

Environment variables:

```text
VITE_PUBLIC_API_BASE_URL
VITE_GITHUB_PUBLIC_PROXY_URL
VITE_ANALYTICS_ID
```

No secrets in VITE variables.

---

# 95. CI

Required:

```text
npm ci
npm run typecheck
npm run lint
npm run test
npm run build
```

Optional:

```text
npm run test:e2e
```

---

# 96. Definition of Done — Product

```text
[ ] all current products represented
[ ] every product has verified description
[ ] no invented capabilities
[ ] product links work
[ ] docs links work
[ ] GitHub links work
[ ] Discord links work
[ ] product categories work
[ ] search works
[ ] mobile works
[ ] desktop works
[ ] accessibility works
[ ] 404 works
```

---

# 97. Definition of Done — Technical

```text
[ ] React + TypeScript
[ ] typed product registry
[ ] reusable components
[ ] route-based code splitting
[ ] Framer Motion / Motion
[ ] reduced motion
[ ] error boundaries
[ ] loading states
[ ] API caching
[ ] GitHub integration safely handled
[ ] no secrets in frontend
[ ] unit tests
[ ] component tests
[ ] E2E tests
[ ] production build passes
```

---

# 98. Definition of Done — UX

```text
[ ] visitor understands Zenuxs quickly
[ ] product discovery is obvious
[ ] no giant unnecessary empty areas
[ ] no page feels like a generic template
[ ] product pages have useful hierarchy
[ ] CTAs are obvious
[ ] external links are clear
[ ] navigation is simple
[ ] mobile navigation is usable
[ ] animations do not slow the experience
```

---

# 99. Definition of Done — Performance

Target:

```text
fast initial render
minimal blocking JS
no animation jank
no unnecessary API waterfalls
no repeated GitHub requests
optimized assets
responsive interaction
```

Measure using:

```text
Lighthouse
PageSpeed Insights
Chrome Performance
Web Vitals
Playwright
```

---

# 100. Master Implementation Instruction

Use this entire document as the implementation contract.

> First inspect the actual Zenuxs products, public repositories, documentation and official sites.
>
> Do not invent product capabilities.
>
> Build ZenuxsPlatform as the central ecosystem website rather than a generic company landing page.
>
> Create a typed product registry so every product can be represented consistently.
>
> Build reusable React + TypeScript components.
>
> Use Framer Motion / Motion for React for subtle, purposeful animation.
>
> Build page layouts according to each page's actual purpose. Do not force every page into a giant hero template.
>
> Preserve useful whitespace, but remove meaningless empty viewport areas.
>
> Make product discovery immediate.
>
> Make every product page detailed enough to understand the product but link to official documentation for deep technical material.
>
> Integrate GitHub metadata only through a safe, cached architecture.
>
> Keep the core website functional even when external APIs fail.
>
> Do not put secrets in the browser.
>
> Build responsive layouts for mobile, tablet and desktop.
>
> Add keyboard navigation and accessibility.
>
> Respect reduced-motion preferences.
>
> Test all routes and external links.
>
> Test the actual production build.
>
> Fix every visual overflow, layout shift, broken link and empty state.
>
> The final result should feel like the home of a serious open-source developer ecosystem.

---

# 101. Final Product Statement

ZenuxsPlatform should communicate one simple idea:

> **Zenuxs builds the tools around building software.**

From identity and security to databases, AI, coding, infrastructure, plugins and community, the platform should make the ecosystem feel like one connected system rather than unrelated projects.

The website's job is not merely to say:

> "Here are our products."

Its job is to make the visitor think:

> "I understand what Zenuxs is, I found the tool I need, and I know exactly where to go next."
