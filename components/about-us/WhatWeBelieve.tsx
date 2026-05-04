"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const cardShadow = {
  boxShadow:
    "0px 5px 10px 0px rgba(0,0,0,0.05), 0px 15px 30px 0px rgba(0,0,0,0.05), 0px 30px 60px 0px rgba(0,0,0,0.1)",
} as const;

const innerGlow = {
  boxShadow:
    "inset 0px 0px 100px 0px rgba(204, 215, 255, 0.15), inset 0px 0px 40px 0px rgba(255, 255, 255, 0.05)",
} as const;

const bars = [
  {
    label: "Idea",
    pct: "20%",
    width: "40%",
    gradient:
      "linear-gradient(90deg, rgba(50, 50, 130, 0) 0%, rgba(55, 55, 140, 0.15) 10%, rgba(62, 62, 160, 0.4) 30%, rgba(70, 70, 180, 0.65) 55%, rgba(78, 78, 200, 0.85) 78%, #4A4AB5 100%)",
  },
  {
    label: "Clarity",
    pct: "10%",
    width: "19%",
    gradient:
      "linear-gradient(90deg, rgba(130, 45, 58, 0) 0%, rgba(135, 48, 62, 0.15) 10%, rgba(150, 55, 68, 0.4) 30%, rgba(165, 62, 76, 0.65) 55%, rgba(178, 68, 82, 0.85) 78%, #A0404F 100%)",
  },
  {
    label: "Prototype",
    pct: "35%",
    width: "44%",
    gradient:
      "linear-gradient(90deg, rgba(125, 108, 30, 0) 0%, rgba(130, 112, 34, 0.15) 10%, rgba(148, 130, 42, 0.4) 30%, rgba(162, 145, 48, 0.65) 55%, rgba(175, 155, 54, 0.85) 78%, #988828 100%)",
  },
  {
    label: "Production",
    pct: "55%",
    width: "60%",
    gradient:
      "linear-gradient(90deg, rgba(22, 90, 80, 0) 0%, rgba(25, 95, 85, 0.15) 10%, rgba(32, 112, 100, 0.4) 30%, rgba(40, 130, 118, 0.65) 55%, rgba(46, 144, 130, 0.85) 78%, #288A75 100%)",
  },
];

export default function WhatWeBelieve() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 left-1/2 w-[636px] -translate-x-[calc(50%+30px)] mix-blend-screen opacity-40">
          <Image
            src="/images/about-us/blur-outer.svg"
            alt=""
            fill
            className="object-cover scale-[1.55]"
          />
          <Image
            src="/images/about-us/blur-inner.png"
            alt=""
            fill
            className="object-cover scale-[1.35]"
          />
        </div>

        <div className="absolute inset-y-0 right-[72px] hidden w-px bg-white/5 lg:block" />
        <div className="absolute inset-y-0 right-[73px] hidden w-[104px] opacity-10 lg:block">
          <div
            className="h-full w-full bg-repeat-y bg-top"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(255,255,255,0.6) 0 1px, transparent 1.5px)",
              backgroundSize: "8px 8px",
            }}
          />
        </div>
        <div className="absolute inset-x-0 top-0 hidden h-px bg-white/5 lg:block" />
        <div className="absolute inset-x-0 bottom-0 hidden h-px bg-white/5 lg:block" />
      </div>

      <div ref={scope} className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Content */}
          <div className="flex flex-col gap-[30px]">
            <WordRevealText as="h2" className="font-display font-extrabold text-[30px] sm:text-[50px] md:text-[60px] leading-[1.1] uppercase text-white">
              WHAT WE <span className="text-[#1C5AF9]">BELIEVE</span>
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white">
              Building has never been easier.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white">
              Clarity, however, is harder than ever.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white">
              Today a founder can generate a prototype in days using AI tools
              and no-code platforms. But turning that prototype into a real
              product — something stable, scalable, and valuable — is still
              hard.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white">
              We believe the most important work often happens{" "}
              <span className="font-bold text-[20px] md:text-[24px]">
                before the first line of production code is written.
              </span>
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white">
              Founders deserve honest feedback, not encouragement disguised as
              advice.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white">
              And a good development team doesn&apos;t just execute instructions
              — it thinks alongside the founder.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white">
              That&apos;s the standard we hold ourselves to.
            </WordRevealText>
          </div>

          {/* Right side - Chart card */}
          <div className="animate-on-scroll-right flex items-start justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[620px] rounded-[40px] border border-white/15 overflow-hidden"
              style={cardShadow}
            >
              {/* Card background layers */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
              >
                {/* Radial gradient from top + linear gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.08) 0%, transparent 50%), linear-gradient(180deg, rgba(46,51,90,0) 0%, rgba(28,27,51,0.1) 100%)",
                  }}
                />
                {/* Backdrop blur + dark tint */}
                <div
                  className="absolute inset-0"
                  style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    backgroundImage: "url('/images/audit/card-noise.png')",
                    backgroundSize: "71px 61px",
                    backgroundPosition: "top left",
                    opacity: 0.2,
                  }}
                />
              </div>

              {/* Card content */}
              <div className="relative z-10 px-[24px] py-[24px] sm:px-[48px] sm:pt-[35px] sm:pb-[40px]">
                {/* Chart title */}
                <h3 className="font-chart font-bold text-[16px] md:text-[18px] leading-[27px] text-white text-center mb-[28px] sm:mb-[43px]">
                  Where founders actually spend time VS Where they should
                </h3>

                {/* Bars */}
                <div className="flex flex-col gap-[24px] sm:gap-[35px] mb-[28px] sm:mb-[43px]">
                  {bars.map((bar) => (
                    <div
                      key={bar.label}
                      className="flex items-center gap-[12px] sm:gap-[16px]"
                    >
                      <span className="font-body font-bold text-[15px] md:text-[18px] leading-[27px] text-white w-[75px] sm:w-[91px] shrink-0">
                        {bar.label}
                      </span>
                      <div className="flex-1">
                        <div
                          className="h-[40px] sm:h-[49px] rounded-[12px] flex items-center justify-center"
                          style={{
                            width: bar.width,
                            minWidth: "60px",
                            background: bar.gradient,
                          }}
                        >
                          <span className="font-chart font-bold text-[14px] sm:text-[16px] text-white">
                            {bar.pct}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer text */}
                <p className="font-chart font-medium text-[16px] md:text-[18px] leading-[27px] text-white">
                  Most founders skip the clarity stage entirely — jumping from
                  idea straight to building. That&apos;s where projects fail.
                </p>
              </div>

              {/* Inner glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-[40px]"
                style={innerGlow}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
