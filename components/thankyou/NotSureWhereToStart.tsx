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
        <div className="grid grid-cols-1 gap-12 lg:gap-10 items-center">
          {/* Right side - Content */}
          <div className="flex flex-col gap-[24px] items-center">
            <WordRevealText
              as="h2"
              className="font-display font-extrabold text-[32px] sm:text-[46px] md:text-[56px] leading-[1.05] uppercase text-white"
            >
              Want to talk it through?
            </WordRevealText>

            <WordRevealText
              as="p"
              className="font-body font-normal text-[18px] leading-[24px] text-white"
            >
              Book a call with our team.
            </WordRevealText>

            <div className="flex flex-col sm:flex-row gap-[16px] mt-[8px]">
              <Link
                href="https://calendly.com/launchieve/build-with-launchieve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[58px] px-[20px] rounded-[80px] bg-[#1C5AF9] hover:bg-[#2a68ff] transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5 font-display font-extrabold text-[14px] uppercase tracking-[0.05em] text-white whitespace-nowrap"
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
