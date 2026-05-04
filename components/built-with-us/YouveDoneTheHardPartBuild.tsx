"use client";

import Image from "next/image";
import BookDiscoveryCallButton from "@/components/built-with-us/BookDiscoveryCallButton";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function YouveDoneTheHardPartBuild() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative md:py-24 py-10 overflow-hidden bg-black">
      {/* Blue radial glow — left-center */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-lighten"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(28,90,249,0.5) 0%, rgba(26,71,185,0.2) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left — Illustration ── */}
          <div className="hidden lg:flex justify-center animate-on-scroll-left">
            <Image
              src="/images/build-with-us/youve-done-illustration.svg"
              alt="Build illustration"
              width={500}
              height={400}
              className="w-full max-w-[500px] h-auto"
            />
          </div>

          {/* ── Right — Text content ── */}
          <div ref={scope}>
            <WordRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-[50px] font-extrabold leading-[1.15] uppercase mb-8">
              <span className="text-[#1C5AF9]">
                YOU&apos;VE DONE THE HARD PART
              </span>{" "}
              <span className="text-white">
                — FIGURING OUT WHAT TO BUILD.
              </span>
            </WordRevealText>

            <div className="space-y-6">
              <WordRevealText as="p" className="font-body text-xl font-medium text-white leading-7">
                Now it needs to be built right.
              </WordRevealText>

              <WordRevealText as="p" className="font-body text-lg font-medium text-white leading-7 max-w-[705px]">
                With architecture that won&apos;t need to be torn down in six
                months.
              </WordRevealText>

              <WordRevealText as="p" className="font-body text-lg font-normal text-white leading-7">
                With design users understand the first time.
              </WordRevealText>

              <WordRevealText as="p" className="font-body text-lg font-normal text-white leading-7">
                With a team invested in the outcome — not just the invoice.
              </WordRevealText>

              <WordRevealText as="p" className="font-body text-lg font-normal text-white leading-7">
                That&apos;s what we&apos;re here for.
              </WordRevealText>

              <div className="pt-2">
                <BookDiscoveryCallButton className="hover:-translate-y-0.5 hover:bg-[#2a68ff] hover:shadow-2xl hover:shadow-blue-500/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
