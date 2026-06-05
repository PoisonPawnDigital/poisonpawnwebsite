export const metadata = { title: 'Case Studies — Poison Pawn' }

export default function CaseStudiesPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-black">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
              Case Studies
            </div>
            <h1 className="text-bone text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none mb-6">
              The Results<br />Speak.
            </h1>
            <p className="text-bone-dim text-lg leading-relaxed">
              Elite organizations. Measurable outcomes. Real performance gains.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 01 — MLB */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-10">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              Case Study 01 — Major League Baseball
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none">
              From the basement to Game 7 of the World Series.
            </h2>
          </div>
          <p className="reveal text-bone-dim text-[16px] leading-relaxed max-w-3xl mb-12">
            The Poison Pawn training system, built into the Toronto Blue Jays — in the same season
            they went from last in the AL East to the World Series.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="reveal">
              <h3 className="text-venom font-mono text-[11px] tracking-[0.2em] uppercase mb-3">The Starting Point</h3>
              <h4 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">Dead last, twenty games back.</h4>
              <p className="text-bone-dim text-[15px] leading-relaxed">
                The year before, the club finished 74–88 — last in its division, twenty games out of
                first. A roster many had written off as aging and in need of a reset. The talent was
                there. What the organization wanted was a sharper, more repeatable way of making
                decisions under pressure, at every level of the club.
              </p>
            </div>
            <div className="reveal" data-d="2">
              <h3 className="text-venom font-mono text-[11px] tracking-[0.2em] uppercase mb-3">The Method</h3>
              <h4 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">A decision-making system, installed.</h4>
              <p className="text-bone-dim text-[15px] leading-relaxed">
                Poison Pawn&apos;s training is built on one idea: the difference between a winning and
                losing organization is rarely talent — it&apos;s the quality of decisions made under
                pressure, over a full 162-game season. The Blue Jays integrated the system club-wide,
                building a shared decision-making language across players and coaching staff. Read the
                situation. Stay composed after a mistake. Never let one bad moment become two.
              </p>
            </div>
          </div>

          {/* Stats block */}
          <div className="reveal border border-line bg-surface-2 rounded-sm p-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-8 mb-8 pb-8 border-b border-line">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted mb-1">Before</div>
                <div className="text-bone-dim text-[14px]">2024 · Last in AL East: 74 wins</div>
              </div>
              <div className="text-venom text-2xl self-center">→</div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom mb-1">After</div>
                <div className="text-bone text-[14px] font-semibold">2025 · Division Champions: 94 wins</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { n: '74 → 94', k: 'Win Improvement', s: 'in one year' },
                { n: '1st', k: 'AL East Title', s: 'Division champions' },
                { n: '3rd', k: 'Pennant', s: 'In franchise history' },
                { n: '.265', k: 'Team Batting Avg', s: 'Led all of MLB' },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-bone text-2xl font-extrabold leading-none mb-1">{s.n}</div>
                  <div className="text-venom font-mono text-[10px] tracking-[0.14em] uppercase mb-0.5">{s.k}</div>
                  <div className="text-pp-muted text-[12px]">{s.s}</div>
                </div>
              ))}
            </div>
            <p className="text-pp-muted text-[11px] font-mono mt-6 pt-4 border-t border-line">
              Only the 14th worst-to-first turnaround in the divisional era (since 1969). Figures from MLB and public records.
            </p>
          </div>

          <div className="reveal max-w-3xl">
            <h4 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">A whole-organization transformation.</h4>
            <p className="text-bone-dim text-[15px] leading-relaxed">
              The data tells the story — decision quality improved across the roster, and twenty more
              wins followed. The brain can be trained to make better decisions under pressure. Over
              162 games, that training compounds.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 02 — Olympic Games */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface-2 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-10">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              Case Study 02 — Olympic Games
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none">
              Twenty years without a medal. Then Olympic Silver.
            </h2>
          </div>
          <p className="reveal text-bone-dim text-[16px] leading-relaxed max-w-3xl mb-12">
            The Poison Pawn training system and the U.S. artistic swimming team — from missing the
            Games entirely to the Olympic podium.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="reveal">
              <h3 className="text-venom font-mono text-[11px] tracking-[0.2em] uppercase mb-3">The Starting Point</h3>
              <h4 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">The margin between qualifying and missing the Games entirely was 0.66 points.</h4>
              <p className="text-bone-dim text-[15px] leading-relaxed">
                For two decades, the program hadn&apos;t reached an Olympic podium — and it had stopped
                qualifying for the team event altogether across four straight Games. The low point came
                one year out, when the team missed Olympic qualification by 0.66 points. The margin
                between heartbreak and history had never been thinner.
              </p>
            </div>
            <div className="reveal" data-d="2">
              <h3 className="text-venom font-mono text-[11px] tracking-[0.2em] uppercase mb-3">The Method</h3>
              <h4 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">Composure is a trainable skill.</h4>
              <p className="text-bone-dim text-[15px] leading-relaxed">
                In a sport judged on precision under enormous pressure, the smallest mental error is
                the difference between a podium and fourth place. Poison Pawn&apos;s training builds
                exactly that capacity: reading patterns, executing a process rather than reacting, and
                — critically — compartmentalizing a mistake so it never bleeds into the next moment.
              </p>
            </div>
          </div>

          <div className="reveal border border-line bg-surface rounded-sm p-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-8 mb-8 pb-8 border-b border-line">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted mb-1">Before</div>
                <div className="text-bone-dim text-[14px]">Olympic medals, prior 20 years: 0 since 2004</div>
              </div>
              <div className="text-venom text-2xl self-center">→</div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom mb-1">After</div>
                <div className="text-bone text-[14px] font-semibold">Paris 2024 Silver 🥈</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { n: '20 yrs', k: 'Medal Drought Ended', s: 'First since 2004' },
                { n: '0.66 pts', k: 'From Missing Qualification', s: 'one year prior' },
                { n: '1996', k: 'Last Better Finish', s: 'Best result in 28 years' },
                { n: '2nd', k: 'Of All Nations', s: 'Behind only China' },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-bone text-2xl font-extrabold leading-none mb-1">{s.n}</div>
                  <div className="text-venom font-mono text-[10px] tracking-[0.14em] uppercase mb-0.5">{s.k}</div>
                  <div className="text-pp-muted text-[12px]">{s.s}</div>
                </div>
              ))}
            </div>
            <p className="text-pp-muted text-[11px] font-mono mt-6 pt-4 border-t border-line">
              The U.S. ended a 20-year Olympic medal drought with silver in the team event at Paris 2024 — its best Olympic finish since 1996 — one year after missing qualification by 0.66 points. Figures from Olympic and public records.
            </p>
          </div>

          <div className="reveal max-w-3xl">
            <h4 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-4">From the edge of elimination to the podium.</h4>
            <p className="text-bone-dim text-[15px] leading-relaxed">
              The margin was 0.66 points. At that level, the difference between heartbreak and a
              podium isn&apos;t physical — it&apos;s the quality of decisions made when the pressure is
              highest. One year later, the team stood on the Olympic podium. The brain can be trained
              to perform differently under pressure. This is what that looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 03 — UCLA */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-surface border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-10">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              Case Study 03 — UCLA Athletics
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none">
              UCLA Athletics.
            </h2>
          </div>
          <p className="reveal text-bone-dim text-[16px] leading-relaxed max-w-3xl mb-16">
            Poison Pawn was integrated into UCLA Athletics starting in 2019. What began with a single
            quarterback spread through the program — and produced two separate championship runs
            across different sports.
          </p>

          {/* Story 01 — Football */}
          <div className="reveal mb-16 pb-16 border-b border-line">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-pp-muted mb-4">
              Story 01 — Football
            </div>
            <h3 className="text-bone text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mb-6">
              From 12 interceptions to the record books.
            </h3>
            <p className="text-bone-dim text-[15px] leading-relaxed max-w-3xl mb-6">
              In 2019, UCLA brought in Poison Pawn with a single mandate: sharpen its players&apos;
              decision-making under time and pressure. The first athlete in the program was a sophomore
              quarterback in his first year as a starter. That season he completed just 59% of his
              passes and threw 12 interceptions.
            </p>
            <div className="flex items-center gap-6 border border-line bg-surface-2 rounded-sm p-6 max-w-sm">
              <div className="text-center">
                <div className="text-pp-muted text-2xl font-extrabold">59%</div>
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-pp-muted">2019</div>
              </div>
              <div className="text-venom text-xl">→</div>
              <div className="text-center">
                <div className="text-venom text-2xl font-extrabold">69.6%</div>
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-venom">UCLA school record</div>
              </div>
            </div>
            <p className="text-bone-dim text-[15px] leading-relaxed max-w-3xl mt-6">
              From 59% to 69.6%. From 12 interceptions to all-time records. The data tracks exactly
              how decision-making improves when the brain is trained deliberately.
            </p>
          </div>

          {/* Story 02 — Volleyball */}
          <div className="reveal">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-pp-muted mb-4">
              Story 02 — Volleyball
            </div>
            <h3 className="text-bone text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none mb-6">
              Back-to-Back.<br />National Champions.
            </h3>
            <p className="text-bone-dim text-[15px] leading-relaxed max-w-3xl mb-10">
              17 years without a national title. Then back-to-back championships. What changed was how
              they made decisions when matches got tight.
            </p>
            <div className="mb-4">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom mb-3">
                See It In Action
              </div>
              <div className="aspect-video max-w-3xl rounded-sm overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/952086841"
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="UCLA Volleyball — National Champions"
                  className="w-full h-full"
                />
              </div>
            </div>
            <p className="text-bone-dim text-[15px] leading-relaxed max-w-3xl mt-6">
              14 straight wins to close a season no one expected them to win. Then 15 of 16 to repeat.
              That kind of run under pressure doesn&apos;t happen by accident — it happens when
              decision-making is trained.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-20 lg:py-[120px] bg-obsidian border-t border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <div className="reveal">
            <h2 className="text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-10">
              The Edge<br />Starts Here.
            </h2>
            <a
              href="/bring-it-to-your-team"
              className="inline-block bg-venom text-black font-semibold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-sm hover:bg-gold-bright transition-colors duration-200"
            >
              Bring It To Your Team →
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
