"use client";

import {
  Lightbulb,
  Code2,
  ArrowUpCircle,
  Rocket,
  ArrowDown,
} from "lucide-react";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const cards = [
  {
    icon: <Lightbulb size={24} strokeWidth={1.5} />,
    iconBg: "#eeedfe",
    iconColor: "#7c6cd4",
    title: "Validated idea",
    desc: "You know there's a real problem.",
  },
  {
    icon: <Code2 size={24} strokeWidth={1.5} />,
    iconBg: "#e1f5ee",
    iconColor: "#34a574",
    title: "Working prototype",
    desc: "Proof that it can be built.",
  },
  {
    icon: <ArrowUpCircle size={24} strokeWidth={1.5} />,
    iconBg: "#faece7",
    iconColor: "#d4714a",
    title: "Outgrown no-code",
    desc: "Tools have hit their ceiling.",
  },
  {
    icon: <Rocket size={24} strokeWidth={1.5} />,
    iconBg: "#d7e6ff",
    iconColor: "#4a7fd4",
    title: "This scales",
    desc: "Time to build it right.",
  },
];

export default function WhoThisIsForBuild() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative py-[50px] overflow-hidden bg-black">
      {/* Background pulse */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(28,90,249,0.3) 0%, transparent 60%)",
        }}
      />

      {/* Blur circle */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[438px] h-[350px] pointer-events-none blur-[80px] opacity-20">
        <div
          className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full"
          style={{ background: "#1c5af9" }}
        />
      </div>

      {/* Grid lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-[20%] left-0 right-0 h-px bg-white" />
        <div className="absolute top-[50%] left-0 right-0 h-px bg-white" />
        <div className="absolute top-[80%] left-0 right-0 h-px bg-white" />
        <div className="absolute top-0 bottom-0 left-[35%] w-px bg-white" />
        <div className="absolute top-0 bottom-0 left-[65%] w-px bg-white" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1054px] h-full"
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent, transparent 250px, rgba(255,255,255,0.2) 250px, rgba(255,255,255,0.2) 251px), repeating-linear-gradient(-45deg, transparent, transparent 250px, rgba(255,255,255,0.2) 250px, rgba(255,255,255,0.2) 251px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-start">
          {/* Left - Title & text */}
          <div ref={scope} className="flex-1 max-w-[646px]">
            <WordRevealText as="h2" className="font-display font-extrabold text-[30px] sm:text-[42px] md:text-[60px] leading-[1.26] uppercase mb-[16px]">
              <span className="text-[#1C5AF9]">WHO </span>
              <span className="text-white">THIS IS FOR</span>
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white mb-[24px]">
              Some founders come to us for clarity. Others already have it.
            </WordRevealText>

            <div className="flex flex-col gap-[12px]">
              <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[18px] leading-[normal] md:leading-[28px] text-white">
                If you&apos;ve validated your idea, have a working prototype, or
                have simply outgrown what AI tools and no-code platforms can do
                — this is where we come in.
              </WordRevealText>
              <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[18px] leading-[normal] md:leading-[28px] text-white">
                We work with founders ready to move from &ldquo;
                <strong>this works</strong>&rdquo; to &ldquo;
                <strong>this scales.</strong>&rdquo;
              </WordRevealText>
              <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[18px] leading-[normal] md:leading-[28px] text-white">
                You don&apos;t need to have everything figured out. You just
                need to know you&apos;re building something real — and that
                it&apos;s time to build it right.
              </WordRevealText>
            </div>

            {/* Lights effect */}
            <div
              className="mt-[30px] w-full h-[138px] pointer-events-none hidden lg:block"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(28,90,249,0.15) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Right - Card */}
          <div
            className="animate-on-scroll-right w-full lg:w-[432px] shrink-0 rounded-[40px] p-[16px] border border-white/15 backdrop-blur-[10px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(46,51,90,0) 0%, rgba(28,27,51,0.2) 100%), radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
              boxShadow:
                "0px 5px 10px 0px rgba(0,0,0,0.05), 0px 15px 30px 0px rgba(0,0,0,0.05), 0px 30px 60px 0px rgba(0,0,0,0.1), inset 0px 0px 100px 0px rgba(204,215,255,0.15)",
            }}
          >
            <div className="flex flex-col items-center">
              {cards.map((card, index) => (
                <div
                  key={card.title}
                  className="w-full flex flex-col items-center"
                >
                  {/* Card */}
                  <div
                    className="w-full flex items-center gap-[12px] rounded-[16px] px-[10px] py-[10px] border border-white/15"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(46,51,90,0) 0%, rgba(28,27,51,0.2) 100%), radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
                      boxShadow:
                        "0px 5px 10px 0px rgba(0,0,0,0.05), 0px 15px 30px 0px rgba(0,0,0,0.05), 0px 30px 60px 0px rgba(0,0,0,0.1), inset 0px 0px 100px 0px rgba(204,215,255,0.15)",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: card.iconBg,
                        color: card.iconColor,
                      }}
                    >
                      {card.icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-[13px] leading-[16px] text-white mb-[2px]">
                        {card.title}
                      </p>
                      <p className="font-body font-normal text-[12px] leading-[18px] text-white">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  {/* Arrow separator */}
                  {index < cards.length - 1 && (
                    <div className="flex items-center justify-center h-[40px]">
                      <ArrowDown
                        size={20}
                        className="text-white w-[20px]"
                        strokeWidth={2}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
