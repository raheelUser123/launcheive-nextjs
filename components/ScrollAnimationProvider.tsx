'use client'

import { useEffect } from 'react'

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return <>{children}</>
}
