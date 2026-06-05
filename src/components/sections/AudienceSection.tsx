import {
  Trophy,
  TrendingUp,
  Stethoscope,
  Briefcase,
  Shield,
  GraduationCap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Arena = {
  icon: LucideIcon
  k: string
  title: string
  body: string
}

const arenas: Arena[] = [
  {
    icon: Trophy,
    k: '/ ELITE ATHLETICS',
    title: 'Athletes & Teams',
    body: 'From the quarterback reading a defense to the Olympian managing the final, we train the split-second judgment that separates the great from the best.',
  },
  {
    icon: TrendingUp,
    k: '/ FINANCE',
    title: 'Traders & Funds',
    body: 'For desks where composure, risk calibration and recovery after a loss decide the P&L, we build decision discipline that holds under volatility.',
  },
  {
    icon: Stethoscope,
    k: '/ MEDICINE',
    title: 'Surgeons & Clinicians',
    body: 'Where a call under pressure carries a life, we train the composure, pattern recognition and clarity that hold when the margin for error is zero.',
  },
  {
    icon: Briefcase,
    k: '/ LEADERSHIP',
    title: 'Executives & Founders',
    body: 'For leaders making high-consequence calls with incomplete information, we sharpen strategic foresight and stability when the room is watching.',
  },
  {
    icon: Shield,
    k: '/ TACTICAL',
    title: 'Military & First Responders',
    body: 'Where decisions carry the highest stakes of all, we train threat assessment, tempo and clarity when there is no time to think twice.',
  },
  {
    icon: GraduationCap,
    k: '/ EDUCATION',
    title: 'Educators & Institutions',
    body: 'Decision-making can be taught. We bring the framework into institutions as a discipline in its own right — training the next generation to think clearly under pressure.',
  },
]

export default function AudienceSection() {
  return (
    <section id="who" className="py-16 md:py-20 lg:py-[120px] bg-obsidian">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="reveal mb-16 max-w-xl">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            One framework · Every arena
          </div>
          <h2 className="text-bone text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-none">
            A framework for any decision that matters.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line overflow-hidden rounded-sm">
          {arenas.map((a, i) => {
            const Icon = a.icon
            return (
              <div
                key={a.k}
                className="reveal bg-obsidian p-8 md:p-10 group hover:bg-surface transition-colors duration-300"
                data-d={(i % 4) + 1}
              >
                <Icon className="w-7 h-7 text-bone-dim mb-6 group-hover:text-venom transition-colors duration-300" strokeWidth={1.25} />
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-pp-muted mb-3">
                  {a.k}
                </div>
                <h3 className="text-bone text-[18px] font-extrabold uppercase tracking-tight mb-3">
                  {a.title}
                </h3>
                <p className="text-bone-dim text-[14px] leading-relaxed">{a.body}</p>
              </div>
            )
          })}
        </div>

        <p className="reveal mt-10 text-bone-dim text-[15px] italic">
          And anywhere else the next decision carries real weight.
        </p>
      </div>
    </section>
  )
}
