# ListXtream — Tech & Design Specification

## 1. Product Direction

### Positioning
ListXtream is an editorial website focused on IPTV, Xtream terminology, streaming technology, device guides, apps, and troubleshooting.

### Design goal
Create a site that feels:

- Professional and credible
- Comfortable for long-form reading
- Modern without looking like a SaaS dashboard
- Technical without feeling developer-only
- Rich enough to feel premium, but restrained enough to keep attention on the content
- Excellent on mobile, where most article reading is likely to happen

### Visual principle
**Editorial first, interface second.**

The UI should frame the article rather than compete with it. Avoid the common "IPTV reseller" aesthetic: neon-on-black, oversized glowing buttons, excessive gradients, fake urgency, and crowded cards.

---

# 2. Recommended Tech Stack

## Frontend

### Next.js
Use the App Router with TypeScript.

Why:
- Strong SEO control
- Fast page loads and server rendering
- Excellent image/font handling
- Easy creation of structured article pages
- Good foundation for search, glossary, category hubs, and future tools

### Styling
Use Tailwind CSS for the design system and component styling.

Keep the UI component-driven rather than filling pages with one-off utility combinations.

### UI primitives
Use a small accessible component layer based on Radix UI primitives where useful:
- Dialog
- Dropdown menu
- Tooltip
- Accordion
- Navigation menu
- Tabs

Do not make the site look like a component-library demo.

## Content

### Preferred CMS approach
Use a headless CMS that supports structured editorial content and drafts. Sanity, Payload, or a similar TypeScript-friendly CMS are good fits.

Model content as structured fields rather than putting everything into one rich-text blob.

Recommended article fields:

- title
- slug
- excerpt
- featured image
- author
- published date
- updated date
- reading time
- category
- subcategory
- tags
- table of contents
- body
- FAQ items
- related articles
- references/sources
- SEO title
- SEO description
- canonical URL
- noindex toggle

## Database

Use PostgreSQL when database-backed features are needed.

Suggested ORM: Prisma or Drizzle.

The database is primarily for:
- Search metadata
- Authors
- Categories
- Taxonomy
- Related content relationships
- Newsletter/subscriber metadata if required
- Future interactive tools

## Search

Start with a simple indexed content search. Move to Algolia, Typesense, Meilisearch, or an equivalent hosted/search engine when content volume justifies it.

Search should support:
- Article titles
- Categories
- Tags
- Glossary terms
- Short excerpts

## Hosting

Recommended production setup:

- Vercel for the Next.js application
- Cloudflare for DNS, CDN, caching, and security controls
- Managed PostgreSQL
- CMS hosted separately or through a managed service

Keep image assets on a proper image/CDN pipeline rather than storing large originals in the application repository.

## Analytics

Use privacy-conscious analytics. Track:
- Page views
- Search usage
- Popular articles
- Scroll depth where appropriate
- Outbound clicks
- Internal search queries

Do not let analytics scripts meaningfully delay article rendering.

---

# 3. Information Architecture

```text
/
├── /xtream/
│   ├── /xtream-codes/
│   ├── /xtream-api/
│   ├── /xtream-players/
│   └── /xtream-troubleshooting/
│
├── /guides/
│   ├── /beginners/
│   ├── /setup/
│   ├── /m3u/
│   └── /epg/
│
├── /devices/
│   ├── /fire-tv/
│   ├── /android-tv/
│   ├── /smart-tv/
│   └── /apple-tv/
│
├── /apps/
│   └── /iptv-players/
│
├── /troubleshooting/
│
├── /glossary/
│
├── /blog/
│
├── /about/
├── /contact/
├── /privacy/
├── /terms/
└── /disclaimer/
```

### Content hierarchy

**Xtream** is the identity layer.

**Guides** are the evergreen traffic engine.

**Devices and Apps** provide practical intent and future commercial opportunities.

**Troubleshooting** captures long-tail problems.

**Glossary** creates a dense internal-linking network around terminology.

**Blog** is the current/editorial layer and should not become the site's entire architecture.

