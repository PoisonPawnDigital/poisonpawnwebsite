export const metadata = { title: 'POISON PAWN® | Player Not A Piece' }

const outlets = [
  { label: 'The Athletic', src: '/logos/press-the-athletic.svg', invert: true },
  { label: 'New York Times', src: '/logos/press-new-york-times.svg', invert: true },
  { label: 'LA Times', src: '/logos/press-la-times.svg', invert: true },
  { label: 'ESPN', src: '/logos/press-espn.svg', invert: true },
  { label: 'Washington Post', src: '/logos/press-washington-post.svg', invert: true },
  { label: 'CNN', src: '/logos/press-cnn.svg', invert: true },
  { label: 'Reuters', src: '/logos/press-reuters.svg', invert: true },
]

const articles = [
  {
    outlet: 'The Athletic',
    headline: 'C.J. Stroud: From Overshadowed to Ohio State Star, Thanks to Talent, Chess',
    desc: 'The piece that put Poison Pawn on the map — detailing how chess-based decision training transformed one of the most watched quarterbacks in the country.',
    cta: 'Read the Full Story →',
    href: 'https://www.nytimes.com/athletic/3565250/2022/09/05/cj-stroud-ohio-state-the-opening/',
    highlight: true,
  },
  {
    outlet: 'LA Times',
    headline: 'How a Chess Guru Became a Trendy Mental Coach for Rising NFL Quarterbacks',
    desc: 'A deep look at how Seth Makowsky built a system that is quietly changing how the best quarterbacks in football prepare.',
    cta: 'Read More →',
    href: 'https://www.latimes.com/sports/story/2023-10-06/chess-guru-seth-makowsky-mental-coach-rising-nfl-quarterbacks',
  },
  {
    outlet: 'New York Times',
    headline: 'Seth Makowsky takes quarterbacks’ thinking from checkers to chess',
    desc: 'A look at how Makowsky uses chess to sharpen quarterbacks’ processing, patience, and decision-making before the pressure arrives on the field.',
    cta: 'Read More →',
    href: 'https://www.nytimes.com/athletic/1893860/2020/06/29/seth-makowsky-chess-quarterbacks-coach-football/',
  },
  {
    outlet: 'Reuters',
    headline: 'Makowsky teaching Olympians how to make right moves',
    desc: 'Reuters follows Makowsky’s work with Olympic athletes and the way chess-based training builds composure, pattern recognition, and better decisions under pressure.',
    cta: 'Read More →',
    href: 'https://www.reuters.com/article/uk-olympics-chess-makowsky-feature/chess-makowsky-teaching-olympians-how-to-make-right-moves-idUKKCN1U01AZ/',
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
          <div className="flex flex-wrap gap-x-10 gap-y-6 md:gap-x-14 items-center">
            {outlets.map(({ label, src, invert }) => (
              <span
                key={label}
                aria-label={label}
                title={label}
                className="inline-flex h-10 w-[120px] items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={label}
                  className={`max-h-7 max-w-full object-contain opacity-70 transition-opacity duration-200 hover:opacity-100 ${invert ? '[filter:brightness(0)_invert(1)]' : ''}`}
                />
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
            {articles.map((a) => (
              <div
                key={a.href}
                className={`reveal border-t py-10 flex flex-col sm:flex-row sm:items-start gap-6 ${a.highlight ? 'border-venom/45 bg-venom/[0.035] px-5 sm:px-6' : 'border-line'}`}
              >
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-venom w-36 flex-shrink-0 pt-1">
                  {a.highlight ? 'Featured · ' : ''}{a.outlet}
                </div>
                <div className="flex-1">
                  <h3 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-3">
                    {a.headline}
                  </h3>
                  <p className="text-bone-dim text-[14px] leading-relaxed mb-4">{a.desc}</p>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-venom text-[13px] hover:text-gold-bright transition-colors"
                  >
                    {a.cta}
                  </a>
                </div>
              </div>
            ))}
            <div className="border-t border-line" />
          </div>
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
                href="https://worldchesshof.org/news-insights/game-plan-the-strategy-of-chess-sports-opens-may-7-at-world-chess-hall-of-fame-galleries/"
                target="_blank"
                rel="noopener noreferrer"
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
              Featured ESPN Video
            </div>
            <p className="text-bone-dim text-[15px] leading-relaxed max-w-2xl mt-4">
              ESPN&apos;s feature on Poison Pawn and the philosophy behind training performers to think
              clearly when the board, the clock, and the pressure all change at once.
            </p>
          </div>
          <div className="reveal max-w-3xl">
            <div className="aspect-video rounded-sm overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/544334933"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Featured ESPN Video"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
