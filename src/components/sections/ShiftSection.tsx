export default function ShiftSection() {
  const cells = [
    {
      n: '01',
      title: 'Personal',
      body: 'We start with you — a deep profile of your personality, cognitive tendencies, strengths and blind spots, and the way you actually make decisions.',
    },
    {
      n: '02',
      title: 'Game-theoretic',
      body: 'We use game theory and the chessboard as a live environment to train sharper judgment, cleaner risk calibration and composure under real pressure.',
    },
    {
      n: '03',
      title: 'Measured',
      body: 'Decision-making can be trained — and we measure it. Our data science team tracks progress across proprietary metrics, so improvement is something we can show, not just assert.',
    },
  ]

  return (
    <section id="shift" className="py-[120px] relative bg-surface-2">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-12 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            What we actually do
          </div>
          <h2 className="text-bone text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none">
            We train decision-making itself.
          </h2>
        </div>

        <p className="reveal text-bone text-xl md:text-2xl leading-relaxed max-w-3xl mb-16 font-light">
          The way you decide is driven by your personality — your instincts, your tells, how you
          handle risk and pressure. We assess all of it, then use game theory and the chessboard to
          train a sharper, faster, steadier way of deciding.{' '}
          <em className="text-bone not-italic font-medium">
            It can be trained — and almost no one in the world knows how.
          </em>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cells.map((c) => (
            <div
              key={c.n}
              className="reveal border border-line bg-surface p-8 rounded-sm"
              data-d={cells.indexOf(c) + 1}
            >
              <div className="font-mono text-[11px] tracking-[0.2em] text-pp-muted mb-4">{c.n}</div>
              <h3 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-3">
                {c.title}
              </h3>
              <p className="text-bone-dim text-[15px] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
