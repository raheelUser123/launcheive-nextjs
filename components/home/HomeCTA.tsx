"use client";

import Image from 'next/image'
import { ChevronRightCircle } from 'lucide-react'
import { useRef } from "react";
import FreeAuditButton from "@/components/free-audit/FreeAuditButton";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function HomeCTA() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.85", "end 0.3"]);

  return (
    <section className="relative py-[60px] overflow-hidden bg-black">
      {/* Blurred CTA illustration - top left corner */}
      <div className="absolute top-0 left-0 w-[80%] h-full pointer-events-none blur-2xl opacity-60">
        <Image
          src="/images/home/cta-illustration.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div ref={scope} className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-[40px]">
          {/* Left - Distorted Spiral */}
          <div className="relative hidden lg:block w-[40%] h-[450px] shrink-0">
            <Image
              src="/images/home/distorted-spiral.svg"
              alt="Distorted spiral illustration"
              fill
              className="object-contain"
            />
            <Image
              src="/images/home/hexagons.svg"
              alt="Hexagons overlay"
              fill
              className="object-contain z-10"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <WordRevealText
              as="h2"
              className="font-display font-extrabold text-[28px] sm:text-[38px] md:text-[50px] leading-[100%] uppercase text-white mb-[24px]"
            >
              Most Founders Wait{' '}
              <span className="text-[#1E5CF9]">Too Long</span> To Ask For Help
            </WordRevealText>

            {/* Bullet points */}
            <div className="flex flex-col gap-[16px] mb-[24px]">
              <div className="flex items-start gap-[8px]">
                <ChevronRightCircle className="text-white w-[20px] h-[20px] mt-[3px] shrink-0" />
                <WordRevealText
                  as="p"
                  className="font-body font-medium text-[18px] leading-[27px] text-white"
                >
                  They keep patching the prototype.
                </WordRevealText>
              </div>
              <div className="flex items-start gap-[8px]">
                <ChevronRightCircle className="text-white w-[20px] h-[20px] mt-[3px] shrink-0" />
                <WordRevealText
                  as="p"
                  className="font-body font-medium text-[18px] leading-[27px] text-white"
                >
                  They keep second-guessing the idea.
                </WordRevealText>
              </div>
              <div className="flex items-start gap-[8px]">
                <ChevronRightCircle className="text-white w-[20px] h-[20px] mt-[3px] shrink-0" />
                <WordRevealText
                  as="p"
                  className="font-body font-medium text-[18px] leading-[27px] text-white"
                >
                  They keep building, even when they&apos;re not sure what they&apos;re building toward.
                </WordRevealText>
              </div>
            </div>

            {/* Bold statement */}
            <WordRevealText
              as="p"
              className="font-body font-bold text-[18px] sm:text-[22px] md:text-[26px] leading-[normal] text-white mb-[8px]"
            >
              You don&apos;t have to figure this out alone.
            </WordRevealText>

            <WordRevealText
              as="p"
              className="font-body font-medium text-[18px] leading-[27px] text-white mb-[24px]"
            >
              Submit your idea or prototype — we&apos;ll review it and tell you exactly where you stand.
            </WordRevealText>

            {/* CTA Button */}
            <FreeAuditButton
              className="inline-flex items-center justify-center h-[58px] rounded-[80px] bg-[#1C5AF9] hover:bg-brand-blue-light text-white font-display font-bold text-[16px] leading-[40px] uppercase px-[50px] py-[20px] transition-all duration-200 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-0.5 mb-[24px]"
            >
              Submit Your Idea
            </FreeAuditButton>

            <WordRevealText
              as="p"
              className="font-body font-bold text-[16px] leading-[27px] text-white"
            >
              It&apos;s free. It&apos;s straightforward. And it might save you months of building the wrong thing.
            </WordRevealText>
          </div>
        </div>
      </div>
    </section>
  )
}
