import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import React, { useRef } from "react";

const chartBg = {
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  backgroundImage:
    "radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, rgba(38,112,233,0.1) 0%, rgba(28,27,51,0.02) 100%)",
} as const;

function StatusGrid({
  items,
}: {
  items: { label: string; status: string; color: string }[];
}) {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.8", "end 0.3"]);
  return (
    <div
      className="w-full max-w-[460px] h-[210px] rounded-[20px] border border-white/20 px-[10px] md:px-[24px] py-[10px] md:py-[20px] grid grid-cols-2 gap-x-[8px] md:gap-x-[24px] gap-y-[10px] md:gap-y-[14px] content-center"
      style={chartBg}
      ref={scope}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="relative h-[34px] rounded-[8px] flex flex-col justify-center px-[12px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 100%)",
          }}
        >
          <div
            className="absolute inset-0 rounded-[8px] pointer-events-none"
            style={{
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 100%)",
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
          <WordRevealText as="p" className="font-chart font-bold text-[10px] md:text-[12px] text-white tracking-[0.76px] capitalize leading-none whitespace-nowrap">
            {item.label}
          </WordRevealText>
          <div className="flex items-center gap-[4px] mt-[3px]">
            <div
              className="w-[6px] h-[6px] rounded-[3px] shrink-0"
              style={{ background: item.color }}
            />
            <span
              className="font-chart font-semibold text-[8px] md:text-[10px] leading-none whitespace-nowrap"
              style={{ color: item.color }}
            >
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(StatusGrid);
