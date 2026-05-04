"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const feedbackItems = [
  {
    label: "Market Fit",
    status: "Needs Attention",
    mobileWidth: "61%",
    desktopWidth: "55%",
    gradient:
      "linear-gradient(90deg, rgba(98, 116, 185, 0.08) 0%, rgba(162, 88, 96, 0.95) 100%)",
  },
  {
    label: "Go-To-Market Strategy",
    status: "Weak",
    mobileWidth: "54%",
    desktopWidth: "45%",
    gradient:
      "linear-gradient(90deg, rgba(98, 116, 185, 0.08) 0%, rgba(166, 93, 108, 0.92) 100%)",
  },
  {
    label: "Tech Foundation",
    status: "Average",
    mobileWidth: "46%",
    desktopWidth: "38%",
    gradient:
      "linear-gradient(90deg, rgba(98, 116, 185, 0.08) 0%, rgba(154, 117, 97, 0.92) 100%)",
  },
  {
    label: "Competitive Edge",
    status: "Needs Direction",
    mobileWidth: "78%",
    desktopWidth: "85%",
    gradient:
      "linear-gradient(90deg, rgba(123, 147, 189, 0.14) 0%, rgba(171, 173, 92, 0.95) 100%)",
  },
] as const;

const glassCardBackground = {
  backgroundImage:
    "radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, rgba(38,112,233,0.1) 0%, rgba(28,27,51,0.02) 100%)",
} as const;

