'use client'

import { useEffect, useRef } from 'react'

export default function RevealWrapper() {
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll<HTMLElement>('.reveal:not(.visible)').forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])

  return null
}
