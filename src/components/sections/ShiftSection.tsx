import DecisionProfileCard from '@/components/sections/DecisionProfileCard'

export default function ShiftSection() {
  return (
    <section id="shift" className="py-16 md:py-20 lg:py-[120px] relative bg-surface-2">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Copy */}
          <div>
            <div className="reveal mb-6">
              <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
                The System
              </div>
              <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none">
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

          {/* Interactive app card */}
          <div className="reveal">
            <DecisionProfileCard />
          </div>

        </div>
      </div>
    </section>
  )
}
