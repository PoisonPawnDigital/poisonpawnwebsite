# Task Plan: Poison Pawn Website — Next.js Build

## Objective
Port the Poison Pawn marketing site from a single self-contained HTML file into a production-ready Next.js 15 App Router site, prioritising speed (fully static, CDN-served) with a clean component structure and easy content updates.

**Source of truth:** `V3 MERGE JC  SM 6pm webfiles/poison-pawn_11.html`

---

## Phase 1: Project Scaffold & Asset Setup
- [x] 1.1: Run `create-next-app` inside `poisonpawnwebsite/` (TypeScript, App Router, Tailwind v4, `src/` dir, `@/*` alias)
- [x] 1.2: Install matching deps: `shadcn`, `clsx`, `tailwind-merge`, `class-variance-authority`, `tw-animate-css`, `lucide-react`
- [x] 1.3: Init shadcn (`npx shadcn init`) — configure for Poison Pawn dark theme
- [ ] 1.4: Configure `next.config.ts` — image optimisation, strict mode
- [x] 1.5: Copy video assets (`hero_loop.mp4`, `hero_loop.webm`, `hero_poster.jpg`) → `public/video/`
- [x] 1.6: Copy wchof-assets (23 athlete/exhibit JPGs) → `public/images/`
- [x] 1.7: Remove boilerplate (default page, page.module.css)
- [x] 1.8: Set up `src/app/layout.tsx` with `next/font` (Public Sans + JetBrains Mono) and root metadata
- [x] 1.9: Build out `src/app/globals.css` — `@theme inline` block mapping all Poison Pawn CSS vars (obsidian, bone, venom/gold, crimson, green) into Tailwind tokens, same pattern as dashboard

## Phase 2: Shared Components
- [x] 2.1: `components/layout/NavBar.tsx` — fixed nav, scroll-state, mobile hide links below md (`"use client"`) — verified ✓
- [x] 2.2: `components/layout/Footer.tsx` — static footer with links and copyright — verified ✓
- [x] 2.3: `components/layout/RevealWrapper.tsx` — IntersectionObserver reveal animation — verified ✓
- [ ] 2.4: `components/EyebrowLabel.tsx` — reusable mono-font eyebrow tag
- [ ] 2.5: `components/SectionHead.tsx` — eyebrow + h2 + optional p pattern used across every section

## Phase 3: Homepage Sections (app/page.tsx)
Build each section as its own component in `components/sections/`:
- [ ] 3.1: `HeroSection` — full-viewport video bg (mp4/webm/poster), headline, sub, CTAs
- [ ] 3.2: `TrustSection` — "trusted by" logo strip (placeholder composite → slot for real SVGs)
- [ ] 3.3: `ShiftSection` — "We train decision-making itself" + 3-column grid
- [ ] 3.4: `MethodSection` — 4 pillars of the Poison Pawn Method™
- [ ] 3.5: `SystemSection` — the system overview
- [ ] 3.6: `SetSection` — The Set offering
- [ ] 3.7: `MetricsSection` — animated profile visualisation (client component for animation)
- [ ] 3.8: `ScienceSection` — 3-column neuroscience cards
- [ ] 3.9: `AudienceSection` — who it's for
- [ ] 3.10: `ProofSection` — case study strip/cards with links to case study pages
- [ ] 3.11: `MediaSection` — press logo strip (placeholder → real outlets)
- [ ] 3.12: `FounderSection` — founder bio
- [ ] 3.13: `DefinitionSection` + `CreedSection` — brand creed block
- [ ] 3.14: `HowItWorksSection` — process steps
- [ ] 3.15: `ApplySection` — contact form wired to Formspree (client component)

## Phase 4: Additional Pages
- [x] 4.1: Create `app/case-studies/[slug]/page.tsx` with `generateStaticParams` for all 4 slugs
- [x] 4.2: Build shared case study layout inline (dossier design, topbar, glance, data card)
- [x] 4.3: Port content for `football-qb` — bar chart, 4 record cards, verified stats
- [x] 4.4: Port content for `baseball-bluejays`
- [x] 4.5: Port content for `artistic-swimming`
- [x] 4.6: Port content for `volleyball-ucla`
- [x] 4.7: Create `app/featured/quarterback-mind/page.tsx` — athlete grid with next/image, accolades, exhibit callout
- [x] 4.8: `generateMetadata` per case study + static metadata on QB Mind page

## Phase 5: Performance, Polish & Launch Prep
- [ ] 5.1: Replace all `<img>` tags with `next/image` (priority flag on hero poster)
- [ ] 5.2: Audit JS bundle — confirm only Nav, MetricsSection, ApplySection are `"use client"`
- [ ] 5.3: Add `app/sitemap.ts` — lists all routes for search indexing
- [ ] 5.4: Add `app/robots.ts`
- [ ] 5.5: Generate/add OG share image (1200×630) → `app/opengraph-image.png` or dynamic route
- [ ] 5.6: Run Lighthouse — target 95+ Performance on desktop
- [ ] 5.7: Wire Formspree endpoint in ApplySection (requires owner to create free account)
- [ ] 5.8: Swap logo strip placeholders with real SVG/PNG files when supplied by owner
- [ ] 5.9: Initial Vercel deployment — connect repo, confirm build passes, share preview URL

---

## Open Items (owner to supply before launch)
- Gotham font files (licensed) — site ships with Public Sans until supplied
- Real "Trusted by" logo files
- Real press outlet logo files
- Formspree endpoint URL (or alternative CRM hook)
- Confirmed domain for OG/Twitter meta tags
- 1200×630 share image
- Athlete permission clearances for commercial web use

---

## Status: NOT_STARTED | Phase 1
