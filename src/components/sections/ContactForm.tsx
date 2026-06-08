'use client'

import { useState } from 'react'
import { submitForm } from '@/lib/form'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setError('')
    setSending(true)
    try {
      await submitForm(new FormData(form))
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
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
      <input type="hidden" name="_subject" value="New Poison Pawn contact request" />
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">Name</label>
        <input
          type="text"
          name="name"
          required
          className="bg-surface border border-line text-bone placeholder:text-pp-muted px-4 py-3 rounded-sm text-[14px] focus:outline-none focus:border-venom transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">Email</label>
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
        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-venom">Notes</label>
        <textarea
          name="notes"
          rows={5}
          className="resize-y bg-surface border border-line text-bone placeholder:text-pp-muted px-4 py-3 rounded-sm text-[14px] focus:outline-none focus:border-venom transition-colors"
        />
      </div>
      {error && <p className="text-[13px] text-red-400">{error}</p>}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <small className="text-pp-muted text-[12px]">
          We&apos;ll be in touch within 48 hours. We never share your information.
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
  )
}
