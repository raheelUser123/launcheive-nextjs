"use client";

import Image from "next/image";
import { useRef } from "react";
import FreeAuditButton from "@/components/free-audit/FreeAuditButton";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function NotSureCTA() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative overflow-hidden bg-black py-[30px] lg:py-20">
      {/* Blue radial glow — left-center */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-lighten"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(28,90,249,0.5) 0%, rgba(26,71,185,0.2) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1270px] px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* ── Left — Illustration ── */}
          <div className="hidden lg:flex justify-center animate-on-scroll-left">
            <Image
              src="/images/audit/not-sure-illustration.svg"
              alt="Not sure if you're ready illustration"
              width={620}
              height={496}
              className="h-auto w-full max-w-[620px]"
            />
          </div>

          {/* ── Right — Text content ── */}
          <div ref={scope}>
            <WordRevealText
              as="h2"
              className="mb-6 w-full max-w-[320px] font-display text-[30px] font-extrabold leading-[1.15] uppercase sm:text-4xl md:text-[50px] lg:mb-8 lg:max-w-none"
            >
              <span className="text-white">NOT SURE IF </span>
              <span className="text-[#1C5AF9]">YOU&apos;RE</span>
              <br />
              <span className="text-white">READY FOR THIS?</span>
            </WordRevealText>

            <div className="space-y-6">
              <WordRevealText
                as="p"
                className="font-body text-[20px] font-medium leading-normal tracking-[-0.04em] text-white lg:text-xl lg:leading-7 lg:tracking-normal"
              >
                That&apos;s completely fine.
              </WordRevealText>

              <WordRevealText
                as="p"
                className="max-w-[705px] font-body text-[18px] font-medium leading-[24px] text-white lg:text-lg lg:leading-7"
              >
                If you&apos;re still figuring out whether your idea or prototype
                is worth investing in — start by submitting it on our homepage.
                Our team will take a look and come back to you within 72 hours.
              </WordRevealText>

              <WordRevealText
                as="p"
                className="font-body text-[18px] font-medium leading-[24px] text-white lg:text-lg lg:font-normal lg:leading-7"
              >
                No payment. No commitment. Just an honest first opinion.
              </WordRevealText>

              <div className="pt-1 lg:pt-2">
                <FreeAuditButton
                  className="inline-flex h-[50px] items-center justify-center rounded-[80px] bg-[#1C5AF9] px-[24px] text-center font-display text-[16px] font-extrabold uppercase text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2a68ff] hover:shadow-2xl hover:shadow-blue-500/30 lg:h-[58px] lg:px-[50px]"
                >
                  Submit Your Idea First
                </FreeAuditButton>
              </div>
            </div>

            <div className="mt-11 flex justify-center overflow-visible lg:hidden">
              <Image
                src="/images/audit/not-sure-mobile.svg"
                alt="Idea submitted, honest first look within 72 hours, then full audit if it makes sense"
                width={352}
                height={528}
                className="h-auto w-full max-w-[352px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
