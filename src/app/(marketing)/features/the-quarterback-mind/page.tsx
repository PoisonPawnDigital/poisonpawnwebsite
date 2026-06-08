export const metadata = { title: 'POISON PAWN® | Player Not A Piece' }

const athletes = [
  { name: 'C.J. Stroud',               role: 'Quarterback · Houston Texans',        credential: 'NFL Offensive Rookie of the Year', quote: '"Will you train me after this?"', img: '/images/cj-stroud.jpg' },
  { name: 'Justin Fields',             role: 'Quarterback · Kansas City Chiefs',     credential: 'Big Ten Offensive Player of the Year', img: '/images/justin-fields.jpg' },
  { name: 'Malik Willis',              role: 'Quarterback · Miami Dolphins',         credential: 'Dynamic dual-threat playmaker', img: '/images/malik-willis.jpg' },
  { name: 'Dorian Thompson-Robinson',  role: 'Quarterback · NFL',                   credential: 'UCLA all-time total offense leader', quote: '"Poison Pawn Chess helped me slow the game down."', img: '/images/dorian-thompson-robinson.jpg' },
  { name: 'Josh Dobbs',                role: 'Quarterback · NFL',                   credential: 'Aerospace engineering graduate', quote: '"At Poison Pawn, we talk about having a process."', img: '/images/josh-dobbs.jpg' },
  { name: 'Sean Clifford',             role: 'Quarterback · Cincinnati Bengals',     credential: 'Rose Bowl MVP', img: '/images/sean-clifford.jpg' },
  { name: 'Max Brosmer',               role: 'Quarterback · Minnesota Vikings',      credential: 'Minnesota single-season completions record', img: '/images/max-brosmer.jpg' },
  { name: 'Trey Lance',                role: 'Quarterback · Los Angeles Chargers',   credential: 'Former No. 3 overall draft pick', img: '/images/trey-lance.jpg' },
  { name: 'Quentin Lake',              role: 'Safety · Los Angeles Rams',            credential: 'UCLA defensive leader', quote: '"Poison Pawn Chess teaches you to slow down and think ahead."', img: '/images/quentin-lake.jpg' },
  { name: 'Darnay Holmes',             role: 'Defensive Back · Atlanta Falcons',     credential: 'UCLA team captain', quote: '"There\'s always an answer to the problem."', img: '/images/darnay-holmes.jpg' },
  { name: 'Jake Bobo',                 role: 'Wide Receiver · Seattle Seahawks',     credential: 'All-Pac-12 Honorable Mention', img: '/images/jake-bobo.jpg' },
  { name: 'Colson Yankoff',            role: 'Tight End · Washington Commanders',    credential: 'Former UCLA multi-position athlete', img: '/images/colson-yankoff.jpg' },
  { name: 'Chase Griffin',             role: 'Quarterback · UCLA',                   credential: '2× National NIL Male Athlete of the Year', quote: '"As a QB, you are in the decision-making business."', img: '/images/chase-griffin.jpg' },
]

const featured = [
  { name: 'Jalen Hurts',   role: 'Super Bowl Champion & MVP',     img: '/images/jalen-hurts.jpg',   body: 'Trains decision-making under pressure through the Poison Pawn system — composure, rapid adaptation, and learning through real-time mistakes, mirroring the demands faced by elite quarterbacks.' },
  { name: 'Mookie Betts',  role: '4× World Series Champion',      img: '/images/mookie-betts.jpg',  body: 'Uses the Poison Pawn system to train decision-making under time pressure and uncertainty — translating the demands of the board into high-stakes moments.' },
  { name: 'Anita Alvarez', role: '3× Olympian · Team USA Captain', img: '/images/anita-alvarez.jpg', body: 'Trains with the Poison Pawn system to develop clarity, timing, and control — the attributes required to lead and perform at the highest levels of international competition.' },
]

