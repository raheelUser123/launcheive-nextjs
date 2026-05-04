"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import PremiumAuditButton from "@/components/premium-audit/PremiumAuditButton";

export default function WalkAwayWith() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative md:py-24 py-10 overflow-hidden bg-black">
      {/* Background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/audit/walkaway-blur.svg"
          alt=""
          fill
          className="mix-blend-screen object-cover blur-3xl opacity-50"
        />
      </div>

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div ref={scope}>
            <WordRevealText
              as="h2"
              className="font-display text-3xl sm:text-4xl md:text-[60px] font-extrabold leading-[1.15] uppercase mb-6"
            >
              <span className="text-white">WHAT YOU </span>
              <span className="text-[#1C5AF9]">WALK</span>
              <br />
              <span className="text-[#1C5AF9]">AWAY</span>
              <span className="text-white"> WITH</span>
            </WordRevealText>

            <WordRevealText
              as="p"
              className="font-body text-lg font-medium text-white leading-7 mb-5"
            >
              A structured written report covering every area above.
            </WordRevealText>

            <WordRevealText
              as="p"
              className="font-body text-base font-medium text-white leading-7 mb-5 max-w-[540px]"
            >
              You&apos;ll have a clear picture of where your product stands —
              what&apos;s strong, what needs rethinking, and exactly what to do
              next. Something you can act on immediately. Something worth the
              investment before you spend another month building in the wrong
              direction.
            </WordRevealText>

            <WordRevealText
              as="p"
              className="font-body text-base font-medium text-white leading-7 mb-8"
            >
              Your audit is delivered within 5 working days of submission.
            </WordRevealText>

            <WordRevealText
              as="p"
              className="font-body text-xl sm:text-2xl font-bold text-white leading-snug mb-8 max-w-[540px]"
            >
              $149 — one audit, one fixed price. No sales calls. No upsells.
              Just the report.
            </WordRevealText>

            <PremiumAuditButton
              className="inline-flex items-center justify-center h-[58px] px-[50px] rounded-[80px] bg-[#1C5AF9] hover:bg-[#2a68ff] text-white font-display font-extrabold text-base uppercase transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              GET YOUR PREMIUM AUDIT — $149
            </PremiumAuditButton>
          </div>

          {/* Right — Audit At A Glance card */}
          <div className="animate-on-scroll-right">
            <div
              className="relative rounded-[40px] border border-white/15 p-5 overflow-hidden"
              style={{
                boxShadow:
                  "0px 0px 24px 0px rgba(255,255,255,0.06), 0px 5px 10px 0px rgba(0,0,0,0.05), 0px 15px 30px 0px rgba(0,0,0,0.05), 0px 30px 60px 0px rgba(0,0,0,0.1)",
              }}
            >
              {/* Background layers */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-[40px]"
              >
                <div
                  className="absolute inset-0 rounded-[40px]"
                  style={{
                    background:
                      "radial-gradient(ellipse at center top, rgba(255,255,255,0.08) 0%, transparent 60%), linear-gradient(180deg, rgba(46,51,90,0) 0%, rgba(28,27,51,0.1) 100%)",
                  }}
                />
                <div className="absolute inset-0 rounded-[40px] backdrop-blur-[10px] opacity-20" />
              </div>
              {/* Inner glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-[inherit]"
                style={{
                  boxShadow: "inset 0px 0px 100px 0px rgba(204,215,255,0.15)",
                }}
              />

              <div className="relative z-10">
                <h3
                  className="font-bold text-[20px] uppercase text-white mb-1"
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    letterSpacing: "1.32px",
                  }}
                >
                  Audit at a glance
                </h3>
                <p
                  className="text-[18px] font-medium text-white mb-10"
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    lineHeight: "18px",
                  }}
                >
                  What&apos;s included in every report.
                </p>

                <div className="space-y-7">
                  {/* Areas reviewed */}
                  <div className="flex items-baseline justify-between">
                    <span
                      className="text-[18px] font-medium text-white"
                      style={{
                        fontFamily: "Figtree, sans-serif",
                        lineHeight: "17.4px",
                      }}
                    >
                      Areas reviewed in depth
                    </span>
                    <div className="text-right">
                      <span
                        className="text-[24px] font-bold text-white"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          lineHeight: "24px",
                        }}
                      >
                        6+ areas
                      </span>
                      <p
                        className="text-[14px] font-normal text-white"
                        style={{
                          fontFamily: "Figtree, sans-serif",
                          lineHeight: "10px",
                        }}
                      >
                        sections
                      </p>
                    </div>
                  </div>

                  {/* Delivery turnaround */}
                  <div className="flex items-baseline justify-between">
                    <span
                      className="text-[18px] font-medium text-white"
                      style={{
                        fontFamily: "Figtree, sans-serif",
                        lineHeight: "17.4px",
                      }}
                    >
                      Delivery turnaround
                    </span>
                    <div className="text-right">
                      <span
                        className="text-[24px] font-bold text-white"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          lineHeight: "24px",
                        }}
                      >
                        5
                      </span>
                      <p
                        className="text-[14px] font-normal text-white"
                        style={{
                          fontFamily: "Figtree, sans-serif",
                          lineHeight: "10px",
                        }}
                      >
                        working days
                      </p>
                    </div>
                  </div>

                  {/* Fixed price */}
                  <div className="flex items-baseline justify-between">
                    <span
                      className="text-[18px] font-medium text-white"
                      style={{
                        fontFamily: "Figtree, sans-serif",
                        lineHeight: "17.4px",
                      }}
                    >
                      Fixed price, no surprises
                    </span>
                    <div className="text-right">
                      <span
                        className="text-[24px] font-bold text-white"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          lineHeight: "24px",
                        }}
                      >
                        $149
                      </span>
                      <p
                        className="text-[14px] font-normal text-white"
                        style={{
                          fontFamily: "Figtree, sans-serif",
                          lineHeight: "10px",
                        }}
                      >
                        one-time
                      </p>
                    </div>
                  </div>

                  {/* Actionability bar */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[18px] font-medium text-white"
                        style={{ fontFamily: "Figtree, sans-serif" }}
                      >
                        Actionability
                      </span>
                      <span
                        className="text-[14px] font-bold text-[#ef4444]"
                        style={{ fontFamily: "Figtree, sans-serif" }}
                      >
                        High
                      </span>
                    </div>
                    <div className="w-full h-[11px] rounded-[30px] bg-[#d9d9d9]">
                      <div
                        className="h-full rounded-[30px] bg-[#41c990]"
                        style={{ width: "81.6%" }}
                      />
                    </div>
                  </div>

                  {/* Depth of coverage bar */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[18px] font-medium text-white"
                        style={{ fontFamily: "Figtree, sans-serif" }}
                      >
                        Depth of coverage
                      </span>
                      <span
                        className="text-[14px] font-normal text-white"
                        style={{ fontFamily: "Figtree, sans-serif" }}
                      >
                        Exhaustive
                      </span>
                    </div>
                    <div className="w-full h-[11px] rounded-[30px] bg-[#d9d9d9]">
                      <div
                        className="h-full rounded-[30px] bg-[#41c990]"
                        style={{ width: "90.2%" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Slots available */}
                <div className="mt-8 flex items-center gap-[6px]">
                  <div className="w-[6px] h-[6px] rounded-[3px] bg-[#4caf82]" />
                  <span
                    className="text-[18px] font-medium text-white"
                    style={{ fontFamily: "Figtree, sans-serif" }}
                  >
                    Slots available this week
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
