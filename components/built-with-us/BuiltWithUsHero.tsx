import Link from "next/link";
import Image from "next/image";
import BookDiscoveryCallButton from "@/components/built-with-us/BookDiscoveryCallButton";

type DesktopNode = {
  key: string;
  src: string;
  alt: string;
  left: number;
  top: number;
  width: number;
  height: number;
  variant?: "full" | "framed" | "center";
  ring?: boolean;
  iconPadding?: number;
};

const desktopNodes: DesktopNode[] = [
  {
    key: "flutter",
    src: "/images/build-with-us/hero/icon-flutter.png",
    alt: "Flutter",
    left: 100.97,
    top: 28.08,
    width: 69.21,
    height: 69.19,
    variant: "framed",
    iconPadding: 12,
  },
  {
    key: "soap",
    src: "/images/build-with-us/hero/icon-soap.png",
    alt: "SOAP",
    left: 20.76,
    top: 188.44,
    width: 69.21,
    height: 69.19,
    variant: "framed",
    iconPadding: 11,
  },
  {
    key: "react",
    src: "/images/build-with-us/hero/icon-react.svg",
    alt: "React",
    left: 182.4,
    top: 268.21,
    width: 69.21,
    height: 69.19,
    variant: "full",
  },
  {
    key: "cube",
    src: "/images/build-with-us/hero/icon-cube.png",
    alt: "Package",
    left: 520.72,
    top: 321,
    width: 65.14,
    height: 65.12,
    variant: "framed",
    iconPadding: 12,
  },
  {
    key: "tailwind",
    src: "/images/build-with-us/hero/icon-tailwind.svg",
    alt: "Tailwind CSS",
    left: 789.43,
    top: 268.21,
    width: 69.21,
    height: 69.19,
    variant: "full",
  },
  {
    key: "docker",
    src: "/images/build-with-us/hero/icon-docker.svg",
    alt: "Docker",
    left: 1014.17,
    top: 43.96,
    width: 69.21,
    height: 69.19,
    variant: "full",
  },
  {
    key: "figma",
    src: "/images/build-with-us/hero/icon-figma.png",
    alt: "Figma",
    left: 191.76,
    top: 513.63,
    width: 69.21,
    height: 69.19,
    variant: "framed",
    iconPadding: 11,
  },
  {
    key: "javascript",
    src: "/images/build-with-us/hero/icon-javascript.png",
    alt: "JavaScript",
    left: 841.54,
    top: 520.14,
    width: 69.21,
    height: 69.19,
    variant: "framed",
    iconPadding: 10,
  },
  {
    key: "launchieve",
    src: "/images/build-with-us/hero/icon-launchieve.svg",
    alt: "Launchieve",
    left: 504.03,
    top: 417.99,
    width: 97.1,
    height: 97.07,
    variant: "center",
    ring: true,
    iconPadding: 26,
  },
  {
    key: "swift",
    src: "/images/build-with-us/hero/icon-swift.png",
    alt: "Swift",
    left: 520.72,
    top: 547.41,
    width: 65.14,
    height: 65.12,
    variant: "framed",
    iconPadding: 10,
  },
];

