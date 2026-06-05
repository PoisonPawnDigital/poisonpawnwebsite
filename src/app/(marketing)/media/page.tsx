export const metadata = { title: 'Media — Poison Pawn' }

const outlets = ['The Athletic', 'New York Times', 'LA Times', 'ESPN']

const articles = [
  {
    outlet: 'The Athletic',
    headline: 'C.J. Stroud: From Overshadowed to Ohio State Star, Thanks to Talent, Chess',
    desc: 'The piece that put Poison Pawn on the map — detailing how chess-based decision training transformed one of the most watched quarterbacks in the country.',
    cta: 'Read the Full Story →',
    href: '#',
  },
  {
    outlet: 'LA Times',
    headline: 'How a Chess Guru Became a Trendy Mental Coach for Rising NFL Quarterbacks',
    desc: 'A deep look at how Seth Makowsky built a system that is quietly changing how the best quarterbacks in football prepare.',
    cta: 'Read More →',
    href: '#',
  },
  {
    outlet: 'New York Times',
    headline: 'Teaching Olympians How to Make the Right Moves',
    desc: 'How Poison Pawn is being used at the Olympic level to train decision-making in the world\'s most elite athletes.',
    cta: 'Read More →',
    href: '#',
  },
  {
    outlet: 'ESPN',
    headline: 'Player Not A Piece',
    desc: 'ESPN\'s feature on Poison Pawn and the philosophy behind training performers to think — not just execute.',
    cta: 'Read More →',
    href: '#',
  },
]

export default function MediaPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-black">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
              Media
            </div>
            <h1 className="text-bone text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none mb-6">
              As Told<br />By Others.
            </h1>
            <p className="text-bone-dim text-lg leading-relaxed max-w-[520px]">
              Poison Pawn has been covered by the world&apos;s most recognized sports and performance
              publications.
            </p>
          </div>
        </div>
      </section>

      {/* Press Logo Bar */}
      <section className="border-y border-line bg-surface py-8">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-pp-muted mb-5">
            Coverage
          </div>
          <div className="flex flex-wrap gap-10 md:gap-16 items-center">
            {outlets.map((o) => (
              <span
                key={o}
                className="font-sans text-[15px] font-bold tracking-[0.06em] text-bone-dim"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              Coverage
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none">
              In The Press.
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {articles.map((a, i) => (
              <div
                key={i}
                className="reveal border-t border-line py-10 flex flex-col sm:flex-row sm:items-start gap-6"
              >
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-venom w-36 flex-shrink-0 pt-1">
                  {a.outlet}
                </div>
                <div className="flex-1">
                  <h3 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-3">
                    {a.headline}
                  </h3>
                  <p className="text-bone-dim text-[14px] leading-relaxed mb-4">{a.desc}</p>
                  <a
                    href={a.href}
                    className="text-venom text-[13px] hover:text-gold-bright transition-colors"
                  >
                    {a.cta}
                  </a>
                </div>
              </div>
            ))}
            <div className="border-t border-line" />
          </div>
          <p className="text-pp-muted text-[11px] font-mono mt-6">
            // Article URLs to be provided by client.
          </p>
        </div>
      </section>

      {/* Featured — World Chess Hall of Fame */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface-2 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-4">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-2">
              Featured
            </div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-pp-muted">
              World Chess Hall of Fame &amp; Galleries · Saint Louis · May 2026 – May 2027
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <h3 className="text-bone text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mb-6">
                The Quarterback Mind
              </h3>
              <p className="text-bone-dim text-[15px] leading-relaxed mb-8">
                Poison Pawn is featured as part of Game Plan: The Strategy of Chess &amp; Sports — an
                exhibition at the World Chess Hall of Fame exploring the intersection of chess,
                decision-making, and elite performance. The exhibit features the NFL quarterbacks,
                Olympic athletes, and championship programs that have trained through the system.
              </p>
              <a
                href="#"
                className="inline-block border border-line-strong text-bone text-sm tracking-[0.08em] uppercase px-7 py-4 rounded-sm hover:border-bone-dim transition-colors duration-200"
              >
                View the Exhibition →
              </a>
            </div>
            <div className="reveal" data-d="2">
              <img
                src="/images/wchof-exhibit-installation.jpg"
                alt="Poison Pawn exhibit at the World Chess Hall of Fame"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footage */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-8">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-2">Footage</div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-bone-dim">
              Poison Pawn Summer Event
            </div>
          </div>
          <div className="reveal max-w-3xl">
            <div className="aspect-video rounded-sm overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1050288775?h=d5752a86e7"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Poison Pawn Summer Event"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
