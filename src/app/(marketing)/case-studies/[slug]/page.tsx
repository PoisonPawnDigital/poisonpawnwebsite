import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { caseStudies, getCaseStudy } from '@/lib/case-studies'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}
  return {
    title: `${cs.h1} — Poison Pawn`,
    description: cs.deck,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()

  return (
    <main className="min-h-screen bg-obsidian text-bone pt-20">
      <div className="max-w-[860px] mx-auto px-8 pb-24">

        {/* Topbar */}
        <div className="flex items-center justify-between py-8 border-b border-line mb-12">
          <Link href="/" className="font-sans text-[13px] font-semibold tracking-[0.22em] uppercase text-bone hover:text-venom transition-colors">
            Poison&nbsp;Pawn
          </Link>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted">
            Case Study&nbsp;&nbsp;/&nbsp;&nbsp;{cs.label}
          </span>
        </div>

        {/* Hero */}
        <div className="mb-10">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            {cs.eyebrow}
          </div>
          <h1 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none mb-6">
            {cs.h1}
          </h1>
          <p className="text-bone-dim text-[17px] leading-relaxed max-w-xl">{cs.deck}</p>
        </div>

        {/* At a glance */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line mb-16">
          {cs.glance.map((g) => (
            <div key={g.k} className="bg-surface p-6">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-venom mb-2">{g.k}</div>
              <div className="text-bone text-[14px] leading-snug">{g.v}</div>
            </div>
          ))}
        </div>

        {/* Section: starting point + method */}
        {cs.sections.slice(0, 2).map((sec) => (
          <section key={sec.label} className="mb-14 pb-14 border-b border-line">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted mb-4">
              {sec.label}
            </div>
            <h2 className="text-bone text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight mb-6">
              {sec.h2}
            </h2>
            {sec.body.map((p, i) => (
              <p key={i} className="text-bone-dim text-[15px] leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </section>
        ))}

        {/* Data section */}
        <section className="mb-14 pb-14 border-b border-line">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted mb-4">
            The result, in numbers
          </div>

          <div className="border border-line bg-surface rounded-sm overflow-hidden mb-6">
            {/* Data head */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-line">
              <span className="font-mono text-[11px] tracking-[0.16em] text-bone-dim">{cs.data.head.left}</span>
              <span className="font-mono text-[11px] tracking-[0.16em] text-venom">{cs.data.head.right}</span>
            </div>

            {/* Before / after */}
            <div className="flex items-center gap-8 px-8 py-8 border-b border-line">
              <div className="flex-1">
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-pp-muted mb-2">{cs.data.before.tag}</div>
                <div className="text-bone-dim text-4xl font-extrabold leading-none">
                  {cs.data.before.value}<span className="text-xl font-normal">{cs.data.before.suffix}</span>
                </div>
              </div>
              <span className="text-venom text-3xl font-bold">→</span>
              <div className="flex-1">
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-pp-muted mb-2">{cs.data.after.tag}</div>
                <div className="text-venom text-4xl font-extrabold leading-none">
                  {cs.data.after.value}<span className="text-xl font-normal">{cs.data.after.suffix}</span>
                </div>
                {cs.data.after.badge && (
                  <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-venom border border-venom/40 inline-block px-2 py-1 mt-3">
                    {cs.data.after.badge}
                  </div>
                )}
              </div>
            </div>

            {/* Bar chart (football only) */}
            {cs.data.bars && (
              <div className="px-8 py-6 border-b border-line">
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-pp-muted mb-4">
                  Completion percentage — the climb
                </div>
                <div className="flex items-end gap-4 h-24">
                  {cs.data.bars.map((b, i) => {
                    const pct = parseFloat(b.val) / 75
                    return (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <span className="font-mono text-[11px] text-bone-dim">{b.val}</span>
                        <div
                          className={`w-12 rounded-sm ${b.hot ? 'bg-venom' : 'bg-line-strong'}`}
                          style={{ height: `${pct * 80}px` }}
                        />
                        <span className={`font-mono text-[10px] ${b.hot ? 'text-venom' : 'text-pp-muted'}`}>{b.yr}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Record cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line">
              {cs.data.records.map((r) => (
                <div key={r.k} className="bg-surface p-6">
                  <div className="text-venom text-2xl font-extrabold leading-none mb-2">{r.n}</div>
                  <div className="text-bone text-[13px] font-semibold mb-1">{r.k}</div>
                  <div className="text-pp-muted text-[11px] font-mono tracking-[0.1em]">{r.s}</div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 font-mono text-[10px] text-pp-muted tracking-[0.04em]">
              {cs.data.foot}
            </div>
          </div>
        </section>

        {/* Remaining sections (bigger picture, proof) */}
        {cs.sections.slice(2).map((sec) => (
          <section key={sec.label} className="mb-14">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted mb-4">
              {sec.label}
            </div>
            <h2 className="text-bone text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight mb-6">
              {sec.h2}
            </h2>
            {sec.body.map((p, i) => (
              <p key={i} className="text-bone-dim text-[15px] leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </section>
        ))}

        {/* Back link */}
        <div className="pt-8 border-t border-line">
          <Link
            href="/#proof"
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-venom hover:text-gold-bright transition-colors"
          >
            ← Back to all case studies
          </Link>
        </div>
      </div>
    </main>
  )
}
