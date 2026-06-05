const scienceCards = [
  {
    title: 'Neuroplasticity',
    body: "The brain is not fixed. Poison Pawn is designed specifically to trigger neuroplasticity — creating the conditions for deliberate, measurable rewiring. Over time, the system doesn't just sharpen your decision-making. It rewires it.",
  },
  {
    title: 'Pattern Recognition',
    body: "Elite performers appear to slow the game down because they have more patterns trained. Poison Pawn builds that library deliberately, creating pattern recognition that transfers to any high-pressure environment.",
  },
  {
    title: 'Cognitive Endurance',
    body: "Under pressure the brain's prefrontal cortex fatigues. Poison Pawn trains it to hold decision quality deeper into pressure than it could before — so your best thinking is available exactly when it matters most.",
  },
]

const steps = [
  { num: '01', title: 'Assess & onboard', body: 'We come to you. Seth and our team profile your organization — and every individual in it — to establish a decision-making baseline.' },
  { num: '02', title: 'Train on the platform', body: "Your people go onto the app, where each person's decision profile and personalized training live and progress is tracked." },
  { num: '03', title: 'Lead & prescribe', body: "Leadership gets the back end: a clear view of the whole organization's decision profile and the ability to prescribe targeted training." },
  { num: '04', title: 'Go deeper', body: 'Events and retreats bring the method to life in person, for the moments that call for it.' },
]

export default function HowSection() {
  return (
    <section id="how" className="bg-obsidian">


      {/* Problem */}
      <div className="py-[100px] border-b border-line bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              The Problem
            </div>
            <h3 className="text-bone text-3xl md:text-4xl font-extrabold uppercase tracking-tight leading-none mb-6">
              Everyone feels it. Nobody trains for it.
            </h3>
            <p className="text-bone-dim text-[16px] leading-relaxed">
              At the highest level, preparation is world class across every field. The skill is
              there. The effort is there. What nobody has built is a system to train how people make
              decisions when the pressure is highest — the wrong call, the hesitation, the moment
              composure breaks and instinct takes over. That&apos;s not a failure of preparation.
              It&apos;s a cognitive one. And it&apos;s never been deliberately addressed.
            </p>
          </div>
        </div>
      </div>

      {/* Why chess */}
      <div className="py-[100px] border-b border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal max-w-3xl">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              The Tool
            </div>
            <h3 className="text-bone text-3xl md:text-4xl font-extrabold uppercase tracking-tight leading-none mb-6">
              We didn&apos;t choose chess because it&apos;s interesting. We chose it because it works.
            </h3>
            <p className="text-bone-dim text-[16px] leading-relaxed">
              Chess is the most effective environment ever created for training decision-making.
              Every move demands composure, pattern recognition, and the ability to think multiple
              steps ahead — with real consequences on the line. Those aren&apos;t chess skills.
              They&apos;re performance skills, and they transfer directly to any environment where
              decisions determine outcomes. Years of results across professional sports, the Olympics,
              and the boardroom have proven it.
            </p>
          </div>
        </div>
      </div>

      {/* Science 3-col */}
      <div className="py-[100px] border-b border-line bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12 max-w-2xl">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              The Science
            </div>
            <h3 className="text-bone text-3xl md:text-4xl font-extrabold uppercase tracking-tight leading-none">
              Why this works at a level most training never reaches.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
            {scienceCards.map((c, i) => (
              <div key={i} className="reveal bg-surface p-8 md:p-10 relative" data-d={i + 1}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-venom" />
                <h3 className="text-venom text-[18px] font-extrabold uppercase tracking-[0.04em] mb-4">{c.title}</h3>
                <p className="text-bone-dim text-[14px] leading-[1.75]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-14 max-w-2xl">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              How It Works · Inside an engagement
            </div>
            <h3 className="text-bone text-3xl md:text-4xl font-extrabold uppercase tracking-tight leading-none mb-4">
              It starts with an assessment.
            </h3>
            <p className="text-bone-dim text-[16px] leading-relaxed">
              Every engagement begins the same way — by understanding how your people decide. From
              there, it becomes a system your organization runs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((s, i) => (
              <div key={s.num} className="reveal" data-d={i + 1}>
                <div className="font-mono text-4xl font-bold text-venom/30 mb-4 leading-none">{s.num}</div>
                <h3 className="text-bone text-[16px] font-extrabold uppercase tracking-tight mb-3">{s.title}</h3>
                <p className="text-bone-dim text-[14px] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="reveal text-bone-dim text-[16px]">
            It all begins with one step.{' '}
            <a href="#apply" className="text-venom hover:text-gold-bright transition-colors font-semibold">
              Request a briefing and we&apos;ll start with an assessment.
            </a>
          </p>
        </div>
      </div>

    </section>
  )
}
