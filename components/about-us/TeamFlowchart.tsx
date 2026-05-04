import Image from "next/image";

const mobileNodes = [
  { label: "Product\nDesigners", left: 0, top: 114, width: 100 },
  { label: "Backend\nEngineers", left: 0, top: 224, width: 100 },
  { label: "Web\n&Mobile\nDevelopers", left: 154, top: 114, width: 100 },
  { label: "DevOps\nSpecialists", left: 154, top: 224, width: 100 },
  { label: "GTM\nStrategists", left: 77, top: 319, width: 100 },
];

const desktopNodes = [
  { label: "Product\nDesigner", left: 0, top: 118, size: 175 },
  { label: "Web &\nMobile\nDeveloper", left: 154, top: 210, size: 175 },
  { label: "Backend\nEngineer", left: 293, top: 304, size: 175 },
  { label: "DevOps\nSpecialist", left: 431, top: 210, size: 175 },
  { label: "GTM\nStrategist", left: 585, top: 118, size: 175 },
];

export default function TeamFlowchart() {
  return (
    <>
      <div className="mx-auto w-[254px] md:hidden">
        <MobileTeamFlowchart />
      </div>

      <div className="relative mx-auto hidden h-[420px] w-full max-w-[640px] md:block">
        <div className="absolute left-1/2 top-0 h-[470px] w-[760px] origin-top -translate-x-1/2 scale-[0.78]">
          <svg
            className="absolute inset-0 pointer-events-none"
            viewBox="0 0 760 470"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M215 170H545"
              stroke="#1E5CF9"
              strokeWidth="2"
              strokeDasharray="5 5"
              strokeLinecap="round"
            />
            <path
              d="M380 170V295"
              stroke="#1E5CF9"
              strokeWidth="2"
              strokeDasharray="5 5"
              strokeLinecap="round"
            />
            <path
              d="M380 170L300 240"
              stroke="#1E5CF9"
              strokeWidth="2"
              strokeDasharray="5 5"
              strokeLinecap="round"
            />
            <path
              d="M380 170L460 240"
              stroke="#1E5CF9"
              strokeWidth="2"
              strokeDasharray="5 5"
              strokeLinecap="round"
            />
            <path
              d="M215 164L207 170L215 176"
              stroke="#1E5CF9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M545 164L553 170L545 176"
              stroke="#1E5CF9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M373 295L380 303L387 295"
              stroke="#1E5CF9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M305 233L297 240L307 240"
              stroke="#1E5CF9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M453 240L463 240L455 233"
              stroke="#1E5CF9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="absolute left-[308px] top-[18px]">
            <DesktopHexagon label={"Your\nProject"} size={143} glow />
          </div>

          {desktopNodes.map((node) => (
            <div
              key={node.label}
              className="absolute"
              style={{ left: node.left, top: node.top }}
            >
              <DesktopHexagon label={node.label} size={node.size} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function MobileTeamFlowchart() {
  return (
    <div className="relative h-[405px] w-[254px]">
      <div
        className="pointer-events-none absolute left-[50px] top-[44px] h-[64px] w-[15px] -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src="/images/about-us/team-arrow-branch.png"
          alt=""
          width={64}
          height={15}
          className="absolute left-1/2 top-1/2 block h-[15px] w-[64px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-[65px] top-[44px] h-[2px] w-[31px] -translate-x-1/2 rotate-180"
        aria-hidden="true"
      >
        <Image
          src="/images/about-us/team-arrow-horizontal.png"
          alt=""
          width={31}
          height={2}
          className="block h-[2px] w-[31px] object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-[209px] top-[44px] h-[64px] w-[15px] -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src="/images/about-us/team-arrow-branch.png"
          alt=""
          width={64}
          height={15}
          className="absolute left-1/2 top-1/2 block h-[15px] w-[64px] max-w-none -translate-x-1/2 -translate-y-1/2 -scale-y-100 rotate-90 object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-[190px] top-[44px] h-[2px] w-[31px] -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src="/images/about-us/team-arrow-horizontal.png"
          alt=""
          width={31}
          height={2}
          className="block h-[2px] w-[31px] object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-[127px] top-[91px] h-[223px] w-[15px] -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src="/images/about-us/team-arrow-center.png"
          alt=""
          width={223}
          height={15}
          className="absolute left-1/2 top-1/2 block h-[15px] w-[223px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-[49px] top-[202px] h-[19px] w-[15px] -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src="/images/about-us/team-arrow-short.png"
          alt=""
          width={19}
          height={15}
          className="absolute left-1/2 top-1/2 block h-[15px] w-[19px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-[205px] top-[202px] h-[19px] w-[15px] -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src="/images/about-us/team-arrow-short.png"
          alt=""
          width={19}
          height={15}
          className="absolute left-1/2 top-1/2 block h-[15px] w-[19px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 object-contain"
        />
      </div>

      <div className="absolute left-[77px] top-0">
        <MobileHexagon label={"Your\nProject"} primary />
      </div>

      {mobileNodes.map((node) => (
        <div
          key={node.label}
          className="absolute"
          style={{ left: node.left, top: node.top, width: node.width }}
        >
          <MobileHexagon label={node.label} />
        </div>
      ))}
    </div>
  );
}

function MobileHexagon({
  label,
  primary = false,
}: {
  label: string;
  primary?: boolean;
}) {
  const lines = label.split("\n");

  return (
    <div className="relative h-[90px] w-[100px]">
      <Image
        src={
          primary
            ? "/images/about-us/team-flowchart-mobile-primary.png"
            : "/images/about-us/team-flowchart-mobile-secondary.png"
        }
        alt=""
        fill
        className="pointer-events-none object-contain"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-[8px] text-center text-white">
        {lines.map((line, index) => (
          <span
            key={index}
            className={`font-body leading-[18px] ${
              primary ? "text-[16px] font-bold" : "text-[14px] font-medium"
            }`}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

function DesktopHexagon({
  label,
  size,
  glow,
}: {
  label: string;
  size: number;
  glow?: boolean;
}) {
  const lines = label.split("\n");

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: Math.round(size * 0.863) }}
    >
      <svg
        viewBox="0 0 175 151"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M43.5 1H131.5L173.5 75.5L131.5 150H43.5L1.5 75.5Z"
          fill={glow ? "rgba(31,45,87,0.88)" : "rgba(255,255,255,0.035)"}
          stroke={glow ? "rgba(91,128,255,0.55)" : "rgba(255,255,255,0.12)"}
          strokeWidth="1.2"
        />
        <path
          d="M43.5 1H131.5L173.5 75.5L131.5 150H43.5L1.5 75.5Z"
          fill={`url(#${glow ? "desktopHexDotsGlow" : "desktopHexDots"})`}
          fillOpacity={glow ? "0.24" : "0.14"}
        />
        <defs>
          <pattern
            id={glow ? "desktopHexDotsGlow" : "desktopHexDots"}
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.2" cy="1.2" r="0.7" fill="white" opacity="0.5" />
          </pattern>
          {glow && (
            <filter
              id="desktopHexGlow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}
        </defs>
        {glow && (
          <path
            d="M43.5 1H131.5L173.5 75.5L131.5 150H43.5L1.5 75.5Z"
            fill="none"
            stroke="rgba(87,123,247,0.8)"
            strokeWidth="1.4"
            filter="url(#desktopHexGlow)"
          />
        )}
      </svg>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-[10px] text-center">
        {lines.map((line, index) => (
          <span
            key={index}
            className={`font-body leading-[1.2] text-white ${
              glow ? "text-[28px] font-bold" : "text-[24px] font-medium"
            }`}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
