'use client'

import { useState } from 'react'
import { submitForm } from '@/lib/form'

export default function ApplySection() {
  const [track, setTrack] = useState<'enterprise' | 'individual'>('enterprise')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.set('track', track === 'enterprise' ? 'Teams & Organizations' : 'Individual (waitlist)')
    setError('')
    setSending(true)
    try {
      await submitForm(data)
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="apply" className="py-16 md:py-20 lg:py-[120px] bg-obsidian border-t border-line">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">

        {/* CTA headline */}
        <div className="reveal text-center mb-16">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-4">
            Apply Now
          </div>
          <h2 className="text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-6">
            The Edge<br />Starts Here.
          </h2>
          <p className="text-bone-dim text-[16px] leading-relaxed max-w-xl mx-auto">
            Poison Pawn works with a select group of high-performance teams and organizations.
            Apply to find out if it&apos;s right for you.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Track toggle */}
          <div className="flex gap-3 mb-8">
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
            <div className="border border-venom/40 bg-venom/5 rounded-sm p-10">
              <div className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-3">
                Request received.
              </div>
              <p className="text-bone-dim text-[15px]">
                Thank you. We&apos;ll be in touch to scope a conversation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input type="hidden" name="_subject" value="New Poison Pawn application" />
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
              {error && <p className="text-[13px] text-red-400">{error}</p>}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <small className="text-pp-muted text-[12px]">
                  We&apos;ll be in touch to scope a conversation. We never share your information.
                </small>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex-shrink-0 bg-venom text-black font-bold text-[13px] tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm hover:bg-gold-bright transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending…' : 'Send →'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
