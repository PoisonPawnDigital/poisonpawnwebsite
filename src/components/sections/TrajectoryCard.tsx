'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Animated "Your Trajectory" progress-screen mockup for the home page.
 * Recreates the app's Progress tab (trait trajectory) as a live, in-code
 * phone frame — sparklines draw in and rows stagger up when the card
 * scrolls into view. No screenshot asset required.
 */

type Trait = {
  label: string
  value: number
  delta?: number // negative = down (red), positive = up (green)
  points: string // sparkline polyline points in a 0..100 x 4..26 box
}

const TRAITS: Trait[] = [
  { label: 'Tempo',        value: 83, delta: -3, points: '0,12 20,8 40,11 60,7 80,10 100,15' },
  { label: 'Initiative',   value: 51, delta: -1, points: '0,13 20,12 40,15 60,13 80,15 100,17' },
  { label: 'Adaptability', value: 33, delta: 1,  points: '0,21 20,22 40,19 60,21 80,18 100,15' },
  { label: 'Endurance',    value: 77,            points: '0,11 20,9 40,12 60,8 80,10 100,9' },
  { label: 'Stability',    value: 32, delta: -2, points: '0,15 20,18 40,16 60,20 80,19 100,23' },
  { label: 'Awareness',    value: 64,            points: '0,13 20,15 40,12 60,14 80,12 100,12' },
]

const DOWN = '#C44536'
const UP = '#7DD181'
const GOLD = '#D4A24A'

function Sparkline({ points, visible, delay }: { points: string; visible: boolean; delay: number }) {
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-[90px] h-[30px]">
      <polyline
        points={points}
        fill="none"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 240,
          strokeDashoffset: visible ? 0 : 240,
          transition: `stroke-dashoffset 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        }}
      />
    </svg>
  )
}

export default function TrajectoryCard() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const rowStyle = (i: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(8px)',
    transition: `opacity 0.5s ease ${150 + i * 90}ms, transform 0.5s ease ${150 + i * 90}ms`,
  })

  return (
    <div
      ref={ref}
      className="w-full max-w-[320px] mx-auto lg:mx-0 rounded-[28px] border border-line bg-black overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3.5 pb-2">
        <span className="text-bone text-[13px] font-semibold tabular-nums">1:50</span>
        <div className="flex items-center gap-2">
          <span className="flex items-end gap-[2px] h-3">
            {[5, 7, 9, 11].map((h) => (
              <span key={h} className="w-[3px] bg-bone rounded-[1px]" style={{ height: h }} />
            ))}
          </span>
          <span className="flex items-center gap-[3px] border border-bone/60 rounded-[3px] px-1 py-[1px]">
            <span className="text-bone text-[9px] font-bold leading-none tabular-nums">16</span>
            <span className="w-2.5 h-1.5 bg-bone rounded-[1px]" />
          </span>
        </div>
      </div>

      {/* Tendency tail + view-all */}
      <div className="px-5 pt-2">
        <p className="text-bone-dim text-[12px] leading-snug mb-2.5">
          You hold winning positions but rarely turn the screw further.
        </p>
        <p className="text-bone-dim text-[12px] leading-snug mb-3">
          Your plan dissolves when the position changes mid-game.
        </p>
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-venom pb-4 border-b border-line">
          View All Tendencies →
        </div>
      </div>

      {/* Trajectory header */}
      <div className="px-5 pt-4 pb-1 flex items-baseline gap-2">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom font-semibold">
          Your Trajectory
        </span>
        <span className="font-mono text-[8px] tracking-[0.16em] uppercase text-pp-muted">
          How each trait has moved
        </span>
      </div>

      {/* Trait rows */}
      <div className="px-5 pb-2">
        {TRAITS.map((t, i) => (
          <div
            key={t.label}
            style={rowStyle(i)}
            className="flex items-center justify-between py-3 border-b border-line/60 last:border-b-0"
          >
            <div className="min-w-0">
              <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-pp-muted mb-1">
                {t.label}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-bone text-[22px] font-extrabold leading-none tabular-nums">
                  {t.value}
                </span>
                {typeof t.delta === 'number' && (
                  <span
                    className="text-[11px] font-bold leading-none tabular-nums"
                    style={{ color: t.delta < 0 ? DOWN : UP }}
                  >
                    {t.delta < 0 ? '▼' : '▲'} {Math.abs(t.delta)}
                  </span>
                )}
              </div>
            </div>
            <Sparkline points={t.points} visible={visible} delay={250 + i * 90} />
          </div>
        ))}
        <div className="font-mono text-[8px] tracking-[0.16em] uppercase text-pp-muted pt-3">
          Oldest → Newest · 0–100 Scale
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-stretch justify-between px-3 pt-3 pb-4 border-t border-line bg-black">
        {[
          { label: 'Home', badge: 1 },
          { label: 'Learn' },
          { label: 'Play' },
          { label: 'Journal' },
          { label: 'Progress', active: true },
        ].map((n) => (
          <div key={n.label} className="flex-1 flex flex-col items-center gap-1.5">
            <span className="relative">
              <span
                className={`block w-4 h-4 rounded-[3px] border ${
                  n.active ? 'border-venom bg-venom/20' : 'border-pp-muted'
                }`}
              />
              {n.badge ? (
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-crimson text-[7px] font-bold text-bone flex items-center justify-center">
                  {n.badge}
                </span>
              ) : null}
            </span>
            <span
              className={`font-mono text-[7px] tracking-[0.12em] uppercase ${
                n.active ? 'text-venom' : 'text-pp-muted'
              }`}
            >
              {n.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
