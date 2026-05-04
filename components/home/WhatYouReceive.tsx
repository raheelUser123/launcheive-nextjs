"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import BarChart from "./charts/BarChart";
import StatusGrid from "./charts/StatusGrid";
import FunnelChart from "./charts/FunnelChart";
import ChecklistChart from "./charts/ChecklistChart";

const barItems = [
  { label: "Market Demand", value: 88, score: "88/100", color: "#34bd5d" },
  { label: "Revenue Potential", value: 82, score: "82/100", color: "#34bd5d" },
  { label: "Scalability", value: 76, score: "76/100", color: "#cf7c00" },
  { label: "Competitive Edge", value: 63, score: "63/100", color: "#fff600" },
  { label: "Execution Fit", value: 91, score: "91/100", color: "#34bd5d" },
];

const statusItems = [
  { label: "Market Fit", status: "Need Attention", color: "#e9a85b" },
  { label: "Revenue Model", status: "Not Defined", color: "#1c5af9" },
  { label: "GTM Strategy", status: "Weak", color: "#ff0000" },
  { label: "UI/UX Design", status: "Strong", color: "#4dcea7" },
  { label: "Tech Foundation", status: "Average", color: "#929292" },
  { label: "Competitive Edge", status: "Needs Direction", color: "#9000ff" },
];

const cards = [
  { num: 1, title: "Viability Assessment", description: "A clear assessment of whether your idea has real potential.", wide: true, chart: "bar" as const },
  { num: 2, title: "Current State Audit", description: "An honest look at your prototype — what's salvageable and what isn't.", wide: false, chart: "status" as const },
  { num: 3, title: "Strategic Focus", description: "A focused product direction so you stop building in circles.", wide: false, chart: "funnel" as const },
  { num: 4, title: "Your Next Move", description: "A concrete next step instead of a vague roadmap.", wide: true, chart: "checklist" as const },
];

const chartMap = {
  bar: <BarChart items={barItems} />,
  status: <StatusGrid items={statusItems} />,
  funnel: <FunnelChart />,
  checklist: <ChecklistChart />,
} as const;

export default function WhatYouReceive() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.8", "end 0.3"]);

  return (
    <section className="relative py-[30px] overflow-hidden bg-black">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ filter: "blur(30px)", WebkitFilter: "blur(30px)" }}
      >
        <Image
          width={1920}
          height={1080}
          src="/images/build-with-us/background.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div ref={scope} className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-[30px]">
          <WordRevealText
            as="h2"
            className="font-display font-extrabold text-[28px] sm:text-[42px] md:text-[60px] leading-[100%] uppercase text-white"
          >
            What You <span className="text-[#1C5AF9]">Receive</span>
          </WordRevealText>
        </div>

        <WordRevealText
          as="p"
          className="font-body font-medium text-[16px] sm:text-[22px] md:text-[30px] leading-[normal] tracking-[-1.2px] text-white mb-[30px]"
        >
          After your review, you walk away with a clear understanding of where
          your product stands before investing further time or money.
        </WordRevealText>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-[20px] mb-[30px]">
          {cards.map((card) => (
            <div
              key={card.num}
              className={`rounded-[20px] border border-white/8 p-[16px] sm:p-[22px] md:p-[30px] flex flex-col items-center justify-between h-auto min-h-[380px] md:min-h-[420px] gap-[16px] overflow-hidden ${card.wide ? "md:col-span-3" : "md:col-span-2"}`}
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)",
                backgroundColor: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <div className="w-full">
                <WordRevealText
                  as="p"
                  className="font-body font-bold text-[18px] leading-[27px] text-white"
                >
                  {card.num}. {card.title}
                </WordRevealText>
              </div>

              <div className="flex items-center justify-center w-full">
                {chartMap[card.chart]}
              </div>

              <div
                className="w-full max-w-[460px] h-px"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.25) 100%)",
                }}
              />

              <WordRevealText
                as="p"
                className="font-body font-medium text-[18px] leading-[24px] text-white/70 w-full max-w-[460px]"
              >
                {card.description}
              </WordRevealText>
            </div>
          ))}
        </div>

        <div className="tracking-[-1.2px]">
          <WordRevealText
            as="p"
            className="font-body font-medium text-[18px] sm:text-[24px] md:text-[30px] leading-[normal] text-white mb-1"
          >
            This isn&apos;t a sales call.
          </WordRevealText>
          <WordRevealText
            as="p"
            className="text-white"
          >
            <span className="font-body font-normal text-[18px] sm:text-[24px] md:text-[32px] leading-[normal]">
              It&apos;s the conversation most founders wish they had{" "}
            </span>
            <span className="font-body font-bold text-[20px] sm:text-[26px] md:text-[34px] leading-[normal]">
              before they started building.
            </span>
          </WordRevealText>
        </div>
      </div>
    </section>
  );
}
