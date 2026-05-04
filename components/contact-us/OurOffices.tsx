"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

const offices = [
  {
    city: "United States — Texas",
    address: [
      "1100 West Trinity Mills Road",
      "Carrollton, TX 75006 United States",
    ],
    skyline: "/images/contact-us/skyline-texas.svg",
    mb: "-mb-[40px]",
  },
  {
    city: "United States — Delaware",
    address: ["131 Continental Dr", "Newark, DE 19713 United States"],
    skyline: "/images/contact-us/skyline-delaware.svg",
    mb: "-mb-[40px]",
  },
  {
    city: "Canada",
    address: ["757 Victoria Park Avenue", "Scarborough, ON M4C 5N8 Canada"],
    skyline: "canada-layers",
    mb: "-mb-[40px]",
  },
];

export default function OurOffices() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.7", "end 0.7"]);

  return (
    <section className="relative py-8 pb-16 overflow-hidden bg-black">
      {/* Blue gradient blur — center bottom */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[-100px] md:top-auto md:bottom-[-100px] w-[600px] h-[600px] mix-blend-screen opacity-20 pointer-events-none blur-3xl">
        <Image
          src="/images/about-us/blur-outer.svg"
          alt=""
          fill
          className="object-contain scale-[1.5]"
        />
      </div>

      <div ref={scope} className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: heading + contact */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-[30px]">
          {/* OUR OFFICES heading */}
          <div className="relative">
            <Image
              src="/images/contact-us/offices-lines.svg"
              alt=""
              width={819}
              height={138}
              className="absolute left-1/2 top-[-10px] -translate-x-1/2 pointer-events-none opacity-60"
            />
            <WordRevealText
              as="h2"
              className="relative font-display font-extrabold text-[30px] sm:text-[50px] md:text-[60px] leading-[1.1] uppercase whitespace-nowrap"
            >
              <span className="text-white">OUR </span>
              <span className="text-[#1C5AF9]">OFFICES</span>
            </WordRevealText>
          </div>

          {/* Get in touch - desktop only */}
          <div className="hidden lg:block">
            <WordRevealText
              as="p"
              className="font-display font-extrabold text-[24px] uppercase text-white mb-[16px]"
            >
              GET IN TOUCH
            </WordRevealText>
            <div className="flex gap-[56px]">
              {/* Email */}
              <div className="flex flex-col gap-[8px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#2670E9] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                </div>
                <WordRevealText
                  as="p"
                  className="font-display font-extrabold text-[18px] text-[#2670E9] capitalize"
                >
                  Email
                </WordRevealText>
                <WordRevealText
                  as="p"
                  className="font-body font-medium text-[16px] leading-[24px] text-white"
                >
                  <a
                    href="mailto:info@launchieve.com"
                    className="hover:text-[#2670E9] transition-colors"
                  >
                    info@launchieve.com
                  </a>
                </WordRevealText>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-[8px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#2670E9] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <WordRevealText
                  as="p"
                  className="font-display font-extrabold text-[18px] text-[#2670E9] capitalize"
                >
                  Phone
                </WordRevealText>
                <WordRevealText
                  as="p"
                  className="font-body font-medium text-[16px] leading-[24px] text-white"
                >
                  <a
                    href="tel:+18323508331"
                    className="hover:text-[#2670E9] transition-colors"
                  >
                    +1 (832) 350-8331
                  </a>
                </WordRevealText>
              </div>
            </div>
          </div>
        </div>

        {/* Office cards with skylines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {offices.map((office) => (
            <div
              key={office.city}
              className="animate-on-scroll flex flex-col items-center text-center"
            >
              {/* Skyline */}
              <div className={`relative w-full h-[220px] ${office.mb}`}>
                {office.skyline === "canada-layers" ? (
                  <>
                    <div className="absolute bottom-[25%] left-[10%] right-[10%] top-[25%]">
                      <Image
                        src="/images/contact-us/skyline-canada-fg.svg"
                        alt=""
                        fill
                        className="object-contain object-bottom"
                      />
                    </div>
                    <div className="absolute bottom-[25%] left-[17%] right-[11%] top-[41%]">
                      <Image
                        src="/images/contact-us/skyline-canada-mid.svg"
                        alt=""
                        fill
                        className="object-contain object-bottom"
                      />
                    </div>
                    <div className="absolute bottom-[25%] left-[10%] right-[10%] top-[48%]">
                      <Image
                        src="/images/contact-us/skyline-canada-bg.svg"
                        alt=""
                        fill
                        className="object-contain object-bottom"
                      />
                    </div>
                    <div className="absolute bottom-[25%] left-[8%] right-[8%] h-[3px]">
                      <Image
                        src="/images/contact-us/skyline-canada-ground.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </>
                ) : (
                  <Image
                    src={office.skyline}
                    alt={office.city}
                    fill
                    className="object-contain object-bottom"
                  />
                )}
              </div>

              {/* City name */}
              <WordRevealText
                as="p"
                className="font-display font-extrabold text-[18px] text-[#2670E9] capitalize mt-[16px] mb-[8px]"
              >
                {office.city}
              </WordRevealText>

              {/* Address */}
              {office.address.map((line) => (
                <WordRevealText
                  key={line}
                  as="p"
                  className="font-body font-semibold text-[16px] leading-[24px] text-white"
                >
                  {line}
                </WordRevealText>
              ))}
            </div>
          ))}
        </div>

        {/* Get in touch - mobile only */}
        <div className="lg:hidden mt-[40px]">
          <WordRevealText
            as="p"
            className="font-display font-extrabold text-[24px] uppercase text-white mb-[16px]"
          >
            GET IN TOUCH
          </WordRevealText>
          <div className="flex gap-[56px] md:flex-row flex-col justify-center items-center">
            <div className="flex md:items-start items-center flex-col gap-[8px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#2670E9] flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
              </div>
              <WordRevealText
                as="p"
                className="font-display font-extrabold text-[18px] text-[#2670E9] capitalize"
              >
                Email
              </WordRevealText>
              <WordRevealText
                as="p"
                className="font-body font-medium text-[16px] leading-[24px] text-white"
              >
                <a
                  href="mailto:info@launchieve.com"
                  className="hover:text-[#2670E9] transition-colors"
                >
                  info@launchieve.com
                </a>
              </WordRevealText>
            </div>
            <div className="flex md:items-start items-center flex-col gap-[8px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#2670E9] flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <WordRevealText
                as="p"
                className="font-display font-extrabold text-[18px] text-[#2670E9] capitalize"
              >
                Phone
              </WordRevealText>
              <WordRevealText
                as="p"
                className="font-body font-medium text-[16px] leading-[24px] text-white"
              >
                <a
                  href="tel:+18323508331"
                  className="hover:text-[#2670E9] transition-colors"
                >
                  +1 (832) 350-8331
                </a>
              </WordRevealText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
