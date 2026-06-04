const cards = [
  {
    n: '01',
    title: 'It reaches the decision networks',
    body: "Intensive strategic training is associated with stronger connectivity in the brain's cognitive-control and decision-making regions — the prefrontal and cingulate networks our method targets.",
    src: 'Chess-expertise neuroimaging review · 2025',
  },
  {
    n: '02',
    title: 'The change is measurable',
    body: 'Long-term practice shows up as enhanced whole-brain connectivity — described as neuroplasticity from skill acquisition, not inference.',
    src: 'Nature · Scientific Reports · 2020',
  },
  {
    n: '03',
    title: 'It shows up on the scan',
    body: 'Where app-based "brain training" left no measurable trace, this kind of training produces structural and functional change visible on neuroimaging.',
    src: 'Peer-reviewed neuroimaging literature',
  },
]

export default function ScienceSection() {
  return (
    <section id="science" className="py-[120px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-16 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            The Science
          </div>
          <h2 className="text-bone text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none mb-6">
            Built on measurable change in the brain.
          </h2>
          <p className="text-bone-dim text-[16px] leading-relaxed">
            Decision-making is a trainable skill — and the change is physical. Deliberate, structured
            practice reshapes the brain&apos;s pattern-recognition and decision-making networks. Our
            method is engineered around that: we apply game theory through a demanding strategic
            environment, then measure the change with our own data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((c, i) => (
            <div
              key={c.n}
              className="reveal border border-line bg-surface-2 p-8 rounded-sm"
              data-d={i + 1}
            >
              <div className="font-mono text-[11px] tracking-[0.2em] text-pp-muted mb-4">{c.n}</div>
              <h3 className="text-bone text-lg font-extrabold uppercase tracking-tight mb-4">
                {c.title}
              </h3>
              <p className="text-bone-dim text-[15px] leading-relaxed mb-4">{c.body}</p>
              <p className="font-mono text-[10px] tracking-[0.16em] text-pp-muted border-t border-line pt-4">
                {c.src}
              </p>
            </div>
          ))}
        </div>

        <p className="font-mono text-[11px] text-pp-muted tracking-[0.04em]">
          // Drawn from published, peer-reviewed neuroscience. Establishes the mechanism our method
          is built on — not a claim that any program guarantees an outcome.
        </p>
      </div>
    </section>
  )
}
