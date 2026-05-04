import React from "react";
import Image from "next/image";
import WordRevealText from "@/components/ui/WordRevealText";

const cardBg = {
  boxShadow:
    "0px 5px 10px 0px rgba(0,0,0,0.05), 0px 15px 30px 0px rgba(0,0,0,0.05), 0px 30px 60px 0px rgba(0,0,0,0.1)",
} as const;

const innerGlow = {
  boxShadow:
    "inset 0px 0px 100px 0px rgba(204, 215, 255, 0.15), inset 0px 0px 40px 0px rgba(255, 255, 255, 0.05)",
} as const;

const illustrationGlow = {
  boxShadow:
    "inset 0px 0px 60px 0px rgba(204, 215, 255, 0.15), inset 0px 0px 25px 0px rgba(255, 255, 255, 0.05)",
} as const;

const glassBg = "absolute inset-0 pointer-events-none rounded-[40px]";

function GlassLayer() {
  return (
    <div className={glassBg} aria-hidden="true">
      <div
        className="absolute inset-0 rounded-[40px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.08) 0%, transparent 50%), linear-gradient(180deg, rgba(46,51,90,0) 0%, rgba(28,27,51,0.1) 100%)",
        }}
      />
      <div
        className="absolute inset-0 rounded-[40px]"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundColor: "rgba(10, 10, 20, 0.75)",
        }}
      />
    </div>
  );
}

export const IdeaCard = React.memo(function IdeaCard() {
  return (
    <div
      className="lg:w-[511px] shrink-0 rounded-[40px] border border-white/15 p-[20px] overflow-hidden relative"
      style={cardBg}
    >
      <GlassLayer />
      <div className="relative z-10 flex flex-col py-[16px] mb-[10px]">
        <WordRevealText
          as="p"
          className="font-body font-bold text-[18px] leading-[27px] text-white mb-[20px]"
        >
          We start where most agencies don&apos;t.
        </WordRevealText>
        <WordRevealText
          as="p"
          className="font-body font-medium text-[16px] leading-[24px] text-white/60"
        >
          Before we touch a single line of code, we sit down with your idea.
        </WordRevealText>
      </div>
      <div
        className="relative z-10 w-full h-[203px] rounded-[20px] border border-white/30 overflow-hidden flex items-center justify-center"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      >
        <Image
          width={180}
          height={161}
          src="/images/home/how-we-help/lightbulb.svg"
          alt="Lightbulb illustration"
          className="relative z-10 w-[180px] h-[161px] object-contain"
        />
        <div
          className="absolute inset-0 pointer-events-none rounded-[20px]"
          style={illustrationGlow}
        />
      </div>
      <div className={glassBg} style={innerGlow} />
    </div>
  );
});

export const ReviewCard = React.memo(function ReviewCard() {
  return (
    <div
      className="flex-1 flex flex-col justify-between rounded-[40px] border border-white/15 p-[20px] overflow-hidden relative"
      style={cardBg}
    >
      <GlassLayer />
      <div className="relative z-10 flex flex-col py-[16px] mb-[10px]">
        <WordRevealText
          as="p"
          className="font-body text-[18px] leading-[24px] text-white/60"
        >
          <span className="font-medium">We call it an </span>
          <span className="font-bold text-white">Idea or Prototype Review</span>
          <span className="font-medium">
            {" "}
            — a structured audit designed to help founders understand whether
            their idea or prototype is worth building further.
          </span>
        </WordRevealText>
      </div>
      <div
        className="relative z-10 w-full h-auto md:mt-8 mt-0 py-[24px] lg:h-[174px] lg:py-0 rounded-[20px] border border-white/30 overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-[8px] lg:gap-[16px] px-[10px] lg:px-[20px]"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      >
        <div className="w-[72px] h-[72px] lg:w-[64px] lg:h-[64px] xl:w-[88px] xl:h-[88px] rounded-full border border-white/20 flex items-center justify-center shrink-0">
          <Image
            width={44}
            height={44}
            src="/images/home/how-we-help/clipboard.svg"
            alt="Review"
            className="w-[36px] h-[36px] lg:w-[32px] lg:h-[32px] xl:w-[44px] xl:h-[44px] object-contain"
          />
        </div>
        <Image
          src="/images/home/how-we-help/arrow.svg"
          alt=""
          className="w-[28px] h-[28px] lg:w-[24px] lg:h-[24px] xl:w-[36px] xl:h-[36px] object-contain opacity-60 rotate-45 lg:-rotate-45 shrink-0"
          width={36}
          height={36}
        />
        <div className="w-[90px] h-[90px] lg:w-[80px] lg:h-[80px] xl:w-[120px] xl:h-[120px] flex items-center justify-center shrink-0">
          <Image
            width={120}
            height={120}
            src="/images/home/how-we-help/audit.svg"
            alt="Audit"
            className="w-full h-full object-contain"
          />
        </div>
        <Image
          src="/images/home/how-we-help/arrow.svg"
          alt=""
          className="w-[28px] h-[28px] lg:w-[24px] lg:h-[24px] xl:w-[36px] xl:h-[36px] object-contain opacity-60 rotate-45 lg:-rotate-45 shrink-0"
          width={36}
          height={36}
        />
        <div className="w-[72px] h-[72px] lg:w-[64px] lg:h-[64px] xl:w-[88px] xl:h-[88px] rounded-full border border-white/20 flex items-center justify-center shrink-0">
          <Image
            width={40}
            height={40}
            src="/images/home/how-we-help/search.svg"
            alt="Clarity"
            className="w-[32px] h-[32px] lg:w-[28px] lg:h-[28px] xl:w-[40px] xl:h-[40px] object-contain"
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none rounded-[20px]"
          style={illustrationGlow}
        />
      </div>
      <div className={glassBg} style={innerGlow} />
    </div>
  );
});
