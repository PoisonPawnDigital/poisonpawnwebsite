const quotes = [
  { q: "It's just as important for our team to train our minds as it is our physical strength or our volleyball skills.", who: 'John Speraw', role: 'Head Coach, UCLA Men\'s Volleyball · 2023 & 2024 National Champions' },
  { q: "It definitely helped my game. If I move this one way, something else can happen — it's just like life. That week changed my life.", who: 'C.J. Stroud', role: 'NFL Quarterback' },
  { q: "I train every week with Seth. There's so much strategy — learning to think quickly and see steps ahead — and it translates into my sport.", who: 'Michael Andrew', role: 'Olympic Gold Medalist · Swimming' },
  { q: "I'm getting something from this training I can't get anywhere else. I learn so much about my own strengths and weaknesses — and I apply them in my day-to-day life.", who: 'Cameron Diaz', role: 'Actor & Entrepreneur' },
]

const caseStudies = [
  {
    href: '/case-studies/football-qb',
    arena: '/ Football · Quarterback',
    stat: '69.6%',
    statLabel: 'Single-season completion — a UCLA school record, up from 59%',
    badge: 'Verified · UCLA Athletics',
    title: 'From turnover-prone to a record season.',
    rows: [
      { lbl: 'Situation', txt: 'A starting quarterback whose hesitation under pressure capped his completion rate and led to costly turnovers.' },
      { lbl: 'The work', txt: 'A multi-season training partnership focused on pre-snap reads, composure, and decision speed.' },
      { lbl: 'Result', txt: 'A 69.6% completion season — a UCLA single-season school record — and a climb up the program\'s all-time passing charts.' },
    ],
  },
  {
    href: '/case-studies/baseball-bluejays',
    arena: '/ Baseball · Organization',
    stat: '74 → 94',
    statLabel: 'Regular-season wins, in a single season — last place to the World Series',
    badge: 'Verified · MLB records',
    title: 'From last place to the World Series.',
    rows: [
      { lbl: 'Situation', txt: 'A club coming off a last-place finish, looking to sharpen decision-making across the organization.' },
      { lbl: 'The work', txt: 'An organization-wide training partnership through the turnaround season.' },
      { lbl: 'Result', txt: 'During the partnership, the club improved by 20 wins — 74 to 94 — and reached the World Series.' },
    ],
  },
  {
    href: '/case-studies/artistic-swimming',
    arena: '/ Artistic Swimming · Team USA',
    stat: '~20 yrs',
    statLabel: 'Olympic medal drought ended — Olympic silver',
    badge: 'Verified · Olympic / Team USA',
    title: 'A twenty-year Olympic medal drought, ended.',
    rows: [
      { lbl: 'Situation', txt: "A national team that hadn't medaled at the Olympics in roughly two decades — and had once missed qualifying by 0.66 of a point." },
      { lbl: 'The work', txt: 'A training partnership on composure and decision-making through the qualifying and Games cycle.' },
      { lbl: 'Result', txt: "Olympic silver — the program's first Olympic medal in about twenty years." },
    ],
  },
  {
    href: '/case-studies/volleyball-ucla',
    arena: "/ Volleyball · UCLA Men's",
    stat: '2× champions',
    statLabel: 'Back-to-back national titles, from a 12–12 season',
    badge: 'Verified · NCAA records',
    title: 'From .500 to back-to-back national champions.',
    rows: [
      { lbl: 'Situation', txt: 'A program coming off a .500 (12–12) season.' },
      { lbl: 'The work', txt: 'A team training partnership on decision-making under pressure.' },
      { lbl: 'Result', txt: 'Back-to-back national championships (2023 & 2024).' },
    ],
    quote: '"It\'s just as important for our team to train our minds as it is our physical strength." — John Speraw, Head Coach, UCLA Men\'s Volleyball',
  },
]

export default function ProofSection() {
  return (
    <section id="proof" className="py-[120px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-16">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">Proof</div>
          <h2 className="text-bone text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none">
            Trusted by champions.
          </h2>
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {quotes.map((q, i) => (
            <div key={i} className="reveal border border-line bg-surface-2 p-8 rounded-sm" data-d={(i % 2) + 1}>
              <div className="text-venom text-5xl font-serif leading-none mb-4">&ldquo;</div>
              <blockquote className="text-bone text-[15px] leading-relaxed mb-6 italic">
                {q.q}
              </blockquote>
              <div className="text-bone-dim text-[13px]">
                <strong className="text-bone font-semibold">{q.who}</strong>
                <br />{q.role}
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-bone-dim text-[15px] mb-16 italic">
          &hellip; and many more, across sport, business and beyond.
        </p>

        {/* Case studies */}
        <div className="reveal mb-6">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-pp-muted mb-3">Case studies</div>
          <p className="text-pp-muted text-[14px] max-w-[580px]">
            Four documented engagements across sport — each a last-to-first transformation, with
            verified, measured results. Select any study to read the full dossier.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {caseStudies.map((cs) => (
            <a
              key={cs.href}
              href={cs.href}
              className="reveal group flex flex-col md:flex-row border border-line hover:border-venom/50 bg-surface-2 rounded-sm transition-colors duration-300"
            >
              {/* Left stat */}
              <div className="md:w-64 flex-shrink-0 p-8 border-b md:border-b-0 md:border-r border-line">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom mb-3">{cs.arena}</div>
                <div className="text-bone text-3xl font-extrabold leading-none mb-2">{cs.stat}</div>
                <div className="text-bone-dim text-[12px] leading-snug mb-4">{cs.statLabel}</div>
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-pp-muted border border-line inline-block px-2 py-1">
                  {cs.badge}
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 p-8">
                <h4 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-6">{cs.title}</h4>
                <div className="flex flex-col gap-3 mb-6">
                  {cs.rows.map((r) => (
                    <div key={r.lbl} className="flex gap-6">
                      <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-venom w-20 flex-shrink-0 pt-0.5">{r.lbl}</div>
                      <div className="text-bone-dim text-[13px] leading-relaxed">{r.txt}</div>
                    </div>
                  ))}
                </div>
                {cs.quote && (
                  <p className="text-bone-dim text-[13px] italic border-l-2 border-venom pl-4 mb-4">{cs.quote}</p>
                )}
                <span className="text-venom text-[13px] group-hover:text-gold-bright transition-colors">
                  Read the full dossier →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
