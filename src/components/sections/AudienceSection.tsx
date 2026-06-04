const arenas = [
  { k: '/ ELITE ATHLETICS', title: 'Athletes & Teams', body: 'From the quarterback reading a defense to the Olympian managing the final, we train the split-second judgment that separates the great from the best.' },
  { k: '/ FINANCE', title: 'Traders & Funds', body: 'For desks where composure, risk calibration and recovery after a loss decide the P&L, we build decision discipline that holds under volatility.' },
  { k: '/ MEDICINE', title: 'Surgeons & Clinicians', body: 'Where a call under pressure carries a life, we train the composure, pattern recognition and clarity that hold when the margin for error is zero.' },
  { k: '/ LEADERSHIP', title: 'Executives & Founders', body: 'For leaders making high-consequence calls with incomplete information, we sharpen strategic foresight and stability when the room is watching.' },
  { k: '/ TACTICAL', title: 'Military & First Responders', body: 'Where decisions carry the highest stakes of all, we train threat assessment, tempo and clarity when there is no time to think twice.' },
  { k: '/ EDUCATION', title: 'Educators & Institutions', body: 'Decision-making can be taught. We bring the framework into institutions as a discipline in its own right — training the next generation to think clearly under pressure.' },
]

export default function AudienceSection() {
  return (
    <section id="who" className="py-[120px] bg-obsidian">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-16 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            One framework · Every arena
          </div>
          <h2 className="text-bone text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none mb-6">
            A framework for any decision that matters.
          </h2>
          <p className="text-bone-dim text-[16px] leading-relaxed">
            Poison Pawn isn&apos;t built for one profession. It&apos;s built for the moment of
            decision — and that moment looks the same whether you&apos;re reading a defense, pricing
            risk, calling a play in an operating room, or leading a room that&apos;s watching you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {arenas.map((a, i) => (
            <div
              key={a.k}
              className="reveal bg-obsidian p-8"
              data-d={(i % 4) + 1}
            >
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-venom mb-4">
                {a.k}
              </div>
              <h3 className="text-bone text-xl font-extrabold uppercase tracking-tight mb-3">
                {a.title}
              </h3>
              <p className="text-bone-dim text-[14px] leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>

        <p className="reveal mt-12 text-bone-dim text-[16px] italic">
          And anywhere else the next decision carries real weight.
        </p>
      </div>
    </section>
  )
}
