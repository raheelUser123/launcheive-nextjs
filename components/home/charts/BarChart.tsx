import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import React, { useRef } from "react";

const chartBg = {
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  backgroundImage:
    "radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, rgba(38,112,233,0.1) 0%, rgba(28,27,51,0.02) 100%)",
} as const;

function BarChart({
  items,
}: {
  items: { label: string; value: number; score: string; color: string }[];
}) {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.8", "end 0.3"]);
  return (
    <div
      className="w-full max-w-[460px] h-[210px] rounded-[20px] border border-white/20 px-[10px] md:px-[24px] py-[10px] md:py-[16px] flex flex-col justify-center gap-[3px] md:gap-[8px]"
      style={chartBg}
      ref={scope}
    >
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-[8px]">
          <WordRevealText as="p" className="font-chart font-normal text-[11px] text-white tracking-[0.11px] w-[93px] shrink-0">
            {item.label}
          </WordRevealText>
          <div className="flex-1 h-[28px] relative rounded-[5px] overflow-hidden">
            <div
              className="h-full rounded-[5px] flex items-center justify-center"
              style={{
                width: `${item.value}%`,
                background: `linear-gradient(to right, transparent, ${item.color})`,
              }}
            >
              <span className="font-chart font-bold text-[11px] text-white tracking-[0.11px]">
                {item.score}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(BarChart);
