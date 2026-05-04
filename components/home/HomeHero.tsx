"use client";

import FreeAuditButton from "@/components/free-audit/FreeAuditButton";

export default function HomeHero() {
  return (
    <section className="relative h-[592px] lg:h-screen flex flex-col items-center justify-center overflow-hidden pt-16 lg:pt-0">
      {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/home/hero/decorative-lines.svg')" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Headline */}
          <h1
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 mt-4 md:mt-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-theme-primary">YOU BUILT SOMETHING</span>
            <br className="md:block hidden" />
            <span className="text-theme-primary"> WITH AI. </span>
            <span className="text-gradient-blue">NOW WHAT?</span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-body font-medium text-[16px] md:text-[20px] leading-[26px] md:leading-[30px] tracking-[0%] text-white max-w-[700px] mx-auto mb-4 text-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Most founders can spin up a prototype in a weekend. Very few know what
            to actually do next.
          </p>
          <p
            className="font-body font-medium text-[16px] md:text-[20px] leading-[26px] md:leading-[30px] tracking-[0%] text-white max-w-[700px] mx-auto mb-10 text-center animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            We help founders turn AI-generated ideas and prototypes into real,
            working products — starting with clarity, not code.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <FreeAuditButton
              className="h-[58px] rounded-[80px] bg-[#1C5AF9] hover:bg-brand-blue-light text-white font-display font-bold text-[14px] md:text-[16px] leading-[40px] tracking-[0%] uppercase text-center whitespace-nowrap px-[30px] md:px-[50px] py-[20px] inline-flex items-center justify-center gap-[10px] transition-all duration-200 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-0.5"
            >
              Submit your idea for review
            </FreeAuditButton>
          </div>
      </div>
    </section>
  );
}