---

# 4. Brand & Visual Direction

## Concept

### "Modern Editorial Tech"

The visual language should feel closer to a premium technology publication than a streaming sales page.

Think:
- Warm off-white reading surfaces
- Deep ink/navy typography
- Cool blue-violet accent
- Soft borders
- Subtle shadows
- Rounded corners, but not excessive pill shapes
- Editorial illustrations and diagrams
- Clear hierarchy

Use contrast primarily through typography, surfaces, borders, and spacing—not through bright effects.

## Color system

### Core colors

```text
Ink                #111827
Muted text         #5B6472
Soft text          #7A8492
Page background    #F5F7FA
Article surface    #FFFFFF
Subtle surface     #EEF2F7
Border             #DCE2EA
Accent             #4F46E5
Accent dark        #3730A3
Accent soft        #EEF0FF
Success            #15803D
Warning            #B45309
Danger             #B42318
```

Do not use all colors equally. Accent should be used selectively for links, active navigation, badges, buttons, and key callouts.

## Optional dark mode

Add dark mode after the light theme is polished.

Dark mode should use dark charcoal/navy surfaces rather than pure black, with slightly lowered text contrast for long reading comfort.

---

# 5. Typography

## Primary typeface

Use a highly readable modern sans-serif such as:

- Inter
- Geist
- Manrope

Preferred default: **Inter**.

## Article typography

Body text should be larger and calmer than the surrounding UI.

Recommended desktop:

- Body: 18px
- Line height: 1.75–1.85
- Paragraph spacing: 1.0–1.25em
- Article width: 680–760px

Recommended mobile:

- Body: 17px
- Line height: 1.7–1.8
- Article horizontal padding: 20px

## Headings

Use a clear editorial scale:

```text
H1 desktop: 48–56px / 1.05–1.12
H2 desktop: 32–38px / 1.15
H3 desktop: 24–28px / 1.2
H4 desktop: 19–22px / 1.3
```

On mobile, reduce sizes but preserve hierarchy.

Avoid giant marketing-style headlines inside article pages.

---

# 6. Layout System

## Global container

Use a centered max-width container around **1180–1240px**.

Header and major landing-page sections can use the full container.

Articles should intentionally be narrower.

## Article layout

```text
┌──────────────────────────────────────────────────────────┐
│ Header                                                   │
├──────────────────────────────────────────────────────────┤
│ Breadcrumbs                                               │
│                                                          │
│          ARTICLE HEADER                                  │
│          Category                                        │
│          H1                                              │
│          Excerpt                                         │
│          Author · Updated · Reading time                 │
│                                                          │
│       ┌──────────────────────────────────────┐           │
│       │                                      │           │
│       │        Featured image / visual       │           │
│       │                                      │           │
│       └──────────────────────────────────────┘           │
│                                                          │
│  ┌──────────────────┐   ┌────────────────────────────┐   │
│  │ On this page     │   │                            │   │
│  │                  │   │ Article body               │   │
│  │ section          │   │                            │   │
│  │ section          │   │ H2                         │   │
│  │ section          │   │ paragraphs                 │   │
│  │                  │   │ diagrams                   │   │
│  └──────────────────┘   │ tables                     │   │
│                         │ callouts                   │   │
│                         └────────────────────────────┘   │
│                                                          │
│ Related articles                                         │
├──────────────────────────────────────────────────────────┤
│ Footer                                                   │
└──────────────────────────────────────────────────────────┘
```

Desktop article grid:

- Left rail: 190–220px
- Main content: 700–760px
- Optional right whitespace / related content area
- Total reading region: approximately 1100–1180px

On mobile, collapse to a single reading column.

---

# 7. Header Design

## Desktop

```text
[LISTXTREAM]     Xtream   Guides   Devices   Apps   Troubleshooting   Blog     [⌕]
```

Characteristics:
- Height around 72px
- Thin bottom border
- Sticky on scroll
- White or lightly translucent surface
- No huge hero-style header

### Wordmark

