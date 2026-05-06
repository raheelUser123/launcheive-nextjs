"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const points = [
  { num: "1", text: "Not marketers." },
  { num: "2", text: "Not generalist consultants." },
  {
    num: "3",
    text: "Your audit is reviewed through the lens of product strategy, go-to-market thinking, and real SaaS development experience — by people who care about the quality of the products they put their name on.",
  },
];

type AuditCardVisual =
  | "product-ownership"
  | "questions-vs-blind-spots"
  | "honesty-vs-usefulness";

type AuditCard = {
  title: string;
  visual?: AuditCardVisual;
  img?: string;
};

const cards: AuditCard[] = [
  {
    title: "We look at your products the way we'd look at our own.",
    visual: "product-ownership",
  },
  {
    title: "We ask the questions you haven't thought to ask yet.",
    visual: "questions-vs-blind-spots",
  },
  {
    title: "Then we tell you what we actually think.",
    visual: "honesty-vs-usefulness",
  },
];

function ProductOwnershipVisual() {
  return (
    <div
      className="relative h-[336px] w-full overflow-hidden rounded-[20px] border border-white/30 sm:h-full"
      style={{
        background:
          "radial-gradient(83% 62% at 50% -16%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0) 100%), linear-gradient(180deg, rgba(255,255,255,0.065) 0%, rgba(255,255,255,0.025) 100%), #232429",
        boxShadow: "inset 0 -30px 44px rgba(255,255,255,0.09)",
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 0.8px, transparent 0.9px)",
          backgroundSize: "6px 6px",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-x-0 top-[18px] text-center">
        <p className="font-chart text-[16px] font-bold leading-none text-white">
          Your Product = Our Product
        </p>
      </div>

      <div className="sm:hidden absolute inset-x-0 top-[64px] flex flex-col items-center">
        <div className="relative h-[69px] w-[132px] rounded-[4px] border border-white/30">
          <div
            className="absolute inset-0 rounded-[4px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,28,34,0.82) 0%, rgba(66,92,145,0.28) 18%, rgba(88,115,166,0.82) 62%, rgba(58,95,156,0.95) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/audit/product-ownership/product-ownership-left-icon.png"
              alt=""
              width={51}
              height={51}
              className="h-[51px] w-[51px] object-contain"
              aria-hidden="true"
            />
          </div>
        </div>
        <p className="mt-[9px] font-chart text-[12px] font-semibold leading-none text-white">
          Your Product
        </p>
        <p className="mt-[18px] font-chart text-[34px] leading-none text-white">=</p>
        <div className="relative mt-[18px] h-[69px] w-[132px] rounded-[4px] border border-white/25">
          <div
            className="absolute inset-0 rounded-[4px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(30,34,36,0.82) 0%, rgba(44,76,68,0.45) 34%, rgba(100,169,137,0.88) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/audit/product-ownership/product-ownership-right-icon.png"
              alt=""
              width={64}
              height={64}
              className="h-[58px] w-[58px] object-contain"
              aria-hidden="true"
            />
          </div>
        </div>
        <p className="mt-[9px] font-chart text-[12px] font-semibold leading-none text-white">
          Our Product
        </p>
      </div>

      <div className="hidden sm:block">
        <div className="absolute left-[22px] top-[66px] h-[68px] w-[96px] rounded-[4px] border border-white/30">
          <div
            className="absolute inset-0 rounded-[4px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(88,115,166,0.78) 0%, rgba(98,118,160,0.58) 32%, rgba(58,95,156,0.9) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/audit/product-ownership/product-ownership-left-icon.png"
              alt=""
              width={51}
              height={51}
              className="h-[51px] w-[51px] object-contain"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="absolute left-[151px] top-[80px] font-chart text-[34px] leading-none text-white">
          =
        </div>

        <div className="absolute right-[22px] top-[66px] h-[68px] w-[96px] rounded-[4px] border border-white/25">
          <div
            className="absolute inset-0 rounded-[4px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(30,34,36,0.78) 0%, rgba(44,76,68,0.55) 40%, rgba(100,169,137,0.88) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/audit/product-ownership/product-ownership-right-icon.png"
              alt=""
              width={64}
              height={64}
              className="h-[58px] w-[58px] object-contain"
              aria-hidden="true"
            />
          </div>
        </div>

        <p className="absolute left-[16px] top-[143px] font-chart text-[12px] font-semibold leading-none text-white">
          Your Product
        </p>
        <p className="absolute right-[13px] top-[143px] text-center font-chart text-[12px] font-semibold leading-none text-white">
          Our Product
        </p>
      </div>
    </div>
  );
}

function QuestionsVsBlindSpotsVisual() {
  return (
    <div
      className="relative h-[336px] w-full overflow-hidden rounded-[20px] border border-white/30 sm:h-full"
      style={{
        background:
          "radial-gradient(83% 62% at 50% -16%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0) 100%), linear-gradient(180deg, rgba(255,255,255,0.065) 0%, rgba(255,255,255,0.025) 100%), #232429",
        boxShadow: "inset 0 -30px 44px rgba(255,255,255,0.09)",
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 0.8px, transparent 0.9px)",
          backgroundSize: "6px 6px",
          backgroundPosition: "center",
        }}
      />

      <div className="sm:hidden absolute inset-x-0 top-[64px] text-center">
        <p className="mx-auto max-w-[263px] font-chart text-[16px] font-bold leading-[1.05] text-white">
          Questions Asked Vs Blind Spots Missed
        </p>
      </div>

      <div className="sm:hidden absolute bottom-[96px] left-[16px] right-[10px] top-[138px]">
        <div className="absolute bottom-[16px] left-0 top-0 w-px bg-white/65" />
        <div className="absolute bottom-[16px] left-0 right-0 h-px bg-white/65" />

        <div className="absolute bottom-[17px] left-[28px] w-[33px]">
          <div
            className="h-[28px] rounded-t-[4px] border border-white/15"
            style={{
              background:
                "linear-gradient(180deg, rgba(152,81,84,0.92) 0%, rgba(106,59,61,0.95) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          />
          <p className="absolute left-1/2 top-[33px] -translate-x-1/2 text-center font-chart text-[11.2px] leading-none text-white">
            You
          </p>
        </div>

        <div className="absolute bottom-[17px] left-[80px] w-[33px]">
          <div
            className="h-[79px] rounded-t-[4px] border border-white/15"
            style={{
              background:
                "linear-gradient(180deg, rgba(97,149,126,0.92) 0%, rgba(72,110,93,0.96) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          />
          <p className="absolute left-1/2 top-[84px] -translate-x-1/2 text-center font-chart text-[11.2px] leading-none text-white">
            Us
          </p>
        </div>

        <p className="absolute left-[128px] top-[18px] font-chart text-[10px] font-semibold leading-[1.08] text-white">
          Blind Spots
          <br />
          You Missed
        </p>

        <div className="absolute bottom-[17px] left-[128px] w-[79px]">
          <div
            className="flex h-[41px] items-center rounded-t-[4px] border border-white/15 px-[8px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(94,151,125,0.92) 0%, rgba(74,109,93,0.96) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            <p className="font-chart text-[8px] font-bold leading-[1.05] text-white">
              Questions
              <br />
              We Uncover
            </p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="absolute inset-x-0 top-[18px] text-center">
          <p className="font-chart text-[16px] font-bold leading-none text-white">
            Questions Asked Vs Blind Spots Missed
          </p>
        </div>

        <div className="absolute bottom-[24px] left-[23px] right-[24px] top-[48px]">
          <div className="absolute bottom-[18px] left-[31px] top-0 w-px bg-white/65" />
          <div className="absolute bottom-[18px] left-[31px] right-0 h-px bg-white/65" />

          <div className="absolute bottom-[19px] left-[66px] w-[33px]">
            <div
              className="h-[26px] rounded-t-[4px] border border-white/15"
              style={{
                background:
                  "linear-gradient(180deg, rgba(152,81,84,0.92) 0%, rgba(106,59,61,0.95) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            />
            <p className="absolute left-1/2 top-[31px] -translate-x-1/2 text-center font-chart text-[11.2px] leading-none text-white">
              You
            </p>
          </div>

          <div className="absolute bottom-[19px] left-[145px] w-[33px]">
            <div
              className="h-[79px] rounded-t-[4px] border border-white/15"
              style={{
                background:
                  "linear-gradient(180deg, rgba(97,149,126,0.92) 0%, rgba(72,110,93,0.96) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            />
            <p className="absolute left-1/2 top-[84px] -translate-x-1/2 text-center font-chart text-[11.2px] leading-none text-white">
              Us
            </p>
          </div>

          <p className="absolute left-[205px] top-[18px] font-chart text-[12px] font-semibold leading-[1.08] text-white">
            Blind Spots
            <br />
            You Missed
          </p>

          <div className="absolute bottom-[19px] left-[206px] w-[79px]">
            <div
              className="flex h-[41px] items-center rounded-t-[4px] border border-white/15 px-[8px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(94,151,125,0.92) 0%, rgba(74,109,93,0.96) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <p className="font-chart text-[10px] font-bold leading-[1.05] text-white">
                Questions
                <br />
                We Uncover
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HonestyVsUsefulnessVisual() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-[20px] border border-white/30"
      style={{
        background:
          "radial-gradient(83% 62% at 50% -16%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0) 100%), linear-gradient(180deg, rgba(255,255,255,0.065) 0%, rgba(255,255,255,0.025) 100%), #232429",
        boxShadow: "inset 0 -30px 44px rgba(255,255,255,0.09)",
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 0.8px, transparent 0.9px)",
          backgroundSize: "6px 6px",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute bottom-[34px] left-[31px] top-[31px] w-px bg-white/65" />
      <div className="absolute bottom-[34px] left-[31px] right-[20px] h-px bg-white/65" />
      <div className="absolute left-[31px] top-[86px] right-[20px] h-px border-t border-dashed border-white/18" />

      <div
        className="absolute left-[52px] top-[138px] h-px origin-left"
        style={{
          width: "249px",
          transform: "rotate(-22.7deg)",
          background:
            "repeating-linear-gradient(90deg, rgba(31,214,165,0.95) 0 3px, transparent 3px 6px)",
          boxShadow: "0 0 8px rgba(31,214,165,0.15)",
        }}
      />

      <div className="absolute left-[45px] top-[136px] h-[10px] w-[10px] rounded-full border border-[#ff4d57]">
        <div className="absolute inset-[2px] rounded-full bg-[#ff4d57]" />
      </div>
      <div className="absolute right-[18px] top-[27px] h-[10px] w-[10px] rounded-full border border-[#27f0b7]">
        <div className="absolute inset-[2px] rounded-full bg-[#27f0b7]" />
      </div>

      <div className="absolute left-[61px] top-[88px]">
        <div
          className="rounded-[4px] border border-white/15 px-[11px] py-[7px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(148,80,84,0.92) 0%, rgba(114,62,65,0.96) 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <p className="font-chart text-[11px] font-bold leading-none text-white text-right">
            Typical Feedback
          </p>
          <p className="mt-[3px] font-chart text-[8px] leading-none text-white text-center">
            Looks Promising
          </p>
        </div>
      </div>

      <div className="absolute right-[28px] top-[16px]">
        <div
          className="rounded-[4px] border border-white/15 px-[11px] py-[7px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(98,149,127,0.92) 0%, rgba(70,108,92,0.96) 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <p className="font-chart text-[11px] font-bold leading-none text-white text-right">
            Our Audit
          </p>
          <p className="mt-[3px] font-chart text-[8px] leading-none text-white text-center">
            Your GTM Is Undefined
          </p>
        </div>
      </div>

      <p className="absolute left-[0px] top-[25px] font-chart text-[11.2px] leading-none text-white">
        High
      </p>
      <p className="absolute left-[0px] top-[138px] font-chart text-[11.2px] leading-none text-white">
        Low
      </p>
      <p className="absolute left-[30px] top-[171px] font-chart text-[11.2px] leading-none text-white">
        Low
      </p>
      <p className="absolute left-1/2 top-[171px] -translate-x-1/2 font-chart text-[11.2px] font-bold leading-none text-white">
        Honesty
      </p>
      <p className="absolute right-[21px] top-[171px] font-chart text-[11.2px] leading-none text-white">
        High
      </p>

      <div className="absolute left-[-10px] top-[85px] -rotate-90">
        <p className="font-chart text-[11.2px] font-bold leading-none text-white">
          Usefulness
        </p>
      </div>
    </div>
  );
}

export default function WhatTheAuditIs() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative py-[30px] overflow-hidden bg-black">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 40% 50%, rgba(28,90,249,0.25) 0%, rgba(59,110,248,0.1) 30%, rgba(26,71,185,0.05) 60%, transparent 80%)",
          transform: "translateZ(0)",
        }}
      />

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={scope}>
          {/* Title */}
          <div className="mb-[10px] relative">
            <WordRevealText
              as="h2"
              className="font-display font-extrabold text-[28px] sm:text-[40px] md:text-[50px] leading-[100%] uppercase text-white"
            >
              <span className="text-white">WHAT</span>{" "}
              <span className="text-white">THE</span>{" "}
              <span className="text-[#1C5AF9]">PREMIUM AUDIT</span>{" "}
              <span className="text-white">IS</span>
            </WordRevealText>
          </div>

          {/* Subtitle */}
          <WordRevealText
            as="p"
            className="font-body font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] text-white mb-[30px] max-w-[1116px]"
          >
            A detailed, written review of your prototype or idea — prepared by
            people who work on products every day.
          </WordRevealText>

          {/* Points card */}
          <div
            className="w-full rounded-[20px] py-[24px] px-[20px] sm:px-[40px] mb-[40px]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 100%)",
            }}
          >
            <div className="flex flex-col gap-[20px] sm:gap-[28px]">
              {/* Points 1 and 2 side by side on desktop */}
              <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[80px] lg:gap-[200px]">
                {points.slice(0, 2).map((p) => (
                  <div
                    key={p.num}
                    className="flex items-center gap-[12px] sm:gap-[16px]"
                  >
                    <div className="relative w-[48px] h-[48px] shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-white/20" />
                      <div className="absolute inset-[12px] rounded-full border border-white/40" />
                      <span className="relative font-body font-normal text-[14px] leading-[20px] text-white text-center">
                        {p.num}
                      </span>
                    </div>
                    <WordRevealText
                      as="p"
                      className="font-body font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[27px] text-white"
                    >
                      {p.text}
                    </WordRevealText>
                  </div>
                ))}
              </div>

              {/* Point 3 full width */}
              <div className="flex items-start gap-[12px] sm:gap-[16px]">
                <div className="relative w-[48px] h-[48px] shrink-0 flex items-center justify-center mt-[2px]">
                  <div className="absolute inset-0 rounded-full border border-white/20" />
                  <div className="absolute inset-[12px] rounded-full border border-white/40" />
                  <span className="relative font-body font-normal text-[14px] leading-[20px] text-white text-center">
                    {points[2].num}
                  </span>
                </div>
                <WordRevealText
                  as="p"
                  className="font-body font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[27px] text-white"
                >
                  {points[2].text}
                </WordRevealText>
              </div>
            </div>
          </div>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="animate-on-scroll rounded-[40px] border border-white/15 overflow-hidden relative p-5 flex flex-col gap-3 min-h-[320px]"
              style={{
                animationDelay: `${i * 0.08}s`,
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <p className="font-body font-medium text-[18px] leading-[27px] text-white px-3 pt-3">
                {card.title}
              </p>
              <div className="flex-1 rounded-[20px] overflow-hidden border border-white/30">
                {card.visual === "product-ownership" ? (
                  <ProductOwnershipVisual />
                ) : card.visual === "questions-vs-blind-spots" ? (
                  <QuestionsVsBlindSpotsVisual />
                ) : card.visual === "honesty-vs-usefulness" ? (
                  <HonestyVsUsefulnessVisual />
                ) : card.img ? (
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={362}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
