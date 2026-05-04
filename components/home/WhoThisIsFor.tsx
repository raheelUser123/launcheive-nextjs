"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const forYou = [
  "You have an idea you believe in — but you're not sure it makes sense yet.",
  "You used AI tools to build a prototype and now you're stuck.",
  "Your codebase is breaking in ways you can't fix.",
  "You've been going in circles and need a second opinion from people who've been here before.",
];

const notForYou = [
  "You want someone to just start coding without asking questions.",
  "You already have a product team and clear direction.",
  "You're looking for the lowest-cost development shop.",
];

function CheckIcon() {
  return (
    <div className="w-[20px] h-[20px] rounded-full bg-[#10b981] flex items-center justify-center shrink-0 mt-[2px]">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6L5 8.5L9.5 3.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CrossIcon() {
  return (
    <div className="w-[20px] h-[20px] rounded-full bg-[#ef4444] flex items-center justify-center shrink-0 mt-[2px]">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M3 3L9 9M9 3L3 9"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function WhoThisIsFor() {
  const titleScope = useRef<HTMLDivElement>(null);
  const cardsScope = useRef<HTMLDivElement>(null);
  const cardsScope2 = useRef<HTMLDivElement>(null);
  useScrollReveal(titleScope, ["start 0.9", "start 0.75"], ["start 0.9", "start 0.7"]);
  useScrollReveal(cardsScope, ["start 0.9", "start 0.7"], ["start 0.9", "start 0.7"]);
  useScrollReveal(cardsScope2, ["start 0.9", "start 0.7"], ["start 0.9", "start 0.7"]);

  return (
    <section className="relative py-[30px] overflow-hidden bg-black">
      {/* Blurred background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          filter: "blur(30px)",
          WebkitFilter: "blur(30px)",
        }}
      >
        <Image
          width={1920}
          height={1080}
          src="/images/audit/who-this-is-for-bg.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={titleScope} className="mb-[20px]">
          <WordRevealText
            as="h2"
            className="font-display font-extrabold text-[28px] sm:text-[42px] md:text-[60px] leading-[100%] tracking-[-1px] md:tracking-[-3px] uppercase text-white"
          >
            <span className="text-[#1E5CF9]">Who</span> This Is For
          </WordRevealText>
        </div>

        {/* Two cards side by side */}
        <div className="flex flex-col lg:flex-row gap-[32px]">
          {/* For you card */}
          <div ref={cardsScope}
            className="flex-1 rounded-[20px] border border-white/10 p-[16px] sm:p-[22px] md:p-[30px] overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at center top, rgba(255,255,255,0.08) 0%, transparent 70%)",
            }}
          >
            <WordRevealText
              as="p"
              className="font-body font-bold text-[18px] leading-[27px] text-white mb-[30px]"
            >
              This is for you if:
            </WordRevealText>
            <div className="flex flex-col gap-[24px]">
              {forYou.map((item) => (
                <div key={item} className="flex items-start gap-[16px]">
                  <CheckIcon />
                  <WordRevealText
                    as="p"
                    className="font-body font-medium text-[18px] leading-[25.6px] text-white/70"
                  >
                    {item}
                  </WordRevealText>
                </div>
              ))}
            </div>
          </div>

          {/* Not for you card */}
          <div ref={cardsScope2}
            className="flex-1 rounded-[20px] border border-white/10 p-[16px] sm:p-[22px] md:p-[30px] overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at center top, rgba(255,255,255,0.08) 0%, transparent 70%)",
            }}
          >
            <WordRevealText
              as="p"
              className="font-body font-bold text-[18px] leading-[27px] text-white mb-[30px]"
            >
              This is NOT for you if:
            </WordRevealText>
            <div className="flex flex-col gap-[24px]">
              {notForYou.map((item) => (
                <div key={item} className="flex items-start gap-[16px]">
                  <CrossIcon />
                  <WordRevealText
                    as="p"
                    className="font-body font-medium text-[18px] leading-[25.6px] text-white/70"
                  >
                    {item}
                  </WordRevealText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
