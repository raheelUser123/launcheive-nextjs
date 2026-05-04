"use client";

import Image from 'next/image'
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const engagements = [
  {
    title: 'Project-Based',
    description:
      'A defined scope, timeline, and deliverable. Best for founders with a clear build in mind — a specific product, feature set, or migration.',
    image: '/images/build-with-us/how-we-engage/project-based.svg',
    imageSize: 160,
  },
  {
    title: 'Ongoing Retainer',
    description:
      'A dedicated team embedded in your product roadmap. Best for founders who need consistent development momentum as the product evolves.',
    image: '/images/build-with-us/how-we-engage/ongoing-retainer.svg',
    imageSize: 180,
  },
]

export default function HowWeEngage() {
  const titleScope = useRef<HTMLDivElement>(null);
  const cardsScope = useRef<HTMLDivElement>(null);
  const bottomScope = useRef<HTMLDivElement>(null);
  useScrollReveal(titleScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);
  useScrollReveal(cardsScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);
  useScrollReveal(bottomScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative py-[30px] overflow-hidden bg-black">
      {/* Section background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[1100px] w-[1440px] -translate-x-1/2 -translate-y-1/2 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(24,51,121,0.72) 0%, rgba(26,71,185,0.46) 52%, rgba(28,90,249,0.22) 100%)',
            filter: 'blur(90px)',
            maskImage:
              'radial-gradient(ellipse 72% 66% at 50% 50%, black 0%, rgba(0,0,0,0.82) 52%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 72% 66% at 50% 50%, black 0%, rgba(0,0,0,0.82) 52%, transparent 100%)',
            mixBlendMode: 'lighten',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleScope}>
          <WordRevealText as="h2" className="font-display font-extrabold text-[28px] sm:text-[42px] md:text-[60px] leading-[1.26] uppercase mb-[20px]">
            <span className="text-white">HOW WE </span>
            <span className="text-[#1C5AF9]">ENGAGE</span>
          </WordRevealText>

          {/* Subtitle */}
          <WordRevealText as="p" className="font-body font-medium text-[18px] md:text-[20px] leading-[normal] tracking-[-0.8px] text-white mb-[20px]">
            We work in two ways, depending on where you are.
          </WordRevealText>
        </div>

        {/* Cards */}
        <div ref={cardsScope} className="flex flex-col lg:flex-row gap-[20px] mb-[20px]">
          {engagements.map((item, index) => (
            <div
              key={item.title}
              className={`${index === 0 ? 'animate-on-scroll-left' : 'animate-on-scroll-right'} flex-1 rounded-[40px] border border-white/15 p-[20px] overflow-hidden relative flex flex-col justify-between`}
              style={{
                boxShadow:
                  '0px 5px 10px 0px rgba(0,0,0,0.05), 0px 15px 30px 0px rgba(0,0,0,0.05), 0px 30px 60px 0px rgba(0,0,0,0.1)',
              }}
            >
              {/* Card background layers */}
              <div
                className="absolute inset-0 pointer-events-none rounded-[40px]"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0 rounded-[40px]"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.08) 0%, transparent 50%), linear-gradient(180deg, rgba(46,51,90,0) 0%, rgba(28,27,51,0.1) 100%)',
                  }}
                />
                <div
                  className="absolute inset-0 rounded-[40px]"
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(10, 10, 20, 0.75)',
                  }}
                />
              </div>

              {/* Text content */}
              <div className="relative z-10 flex flex-col py-[16px] mb-[10px]">
                <WordRevealText as="p" className="font-body font-bold text-[18px] leading-[27px] text-white mb-[20px]">
                  {item.title}
                </WordRevealText>
                <WordRevealText as="p" className="font-body font-medium text-[16px] leading-[24px] text-white/60">
                  {item.description}
                </WordRevealText>
              </div>

              {/* Illustration area */}
              <div
                className="relative z-10 w-full h-[203px] rounded-[20px] border border-white/30 overflow-hidden flex items-center justify-center"
                style={{
                  background:
                    'radial-gradient(ellipse at center top, rgba(255,255,255,0.04) 0%, transparent 70%)',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.imageSize}
                  height={item.imageSize}
                  className="relative z-10 object-contain"
                />
                {/* Inner white shadow */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[20px]"
                  style={{
                    boxShadow:
                      'inset 0px 0px 60px 0px rgba(204, 215, 255, 0.15), inset 0px 0px 25px 0px rgba(255, 255, 255, 0.05)',
                  }}
                />
              </div>

              {/* Inner glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-[40px]"
                style={{
                  boxShadow:
                    'inset 0px 0px 100px 0px rgba(204, 215, 255, 0.15), inset 0px 0px 40px 0px rgba(255, 255, 255, 0.05)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div ref={bottomScope}>
          <WordRevealText as="p" className="font-body font-medium text-[18px] md:text-[20px] leading-[normal] tracking-[-0.8px] text-white">
            We&apos;ll recommend the right fit during your discovery call.
          </WordRevealText>
        </div>
      </div>
    </section>
  )
}
