"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import PremiumAuditButton from "@/components/premium-audit/PremiumAuditButton";

const steps = [
  {
    num: "Step 1",
    title: "Answer a few focused questions about your idea or prototype.",
    iconSrc: "/images/audit/step1-icon.svg",
    iconSize: { w: 50, h: 45 },
  },
  {
    num: "Step 2",
    title: "Complete your payment — $149, processed securely at checkout.",
    iconSrc: "/images/audit/step2-icon.svg",
    iconSize: { w: 50, h: 50 },
  },
  {
    num: "Step 3",
    title:
      "We prepare your audit. You\u2019ll receive your written report within 5 working days.",
    iconSrc: "/images/audit/step3-icon.svg",
    iconSize: { w: 54, h: 54 },
  },
];

export default function HowItWorks() {
  const titleScope = useRef<HTMLDivElement>(null);
  useScrollReveal(titleScope, ["start 0.9", "start 0.4"], ["start 0.9", "start 0.4"]);

  return (
    <section className="relative md:py-20 py-10 overflow-hidden bg-black">
      {/* Background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/audit/howitworks-blur.svg"
          alt=""
          fill
          className="opacity-40 mix-blend-screen object-cover"
        />
      </div>

      {/* Subtle dot pattern on the right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={titleScope} className="mb-16">
          <WordRevealText
            as="h2"
            className="font-display text-3xl sm:text-4xl lg:text-[50px] font-extrabold leading-[1.15] uppercase"
          >
            <span className="text-[#1C5AF9]">HOW</span>
            <span className="text-white"> IT WORKS</span>
          </WordRevealText>
        </div>

        {/* Steps row */}
        <div className="relative mb-[60px] flex flex-col items-center gap-0 lg:flex-row lg:items-start lg:justify-between">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="animate-on-scroll relative flex w-full max-w-[370px] flex-col items-center px-[14px] text-center lg:max-w-[360px] lg:px-0"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute pointer-events-none z-10"
                  style={{
                    left: "calc(50% + 52px)",
                    width: "220px",
                    top: "40px",
                    height: "21px",
                  }}
                >
                  <Image
                    src="/images/build-with-us/process/step-arrow.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {/* Icon circle */}
              <div className="w-[100px] h-[100px] rounded-full bg-[#2670e9] flex items-center justify-center mb-5">
                <Image
                  src={step.iconSrc}
                  alt=""
                  width={step.iconSize.w}
                  height={step.iconSize.h}
                  className="pointer-events-none"
                />
              </div>

              {/* Step label */}
              <p className="font-display font-extrabold text-[18px] text-[#2670e9] capitalize mb-3">
                {step.num}
              </p>

              {/* Description */}
              <p
                className="font-medium text-[16px] leading-[24px] text-white max-w-[370px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {step.title}
              </p>

              {i < steps.length - 1 && (
                <div className="flex h-[76px] items-center justify-center lg:hidden">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M30 0V42"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="2 4"
                      strokeOpacity="0.9"
                    />
                    <path
                      d="M24.5 37.5L30 43L35.5 37.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-14 text-center animate-on-scroll">
          <PremiumAuditButton
            className="inline-flex items-center justify-center h-[58px] px-[50px] rounded-[80px] bg-[#1C5AF9] hover:bg-[#2a68ff] text-white font-display font-extrabold text-[16px] uppercase transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            GET YOUR PREMIUM AUDIT &mdash; $149
          </PremiumAuditButton>
        </div>
      </div>
    </section>
  );
}
