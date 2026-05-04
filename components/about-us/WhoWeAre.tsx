"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

type DiagramCardProps = {
  assetSrc: string;
  assetWidth: number;
  assetHeight: number;
  title: string;
  description: string;
  cardWidthClass: string;
  cardHeightClass: string;
  descriptionWidthClass?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const closingGapCards = [
  {
    title: "Pattern recognition",
    description:
      "They've seen what breaks products before launch — and how to avoid it.",
    assetSrc: "/images/about-us/chart-blue-lg.svg",
  },
  {
    title: "Pace matching",
    description:
      "No drag from learning on the job.They move as fast as you do.",
    assetSrc: "/images/about-us/chart-blue-lg.svg",
  },
  {
    title: "Prototype respect",
    description: "They carry your build forward —not dismiss and restart.",
    assetSrc: "/images/about-us/chart-teal-lg.svg",
  },
  {
    title: "Vision pressure-testing",
    description:
      "Your idea gets refined, not diluted. Ambition survives reality",
    assetSrc: "/images/about-us/chart-teal-lg.svg",
  },
];

function DiagramCard({
  assetSrc,
  assetWidth,
  assetHeight,
  title,
  description,
  cardWidthClass,
  cardHeightClass,
  descriptionWidthClass = "w-full",
  titleClassName = "",
  descriptionClassName = "",
}: DiagramCardProps) {
  return (
    <div
      className={`relative shrink-0 ${cardWidthClass} ${cardHeightClass}`}
      style={{ fontFamily: "Figtree, sans-serif" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative rotate-90"
          style={{ width: `${assetWidth}px`, height: `${assetHeight}px` }}
        >
          <Image src={assetSrc} alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-[7px] px-5 text-center text-white">
        <p className={`font-chart text-[16px] leading-[1.2] font-bold ${titleClassName}`}>
          {title}
        </p>
        <p
          className={`font-chart text-[14px] leading-[1.2] font-normal text-white ${descriptionWidthClass} ${descriptionClassName}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <svg
      aria-hidden="true"
      className="hidden shrink-0 sm:block"
      width="37"
      height="15"
      viewBox="0 0 37 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 7.5H29.5"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path
        d="M24.5 1.5L35.5 7.5L24.5 13.5"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhoWeAre() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.7", "end 0.7"]);

  return (
    <section className="relative overflow-hidden bg-black py-24">
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

      <div ref={scope} className="relative z-10 mx-auto max-w-[1270px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-[24px]">
            <WordRevealText
              as="h2"
              className="font-display text-[30px] leading-[1.1] font-extrabold uppercase sm:text-[50px] md:text-[60px]"
            >
              <span className="text-[#1C5AF9]">WHO</span>
              <span className="text-white"> WE ARE</span>
            </WordRevealText>

            <WordRevealText as="p" className="font-body text-[16px] leading-[normal] font-medium text-white md:text-[20px] md:leading-[28px]">
              Launchieve is a product development company based in the United
              States, built for a new generation of founders.
            </WordRevealText>

            <WordRevealText as="p" className="font-body text-[16px] leading-[normal] font-medium text-white md:text-[20px] md:leading-[28px]">
              The kind who move fast.
            </WordRevealText>

            <WordRevealText as="p" className="font-body text-[16px] leading-[normal] font-medium text-white md:text-[20px] md:leading-[28px]">
              Who experiments with AI tools.
            </WordRevealText>

            <WordRevealText as="p" className="font-body text-[16px] leading-[normal] font-medium text-white md:text-[20px] md:leading-[28px]">
              Who can spin up a prototype over a weekend — but need a real team
              to take it further.
            </WordRevealText>

            <WordRevealText as="p" className="font-body text-[16px] leading-[normal] font-medium text-white md:text-[20px] md:leading-[28px]">
              We started noticing the same pattern again and again.
            </WordRevealText>

            <WordRevealText as="p" className="font-body text-[16px] leading-[normal] font-medium text-white md:text-[20px] md:leading-[28px]">
              Founders with real ideas hitting the same wall.
            </WordRevealText>

            <WordRevealText as="p" className="font-body text-[16px] leading-[normal] font-medium text-white md:text-[20px] md:leading-[28px]">
              Not because they lacked ambition — but because the people around
              them had never actually built and shipped products before.
            </WordRevealText>

            <WordRevealText as="p" className="font-body text-[16px] leading-[normal] font-medium text-white md:text-[20px] md:leading-[28px]">
              We have.
            </WordRevealText>

            <WordRevealText as="p" className="font-body text-[16px] leading-[normal] font-medium text-white md:text-[20px] md:leading-[28px]">
              And that perspective changes everything.
            </WordRevealText>
          </div>

          <div className="animate-on-scroll-right mx-auto hidden w-full max-w-[676px] flex-col gap-[18px] pt-4 lg:-mt-14 lg:flex">
            <div className="flex flex-col gap-[14px]">
              <div className="text-center text-white">
                <h3 className="font-chart text-[18px] leading-[1.2] font-bold capitalize">
                  The ambition gap
                </h3>
                <p className="mt-[7px] font-chart text-[14px] leading-[1.2] font-normal">
                  Where most founders get stuck
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-[24px]">
                <DiagramCard
                  assetSrc="/images/about-us/chart-founder.svg"
                  assetWidth={74}
                  assetHeight={164}
                  title="Founder"
                  description="Big vision, fast builder"
                  cardWidthClass="w-full max-w-[320px] sm:w-[136px]"
                  cardHeightClass="h-[74px]"
                  descriptionWidthClass="sm:w-[136px]"
                />
                <FlowArrow />
                <DiagramCard
                  assetSrc="/images/about-us/chart-gap.svg"
                  assetWidth={74}
                  assetHeight={225}
                  title="The Gap"
                  description="Execution capacity can't keep up"
                  cardWidthClass="w-full max-w-[320px] sm:w-[187px]"
                  cardHeightClass="h-[74px]"
                  descriptionWidthClass="sm:w-[187px]"
                />
                <FlowArrow />
                <DiagramCard
                  assetSrc="/images/about-us/chart-shipped.svg"
                  assetWidth={74}
                  assetHeight={164}
                  title="Shipped"
                  description="Real product, real users"
                  cardWidthClass="w-full max-w-[320px] sm:w-[136px]"
                  cardHeightClass="h-[74px]"
                  descriptionWidthClass="sm:w-[136px]"
                />
              </div>
            </div>

            <div className="h-px w-full bg-white/12" />

            <div className="flex flex-col gap-[20px]">
              <div className="text-center text-white">
                <h3 className="font-chart text-[16px] leading-[1.2] font-bold">
                  How Launchieve closes the gap
                </h3>
                <p className="mt-[7px] font-chart text-[14px] leading-[1.2] font-normal">
                  Four things that match your ambition — not just your backlog
                </p>
              </div>

              <div className="grid grid-cols-1 place-items-center gap-x-[52px] gap-y-5 sm:grid-cols-2">
                {closingGapCards.map((card) => (
                  <DiagramCard
                    key={card.title}
                    assetSrc={card.assetSrc}
                    assetWidth={108}
                    assetHeight={312}
                    title={card.title}
                    description={card.description}
                    cardWidthClass="w-full max-w-[312px] sm:w-[312px]"
                    cardHeightClass="h-[108px]"
                    descriptionWidthClass="max-w-[259px]"
                  />
                ))}
              </div>
            </div>

            <div className="h-px w-full bg-white/12" />

            <div className="flex flex-col gap-[14px]">
              <div className="text-center text-white">
                <h3 className="font-chart text-[16px] leading-[1.2] font-bold">
                  The result
                </h3>
                <p className="mt-[7px] font-chart text-[14px] leading-[1.2] font-normal">
                  Founder ambition + Launchieve experience = shipped product
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-[24px]">
                <DiagramCard
                  assetSrc="/images/about-us/chart-founder.svg"
                  assetWidth={74}
                  assetHeight={164}
                  title="Founder"
                  description="Vision + prototype"
                  cardWidthClass="w-full max-w-[320px] sm:w-[136px]"
                  cardHeightClass="h-[74px]"
                  descriptionWidthClass="sm:w-[136px]"
                />
                <span className="font-chart text-[30px] leading-none font-normal text-white sm:block">
                  +
                </span>
                <DiagramCard
                  assetSrc="/images/about-us/chart-result.svg"
                  assetWidth={74}
                  assetHeight={164}
                  title="Launchieve"
                  description="Experience + execution"
                  cardWidthClass="w-full max-w-[320px] sm:w-[136px]"
                  cardHeightClass="h-[74px]"
                  descriptionWidthClass="sm:w-[136px]"
                />
                <span className="font-chart text-[30px] leading-none font-normal text-white sm:block">
                  =
                </span>
                <DiagramCard
                  assetSrc="/images/about-us/chart-result.svg"
                  assetWidth={74}
                  assetHeight={164}
                  title="Shipped"
                  description="Real product, live"
                  cardWidthClass="w-full max-w-[320px] sm:w-[136px]"
                  cardHeightClass="h-[74px]"
                  descriptionWidthClass="sm:w-[136px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
