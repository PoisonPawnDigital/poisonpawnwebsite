'use client'

import { useState } from 'react'

// Note: metadata export is not supported in 'use client' components.
// Page title is set in layout.tsx root metadata as fallback.

const domains = [
  'Elite Athletics',
  'Finance/Trading',
  'Executive Leadership',
  'Medicine',
  'Military/Law Enforcement',
  'Education',
  'Other',
]

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: wire to Formspree endpoint before launch
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-venom/40 bg-venom/5 rounded-sm p-10">
        <div className="text-bone text-2xl font-extrabold uppercase tracking-tight mb-3">
          Request received.
        </div>
        <p className="text-bone-dim text-[15px]">
          Thank you. We&apos;ll be in touch within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">Full name</label>
        <input
          type="text"
          name="name"
          required
          className="bg-surface border border-line text-bone placeholder:text-pp-muted px-4 py-3 rounded-sm text-[14px] focus:outline-none focus:border-venom transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">Work email</label>
        <input
          type="email"
          name="email"
          required
          className="bg-surface border border-line text-bone placeholder:text-pp-muted px-4 py-3 rounded-sm text-[14px] focus:outline-none focus:border-venom transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">Organization</label>
        <input
          type="text"
          name="org"
          className="bg-surface border border-line text-bone placeholder:text-pp-muted px-4 py-3 rounded-sm text-[14px] focus:outline-none focus:border-venom transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-domain" className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">Domain</label>
        <select
          id="contact-domain"
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
          className="bg-surface border border-line text-bone placeholder:text-pp-muted px-4 py-3 rounded-sm text-[14px] focus:outline-none focus:border-venom transition-colors resize-none"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <small className="text-pp-muted text-[12px]">
          We&apos;ll be in touch within 48 hours. We never share your information.
        </small>
        <button
          type="submit"
          className="flex-shrink-0 bg-venom text-black font-bold text-[13px] tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm hover:bg-gold-bright transition-colors duration-200"
        >
          Apply For Training →
        </button>
      </div>
    </form>
  )
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-16 md:py-20 lg:py-[120px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
              Contact
            </div>
            <h1 className="text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-4">
              Let&apos;s Talk.
            </h1>
            <p className="text-bone-dim text-[16px] leading-relaxed">
              Tell us about your program. We&apos;ll take it from there.
            </p>
          </div>
          <div className="reveal max-w-xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
