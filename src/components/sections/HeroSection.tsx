import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover object-right z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/video/hero_poster.jpg"
      >
        <source src="/video/hero_loop.webm" type="video/webm" />
        <source src="/video/hero_loop.mp4" type="video/mp4" />
      </video>

      {/* Main scrim */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg,#000 0%,rgba(0,0,0,0.92) 26%,rgba(0,0,0,0.55) 52%,rgba(0,0,0,0.35) 72%,rgba(0,0,0,0.6) 100%), linear-gradient(0deg,#000 1%,rgba(0,0,0,0.25) 22%,transparent 45%)',
        }}
      />

      {/* Chess grid overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,237,224,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(245,237,224,0.025) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 70% 40%,#000 10%,transparent 75%)',
        }}
      />

      {/* Bottom fade — hero blends gracefully into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.6) 50%, transparent 100%)' }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-5 sm:px-8 pt-24 pb-32">
        <div className="max-w-[600px]">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
            Performance System
          </div>

          <h1 className="text-bone text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none mb-6">
            Train How<br />You Decide.
          </h1>

          <p className="text-bone-dim text-lg leading-relaxed max-w-[480px] mb-10">
            Poison Pawn is a performance system that trains how you make decisions. Using chess as
            the training tool, every decision is tracked and every pattern is measured — so you know
            exactly how you think, where you&apos;re sharp, and where you break down.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-block bg-venom text-black font-semibold text-sm tracking-[0.08em] uppercase px-7 py-4 rounded-sm hover:bg-gold-bright transition-colors duration-200"
            >
              Apply For Training
            </a>
            <a
              href="/how-it-works"
              className="inline-block border border-line-strong text-bone text-sm tracking-[0.08em] uppercase px-7 py-4 rounded-sm hover:border-bone-dim transition-colors duration-200"
            >
              Explore the System
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-40">
        <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-bone">Scroll</span>
        <ChevronDown className="w-4 h-4 text-bone animate-bounce" />
      </div>
    </header>
  )
}
