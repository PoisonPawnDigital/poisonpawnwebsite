export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Video background */}
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

      {/* Scrim */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg,#000 0%,rgba(0,0,0,0.92) 26%,rgba(0,0,0,0.55) 52%,rgba(0,0,0,0.35) 72%,rgba(0,0,0,0.6) 100%), linear-gradient(0deg,#000 1%,rgba(0,0,0,0.25) 22%,transparent 45%)',
        }}
      />

      {/* Chess-grid overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,237,224,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(245,237,224,0.025) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 70% 40%,#000 10%,transparent 75%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-8 pt-24 pb-16">
        <div className="max-w-[600px]">
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-venom mb-6">
            Decision-Making Under Pressure
          </div>

          <h1 className="text-bone text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none mb-6">
            Train How<br />You Decide.
          </h1>

          <p className="text-bone-dim text-lg leading-relaxed max-w-[480px] mb-10">
            Your decision-making is no longer something you&apos;re stuck with — it can be trained.
            Personal, measurable, proven at the highest level.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#apply"
              className="inline-block bg-venom text-black font-semibold text-sm tracking-[0.08em] uppercase px-7 py-4 rounded-sm hover:bg-gold-bright transition-colors duration-200"
            >
              Request a Briefing
            </a>
            <a
              href="#shift"
              className="inline-block border border-line-strong text-bone text-sm tracking-[0.08em] uppercase px-7 py-4 rounded-sm hover:border-bone-dim transition-colors duration-200"
            >
              See the Method
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
