const systemLinks = [
  { href: '/how-it-works',          label: 'How It Works' },
  { href: '/case-studies',          label: 'Case Studies' },
  { href: '/bring-it-to-your-team', label: 'Bring' },
  { href: '/founder',               label: 'Founder' },
  { href: '/contact',               label: 'Contact' },
]

const connectLinks = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Twitter / X' },
  { href: '#', label: 'LinkedIn' },
]

function FooterLinkGroup({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-venom mb-1">{title}</p>
      {links.map(({ href, label }) => (
        <a
          key={label}
          href={href}
          className="text-bone-dim text-[13px] tracking-[0.02em] hover:text-bone transition-colors duration-200"
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-line">
          <div className="max-w-xs">
            <div className="mb-2">
              <a href="/" className="font-sans text-[15px] font-semibold tracking-[0.26em] uppercase text-bone hover:text-venom transition-colors duration-200">
                Poison&nbsp;Pawn
              </a>
            </div>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-pp-muted">
              #PlayerNotAPiece
            </p>
          </div>

          <div className="flex flex-wrap gap-10 md:gap-16">
            <FooterLinkGroup title="The System" links={systemLinks} />
            <FooterLinkGroup title="Connect"    links={connectLinks} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <span className="text-pp-muted text-[12px] tracking-[0.04em]">
            © 2026 Poison Pawn. All rights reserved.
          </span>
          <span className="text-pp-muted text-[12px] tracking-[0.04em] font-mono">
            #PlayerNotAPiece
          </span>
        </div>
      </div>
    </footer>
  )
}
