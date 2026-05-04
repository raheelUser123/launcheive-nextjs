"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function ThePersonBehindIt() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.7", "end 0.7"]);

  return (
    <section className="relative md:py-24 py-10 overflow-hidden bg-black">
      {/* Blur — bottom-left area */}
      {/* <div className="absolute flex items-center mx-auto justify-center w-full h-[636px] mix-blend-screen opacity-40 pointer-events-none">
        <Image
          src="/images/about-us/person-blur-outer.svg"
          alt=""
          fill
          className="object-contain scale-[1.52] mx-auto"
        />
      </div> */}
      <div className="absolute flex items-center mx-auto justify-center w-full h-[-webkit-fill-available] mix-blend-screen opacity-40 pointer-events-none">
        <Image
          src="/images/about-us/person-blur-inner.png"
          alt=""
          fill
          className="object-contain scale-[1.71]"
        />
      </div>

      <div ref={scope} className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
          {/* Right side - Photo card */}
          <div className="animate-on-scroll-right flex items-start justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[328px] lg:w-[542px] lg:max-w-full rounded-[40px] overflow-hidden border border-white/15 p-[19px]"
              style={{
                background:
                  "radial-gradient(ellipse at center top, rgba(255,255,255,0.08), transparent), linear-gradient(180deg, rgba(46,51,90,0) 0%, rgba(28,27,51,0.1) 100%)",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "0px 5px 10px rgba(0,0,0,0.05), 0px 15px 30px rgba(0,0,0,0.05), 0px 30px 60px rgba(0,0,0,0.1), inset 0px 0px 100px rgba(204,215,255,0.15)",
              }}
            >
              <div className="relative w-full aspect-[502/570] rounded-[20px] overflow-hidden border border-white/30">
                <Image
                  src="/images/about-us/shahzar-shad-web-profile.png"
                  alt="Shahzar Shad — Founder of Launchieve"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Left side - Content */}
          <div className="flex flex-col gap-[30px] lg:max-w-[721px]">
            {/* Heading with decorative lines behind */}
            <div className="relative">
              <Image
                src="/images/about-us/person-lines.svg"
                alt=""
                width={819}
                height={138}
                className="absolute left-1/2 top-[-10px] -translate-x-1/2 pointer-events-none opacity-60"
              />
              <WordRevealText as="h2" className="relative font-display font-extrabold text-[30px] sm:text-[50px] md:text-[60px] leading-[1.1] uppercase">
                <span className="text-[#1C5AF9]">THE PERSON </span>
                <span className="text-white">BEHIND IT</span>
              </WordRevealText>
            </div>

            <WordRevealText as="p" className="font-body font-bold text-[20px] md:text-[30px] leading-[normal] md:leading-[28px] text-white">
              Shahzar Shad — Founder
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white max-w-[621px]">
              Shahzar has spent more than seven years working across product
              strategy, go-to-market execution, growth, and software
              development.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white max-w-[621px]">
              During that time he has worked alongside early-stage founders,
              operators, and companies generating eight-figure revenues —
              helping move ideas from concept to product and eventually to
              scale.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white max-w-[621px]">
              Before starting Launchieve, he built and supported multiple
              ventures across software, marketing, and product development.
              Those experiences exposed him to the patterns that quietly
              determine whether early-stage products succeed or fail.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white max-w-[621px]">
              Launchieve was built around that insight.
            </WordRevealText>

            <WordRevealText as="p" className="font-body font-medium text-[16px] md:text-[20px] leading-[normal] md:leading-[28px] text-white max-w-[621px]">
              A company designed to help founders move faster — with fewer
              wrong turns along the way
            </WordRevealText>
          </div>
        </div>
      </div>
    </section>
  );
}
