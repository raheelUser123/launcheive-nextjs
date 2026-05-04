"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRightCircle } from "lucide-react";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import PremiumAuditButton from "@/components/premium-audit/PremiumAuditButton";

export default function NotSureWhereToStart() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative md:py-24 py-10 overflow-hidden bg-black">
      {/* Blurred ellipse — top of component */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1440px] h-[1000px] pointer-events-none opacity-60 mix-blend-lighten blur-[40px]">
        <Image
          src="/images/contact-us/blur-mask.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div ref={scope} className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-10 items-center">
          {/* Left side - Hexagons SVG image */}
          <div className="animate-on-scroll-left hidden lg:flex items-center justify-center relative">
            {/* Spiral behind hexagons */}
            <Image
              src="/images/contact-us/spiral.svg"
              alt=""
              width={550}
              height={550}
              className="absolute inset-0 m-auto object-contain opacity-30 pointer-events-none"
            />
            <Image
              src="/images/contact-us/hexagons.svg"
              alt="Hexagonal icons representing ideas, planning, and launch"
              width={480}
              height={520}
              className="object-contain"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col gap-[24px]">
            <WordRevealText
              as="h2"
              className="font-display font-extrabold text-[32px] sm:text-[46px] md:text-[56px] leading-[1.05] uppercase text-white"
            >
              NOT SURE WHERE TO <span className="text-[#1C5AF9]">START?</span>
            </WordRevealText>

            <WordRevealText
              as="p"
              className="font-body font-medium text-[18px] leading-[28px] text-white"
            >
              That&apos;s completely normal.
            </WordRevealText>

            <WordRevealText
              as="p"
              className="font-body font-medium text-[18px] leading-[28px] text-white max-w-[580px]"
            >
              If you&apos;re still figuring out whether your idea or prototype
              is worth investing in, start by submitting it through our
              homepage. Our team will review it and respond with an honest first
              opinion within{" "}
              <span className="font-bold text-[22px] text-white">
                72 hours.
              </span>
            </WordRevealText>

            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center gap-[10px]">
                <ChevronRightCircle className="text-white w-[20px] h-[20px] mt-[3px] shrink-0" />
                <WordRevealText
                  as="p"
                  className="font-body font-medium text-[18px] text-white"
                >
                  No payment.
                </WordRevealText>
              </div>

              <div className="flex items-center gap-[10px]">
                <ChevronRightCircle className="text-white w-[20px] h-[20px] mt-[3px] shrink-0" />
                <WordRevealText
                  as="p"
                  className="font-body font-medium text-[18px] text-white"
                >
                  No commitment.
                </WordRevealText>
              </div>
            </div>

            <WordRevealText
              as="p"
              className="font-body font-medium text-[18px] leading-[28px] text-white"
            >
              If you&apos;re ready to go deeper:
            </WordRevealText>

            <div className="flex flex-col sm:flex-row gap-[16px] mt-[8px]">
              <PremiumAuditButton
                className="inline-flex items-center justify-center h-[58px] px-[20px] rounded-[80px] bg-[#1C5AF9] hover:bg-[#2a68ff] transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5 font-display font-extrabold text-[14px] uppercase tracking-[0.05em] text-white whitespace-nowrap"
              >
                GET YOUR PREMIUM AUDIT — $149
              </PremiumAuditButton>
              <Link
                href="https://calendly.com/launchieve/build-with-launchieve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[58px] px-[20px] rounded-[80px] border border-[#1C5AF9] hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5 font-display font-extrabold text-[14px] uppercase tracking-[0.05em] text-white whitespace-nowrap"
              >
                BOOK A DISCOVERY CALL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
