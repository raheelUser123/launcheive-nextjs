import Image from "next/image";

export default function AboutUsHero() {
  return (
    <section className="relative h-[488px] lg:h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-16 lg:pt-0">
      {/* Grid lines background */}
      <div className="absolute -translate-x-1/2 left-1/2 top-[-67px] w-[1011px] h-[773px] md:w-[1998px] md:h-[1419px] pointer-events-none">
        <Image
          src="/images/about-us/hero-lines.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Circle glow — center, opacity 15% */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1054px] h-[1054px] opacity-[0.15] pointer-events-none">
        <Image
          src="/images/about-us/hero-circle.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[350px] md:max-w-[800px] lg:max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="font-display font-extrabold text-[30px] md:text-[70px] leading-[1.1] uppercase text-white mb-[12px] md:mb-[28px] animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          WE HELP FOUNDERS TURN{" "}
          <span className="text-[#1C5AF9]">
            AI-GENERATED IDEAS AND PROTOTYPES
          </span>{" "}
          INTO REAL, WORKING PRODUCTS.
        </h1>

        <p
          className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-white max-w-[350px] md:max-w-[700px] mx-auto animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Not by jumping straight into code — but by starting where it actually
          matters: understanding what you&apos;re building and why.
        </p>
      </div>
    </section>
  );
}
