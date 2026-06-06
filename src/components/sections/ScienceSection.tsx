const cards = [
  {
    n: '01',
    title: 'Neuroplasticity',
    body: "The brain is not fixed. Every time you make a decision under pressure, you are either reinforcing an existing neural pathway or building a new one. Poison Pawn is designed specifically to trigger this process — creating the conditions for neuroplasticity to occur deliberately, repeatedly, and measurably. Over time your brain doesn't just get better at the drills. It rewires how it responds to pressure entirely.",
    src: 'Chess-expertise neuroimaging review · 2025',
  },
  {
    n: '02',
    title: 'Pattern Recognition',
    body: "The brain makes decisions by matching current situations to patterns it has already stored. The more patterns you have trained, the faster and more accurately you decide — even in situations you have never seen before. This is why elite performers appear to slow the game down. They aren't faster. They have more patterns. Poison Pawn trains that library deliberately.",
    src: 'Nature · Scientific Reports · 2020',
  },
  {
    n: '03',
    title: 'Cognitive Endurance',
    body: "Under sustained pressure, the brain's prefrontal cortex — responsible for rational decision-making — begins to fatigue. When it does, the brain defaults to emotional, reactive responses instead of deliberate ones. Poison Pawn trains cognitive endurance specifically: conditioning the brain to maintain decision quality deeper into pressure than it could before.",
    src: 'Peer-reviewed neuroimaging literature',
  },
]

export default function ScienceSection() {
  return (
    <section id="science" className="py-16 md:py-20 lg:py-[120px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="reveal mb-16 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            The Science
          </div>
          <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none mb-6">
            Why this works at a level most training never reaches.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line mb-8">
          {cards.map((c, i) => (
            <div
              key={c.n}
              className="reveal bg-surface relative p-10"
              data-d={i + 1}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-venom" />
              <h3 className="text-venom text-[18px] font-extrabold uppercase tracking-[0.04em] mb-5">
                {c.title}
              </h3>
              <p className="text-bone-dim text-[14px] leading-[1.75] mb-6">{c.body}</p>
              <p className="font-mono text-[10px] tracking-[0.16em] text-pp-muted border-t border-line pt-4">
                {c.src}
              </p>
            </div>
          ))}
        </div>

        <p className="font-mono text-[11px] text-pp-muted tracking-[0.04em]">
          {'// Drawn from published, peer-reviewed neuroscience. Establishes the mechanism our method is built on — not a claim that any program guarantees an outcome.'}
        </p>
      </div>
    </section>
  )
}
