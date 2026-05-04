"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const cardShadow =
  "0px 5px 10px 0px rgba(0,0,0,0.05), 0px 15px 30px 0px rgba(0,0,0,0.05), 0px 30px 60px 0px rgba(0,0,0,0.1)";
const innerGlow = "inset 0px 0px 100px 0px rgba(204,215,255,0.15)";
const outerCardBg =
  "radial-gradient(ellipse at center top, rgba(255,255,255,0.08) 0%, transparent 60%), linear-gradient(180deg, rgba(46,51,90,0) 0%, rgba(28,27,51,0.1) 100%)";
const innerCardBg =
  "radial-gradient(ellipse at center top, rgba(255,255,255,0.08) 0%, transparent 60%), linear-gradient(180deg, rgba(46,51,90,0) 0%, rgba(28,27,51,0.1) 100%)";

const experienceCards = [
  {
    iconSrc: "/images/audit/icon-product-systems.svg",
    iconBg: "#eeedfe",
    title: "Designed product systems",
    desc: "Architecture, UX flows, and product logic built from scratch.",
  },
  {
    iconSrc: "/images/audit/icon-saas.svg",
    iconBg: "#e1f5ee",
    title: "Built SaaS applications",
    desc: "Real products, shipped and maintained — not just designed.",
  },
  {
    iconSrc: "/images/audit/icon-market.svg",
    iconBg: "#faece7",
    title: "Taken products to market",
    desc: "Launch decisions, GTM, pricing, and positioning in practice.",
  },
  {
    iconSrc: "/images/audit/icon-hard-calls.svg",
    iconBg: "#d7e6ff",
    title: "Made the same hard calls",
    desc: "Cut or keep. Pivot or stay. Ship or wait. Lived firsthand.",
  },
];

export default function WhoIsReviewing() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative overflow-hidden bg-black py-5 lg:py-24">
      {/* Background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/audit/reviewing-blur.svg"
          alt=""
          fill
          className="mix-blend-screen object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1270px] px-[23px] sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text content */}
          <div ref={scope} className="flex flex-col gap-6 lg:gap-[30px]">
            <WordRevealText
              as="h2"
              className="w-full max-w-[320px] font-display text-[30px] font-extrabold leading-[1.1] uppercase sm:text-[42px] lg:max-w-none lg:text-[50px]"
            >
              <span className="text-white">WHO IS </span>
              <span className="text-[#1C5AF9]">REVIEWING</span>
              <span className="text-white"> YOUR PRODUCT</span>
            </WordRevealText>

            <div style={{ fontFamily: "Inter, sans-serif" }}>
              <WordRevealText
                as="p"
                className="font-medium text-[16px] leading-normal tracking-[-0.04em] text-white lg:text-[20px] lg:leading-[28px] lg:tracking-normal"
              >
                This isn&apos;t a template run through a tool.
              </WordRevealText>
            </div>

            <div style={{ fontFamily: "Inter, sans-serif" }}>
              <WordRevealText
                as="p"
                className="max-w-[646px] font-medium text-[16px] leading-normal tracking-[-0.04em] text-white lg:text-[18px] lg:leading-[28px] lg:tracking-normal"
              >
                Your audit is prepared by people who have designed product
                systems, built SaaS applications, taken products to market, and
                made the same hard calls you&apos;re facing now.
              </WordRevealText>
            </div>

            <div style={{ fontFamily: "Inter, sans-serif" }}>
              <WordRevealText
                as="p"
                className="max-w-[646px] font-medium text-[16px] leading-normal tracking-[-0.04em] text-white lg:text-[18px] lg:leading-[28px] lg:tracking-normal"
              >
                We&apos;ve seen what early-stage products that succeed look like.{" "}
                <span
                  className="text-[20px] font-bold leading-normal lg:text-[22px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We&apos;ve seen the patterns that quietly kill products before
                  they ever launch.
                </span>
              </WordRevealText>
            </div>

            <div style={{ fontFamily: "Inter, sans-serif" }}>
              <WordRevealText
                as="p"
                className="font-medium text-[16px] leading-normal tracking-[-0.04em] text-white lg:text-[18px] lg:leading-[28px] lg:tracking-normal"
              >
                You&apos;re getting that perspective — applied directly to what
                you&apos;ve built.
              </WordRevealText>
            </div>
          </div>

          {/* Right — Experience cards */}
          <div className="animate-on-scroll-right lg:mt-[52px]">
            {/* Outer glassmorphism card */}
            <div
              className="relative flex w-full max-w-[326px] flex-col gap-[10px] overflow-hidden rounded-[40px] border border-white/15 p-5 lg:max-w-none"
              style={{ boxShadow: cardShadow }}
            >
              {/* Outer card background layers */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-[40px]"
              >
                <div
                  className="absolute inset-0 rounded-[40px]"
                  style={{ background: outerCardBg }}
                />
                <div
                  className="absolute inset-0 rounded-[40px] backdrop-blur-[10px] opacity-20"
                  style={{
                    backgroundImage: "url('/images/audit/card-noise.png')",
                    backgroundSize: "71px 61px",
                    backgroundPosition: "top left",
                  }}
                />
              </div>
              {/* Inner glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-[inherit]"
                style={{ boxShadow: innerGlow }}
              />

              {/* Inner cards */}
              {experienceCards.map((card) => (
                <div
                  key={card.title}
                  className="relative min-h-[74px] overflow-hidden rounded-[20px] border border-white/15 px-5 py-[10px]"
                  style={{ boxShadow: cardShadow }}
                >
                  {/* Inner card background */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none rounded-[20px]"
                  >
                    <div
                      className="absolute inset-0 rounded-[20px]"
                      style={{ background: innerCardBg }}
                    />
                    <div
                      className="absolute inset-0 rounded-[20px] backdrop-blur-[10px] opacity-20"
                      style={{
                        backgroundImage: "url('/images/audit/card-noise.png')",
                        backgroundSize: "71px 61px",
                        backgroundPosition: "top left",
                      }}
                    />
                  </div>
                  {/* Inner card glow */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none rounded-[inherit]"
                    style={{ boxShadow: innerGlow }}
                  />

                  {/* Card content */}
                  <div className="relative z-10 flex items-start gap-[14px]">
                    {/* Icon */}
                    <div
                      className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: card.iconBg }}
                    >
                      <Image
                        src={card.iconSrc}
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className="font-display text-[13px] font-bold leading-normal text-white">
                        {card.title}
                      </p>
                      <p
                        className="text-[12px] font-normal leading-[18px] text-white"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {card.desc}
                      </p>
                    </div>
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
