export default function HomeSystemSection() {
  return (
    <section className="py-16 md:py-20 lg:py-[120px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="reveal">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
              The System
            </div>
            <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none mb-8">
              Most people train execution.<br />We train the decisions<br />behind them.
            </h2>
            <div className="space-y-5 text-bone-dim text-[16px] leading-relaxed max-w-[520px]">
              <p>
                Poison Pawn is a decision-making training system delivered through an app. You train
                through chess-based sessions, the app builds a complete picture of how you think and
                where you break down, and then gives you specific drills to close those gaps. Every
                member of your organization gets their own decision profile, targeted training, and
                performance data tracked over time. The system is app-driven, with direct support from
                the Poison Pawn team throughout.
              </p>
              <p>
                What makes it work at a deeper level is neuroplasticity — the brain&apos;s ability to
                form new pathways and change how it processes information. Every session isn&apos;t
                just practice. It&apos;s literally reshaping how you think, how you see situations, and
                how you respond under pressure. Over time, the system doesn&apos;t just sharpen your
                decision-making. It rewires it.
              </p>
            </div>
          </div>

          {/* Right — app mockup */}
          <div className="reveal" data-d="2">
            <div className="mx-auto h-[540px] max-w-[360px] overflow-hidden rounded-[28px] border border-line bg-black shadow-2xl shadow-black/40 sm:h-[600px] lg:h-[620px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/app-your-trajectory.png"
                alt="Poison Pawn app — Your Trajectory decision profile"
                className="block h-auto w-full -translate-y-[64px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
