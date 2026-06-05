'use client'

import { useState } from 'react'

const tabs = ['Profile', 'Signals', 'Drills'] as const
type Tab = typeof tabs[number]

function ProfileTab() {
  return (
    <div className="p-5">
      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-pp-muted mb-1">
        Decision Profile
      </div>
      <div className="text-bone text-[22px] font-extrabold uppercase tracking-tight leading-none mb-1">
        Volatile Creator
      </div>
      <div className="text-bone-dim text-[12px] mb-5">Brilliance under chaos</div>

      <svg width="100%" height="130" viewBox="0 0 300 140" className="mb-4">
        <polygon
          points="150,20 240,68 230,115 150,135 60,110 65,62"
          fill="rgba(212,162,74,0.1)"
          stroke="#D4A24A"
          strokeWidth="1.5"
        />
        <polygon points="150,50 205,78 198,108 150,120 97,100 102,72" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <polygon points="150,80 178,90 175,103 150,108 122,96 124,84" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        {([
          [150, 20], [240, 68], [230, 115], [150, 135], [60, 110], [65, 62],
        ] as [number, number][]).map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#D4A24A" />
        ))}
        <text x="150" y="12" textAnchor="middle" fill="rgba(243,243,243,0.6)" fontSize="9" fontFamily="monospace">SPEED</text>
        <text x="252" y="70" fill="rgba(243,243,243,0.6)" fontSize="9" fontFamily="monospace">INIT</text>
        <text x="22" y="70" fill="rgba(243,243,243,0.6)" fontSize="9" fontFamily="monospace">STAB</text>
      </svg>

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

      <div className="flex items-center justify-between border border-line rounded-sm px-4 py-3">
        <div>
          <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-pp-muted mb-0.5">Next Move</div>
          <div className="text-bone text-[13px] font-semibold">Pressure Drill #14</div>
        </div>
        <span className="text-venom text-lg">→</span>
      </div>
    </div>
  )
}

const signals = [
  { dot: 'bg-venom', label: 'Rushes decisions under time pressure', freq: 'High frequency', bar: 78 },
  { dot: 'bg-pp-green', label: 'Strong pattern recognition in complex positions', freq: 'Improving', bar: 84 },
  { dot: 'bg-venom', label: 'Recovery speed after mistakes', freq: '+68% this cycle', bar: 68 },
  { dot: 'bg-crimson', label: 'Risk calibration under stress', freq: 'Focus area', bar: 41 },
]

function SignalsTab() {
  return (
    <div className="p-5">
      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-pp-muted mb-1">
        Decision Signals
      </div>
      <div className="text-bone text-[15px] font-extrabold uppercase tracking-tight leading-none mb-4">
        Active patterns detected
      </div>

      <div className="flex flex-col gap-4">
        {signals.map((s, i) => (
          <div key={i}>
            <div className="flex items-start gap-2 mb-1.5">
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${s.dot}`} />
              <div className="flex-1">
                <div className="text-bone text-[12px] leading-snug mb-0.5">{s.label}</div>
                <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-pp-muted">{s.freq}</div>
              </div>
            </div>
            <div className="h-0.5 bg-line rounded-full overflow-hidden ml-3.5">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${s.bar}%`,
                  background: s.dot === 'bg-crimson' ? '#C44536' : s.dot === 'bg-pp-green' ? '#7DD181' : '#D4A24A',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-line font-mono text-[9px] tracking-[0.12em] uppercase text-pp-muted">
        Last updated · this session
      </div>
    </div>
  )
}

const drills = [
  { num: '#14', name: 'Pressure Drill', status: 'In Progress', pct: 60, active: true },
  { num: '#7', name: 'Pattern Recognition', status: 'Completed', pct: 100, active: false },
  { num: '#11', name: 'Risk Calibration', status: 'Scheduled', pct: 0, active: false },
  { num: '#3', name: 'Recovery Protocol', status: 'Scheduled', pct: 0, active: false },
]

function DrillsTab() {
  return (
    <div className="p-5">
      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-pp-muted mb-1">
        Active Drills
      </div>
      <div className="text-bone text-[15px] font-extrabold uppercase tracking-tight leading-none mb-4">
        Your training queue
      </div>

      <div className="flex flex-col gap-3">
        {drills.map((d) => (
          <div
            key={d.num}
            className={`border rounded-sm px-4 py-3 transition-colors ${
              d.active ? 'border-venom/50 bg-venom/5' : 'border-line bg-transparent'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-venom mr-2">{d.num}</span>
                <span className="text-bone text-[13px] font-semibold">{d.name}</span>
              </div>
              <span
                className={`font-mono text-[9px] tracking-[0.12em] uppercase ${
                  d.status === 'Completed' ? 'text-pp-green' :
                  d.status === 'In Progress' ? 'text-venom' : 'text-pp-muted'
                }`}
              >
                {d.status}
              </span>
            </div>
            {d.pct > 0 && (
              <div className="h-0.5 bg-line rounded-full overflow-hidden">
                <div
                  className="h-full bg-venom rounded-full"
                  style={{ width: `${d.pct}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border border-line rounded-sm px-4 py-3">
        <div>
          <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-pp-muted mb-0.5">Continue</div>
          <div className="text-bone text-[13px] font-semibold">Pressure Drill #14</div>
        </div>
        <span className="text-venom text-lg">→</span>
      </div>
    </div>
  )
}

export default function DecisionProfileCard() {
  const [activeTab, setActiveTab] = useState<Tab>('Profile')

  return (
    <div className="border border-line bg-surface rounded-sm overflow-hidden w-full max-w-sm mx-auto lg:mx-0">
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
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-3 py-2.5 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors duration-200 ${
              activeTab === tab
                ? 'text-venom border-b-2 border-venom -mb-px bg-venom/5'
                : 'text-pp-muted hover:text-bone-dim'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'Profile' && <ProfileTab />}
      {activeTab === 'Signals' && <SignalsTab />}
      {activeTab === 'Drills' && <DrillsTab />}
    </div>
  )
}
