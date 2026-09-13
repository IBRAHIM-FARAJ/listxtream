# ListXtream — Phase 3: Content Strategy & Architecture

**Date:** Sep 2026  
**Status:** Strategy complete — awaiting approval before any implementation  
**Scope:** Content pillars, topic clusters, gap analysis, roadmap, linking model, glossary plan, quality standards

---

## 1. Executive Summary

ListXtream's technical foundation is now sound. The architecture is clean, the SEO layer is in place, and the content system is well-designed. The problem is simple: 10 articles averaging 225 words cannot support the ambition of a professional knowledge platform. The structure is running five times ahead of the substance.

**What this strategy does:**

- Locks the final content pillar structure (no changes to the route hierarchy)
- Defines topical clusters for each pillar so future articles form a semantic network, not an isolated pile
- Identifies 30+ content gaps, prioritized by user value and topical authority
- Recommends the first 20 articles to publish, in order
- Establishes editorial quality standards and article formats
- Defines an internal linking model so each new piece strengthens the others

**The central strategic bet:** The Xtream cluster is ListXtream's primary differentiator. No mainstream editorial IPTV site has a dedicated, technically serious section on Xtream Codes and the Xtream API. That gap is the opportunity. The first 20 articles are weighted toward filling it while simultaneously building the foundational IPTV content that earns beginner trust.

**What this strategy does not do:**

- Start a CMS — the TypeScript array content model scales cleanly to 50–60 articles; a CMS belongs at Phase 4 (around 25 articles)
- Recommend a redesign — no visual changes are called for at this stage
- Authorise writing the articles — that is Phase 4

---

## 2. Final Content Pillars

The existing seven-item nav is correct. No changes to top-level routes. Below is the evaluated case for each pillar.

### Pillar 1 — Xtream

**Purpose:** Establish ListXtream as the most technically serious English-language resource on the Xtream Codes format and Xtream API.  
**Audience:** IPTV users who already use Xtream credentials and want to understand what they're doing; developers integrating with the API; troubleshooters.  
**Search intent:** Informational + navigational + troubleshooting  
**Priority:** Highest  
**Target articles:** 12–16  
**Rationale:** This is the site's name. No other editorial site owns this space. The gap is real and large.

**Sub-sections:**
- `/xtream/xtream-codes` — what Xtream Codes is, the credential format, the history
- `/xtream/xtream-api` — how the API works, endpoints, response formats
- `/xtream/xtream-players` — which players support the Xtream API and why
- `/xtream/xtream-troubleshooting` — error codes, login failures, blank lists

### Pillar 2 — Guides

**Purpose:** IPTV fundamentals for beginners through intermediate users. The entry point for users who arrive not knowing what IPTV is.  
**Audience:** Newcomers, users confused by terminology, users setting up a player for the first time.  
**Search intent:** Informational + task-oriented  
**Priority:** High (second only to Xtream)  
**Target articles:** 14–18  
**Rationale:** Without foundational content (What is IPTV? How does it work? What is M3U?) the site has no beginner funnel. These articles also create the internal linking substrate for the whole site.

**Sub-sections:**
- `/guides/beginners` — IPTV concepts, protocols, terminology (pure education)
- `/guides/setup` — task-oriented: login, add playlist, configure, catch-up
- `/guides/m3u` — M3U/M3U8 deep dive, EXTINF, playlist structure
- `/guides/epg` — EPG concept, XMLTV format, setup, troubleshooting

### Pillar 3 — Devices

**Purpose:** Device-specific setup guides that answer "how do I get IPTV working on [my device]?"  
**Audience:** Users who just bought a specific device.  
**Search intent:** Navigational + task  
**Priority:** Medium-high  
**Target articles:** 8–12  
**Rationale:** Device guides are high-intent (user ready to act) and easy to cross-link. Each one should include a player recommendation, a credential entry guide, and common device-specific issues.

**Sub-sections:**
- `/devices/fire-tv` — (1 article exists, needs improvement)
- `/devices/android-tv` — (1 article exists, needs improvement)
- `/devices/smart-tv` — (0 articles — Samsung, LG, Hisense)
- `/devices/apple-tv` — (0 articles — tvOS players are limited, worth a guide)
- Future: `/devices/roku`, `/devices/ios`, `/devices/windows`

### Pillar 4 — Apps

**Purpose:** Help users choose and configure IPTV player applications.  
**Audience:** Users evaluating players or stuck on a specific app's configuration.  
**Search intent:** Commercial investigation + task  
**Priority:** Medium  
**Target articles:** 8–12  
**Rationale:** "Best IPTV player" is high-volume search. Per-player setup guides create their own search demand (e.g., "Tivimate setup guide") and build strong internal links with device guides.

**Sub-section:**
- `/apps/iptv-players` — overview roundup + per-player guides (as `/article/[slug]`)

**Note on overlap with Xtream Players:** `/xtream/xtream-players` covers which players support the Xtream API specifically. `/apps/iptv-players` covers the player landscape broadly (M3U support, UI, device availability). Keep both — they serve different intents.

### Pillar 5 — Troubleshooting

