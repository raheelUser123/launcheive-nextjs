import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import React, { useRef } from "react";

const chartBg = {
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  backgroundImage:
    "radial-gradient(ellipse at 50% -15%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, rgba(38,112,233,0.1) 0%, rgba(28,27,51,0.02) 100%)",
} as const;

const rows = [
  { label: "All Opportunities", bar: "Everything", width: "100%", highlight: false },
  { label: "Validated", bar: "Filtered by market evidence", width: "82%", highlight: false },
  { label: "High-Impact", bar: "Filtered by ROI & effort", width: "62%", highlight: false },
  { label: "Your Move", bar: "Execute this now", width: "55%", highlight: true },
];

function FunnelChart() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.8", "end 0.3"]);
  return (
    <div
      className="w-full max-w-[460px] h-[210px] rounded-[20px] border border-white/20 px-[10px] md:px-[24px] py-[10px] md:py-[18px] flex flex-col justify-center gap-[3px] md:gap-[8px]"
      style={chartBg}
      ref={scope}
    >
      {rows.map((row) => (
        <div key={row.label} className="flex items-center gap-[8px]">
          <WordRevealText as="p" className="font-chart font-normal text-[9px] md:text-[11px] text-white tracking-[0.11px] w-[72px] md:w-[88px] shrink-0">
            {row.label}
          </WordRevealText>
          <div className="flex-1">
            <div
              className="relative h-[28px] rounded-[8px] flex items-center px-[8px] md:px-[12px] overflow-hidden"
              style={{
                width: row.width,
                background: row.highlight
                  ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 100%)"
                  : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 100%)",
              }}
            >
              <div
                className="absolute inset-0 rounded-[8px] pointer-events-none"
                style={{
                  backgroundImage: row.highlight
                    ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 100%)"
                    : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 100%)",
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
              <WordRevealText as="p"
                className={`font-chart text-[9px] md:text-[11px] tracking-[0.11px] whitespace-nowrap overflow-hidden text-ellipsis ${row.highlight ? "font-semibold text-white" : "font-normal text-white/80"}`}
              >
                {row.bar}
              </WordRevealText>
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-[6px] mt-[2px]">
        <div className="w-[6px] h-[6px] rounded-full bg-[#1C5AF9] shrink-0" />
        <span className="font-chart font-normal text-[11px] text-white tracking-[0.11px]">
          Strong Signal - Worth Pursuing. Avg 80/100
        </span>
      </div>
    </div>
  );
}

export default React.memo(FunnelChart);
