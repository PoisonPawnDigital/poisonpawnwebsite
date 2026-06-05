const stats = [
  { n: '15',      label: 'NFL Quarterbacks Trained' },
  { n: '100+',    label: 'Elite Organizations' },
  { n: '10 Years',label: 'Training Elite Performers' },
  { n: '20+',     label: 'Industries Served' },
]

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-[120px] bg-surface-2">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="reveal mb-12">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom">
            By The Numbers
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal border border-line bg-surface rounded-sm p-8"
              data-d={(i % 4) + 1}
            >
              <div className="text-bone text-4xl sm:text-5xl font-extrabold leading-none tracking-tight mb-3">
                {s.n}
              </div>
              <div className="text-bone-dim text-[14px] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
