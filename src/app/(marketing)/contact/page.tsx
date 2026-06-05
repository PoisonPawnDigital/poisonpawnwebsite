import ContactForm from '@/components/sections/ContactForm'

export const metadata = { title: 'Contact — Poison Pawn' }

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