export default function TheProblem() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative overflow-hidden bg-black py-[30px] lg:py-64">
      {/* Background circle glow */}
      <div className="absolute inset-0 pointer-events-none flex items-end justify-end lg:hidden">
        <Image
          src="/images/audit/mobile-problem-blur.png"
          alt=""
          width={419}
          height={745}
          className="h-auto w-[419px] max-w-none translate-x-[22%] translate-y-[16%] object-contain"
          priority
        />
      </div>

      <div className="absolute inset-0 pointer-events-none hidden items-center justify-center lg:flex">
        <Image
          src="/images/audit/Circle.svg"
          alt=""
          width={100}
          height={100}
          className="object-contain blur-3xl w-9/12 h-9/12"
          priority
        />
      </div>

      {/* Flight UI — right side, overflowing */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[50px] mt-5 xl:right-[20px] hidden lg:block pointer-events-none z-5">
        <Image
          src="/images/audit/FlightUI.svg"
          alt="Product audit example — flight booking UI"
          width={700}
          height={500}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-[1270px] mx-auto px-6 sm:px-6 lg:px-8 flex items-center">
        {/* Content */}
        <div className="w-full lg:max-w-[602px] shrink-0">
          <div ref={scope}>
            <WordRevealText
              as="h2"
              className="font-display text-[30px] sm:text-5xl md:text-[60px] font-extrabold leading-[1.2] lg:leading-[1.21] mb-6 lg:mb-8 tracking-normal"
            >
              <span className="text-[#1C5AF9]">THE PROBLEM</span>
              <span className="text-white"> WITH</span>
              <br className="hidden lg:block" />
              <span className="text-white block lg:inline">MOST FEEDBACK</span>
            </WordRevealText>

            <div className="space-y-6 lg:space-y-6">
              <div className="space-y-4 lg:space-y-2">
                <WordRevealText
                  as="p"
                  className="font-body text-[16px] lg:text-lg font-medium text-white leading-[30px] lg:leading-[27px]"
                >
                  You&apos;ve built something. You&apos;ve shown it around.
                </WordRevealText>
                <WordRevealText
                  as="p"
                  className="font-body text-[16px] font-medium lg:font-normal text-white leading-[30px] lg:leading-6"
                >
                  Everyone says it looks good. Interesting idea. Could be big.
                </WordRevealText>
                <WordRevealText
                  as="p"
                  className="font-body text-[16px] font-medium lg:font-normal text-white leading-[30px] lg:leading-6"
                >
                  But nobody has actually pressure-tested it. Nobody has asked the
                  hard questions — about the problem you&apos;re solving, the
                  people you&apos;re building for, the architecture underneath, or
                  whether the direction you&apos;re heading actually makes sense.
                </WordRevealText>
              </div>

              <div className="space-y-4 lg:space-y-2">
                <WordRevealText
                  as="p"
                  className="font-body text-[18px] lg:text-xl font-bold text-white leading-[30px] lg:leading-[27px]"
                >
                  That&apos;s not feedback. That&apos;s politeness.
                </WordRevealText>
                <WordRevealText
                  as="p"
                  className="font-body text-[18px] lg:text-xl font-bold text-white leading-[30px] lg:leading-6"
                >
                  And building on top of polite feedback is one of the most common
                  ways founders waste six months.
                </WordRevealText>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center lg:hidden">
            <Image
              src="/images/home/hero/score-card.png"
              alt="100% Honest Feedback"
              width={142}
              height={142}
              className="object-contain drop-shadow-2xl"
            />
            <Image
              src="/images/audit/mobile-feedback-arrow.svg"
              alt=""
              width={28}
              height={77}
              className="-mt-5 h-[77px] w-[28px] object-contain"
            />

            <div className="mt-4 w-full">
              <div
                className="rounded-[10px] border border-white/20 px-[14px] py-[13px] backdrop-blur-[20px]"
                style={glassCardBackground}
              >
                <p className="font-chart text-[12px] font-bold leading-normal tracking-[0.11px] text-white">
                  Current State Audit
                </p>
              </div>

              <div
                className="mt-4 rounded-[20px] border border-white/20 px-[22px] py-[18px] backdrop-blur-[20px]"
                style={glassCardBackground}
              >
                <div className="space-y-4">
                  {feedbackItems.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <span className="w-[124px] shrink-0 font-chart text-[11px] font-normal leading-normal tracking-[0.11px] text-white">
                        {item.label}
                      </span>
                      <div
                        className="flex h-[28px] items-center justify-end rounded-[5px] pr-[10px]"
                        style={{
                          width: item.mobileWidth,
                          background: item.gradient,
                        }}
                      >
                        <span className="font-chart text-[11px] font-bold leading-normal tracking-[0.11px] text-white whitespace-nowrap">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 100% Honest Feedback badge + arrow + Feedback Quality Score card */}
        <div className="absolute left-[48%] z-10 hidden h-full lg:flex items-center gap-4">
          <Image
            src="/images/home/hero/score-card.png"
            alt="100% Honest Feedback"
            width={160}
            height={160}
            className="object-contain drop-shadow-2xl"
          />
          <Image
            src="/images/audit/arrow.svg"
            alt=""
            width={80}
            height={24}
            className="object-contain mb-5"
          />

          {/* Feedback Quality Score Card */}
          <div className="w-[360px] flex flex-col gap-3 mb-14">
            {/* Header */}
            <div
              className="rounded-[20px] border border-white/20 px-5 py-3 backdrop-blur-[20px]"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, rgba(38,112,233,0.1) 0%, rgba(28,27,51,0.02) 100%)",
              }}
            >
              <p className="text-white text-sm font-bold tracking-[0.11px] font-[Figtree,sans-serif]">
                Current State Audit
              </p>
            </div>

            {/* Bars */}
            <div
              className="rounded-[20px] border border-white/20 px-5 py-4 backdrop-blur-[20px] space-y-3"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, rgba(38,112,233,0.1) 0%, rgba(28,27,51,0.02) 100%)",
              }}
            >
              {feedbackItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-white text-[11px] tracking-[0.11px] font-[Figtree,sans-serif] whitespace-nowrap w-[130px] shrink-0">
                    {item.label}
                  </span>
                  <div
                    className="h-[28px] rounded-[5px] flex items-center justify-center"
                    style={{
                      width: item.desktopWidth,
                      background: item.gradient,
                    }}
                  >
                    <span className="text-white text-[11px] font-bold tracking-[0.11px] font-[Figtree,sans-serif] whitespace-nowrap">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
