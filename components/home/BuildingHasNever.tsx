"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function BuildingHasNever() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.7", "end 0.7"]);

  return (
    <section className="relative overflow-hidden bg-theme-primary py-12 md:py-24">
      <Image
        width={600}
        height={600}
        src="/images/home/hero/blur-glow.svg"
        alt=""
        className="pointer-events-none absolute -bottom-[300px] right-0 h-[600px] w-[600px] md:top-0 md:bottom-auto"
      />

      <div ref={scope} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-[24px] md:gap-[60px]">
            <div>
              <WordRevealText
                as="h2"

                className="max-w-[699px] font-display text-[32px] leading-[100%] font-extrabold uppercase tracking-[0%] text-white sm:text-[50px] md:text-[60px]"
              >
                <span className="text-[#1E5CF9]">Building</span> has never been
                easier. That&apos;s actually the problem.
              </WordRevealText>
            </div>

            <div className="flex max-w-[580px] flex-col gap-[20px]">
              <div className="flex flex-col gap-[8px]">
                <div>
                  <WordRevealText
                    as="p"

                    className="font-body text-[18px] leading-[27px] font-medium text-white md:text-[20px]"
                  >
                    <span className="font-bold">Lovable</span>.{" "}
                    <span className="font-bold">Bolt</span>.{" "}
                    <span className="font-bold">Cursor</span>.{" "}
                    <span className="font-bold">Replit</span>.{" "}
                    <span className="font-bold">Bubble</span>.{" "}
                    <span className="font-bold">Base44</span>.
                  </WordRevealText>
                </div>

                <div>
                  <WordRevealText
                    as="p"

                    className="font-body text-[16px] leading-[24px] font-medium text-white md:text-[18px]"
                  >
                    These tools are remarkable. They let you go from idea to
                    something clickable in hours.
                  </WordRevealText>
                </div>
              </div>

              <div>
                <WordRevealText
                  as="p"
                  className="font-body text-[16px] leading-[24px] font-medium text-white md:text-[18px]"
                >
                  But here&apos;s what nobody tells you.
                </WordRevealText>
              </div>

              <div>
                <WordRevealText
                  as="p"
                  className="font-body text-[16px] leading-[24px] font-medium text-white md:text-[18px]"
                >
                  A prototype isn&apos;t a product.
                  <br />
                  A working demo isn&apos;t a business.
                  <br />
                  And AI-generated code eventually breaks in ways most founders
                  can&apos;t debug.
                </WordRevealText>
              </div>

              <div>
                <WordRevealText
                  as="p"
                  className="font-body text-[16px] leading-[24px] font-medium text-white md:text-[18px]"
                >
                  Most founders hit a wall not because they lack ambition but
                  because they jumped into building before understanding what they
                  were actually building, and why.
                </WordRevealText>
              </div>
            </div>
          </div>

          <motion.div
            className="relative hidden h-[550px] items-center justify-center lg:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className="absolute inset-0"
              variants={{
                hidden: { opacity: 0, x: 72, y: 10, scale: 0.94 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <Image
                width={600}
                height={600}
                src="/images/home/hero/earth-globe.png"
                alt=""
                className="absolute inset-0 m-auto h-auto w-[600px] object-contain"
              />
            </motion.div>
            <motion.div
              className="relative z-10"
              variants={{
                hidden: { opacity: 0, x: 52, y: 8, scale: 0.96 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <Image
                width={550}
                height={550}
                src="/images/home/hero/ellipse-ring.svg"
                alt="Ellipse"
                className="h-auto w-[550px] object-contain"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 z-20"
              variants={{
                hidden: { opacity: 0, x: 36, y: 6, scale: 0.98 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <Image
                width={650}
                height={650}
                src="/images/home/hero/tech-tools-grid.svg"
                alt="Tech tools"
                className="absolute inset-0 m-auto h-auto w-[650px] object-contain"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 sm:mt-16 sm:flex-row sm:items-center sm:gap-[70px]">
          {[
            { num: "1", text: "You need more than code." },
            { num: "2", text: "You need clarity." },
          ].map((point) => (
            <div key={point.num} className="flex items-center gap-[16px]">
              <div className="relative h-[24px] w-[24px] shrink-0">
                <div className="absolute inset-0 rounded-full border border-white/40" />
                <p className="font-body absolute inset-0 flex items-center justify-center text-[14px] leading-[20px] font-normal text-white">
                  {point.num}
                </p>
              </div>
              <WordRevealText
                as="p"
                className="font-body text-[20px] leading-[27px] font-bold text-white md:text-[26px]"
              >
                {point.text}
              </WordRevealText>
            </div>
          ))}
        </div>

        <div
          className="relative mt-12 w-full overflow-hidden rounded-[20px] px-4 py-[20px] text-center md:px-6 md:py-[37px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.07) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-[20px]"
            style={{
              padding: "1px",
              background:
                "linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
            }}
          />
          <WordRevealText
            as="p"
            className="font-body relative text-[13px] leading-[20px] font-medium text-white md:text-[32px] md:leading-[27px] md:font-bold"
          >
            That&apos;s usually the moment founders reach out to us.
          </WordRevealText>
        </div>
      </div>
    </section>
  );
}
