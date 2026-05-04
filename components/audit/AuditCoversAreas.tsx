"use client";

import Image from 'next/image'
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const auditAreas = [
  {
    title: 'UI & Product Experience',
    desc: "Is the product intuitive? Does the interface reflect how users actually think — or how you imagined they would?",
    icon: '/images/audit/ui-ux-icon.svg',
  },
  {
    title: 'Functionality & Technical Foundation',
    desc: "What's working, what's breaking, and what will cause serious problems if you keep building on top of it.",
    icon: '/images/audit/tech-foundation-icon.svg',
  },
  {
    title: 'Go-To-Market Readiness',
    desc: "Who is this actually for? Is the positioning clear? Are you targeting the right people through the right channels?",
    icon: '/images/audit/gtm-icon.svg',
  },
  {
    title: 'Monetization & Business Model',
    desc: "Can this make money? Is the pricing model realistic? Are there better ways to monetize what you've built?",
    icon: '/images/audit/monetization-icon.svg',
  },
]

export default function AuditCoversAreas() {
  const titleScope = useRef<HTMLDivElement>(null);
  useScrollReveal(titleScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative py-[30px] overflow-hidden bg-black">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(28,90,249,0.2) 0%, rgba(26,71,185,0.08) 40%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleScope} className="mb-[30px]">
          <WordRevealText
            as="h2"
            className="font-display font-extrabold text-[28px] sm:text-[42px] md:text-[60px] leading-[100%] uppercase text-white"
          >
            YOUR AUDIT{' '}
            <span className="text-white">COVERS </span>
            <span className="text-[#1C5AF9]">FOUR AREAS</span>
          </WordRevealText>
        </div>

        {/* Four cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[24px]">
          {auditAreas.map((area, i) => (
            <div
              key={area.title}
              className="animate-on-scroll rounded-[40px] border border-white/15 p-[20px] flex flex-col gap-[10px] overflow-hidden relative"
              style={{
                animationDelay: `${i * 0.08}s`,
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              {/* Inner shadow overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_100px_0px_rgba(204,215,255,0.15)]" />

              {/* Text content */}
              <div className="flex flex-col py-[16px] relative z-10">
                <div className="h-[170px] flex flex-col gap-[20px]">
                  <p className="font-body font-bold text-[18px] leading-[27px] text-white capitalize">
                    {area.title}
                  </p>
                  <p className="font-body font-medium text-[16px] leading-[24px] text-white/60">
                    {area.desc}
                  </p>
                </div>
              </div>

              {/* Illustration area */}
              <div
                className="w-full h-[155px] rounded-[20px] border border-white/30 overflow-hidden relative flex items-center justify-center"
                style={{
                  background:
                    'radial-gradient(ellipse at center top, rgba(255,255,255,0.04) 0%, transparent 70%)',
                }}
              >
                <Image
                  src={area.icon}
                  alt={area.title}
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
