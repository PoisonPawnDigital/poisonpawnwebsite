const conditions = [
  {
    title: 'The decisions you make affect other people.',
    body: "Whether you lead a team, manage an organization, or operate in environments where your call determines the outcome for others — the weight of that responsibility is real. This system was built for people who carry it, and for the organizations they lead.",
  },
  {
    title: 'The margin between your best and worst decision is significant.',
    body: "At the highest level, the difference between a good decision and a bad one isn't small. It changes outcomes. It changes careers. It changes the trajectory of entire organizations. If that margin matters to you and your team, training it should too.",
  },
  {
    title: 'You have never had a system built specifically to train this.',
    body: "Every other system trains what you and your team do. Your physical preparation, your technical skills, your processes. This is the missing one — built specifically to train how you and everyone around you decides.",
  },
]

export default function AudienceSection() {
  return (
    <section id="who" className="py-[120px] bg-obsidian">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-16 max-w-xl">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            Who This Is For
          </div>
          <h2 className="text-bone text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none">
            This is for you if.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {conditions.map((c, i) => (
            <div
              key={i}
              className="reveal bg-obsidian p-12 relative"
              data-d={i + 1}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-venom" />
              <h3 className="text-bone text-[22px] font-extrabold uppercase tracking-tight leading-tight mb-6">
                {c.title}
              </h3>
              <p className="text-bone-dim text-[14px] leading-[1.75]">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <a
            href="#apply"
            className="inline-block border border-venom text-venom text-[13px] font-semibold tracking-[0.1em] uppercase px-8 py-4 rounded-sm hover:bg-venom hover:text-black transition-all duration-200"
          >
            Apply For Training →
          </a>
        </div>
      </div>
    </section>
  )
}
