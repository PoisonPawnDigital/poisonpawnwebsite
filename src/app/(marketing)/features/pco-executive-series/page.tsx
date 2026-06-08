export const metadata = { title: 'POISON PAWN® | Player Not A Piece' }

export default function PcoExecutiveSeriesPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-black">
        <img
          src="/images/founder-at-exhibit.jpg"
          alt="Seth Makowsky at the World Chess Hall of Fame"
          className="w-full max-h-[60vh] object-cover object-top"
        />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            P/Co Executive Speaker Series · A Poison Pawn Feature
          </div>
          <h1 className="text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-6">
            Protect<br />the King.
          </h1>
          <p className="text-bone-dim text-lg leading-relaxed max-w-2xl">
            In a private conversation with Patricof Co&apos;s roster of athlete-investors, Poison Pawn
            founder Seth Makowsky made a quiet, radical case: the skill that separates champions from
            everyone else is the same one that separates great investors from broke ones — the
            discipline of the decision itself.
          </p>
          <div className="flex flex-wrap gap-8 mt-8 font-mono text-[10px] tracking-[0.18em] uppercase text-pp-muted">
            <span>Featuring <span className="text-bone">Seth Makowsky</span></span>
            <span>Moderated by <span className="text-bone">Allie Barry, VP · Patricof Co</span></span>
            <span>Format <span className="text-bone">Recorded Conversation</span></span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="bg-surface border-t border-line">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8 py-16 md:py-20">

          <p className="text-bone-dim text-[16px] leading-relaxed mb-8">
            There is a moment, in every game and every market, when the board tilts. The clock
            accelerates, the information thins, and the gap between the people who rise and the people
            who unravel turns out to have almost nothing to do with talent — and almost everything to
            do with the choice made in the next two seconds. That tension is where Poison Pawn lives,
            and it&apos;s the premise Seth Makowsky carried into the Patricof Co Executive Speaker Series.
          </p>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-8">
            The audience earned its first fortune on fields, courts and tracks. But they were sitting
            in it as something else now: investors, allocators, decision-makers with real capital and
            real consequences on the line.
          </p>

          {/* P/Co stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10 border border-line bg-surface-2 rounded-sm p-6">
            {[
              { n: '230+', k: 'Athlete-Investor Clients' },
              { n: '$16B+', k: 'Client Contract Earnings' },
              { n: '103', k: 'Championships on the Roster' },
              { n: '17', k: 'Olympic Gold Medals' },
            ].map(s => (
              <div key={s.k} className="text-center">
                <div className="text-bone text-2xl font-extrabold leading-none mb-1">{s.n}</div>
                <div className="text-pp-muted text-[11px] leading-snug">{s.k}</div>
              </div>
            ))}
          </div>

          <h2 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-2 mt-12">The Unlikely Coach</h2>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted mb-6">He didn&apos;t come from sports. He came from the boardroom.</div>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            Here is the detail that makes Makowsky the right guest for an investment firm: he is not,
            by origin, a sports guy at all. The first college football game he ever attended, he was
            standing on the UCLA sideline as a coach. His background was running and growing companies
            — CEO of smaller organizations, then larger ones, turning them around — before he built
            his own advisory group taking on complex turnarounds for banks, airlines, airports, hotels
            and restaurant groups. It was inside those rooms that the real lesson formed.
          </p>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            In parallel, almost by accident, chess became an obsession. He went from studying with a
            grandmaster once a week to studying with grandmasters around the world. He became his own
            test subject: making faster decisions, growing comfortable with failure, treating everything
            as a process. Then, while running due diligence on an elite California sports academy, he
            noticed half the facility was devoted to the mental side of the game — pattern recognition,
            sequencing, coordinate training. It looked exactly like how he&apos;d been studying chess.
            Olympic volleyball players and backup quarterbacks started breaking records. Word of mouth
            did the rest.
          </p>

          <h2 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-2 mt-12">The Thesis</h2>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted mb-6">Everyone elite is in the same business</div>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            Chess, for Makowsky, is not the subject — it&apos;s the simulator. Within the first four moves
            of a game, there are more than 288 billion possible positions. That overwhelming complexity
            is exactly the point: it forces process thinking. A framework for deciding, rehearsed
            thousands of times in a small window, instead of waiting for the real moment to arrive once.
          </p>
          <blockquote className="border-l-2 border-venom pl-6 my-8">
            <p className="text-bone text-lg italic leading-relaxed">
              &ldquo;At the end of the day, you&apos;re in the decision-making business. If you make really,
              really good decisions, you&apos;re going to win.&rdquo;
            </p>
            <footer className="text-bone-dim text-[13px] mt-3">— Seth Makowsky</footer>
          </blockquote>

          <h2 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-2 mt-12">Under Pressure</h2>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted mb-6">Two engines: the will to win, the fear of losing</div>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            There are personality types. The impulsive decider moves fast and sometimes recklessly.
            The perfectionist overthinker won&apos;t move until the risk is zero, and so moves too late.
            The work is making tiny adjustments to each — getting the overthinker comfortable deciding
            faster, giving the impulsive decider a beat of process before instinct fires. Tiny
            adjustments that unlock massive results — like a quarterback going from the most turnovers
            in the league one season to the fewest the next.
          </p>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            But press him on the single biggest separator under pressure and the answer turns almost
            philosophical: the enthusiasm to win versus the fear of failure. They can look identical
            from the outside — same sweat, same stakes — yet they produce opposite decisions. One
            reaches; one flinches. And the great ones accept, in advance, that losing is part of it.
          </p>

          <h2 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-2 mt-12">The Method</h2>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted mb-6">To slow the game down, you train faster than the game</div>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            A quarterback might have three seconds before a very expensive, very motivated defender
            arrives. So Makowsky trains him to decide in under one. Sweating, under noise, under an
            athletic protocol that mimics the real chaos and then turns it up — so that three seconds,
            on game day, feels like an eternity.
          </p>
          <blockquote className="border-l-2 border-venom pl-6 my-8">
            <p className="text-bone text-lg italic leading-relaxed">
              &ldquo;You can study weightlifting. You can take the class. But at some point you have to
              lift the weight if you want to get stronger.&rdquo;
            </p>
            <footer className="text-bone-dim text-[13px] mt-3">— Seth Makowsky</footer>
          </blockquote>

          <h2 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-2 mt-12">The Investor&apos;s Lens</h2>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted mb-6">The same question a backer asks a founder</div>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            As Makowsky described how he reads an athlete under pressure, Allie Barry recognized her
            own job. It was, she said, almost exactly what P/Co weighs when it sits across from a
            founder.
          </p>
          <blockquote className="border-l-2 border-venom pl-6 my-8">
            <p className="text-bone text-lg italic leading-relaxed">
              &ldquo;Is this founder tough enough mentally? If they take a dip in sales, are they going to
              be able to make a comeback — to put that play behind them and keep growing the company?&rdquo;
            </p>
            <footer className="text-bone-dim text-[13px] mt-3">— Allie Barry, Vice President, Patricof Co</footer>
          </blockquote>

          <h2 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-2 mt-12">The One Principle</h2>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted mb-6">The zero multiplier</div>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            Asked for the single idea every listener should carry out of the room, Makowsky didn&apos;t
            reach for motivation. He reached for risk management. In chess, rule number one is to
            protect the king. It doesn&apos;t matter how brilliantly you&apos;re playing — leave the king
            exposed for one move and the whole game ends.
          </p>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            But this was never really about chess. You can be crushing it on the field, crushing it in
            life, and make one genuinely bad decision off it — and it&apos;s a zero multiplier. Every rep,
            every sacrifice, every disciplined year goes to zero instantly. It&apos;s the most important
            thing in chess, and the most important thing in life.
          </p>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            It is also, almost word for word, the first law of investing. Markets don&apos;t ruin you for
            the deals you miss; they ruin you for the position that wipes you out. A portfolio that
            touches zero stays at zero, no matter how brilliant every prior decision was.
          </p>

          <div className="mt-12 p-8 border border-line bg-surface-2 rounded-sm">
            <p className="text-bone text-xl italic leading-relaxed text-center">
              &ldquo;More than training. An operating system for decisions.&rdquo;
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-line">
            <p className="text-bone-dim text-[14px] leading-relaxed italic">
              A Poison Pawn feature on the Patricof Co Executive Speaker Series, a private conversation
              series recorded for P/Co&apos;s athlete clients and moderated by VP Allie Barry.
              Player, not a piece.®
            </p>
          </div>

        </div>
      </article>

      <section className="py-12 bg-obsidian border-t border-line text-center">
        <div className="reveal">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">#PlayerNotAPiece</div>
          <a href="/founder" className="inline-block bg-venom text-black font-semibold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-sm hover:bg-gold-bright transition-colors duration-200">
            Meet the Founder →
          </a>
        </div>
      </section>

    </main>
  )
}