**Purpose:** Fix-it content for users already experiencing problems.  
**Audience:** Frustrated users mid-problem.  
**Search intent:** Transactional (fix my thing, now)  
**Priority:** High (converts readers to advocates when it works)  
**Target articles:** 10–14  
**Rationale:** Troubleshooting content has high click-through (user is in pain), high time-on-page (they're reading carefully), and strong internal linking potential back to concept articles. Two articles exist; eight major problem types remain uncovered.

### Pillar 6 — Glossary

**Purpose:** Terminological authority and long-tail SEO. Each term page is a small, self-contained educational piece.  
**Audience:** Anyone who encounters an unfamiliar term.  
**Search intent:** Informational (definitional)  
**Priority:** Medium — runs parallel to article publishing; 2–3 new terms per article published  
**Target terms:** 40–50  
**Rationale:** Currently 7 terms. Every article introduces 3–5 terms that should be glossary entries. The glossary also creates a dense internal linking network once it reaches critical mass.

### Pillar 7 — Blog

**Purpose:** Editorial content: player release notes, streaming format changes, IPTV industry news, opinion.  
**Audience:** Existing readers who want to stay current.  
**Search intent:** Informational / navigational (return visits)  
**Priority:** Low (start after 20+ core articles exist)  
**Target articles:** 1–2 per month once active  
**Rationale:** Blog content builds recency signals and gives ListXtream an editorial voice. However, publishing blog posts before the foundational content exists inverts the priorities. Blog stays dormant until Phase 5.

---

## 3. Topic Clusters

### Xtream Cluster

```
/xtream (hub)
│
├── /xtream/xtream-codes
│   ├── What are Xtream Codes? (history, the credential format)
│   ├── Server / Username / Password: IPTV Credentials Explained
│   ├── How to Test Your Xtream Credentials
│   └── Xtream Codes vs Xtream API (terminology disambiguation)
│
├── /xtream/xtream-api
│   ├── What Is the Xtream Codes API? (exists — improve)
│   ├── Xtream API Endpoints and Response Formats
│   ├── Xtream API Authentication Flow Explained
│   ├── Live, VOD and Series in the Xtream API
│   ├── EPG via the Xtream API
│   └── M3U vs Xtream API (exists — keep)
│
├── /xtream/xtream-players
│   ├── Which IPTV Players Support the Xtream API?
│   └── Xtream API Setup in [Player] — cross-links from player guides
│
└── /xtream/xtream-troubleshooting
    ├── Common Xtream API Errors and What They Mean
    ├── Xtream Login Error: Causes and Fixes
    └── Blank Channel List After Xtream Login
```

### Guides — Beginners Cluster

```
/guides (hub)
│
└── /guides/beginners
    ├── What Is IPTV? (MISSING — P0)
    ├── How Does IPTV Work? (MISSING — P0)
    ├── What Is OTT Streaming? (MISSING — P1)
    ├── IPTV Protocols Explained: HLS, RTMP, RTSP (MISSING — P1)
    ├── Codec Basics for IPTV: H.264, H.265 and AV1 (MISSING — P1)
    ├── Streaming Bitrate and Quality Explained (MISSING — P2)
    └── IPTV vs Cable TV (MISSING — P2, careful framing)
```

### Guides — Setup Cluster

```
└── /guides/setup
    ├── How to Log In to an IPTV Player (exists — improve)
    ├── IPTV Network Requirements: Speed and Setup (MISSING — P0)
    ├── How to Add an M3U Playlist to a Player (MISSING — P1)
    ├── How to Set Up Catch-Up TV (MISSING — P2)
    └── How to Organise Channels in an IPTV Player (MISSING — P2)
```

### Guides — M3U Cluster

```
└── /guides/m3u
    ├── What Is an M3U Playlist? (exists — improve)
    ├── M3U vs M3U8: What Is the Difference? (MISSING — P1)
    ├── M3U EXTINF Attributes Explained (MISSING — P2)
    └── How to Validate and Debug an M3U File (MISSING — P3)
```

### Guides — EPG Cluster

```
└── /guides/epg
    ├── What Is an Electronic Program Guide (EPG)? (MISSING — P0)
    ├── How to Set Up EPG in an IPTV Player (exists — improve)
    ├── XMLTV Format Explained (MISSING — P2)
    └── How to Fix EPG Not Showing (MISSING — P2)
```

### Devices Cluster

```
/devices (hub)
├── /devices/fire-tv
│   ├── How to Set Up IPTV on Fire TV (exists — improve)
│   └── Best IPTV Players for Fire TV (MISSING — P2)
├── /devices/android-tv
│   ├── How to Set Up IPTV on Android TV (exists — improve)
│   └── Best IPTV Players for Android TV (MISSING — P2)
├── /devices/smart-tv
│   ├── How to Set Up IPTV on a Samsung Smart TV (MISSING — P1)
│   ├── How to Set Up IPTV on an LG Smart TV (MISSING — P1)
│   └── IPTV on Smart TV: Browser vs App (MISSING — P2)
└── /devices/apple-tv
    └── How to Set Up IPTV on Apple TV (MISSING — P1)
```

### Apps Cluster

```
/apps (hub)
└── /apps/iptv-players
    ├── Best IPTV Players in 2026 (exists — rewrite)
    ├── Tivimate Setup Guide (MISSING — P1)
    ├── IPTV Smarters Pro Setup Guide (MISSING — P2)
    ├── GSE Smart IPTV Setup Guide (MISSING — P2)
    ├── OTT Navigator Setup Guide (MISSING — P2)
    ├── VLC for IPTV (Desktop) (MISSING — P2)
    └── Kodi for IPTV: PVR IPTV Simple Client (MISSING — P3)
```

### Troubleshooting Cluster

```
/troubleshooting (hub)
├── How to Fix an IPTV Login Error (exists — improve)
├── How to Fix IPTV Buffering (exists — improve)
├── How to Fix a Blank IPTV Channel List (MISSING — P1)
├── How to Fix EPG Not Showing (MISSING — P2)
├── How to Fix Audio Without Video on IPTV (MISSING — P2)
├── How to Fix IPTV App Crashing (MISSING — P2)
├── IPTV Slow Channel Zapping: Causes and Fixes (MISSING — P2)
├── How to Fix a Black Screen on IPTV (MISSING — P2)
├── How to Read an IPTV Error Message (MISSING — P2)
└── IPTV Not Working: Full Diagnostic Checklist (MISSING — P3)
```

---

## 4. Content Gaps

Gaps ordered by priority.

| # | Missing Article | Parent Cluster | Why It Matters | Priority |
|---|---|---|---|---|
| 1 | What Is IPTV? | Guides/Beginners | Parent concept for the entire site. No homepage context without it. | P0 |
| 2 | How Does IPTV Work? | Guides/Beginners | Technical foundation. All protocol/codec articles descend from this. | P0 |
| 3 | What Is EPG? | Guides/EPG | The setup article exists but the concept article doesn't. Glossary entry alone is insufficient. | P0 |
| 4 | IPTV Network Requirements | Guides/Setup | High-intent query. Buffering article currently has no "how fast do you need to be?" answer. | P0 |
| 5 | Server/Username/Password Explained | Xtream/Codes | The most searched Xtream-related question. Currently only touched in the API overview. | P0 |
| 6 | Xtream API Endpoints Reference | Xtream/API | Core technical differentiator. What the API actually returns. No site covers this properly. | P0 |
| 7 | Blank Channel List Fix | Troubleshooting | Distinct from login error. Very common complaint. Currently zero coverage. | P1 |
| 8 | What Is VOD in IPTV? | Guides/Beginners | VOD mentioned throughout; never explained. Important for Xtream API article cross-links. | P1 |
| 9 | IPTV Protocols Explained | Guides/Beginners | HLS, RTMP, RTSP, UDP — users encounter these terms constantly. | P1 |
| 10 | Codec Basics for IPTV | Guides/Beginners | H.264 vs H.265 — hardware decoder setting is mentioned in two articles with no explanation. | P1 |
| 11 | Tivimate Setup Guide | Apps | Most popular Android IPTV player by a significant margin. Currently unnamed in any article. | P1 |
| 12 | IPTV on Smart TV | Devices/Smart-TV | Empty page since launch. Samsung and LG are the most common smart TV brands. | P1 |
| 13 | IPTV on Apple TV | Devices/Apple-TV | Empty page since launch. Smaller audience but high intent. | P1 |
| 14 | How to Test Xtream Credentials | Xtream/Codes | Common need before and after player setup. A diagnostic guide with real URL patterns. | P1 |
| 15 | Common Xtream API Errors | Xtream/Troubleshooting | 401, 403, blank responses — explained with real error text. Major differentiator. | P1 |
| 16 | M3U vs M3U8 | Guides/M3U | Constantly confused. The M3U article partially covers this but not as a standalone. | P1 |
| 17 | IPTV Smarters Setup | Apps | Second most popular Xtream-compatible player. | P2 |
| 18 | Catch-Up TV Setup | Guides/Setup | Time-shifting is an Xtream API feature. Logical next step after EPG setup. | P2 |
| 19 | Bitrate and Streaming Quality | Guides/Beginners | Referenced in buffering article, never explained. | P2 |
| 20 | M3U EXTINF Attributes | Guides/M3U | Technical depth article. Useful for users building their own playlists. | P2 |
| 21 | EPG Not Showing Fix | Troubleshooting | Distinct from "how to set up EPG" — covers the failure case. | P2 |
| 22 | How to Read an IPTV Error | Troubleshooting | Meta-troubleshooting. Helps users self-diagnose. | P2 |
| 23 | Samsung Smart TV IPTV | Devices/Smart-TV | Brand-specific sub-guide needed under smart-tv hub. | P1 |
| 24 | LG Smart TV IPTV | Devices/Smart-TV | Brand-specific sub-guide. | P1 |
| 25 | VLC for IPTV | Apps | VLC is installed on hundreds of millions of devices. Desktop IPTV guide. | P2 |

**Critical observation on the Xtream cluster:** The existing article (`what-is-xtream-codes-api`) conflates "Xtream Codes" (the credential format) with the Xtream API (the protocol). These are related but distinct concepts. Separating them into distinct articles will significantly improve topical clarity and search coverage.

---

## 5. Existing Article Evaluation

### what-is-xtream-codes-api → **IMPROVE + RENAME**

**Current state:** ~350 words of body content. Good block structure (takeaway, info, comparison). Title says "Xtream Codes API" but the content is about the API only. The Xtream Codes credential format (server/username/password as the login scheme) is not properly covered.

**Actions:**
- Rename to "What Is the Xtream API?" or "How the Xtream API Works"
- Write a separate "What Are Xtream Codes?" article focused on the credential format
- Expand body to 900–1,200 words with actual API response examples
- Add real endpoint examples: `/player_api.php?username=X&password=Y&action=get_live_categories`
- Fix `topics: ["Xtream", "API"]` — these must match glossary slugs to enable the Related Terms block

### what-is-an-m3u-playlist → **IMPROVE**

**Current state:** ~280 words. Solid structure. Has a code block (good). Missing: EXTINF attribute breakdown, channel logo handling, playlist URL format, difference from M3U8 as standalone concept.

**Actions:**
- Expand to 700–900 words
- Add a proper EXTINF attributes table
- Add section on getting your playlist URL from a provider (generically)
- Cross-link to new M3U vs M3U8 article

### m3u-vs-xtream-api → **KEEP + MINOR IMPROVE**

**Current state:** ~220 words. Best-structured article in the set. Comparison table is clear. Good takeaway.

**Actions:**
- Keep structure
- Expand "When M3U is better" and "When Xtream is better" sections with concrete scenarios
- Target ~500–600 words total (it doesn't need to be long)
- Add a "Decision guide" paragraph summarizing when each is right

### how-to-login-iptv-player → **IMPROVE**

**Current state:** ~180 words. Dangerously thin for a tutorial. Named no player. The phrase "your provider's setup sheet" is the only advice for users who don't know which type to choose.

**Actions:**
- Expand to 600–800 words
- Name actual common players (Tivimate, IPTV Smarters, GSE) with their specific field labels
- Add a section: "What if you don't know which connection type to use?"
- Add a section: "After login — what happens next?"
- Add `type: "warning"` about case-sensitive fields

### iptv-login-error → **IMPROVE**

**Current state:** ~220 words. Good structure (numbered checklist, warning). But contains no actual error message text. Users search for their specific error string ("user not found", "connection error", "expired").

**Actions:**
- Expand to 700–900 words
- Add a table of common error messages and their causes
- Add section: "Errors from the server vs errors from the app"
- Link to new "Common Xtream API Errors" article

### fix-iptv-buffering → **IMPROVE**

**Current state:** ~250 words. Good structure. Has a checklist table (best visual element in the set). Missing: specific speed requirements, hardware decoder explanation, player buffer size settings.

**Actions:**
- Expand to 900–1,100 words
- Add: "How much internet speed do you need for IPTV?" (link to network requirements article)
- Add: "What hardware decoding does" with 2-sentence explanation
- Add: VPN as a potential buffering cause section

### setup-epg-iptv → **IMPROVE**

**Current state:** ~200 words. Steps exist but are vague. Missing: what XMLTV is, why channel IDs matter, how to find an EPG source URL, timezone mismatch diagnosis.

**Actions:**
- Expand to 600–800 words
- Link to new "What Is EPG?" article for the concept
- Add XMLTV format note with example
- Add troubleshooting section: "Channel IDs don't match" with fix steps

### setup-iptv-fire-tv → **IMPROVE**

**Current state:** ~230 words. Good tutorial structure. Doesn't name any player. "Search for a supported IPTV player" is too vague.

**Actions:**
- Expand to 700–900 words
- Name the top Fire TV players explicitly (Tivimate LITE, IPTV Smarters, OTT Navigator)
- Add sideloading section (Downloader app method)
- Add performance section with Fire Stick hardware context

### setup-iptv-android-tv → **IMPROVE**

**Current state:** ~200 words. Good structure. Same issue as Fire TV guide — no named players.

**Actions:**
- Expand to 700–900 words
- Name top Android TV players
- Add: Google TV vs Android TV distinction
- Add: which players are on Play Store vs require sideloading

### best-iptv-players-2026 → **REWRITE**

**Current state:** ~160 words. Recommends no player by name. Has a "Polish, polish" duplicate cell bug in the comparison table. Cannot function as a roundup without named players.

**Actions:**
- Full rewrite at 1,000–1,400 words
- Evaluate and name 5–7 players with honest pros/cons
- Fix the table bug
- Add a "How we selected these" section (credibility signal)
- Each player should link to a dedicated setup guide (creates internal linking demand for player articles)

---

## 6. Priority Roadmap

### P0 — Essential (publish before anything else)

These articles form the foundational content layer. No cluster can fully function without them.

| Title | Cluster | Why P0 |
|---|---|---|
| What Is IPTV? | Guides/Beginners | Parent concept for the whole site. Enables all internal links referencing "IPTV". |
| How Does IPTV Work? | Guides/Beginners | Technical foundation. Protocol and codec articles need a parent. |
| What Is an Electronic Program Guide (EPG)? | Guides/EPG | The setup article exists but the concept article is missing. Every EPG-adjacent article needs to link here. |
| IPTV Network Requirements: Speed and Setup | Guides/Setup | The buffering article and the login tutorial both need a "how fast do you need?" reference. |
| Your Xtream Credentials: Server, Username and Password Explained | Xtream/Codes | The most common Xtream query. The current API article doesn't answer this properly. |
| Xtream API Endpoints and Response Formats | Xtream/API | Core technical differentiator. A proper reference with real API path examples. |

### P1 — High Value

| Title | Cluster |
|---|---|
| How to Fix a Blank IPTV Channel List | Troubleshooting |
| What Is VOD in IPTV? | Guides/Beginners |
| IPTV Protocols Explained: HLS, RTMP, RTSP and UDP | Guides/Beginners |
| Codec Basics for IPTV: H.264, H.265 and AV1 | Guides/Beginners |
| Tivimate: Complete Setup Guide | Apps |
| How to Set Up IPTV on a Samsung Smart TV | Devices/Smart-TV |
| How to Set Up IPTV on an LG Smart TV | Devices/Smart-TV |
| How to Set Up IPTV on Apple TV | Devices/Apple-TV |
| How to Test Your Xtream Credentials | Xtream/Codes |
| Common Xtream API Errors Explained | Xtream/Troubleshooting |
| M3U vs M3U8: What Is the Difference? | Guides/M3U |

### P2 — Supporting

| Title | Cluster |
|---|---|
| IPTV Smarters Pro: Complete Setup Guide | Apps |
| How to Set Up Catch-Up TV on an IPTV Player | Guides/Setup |
| Streaming Bitrate and Video Quality Explained | Guides/Beginners |
| M3U EXTINF Attributes Explained | Guides/M3U |
| How to Fix EPG Not Showing | Troubleshooting |
| How to Fix Audio Without Video on IPTV | Troubleshooting |
| How to Fix a Black Screen on IPTV | Troubleshooting |
| VLC for IPTV on Desktop | Apps |
| Best IPTV Players for Fire TV | Devices/Fire-TV |
| Best IPTV Players for Android TV | Devices/Android-TV |
| XMLTV Format Explained | Guides/EPG |
| How to Organise Channels in an IPTV Player | Guides/Setup |
| How to Read an IPTV Error Message | Troubleshooting |
| GSE Smart IPTV: Setup Guide | Apps |
| OTT Navigator: Setup Guide | Apps |

### P3 — Future

| Title | Cluster |
|---|---|
| Kodi for IPTV: PVR IPTV Simple Client | Apps |
| IPTV on Roku | Devices |
| IPTV on iOS and iPhone | Devices |
| IPTV on Windows | Devices |
| IPTV on Chromecast with Google TV | Devices |
| DNS and IPTV Performance | Guides/Setup |
| IPTV Security Basics | Guides |
| Multicast vs Unicast IPTV | Guides/Beginners |
| 4K IPTV: Requirements and Setup | Guides/Beginners |
| Live, VOD and Series in the Xtream API (deep dive) | Xtream/API |
| IPTV Not Working: Full Diagnostic Checklist | Troubleshooting |
| Slow Channel Zapping: Causes and Fixes | Troubleshooting |

---

## 7. Internal Linking Strategy

### The model

Every article sits in exactly one cluster. Every cluster feeds into one hub. Every hub page is reachable from the main nav. Articles cross-link between clusters when the topic is genuinely related.

```
Home
└── Hub (/xtream, /guides, /devices, etc.)
    └── Sub-hub (/xtream/xtream-api)
        └── Article (/article/slug)
            ├── Related articles (same or adjacent cluster)
            └── Glossary terms (inline links)
```

### Linking rules

**Hub → cluster:** Each hub page (`TopicLanding`) automatically surfaces articles via `getArticlesByCategory`. Ensure `categoryHref` on every article is set correctly.

**Article → related articles:** Use the `related` field in the Article type. Maximum 4. Preference:
1. One article from the same cluster (deepen the topic)
2. One article from an adjacent cluster (widen the context)
3. One troubleshooting article (practical exit when something goes wrong)
4. One glossary-adjacent entry point (only if a standalone term page would answer a follow-up question)

**Article → glossary terms:** Every technical term used in body text that has a glossary entry should be linked on first use. The `ArticleBlock` system supports plain text with links via the paragraph type; this can be achieved by using `<a href="/glossary/[slug]">term</a>` within paragraph text. (Note: this requires either MDX or allowing inline HTML in paragraph blocks — evaluate in Phase 4.)

**Glossary → articles:** Each glossary term's `related` field already links to other terms. Add: `relatedArticles` field to `GlossaryTerm` so each term page can surface 1–3 articles that cover that concept in depth.

**Orphan pages (current):**
- `/xtream/xtream-codes` — no articles with `categoryHref: /xtream/xtream-codes` yet
- `/xtream/xtream-players` — empty
- `/xtream/xtream-troubleshooting` — empty
- `/guides/beginners` — empty
- `/devices/smart-tv` — empty
- `/devices/apple-tv` — empty

These are no longer in the sitemap (fixed in Phase 2), but they show an empty state to users. P0–P1 articles must fill them. Target: no empty sub-hub pages after the first 20 articles.

**Breadcrumbs:** Already implemented in article and glossary dynamic routes. Ensure `categoryHref` and `category` on every article are correct and human-readable.

**Learning paths:** Once 8+ beginner articles exist, add a "Start here" section to the Guides hub and the homepage that links through:
> What is IPTV → How IPTV works → What is M3U → M3U vs Xtream API → How to Log In → Login Errors → Buffering

This is not a route change — it's a content section on existing pages.

---

## 8. Glossary Strategy

### Current state

7 terms: EPG, IPTV, M3U, Xtream API, Xtream Codes, M3U8, XMLTV

### Target state

40–50 terms. The glossary is a long-tail SEO asset: each term page can rank for "[term] meaning", "[term] IPTV", "what is [term]".

### Addition cadence

Add 3–5 terms per new article published. Terms should be defined when first added to articles. The existing `GlossaryTerm` type has `term`, `slug`, `letter`, `definition`, `detail`, and `related`. This is sufficient — no schema changes needed.

### Prioritised additions

**Tier 1 — Add with P0 articles:**

| Term | Slug | Why |
|---|---|---|
| HLS | hls | Referenced in protocols article, buffering, player settings |
| VOD | vod | Xtream API has VOD endpoints; whole article on it |
| Live TV | live-tv | Core concept; used throughout |
| Bitrate | bitrate | Buffering and quality articles reference it |
| Codec | codec | Hardware decoding setting mentioned without explanation |
| H.264 | h264 | Most common video codec; directly relevant |
| H.265 | h265 | Increasingly common; 4K streams often use it |
| OTT | ott | "Over the Top" — foundational framing concept |
| Bandwidth | bandwidth | Distinct from bitrate; commonly confused |
| Buffer | buffer | The component, not the problem. Latency and jitter context. |
| Latency | latency | Affects zapping speed; mentioned in troubleshooting |
| Streaming | streaming | Surprisingly underdefined on the site |
| Provider | provider | Used 20+ times; never defined |
| IPTV Player | iptv-player | Used everywhere; needs a definition page |
| Playlist | playlist | Core concept; M3U article uses it without defining it |
| Credentials | credentials | Xtream login context; referenced constantly |
| Port | port | Server URL has a port; users see `:8080` without understanding |

**Tier 2 — Add with P1 articles:**

| Term | Slug |
|---|---|
| RTMP | rtmp |
| RTSP | rtsp |
| UDP | udp |
| Transcoding | transcoding |
| Catch-Up TV | catch-up-tv |
| Time-Shifting | time-shifting |
| APK | apk |
| Sideloading | sideloading |
| Authentication | authentication |
| Category | category |
| Resolution | resolution |
| Frame Rate | frame-rate |

**Tier 3 — Add with P2 articles:**

| Term | Slug |
|---|---|
| DNS | dns |
| CDN | cdn |
| EXTINF | extinf |
| EXTM3U | extm3u |
| Unicast | unicast |
| Multicast | multicast |
| Jitter | jitter |
| Packet Loss | packet-loss |
| Hardware Decoding | hardware-decoding |
| NAT | nat |

### Glossary schema addition (Phase 4)

Add `relatedArticles?: string[]` to `GlossaryTerm` type to link back from term pages to articles. This is a one-line type change and two lines per term. Implement when the first batch of Tier 1 terms is published.

---

## 9. Article Quality Standard

Every article published to ListXtream must meet this standard before merging into `articles.ts`.

### Mandatory elements

| Element | Requirement |
|---|---|
| Title | Specific, includes the primary keyword, ≤ 65 characters |
| Excerpt | 1–2 sentences, states exactly what the reader will learn, ≤ 160 characters |
| Reading time | Accurate at 250 wpm. Do not claim 10 min read for a 400-word article. |
| `publishedIso` | ISO-8601, accurate date |
| `updatedIso` | ISO-8601, update date on any substantive revision |
| Opening paragraph | Addresses the reader's actual question within the first 3 sentences |
| Key Takeaway block | Required on concept articles, guides, and troubleshooting articles |
| H2 headings | Minimum 2, maximum 6 per article. Each must be scannable on its own. |
| Body length | Beginner guide: 500–800 words. Technical explainer: 800–1,400. Tutorial: 600–1,000. Troubleshooting: 600–900. Comparison: 400–700. |
| At least one | Code block, comparison table, or numbered list per guide/technical article |
| Related articles | 2–4, set in `related` field, must exist |
| No placeholders | No "coming soon", no "this article will be updated", no lorem |
| No piracy framing | No references to provider credentials, subscription sources, or subscription prices |
| No inflated claims | Do not say a reader will "master" something in a 300-word article |
| Last updated | `updated` display string and `updatedIso` must be set and accurate |

### Strongly recommended elements

- A `warning` block for any action that could cause data loss, security risk, or service disruption
- An `info` block for important context that isn't a warning
- At least one concrete, specific example (a real API path, a real error string, a real player field label)
- A closing paragraph that states what the reader should do next

### What we do not do

- Inflate articles with padding to hit a word count
- Duplicate content to rank for plurals or minor keyword variations
- Create thin pages that paraphrase other articles
- Make recommendations without a stated reason
- Attribute quotes or statistics without identifying the source
- Name providers or subscriptions in a way that could be construed as endorsement of a service's content

---

## 10. Article Types

### Type 1: Beginner Guide ("What is X?")

**Purpose:** Define a concept, explain why it matters, and orient the reader.  
**Ideal length:** 500–800 words  
**Structure:**
1. Key Takeaway block
2. Definition (H2)
3. Why it matters to you (H2)
4. How it relates to [adjacent concept] (H2)
5. Related terms links
6. Related articles

**When to use:** First-touch articles for unfamiliar terms or concepts. IPTV, EPG, VOD, OTT, codec, bitrate.

---

### Type 2: Technical Explainer ("How X works")

**Purpose:** Go deeper than a definition. Explain mechanism, protocol structure, or API behaviour with examples.  
**Ideal length:** 900–1,400 words  
**Structure:**
1. Short intro (2 sentences)
2. Key Takeaway block
3. The mechanism at a high level (H2)
4. Technical detail with code or comparison block (H2)
5. Common variants or edge cases (H2, H3)
6. What this means for you (H2)
7. Related concepts

**When to use:** Xtream API endpoints, IPTV protocols, HLS segment delivery, codec comparison.

---

### Type 3: Step-by-Step Tutorial ("How to do X")

**Purpose:** Walk the reader through a task with numbered steps.  
**Ideal length:** 600–1,000 words  
**Structure:**
1. Short intro stating the outcome ("After these steps, you will have...")
2. What you will need (H2, bullet list)
3. Steps (H2, ordered list or numbered H3 sections)
4. Warning blocks around risky steps
5. What to do if it does not work (H2, links to troubleshooting)

**When to use:** Login tutorial, EPG setup, device setup, player configuration.

---

### Type 4: Troubleshooting Guide ("How to fix X")

**Purpose:** Diagnose and resolve a specific problem, in order of likelihood.  
**Ideal length:** 600–900 words  
**Structure:**
1. Key Takeaway block (most common cause in one sentence)
2. Check 1 (H2) → H3 steps
3. Check 2 (H2) → H3 steps
4. Check 3 (H2)
5. When none of this works (H2) — escalation path
6. Related: other problems this reader might hit

**When to use:** Login error, buffering, blank channel list, EPG missing, audio only.

---

### Type 5: Comparison ("X vs Y")

**Purpose:** Help the reader choose between two approaches.  
**Ideal length:** 400–700 words  
**Structure:**
1. Key Takeaway (the recommendation in one sentence)
2. Comparison table (H2)
3. When X is better (H2)
4. When Y is better (H2)
5. The verdict + recommendation

**When to use:** M3U vs Xtream API (exists), H.264 vs H.265, hardware vs software decoding.

---

### Type 6: Device Guide

**Purpose:** Set up IPTV on a specific device. Device-specific quirks prominently featured.  
**Ideal length:** 700–1,000 words  
**Structure:**
1. Short intro (what device quirks to expect)
2. Recommended players for this device (H2, bulleted)
3. Install the player (H2, steps)
4. Add your connection (H2, steps)
5. Device-specific settings (H2)
6. Common issues on this device (H2)

**When to use:** Fire TV, Android TV, Smart TV, Apple TV guides.

---

### Type 7: Player Guide

**Purpose:** Set up and use a specific IPTV player application.  
**Ideal length:** 800–1,100 words  
**Structure:**
1. Player overview and supported connection types (H2)
2. Where to download (H2)
3. Adding your service via Xtream (H2, steps)
4. Adding your service via M3U (H2, steps)
5. Configuring EPG (H2)
6. Player-specific features worth knowing (H2)
7. Common issues (H2)

**When to use:** Tivimate, IPTV Smarters, GSE, OTT Navigator, VLC.

---

### Type 8: Reference Article

**Purpose:** A structured reference a reader returns to rather than reads once.  
**Ideal length:** 1,000–1,600 words  
**Structure:** Heavy use of code blocks, comparison tables, definition lists. Minimal prose between them. Clear H2 navigation.

**When to use:** Xtream API endpoints, M3U EXTINF attributes, error code reference.

---

### Type 9: Roundup ("Best X for Y")

**Purpose:** Recommend a short-list of tools with honest evaluation criteria stated upfront.  
**Ideal length:** 1,000–1,400 words  
**Structure:**
1. How we selected (H2, criteria stated explicitly)
2. Summary comparison table (H2)
3. [Player 1] (H2) — pros, cons, who it is for
4. [Player 2] (H2) — same
5. Our pick (H2) — recommendation with reasoning
6. Related guides

**When to use:** Best IPTV players, best players for [device].

---

### Type 10: Glossary Term

**Purpose:** Define a term precisely and link it into the knowledge network.  
**Ideal length:** 150–300 words  
**Structure:** `definition` (one sentence), `detail` (2–3 sentences), `related` (2–4 terms). In the glossary data structure, not as full articles.

---

## 11. Recommended Information Architecture

This is the target state after publishing the first 20 articles. No new routes are created — this is the existing structure populated with content.

```
Home
│
├── Xtream  /xtream
│   ├── [Hub lists all Xtream articles by cluster]
│   ├── Xtream Codes  /xtream/xtream-codes
│   │   ├── Your Xtream Credentials Explained
│   │   ├── What Are Xtream Codes?
│   │   └── How to Test Your Xtream Credentials
│   ├── Xtream API  /xtream/xtream-api
│   │   ├── What Is the Xtream API? (improved)
│   │   ├── Xtream API Endpoints Reference
│   │   └── M3U vs Xtream API
│   ├── Xtream Players  /xtream/xtream-players
│   │   └── Which Players Support the Xtream API?
│   └── Xtream Troubleshooting  /xtream/xtream-troubleshooting
│       ├── Common Xtream API Errors Explained
│       └── Xtream Login Error Fix
│
├── Guides  /guides
│   ├── [Hub: learning path section when 6+ articles exist]
│   ├── Beginners  /guides/beginners
│   │   ├── What Is IPTV?
│   │   ├── How Does IPTV Work?
│   │   ├── What Is VOD in IPTV?
│   │   └── IPTV Protocols Explained
│   ├── Setup  /guides/setup
│   │   ├── How to Log In to an IPTV Player (improved)
│   │   └── IPTV Network Requirements
│   ├── M3U  /guides/m3u
│   │   ├── What Is an M3U Playlist? (improved)
│   │   └── M3U vs M3U8
│   └── EPG  /guides/epg
│       ├── What Is EPG?
│       └── How to Set Up EPG (improved)
│
├── Devices  /devices
│   ├── Fire TV  /devices/fire-tv
│   │   └── How to Set Up IPTV on Fire TV (improved)
│   ├── Android TV  /devices/android-tv
│   │   └── How to Set Up IPTV on Android TV (improved)
│   ├── Smart TV  /devices/smart-tv
│   │   ├── IPTV on Samsung Smart TV
│   │   └── IPTV on LG Smart TV
│   └── Apple TV  /devices/apple-tv
│       └── How to Set Up IPTV on Apple TV
│
├── Apps  /apps
│   └── IPTV Players  /apps/iptv-players
│       ├── Best IPTV Players in 2026 (rewrite)
│       └── Tivimate Setup Guide
│
├── Troubleshooting  /troubleshooting
│   ├── How to Fix an IPTV Login Error (improved)
│   ├── How to Fix IPTV Buffering (improved)
│   └── How to Fix a Blank IPTV Channel List
│
├── Glossary  /glossary
│   └── /glossary/[slug]  (40+ terms, alphabetical)
│
└── Blog  /blog
    └── (dormant until Phase 5 — ~25 articles published)
```

### Scalability note

This architecture supports 100+ articles without structural changes. Adding a new device simply adds a new article with `categoryHref: "/devices/[device]"`. Adding a new player guide adds an article in `categoryHref: "/apps/iptv-players"`. The only change needed at 30+ articles is a CMS — at that point `articles.ts` becomes too large to edit comfortably.

---

## 12. Homepage Content Strategy

The homepage design is not being changed. What changes is the content that feeds its sections, once the articles exist.

### Current vs target state

| Section | Current state | Target state (after P0 articles) |
|---|---|---|
| Hero | "Understand IPTV. Master Xtream." | Keep exactly as is |
| Featured | 1 article (what-is-xtream-codes-api) | Update to "What Is IPTV?" once published (broader entry point) |
| Explore Xtream | 3 topic cards, most showing 0 articles | All 3 have articles once P0/P1 Xtream pieces are published |
| Popular guides | 3 articles marked `popular: true` | Update popular flags to surface the most useful guides |
| Learn by device | 4 device cards | 3 of 4 have articles after P1 |
| Having a problem? | Search chip links return 0 results for most chips | Fix `getArticlesByTerm` matching logic |
| Latest articles | Sort order wrong (no date sort) | Fix `getLatestArticles` to sort by `publishedIso` desc |
| Newsletter | Placeholder form, no backend | Remains placeholder until Phase 5 |

### What the homepage should communicate

1. **What ListXtream is** — "Your guide to IPTV, streaming technology, and Xtream." The hero copy already does this.
2. **Who it is for** — Beginners and configured users both. The Featured section and Explore Xtream serve different audiences.
3. **What users can learn** — The hub sections (Xtream, Guides, Devices) give a clear answer when they have articles.
4. **Where to start** — Once 6+ beginner articles exist, add a "New to IPTV?" card in the Guides hub area linking to the beginner path.

### Minimal implementation changes recommended

Two small code fixes (not design changes) that significantly improve homepage utility:

1. **Fix `getLatestArticles` sort:** Articles should sort by `publishedIso` descending so the latest genuinely appears first. Currently `slice(0, count)` on the unordered array.

2. **Fix search chip matching:** The "Buffering", "Login errors" chips in the problem section currently return 0 results because `getArticlesByTerm` matches on `topics` (which no article sets correctly) or `title.includes()`. Fix: also match on `category` and `slug` substrings, or add tag arrays to articles.

Both are one-line logic fixes, not design changes.

---

## 13. Recommended First 20 Articles

In publishing order. Earlier articles enable internal links from later ones.

| # | Title | Pillar | Cluster | Type | Search Intent | Priority | Reason |
|---|---|---|---|---|---|---|---|
| 1 | What Is IPTV? | Guides | Beginners | Beginner Guide | Informational | P0 | Parent concept for the entire site. Enables all downstream links. |
| 2 | How Does IPTV Work? | Guides | Beginners | Technical Explainer | Informational | P0 | Explains packet delivery, protocols, player role. Foundation for codec/protocol articles. |
| 3 | What Is an Electronic Program Guide (EPG)? | Guides | EPG | Beginner Guide | Informational | P0 | The setup article exists; this is the missing concept article it needs to link to. |
| 4 | IPTV Network Requirements: How Much Speed Do You Need? | Guides | Setup | Technical Explainer | Informational | P0 | Referenced by buffering fix, login guide, device guides. Core utility piece. |
| 5 | Your Xtream Credentials: Server, Username and Password Explained | Xtream | Codes | Beginner Guide | Informational | P0 | The single most searched Xtream question. Fills the `/xtream/xtream-codes` cluster. |
| 6 | Xtream API Endpoints and Response Formats | Xtream | API | Reference Article | Informational | P0 | Core differentiator. Shows real API paths. No other editorial site covers this. |
| 7 | How to Test Your Xtream Credentials | Xtream | Codes | Tutorial | Task | P1 | Logical companion to #5. Diagnostic process before player setup. |
| 8 | Common Xtream API Errors and What They Mean | Xtream | Troubleshooting | Reference + Troubleshooting | Troubleshooting | P1 | Fills `/xtream/xtream-troubleshooting`. Companion to login error article. |
| 9 | How to Fix a Blank IPTV Channel List | Troubleshooting | — | Troubleshooting | Troubleshooting | P1 | Distinct problem from login error. Very high search demand. |
| 10 | What Is VOD in IPTV? | Guides | Beginners | Beginner Guide | Informational | P1 | VOD is an Xtream API endpoint type. Needed for the API reference (#6) to link to. |
| 11 | IPTV Protocols Explained: HLS, RTMP, RTSP and UDP | Guides | Beginners | Technical Explainer | Informational | P1 | Completes the "How IPTV works" trail. Links to codec article (#12). |
| 12 | Codec Basics for IPTV: H.264, H.265 and AV1 | Guides | Beginners | Technical Explainer | Informational | P1 | "Hardware decoder" setting is mentioned in device guides without explanation. |
| 13 | How to Set Up IPTV on a Samsung Smart TV | Devices | Smart-TV | Device Guide | Task | P1 | Fills empty `/devices/smart-tv`. Samsung is the most common smart TV brand. |
| 14 | How to Set Up IPTV on an LG Smart TV | Devices | Smart-TV | Device Guide | Task | P1 | Same page, second brand article. LG webOS has its own quirks. |
| 15 | How to Set Up IPTV on Apple TV | Devices | Apple-TV | Device Guide | Task | P1 | Fills empty `/devices/apple-tv`. Smaller audience but high intent. |
| 16 | Tivimate: Complete Setup Guide | Apps | IPTV Players | Player Guide | Task | P1 | Most popular Android/Fire TV IPTV player. Referenced in no article currently. |
| 17 | Best IPTV Players in 2026 (rewrite) | Apps | IPTV Players | Roundup | Commercial | P1 | Current article has 160 words and no player names. Must name Tivimate, IPTV Smarters, GSE. |
| 18 | M3U vs M3U8: What Is the Difference? | Guides | M3U | Comparison | Informational | P1 | Constant confusion. The M3U article partially covers it; this is the standalone. |
| 19 | IPTV Network Requirements (expand) | Guides | Setup | Technical Explainer | Informational | P0 | See #4 — add VPN impact, router settings, wired vs wireless. |
| 20 | IPTV Smarters Pro: Complete Setup Guide | Apps | IPTV Players | Player Guide | Task | P2 | Second most popular Xtream player after Tivimate. Cross-links with device guides. |

**Related articles for each — linking chain:**

- Articles 1–2 → link to each other, to M3U article, to Xtream API article
- Articles 3–4 → link to EPG setup, buffering fix
- Articles 5–6 → link to each other, to login tutorial, to login error, to Xtream troubleshooting
- Articles 7–9 → link back to credentials (#5), API overview (#6), login error (existing)
- Articles 10–12 → link to each other, to buffering fix, to device guides
- Articles 13–16 → link to login tutorial, buffering, EPG setup, player roundup
- Articles 17–18 → link to device guides, login tutorial
- Article 20 → links to #16 (Tivimate), device guides, login tutorial

---

## 14. Risks and Things to Avoid

### Content risks

**Thin cluster pages:** The six formerly-empty sub-hubs now have their pages. They must receive articles quickly — each one should have at least 2 articles before being promoted in navigation. Smart TV and Apple TV are the most urgent (P1).

**Reading time inflation:** The audit found `readingTime: "10 min read"` on a 157-word article. This is a direct trust damage. Calculate at 250 wpm and round to nearest minute. Enforce this before every article merge.

**Generic article titles:** "How to Set Up IPTV" is too broad. "How to Set Up IPTV on a Samsung Smart TV" is specific, searchable, and honest about scope.

**Player recommendations without reasons:** "We recommend Tivimate" without "because it supports Xtream API natively, has a TV-remote-friendly interface, and updates regularly" is useless. Every recommendation needs a stated reason.

**Concept drift toward piracy-adjacent content:** Xtream Codes has a piracy association in mainstream press. Every Xtream article must be framed around technology, configuration, and standards — not provider discovery or subscription acquisition. The disclaimer page already sets the tone; the content must follow it.

### Structural risks

**Over-expanding device section:** Roku, iOS, Windows, Chromecast are all P3. Do not create empty pages for them. A route with no articles is a liability, not an asset.

**Adding a CMS prematurely:** The TypeScript array is the right model through ~50 articles. A CMS adds operational complexity (hosting, authentication, content modelling, image pipeline) that is not justified at 10 articles. Revisit at 25 published articles.

**Over-adding to the glossary without depth:** 7 thin glossary terms is fine. 40 thin glossary terms is not. Each term's `detail` must genuinely explain the concept beyond the one-sentence definition. Minimum 2–3 sentences of real detail per term.

**Newsletter placeholder:** The newsletter form has no backend. It is currently a trust-negative element (users may try to subscribe and get no confirmation). Either wire it to a real provider (Mailchimp, ConvertKit, Resend) in Phase 4, or replace it with a placeholder that says "Coming soon" rather than a functional-looking form.

**Named author "ListXtream Editorial":** A single anonymous byline is acceptable at 10 articles. At 30+ articles, it starts to harm E-E-A-T signals. Phase 4 should introduce at least one named author with a bio. This is not needed for Phase 3 or 4 content writing.

### Architecture risks

**Blog before core content:** If Blog posts are published before the foundational Guides and Xtream articles exist, the homepage "Latest" section will surface blog content instead of educational guides. Blog stays dormant until 20+ core articles are published.

**Internal links to articles that do not yet exist:** Articles must not link (via `related` field) to slugs that do not exist in `articles.ts`. This causes `getArticle(slug)` to return `undefined` — already handled in the article page with a `.filter(Boolean)` check, but it silently drops the related article section with no error.

---

## 15. Final Recommendations

### Do immediately (before Phase 4 begins)

1. **Fix `getLatestArticles`** — sort by `publishedIso` descending. One-line fix.
2. **Fix `getArticlesByTerm`** — extend matching to `category`, `badge`, and article `blocks` paragraph text so search chips work.
3. **Fix the `related` field on existing articles** — several articles have `related` pointing to slugs that don't exist yet (e.g., EPG article has no related). Review each article and remove dead `related` entries.
4. **Fix the "Polish, polish" comparison table cell in `best-iptv-players-2026`** — a two-character typo that's visible to every visitor.
5. **Set `topics` correctly on existing articles** — `topics: ["Xtream", "API"]` must match glossary slugs (`xtream`, `xtream-api`), not display labels, for the Related Terms block to render.

### Phase 4 scope (strategy approval gates this)

Once this strategy is approved:

1. Write the 6 P0 articles (in order)
2. Write the 9 P1 articles (after P0)
3. Improve the 5 existing articles that need it (in parallel with P1)
4. Add Tier 1 glossary terms alongside articles that reference them
5. Fix homepage sort order and search matching
6. Rewrite `best-iptv-players-2026` as a standalone task
7. Do not start P2 content until P0 + P1 are complete

### Self-critique corrections

**On cluster redundancy:** Xtream Players (`/xtream/xtream-players`) and Apps (`/apps/iptv-players`) could look redundant. They are not: Xtream Players covers the subset of players that speak the Xtream API protocol, from a technical angle. Apps covers the full player landscape, including M3U-only players. The distinction is the angle, not the player list. The content can explicitly cross-link to avoid confusion.

**On the Guides/Beginners cluster being too broad:** Acknowledged. "IPTV protocols" and "Codec basics" are more intermediate than beginner. Rename the sub-hub to `/guides/fundamentals` or `/guides/concepts` in Phase 5 if the beginner/intermediate split becomes confusing. For now, the route stays as-is.

**On the Blog pillar:** Blog is listed as a pillar but produces no near-term content. It's retained because the nav already has it and removing it would require a layout change. It will remain a `TopicLanding` page showing "Editorial updates are on the way." until Phase 5.

**On the Xtream cluster depth:** Six P0/P1 Xtream articles will make this the most thorough Xtream API resource in English. That is the correct bet. The risk is that some of these articles require genuine technical knowledge of the Xtream API response format — they cannot be written without actual API research. Phase 4 must include API testing before writing the endpoints reference.

---

## Appendix: Key Data Points

**Existing articles:** 10  
**Existing glossary terms:** 7  
**Empty sub-hub pages:** 6 (smart-tv, apple-tv now in sitemap but still content-empty)  
**Articles marked popular:** 3  
**Articles with `topics` set:** 1  
**Articles with `related` pointing to non-existent slugs:** Several (EPG, login, Fire TV)  
**Average article length:** ~225 words  
**Target average article length:** 750 words  
**Target total articles after Phase 4:** 26–30  
**Target glossary size after Phase 4:** 30–40 terms

---

*This document is the output of Phase 3. No files were created, modified, or deleted in the project during this phase. Implementation begins only after approval.*
