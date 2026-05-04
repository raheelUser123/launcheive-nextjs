import Image from "next/image";

export default function ThankyouHero() {
  return (
    <section className="relative h-[534px] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Lines background */}
      <div className="absolute -left-[198px] -top-[67px] w-[1998px] h-[1419px] pointer-events-none">
        <Image
          src="/images/contact-us/hero-lines.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Circle glow — center, opacity 15% */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1054px] h-[1054px] opacity-[0.15] pointer-events-none">
        <Image
          src="/images/contact-us/hero-circle.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="font-display font-extrabold text-[48px] sm:text-[60px] md:text-[70px] leading-[1.05] uppercase text-white mb-[24px] animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Thank <span className="text-[#1C5AF9]">you</span>.
        </h1>

        <p
          className="font-body font-medium text-[16px] md:text-[18px] leading-[30px] text-white max-w-[700px] mx-auto animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          We've received your submission and will be in touch shortly.
        </p>
      </div>
    </section>
  );
}
