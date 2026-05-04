"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import { IdeaCard, ReviewCard } from "./HowWeHelpCards";

const questions = [
  { num: "1", text: "Does this idea actually solve a real problem?" },
  { num: "2", text: "Will people use this product?" },
  { num: "3", text: "Is what you've built pointing in the right direction?" },
  { num: "4", text: "What should you do next — and in what order?" },
];

export default function HowWeHelp() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.7", "end 0.7"]);

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-black">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ filter: "blur(40px)", WebkitFilter: "blur(40px)" }}
      >
        <Image
          width={1920}
          height={1080}
          src="/images/build-with-us/background.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <Image
        width={1920}
        height={1080}
        src="/images/build-with-us/pulse.svg"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none"
      />

      <div ref={scope} className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-[30px]">
          <WordRevealText
            as="h2"
            className="font-display font-extrabold text-[28px] sm:text-[38px] md:text-[50px] leading-[100%] uppercase text-white"
          >
            How We <span className="text-[#1C5AF9]">Help</span>
          </WordRevealText>
        </div>

        <div className="flex flex-col lg:flex-row gap-[32px] mb-[40px]">
          <IdeaCard />
          <ReviewCard />
        </div>

        <div
          className="w-full rounded-[20px] py-[30px] md:py-[52px] px-[18px] mb-[40px]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 100%)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[20px] sm:gap-y-[76px] gap-x-[24px] sm:gap-x-[60px] md:gap-x-[100px]">
            {questions.map((q) => (
              <div
                key={q.num}
                className="flex items-center gap-[12px] sm:gap-[16px]"
              >
                <div className="relative w-[24px] h-[24px] shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-white/40" />
                  <span className="relative font-body font-normal text-[12px] sm:text-[14px] leading-[20px] text-white text-center">
                    {q.num}
                  </span>
                </div>
                <WordRevealText
                  as="p"
                  className="font-body font-medium text-[14px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[27px] text-white"
                >
                  {q.text}
                </WordRevealText>
              </div>
            ))}
          </div>
        </div>

        <WordRevealText
          as="p"
          className="font-body font-bold text-[16px] sm:text-[24px] md:text-[32px] leading-[1.4] sm:leading-[1.3] md:leading-[32px] text-white"
        >
          No fluff. No generic feedback. Just a clear picture of where you stand
          and where to go.
        </WordRevealText>
      </div>
    </section>
  );
}
