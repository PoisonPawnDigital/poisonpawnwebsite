export const metadata = { title: 'The Answer Is Always on the Board — Poison Pawn' }

export default function NbaChessPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="relative bg-black overflow-hidden">
        <img
          src="/images/player-not-a-piece-gallery.jpg"
          alt="Player Not A Piece — WCHOF gallery"
          className="w-full h-[55vh] object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-16 w-full">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
              Chess · Basketball · The Decision Behind the Decision
            </div>
            <h1 className="text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-4">
              The Answer Is<br />Always on the Board.
            </h1>
            <p className="text-bone-dim text-lg leading-relaxed max-w-2xl">
              Chess is the NBA&apos;s new obsession — Wembanyama in the park, Derrick Rose&apos;s Vegas
              tournament, Giannis thinking three moves ahead. But playing the game and weaponizing
              it are different things. Poison Pawn is the authority on turning chess into a competitive
              edge.
            </p>
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-pp-muted mt-6">Spring 2026 · From Westwood to the NBA</div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="bg-surface border-t border-line">
        <div className="max-w-[720px] mx-auto px-5 sm:px-8 py-16 md:py-20">

          <p className="text-bone-dim text-[16px] leading-relaxed mb-8">
            This spring, ESPN put a name to something that had been spreading through NBA locker rooms
            for years: the league&apos;s quiet chess boom. Giannis Antetokounmpo stripping LeBron James on
            a late possession because he&apos;d read the play before it happened. Victor Wembanyama taking
            on all comers in Washington Square Park. Derrick Rose building an entire chess festival in
            Las Vegas alongside Magnus Carlsen. The reasons they give are remarkably consistent: not
            about becoming a coffeehouse champion, but about anticipating a move, recognizing patterns,
            staying a step ahead, staying calm when one decision decides everything.
          </p>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-8">
            But there&apos;s a difference between playing chess and weaponizing it. For the league, the game
            is a hobby. For one program, it&apos;s a discipline. The NBA is discovering the game. Poison
            Pawn is the authority on turning it into an edge.
          </p>

          <h2 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-2 mt-12">Westwood · February 2023</h2>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted mb-6">The day the system showed up in Westwood</div>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            It began with something small: a new chess set on the glass table in the lobby of UCLA&apos;s
            Mo Ostin Basketball Center. Nobody on the team had ordered it. It had been delivered by the
            founder of Poison Pawn — a crisp black-and-white board, a set of redesigned pieces — and
            it was less a gift than a delivery system for a method. When Jaime Jaquez Jr. sat down
            nearby and noticed it, the basketball conversation was over. He wanted to know if the man
            who&apos;d brought it was still around. He wanted in. As The Athletic chronicled that spring,
            the Bruins were quietly becoming something stranger than a Pac-12 contender. They were
            becoming a chess team.
          </p>

          <h2 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-2 mt-12">The System Underneath</h2>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted mb-6">Most players treat it as a hobby. Poison Pawn made it training.</div>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            Here is the distinction the whole story turns on. For most of the league, chess is a
            pastime. Poison Pawn turned it into a method. Founded by Seth Makowsky and his wife, the
            program uses the game as a vehicle for cognitive training: a way to teach athletes to
            process faster, anticipate further, and decide cleanly under pressure. Makowsky — whom
            The Athletic has singled out as the most unusual quarterback guru in the game — has been
            a performance coach at UCLA since 2019, and the same chess-based system that ran through
            the football program ran onto those boards in the basketball facility.
          </p>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            The framework has a name. Makowsky teaches it as CDP — Control the Middle, Develop the
            Pieces, Protect the King — three chess principles that double as a decision-making
            operating system. Michigan State volleyball became the first collegiate women&apos;s program
            in the country to partner with Poison Pawn, and the client list runs through NFL
            quarterbacks, MVP-caliber baseball players, Olympic gold medalists and NBA champions.
          </p>

          <h2 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-2 mt-12">Inside Westwood</h2>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted mb-6">A team that played mind games</div>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            What made UCLA different wasn&apos;t that one or two players dabbled — it was that the habit
            took over the room. By the time the Bruins reached the 2023 NCAA Tournament, more of the
            team played than didn&apos;t. Every player had his own board; two community sets lived at the
            Ostin Center; injured guard Jaylen Clark closed out an online match against Jaquez moments
            before media availability, while Russell Stong finished off Tyger Campbell down the hall.
            Where other programs killed downtime on PlayStation, these guys played chess.
          </p>
          <blockquote className="border-l-2 border-venom pl-6 my-8">
            <p className="text-bone text-lg italic leading-relaxed">
              &ldquo;Every move you make is your own.&rdquo;
            </p>
            <footer className="text-bone-dim text-[13px] mt-3">— Jaime Jaquez Jr., on chess, to The Athletic</footer>
          </blockquote>

          <h2 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-2 mt-12">Westwood to South Beach</h2>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted mb-6">Jaquez carried it to the league</div>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            Jaquez is the clearest proof that this travels. He singled out one thing as the part
            reshaping his game: the Blitz work with Makowsky, which he credited with helping him make
            good, quick decisions — and stick with them. As a Miami Heat rookie, Jaquez made the 2024
            All-Rookie First Team, launched his own bot on Chess.com — joining Luka Dončić and Jaylen
            Brown — and was written up in the New Yorker for trading games with a teenage prodigy.
            He has said that playing chess before games gets him sharp and in the right mindset for
            the court.
          </p>
          <blockquote className="border-l-2 border-venom pl-6 my-8">
            <p className="text-bone text-lg italic leading-relaxed">
              &ldquo;It&apos;s like the game of life. There are so many reads, so many options… You have to
              constantly switch it up, adjust, and react to your opponent.&rdquo;
            </p>
            <footer className="text-bone-dim text-[13px] mt-3">— Jaime Jaquez Jr., Collegiate Chess Podcast</footer>
          </blockquote>

          <h2 className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-2 mt-12">The Through-Line</h2>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted mb-6">It was never about chess</div>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            Strip away the boards and the bots and the Washington Square Park crowds, and what the
            whole movement is really chasing is a single transferable skill: the ability to make a
            great decision when the moment is fast and the consequence is real. Anticipate. Read the
            trap. Commit. Protect the king.
          </p>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            The NBA found chess. Poison Pawn built the method that turns it into an edge — the
            framework, the protocols, the discipline underneath the hobby. Not that elite athletes
            play the game, but that someone figured out how to make the game train them. The pieces
            were always on the board. The advantage is in knowing how to use them.
          </p>
          <p className="text-bone-dim text-[16px] leading-relaxed mb-6">
            This spring, UCLA&apos;s women cut down the nets for the school&apos;s first NCAA championship, led
            by senior Gabriela Jaquez — Jaime&apos;s younger sister. The same program that made chess
            part of its culture now houses champions on both sides of the building. The next chapter
            is already being written.
          </p>

          <div className="mt-12 p-8 border border-line bg-surface-2 rounded-sm">
            <p className="text-bone text-xl italic leading-relaxed text-center">
              &ldquo;Everyone plays chess now. We make it a weapon.&rdquo;
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-line">
            <p className="text-bone-dim text-[14px] leading-relaxed italic">
              A Poison Pawn feature on chess as cognitive training in basketball. Reporting on UCLA
              drawn from The Athletic; league-wide context from ESPN and ChessBase; Jaquez remarks
              from the Collegiate Chess Podcast. Player, not a piece.®
            </p>
          </div>

        </div>
      </article>

      <section className="py-12 bg-obsidian border-t border-line text-center">
        <div className="reveal">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">#PlayerNotAPiece</div>
          <a href="/bring-it-to-your-team" className="inline-block bg-venom text-black font-semibold text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-sm hover:bg-gold-bright transition-colors duration-200">
            Bring It To Your Team →
          </a>
        </div>
      </section>

    </main>
  )
}
