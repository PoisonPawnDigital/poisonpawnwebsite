'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/how-it-works',          label: 'How It Works' },
  { href: '/case-studies',          label: 'Case Studies' },
  { href: '/bring-it-to-your-team', label: 'Bring It To Your Team' },
  { href: '/media',                 label: 'Media' },
  { href: '/founder',               label: 'Founder' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

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
      <a href="/" className="font-sans text-[15px] font-semibold tracking-[0.26em] uppercase text-bone hover:text-venom transition-colors duration-200">
        Poison&nbsp;Pawn
      </a>

      <div className="flex items-center gap-6">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={cn(
              'hidden lg:block text-[13px] tracking-[0.04em] transition-colors duration-250 py-3 px-1',
              pathname === href ? 'text-bone' : 'text-bone-dim hover:text-bone',
            )}
          >
            {label}
          </a>
        ))}
        <a
          href="/contact"
          className="whitespace-nowrap border border-line-strong px-3 py-2 md:px-[18px] md:py-[9px] rounded-sm text-[12px] md:text-[13px] tracking-[0.04em] text-bone hover:bg-venom hover:text-black hover:border-venom transition-all duration-300"
        >
          <span className="md:hidden">Apply</span>
          <span className="hidden md:inline">Apply For Training</span>
        </a>
      </div>
    </nav>
  )
}
