export default function ShiftSection() {
  return (
    <section id="shift" className="py-[120px] relative bg-surface-2">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Copy */}
          <div>
            <div className="reveal mb-6">
              <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
                The System
              </div>
              <h2 className="text-bone text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none">
                Most people train execution. We train the decisions behind them.
              </h2>
            </div>

            <p className="reveal text-bone-dim text-[16px] leading-relaxed mb-5">
              Poison Pawn is a decision-making training system delivered through an app. You train
              through chess-based sessions, the app builds a complete picture of how you think and
              where you break down, and then gives you specific drills to close those gaps.
            </p>
            <p className="reveal text-bone-dim text-[16px] leading-relaxed mb-5">
              Every member of your organization gets their own decision profile, targeted training,
              and performance data tracked over time. The system is app-driven, with direct support
              from the Poison Pawn team throughout.
            </p>
            <p className="reveal text-bone-dim text-[16px] leading-relaxed">
              What makes it work at a deeper level is neuroplasticity — the brain&apos;s ability to
              form new pathways and change how it processes information. Every session isn&apos;t
              just practice.{' '}
              <em className="text-bone not-italic font-medium">
                It&apos;s literally reshaping how you think.
              </em>
            </p>
          </div>

          {/* App card */}
          <div className="reveal">
            <div className="border border-line bg-surface rounded-sm overflow-hidden max-w-sm mx-auto lg:mx-0">
              {/* App topbar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-line">
                <span className="font-sans text-[13px] font-semibold tracking-[0.2em] uppercase text-bone">
                  Poison Pawn
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-pp-muted">
                  Profile
                </span>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-line">
                {['Profile', 'Signals', 'Drills'].map((tab, i) => (
                  <div
                    key={tab}
                    className={`px-5 py-2.5 font-mono text-[10px] tracking-[0.16em] uppercase cursor-default ${
                      i === 0
                        ? 'text-venom border-b-2 border-venom -mb-px'
                        : 'text-pp-muted'
                    }`}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              {/* Profile content */}
              <div className="p-5">
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-pp-muted mb-1">
                  Decision Profile
                </div>
                <div className="text-bone text-[22px] font-extrabold uppercase tracking-tight leading-none mb-1">
                  Volatile Creator
                </div>
                <div className="text-bone-dim text-[12px] mb-5">Brilliance under chaos</div>

                {/* Radar chart SVG */}
                <svg width="100%" height="130" viewBox="0 0 300 140" className="mb-4">
                  <polygon
                    points="150,20 240,68 230,115 150,135 60,110 65,62"
                    fill="rgba(212,162,74,0.1)"
                    stroke="#D4A24A"
                    strokeWidth="1.5"
                  />
                  <polygon points="150,50 205,78 198,108 150,120 97,100 102,72" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <polygon points="150,80 178,90 175,103 150,108 122,96 124,84" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  {[
                    [150, 20], [240, 68], [230, 115], [150, 135], [60, 110], [65, 62],
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="3" fill="#D4A24A" />
                  ))}
                  <text x="150" y="12" textAnchor="middle" fill="rgba(243,243,243,0.6)" fontSize="9" fontFamily="monospace">SPEED</text>
                  <text x="252" y="70" fill="rgba(243,243,243,0.6)" fontSize="9" fontFamily="monospace">INIT</text>
                  <text x="22" y="70" fill="rgba(243,243,243,0.6)" fontSize="9" fontFamily="monospace">STAB</text>
                </svg>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { val: '94', label: 'Accuracy', gold: true },
                    { val: '2.1×', label: 'Speed', gold: false },
                    { val: '↑68%', label: 'Recovery', gold: true },
                  ].map((s) => (
                    <div key={s.label} className="bg-surface-2 rounded-sm p-3 text-center">
                      <div className={`text-[18px] font-extrabold leading-none mb-1 ${s.gold ? 'text-venom' : 'text-bone'}`}>
                        {s.val}
                      </div>
                      <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-pp-muted">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Next move */}
                <div className="flex items-center justify-between border border-line rounded-sm px-4 py-3">
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-pp-muted mb-0.5">Next Move</div>
                    <div className="text-bone text-[13px] font-semibold">Pressure Drill #14</div>
                  </div>
                  <span className="text-venom text-lg">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
