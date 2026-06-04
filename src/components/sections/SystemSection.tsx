const loopSteps = [
  { label: 'Assess', body: 'We profile how you decide today — speed, stability, composure, consistency.' },
  { label: 'Prescribe', body: 'The platform builds a program for your personality and decision style.' },
  { label: 'Train', body: 'Physical sets, drills, journal and AI coaching turn theory into instinct.' },
  { label: 'Measure', body: 'Proprietary metrics track the gain — and feed the next cycle.' },
]

const components = [
  { tag: 'Physical', title: 'Custom Training Gear', body: 'Tournament-grade custom chess sets, vision boards, journals and field gear. The physical anchor — a daily ritual that builds a chess mind you carry off the board and into life.' },
  { tag: 'Digital', title: 'The Poison Pawn App', body: "An AI coach trained on a decade of elite decision data, paired with a vision board and a performance journal — guiding your training the way our coaches would, every day." },
  { tag: 'Software', title: 'Team Decision Intelligence', body: "Leaders assess the decision-making profile of any individual or team, then prescribe targeted training to improve speed, stability, composure and consistency." },
  { tag: 'Human', title: 'Elite Coaching', body: 'Direct work with founder Seth Makowsky and a bench of certified Poison Pawn strategists, for those who want the highest level of personal guidance.' },
]

export default function SystemSection() {
  return (
    <section id="system" className="py-[120px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-10 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            The System
          </div>
          <h2 className="text-bone text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none mb-6">
            One closed loop. Built to compound.
          </h2>
          <p className="text-bone-dim text-[16px] leading-relaxed">
            Physical gear, software, AI, and elite coaching — engineered to work as a single system, not four products.
          </p>
        </div>

        {/* Loop steps */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {loopSteps.map((s) => (
            <div key={s.label} className="flex gap-4">
              <span className="text-venom font-mono text-xl leading-none mt-1 flex-shrink-0">→</span>
              <div>
                <h3 className="text-bone font-bold uppercase tracking-tight text-[15px] mb-1">{s.label}</h3>
                <p className="text-bone-dim text-[14px] leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Component cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {components.map((c, i) => (
            <div
              key={c.tag}
              className="reveal border border-line bg-surface-2 p-8 rounded-sm"
              data-d={(i % 4) + 1}
            >
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-venom border border-venom/40 inline-block px-2 py-0.5 mb-5">
                {c.tag}
              </div>
              <h4 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-3">{c.title}</h4>
              <p className="text-bone-dim text-[15px] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
