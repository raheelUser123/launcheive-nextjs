export default function TheProcess() {
  const steps = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      title: "Discovery Call",
      desc: "We learn about your product, your current state, and where you want to go. No commitment required — just a real conversation.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          <circle cx="12" cy="12" r="7" strokeDasharray="2 2" />
        </svg>
      ),
      title: "Scope & Proposal",
      desc: "We come back with a clear scope, timeline, and engagement model recommendation. No vague estimates. No surprises later.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
          <path d="M9 6h6M9 10h6M9 14h2" />
          <rect x="8" y="5" width="8" height="6" rx="1" strokeDasharray="2 2" />
        </svg>
      ),
      title: "Build",
      desc: "We get to work. You stay informed without being overwhelmed. Regular updates, clear milestones, direct communication.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      title: "Launch & Beyond",
      desc: "We get to work. You stay informed without being overwhelmed. Regular updates, clear milestones, direct communication.",
      titleItalic: true,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-theme-primary">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-[60px] animate-on-scroll">
          <h2 className="font-display font-extrabold text-[32px] sm:text-[50px] md:text-[60px] leading-[100%] uppercase text-white">
            THE <span className="text-[#1E5CF9]">PROCESS</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[48px] lg:gap-0 mb-[60px]">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="animate-on-scroll flex flex-col items-center text-center relative w-full lg:max-w-[280px]"
            >
              {/* Dashed arrow connector (hidden on mobile, between items) */}
              {i < steps.length - 1 && (
                <svg
                  className="hidden lg:block absolute top-[36px] left-[calc(50%+44px)] w-[calc(100%-40px)] h-[40px]"
                  viewBox="0 0 200 40"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 30 Q100 -20 200 30"
                    stroke="white"
                    strokeWidth="1"
                    strokeDasharray="6 4"
                    strokeOpacity="0.3"
                    fill="none"
                  />
                  {/* Arrow tip */}
                  <path
                    d="M195 24 L200 30 L193 30"
                    stroke="white"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    fill="none"
                  />
                </svg>
              )}

              {/* Icon circle */}
              <div className="w-[72px] h-[72px] rounded-full border-2 border-[#3B6BF7]/50 bg-[#1a2a5a]/30 flex items-center justify-center mb-[20px]">
                {step.icon}
              </div>

              {/* Title */}
              <h3
                className={`font-body font-bold text-[18px] md:text-[20px] leading-[27px] text-white mb-[12px] ${step.titleItalic ? "italic" : ""
                  }`}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body font-normal text-[14px] md:text-[15px] leading-[22px] text-white/60 max-w-[260px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center animate-on-scroll">
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
    </section>
  );
}
