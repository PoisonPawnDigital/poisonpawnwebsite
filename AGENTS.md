<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Stack

| Tool | Version |
|------|---------|
| Next.js | 16.2.2 |
| React | 19 |
| TypeScript | strict |
| Tailwind | v4 |
| shadcn/ui | latest |
| CVA | ^0.7 |
| clsx + tailwind-merge | latest |
| tw-animate-css | latest |
| lucide-react | latest |
| vitest | latest |

Matches `poisonpawndashboard` exactly. When in doubt, check that project's `package.json`.

---

# Folder Structure

```
src/
  app/                          # App Router — routing files only
    (marketing)/                # Route group — no URL impact
      page.tsx                  # Homepage /
      case-studies/
        [slug]/
          page.tsx              # /case-studies/football-qb etc.
      featured/
        quarterback-mind/
          page.tsx              # /featured/quarterback-mind
    layout.tsx                  # Root layout (fonts, metadata, nav, footer)
    globals.css                 # Tailwind v4 @theme inline tokens + base styles
    sitemap.ts                  # Generated sitemap
    robots.ts                   # robots.txt
    not-found.tsx               # 404 page
  components/
    layout/                     # Nav, Footer — shared across all routes
    sections/                   # Homepage section components
    ui/                         # shadcn primitives (generated — do not hand-edit)
  lib/
    utils.ts                    # cn() = clsx + tailwind-merge
public/
  video/                        # hero_loop.mp4, hero_loop.webm, hero_poster.jpg
  images/                       # wchof-assets athlete/exhibit JPGs
```

---

# Naming Conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Components | PascalCase | `HeroSection.tsx`, `NavBar.tsx` |
| shadcn primitives | kebab-case | `button.tsx`, `input.tsx` |
| Route files | Next.js reserved names | `page.tsx`, `layout.tsx` |
| Utilities | camelCase | `utils.ts`, `cn()` |
| CSS custom properties | `--kebab-case` | `--color-venom`, `--font-mono` |
| Tailwind tokens | match CSS var name | `bg-venom`, `text-bone` |
| Route groups | `(kebab-case)` | `(marketing)` |
| Private folders | `_camelCase` | `_components/` |
| Image files | `kebab-case.ext` | `hero-poster.jpg` |

---

# Next.js Rules

## Server vs Client Components
- **Default is Server Component** — layouts, pages, and static sections ship zero JS
- Add `"use client"` ONLY for: state (`useState`/`useReducer`), event handlers, `useEffect`, browser APIs (`window`, `localStorage`)
- In this project: only `NavBar` (scroll state) and `ApplyForm` (form submission) need `"use client"`
- Pass Server Component children as `children` props into Client Components — never import a Server Component from a Client Component

## Static Generation
- All pages are fully static — no `export const dynamic = 'force-dynamic'`
- Use `generateStaticParams` for `[slug]` case study routes
- No `getServerSideProps` — this is App Router

## Metadata
- Export `const metadata` from `page.tsx` / `layout.tsx` — do NOT use `<Head>`
- Per-page OG tags override the root layout defaults
- OG domain placeholder: `REPLACE-WITH-DOMAIN.com` — owner to supply before launch

## Images
- Always use `next/image` — never bare `<img>` for content images
- Add `priority` to the hero poster (above the fold)
- wchof-assets images live in `public/images/` — reference as `/images/filename.jpg`

## Fonts
- Use `next/font/google` — never `<link rel="stylesheet">` for Google Fonts
- Two fonts: `Public_Sans` (body/headings) and `JetBrains_Mono` (eyebrows/mono)
- Gotham is licensed — ship with Public Sans fallback until owner supplies @font-face files

---

# Design Tokens (Tailwind v4 @theme inline)

Map the source HTML CSS vars to Tailwind tokens in `globals.css`:

```css
@theme inline {
  --color-obsidian: #000000;
  --color-surface: #0c0b09;
  --color-surface-2: #16140f;
  --color-bone: #F5EDE0;
  --color-bone-dim: #b6ab99;
  --color-muted: #827a6c;
  --color-venom: #D4A24A;
  --color-venom-dim: #a07c34;
  --color-gold-bright: #ECC678;
  --color-crimson: #C44536;
  --color-green: #7DD181;
  --font-sans: var(--font-public-sans), system-ui, sans-serif;
  --font-mono: var(--font-jetbrains-mono), ui-monospace, monospace;
}
```

Usage: `bg-obsidian`, `text-bone`, `text-venom`, `border-venom`, `text-crimson`, `font-mono`

---

# Component Conventions

```tsx
// Server Component (default — no directive needed)
export default function HeroSection() {
  return <section>...</section>
}

// Client Component (only when needed)
'use client'
import { useState } from 'react'
export default function NavBar() { ... }

// cn() helper — always use for conditional classes
import { cn } from '@/lib/utils'
className={cn('base-classes', condition && 'conditional-class')}
```

---

# Open Items (owner to supply before launch)
- Gotham font @font-face files
- Real "Trusted by" logo SVGs/PNGs
- Real press outlet logo SVGs/PNGs
- Formspree endpoint URL (or CRM webhook)
- Production domain for OG meta tags
- 1200×630 OG share image
- Athlete permission clearances for commercial web use
