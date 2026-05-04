"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const cardGradient =
  "radial-gradient(ellipse at center top, rgba(255,255,255,0.08), transparent), linear-gradient(180deg, transparent, transparent)";
const innerCardBg =
  "radial-gradient(ellipse at center, rgba(255,255,255,0.16), transparent), linear-gradient(180deg, rgba(38,112,233,0.1) 0%, rgba(28,27,51,0.02) 100%)";

const areas = [
  {
    num: "1.",
    title: "The Problem",
    desc: "Is the problem real, specific, and painful enough that people will actually pay to solve it? Or does it sound right without holding up under pressure?",
    image: "/images/audit/card-problem.svg",
    wide: true,
  },
  {
    num: "2.",
    title: "The Prototype",
    desc: "What\u2019s working. What isn\u2019t. What\u2019s salvageable and what\u2019s quietly pulling the whole product in the wrong direction.",
    image: "/images/audit/card-prototype.svg",
    wide: false,
  },
  {
    num: "3.",
    title: "The Direction",
    desc: "Are you building for the right people? Is the scope too wide, too narrow, or aimed at the wrong audience entirely?",
    image: "/images/audit/card-direction.svg",
    wide: false,
  },
  {
    num: "4.",
    title: "The Next Move",
    desc: "One clear, prioritized recommendation. Not a vague roadmap \u2014 a concrete direction based on what we actually see in your product.",
    image: "/images/audit/card-nextmove.svg",
    wide: true,
  },
];

export default function WhatWeLookAt() {
  const titleScope = useRef<HTMLDivElement>(null);
  useScrollReveal(titleScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative md:py-24 py-10 overflow-hidden bg-black">
      {/* Subtle radial blue glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-lighten"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(28,90,249,0.3) 0%, rgba(26,71,185,0.15) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={titleScope}>
          <div className="mb-4">
            <WordRevealText
              as="h2"
              className="font-display text-3xl sm:text-4xl md:text-[60px] font-extrabold leading-[1.15] uppercase"
            >
              <span className="text-white">WHAT WE </span>
              <span className="text-[#1C5AF9]">LOOK</span>
              <span className="text-white"> AT</span>
            </WordRevealText>
          </div>
          <WordRevealText
            as="p"
            className="font-body text-xl sm:text-2xl md:text-[30px] font-medium text-white mb-10 max-w-[720px] leading-normal tracking-[-0.04em]"
          >
            This isn&apos;t a surface-level review. We go deep across four areas.
          </WordRevealText>
        </div>

        {/* 2×2 asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {areas.map((area, i) => {
            /* Row 1: card 0 = 7 cols, card 1 = 5 cols
               Row 2: card 2 = 5 cols, card 3 = 7 cols */
            const span = i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5";

            return (
              <div
                key={area.title}
                className={`animate-on-scroll ${span} rounded-[20px] border border-white/10 overflow-hidden p-[30px] flex flex-col items-center justify-between min-h-[420px]`}
                style={{
                  background: cardGradient,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {/* Number + title */}
                <p className="font-body text-lg font-bold text-white self-start w-full mb-4">
                  {area.num} <span className="font-bold">{area.title}</span>
                </p>

                {/* Illustration card */}
                <div
                  className="w-[360px] max-w-full h-[170px] rounded-[20px] border border-white/20 backdrop-blur-[20px] relative overflow-hidden flex items-center justify-center"
                  style={{ background: innerCardBg }}
                >
                  <Image
                    src={area.image}
                    width={200}
                    height={200}
                    alt={area.title}
                    className="object-cover aspect-square h-full"
                  />
                </div>

                {/* Divider */}
                <div className="w-[360px] max-w-full h-[0.1px] bg-white mt-5 mb-5" />

                {/* Description */}
                <p className="font-body text-base sm:text-lg font-medium text-white/70 leading-6 max-w-[360px] w-full">
                  {area.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
