'use client'

import { type ReactNode } from 'react'

interface FloatingIcon {
  icon: ReactNode
  position: string
}

interface ServiceCardProps {
  title: string
  description: string
  illustration: ReactNode
  floatingIcons?: FloatingIcon[]
  animationDelay?: string
  className?: string
}

export default function ServiceCard({
  title,
  description,
  illustration,
  floatingIcons = [],
  animationDelay,
  className = '',
}: ServiceCardProps) {
  return (
    <div
      className={`animate-on-scroll rounded-[40px] border border-white/15 p-[20px] flex flex-col justify-between h-auto md:h-[456px] overflow-hidden relative group max-w-[326px] md:max-w-[402px] mx-auto w-full ${className}`}
      style={{
        animationDelay,
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center top, rgba(59,110,248,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Text content */}
      <div className="relative z-10">
        <p className="font-body font-bold text-[18px] leading-[27px] text-white mb-[16px] capitalize">
          {title}
        </p>
        <p className="font-body font-medium text-[16px] leading-[24px] text-white/60">
          {description}
        </p>
      </div>

      {/* Liquid glass illustration area */}
      <div className="relative z-10 w-full h-[160px] mt-4 md:mt-0">
        <div
          className="glass-container relative w-full h-full rounded-[20px] overflow-hidden flex items-center justify-center"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2), 0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          {/* Top reflection line */}
          <div
            className="absolute top-0 left-[10%] right-[10%] h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
            }}
          />

          {/* Inner subtle gradient orb */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.03) 0%, transparent 60%)',
            }}
          />

          {/* Central illustration */}
          <div className="relative z-10">{illustration}</div>

          {/* Floating icons */}
          {floatingIcons.map((fi, idx) => (
            <div
              key={idx}
              className={`absolute z-20 ${fi.position}`}
              style={{
                animation: `serviceIconFloat ${3 + idx * 0.8}s ease-in-out infinite`,
                animationDelay: `${idx * 0.4}s`,
              }}
            >
              {fi.icon}
            </div>
          ))}

          {/* Bottom edge subtle shadow */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.15), transparent)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

/* ── Floating icon wrapper helpers ── */

export function IconBubble({
  children,
  bg = 'rgba(30,35,45,0.85)',
  size = 36,
}: {
  children: ReactNode
  bg?: string
  size?: number
}) {
  return (
    <div
      className="rounded-full flex items-center justify-center"
      style={{
        width: size,
        height: size,
        background: bg,
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {children}
    </div>
  )
}
