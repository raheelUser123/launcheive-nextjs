"use client";

import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const questions = [
  { num: "1", text: "Does this idea actually solve a real problem?" },
  { num: "2", text: "Am I building too much — or not enough?" },
  { num: "3", text: "Is my prototype pointing in the right direction?" },
  { num: "4", text: "Should I keep going, pivot, or scrap it?" },
];

const topPills = [
  { label: "Before", left: 56, top: 32, variant: "blue" },
  { label: "The Audit", left: 258, top: 32, variant: "blue" },
  { label: "After", left: 470, top: 32, variant: "blue" },
] as const;

const stagePills = [
  { label: "Arrival", left: 56, top: 135, variant: "purple" },
  { label: "The Session", left: 258, top: 135, variant: "purple" },
  { label: "Departure", left: 458, top: 135, variant: "purpleWide" },
] as const;

const beforeItems = [
  {
    title: "Does This Solve A Real Problem?",
    left: 19,
    top: 81,
    variant: "olive",
  },
  {
    title: "Am I Building Too Much?",
    left: 19,
    top: 240,
    variant: "olive",
  },
  {
    title: "Should I Rethink The Approach?",
    left: 19,
    top: 295,
    variant: "oliveAlt",
  },
] as const;

const afterItems = [
  {
    title: "Problem Validated",
    subtitle: "Worth Building — Confirmed",
    left: 419,
    top: 81,
  },
  {
    title: "Prototype Assessed",
    subtitle: "What Works, What Doesn't",
    left: 419,
    top: 174,
  },
  {
    title: "Next Steps Defined",
    subtitle: "Clear Path, No Guesswork",
    left: 419,
    top: 267,
  },
];

function Pill({
  label,
  left,
  top,
  width = 94,
  variant,
}: {
  label: string;
  left: number;
  top: number;
  width?: number;
  variant: "blue" | "purple" | "purpleWide";
}) {
  const backgrounds = {
    blue: "linear-gradient(90deg, rgba(59,83,130,0) 0%, rgba(47,68,107,0.52) 42%, rgba(59,83,130,0.78) 100%)",
    purple:
      "linear-gradient(90deg, rgba(116,71,166,0) 0%, rgba(83,52,118,0.56) 42%, rgba(116,71,166,0.8) 100%)",
    purpleWide:
      "linear-gradient(90deg, rgba(116,71,166,0) 0%, rgba(83,52,118,0.56) 42%, rgba(116,71,166,0.8) 100%)",
  };

  return (
    <div
      className="absolute flex h-[28px] items-center justify-center rounded-full text-center"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        background: backgrounds[variant],
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow:
          "inset 0 0 18px rgba(255,255,255,0.04), 0 0 0 1px rgba(255,255,255,0.02)",
      }}
    >
      <span className="font-chart text-[12px] font-bold leading-none tracking-[0.11px] text-white">
        {label}
      </span>
    </div>
  );
}

function BeforeCard({
  title,
  left,
  top,
  variant,
}: {
  title: string;
  left: number;
  top: number;
  variant: "olive" | "oliveAlt";
}) {
  const fillBackground =
    variant === "olive"
      ? "linear-gradient(90deg, rgba(159,157,60,0) 0%, rgba(121,120,50,0.62) 40%, rgba(159,157,60,0.95) 100%)"
      : "linear-gradient(90deg, rgba(150,148,67,0) 0%, rgba(117,115,53,0.58) 40%, rgba(150,148,67,0.92) 100%)";

  return (
    <div
      className="absolute flex h-[40px] items-center rounded-[6px] px-[12px]"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: "170px",
        border: "1px solid transparent",
        backgroundImage: `${fillBackground}, linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 100%)`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        boxShadow: "inset 0 0 18px rgba(255,255,255,0.04)",
      }}
    >
      <p className="font-chart text-[11px] font-medium leading-[normal] tracking-[0.11px] text-white">
        {title}
      </p>
    </div>
  );
}

