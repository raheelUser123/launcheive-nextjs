"use client";

import Image from "next/image";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import services from "./data/services";

export default function BuildWithUs() {
  const topScope = useRef<HTMLDivElement>(null);
  const bottomScope = useRef<HTMLDivElement>(null);
  useScrollReveal(topScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);
  useScrollReveal(bottomScope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section id="build" className="relative py-[30px] overflow-hidden bg-black">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 40% 50%, rgba(28,90,249,0.25) 0%, rgba(59,110,248,0.1) 30%, rgba(26,71,185,0.05) 60%, transparent 80%)",
          transform: "translateZ(0)",
        }}
      />
      <Image
        src="/images/build-with-us/pulse.svg"
        alt=""
        width={1920}
        height={1080}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none"
      />

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={topScope}>
          <div className="mb-[20px]">
            <WordRevealText
              as="h2"
              className="font-display font-extrabold text-[30px] sm:text-[42px] md:text-[50px] leading-[100%] uppercase text-white"
            >
              <span className="text-[#1E5CF9]">Build</span> With Us
            </WordRevealText>
          </div>

          <WordRevealText
            as="p"
            className="font-body font-bold text-[26px] sm:text-[30px] md:text-[36px] leading-[normal] tracking-[-1.04px] md:tracking-[-1.44px] text-white mb-[10px]"
          >
            If the direction is right, we can help you build it too.
          </WordRevealText>

          <div className="flex flex-col gap-[4px] mb-[30px]">
            <WordRevealText
              as="p"
              className="font-body font-medium text-[20px] sm:text-[24px] md:text-[30px] leading-[normal] tracking-[-0.8px] md:tracking-[-1.2px] text-white"
            >
              Once you have clarity, you don&apos;t have to start over alone.
            </WordRevealText>
            <WordRevealText
              as="p"
              className="font-body font-medium text-[20px] sm:text-[24px] md:text-[30px] leading-[normal] tracking-[-0.8px] md:tracking-[-1.2px] text-white"
            >
              Many founders come to us after experimenting with AI tools or early
              prototypes.
            </WordRevealText>
            <WordRevealText
              as="p"
              className="font-body font-medium text-[20px] sm:text-[24px] md:text-[30px] leading-[normal] tracking-[-0.8px] md:tracking-[-1.2px] text-white"
            >
              When the idea proves strong, we help turn that prototype into a
              stable, scalable product.
            </WordRevealText>
            <WordRevealText
              as="p"
              className="font-body font-medium text-[20px] sm:text-[24px] md:text-[30px] leading-[normal] tracking-[-0.8px] md:tracking-[-1.2px] text-white"
            >
              We work with founders across the full journey:
            </WordRevealText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[33px] gap-y-[34px] mb-[30px]">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.desc}
              illustration={service.illustration}
              floatingIcons={service.floatingIcons}
              animationDelay={`${i * 0.08}s`}
            />
          ))}
        </div>

        <div ref={bottomScope}>
          <WordRevealText
            as="p"
            className="font-body font-medium md:font-semibold text-[20px] sm:text-[24px] md:text-[32px] leading-[30px] text-white"
          >
            The team that reviews your idea is the same team that can help bring
            it to life.
          </WordRevealText>
        </div>
      </div>
    </section>
  );
}
