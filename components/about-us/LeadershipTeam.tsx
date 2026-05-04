"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const leaders = [
  {
    name: "Ryan Harris",
    role: "VP, Sales & Client Partnerships",
    image: "/images/about-us/ryan-harris-placeholder.png",
    imageClassName: "object-cover object-top",
    desc: "Ryan works directly with founders during the early stages of engagement. He helps translate ideas into clear product discussions, aligns expectations, and ensures the team understands exactly what the founder is trying to build.",
  },
  {
    name: "Jay Martin",
    role: "Head of Production & Technical Lead",
    image: "/images/about-us/jay-martin-web-profile.png",
    imageClassName: "object-cover object-[50%_34%] scale-[1.04]",
    desc: "Jay leads the technical side of every project. He works closely with the development team to design system architecture, guide engineering decisions, and ensure products are built on stable, scalable foundations.",
  },
];

const cardBg =
  "radial-gradient(ellipse at center top, rgba(255,255,255,0.08), transparent), linear-gradient(180deg, rgba(46,51,90,0) 0%, rgba(28,27,51,0.1) 100%)";

export default function LeadershipTeam() {
  const titleScope = useRef<HTMLDivElement>(null);
  const bottomScope = useRef<HTMLDivElement>(null);
  useScrollReveal(titleScope, ["start 0.8", "start 0.5"]);
  useScrollReveal(bottomScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative md:py-24 py-10 overflow-hidden bg-black">
      {/* Blur — bottom area */}
      <div className="absolute left-[calc(50%-30px)] bottom-[-180px] w-[636px] h-[636px] mix-blend-screen opacity-40 pointer-events-none">
        <Image
          src="/images/about-us/person-blur-outer.svg"
          alt=""
          fill
          className="object-contain scale-[1.52]"
        />
      </div>

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with decorative lines */}
        <div ref={titleScope} className="mb-[12px] relative">
          <Image
            src="/images/about-us/leadership-lines.svg"
            alt=""
            width={819}
            height={138}
            className="absolute left-1/2 top-[-10px] -translate-x-1/2 pointer-events-none opacity-60"
          />
          <WordRevealText as="h2" className="relative font-display font-extrabold text-[30px] sm:text-[50px] md:text-[60px] leading-[1.1] uppercase">
            <span className="text-[#1C5AF9]">LEADERSHIP </span>
            <span className="text-white">&amp; CLIENT TEAM</span>
          </WordRevealText>

          {/* Subtitle */}
          <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white max-w-[1270px] mt-[12px]">
            While Launchieve is founder-led, every project is supported by a small
            leadership team responsible for client communication and product
            delivery.
          </WordRevealText>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[40px]">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="animate-on-scroll rounded-[40px] border border-white/15 overflow-hidden p-[20px] relative"
              style={{
                background: cardBg,
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0px 5px 10px rgba(0,0,0,0.05), 0px 15px 30px rgba(0,0,0,0.05), 0px 30px 60px rgba(0,0,0,0.1), inset 0px 0px 100px rgba(204,215,255,0.15)",
              }}
            >
              {/* Photo */}
              {/* <div className="relative w-full h-[250px] md:h-[373px] rounded-[20px] overflow-hidden border border-white/30 mb-[16px]">
                <Image
                  src={leader.image}
                  alt={`${leader.name} — ${leader.role}`}
                  fill
                  className={leader.imageClassName}
                />
              </div> */}

              {/* Name & Role */}
              <h3 className="font-body font-bold text-[18px] md:text-[22px] leading-[27px] text-white capitalize mb-[20px]">
                {leader.name} — {leader.role}
              </h3>

              {/* Description */}
              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[24px] text-white/60">
                {leader.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div ref={bottomScope} className="flex flex-col gap-[20px]">
          <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white">
            Ryan helps shape the product conversation with the founder.
            Jay ensures the team builds it the right way.
          </WordRevealText>

          <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white">
            Together, they work alongside Shahzar to move products from{" "}
            <span className="font-bold text-[#1C5AF9] text-[20px] md:text-[26px] capitalize">
              Idea
            </span>{" "}
            <span className="font-bold text-[20px] md:text-[26px]">&rarr;</span>{" "}
            <span className="font-bold text-[#1C5AF9] text-[20px] md:text-[26px] capitalize">
              Strategy
            </span>{" "}
            <span className="font-bold text-[20px] md:text-[26px]">&rarr;</span>{" "}
            <span className="font-bold text-[#1C5AF9] text-[20px] md:text-[26px] capitalize">
              Build
            </span>{" "}
            <span className="font-bold text-[20px] md:text-[26px]">&rarr;</span>{" "}
            <span className="font-bold text-[#1C5AF9] text-[20px] md:text-[26px] capitalize">
              Launch
            </span>{" "}
            without communication gaps.
          </WordRevealText>
        </div>
      </div>
    </section>
  );
}
