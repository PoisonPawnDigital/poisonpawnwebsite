'use client'

import { useState } from 'react'

const domains = [
  'Elite Athletics',
  'Finance / Trading',
  'Executive Leadership',
  'Medicine',
  'Military / Law Enforcement',
  'Education',
  'Other',
]

export default function ApplySection() {
  const [track, setTrack] = useState<'enterprise' | 'individual'>('enterprise')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: wire to Formspree endpoint before launch
    setSubmitted(true)
  }

  return (
    <section id="apply" className="py-[120px] bg-obsidian border-t border-line">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-10 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            Work with us
          </div>
          <h2 className="text-bone text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none mb-6">
            Bring the method to your team.
          </h2>
          <p className="text-bone-dim text-[16px] leading-relaxed">
            We partner with a select number of organizations at a time — teams, funds, and
            institutions where decisions carry real weight. Tell us where it matters most, and
            we&apos;ll scope a conversation around it.
          </p>
        </div>

        {/* Track toggle */}
        <div className="reveal flex gap-3 mb-8">
          {(['enterprise', 'individual'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTrack(t)}
              className={`font-mono text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 rounded-sm border transition-all duration-200 ${
                track === t
                  ? 'bg-venom text-black border-venom'
                  : 'text-bone-dim border-line hover:border-bone-dim'
              }`}
            >
              {t === 'enterprise' ? 'Teams & Organizations' : 'Individuals (waitlist)'}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="reveal border border-venom/40 bg-venom/5 rounded-sm p-10 max-w-xl">
            <div className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-3">
              Request received.
            </div>
            <p className="text-bone-dim text-[15px]">
              Thank you. We&apos;ll be in touch to scope a conversation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal max-w-xl flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">Full name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="bg-surface border border-line text-bone placeholder:text-pp-muted px-4 py-3 rounded-sm text-[14px] focus:outline-none focus:border-venom transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">Work email</label>
              <input
                type="email"
                name="email"
                placeholder="you@organization.com"
                required
                className="bg-surface border border-line text-bone placeholder:text-pp-muted px-4 py-3 rounded-sm text-[14px] focus:outline-none focus:border-venom transition-colors"
              />
            </div>
            {track === 'enterprise' && (
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">Organization</label>
                <input
                  type="text"
                  name="org"
                  placeholder="Team, fund, unit or company"
                  className="bg-surface border border-line text-bone placeholder:text-pp-muted px-4 py-3 rounded-sm text-[14px] focus:outline-none focus:border-venom transition-colors"
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">Domain</label>
              <select
                name="domain"
                className="bg-surface border border-line text-bone px-4 py-3 rounded-sm text-[14px] focus:outline-none focus:border-venom transition-colors"
              >
                {domains.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">
                Where do decisions matter most for you?
              </label>
              <textarea
                name="goal"
                rows={4}
                placeholder="The moments, the people, and the outcomes you'd want to sharpen..."
                className="bg-surface border border-line text-bone placeholder:text-pp-muted px-4 py-3 rounded-sm text-[14px] focus:outline-none focus:border-venom transition-colors resize-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <small className="text-pp-muted text-[12px]">
                We&apos;ll be in touch to scope a conversation. We never share your information.
              </small>
              <button
                type="submit"
                className="flex-shrink-0 bg-venom text-black font-bold text-[13px] tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm hover:bg-gold-bright transition-colors duration-200"
              >
                Request a briefing →
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