LISTXTREAM should be typographic first. A small symbol can accompany it, but avoid a generic TV icon or play button as the entire logo.

## Mobile

```text
[☰]  LISTXTREAM                         [⌕]
```

Navigation opens as a proper full-height drawer.

---

# 8. Homepage Design

## Section 1 — Hero

Use a substantial but restrained hero.

```text
Eyebrow: IPTV & STREAMING RESOURCE

H1: Understand IPTV. Master Xtream.

Supporting copy:
Practical guides, explainers, device tutorials and
troubleshooting resources for modern streaming.

[Explore Xtream] [Browse Guides]
```

Add one editorial visual on the right on desktop. It should look like a technical diagram or abstract streaming/network illustration, not a TV-channel collage.

## Section 2 — Featured article

Large featured article with:
- Category label
- Large headline
- Short summary
- Thumbnail/illustration
- Updated metadata

## Section 3 — Explore Xtream

Three strong topic cards:

1. Xtream Codes
2. Xtream API
3. Xtream Troubleshooting

Keep these cards content-oriented, not app-dashboard-like.

## Section 4 — Popular guides

2-column or 3-column article grid.

Each card:
- Category
- Headline
- 1–2 line excerpt
- Reading time

Avoid putting large decorative imagery on every card.

## Section 5 — Learn by device

Horizontal or grid-based device navigation:

Fire TV · Android TV · Smart TV · Apple TV

## Section 6 — Troubleshooting

A more utilitarian section with a searchable/list format:

```text
Having a problem?

[ Search for a problem... ]

Buffering     EPG issues     Login errors     Playback issues
```

## Section 7 — Latest articles

Chronological feed, 4–6 articles.

## Section 8 — Newsletter / final CTA

Simple editorial subscription block.

Do not use aggressive marketing copy.

---

# 9. Article Page — Primary Design

The article template is the most important page in the system.

## Article header

```text
XTREAM API

What Is Xtream Codes API?

A beginner-friendly explanation of how Xtream API works,
what the credentials mean, and where the technology fits
into modern IPTV players.

By ListXtream Editorial · Updated Aug 2026 · 8 min read
```

### Metadata

Keep metadata small and muted.

The title should occupy the visual focus—not the author row.

## Table of contents

Desktop: sticky left rail.

Mobile: collapsible block above the article.

Use active-section highlighting as the reader scrolls.

## Reading experience

Use generous vertical rhythm.

Every 2–5 paragraphs, consider a useful visual interruption:
- Diagram
- Table
- Quote
- Tip box
- Example
- Step list

Do not insert decorative cards just to break whitespace.

---

# 10. Article Components

## Callout: Key takeaway

```text
┌──────────────────────────────────────┐
│ KEY TAKEAWAY                         │
│                                      │
│ Xtream API is a structured way      │
│ for supported IPTV players to       │
│ retrieve service information.       │
└──────────────────────────────────────┘
```

Use a soft tinted surface, subtle accent line, and strong label.

## Info box

Useful for definitions or context.

## Warning box

Use only when an article genuinely contains a warning or limitation.

## Step cards

For tutorials:

```text
01  Open the player settings

02  Choose the relevant connection type

03  Enter the required information
```

Make the number secondary; the instruction is the main element.

## Comparison table

Use tables for:
- Xtream API vs M3U
- Device comparisons
- Feature comparisons
- Troubleshooting symptoms

On mobile, use horizontal scrolling or convert rows into cards if the table becomes unreadable.

## Code / technical string blocks

Use a monospace font and a neutral code surface.

Never put sensitive or fabricated credentials into examples.

---

# 11. Article Image & Illustration Style

Images should support understanding rather than decorate pages.

Preferred visuals:
- Simple diagrams
- Device UI mockups
- Architecture diagrams
- Workflow illustrations
- Annotated screenshots
- Abstract streaming/network illustrations

Avoid:
- Stock photos of televisions
- Generic controller photos on every post
- Low-quality screenshots
- Huge full-bleed banners that push the article below the fold

### Image ratio

