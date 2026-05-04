export default function YouveDoneTheHardPart() {
  const features = [
    {
      label: "Solid Architecture",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="8" height="7" rx="1" />
          <rect x="14" y="3" width="8" height="7" rx="1" />
          <rect x="8" y="14" width="8" height="7" rx="1" />
          <path d="M6 10v2a2 2 0 002 2h0M18 10v2a2 2 0 01-2 2h0" />
          <circle cx="5" cy="6" r="1" fill="white" stroke="none" />
          <path d="M3 8h6M15 5h4M15 8h4" strokeWidth="0.8" />
          <circle cx="12" cy="17" r="1.5" strokeDasharray="1.5 1" />
        </svg>
      ),
    },
    {
      label: "Intuitive Design",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <text x="4.5" y="7.5" fill="white" fontSize="4" fontWeight="bold" stroke="none">UI/UX</text>
          <line x1="14" y1="5" x2="14" y2="7" strokeWidth="0.8" />
          <line x1="17" y1="5" x2="17" y2="7" strokeWidth="0.8" />
          <line x1="19" y1="5" x2="19" y2="7" strokeWidth="0.8" />
          <rect x="5" y="9" width="6" height="5" rx="0.5" />
          <rect x="13" y="9" width="6" height="2" rx="0.5" />
          <rect x="13" y="13" width="6" height="1" rx="0.5" />
          <line x1="5" y1="17" x2="11" y2="17" strokeWidth="0.8" />
          <line x1="5" y1="19" x2="8" y2="19" strokeWidth="0.8" />
          <rect x="13" y="16" width="6" height="4" rx="0.5" strokeDasharray="1.5 1" />
        </svg>
      ),
    },
    {
      label: "Invested Team",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="3" />
          <circle cx="5" cy="11" r="2.5" />
          <circle cx="19" cy="11" r="2.5" />
          <path d="M8 14c-2 0-5 1.5-5 4v1h6" />
          <path d="M16 14c2 0 5 1.5 5 4v1h-6" />
          <path d="M9 13c-1 1-2 2.5-2 4v2h10v-2c0-1.5-1-3-2-4" />
          <circle cx="12" cy="18" r="1.5" />
          <path d="M12 16.5v-0.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-theme-primary">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Illustration with connected circles */}
          <div className="animate-on-scroll-left relative h-[500px] hidden lg:flex items-center justify-start">
            {/* Vertical curved connector line */}
            <svg
              className="absolute left-[80px] top-[40px] w-[200px] h-[420px]"
              viewBox="0 0 200 420"
              fill="none"
            >
              <path
                d="M80 0 C80 80, 120 100, 80 180 C40 260, 120 280, 80 360 C60 400, 80 420, 80 420"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.15"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>

            {/* Feature 1 - Solid Architecture (top) */}
            <div className="absolute top-[20px] left-[24px]">
              <div className="flex items-center gap-[20px]">
                <div className="w-[90px] h-[90px] rounded-full border border-[#3B6BF7]/30 bg-[#0d1530]/60 flex items-center justify-center">
                  {features[0].icon}
                </div>
                {/* Label tag */}
                <div className="rounded-[6px] border border-white/10 bg-white/5 backdrop-blur-sm px-[14px] py-[6px]">
                  <p className="font-body font-medium text-[13px] text-white/80">
                    {features[0].label}
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Intuitive Design (middle) */}
            <div className="absolute top-[190px] left-[60px]">
              <div className="flex items-center gap-[20px]">
                <div className="w-[90px] h-[90px] rounded-full border border-[#3B6BF7]/30 bg-[#0d1530]/60 flex items-center justify-center">
                  {features[1].icon}
                </div>
                <div className="rounded-[6px] border border-white/10 bg-white/5 backdrop-blur-sm px-[14px] py-[6px]">
                  <p className="font-body font-medium text-[13px] text-white/80">
                    {features[1].label}
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 - Invested Team (bottom) */}
            <div className="absolute top-[350px] left-[24px]">
              <div className="flex items-center gap-[20px]">
                <div className="w-[90px] h-[90px] rounded-full border border-[#30a060]/30 bg-[#0d2018]/60 flex items-center justify-center">
                  {features[2].icon}
                </div>
                <div className="rounded-[6px] border border-white/10 bg-white/5 backdrop-blur-sm px-[14px] py-[6px]">
                  <p className="font-body font-medium text-[13px] text-white/80">
                    {features[2].label}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="animate-on-scroll-right flex flex-col gap-[28px]">
            <h2 className="font-display font-extrabold text-[32px] sm:text-[50px] md:text-[58px] leading-[100%] tracking-[0%] uppercase text-white">
              <span className="text-[#1E5CF9] italic">
                YOU&apos;VE DONE THE
                <br />
                HARD PART
              </span>{" "}
              — FIGURING OUT WHAT TO BUILD.
            </h2>

            <div className="flex flex-col gap-[20px]">
              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white/80">
                Now it needs to be built right.
              </p>

              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white/80">
                With architecture that won&apos;t need to be torn down in six
                months.
              </p>

              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white/80">
                With design users understand the first time.
              </p>

              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white/80">
                With a team invested in the outcome — not just the invoice.
              </p>

              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white/80">
                That&apos;s what we&apos;re here for.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-[12px]">
              <a
                href="https://calendly.com/launchieve/build-with-launchieve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-[40px] py-[16px] rounded-full bg-[#3B6BF7] hover:bg-[#2a5ae6] transition-colors font-body font-bold text-[16px] md:text-[18px] uppercase tracking-[0.05em] text-white"
              >
                BOOK A DISCOVERY CALL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
