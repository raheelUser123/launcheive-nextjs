"use client";

import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import PremiumAuditButton from "@/components/premium-audit/PremiumAuditButton";

export default function MostFoundersCTA() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative overflow-hidden">
      {/* Background: black on left fading to dark blue on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #000000 0%, #000000 30%, #0a1a4a 70%, #0d2266 100%)",
        }}
      />

      <div ref={scope} className="relative z-10 mx-auto max-w-[1270px] px-6 sm:px-6 lg:px-8 py-[30px] text-center lg:py-20">
        <WordRevealText
          as="h2"
          className="mx-auto mb-6 w-full max-w-[320px] font-display text-[30px] font-extrabold leading-[1.15] uppercase sm:max-w-[680px] sm:text-4xl md:text-[52px] lg:mb-6 lg:max-w-none"
        >
          <span className="text-white">MOST FOUNDERS </span>
          <span className="text-[#1C5AF9]">DON&apos;T FAIL</span>
          <span className="text-white"> BECAUSE THEY STOPPED TRYING.</span>
        </WordRevealText>

        <WordRevealText
          as="p"
          className="mx-auto mb-6 max-w-[326px] font-body text-[20px] font-medium leading-normal tracking-[-0.04em] text-white sm:max-w-[620px] sm:text-lg sm:tracking-normal lg:mb-2 lg:text-lg lg:text-white/70"
        >
          They fail because nobody told them the truth early enough.
        </WordRevealText>

        <WordRevealText
          as="p"
          className="mx-auto mb-[29px] max-w-[326px] font-body text-[18px] font-medium leading-[24px] text-white sm:max-w-[620px] sm:text-lg lg:mb-10 lg:text-white/70"
        >
          This is that conversation.
        </WordRevealText>

        <div className="animate-on-scroll">
          <PremiumAuditButton
            className="inline-flex h-[50px] w-full max-w-[328px] items-center justify-center rounded-[80px] bg-[#1C5AF9] px-[24px] text-center font-display text-[16px] font-extrabold uppercase text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4a7dff] hover:shadow-2xl hover:shadow-blue-500/30 sm:h-auto sm:w-auto sm:max-w-none sm:px-8 sm:py-4 sm:font-body sm:text-base sm:font-semibold sm:tracking-wide lg:bg-[#3B6EF8]"
          >
            GET YOUR PREMIUM AUDIT &mdash; $149
          </PremiumAuditButton>
        </div>
      </div>
    </section>
  );
}