export default function TheQuarterbackMindPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="relative bg-black overflow-hidden">
        <img
          src="/images/player-not-a-piece-gallery.jpg"
          alt="Player Not A Piece — World Chess Hall of Fame"
          className="w-full h-[60vh] object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-16 w-full">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              Featured — World Chess Hall of Fame
            </div>
            <h1 className="text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-4">
              The Quarterback Mind
            </h1>
            <p className="text-bone-dim text-lg leading-relaxed max-w-2xl">
              Football is played on a field. But the game is won in the mind.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibition Banner */}
      <div className="bg-venom/10 border-y border-venom/30 py-4">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-venom">
            Game Plan: The Strategy of Chess &amp; Sports · World Chess Hall of Fame &amp; Galleries · Saint Louis · On view May 7, 2026 – May 2027
          </p>
        </div>
      </div>

      {/* About the System */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">The Exhibit</div>
              <h2 className="text-bone text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none mb-6">
                A performance system, recognized.
              </h2>
              <div className="space-y-4 text-bone-dim text-[15px] leading-relaxed">
                <p>
                  Poison Pawn uses chess to help athletes improve their decision-making under pressure.
                  Its work spans the highest levels of sport — the NFL, NBA, MLB, and Olympic competition
                  — as well as leaders and executives in high-performance environments. Beyond anticipation
                  and pattern recognition, the system builds emotional resiliency: keeping one mistake
                  from turning into more.
                </p>
                <p>
                  Its clients include UCLA Athletics, the Toronto Blue Jays, and Team USA&apos;s Artistic
                  Swimming team — including 2024 Olympic silver medalist Anita Alvarez.
                </p>
                <p>
                  Poison Pawn&apos;s performance system — including its custom-designed chess sets and
                  training materials used with professional, Olympic, and collegiate athletes — is featured
                  in the exhibition, alongside artifacts connected to figures such as Garry Kasparov,
                  Wayne Gretzky, and the St. Louis Cardinals.
                </p>
              </div>
            </div>
            <div className="reveal" data-d="2">
              <img
                src="/images/founder-at-exhibit.jpg"
                alt="Seth Makowsky at the World Chess Hall of Fame exhibit"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>

          <div className="reveal mt-12 border-l-2 border-venom pl-6 max-w-2xl">
            <blockquote className="text-bone text-xl italic leading-relaxed">
              &ldquo;What begins to separate the elite top performers is how they process things…
              how they can almost see five moves ahead.&rdquo;
            </blockquote>
            <div className="text-bone-dim text-[13px] mt-3">— Game Plan exhibit, World Chess Hall of Fame</div>
          </div>
        </div>
      </section>

      {/* Featured Champions */}
      <section className="py-16 md:py-20 bg-surface-2 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">The Highest Level of the Game</div>
            <h2 className="text-bone text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none">
              Super Bowl, World Series, and Olympic competitors<br />who train in the Poison Pawn system.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((a, i) => (
              <div key={a.name} className="reveal border border-line bg-surface rounded-sm overflow-hidden" data-d={(i % 3) + 1}>
                <img src={a.img} alt={a.name} className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <div className="text-bone text-lg font-extrabold uppercase tracking-tight mb-1">{a.name}</div>
                  <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-venom mb-4">{a.role}</div>
                  <p className="text-bone-dim text-[13px] leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athlete Roster */}
      <section className="py-16 md:py-20 bg-surface border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-2">Trained in the same system.</div>
            <h2 className="text-bone text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none">
              Authentic training on the Poison Pawn board.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {athletes.map((a, i) => (
              <div key={a.name} className="reveal flex gap-4 border border-line bg-surface-2 rounded-sm p-5" data-d={(i % 3) + 1}>
                <img src={a.img} alt={a.name} className="w-16 h-16 object-cover rounded-sm flex-shrink-0" />
                <div>
                  <div className="text-bone text-[14px] font-bold uppercase tracking-tight">{a.name}</div>
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-venom mb-1">{a.role}</div>
                  <div className="text-pp-muted text-[11px]">{a.credential}</div>
                  {a.quote && <p className="text-bone-dim text-[12px] italic mt-2">{a.quote}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 md:py-20 bg-obsidian border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <div className="reveal">
            <p className="text-bone text-xl leading-relaxed italic mb-4 max-w-2xl mx-auto">
              &ldquo;Be a player in your own game, not a piece in someone else&apos;s.&rdquo;
            </p>
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-8">#PlayerNotAPiece</div>
            <a href="/how-it-works" className="inline-block bg-venom text-black font-semibold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-sm hover:bg-gold-bright transition-colors duration-200">
              Explore the System →
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
