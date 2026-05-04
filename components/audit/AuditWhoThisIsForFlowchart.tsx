import Image from "next/image";
import type { ReactNode } from "react";

const cardBackground =
  "radial-gradient(ellipse at center top, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 72%), linear-gradient(180deg, rgba(38,112,233,0.1) 0%, rgba(28,27,51,0.02) 100%)";
const tagBackground =
  "linear-gradient(180deg, rgba(38,112,233,0.4) 0%, rgba(28,27,51,0.08) 100%)";
const tagBorder = "1px solid rgba(255,255,255,0.3)";
const figtree = { fontFamily: "Figtree, sans-serif" };

const mobileCards = [
  {
    tag: "You're Building",
    tagWidth: 94,
    title: "Something Real Exists",
    body: "logos" as const,
  },
  {
    tag: "The Doubt Hits",
    tagWidth: 94,
    title: "You're Not Sure Anymore",
    body: "doubt" as const,
  },
  {
    tag: "The Audit",
    tagWidth: 94,
    title: "Clear-Eyed Review",
    body: "audit" as const,
  },
  {
    tag: "Clarity + Direction",
    tagWidth: 107,
    title: "Know Exactly What To Do Next",
    body: "result" as const,
  },
  {
    tag: "No Prototype Yet?",
    tagWidth: 95,
    title: "Just An Idea",
    body: "idea" as const,
  },
] as const;

function FlowTag({
  text,
  width,
}: {
  text: string;
  width: number;
}) {
  return (
    <div
      className="relative flex h-[28px] items-center justify-center overflow-hidden rounded-full"
      style={{
        width,
        background: tagBackground,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          border: tagBorder,
          opacity: 0.95,
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 18%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,1) 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 18%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,1) 100%)",
        }}
      />
      <span
        className="relative z-10 whitespace-nowrap text-[11px] font-bold capitalize tracking-[0.11px] text-white"
        style={figtree}
      >
        {text}
      </span>
    </div>
  );
}

function MetricBar({
  label,
  width,
}: {
  label: string;
  width: number;
}) {
  return (
    <div
      className="flex h-[20px] items-center rounded-[4px]"
      style={{
        width,
        background:
          "linear-gradient(90deg, rgba(171,169,76,0) 0%, rgba(120,119,54,0.6) 40%, rgba(171,169,76,0.96) 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
      }}
    >
      <span
        className="whitespace-nowrap pl-[9px] pr-[10px] text-[10px] font-medium capitalize tracking-[0.11px] text-white"
        style={figtree}
      >
        {label}
      </span>
    </div>
  );
}

function LabelPill({
  text,
  width,
  bold = false,
}: {
  text: string;
  width: number;
  bold?: boolean;
}) {
  return (
    <div
      className="flex h-[20px] items-center justify-center rounded-[4px]"
      style={{
        width,
        background:
          "linear-gradient(180deg, rgba(49,81,138,0.9) 0%, rgba(35,51,90,0.9) 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.14), 0 0 0 1px rgba(255,255,255,0.08)",
      }}
    >
      <span
        className={`whitespace-nowrap text-[10px] capitalize tracking-[0.11px] text-white ${bold ? "font-bold" : "font-medium"}`}
        style={figtree}
      >
        {text}
      </span>
    </div>
  );
}