function AfterCard({
  title,
  subtitle,
  left,
  top,
}: {
  title: string;
  subtitle: string;
  left: number;
  top: number;
}) {
  return (
    <div
      className="absolute flex h-[40px] flex-col items-center justify-center rounded-[6px]"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: "170px",
        border: "1px solid transparent",
        backgroundImage:
          "linear-gradient(90deg, rgba(84,138,121,0) 0%, rgba(53,103,88,0.58) 40%, rgba(84,138,121,0.94) 100%), linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 100%)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        boxShadow: "inset 0 0 18px rgba(255,255,255,0.04)",
      }}
    >
      <p className="font-chart text-[11px] font-bold leading-[normal] tracking-[0.11px] text-white">
        {title}
      </p>
      <p className="font-chart text-[9px] font-medium leading-[normal] tracking-[0.11px] text-white">
        {subtitle}
      </p>
    </div>
  );
}

export default function BeforeAfterAudit() {
  const topScope = useRef<HTMLDivElement>(null);
  const bottomScope = useRef<HTMLDivElement>(null);
  useScrollReveal(topScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);
  useScrollReveal(bottomScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative overflow-hidden bg-[#0a0a14] py-[38px] lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/audit/beforeafter-blur.svg"
          alt=""
          className="h-full w-full object-cover opacity-40 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1270px] px-[23px] sm:px-6 lg:px-8">
        <div ref={topScope}>
          <div className="mb-3 lg:mb-6">
            <WordRevealText
              as="h2"
              className="w-full max-w-[329px] font-display text-[30px] font-extrabold leading-[1.15] uppercase sm:text-4xl md:text-[60px] lg:max-w-none"
            >
              <span className="text-[#1C5AF9]">BEFORE &amp; AFTER</span>
              <span className="text-white"> THE AUDIT</span>
            </WordRevealText>
          </div>

          <WordRevealText
            as="p"
            className="mb-[30px] w-full max-w-[340px] font-body text-[16px] font-medium leading-[30px] text-white lg:mb-8 lg:max-w-none lg:text-lg lg:leading-normal"
          >
            Most founders arrive with the same questions.
          </WordRevealText>

          <div
            className="mb-[30px] rounded-[20px] border border-white/10 px-6 py-[42px] lg:mb-16 lg:p-8"
            style={{
              background:
                "radial-gradient(ellipse at center top, rgba(255,255,255,0.04), transparent)",
            }}
          >
            <div className="grid grid-cols-1 gap-y-[14px] sm:grid-cols-2 sm:gap-x-12 sm:gap-y-5">
              {questions.map((q) => (
                <div key={q.num} className="flex items-start gap-3">
                  <div className="relative mt-[2px] flex h-[25px] w-[25px] shrink-0 items-center justify-center lg:mt-0 lg:h-[28px] lg:w-[28px]">
                    <div className="absolute inset-0 rounded-full border border-white/20" />
                    <div className="absolute inset-[5px] rounded-full border border-white/70 lg:inset-[6px]" />
                    <span className="relative font-body text-[10px] font-normal leading-[20px] text-white lg:text-[14px]">
                      {q.num}
                    </span>
                  </div>
                  <WordRevealText
                    as="p"
                    className="max-w-[236px] font-body text-[16px] font-medium leading-[27px] text-white lg:max-w-none lg:text-base lg:leading-normal"
                  >
                    {q.text}
                  </WordRevealText>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={bottomScope} className="space-y-[30px] lg:space-y-5">
            <WordRevealText
              as="p"
              className="w-full max-w-[328px] font-body text-[16px] font-medium leading-[30px] text-white lg:max-w-none lg:text-xl lg:font-bold lg:leading-7"
            >
              The problem isn&apos;t effort. It&apos;s uncertainty.
            </WordRevealText>

            <WordRevealText
              as="p"
              className="w-full max-w-[328px] font-body text-[16px] font-medium leading-[30px] text-white lg:max-w-none lg:text-xl lg:leading-7"
            >
              After the audit, that changes.
            </WordRevealText>

            <WordRevealText
              as="p"
              className="w-full max-w-[328px] font-body text-[16px] font-medium leading-[30px] text-white lg:max-w-[480px] lg:text-xl lg:leading-7"
            >
              You leave knowing whether the problem is worth solving, where your
              prototype stands, and exactly what to do next. Not guesswork. Not
              a motivational nudge in the right direction.
            </WordRevealText>

            <WordRevealText
              as="p"
              className="w-full max-w-[328px] font-body text-[16px] font-medium leading-[30px] text-white lg:max-w-[480px] lg:text-xl lg:font-bold lg:leading-7"
            >
              A clear, honest perspective on the product you&apos;re building —
              from people who build products for a living.
            </WordRevealText>
          </div>

          <div className="animate-on-scroll-right hidden lg:flex lg:justify-end">
            <div className="h-[375px] w-[518px] shrink-0">
              <div
                className="relative h-[441px] w-[609px] origin-top-left scale-[0.85] overflow-hidden rounded-[20px] border border-white/20 backdrop-blur-[20px]"
                style={{
                  fontFamily: "Figtree, sans-serif",
                  background:
                    "radial-gradient(ellipse at center top, rgba(255,255,255,0.16), transparent), linear-gradient(180deg, rgba(38,112,233,0.1) 0%, rgba(28,27,51,0.02) 100%)",
                  boxShadow: "inset 0 0 80px rgba(255,255,255,0.03)",
                }}
              >
                <div
                  className="absolute left-[202px] top-[35px] h-[388px] border-l border-dashed border-white/30"
                  style={{ borderLeftWidth: "1px" }}
                />
                <div
                  className="absolute left-[405px] top-[35px] h-[388px] border-l border-dashed border-white/30"
                  style={{ borderLeftWidth: "1px" }}
                />

                <div className="absolute left-[103px] top-[60px] h-[179px] border-l border-white/20" />
                <div className="absolute left-[103px] top-[240px] h-[55px] border-l border-white/20" />

                <div className="absolute left-[151px] top-[149px] h-px w-[105px] bg-white/28" />
                <div className="absolute left-[350px] top-[149px] h-px w-[105px] bg-white/28" />

                {topPills.map((pill) => (
                  <Pill key={pill.label} {...pill} />
                ))}

                {stagePills.map((pill) => (
                  <Pill
                    key={pill.label}
                    {...pill}
                    width={pill.variant === "purpleWide" ? 106 : 94}
                  />
                ))}

                {beforeItems.map((item) => (
                  <BeforeCard key={item.title} {...item} />
                ))}

                <div
                  className="absolute flex h-[40px] w-[170px] flex-col items-center justify-center rounded-[6px]"
                  style={{
                    left: "219px",
                    top: "174px",
                    border: "1px solid transparent",
                    backgroundImage:
                      "linear-gradient(90deg, rgba(20,23,31,0.95) 0%, rgba(89,144,126,0.96) 100%), linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 100%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    boxShadow: "inset 0 0 18px rgba(255,255,255,0.04)",
                  }}
                >
                  <p className="font-chart text-[11px] font-bold leading-[normal] tracking-[0.11px] text-white">
                    Product Audit
                  </p>
                  <p className="font-chart text-[9px] font-medium leading-[normal] tracking-[0.11px] text-white">
                    Honest Expert Review
                  </p>
                </div>

                {afterItems.map((item) => (
                  <AfterCard key={item.title} {...item} />
                ))}

                <div className="absolute left-[19px] top-[365px] w-[163px]">
                  <p className="font-chart text-[12px] font-semibold leading-[normal] text-white">
                    Uncertainty. Effort Without Direction.
                  </p>
                </div>

                <div className="absolute left-[428px] top-[365px] w-[162px]">
                  <p className="font-chart text-[12px] font-semibold leading-[normal] text-white">
                    Clarity. A Concrete Direction Forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