Primary article images: 16:9 or approximately 3:2.

Inline diagrams can use whatever ratio best communicates the information.

---

# 12. Category / Topic Hub Design

Each major category should have its own landing page.

Example: `/xtream/`

```text
XTREAM

Understand Xtream technologies, terminology,
APIs, players and troubleshooting.

[featured guide]

Xtream Codes
[articles]

Xtream API
[articles]

Troubleshooting
[articles]

Popular Xtream articles
[grid]
```

Category pages should be useful editorial indexes—not thin archives.

---

# 13. Search Experience

## Search trigger

Desktop: magnifying-glass icon in the header.

Mobile: icon plus a dedicated search page.

## Search overlay

```text
What are you looking for?

[ Xtream API, Fire TV, buffering... ]

Recent / Popular searches

RESULTS
────────────────────────
Xtream API Explained
What Is an M3U Playlist?
How to Fix IPTV Buffering
```

Show category and article type in search results.

Prioritize relevance over publication date, but allow filtering by topic.

---

# 14. Glossary Design

The glossary should feel like a reference tool.

Top:

```text
IPTV & XTREAM GLOSSARY

Search terminology...

A B C D E F G H I J K L M ... X
```

Then alphabetic terms.

Each term page should include:
- Plain-language definition
- More detailed explanation
- Related terms
- Relevant articles

Glossary terms should be linked contextually from articles where useful.

---

# 15. Responsive Rules

## Mobile is a first-class reading experience

Breakpoints can roughly follow:

- Mobile: < 768px
- Tablet: 768–1023px
- Desktop: >= 1024px
- Wide: >= 1280px

### Mobile priorities

1. Article title
2. Intro/excerpt
3. Metadata
4. Content
5. Sticky/collapsible TOC
6. Related content

Hide or collapse anything that interrupts reading.

### Mobile header

Keep it compact. No oversized menu controls.

### Mobile cards

Prefer one-column stacked cards. Avoid tiny 2-column article cards.

---

# 16. Accessibility

Target WCAG 2.2 AA where practical.

Requirements:
- Keyboard-accessible navigation
- Visible focus states
- Semantic headings
- Proper landmark elements
- Descriptive link text
- Accessible accordions and menus
- Sufficient text contrast
- Alt text for informative images
- Decorative images marked appropriately
- Avoid relying on color alone

Article typography should remain readable at browser zoom levels.

---

# 17. SEO Architecture

## Metadata

Every indexable page should have:
- Unique title
- Unique meta description
- Canonical URL
- Open Graph data
- Social image where useful

## Structured data

Use structured data appropriate to the content:
- Article
- BreadcrumbList
- FAQPage only when the page genuinely contains FAQ content
- WebSite
- Organization

Do not add schema merely for decoration; the markup should accurately represent visible page content.

## Internal linking

Every article should have:
- Links to parent topic
- Links to 2–5 closely related articles
- Links to relevant glossary terms
- A clear next/related reading path

Avoid forcing exact-match anchor text into every link.

---

# 18. Performance Rules

Target a fast content-first experience.

Rules:
- Server-render article content where possible
- Optimize images automatically
- Use responsive image sizes
- Lazy-load below-the-fold media
- Avoid heavy client-side JavaScript on article pages
- Keep third-party scripts limited
- Preload only critical fonts/assets
- Avoid autoplay video

The article body should remain usable even before non-essential interactive features load.

---

# 19. Component Architecture

Recommended component tree:

```text
app/
├── (site)/
│   ├── page.tsx
│   ├── xtream/
│   ├── guides/
│   ├── devices/
│   ├── apps/
│   ├── troubleshooting/
│   ├── glossary/
│   └── blog/
│
components/
├── layout/
│   ├── Header
│   ├── MobileNav
│   ├── Footer
│   └── Container
│
├── article/
│   ├── ArticleHeader
│   ├── ArticleBody
│   ├── TableOfContents
│   ├── ArticleMeta
│   ├── RelatedArticles
│   ├── KeyTakeaway
│   ├── InfoBox
│   ├── WarningBox
│   ├── Steps
│   └── ComparisonTable
│
├── cards/
│   ├── ArticleCard
│   ├── FeaturedArticle
│   ├── TopicCard
│   └── DeviceCard
│
├── search/
│   ├── SearchDialog
│   └── SearchResults
│
└── ui/
    ├── Button
    ├── Badge
    ├── Input
    ├── Accordion
    └── Divider
```

