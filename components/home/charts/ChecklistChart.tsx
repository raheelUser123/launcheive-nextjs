import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import React, { useRef } from "react";

const chartBg = {
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  backgroundImage:
    "radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, rgba(38,112,233,0.1) 0%, rgba(28,27,51,0.02) 100%)",
} as const;

const items = [
  {
    text: "Idea has been accessed",
    sub: "Viability confirmed across all key dimensions",
    dimmed: true,
  },
  {
    text: "Current state audited",
    sub: "What to keep, rework and drop is clear.",
    dimmed: true,
  },
  {
    text: "Prove value to one real customer this week",
    sub: "A paying customer beats any deck or roadmap.",
    dimmed: false,
  },
  {
    text: "Measure outcomes, then scale what works",
    sub: "What's strong, what needs attention, and what's missing is clear.",
    dimmed: true,
  },
];

function ChecklistChart() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.8", "end 0.3"]);
  return (
    <div
      className="w-full max-w-[460px] h-auto md:h-[210px] rounded-[20px] border border-white/20 px-[10px] md:px-[24px] py-[10px] md:py-[14px] flex flex-col justify-center gap-[3px] md:gap-[8px]"
      style={chartBg}
      ref={scope}
    >
      {items.map((item) => (
        <div
          key={item.text}
          className={`relative flex items-center gap-[6px] md:gap-[8px] rounded-[8px] px-[6px] md:px-[8px] py-[4px] md:py-[6px] w-full ${item.dimmed ? "opacity-50" : ""}`}
          style={{
            background: item.dimmed
              ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 100%)"
              : "linear-gradient(90deg, rgba(28,90,249,0.08) 0%, rgba(28,90,249,0.2) 100%)",
          }}
        >
          <div
            className="absolute inset-0 rounded-[8px] pointer-events-none"
            style={{
              backgroundImage: item.dimmed
                ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 100%)"
                : "linear-gradient(90deg, rgba(28,90,249,0.1) 0%, rgba(28,90,249,0.35) 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "border-box",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              padding: "1px",
            }}
          />
          <div
            className="w-[14px] h-[14px] rounded-full flex items-center justify-center shrink-0"
            style={{ background: item.dimmed ? "#4dcea7" : "#1C5AF9" }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path
                d="M1.5 4L3.5 6L6.5 2"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <WordRevealText as="p"
              className={`font-chart text-[9px] md:text-[11px] text-white tracking-[0.11px] ${item.dimmed ? "font-normal" : "font-semibold"}`}
            >
              {item.text}
            </WordRevealText>
            <WordRevealText as="p"
              className={`font-chart text-[7px] md:text-[8px] text-white tracking-[0.11px] ${item.dimmed ? "font-normal" : "font-medium"}`}
            >
              {item.sub}
            </WordRevealText>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(ChecklistChart);
