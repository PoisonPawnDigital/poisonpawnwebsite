import ContactForm from '@/components/sections/ContactForm'
import CalendlyInline from '@/components/sections/CalendlyInline'

export const metadata = { title: 'POISON PAWN® | Player Not A Piece' }

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-16 md:py-20 lg:py-[120px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="reveal mb-12">
            <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
              Apply For Training
            </div>
            <h1 className="text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none mb-4">
              Let&apos;s Talk.
            </h1>
            <p className="text-bone-dim text-[16px] leading-relaxed">
              Tell us about your program, or book a call directly. We&apos;ll take it from there.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left — form */}
            <div className="reveal">
              <ContactForm />
            </div>

            {/* Right — Calendly inline embed */}
            <div className="reveal lg:-mt-6" data-d="2">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-venom mb-4">
                Book A Call
              </div>
              <CalendlyInline />
              <p className="text-pp-muted text-[12px] mt-3">
                Times shown in your local time zone — please double-check it before booking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
