'use client'

import { useEffect, useRef, useState } from 'react'

const bars = [88, 79, 84, 71, 90, 82, 76, 85]

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="data" className="py-[120px] bg-surface-2">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-12 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            The Data Layer
          </div>
          <h2 className="text-bone text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none mb-6">
            Decision-making, finally measurable.
          </h2>
          <p className="text-bone-dim text-[16px] leading-relaxed">
            Our data science team turns your training into a single proprietary index — built from a
            decade of elite performance data — so your progress isn&apos;t a feeling, it&apos;s a
            number that moves.
          </p>
        </div>

        {/* Dashboard card */}
        <div ref={ref} className="reveal border border-line bg-surface rounded-sm overflow-hidden max-w-3xl">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-line">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-venom inline-block" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-bone-dim">
                Decision Profile — Sample
              </span>
            </div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-bone-dim">
              Poison Pawn Index
            </span>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Score panel */}
            <div className="md:w-48 flex-shrink-0 p-8 border-b md:border-b-0 md:border-r border-line flex flex-col gap-2">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-pp-muted">
                Composite
              </div>
              <div className="text-bone text-5xl font-extrabold leading-none">
                84<span className="text-pp-muted text-2xl font-normal">/100</span>
              </div>
              <div className="text-bone-dim text-[12px]">Top-decile · pressure decision-making</div>
              <div className="text-pp-green text-[12px] font-mono mt-2">▲ +6 over 30 days</div>
            </div>

            {/* Bar axes */}
            <div className="flex-1 p-8 flex flex-col justify-center gap-3">
              {bars.map((w, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-line rounded-full overflow-hidden">
                    <div
                      className="h-full bg-venom rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: animated ? `${w}%` : '0%',
                        transitionDelay: `${i * 60}ms`,
                      }}
                    />
                  </div>
                  <span className="text-venom text-[10px]">●</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 font-mono text-[11px] text-pp-muted tracking-[0.04em]">
          // Illustrative profile for layout — replace with real anonymized client data.
        </p>
      </div>
    </section>
  )
}
