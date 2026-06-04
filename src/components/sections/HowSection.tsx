const steps = [
  { num: '01', title: 'Assess & onboard', body: 'We come to you. Seth and our team profile your organization — and every individual in it — to establish a decision-making baseline.' },
  { num: '02', title: 'Train on the platform', body: "Your people go onto the app, where each person's decision profile and personalized training live and progress is tracked." },
  { num: '03', title: 'Lead & prescribe', body: "Leadership gets the back end: a clear view of the whole organization's decision profile and each individual's — and the ability to prescribe targeted training." },
  { num: '04', title: 'Go deeper', body: 'Events and retreats bring the method to life in person, for the moments that call for it.' },
]

export default function HowSection() {
  return (
    <section id="how" className="py-[120px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-16 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            How it works · Inside an engagement
          </div>
          <h2 className="text-bone text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none mb-6">
            It starts with an assessment.
          </h2>
          <p className="text-bone-dim text-[16px] leading-relaxed">
            Every engagement begins the same way — by understanding how your people decide. From
            there, it becomes a system your organization runs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, i) => (
            <div key={s.num} className="reveal" data-d={i + 1}>
              <div className="font-mono text-4xl font-bold text-venom/30 mb-4 leading-none">
                {s.num}
              </div>
              <h4 className="text-bone text-[16px] font-extrabold uppercase tracking-tight mb-3">
                {s.title}
              </h4>
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
    </section>
  )
}