function ArrowLine({ width }: { width: number }) {
  return (
    <svg
      width={width}
      height="15"
      viewBox={`0 0 ${width} 15`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M1 7.5H${width - 10}`}
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d={`M${width - 14} 2.5L${width - 3} 7.5L${width - 14} 12.5`}
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlowCard({
  className,
  tag,
  tagWidth,
  title,
  titleClassName,
  children,
}: {
  className: string;
  tag: string;
  tagWidth: number;
  title: string;
  titleClassName?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`absolute rounded-[20px] border border-white/20 text-white backdrop-blur-[20px] ${className}`}
      style={{
        backgroundImage: cardBackground,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex justify-center pt-[15px]">
        <FlowTag text={tag} width={tagWidth} />
      </div>
      <p
        className={`mt-[8px] text-center text-[14px] font-semibold capitalize leading-[1.2] tracking-[0.11px] ${titleClassName ?? ""}`}
        style={figtree}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function MobileArrow() {
  return (
    <div className="flex justify-center h-[58px]" style={{ width: 220 }}>
      <div className="relative h-[58px] w-[20px]">
        <div className="absolute left-1/2 top-0 h-[42px] w-px -translate-x-1/2 bg-white" />
        <div className="absolute left-1/2 top-[37px] h-[12px] w-[12px] -translate-x-1/2 rotate-45 border-b border-r border-white" />
      </div>
    </div>
  );
}

function MobileFlowCard({
  tag,
  tagWidth,
  title,
  body,
}: (typeof mobileCards)[number]) {
  return (
    <div
      className="relative w-[220px] rounded-[20px] border border-white/20 px-4 pb-4 pt-3 text-white backdrop-blur-[20px]"
      style={{
        backgroundImage: cardBackground,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex justify-center">
        <FlowTag text={tag} width={tagWidth} />
      </div>
      <p
        className={`mx-auto text-center font-semibold tracking-[0.11px] ${
          body === "result"
            ? "mt-5 max-w-[180px] text-[17px] leading-[1.2]"
            : "mt-3 text-[18px] leading-[1.2]"
        }`}
        style={figtree}
      >
        {title}
      </p>

      {body === "logos" && (
        <>
          <div className="relative mx-auto mt-5 h-[92px] w-[138px]">
            <div className="absolute right-[8px] top-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/audit/hex-shape.png"
                alt=""
                className="h-[36px] w-[42px]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/audit/logo-lovable.png"
                alt="Lovable"
                className="absolute left-[7px] top-[9px] h-auto w-[27px] object-contain"
              />
            </div>
            <div className="absolute left-[39px] top-[20px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/audit/hex-shape.png"
                alt=""
                className="h-[36px] w-[42px]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/audit/logo-bolt.png"
                alt="Bolt"
                className="absolute left-[9px] top-[8px] h-auto w-[20px] object-contain"
              />
            </div>
            <div className="absolute left-0 top-[34px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/audit/hex-shape.png"
                alt=""
                className="h-[36px] w-[42px]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/audit/logo-cursor.png"
                alt="Cursor"
                className="absolute left-[12px] top-[8px] h-auto w-[16px] object-contain"
              />
            </div>
            <div className="absolute left-[31px] top-[57px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/audit/hex-shape.png"
                alt=""
                className="h-[36px] w-[42px]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/audit/logo-replit.png"
                alt="Replit"
                className="absolute left-[7px] top-[10px] h-auto w-[25px] object-contain"
              />
            </div>
            <div className="absolute left-[70px] top-[43px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/audit/hex-shape.png"
                alt=""
                className="h-[36px] w-[42px]"
              />
              <span
                className="absolute left-[7px] top-[6px] w-[27px] text-center text-[7px] font-bold capitalize leading-[1.15] tracking-[0.11px] text-white"
                style={figtree}
              >
                Or Your Own Stack
              </span>
            </div>
          </div>
          <p
            className="mt-4 text-center text-[14px] font-medium capitalize tracking-[0.11px]"
            style={figtree}
          >
            Or Your Own Stack
          </p>
        </>
      )}

      {body === "doubt" && (
        <>
          <div className="mx-auto mt-5 w-[176px] space-y-[8px]">
            <MetricBar label="Right Thing?" width={136} />
            <MetricBar label="Right Way?" width={111} />
            <MetricBar label="Right People?" width={97} />
          </div>
          <p
            className="mx-auto mt-5 max-w-[190px] text-center text-[14px] font-medium capitalize leading-[1.2] tracking-[0.11px]"
            style={figtree}
          >
            This Is The Moment The Audit Exists For
          </p>
        </>
      )}

      {body === "audit" && (
        <>
          <div className="mx-auto mt-5 w-[176px] space-y-[8px]">
            <MetricBar label="Right Thing?" width={136} />
            <MetricBar label="Right Way?" width={111} />
            <MetricBar label="Right People?" width={97} />
          </div>
          <p
            className="mx-auto mt-5 max-w-[182px] text-center text-[14px] font-medium capitalize leading-[1.2] tracking-[0.11px]"
            style={figtree}
          >
            Both Paths Arrive Here
          </p>
        </>
      )}

      {body === "idea" && (
        <div className="mx-auto mt-5 w-[170px]">
          <div
            className="h-[20px] rounded-[4px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(33,53,64,0.2) 0%, rgba(70,131,107,0.94) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          />
          <p
            className="mt-2 text-center text-[12px] font-medium capitalize tracking-[0.11px] text-white"
            style={figtree}
          >
            We Can Still Help +
          </p>
        </div>
      )}
    </div>
  );
}

function MobileFlowchart() {
  return (
    <div className="relative mt-8 lg:hidden animate-on-scroll-right">
      <div className="relative ml-0 mr-auto pr-[80px]">
        {/* Right-side connector: top horizontal */}
        <div
          className="pointer-events-none absolute border-t border-dotted border-white/40"
          style={{ left: 220, top: 100, right: 0 }}
        />
        {/* Right-side connector: vertical line */}
        <div
          className="pointer-events-none absolute border-l border-dotted border-white/40"
          style={{ right: 0, top: 100, bottom: 120 }}
        />
        {/* Right-side connector: bottom horizontal to last card */}
        <div
          className="pointer-events-none absolute border-t border-dotted border-white/40"
          style={{ left: 220, right: 0, bottom: 120 }}
        />

        {/* Card 1: You're Building */}
        <MobileFlowCard {...mobileCards[0]} />

        <div className="flex flex-col items-center" style={{ width: 220 }}>
          <div className="mb-2 mt-4">
            <LabelPill text="You Built It" width={57} />
          </div>
          <MobileArrow />
        </div>

        {/* Card 2: The Doubt Hits */}
        <MobileFlowCard {...mobileCards[1]} />

        <div className="flex flex-col items-center" style={{ width: 220 }}>
          <div className="mb-2 mt-4">
            <LabelPill text="You Bring It In" width={71} />
          </div>
          <MobileArrow />
        </div>

        {/* Card 3: The Audit — "Or" label on right side */}
        <div className="relative">
          <MobileFlowCard {...mobileCards[2]} />
          <div className="pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center gap-[4px]" style={{ left: 224 }}>
            <div className="h-px w-[10px] border-t border-dotted border-white/50" />
            <LabelPill text="Or" width={31} bold />
          </div>
        </div>

        <div className="flex flex-col items-center" style={{ width: 220 }}>
          <MobileArrow />
        </div>

        {/* Card 4: Clarity + Direction */}
        <MobileFlowCard {...mobileCards[3]} />

        {/* "Still Enters The Audit" label + dotted connector */}
        <div className="relative flex flex-col items-center" style={{ width: 220, height: 110 }}>
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l border-dotted border-white/50" />
          <div className="relative z-10 mt-auto mb-auto">
            <LabelPill text="Still Enters The Audit" width={120} bold />
          </div>
        </div>

        {/* Card 5: No Prototype Yet? */}
        <MobileFlowCard {...mobileCards[4]} />
      </div>
    </div>
  );
}

export default function AuditWhoThisIsForFlowchart() {
  return (
    <>
      <div className="animate-on-scroll-right relative hidden h-[640px] items-start justify-center -mt-[24px] lg:flex">
        <Image
          width={600}
          height={600}
          src="/images/home/hero/earth-globe.png"
          alt=""
          className="absolute inset-0 m-auto h-[600px] w-[600px] object-contain"
        />
        <Image
          width={550}
          height={550}
          src="/images/home/hero/ellipse-ring.svg"
          alt=""
          className="absolute inset-0 z-10 m-auto h-[550px] w-[550px] object-contain"
        />

        <div
          className="absolute z-20"
          style={{
            width: 775,
            height: 592,
            transform: "scale(0.9)",
            transformOrigin: "center center",
          }}
        >
          <FlowCard
            className="left-0 top-0 h-[208px] w-[181px]"
            tag="You're Building"
            tagWidth={94}
            title="Something Real Exists"
          >
            <div className="relative mx-auto mt-[12px] h-[91px] w-[111px]">
              <div className="absolute right-0 top-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/audit/hex-shape.png"
                  alt=""
                  className="h-[35px] w-[41px]"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/audit/logo-lovable.png"
                  alt="Lovable"
                  className="absolute left-[7px] top-[9px] h-auto w-[26px] object-contain"
                />
              </div>
              <div className="absolute left-[34px] top-[18px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/audit/hex-shape.png"
                  alt=""
                  className="h-[35px] w-[41px]"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/audit/logo-bolt.png"
                  alt="Bolt"
                  className="absolute left-[9px] top-[8px] h-auto w-[21px] object-contain"
                />
              </div>
              <div className="absolute left-0 top-[32px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/audit/hex-shape.png"
                  alt=""
                  className="h-[35px] w-[41px]"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/audit/logo-cursor.png"
                  alt="Cursor"
                  className="absolute left-[12px] top-[9px] h-auto w-[16px] object-contain"
                />
              </div>
              <div className="absolute left-[31px] top-[56px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/audit/hex-shape.png"
                  alt=""
                  className="h-[35px] w-[41px]"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/audit/logo-replit.png"
                  alt="Replit"
                  className="absolute left-[7px] top-[10px] h-auto w-[25px] object-contain"
                />
              </div>
              <div className="absolute left-[69px] top-[42px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/audit/hex-shape.png"
                  alt=""
                  className="h-[35px] w-[41px]"
                />
                <span
                  className="absolute left-[7px] top-[6px] w-[27px] text-center text-[7px] font-bold capitalize leading-[1.15] tracking-[0.11px] text-white"
                  style={figtree}
                >
                  Or Your Own Stack
                </span>
              </div>
            </div>
            <p
              className="mt-[13px] text-center text-[10px] font-medium capitalize tracking-[0.11px]"
              style={figtree}
            >
              Or Your Own Stack
            </p>
          </FlowCard>

          <div className="absolute left-[205px] top-[76px]">
            <LabelPill text="You Built It" width={65} />
          </div>
          <div className="absolute left-[185px] top-[96px]">
            <ArrowLine width={109} />
          </div>

          <FlowCard
            className="left-[299px] top-0 h-[208px] w-[181px]"
            tag="The Doubt Hits"
            tagWidth={94}
            title="You're Not Sure Anymore"
          >
            <div className="mt-[14px] space-y-[8px] px-[18px]">
              <MetricBar label="Right Thing?" width={144} />
              <MetricBar label="Right Way?" width={120} />
              <MetricBar label="Right People?" width={103} />
            </div>
            <p
              className="mx-auto mt-[18px] w-[158px] text-center text-[10px] font-medium capitalize leading-[1.2] tracking-[0.11px]"
              style={figtree}
            >
              This Is The Moment The Audit Exists For
            </p>
          </FlowCard>

          <div className="absolute left-[499px] top-[76px]">
            <LabelPill text="You Bring It In" width={76} />
          </div>
          <div className="absolute left-[485px] top-[96px]">
            <ArrowLine width={109} />
          </div>

          <FlowCard
            className="left-[594px] top-0 h-[208px] w-[181px]"
            tag="The Audit"
            tagWidth={94}
            title="Clear-Eyed Review"
          >
            <div className="mt-[14px] space-y-[8px] px-[18px]">
              <MetricBar label="Right Thing?" width={144} />
              <MetricBar label="Right Way?" width={120} />
              <MetricBar label="Right People?" width={103} />
            </div>
            <p
              className="mx-auto mt-[24px] w-[158px] text-center text-[10px] font-medium capitalize leading-[1.2] tracking-[0.11px]"
              style={figtree}
            >
              Both Paths Arrive Here
            </p>
          </FlowCard>

          <div
            className="absolute left-[86px] top-[208px] h-[309px] border-l border-dotted border-white/80"
            style={{ borderLeftWidth: 1 }}
          />
          <div
            className="absolute left-[693px] top-[208px] h-[309px] border-l border-dotted border-white/80"
            style={{ borderLeftWidth: 1 }}
          />
          <div
            className="absolute left-[87px] top-[517px] w-[212px] border-t border-dotted border-white/80"
            style={{ borderTopWidth: 1 }}
          />
          <div
            className="absolute left-[480px] top-[517px] w-[213px] border-t border-dotted border-white/80"
            style={{ borderTopWidth: 1 }}
          />

          <div className="absolute left-[71px] top-[333px]">
            <LabelPill text="Or" width={32} bold />
          </div>

          <div className="absolute left-[631px] top-[333px]">
            <LabelPill text="Still Enters The Audit" width={108} bold />
          </div>

          <svg
            className="absolute left-[480px] top-[208px]"
            width="176"
            height="135"
            viewBox="0 0 176 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M175 1V113H12"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 108L1 113L12 118"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <FlowCard
            className="left-[299px] top-[270px] h-[114px] w-[181px]"
            tag="Clarity + Direction"
            tagWidth={107}
            title="Know Exactly What To Do Next"
            titleClassName="mx-auto mt-[15px] w-[156px]"
          />

          <FlowCard
            className="left-[299px] top-[446px] h-[146px] w-[181px] overflow-hidden"
            tag="No Prototype Yet?"
            tagWidth={95}
            title="Just An Idea"
          >
            <div
              className="absolute left-[19px] top-[81px] h-[36px] rounded-[4px]"
              style={{
                width: 144,
                background:
                  "linear-gradient(90deg, rgba(33,53,64,0.2) 0%, rgba(70,131,107,0.94) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            />
            <p
              className="absolute left-[23px] top-[94px] text-[10px] font-medium capitalize tracking-[0.11px] text-white"
              style={figtree}
            >
              We Can Still Help ↓
            </p>
          </FlowCard>
        </div>
      </div>

      <MobileFlowchart />
    </>
  );
}
