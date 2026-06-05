export default function HomeCTASection() {
  return (
    <section className="py-16 md:py-20 lg:py-[120px] bg-obsidian border-t border-line">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
        <div className="reveal">
          <h2 className="text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-6">
            The Edge<br />Starts Here.
          </h2>
          <p className="text-bone-dim text-[16px] leading-relaxed max-w-xl mx-auto mb-10">
            Poison Pawn works with a select group of high-performance teams and organizations.
            Apply to find out if it&apos;s right for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/how-it-works"
              className="inline-block border border-line-strong text-bone text-sm tracking-[0.08em] uppercase px-7 py-4 rounded-sm hover:border-bone-dim transition-colors duration-200"
            >
              Explore the System
            </a>
            <a
              href="/contact"
              className="inline-block bg-venom text-black font-semibold text-sm tracking-[0.08em] uppercase px-7 py-4 rounded-sm hover:bg-gold-bright transition-colors duration-200"
            >
              Apply For Training
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
