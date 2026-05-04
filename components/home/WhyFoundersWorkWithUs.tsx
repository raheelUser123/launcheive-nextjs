export default function WhyFoundersWorkWithUs() {
  const steps = [
    {
      num: "01",
      title: "We Pick Up Where You Are",
      desc: "We learn your product before we touch the brief.",
      gradient: "from-[#2a2a3a] to-[#1a1a2a]",
    },
    {
      num: "02",
      title: "Built Exactly As Agreed",
      desc: "What gets scoped is what gets built. No drift, no interpretation gaps.",
      gradient: "from-[#2a2840] to-[#1e1c30]",
    },
    {
      num: "03",
      title: "Always In The Loop",
      desc: "Clear milestones, direct communication. No chasing, no silence.",
      gradient: "from-[#1a2a20] to-[#152218]",
    },
    {
      num: "04",
      title: "Live On Every Platform",
      desc: "Web, mobile, App Store, Google Play. Fully deployed — not just ready to deploy.",
      gradient: "from-[#1a2820] to-[#14201a]",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-theme-primary">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Content */}
          <div className="animate-on-scroll-left flex flex-col gap-[40px]">
            <h2 className="font-display font-extrabold text-[32px] sm:text-[50px] md:text-[60px] leading-[100%] tracking-[0%] uppercase text-white">
              WHY{" "}
              <span className="text-[#1E5CF9]">FOUNDERS</span>
              <br />
              WORK WITH US
            </h2>

            <div className="flex flex-col gap-[20px] max-w-[580px]">
              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white/80">
                Most development agencies will take your brief and start
                building.
              </p>

              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white/80">
                We won&apos;t — not until we understand the product.
              </p>

              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white/80">
                The same team that runs our Premium Audits is the team that
                builds. That means no handoff gaps, no briefs lost in
                translation, and no developers building something the product
                strategist wouldn&apos;t have signed off on.
              </p>

              <p className="font-body font-medium text-[16px] md:text-[18px] leading-[28px] text-white/80">
                You get a team that thinks about your product the way you do —
                and stays accountable to it throughout.
              </p>
            </div>
          </div>

          {/* Right side - Timeline */}
          <div className="animate-on-scroll-right flex flex-col items-center">
            {/* Timeline */}
            <div className="relative flex flex-col items-start w-full max-w-[480px]">
              {steps.map((step, i) => (
                <div key={step.num} className="flex items-start w-full">
                  {/* Circle + line column */}
                  <div className="flex flex-col items-center shrink-0">
                    {/* Top connector line */}
                    {i > 0 && (
                      <div className="w-[1px] h-[24px] bg-white/20" />
                    )}
                    {i === 0 && <div className="h-[24px]" />}

                    {/* Circle */}
                    <div className="w-[56px] h-[56px] rounded-full border-2 border-white/20 flex items-center justify-center bg-[#0a0a14] shrink-0">
                      <span className="font-display font-bold text-[18px] text-white">
                        {step.num}
                      </span>
                    </div>

                    {/* Bottom connector line */}
                    {i < steps.length - 1 && (
                      <div className="w-[1px] h-[24px] bg-white/20" />
                    )}
                    {i === steps.length - 1 && <div className="h-[24px]" />}
                  </div>

                  {/* Horizontal line + Card */}
                  <div className="flex items-center flex-1 self-center mt-0"
                    style={{ marginTop: i === 0 ? "24px" : "0" }}
                  >
                    <div className="w-[24px] h-[1px] bg-white/20 shrink-0" />
                    <div
                      className={`flex-1 rounded-[12px] border border-white/10 px-[20px] py-[14px] bg-gradient-to-br ${step.gradient}`}
                    >
                      <p className="font-body font-bold text-[14px] md:text-[16px] leading-[22px] text-white">
                        {step.title}
                      </p>
                      <p className="font-body font-normal text-[12px] md:text-[13px] leading-[18px] text-white/60 mt-[4px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom badges */}
            <div className="flex flex-col sm:flex-row gap-[12px] mt-[32px] w-full max-w-[480px] justify-center">
              <div className="rounded-[8px] border border-white/15 px-[20px] py-[12px] bg-gradient-to-r from-[#1a1a2a] to-[#0f0f1a] text-center">
                <p className="font-body font-medium text-[13px] md:text-[14px] text-white/70">
                  Most agencies: skip to step 3
                </p>
              </div>
              <div className="rounded-[8px] border border-white/15 px-[20px] py-[12px] bg-gradient-to-r from-[#1a1a2a] to-[#1a1a30] text-center">
                <p className="font-body font-medium text-[13px] md:text-[14px] text-white/70">
                  We start at step 1 — always
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