Build a small reusable design system before producing dozens of pages.

---

# 20. Design Tokens

Centralize the values rather than hardcoding everything per component.

```text
Spacing:
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96

Radius:
6px  / 10px / 14px / 18px

Shadow:
subtle  = very low elevation
card    = low elevation
modal   = medium elevation

Content width:
article = 700–760px
site    = 1180–1240px
```

Use fewer radius values. The site should feel coherent.

---

# 21. Buttons & Interactive Controls

Primary button:
- Filled accent color
- Compact, not huge
- 10–12px vertical padding
- Clear hover/focus state

Secondary button:
- White/neutral surface
- Border
- Dark text

Text links:
- Use accent color sparingly
- Underline on article-body links where helpful for readability

Avoid pill buttons everywhere.

---

# 22. Ad / Monetization Placement

Do not design the page around ads.

Reserve potential ad zones at natural breaks:
- After introductory content
- Mid-article after several sections
- Before related articles

Never place ads:
- Directly over text
- Inside navigation
- Between every short paragraph
- In a way that shifts the page unexpectedly

Build enough layout stability that future ads do not cause severe content jumping.

---

# 23. Trust & Editorial Signals

Because the topic can attract low-quality sites, ListXtream should deliberately look authoritative.

Use:
- Clear author identity
- Updated dates
- Editorial/about page
- Contact page
- Privacy and terms
- Transparent disclaimers
- Sources/references where appropriate
- Consistent writing quality
- No fake ratings or fabricated testimonials

A small "Reviewed / Updated" metadata pattern can be more useful than excessive trust badges.

---

# 24. What NOT to Do

Avoid these visual patterns:

- Pure black background with neon green everywhere
- Giant glowing play buttons
- Excessive glassmorphism
- Constant animated gradients
- Casino-style countdowns
- Huge red "GET ACCESS" buttons
- Three or four CTA buttons in every section
- Dense walls of tiny text
- Cards with no useful information
- Stock TV photographs repeated across every article
- Overly rounded "app dashboard" UI
- Huge hero banners before the reader can understand the page

ListXtream should feel like a **serious technology publication**, not a landing page for a streaming reseller.

---

# 25. First Build — Recommended Order

## Phase 1 — Foundation

1. Next.js + TypeScript
2. Tailwind CSS
3. Font setup
4. Design tokens
5. Header
6. Footer
7. Container/layout primitives
8. Core UI components

## Phase 2 — Editorial system

1. CMS schema
2. Article model
3. Category model
4. Author model
5. Glossary model
6. Related-content model
7. Article renderer
8. Table of contents

## Phase 3 — Core pages

1. Homepage
2. Xtream hub
3. Guides hub
4. Article page
5. Device hub
6. Troubleshooting hub
7. Glossary
8. Search

## Phase 4 — SEO/performance

1. Metadata system
2. Canonicals
3. Sitemap
4. Robots rules
5. Structured data
6. Image optimization
7. Core Web Vitals review

## Phase 5 — Growth features

1. Newsletter
2. Advanced search
3. Related-content automation
4. Author pages
5. Popular-content widgets
6. Interactive troubleshooting tools

---

# 26. Final Design Principle

The key design decision for ListXtream is to optimize for **comfortable reading over visual spectacle**.

The site should have enough character to be memorable, but the strongest visual element on an article page should always be the article itself.

### The intended feeling

> "This looks like a trustworthy technology publication that happens to specialize in IPTV and Xtream."

Not:

> "This looks like an IPTV sales page with a blog attached."

That distinction should guide every future design and technical decision.
