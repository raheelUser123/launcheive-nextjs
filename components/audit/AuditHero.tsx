import Image from "next/image";
import PremiumAuditButton from "@/components/premium-audit/PremiumAuditButton";

/*
  Hex positions mapped from the Figma design.
  Actual image ratios: small = 134×120 (1.117:1), big = 214×190 (1.126:1)
*/
const hexIcons = [
  // Center — large, below the CTA button
  {
    hex: "/images/audit/hex/gold.png",
    icon: "/images/audit/hex/icon-top.svg",
    left: "50%",
    top: "82%",
    w: 120,

    h: 107,
    iconSize: 38,
  },
  // Left — level with "OPINION" text
  {
    hex: "/images/audit/hex/red.png",
    icon: "/images/audit/hex/icon-idea.svg",
    left: "13%",
    top: "57%",
    w: 80,
    h: 72,
    iconSize: 36,
  },
  // Right — level with "OPINION" text
  {
    hex: "/images/audit/hex/purple.png",
    icon: "/images/audit/hex/icon-person.svg",
    left: "85%",
    top: "57%",
    w: 80,
    h: 72,
    iconSize: 36,
  },
  // Left-center — lower
  {
    hex: "/images/audit/hex/pink.png",
    icon: "/images/audit/hex/icon-target.svg",
    left: "23%",
    top: "75%",
    w: 80,
    h: 72,
    iconSize: 36,
  },
  // Right-center — lower
  {
    hex: "/images/audit/hex/blue.png",
    icon: "/images/audit/hex/icon-chart.svg",
    left: "71%",
    top: "73%",
    w: 80,
    h: 72,
    iconSize: 36,
  },
  // Bottom-left
  {
    hex: "/images/audit/hex/green.png",
    icon: "/images/audit/hex/icon-search.svg",
    left: "10%",
    top: "91%",
    w: 80,
    h: 72,
    iconSize: 36,
  },
  // Bottom-right
  {
    hex: "/images/audit/hex/teal.png",
    icon: "/images/audit/hex/icon-doc.svg",
    left: "82%",
    top: "93%",
    w: 80,
    h: 72,
    iconSize: 36,
  },
];

export default function AuditHero() {
  return (
    <section
      className="relative md:min-h-screen min-h-auto flex flex-col items-center justify-center overflow-hidden pt-16 md:pb-[10vh] pb-11 bg-black"
      style={{
        justifyContent: "start",
        paddingTop: "clamp(100px, 18vh, 200px)",
      }}
    >
      {/* Diagonal lines background — full bleed */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/audit/hero-lines.svg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center -67px" }}
          priority
        />
      </div>

      {/* Radial circle glow — center top, large, opacity 15% */}
      <div className="absolute top-[-50%] left-1/2 -translate-x-[calc(50%-25px)] w-[1054px] h-[1054px] opacity-[0.15] pointer-events-none">
        <Image
          src="/images/audit/hero-circle.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* V-shape lines — originate from center, spread to bottom corners */}
      <div className="absolute left-1/2 top-[40%] w-[1440px] h-[701px] -translate-x-1/2 -translate-y-[15%] pointer-events-none md:block  hidden">
        <div className="absolute inset-[2.35%_0.01%_-2.25%_49.93%]">
          <Image
            src="/images/audit/hero-v-left.svg"
            alt=""
            fill
            className="object-contain"
            style={{ transform: "scaleY(-1) rotate(180deg)" }}
          />
        </div>
        <div className="absolute inset-[2.35%_49.95%_-2.25%_0]">
          <Image
            src="/images/audit/hero-v-right.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content — z-10 */}
      <div className="relative z-10 md:max-w-[974px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="font-display font-extrabold text-[30px] sm:text-[52px] md:text-[60px] lg:text-[70px] leading-[1.05] uppercase text-white mb-5 animate-fade-up w-[974px] max-w-[90vw] mx-auto"
          style={{ animationDelay: "0.1s" }}
        >
          Your Prototype Deserves A{" "}
          <span className="text-[#1C5AF9]">Real Opinion.</span>
        </h1>

        <p
          className="font-body font-bold text-[18px] md:text-[20px] leading-[30px] text-white mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Not encouragement. Not generic feedback.
        </p>

        <p
          className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-white mb-4 animate-fade-up max-w-[700px] mx-auto"
          style={{ animationDelay: "0.22s" }}
        >
          A structured review from people who build products for a living.
        </p>

        <p
          className="font-body font-medium text-[14px] leading-[30px] text-white mb-5 animate-fade-up max-w-[800px] mx-auto"
          style={{ animationDelay: "0.24s" }}
        >
          This audit works best if you already have a prototype — but strong
          ideas without prototypes are also welcome.
        </p>

        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <PremiumAuditButton
            className="inline-flex items-center justify-center h-[58px] md:w-[305px] w-full rounded-[80px] bg-[#1C5AF9] hover:bg-[#2a68ff] text-white font-display font-extrabold text-[16px] leading-[40px] uppercase transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Get Your Premium Audit — $149
          </PremiumAuditButton>
        </div>
      </div>

      {/* Hexagon icons — z-20, in front of text */}
      <div className="absolute inset-0 z-1 pointer-events-none hidden md:block">
        {hexIcons.map((h, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: h.left,
              top: h.top,
              width: h.w,
              height: h.h,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={h.hex}
              alt=""
              width={h.w}
              height={h.h}
              className="absolute inset-0 w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={h.icon}
                alt=""
                width={h.iconSize}
                height={h.iconSize}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
