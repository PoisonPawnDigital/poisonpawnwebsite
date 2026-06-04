# Findings & Decisions

## Architecture Decisions
| Decision | Rationale | Date |
|----------|-----------|------|
| Next.js 15 App Router | Static generation by default, React Server Components, best-in-class CDN caching on Vercel | 2026-06-04 |
| Tailwind v4 + shadcn/ui | Match poisonpawndashboard stack exactly — same versions, same tooling, same `@theme inline` CSS var pattern. Dashboard uses: Next 16.2.2, React 19, Tailwind v4, shadcn, CVA, clsx, tailwind-merge, tw-animate-css, lucide-react, vitest | 2026-06-04 |
| Fully static (no SSR/ISR) | All content is hardcoded — no CMS or dynamic data. Static export = max speed, zero cold starts | 2026-06-04 |
| `"use client"` only where needed | Nav (scroll state), MetricsSection (animation), ApplySection (form) — everything else is RSC | 2026-06-04 |
| Formspree for contact form | Zero-backend, free tier, works with static export, easy to swap for CRM later | 2026-06-04 |
| Public Sans as font until Gotham supplied | Gotham is licensed — owner must supply @font-face files. Public Sans is already in the source as fallback | 2026-06-04 |

## Research Notes

### Source HTML Structure
- 860 lines, 912KB (large due to ~5 base64-encoded images — logo/press strips)
- All CSS inline in `<style>` tag (~400 lines)
- All JS inline at bottom (~35 lines — IntersectionObserver reveals + nav scroll + form handler)
- No external JS dependencies except Google Fonts
- 17 distinct sections on homepage

### Asset Inventory
- **Video:** `hero_loop.mp4` (~415KB), `hero_loop.webm` (~237KB), `hero_poster.jpg` — already in V3 MERGE folder
- **Images:** 23 JPGs in `poison-pawn-4 case-studies/wchof-assets/` — real, optimised, named by subject
- **Base64 in homepage:** 5 instances — trust logo strip (composite screenshot) and media logo strip (composite screenshot). Both marked as placeholder, to be replaced with real logos
- **Base64 in case studies:** 0 — they reference wchof-assets directly

### Case Study Pages
- 4 case studies + 1 featured article (total 5 additional pages)
- Shared "chess dossier" design: ink bg, brass accents, Fraunces/Spectral/Space Mono fonts
- Stats are verified against public records (UCLA Athletics, MLB, Olympics, NCAA)
- Some red-placeholder items still need owner content (engagement scope, quotes)

### Chosen Homepage
- `V3 MERGE JC  SM 6pm webfiles/poison-pawn_11.html` — confirmed by user as the one to build from
- 912KB, largest/most complete version
- Video assets (`hero_loop.mp4/.webm/hero_poster.jpg`) are already in the same folder

## Discovered Constraints
- Gotham font is licensed — cannot include in repo; must use Public Sans fallback until owner supplies files
- Logo strips (trust + media) are composite screenshot placeholders — actual SVG/PNG files not yet provided
- Apply form currently shows "(Demo only — connect this form to your CRM or email before launch)"
- Some athlete stats in case studies have open placeholder fields (in red) for owner to fill
- OG domain tag is `REPLACE-WITH-DOMAIN.com` — needs real domain before launch
- Case study HTML references `wchof-assets/` as a sibling folder — need to map to `public/images/` in Next.js

## Errors & Solutions
| Error | Root Cause | Fix Applied |
|-------|-----------|-------------|
| — | — | — |