function DesktopBadge({
  src,
  alt,
  left,
  top,
  width,
  height,
  variant = "framed",
  ring = false,
  iconPadding = 10,
}: DesktopNode) {
  if (variant === "full") {
    return (
      <div
        className="absolute"
        style={{ left: `${left}px`, top: `${top}px`, width: `${width}px`, height: `${height}px` }}
      >
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    );
  }

  if (variant === "center") {
    return (
      <div
        className="absolute"
        style={{ left: `${left}px`, top: `${top}px`, width: `${width}px`, height: `${height}px` }}
      >
        {ring && (
          <div className="absolute inset-[-10px] rounded-full border border-[#7da1ff]/18" />
        )}
        <div className="absolute inset-0 rounded-full border border-[#a7b5da]/75 bg-[radial-gradient(circle_at_50%_36%,rgba(14,20,34,0.94)_0%,rgba(8,11,17,0.98)_100%)] shadow-[0_0_24px_rgba(28,90,249,0.12)]" />
        <div className="absolute inset-[4px] rounded-full border border-[#2d3d63]/80" />
        <div
          className="absolute"
          style={{
            left: `${iconPadding}px`,
            top: `${iconPadding}px`,
            right: `${iconPadding}px`,
            bottom: `${iconPadding}px`,
          }}
        >
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute rounded-[22px] border border-white/[0.07] bg-[linear-gradient(180deg,rgba(13,14,18,0.96)_0%,rgba(7,8,11,0.98)_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_6px_24px_rgba(0,0,0,0.35)]"
      style={{ left: `${left}px`, top: `${top}px`, width: `${width}px`, height: `${height}px` }}
    >
      <div className="absolute inset-[4px] rounded-[18px] border border-white/[0.04]" />
      <div
        className="absolute"
        style={{
          left: `${iconPadding}px`,
          top: `${iconPadding}px`,
          right: `${iconPadding}px`,
          bottom: `${iconPadding}px`,
        }}
      >
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  );
}

function DesktopNetwork() {
  return (
    <div className="relative -mt-[235px] hidden w-full max-w-[1096px] min-[900px]:block -z-1">
      <div className="relative aspect-[1096/808.3] w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_57%,rgba(12,22,52,0.18)_0%,rgba(0,0,0,0)_32%)]" />

        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 1096 808.3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="550.85" cy="456.25" r="310.69" stroke="rgba(32,72,145,0.14)" />
          <circle cx="550.93" cy="456.25" r="275.2" stroke="rgba(32,72,145,0.13)" />
          <circle cx="551.02" cy="456.25" r="231.4" stroke="rgba(32,72,145,0.12)" />
          <circle cx="551.07" cy="456.25" r="188.76" stroke="rgba(32,72,145,0.11)" />
          <circle cx="550.67" cy="456.25" r="147.96" stroke="rgba(32,72,145,0.1)" />

          <path
            d="M55.37 223.04V462.8C55.37 470.53 61.64 476.8 69.37 476.8H509.5"
            stroke="rgba(165,173,186,0.28)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M135.58 62.68V449.5C135.58 457.23 141.84 463.5 149.58 463.5H508.4"
            stroke="rgba(165,173,186,0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M216.99 302.81V442.8C216.99 450.53 223.26 456.8 230.99 456.8H509.5"
            stroke="rgba(165,173,186,0.26)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1048.77 78.55V462.8C1048.77 470.53 1042.5 476.8 1034.77 476.8H596.5"
            stroke="rgba(165,173,186,0.28)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M824.04 302.81V442.8C824.04 450.53 817.77 456.8 810.04 456.8H596.5"
            stroke="rgba(165,173,186,0.26)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M226.37 548.23V497.3C226.37 489.57 232.64 483.3 240.37 483.3H508.4"
            stroke="rgba(165,173,186,0.22)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M876.15 554.74V497.3C876.15 489.57 869.88 483.3 862.15 483.3H596.5"
            stroke="rgba(165,173,186,0.22)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M553.29 386.12V417.99"
            stroke="rgba(175,183,197,0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M553.29 515.06V547.41"
            stroke="rgba(175,183,197,0.34)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M509.5 456.8H596.5"
            stroke="rgba(165,173,186,0.28)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M508.4 463.5H597.6"
            stroke="rgba(165,173,186,0.34)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M508.4 483.3H597.6"
            stroke="rgba(165,173,186,0.22)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {desktopNodes.map(({ key, ...node }) => (
          <DesktopBadge key={key} {...node} />
        ))}

        <div className="absolute bottom-0 left-0 h-px w-full bg-white/[0.06]" />
      </div>
    </div>
  );
}

export default function BuiltWithUsHero() {
  return (
    <section className="relative overflow-hidden bg-black pt-24 md:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-x-0 top-0 h-[290px] bg-[linear-gradient(180deg,rgba(22,29,38,0.95)_0%,rgba(12,15,20,0.68)_58%,rgba(0,0,0,0)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(72,97,130,0.12),rgba(0,0,0,0)_30%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-4 pb-[40px] sm:pb-[84px] sm:px-6 sm:min-h-[920px] lg:min-h-[1120px] lg:px-8">
        <div className="mt-[42px] flex w-full max-w-[974px] flex-col items-center text-center relative">
          <h1 className="max-w-[350px] sm:max-w-[974px] font-display text-[30px] font-extrabold leading-[1.1] text-white uppercase sm:text-[56px] lg:text-[70px] lg:leading-[1.12]">
            You know what <span className="text-[#1C5AF9]">you&apos;re building</span>.
            {" "}Now let&apos;s build it properly.
          </h1>

          <p className="mt-[20px] max-w-[700px] font-body text-[16px] leading-[1.65] font-medium text-white sm:text-[18px] sm:leading-[30px]">
            From validated prototype to stable, scalable product — built by the
            same team that helped founders figure it out in the first place.
          </p>

          <div className="mt-[18px]">
            <BookDiscoveryCallButton className="hover:bg-[#245fff] hover:shadow-[0_20px_45px_rgba(28,90,249,0.3)] lg:px-[50px]" />
          </div>

          <p className="mt-[18px] max-w-[800px] font-body text-[13px] leading-[2] italic text-white/72 sm:text-[14px] sm:leading-[30px]">
            Many founders come to us after completing a Premium Audit — but it
            isn&apos;t required.
            <br className="hidden sm:block" />
            If you already have clarity on what you&apos;re building, we can
            jump straight into development.
          </p>
        </div>

        <DesktopNetwork />

      </div>
    </section>
  );
}
