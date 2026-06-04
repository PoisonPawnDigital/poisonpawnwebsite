export default function MediaSection() {
  return (
    <section id="media" className="py-[120px] bg-obsidian">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-pp-muted mb-8">
          Featured in
        </div>

        <a
          href="/featured/quarterback-mind"
          className="reveal group flex flex-col md:flex-row border border-line hover:border-venom/50 bg-surface rounded-sm transition-colors duration-300 overflow-hidden"
        >
          {/* Left content */}
          <div className="flex-1 p-10">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              Now on view · Exhibit feature
            </div>
            <h3 className="text-bone text-3xl font-extrabold uppercase tracking-tight leading-none mb-5">
              The Quarterback Mind
            </h3>
            <p className="text-bone-dim text-[16px] leading-relaxed mb-8 max-w-lg">
              An NFL roster of quarterbacks, champions across sport, and a training method now
              recognized at the World Chess Hall of Fame — the breadth and institutional credibility
              behind the case studies.
            </p>
            <div className="flex flex-col gap-2 mb-8">
              {[
                ['Exhibit', 'Game Plan: The Strategy of Chess & Sports'],
                ['Venue', 'World Chess Hall of Fame & Galleries · Saint Louis'],
                ['On view', 'May 7, 2026 – May 2027'],
              ].map(([label, value]) => (
                <div key={label} className="text-bone-dim text-[13px]">
                  <span className="text-bone font-semibold">{label}</span> {value}
                </div>
              ))}
            </div>
            <span className="text-venom text-[14px] group-hover:text-gold-bright transition-colors">
              Read the feature →
            </span>
          </div>

          {/* Right glyph panel */}
          <div className="md:w-64 flex-shrink-0 bg-surface-2 flex flex-col items-center justify-center p-10 gap-4 border-t md:border-t-0 md:border-l border-line">
            <span className="text-venom text-8xl leading-none" aria-hidden="true">♞</span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted text-center">
              World Chess Hall of Fame
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
