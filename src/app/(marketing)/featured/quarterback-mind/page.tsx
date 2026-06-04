import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Quarterback Mind — Poison Pawn',
  description:
    'An NFL roster of quarterbacks, champions across sport, and a training method now recognized at the World Chess Hall of Fame.',
}

const accolades = [
  'Super Bowl Champion & MVP',
  '4× World Series Champion',
  '3× Olympian',
  'NFL Offensive Rookie of the Year',
  'Rose Bowl MVP',
  'Big Ten Offensive Player of the Year',
  'School all-time record holders',
]

const bigNums = [
  { n: '13', label: 'NFL athletes featured' },
  { n: '4', label: 'Pro leagues & the Olympics · NFL, NBA, MLB, Team USA' },
  { n: '1', label: 'NFL Offensive Rookie of the Year' },
]

export default function QuarterbackMindPage() {
  return (
    <main className="min-h-screen bg-obsidian text-bone pt-20">

      {/* Ribbon */}
      <div className="bg-venom/10 border-b border-venom/30 py-3 px-8 text-center">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom mr-4">As Featured At</span>
        <span className="text-bone-dim text-[12px]">
          The World Chess Hall of Fame &amp; Galleries ·{' '}
          <a
            href="https://worldchesshof.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-venom hover:text-gold-bright underline transition-colors"
          >
            Game Plan: The Strategy of Chess &amp; Sports
          </a>
        </span>
      </div>

      <div className="max-w-[860px] mx-auto px-8 pb-24">

        {/* Topbar */}
        <div className="flex items-center justify-between py-8 border-b border-line mb-12">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="relative w-[16px] h-[16px] flex-shrink-0" aria-hidden="true">
              <span className="absolute inset-0 border border-venom" style={{ right: '4px', bottom: '4px' }} />
              <span className="absolute inset-0 border border-venom" style={{ top: '4px', left: '4px' }} />
            </span>
            <span className="font-sans text-[13px] font-semibold tracking-[0.22em] uppercase text-bone group-hover:text-venom transition-colors">
              Poison&nbsp;Pawn
            </span>
          </Link>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted">
            Featured — World Chess Hall of Fame
          </span>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-3">
            Elite Mindset Training
          </div>
          <div className="font-sans text-[13px] font-semibold tracking-[0.26em] uppercase text-bone-dim mb-2">
            Poison&nbsp;Pawn
          </div>
          <h1 className="text-bone text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-none mb-6">
            The Quarterback Mind
          </h1>
          <p className="text-bone-dim text-xl mb-4">
            Football is played on a field.<br />
            <strong className="text-bone">But the game is won in the mind.</strong>
          </p>
          <p className="text-bone-dim text-[16px] leading-relaxed max-w-2xl">
            Poison Pawn is a <strong className="text-bone">decision-making system for elite athletes.</strong>{' '}
            Using chess as its training ground, the method sharpens anticipation, composure, pattern
            recognition, and execution under pressure — the traits that separate good performers from
            great ones when the moment arrives.
          </p>
        </div>

        {/* Exhibit callout */}
        <div className="border border-venom/40 bg-venom/5 rounded-sm p-8 mb-14">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom mb-3">
            ♞&nbsp; The Exhibit
          </div>
          <h3 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-2">
            Game Plan: The Strategy of Chess &amp; Sports
          </h3>
          <div className="text-bone-dim text-[13px] font-mono tracking-[0.06em] mb-4">
            World Chess Hall of Fame &amp; Galleries · Saint Louis · On view May 7, 2026 – May 2027
          </div>
          <p className="text-bone-dim text-[15px] leading-relaxed">
            Poison Pawn&apos;s performance system — including its custom-designed chess sets and
            training materials used with professional, Olympic, and collegiate athletes to build
            decision-making, focus, and composure under pressure — is featured in the exhibition,
            alongside artifacts connected to figures such as Garry Kasparov, Wayne Gretzky, and the
            St. Louis Cardinals.
          </p>
        </div>

        {/* Museum section */}
        <section className="mb-14 pb-14 border-b border-line">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted mb-4">
            In the museum&apos;s words
          </div>
          <h2 className="text-bone text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight mb-6">
            A performance system, recognized.
          </h2>
          <p className="text-bone-dim text-[15px] leading-relaxed mb-4">
            Poison Pawn uses chess to help athletes improve their{' '}
            <strong className="text-bone">decision-making under pressure.</strong> Its work spans the
            highest levels of sport — the NFL, NBA, MLB, and Olympic competition — as well as leaders
            and executives in high-performance environments. Beyond anticipation and pattern
            recognition, the system builds{' '}
            <strong className="text-bone">
              emotional resiliency: keeping one mistake from turning into more.
            </strong>
          </p>
          <p className="text-bone-dim text-[15px] leading-relaxed mb-8">
            Its clients include UCLA Athletics, the Toronto Blue Jays, and Team USA&apos;s Artistic
            Swimming team — including 2024 Olympic silver medalist Anita Alvarez.
          </p>
          <blockquote className="border-l-2 border-venom pl-6 text-bone-dim text-[16px] italic leading-relaxed">
            &ldquo;What begins to separate the elite top performers is how they process things&hellip;
            how they can almost see five moves ahead.&rdquo;
            <cite className="block mt-2 text-pp-muted text-[12px] font-mono not-italic">
              — Game Plan exhibit, World Chess Hall of Fame
            </cite>
          </blockquote>
        </section>

        {/* Exhibit image */}
        <div className="mb-14">
          <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-surface border border-line">
            <Image
              src="/images/wchof-exhibit-installation.jpg"
              alt="Poison Pawn display at Game Plan: The Strategy of Chess & Sports"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-mono text-[10px] text-pp-muted tracking-[0.1em] mt-3">
            The Poison Pawn display — Game Plan: The Strategy of Chess &amp; Sports, Saint Louis
          </p>
        </div>

        {/* Big numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line mb-14">
          {bigNums.map((n) => (
            <div key={n.n} className="bg-surface p-8">
              <div className="text-venom text-5xl font-extrabold leading-none mb-3">{n.n}</div>
              <div className="text-bone-dim text-[13px] leading-snug">{n.label}</div>
            </div>
          ))}
        </div>

        {/* Champions section */}
        <section className="mb-14 pb-14 border-b border-line">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted mb-4">
            Featured champions
          </div>
          <h2 className="text-bone text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight mb-3">
            The highest level of the game.
          </h2>
          <p className="text-bone-dim text-[14px] mb-8">
            Super Bowl, World Series, and Olympic competitors who train in the Poison Pawn system.
          </p>

          {/* Athlete image grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { src: '/images/cj-stroud.jpg', name: 'C.J. Stroud', role: 'NFL QB' },
              { src: '/images/anita-alvarez.jpg', name: 'Anita Alvarez', role: 'Olympic Silver' },
              { src: '/images/dorian-thompson-robinson.jpg', name: 'Dorian Thompson-Robinson', role: 'NFL QB' },
              { src: '/images/josh-dobbs.jpg', name: 'Josh Dobbs', role: 'NFL QB' },
              { src: '/images/justin-fields.jpg', name: 'Justin Fields', role: 'NFL QB' },
              { src: '/images/trey-lance.jpg', name: 'Trey Lance', role: 'NFL QB' },
              { src: '/images/darnay-holmes.jpg', name: 'Darnay Holmes', role: 'NFL CB' },
              { src: '/images/jake-bobo.jpg', name: 'Jake Bobo', role: 'NFL WR' },
            ].map((a) => (
              <div key={a.src} className="relative aspect-square rounded-sm overflow-hidden bg-surface border border-line group">
                <Image src={a.src} alt={a.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3">
                  <div className="text-bone text-[12px] font-bold leading-tight">{a.name}</div>
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-venom">{a.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accolades */}
        <section className="mb-14">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted mb-4">
            The accolades in the room
          </div>
          <h2 className="text-bone text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight mb-6">
            What the system has been around.
          </h2>
          <div className="flex flex-wrap gap-3">
            {accolades.map((a) => (
              <span
                key={a}
                className="border border-line text-bone-dim text-[13px] px-4 py-2 rounded-sm hover:border-venom/40 hover:text-bone transition-colors"
                dangerouslySetInnerHTML={{ __html: a.replace(/\*\*(.*?)\*\*/g, '<strong class="text-bone">$1</strong>') }}
              />
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="pt-8 border-t border-line">
          <Link
            href="/#media"
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-venom hover:text-gold-bright transition-colors"
          >
            ← Back to Media
          </Link>
        </div>
      </div>
    </main>
  )
}
