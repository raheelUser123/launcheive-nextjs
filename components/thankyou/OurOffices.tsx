"use client";

import Image from "next/image";
import BookDiscoveryCallButton from "@/components/built-with-us/BookDiscoveryCallButton";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    iconSrc: "/images/build-with-us/process/happen-next-step-1.svg",
    iconSize: { w: 40, h: 40 },
    title: "Step 1",
    desc: "We review everything you shared.",
  },
  {
    iconSrc: "/images/build-with-us/process/happen-next-step-2.svg",
    iconSize: { w: 35, h: 35 },
    title: "Step 2",
    desc: " We come back to you with an honest assessment.",
  },
  {
    iconSrc: "/images/build-with-us/process/happen-next-step-3.svg",
    iconSize: { w: 40, h: 40 },
    title: "Step 3",
    desc: " You'll know exactly where your product stands.",
  },
];

export default function OurOffices() {
  const titleScope = useRef<HTMLDivElement>(null);
  const stepsScope = useRef<HTMLDivElement>(null);
  useScrollReveal(titleScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);
  useScrollReveal(stepsScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative md:py-24 py-10 overflow-hidden bg-black">
      {/* Background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(28,90,249,0.4) 0%, rgba(38,112,233,0.15) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleScope} className="mb-[60px]">
          <WordRevealText as="h2" className="font-display font-extrabold text-[32px] sm:text-[50px] md:text-[60px] leading-[100%] uppercase text-white">
            What <span className="text-[#1C5AF9]">happens</span> next
          </WordRevealText>
        </div>

        {/* Steps */}
        <div ref={stepsScope} className="relative mb-[60px] flex flex-col items-center gap-0 lg:flex-row lg:items-start lg:justify-between">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="animate-on-scroll relative flex w-full max-w-[298px] flex-col items-center px-[14px] text-center lg:max-w-[254px] lg:px-0"
            >
              {/* Dashed curved arrow connector (desktop only) */}
              {i < steps.length - 2 && (
                <div
                  className="hidden lg:block absolute pointer-events-none z-10"
                  style={{
                    left: "calc(50% + 44px)",
                    width: "413px",
                    top: "32px",
                    height: "22px",
                  }}
                >
                  <Image
                    src="/images/build-with-us/process/step-arrow-up.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              {i == 1 && (
                <div
                  className="hidden lg:block absolute pointer-events-none z-10"
                  style={{
                    left: "calc(50% + 44px)",
                    width: "413px",
                    top: 'auto',
                    bottom: '0',
                    height: "22px",
                  }}
                >
                  <Image
                    src="/images/build-with-us/process/step-arrow-down.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              )}


              {/* Icon circle */}
              <div className="w-[83px] h-[83px] rounded-full bg-[#2670e9] flex items-center justify-center mb-[8px]">
                <Image
                  src={step.iconSrc}
                  alt=""
                  width={step.iconSize.w}
                  height={step.iconSize.h}
                  className="pointer-events-none object-contain"
                />
              </div>

              {/* Title */}
              <WordRevealText
                as="p"
                className="font-display font-extrabold text-[18px] leading-[normal] text-[#2670e9] capitalize mb-[8px]"
              >
                {step.title}
              </WordRevealText>

              {/* Description */}
              <WordRevealText as="p" className="font-body font-medium text-[16px] leading-[24px] text-white max-w-[254px]">
                {step.desc}
              </WordRevealText>

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
      </div>
    </section>
  );
}
