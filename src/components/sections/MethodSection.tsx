const pillars = [
  { idx: '01', title: 'Perception', body: 'See the decisive structure before others see the pieces.' },
  { idx: '02', title: 'Judgment', body: 'Read risk and threat early, weigh it cleanly, and commit.' },
  { idx: '03', title: 'Adaptability', body: 'Re-plan in real time — and control the tempo of the game.' },
  { idx: '04', title: 'Composure', body: 'Recover fast and stay clear when the stakes are highest.' },
]

export default function MethodSection() {
  return (
    <section id="method" className="py-16 md:py-20 lg:py-[120px] relative bg-obsidian">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="reveal mb-16 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            The Poison Pawn Method™
          </div>
          <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none mb-6">
            Four dimensions of how you decide.
          </h2>
          <p className="text-bone-dim text-[16px] leading-relaxed">
            Great decision-making isn&apos;t one skill — it&apos;s a small set of trainable capacities.
            We assess where you stand on each, then build the training to move them. The framework is
            refined over nearly a decade with the world&apos;s best performers, and validated by our
            data science team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line overflow-hidden rounded-sm">
          {pillars.map((p, i) => (
            <div
              key={p.idx}
              className="reveal bg-obsidian p-10 flex flex-col"
              data-d={i + 1}
            >
              <div className="font-mono text-[28px] font-bold text-venom mb-8 leading-none">
                {p.idx}
              </div>
              <h3 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-4">
                {p.title}
              </h3>
              <p className="text-bone-dim text-[15px] leading-relaxed flex-1">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-bone-dim text-[14px] tracking-[0.02em]">
          We measure each, then personalize your training to your profile.{' '}
          <a href="#apply" className="text-venom hover:text-gold-bright transition-colors">
            Start with an assessment →
          </a>
        </div>
      </div>
    </section>
  )
}
