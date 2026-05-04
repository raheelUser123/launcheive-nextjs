"use client";

import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "We Pick Up Where You Are",
    desc: "We learn your product before we touch the brief.",
    cardClass: "from-transparent via-[#0a0c12] to-[#353535]",
  },
  {
    num: "02",
    title: "Built Exactly As Agreed",
    desc: "What gets scoped is what gets built. No drift, no interpretation gaps.",
    cardClass: "from-transparent via-[#101222] to-[#4f4c81]",
  },
  {
    num: "03",
    title: "Always In The Loop",
    desc: "Clear milestones, direct communication. No chasing, no silence.",
    cardClass: "from-transparent via-[#0d1213] to-[#2c5952]",
  },
  {
    num: "04",
    title: "Live On Every Platform",
    desc: "Web, mobile, App Store, Google Play. Fully deployed — not just ready to deploy.",
    cardClass: "from-transparent via-[#0e1415] to-[#2d5b52]",
  },
];

export default function WhyFoundersWorkWithUsBuild() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative py-[30px] overflow-hidden bg-black">
      {/* Background blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-1/2 top-[44%] h-[620px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-100 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(28,90,249,0.2) 0%, rgba(28,90,249,0.14) 34%, rgba(14,30,79,0.08) 58%, rgba(0,0,0,0) 78%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[44%] h-[900px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-100 blur-[210px]"
          style={{
            background:
              "radial-gradient(circle, rgba(10,28,84,0.38) 0%, rgba(10,28,84,0.22) 38%, rgba(7,14,34,0.1) 60%, rgba(0,0,0,0) 82%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[71px] items-start lg:items-end">
          {/* Left side - Text content */}
          <div ref={scope} className="flex-1 max-w-[646px] flex flex-col gap-[30px]">
            <WordRevealText as="h2" className="font-display font-extrabold text-[28px] sm:text-[42px] md:text-[60px] leading-[1.1] uppercase">
              <span className="text-white">WHY </span>
              <span className="text-[#1C5AF9]">FOUNDERS </span>
              <span className="text-white">WORK WITH US</span>
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[18px] md:text-[20px] leading-[28px] text-white">
              Most development agencies will take your brief and start building.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white">
              We won&apos;t — not until we understand the product.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white">
              The same team that runs our Premium Audits is the team that
              builds. That means no handoff gaps, no briefs lost in translation,
              and no developers building something the product strategist
              wouldn&apos;t have signed off on.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white">
              You get a team that thinks about your product the way you do — and
              stays accountable to it throughout.
            </WordRevealText>
          </div>

          {/* Right side - Flow illustration */}
          <div className="w-full lg:w-auto shrink-0 animate-on-scroll-right">
            <div className="mx-auto w-full max-w-[553px]">
              <div className="hidden md:block relative h-[436px] w-[553px]">
                {steps.map((step, i) => {
                  const top = i * 94.22;

                  return (
                    <div
                      key={step.num}
                      className="absolute left-0 w-full"
                      style={{ top: `${top}px` }}
                    >
                      <div className="relative h-[74px] w-full">
                        {i < steps.length - 1 && (
                          <div
                            className="absolute left-[36px] top-[74px] h-[20px] w-px bg-white/60"
                            aria-hidden="true"
                          />
                        )}

                        <div
                          className="absolute left-0 top-0 flex h-[74px] w-[74px] items-center justify-center rounded-full border border-white/14 bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_34%,rgba(0,0,0,0.88)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_14px_32px_rgba(0,0,0,0.4)]"
                          aria-hidden="true"
                        >
                          <span className="font-chart text-[22px] font-bold leading-none text-white">
                            {step.num}
                          </span>
                        </div>

                        <div
                          className="absolute left-[74px] top-[39px] h-px w-[54px] bg-white/70"
                          aria-hidden="true"
                        />

                        <div
                          className={`absolute left-[128px] top-0 flex h-[74px] w-[425px] overflow-hidden rounded-[12px] bg-gradient-to-r px-[20px] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_-1px_0_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(255,255,255,0.08),0_18px_40px_rgba(0,0,0,0.24)] ${step.cardClass}`}
                        >
                          <div
                            className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_18%,rgba(255,255,255,0.03)_62%,rgba(255,255,255,0.06)_100%)]"
                            aria-hidden="true"
                          />
                          <div
                            className="absolute inset-y-0 right-0 w-[1px] bg-white/35"
                            aria-hidden="true"
                          />
                          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                            <p className="font-chart text-[16px] font-bold leading-[1.2] text-white">
                              {step.title}
                            </p>
                            <p className="mt-[7px] font-chart text-[16px] font-normal leading-[1.15] text-white">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="absolute left-0 top-[385px] flex w-[553px] items-start justify-between">
                  <div className="flex h-[50px] w-[243px] items-center justify-center rounded-[10px] border border-white/18 bg-gradient-to-r from-[#070913] via-[#19254f] to-[#455790] px-[18px] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_28px_rgba(0,0,0,0.22)]">
                    <p className="font-chart text-[16px] font-normal leading-[1.15] text-white">
                      Most agencies: skip to step 3
                    </p>
                  </div>
                  <div className="flex h-[50px] w-[243px] items-center justify-center rounded-[10px] border border-white/18 bg-gradient-to-r from-[#070913] via-[#1a2653] to-[#4960a4] px-[18px] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_28px_rgba(0,0,0,0.22)]">
                    <p className="font-chart text-[16px] font-normal leading-[1.15] text-white">
                      We start at step 1 — always
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[18px] md:hidden">
                {steps.map((step, i) => (
                  <div key={step.num} className="flex items-start gap-[14px]">
                    <div className="flex w-[56px] shrink-0 flex-col items-center">
                      <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-white/14 bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_34%,rgba(0,0,0,0.88)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_24px_rgba(0,0,0,0.35)]">
                        <span className="font-chart text-[20px] font-bold leading-none text-white">
                          {step.num}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="h-[24px] w-px bg-white/50" aria-hidden="true" />
                      )}
                    </div>

                    <div
                      className={`relative flex min-h-[74px] flex-1 overflow-hidden rounded-[12px] bg-gradient-to-r px-[18px] py-[14px] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_-1px_0_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(255,255,255,0.08),0_14px_28px_rgba(0,0,0,0.22)] ${step.cardClass}`}
                    >
                      <div
                        className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_18%,rgba(255,255,255,0.03)_62%,rgba(255,255,255,0.06)_100%)]"
                        aria-hidden="true"
                      />
                      <div
                        className="absolute inset-y-0 right-0 w-[1px] bg-white/35"
                        aria-hidden="true"
                      />
                      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                        <p className="font-chart text-[15px] font-bold leading-[1.2] text-white">
                          {step.title}
                        </p>
                        <p className="mt-[6px] font-chart text-[15px] leading-[1.2] text-white">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-[6px] flex flex-col gap-[12px]">
                  <div className="flex min-h-[50px] items-center justify-center rounded-[10px] border border-white/18 bg-gradient-to-r from-[#070913] via-[#19254f] to-[#455790] px-[18px] py-[12px] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_28px_rgba(0,0,0,0.22)]">
                    <p className="font-chart text-[15px] leading-[1.2] text-white">
                      Most agencies: skip to step 3
                    </p>
                  </div>
                  <div className="flex min-h-[50px] items-center justify-center rounded-[10px] border border-white/18 bg-gradient-to-r from-[#070913] via-[#1a2653] to-[#4960a4] px-[18px] py-[12px] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_28px_rgba(0,0,0,0.22)]">
                    <p className="font-chart text-[15px] leading-[1.2] text-white">
                      We start at step 1 — always
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
