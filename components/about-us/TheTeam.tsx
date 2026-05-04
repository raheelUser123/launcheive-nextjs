"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import TeamFlowchart from "./TeamFlowchart";

const infoPoints = [
  "Behind every project is a dedicated in-house team: product designers, web and mobile developers, backend engineers, DevOps specialists, and go-to-market strategists.",
  "The same team that reviews your product is the team that builds it.",
];

const principles = [
  "No outsourcing.",
  "No handoff gaps.",
  "No developers building something the product strategist wouldn’t sign off on.",
  "Just one team responsible for the outcome.",
];

export default function TheTeam() {
  const titleScope = useRef<HTMLDivElement>(null);
  const contentScope = useRef<HTMLDivElement>(null);
  useScrollReveal(titleScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);
  useScrollReveal(contentScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative overflow-hidden bg-black py-[30px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 left-1/2 w-[636px] -translate-x-[calc(50%+30px)] mix-blend-screen opacity-40">
          <Image
            src="/images/about-us/blur-outer.svg"
            alt=""
            fill
            className="object-cover scale-[1.55]"
          />
          <Image
            src="/images/about-us/blur-inner.png"
            alt=""
            fill
            className="object-cover scale-[1.35]"
          />
        </div>

        <div className="absolute inset-y-0 right-[72px] hidden w-px bg-white/5 lg:block" />
        <div className="absolute inset-y-0 right-[73px] hidden w-[104px] opacity-10 lg:block">
          <div
            className="h-full w-full bg-repeat-y bg-top"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(255,255,255,0.6) 0 1px, transparent 1.5px)",
              backgroundSize: "8px 8px",
            }}
          />
        </div>
        <div className="absolute inset-x-0 top-0 hidden h-px bg-white/5 lg:block" />
        <div className="absolute inset-x-0 bottom-0 hidden h-px bg-white/5 lg:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1270px] px-4 sm:px-6 lg:px-8">
        <div ref={titleScope} className="mb-[30px]">
          <WordRevealText as="h2" className="font-display text-[30px] font-extrabold uppercase leading-[1] text-white sm:text-[50px] md:text-[60px]">
            THE <span className="text-[#1C5AF9]">TEAM</span>
          </WordRevealText>
        </div>

        <div ref={contentScope}>
          <div
            className="animate-on-scroll mb-[30px] rounded-[20px] border border-white/20 px-[28px] py-[24px] lg:px-[40px]"
            style={{
              background:
                "radial-gradient(ellipse at center top, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col gap-[22px]">
              {infoPoints.map((point, index) => (
                <div key={point} className="flex items-start gap-[16px]">
                  <div className="relative mt-[3px] h-[32px] w-[32px] shrink-0 rounded-full border border-white/15">
                    <div className="absolute left-1/2 top-1/2 flex h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-[14px] font-normal leading-[20px] text-white/90 font-body">
                      {index + 1}
                    </div>
                  </div>
                  <WordRevealText
                    as="p"
                    className={`max-w-[1126px] text-[16px] leading-[normal] md:text-[20px] md:leading-[27px] ${index === 1 ? "font-bold text-white" : "font-medium text-white"}`}
                  >
                    {point}
                  </WordRevealText>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-[555px_1fr] lg:items-start">
            <div className="animate-on-scroll-left flex max-w-[555px] flex-col gap-[30px]">
              {principles.map((item, index) => (
                <div
                  key={item}
                  style={{
                    width: index === 2 ? "510px" : "auto",
                    maxWidth: "100%",
                  }}
                >
                  <WordRevealText
                    as="p"
                    className="text-[16px] leading-[normal] md:text-[20px] md:leading-[28px] font-medium text-white"
                  >
                    {item}
                  </WordRevealText>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll-right flex justify-center pt-[8px] lg:justify-end lg:pt-[80px]">
              <TeamFlowchart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
