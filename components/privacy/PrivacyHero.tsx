import Image from "next/image";

export default function PrivacyHero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden min-h-[320px] sm:min-h-[400px] md:min-h-[534px] bg-black">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/audit/hero-lines.svg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center -67px" }}
          priority
        />
      </div>

      {/* Radial circle glow */}
      <div className="absolute top-[-112px] left-1/2 -translate-x-[calc(50%-25px)] w-[1054px] h-[1054px] opacity-[0.15] pointer-events-none">
        <Image
          src="/images/audit/hero-circle.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="font-display font-extrabold text-[26px] sm:text-[46px] md:text-[70px] leading-[1.1] uppercase text-white animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          PRIVACY POLICY &amp;
          <br />
          COOKIE POLICY
        </h1>
      </div>
    </section>
  );
}
