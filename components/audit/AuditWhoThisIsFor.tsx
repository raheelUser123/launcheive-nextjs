"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

import AuditWhoThisIsForFlowchart from "@/components/audit/AuditWhoThisIsForFlowchart";

export default function AuditWhoThisIsFor() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative overflow-hidden bg-black md:py-24 py-10">
      <Image
        width={600}
        height={600}
        src="/images/home/hero/blur-glow.svg"
        alt=""
        className="pointer-events-none absolute right-0 md:top-0 top-auto md:bottom-auto bottom-0 h-[600px] w-[600px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div ref={scope} className="pt-4 lg:pt-8">
            <WordRevealText
              as="h2"
              className="font-display text-3xl font-extrabold uppercase leading-[1.15] sm:text-4xl md:text-[60px]"
            >
              <span className="text-[#1C5AF9]">WHO</span>{" "}
              <span className="text-white">THIS IS FOR</span>
            </WordRevealText>

            <div className="mt-6 space-y-5 sm:mt-8">
              <WordRevealText
                as="p"
                className="font-body text-lg font-medium leading-[27px] text-white sm:text-xl"
              >
                You&apos;ve been building. Maybe with{" "}
                <strong>Lovable, Bolt, Cursor, or Replit.</strong> Maybe with a
                small team. Maybe on your own.
              </WordRevealText>

              <WordRevealText
                as="p"
                className="font-body text-base font-medium leading-[30px] text-white sm:text-lg"
              >
                You have something real, something you can click through,
                something that mostly works. But you&apos;ve hit a point where
                you&apos;re not sure if you&apos;re building the right thing, in
                the right way, for the right people.
              </WordRevealText>

              <WordRevealText
                as="p"
                className="font-body text-base font-medium leading-[30px] text-white sm:text-lg"
              >
                That&apos;s exactly the moment this audit exists for.
              </WordRevealText>

              <WordRevealText
                as="p"
                className="font-body text-base font-medium leading-[30px] text-white sm:text-lg"
              >
                If you have an idea but no prototype yet, we can still help.
              </WordRevealText>

              <WordRevealText
                as="p"
                className="font-body text-base font-medium leading-[30px] text-white sm:text-lg"
              >
                But this audit was designed primarily for founders who have
                already been in the trenches.
              </WordRevealText>
            </div>
          </div>

          <AuditWhoThisIsForFlowchart />
        </div>
      </div>
    </section>
  );
}
