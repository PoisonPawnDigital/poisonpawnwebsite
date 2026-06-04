'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#how', label: 'How It Works' },
  { href: '#proof', label: 'Case Studies' },
  { href: '#apply', label: 'Bring It To Your Team' },
  { href: '#media', label: 'Media' },
  { href: '#founder', label: 'Founder' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 transition-all duration-400',
        scrolled
          ? 'py-3.5 bg-black/82 backdrop-blur-md border-b border-line'
          : 'py-5 border-b border-transparent',
      )}
    >
      <div className="flex items-center gap-3">
        <span className="relative w-[18px] h-[18px] flex-shrink-0" aria-hidden="true">
          <span className="absolute inset-0 border border-venom" style={{ right: '5px', bottom: '5px' }} />
          <span className="absolute inset-0 border border-venom" style={{ top: '5px', left: '5px' }} />
        </span>
        <span className="font-sans text-[15px] font-semibold tracking-[0.26em] uppercase text-bone">
          Poison&nbsp;Pawn
        </span>
      </div>

      <div className="flex items-center gap-8">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="hidden lg:block text-bone-dim text-[13px] tracking-[0.04em] hover:text-bone transition-colors duration-250 py-3 px-1"
          >
            {label}
          </a>
        ))}
        <a
          href="#apply"
          className="border border-line-strong px-[18px] py-[9px] rounded-sm text-[13px] tracking-[0.04em] text-bone hover:bg-venom hover:text-black hover:border-venom transition-all duration-300"
        >
          Apply For Training
        </a>
      </div>
    </nav>
  )
}
