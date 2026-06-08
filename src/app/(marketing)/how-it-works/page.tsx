export const metadata = { title: 'POISON PAWN® | Player Not A Piece' }

const pillars = [
  {
    n: '01',
    title: 'Neuroplasticity',
    body: 'The brain is not fixed. Every time you make a decision under pressure, you are either reinforcing an existing neural pathway or building a new one. Poison Pawn is designed specifically to trigger this process — creating the conditions for neuroplasticity to occur deliberately, repeatedly, and measurably. Over time your brain doesn\'t just get better at the drills. It rewires how it responds to pressure entirely.',
    cite: 'Chess-expertise neuroimaging review · 2025',
  },
  {
    n: '02',
    title: 'Pattern Recognition',
    body: 'The brain makes decisions by matching current situations to patterns it has already stored. The more patterns you have trained, the faster and more accurately you decide — even in situations you have never seen before. This is why elite performers appear to slow the game down. They aren\'t faster. They have more patterns. Poison Pawn trains that library deliberately, building pattern recognition that transfers to any high-pressure environment.',
    cite: 'Nature · Scientific Reports · 2020',
  },
  {
    n: '03',
    title: 'Cognitive Endurance',
    body: 'Under sustained pressure, the brain\'s prefrontal cortex — responsible for rational decision-making — begins to fatigue. When it does, the brain defaults to emotional, reactive responses instead of deliberate ones. Poison Pawn trains cognitive endurance specifically — conditioning the brain to maintain decision quality deeper into pressure than it could before. The result is that your best thinking stays available exactly when it matters most.',
    cite: 'Peer-reviewed neuroimaging literature',
  },
]

const conditions = [
  {
    h3: 'The decisions you make affect other people.',
    body: 'Whether you lead a team, manage an organization, or operate in environments where your call determines the outcome for others — the weight of that responsibility is real. This system was built for people who carry it, and for the organizations they lead.',
  },
  {
    h3: 'The margin between your best and worst decision is significant.',
    body: 'At the highest level, the difference between a good decision and a bad one isn\'t small. It changes outcomes. It changes careers. It changes the trajectory of entire organizations. If that margin matters to you and your team, training it should too.',
  },
  {
    h3: 'You have never had a system built specifically to train this.',
    body: 'Every other system trains what you and your team do. Your physical preparation, your technical skills, your processes. This is that system — built specifically to train how you and everyone around you decides.',
  },
]

export default function HowItWorksPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-black">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal max-w-2xl mx-auto text-center">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
              The System
            </div>
            <h1 className="text-bone text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none mb-6">
              Performance Breaks Down<br />When Decisions Do.
            </h1>
            <p className="text-bone-dim text-lg leading-relaxed max-w-[520px] mx-auto">
              Poison Pawn was built to solve the one problem every high-performance organization has
              — but no one has ever trained for. Until now.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
              The Problem
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none mb-8">
              Everyone feels it.<br />Nobody trains for it.
            </h2>
            <p className="text-bone-dim text-[16px] leading-relaxed">
              At the highest level, preparation is world class across every field. The skill is there.
              The effort is there. What nobody has built is a system to train how people make decisions
              when the pressure is highest — the wrong call, the hesitation, the moment composure
              breaks and instinct takes over.
            </p>
            <p className="text-bone-dim text-[16px] leading-relaxed mt-5">
              That&apos;s not a failure of preparation. It&apos;s a cognitive one. And it&apos;s never been
              deliberately addressed.
            </p>
          </div>
        </div>
      </section>

      {/* The Origin */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface-2">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left half — photo */}
            <div className="reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/seth-keynote.jpg"
                alt="Seth Makowsky speaking to a room of executives"
                className="w-full h-auto rounded-sm"
              />
            </div>
            {/* Right half — the origin */}
            <div className="reveal" data-d="2">
              <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
                The Origin
              </div>
              <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none mb-8">
                Built Through Years<br />in the Room.
              </h2>
              <p className="text-bone-dim text-[16px] leading-relaxed">
                Poison Pawn was built from years spent working directly with elite performers across
                sports, business, and leadership. The pattern was always the same — preparation was
                exceptional, but the gap was always decision-making under pressure. So we built a
                system specifically to train it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Tool */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal max-w-3xl">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
              The Tool
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none mb-8">
              We Didn&apos;t Choose Chess Because It&apos;s Interesting.<br />We Chose It Because It Works.
            </h2>
            <p className="text-bone-dim text-[16px] leading-relaxed">
              Chess is the most effective environment ever created for training decision-making. Every
              move demands composure, pattern recognition, and the ability to think multiple steps
              ahead — with real consequences on the line. Those aren&apos;t chess skills. They&apos;re
              performance skills, and they transfer directly to any environment where decisions
              determine outcomes. Six years of results across professional sports, the Olympics, and
              the boardroom have proven it.
            </p>
          </div>
        </div>
      </section>

      {/* The Science */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface-2">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              The Science
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none max-w-3xl">
              Why This Works At A Level Most Training Never Reaches.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.n}
                className="reveal border border-line bg-surface rounded-sm p-8"
                data-d={(i % 3) + 1}
              >
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-venom border border-venom/40 inline-block px-2 py-0.5 mb-5">
                  {p.n}
                </div>
                <h3 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">
                  {p.title}
                </h3>
                <p className="text-bone-dim text-[14px] leading-relaxed mb-5">{p.body}</p>
                <p className="font-mono text-[10px] tracking-[0.12em] text-pp-muted border-t border-line pt-4">
                  {p.cite}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* This Is For You If */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface-2 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              Who This Is For
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none">
              This Is For You If.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conditions.map((c, i) => (
              <div
                key={i}
                className="reveal border border-line bg-surface rounded-sm p-8"
                data-d={(i % 3) + 1}
              >
                <h3 className="text-bone text-xl font-extrabold uppercase tracking-tight leading-snug mb-4">
                  {c.h3}
                </h3>
                <p className="text-bone-dim text-[14px] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See It In Practice — Case studies CTA */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-black border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-10 bg-line" />
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-venom">
                Case Studies
              </span>
              <span className="h-px w-10 bg-line" />
            </div>
            <h2 className="text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] mb-6">
              See It<br />In Practice.
            </h2>
            <p className="text-bone-dim text-[16px] leading-relaxed mb-10 max-w-lg mx-auto">
              Real organizations. Real results. See how Poison Pawn has changed the way
              high-performance groups operate.
            </p>
            <a
              href="/case-studies"
              className="inline-block border border-venom text-venom font-mono text-[12px] tracking-[0.18em] uppercase px-8 py-4 rounded-sm hover:bg-venom hover:text-black transition-colors duration-200"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
