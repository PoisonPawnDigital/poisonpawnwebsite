import CaseStudyList from '@/components/sections/CaseStudyList'

export const metadata = { title: 'Case Studies — Poison Pawn' }

export default function CaseStudiesPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-black">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
              Case Studies
            </div>
            <h1 className="text-bone text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none mb-6">
              The Results<br />Speak.
            </h1>
            <p className="text-bone-dim text-lg leading-relaxed">
              Elite organizations. Measurable outcomes. Real performance gains.
            </p>
          </div>
        </div>
      </section>

      {/* Collapsible case studies — uniform structure, read-more per case */}
      <CaseStudyList />

      {/* Closing CTA */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-obsidian border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <div className="reveal">
            <h2 className="text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-10">
              The Edge<br />Starts Here.
            </h2>
            <a
              href="/bring-it-to-your-team"
              className="inline-block bg-venom text-black font-semibold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-sm hover:bg-gold-bright transition-colors duration-200"
            >
              Bring It To Your Team →
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
