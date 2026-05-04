"use client";

import Link from "next/link";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import PremiumAuditButton from "@/components/premium-audit/PremiumAuditButton";

export default function AboutUsCTA() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #000000 0%, #000000 25%, #0a1030 45%, #0d1a50 65%, #102060 100%)",
      }}
    >
      {/* Dark fade overlay on left */}
      <div
        className="absolute top-0 left-0 w-[40%] h-full pointer-events-none"
        style={{
          background: "linear-gradient(to right, #000000 0%, transparent 100%)",
        }}
      />

      <div ref={scope} className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <WordRevealText
          as="h2"
          className="font-display font-extrabold text-[32px] sm:text-[46px] md:text-[56px] leading-[1.1] uppercase text-white mb-[24px]"
        >
          WE&apos;RE NOT THE RIGHT FIT{" "}
          <span className="text-[#1C5AF9]">FOR EVERYONE</span>
          {" "}— AND THAT&apos;S INTENTIONAL.
        </WordRevealText>

        <WordRevealText
          as="p"
          className="font-body font-normal text-[16px] md:text-[18px] leading-[28px] text-white max-w-[650px] mx-auto mb-[32px]"
        >
          But if you&apos;re serious about what you&apos;re building, and
          you&apos;re looking for a team that treats your product like it
          matters, we&apos;d like to hear from you.
        </WordRevealText>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-[16px] animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <PremiumAuditButton
            className="inline-flex items-center justify-center h-[58px] px-[40px] rounded-[80px] bg-[#1C5AF9] hover:bg-[#2a68ff] transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5 font-display font-extrabold text-[14px] md:text-[16px] uppercase tracking-[0.05em] text-white"
          >
            GET YOUR PREMIUM AUDIT
          </PremiumAuditButton>
          <Link
            href="https://calendly.com/launchieve/build-with-launchieve"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-[58px] px-[40px] rounded-[80px] border border-[#1C5AF9] hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5 font-display font-extrabold text-[14px] md:text-[16px] uppercase tracking-[0.05em] text-white"
          >
            BOOK A DISCOVERY CALL
          </Link>
        </div>
      </div>
    </section>
  );
}
