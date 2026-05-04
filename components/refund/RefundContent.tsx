import Image from "next/image";

export default function RefundContent() {
  return (
    <section className="relative py-[30px] bg-black overflow-hidden">
      {/* Blue blur background — centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[765px] h-[765px] mix-blend-screen opacity-40 pointer-events-none">
        <Image
          src="/images/about-us/blur-outer.svg"
          alt=""
          fill
          className="object-contain scale-[1.5]"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[704px] h-[704px] mix-blend-screen opacity-40 pointer-events-none">
        <Image
          src="/images/about-us/blur-inner.png"
          alt=""
          fill
          className="object-contain scale-[1.7]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-[20px] md:gap-[30px]">
          {/* 1. Overview */}
          <RefundSection number={1} title="OVERVIEW">
            <p>
              This Refund Policy applies to all services purchased from
              launchieve, Inc. (EIN: 32-0833811) through launchieve.com. By
              completing a purchase, you agree to the terms outlined below.
            </p>
          </RefundSection>

          {/* 2. Premium Audit */}
          <RefundSection number={2} title="PREMIUM AUDIT">
            <p className="mb-4">
              <span className="font-bold text-[#1C5AF9] text-[20px] md:text-[24px]">
                No Refunds Once Work Has Commenced
              </span>
            </p>
            <p>
              The Premium Audit is a professional service that begins
              immediately upon receipt of both your payment and completed intake
              form. Due to the time and expertise involved in preparing your
              audit report, all sales are final once the audit process has
              started.
            </p>
            <p className="mt-4">
              We strongly encourage you to review the full details of the
              Premium Audit before purchasing. If you have questions before
              buying, please contact us at info@launchieve.com.
            </p>

            <h4 className="font-display font-extrabold text-[18px] md:text-[20px] uppercase text-white mt-6 mb-3">
              LATE DELIVERY REFUND
            </h4>
            <p>
              We are committed to delivering your audit report within 5 working
              days of receiving your payment and completed intake form. If we
              fail to deliver within this timeframe for any reason within our
              control, you are entitled to a full refund of $149.
            </p>
            <p className="mt-4">
              To request a late delivery refund, contact us at
              info@launchieve.com with your name, email, and order details.
            </p>

            <h4 className="font-display font-extrabold text-[18px] md:text-[20px] uppercase text-white mt-6 mb-3">
              NON-DELIVERY
            </h4>
            <p>
              If you complete payment but do not receive a confirmation email
              within 24 hours, please contact us immediately at
              info@launchieve.com. We will investigate and resolve the issue
              promptly.
            </p>
          </RefundSection>

          {/* 3. Development Support Engagements */}
          <RefundSection number={3} title="DEVELOPMENT SUPPORT ENGAGEMENTS">
            <p>
              Refund terms for Build With Us projects are outlined individually
              in each client agreement or proposal. No general refund policy
              applies to custom development engagements — terms are agreed upon
              in writing before work begins.
            </p>
          </RefundSection>

          {/* 4. Payment Disputes */}
          <RefundSection number={4} title="PAYMENT DISPUTES">
            <p>
              We encourage clients to contact us directly before initiating a
              chargeback or payment dispute. Most issues can be resolved quickly
              by reaching out to info@launchieve.com. Initiating a chargeback
              without prior contact may result in suspension of services.
            </p>
          </RefundSection>

          {/* 5. Contact */}
          <RefundSection number={5} title="CONTACT" last>
            <p>
              For refund requests or questions about this policy, contact us at:
            </p>
            <div className="mt-4 flex flex-col gap-1">
              <p>info@launchieve.com</p>
              <p>(737) 387-6629</p>
              <p>131 Continental Dr, Newark, DE 19713, USA</p>
            </div>
          </RefundSection>
        </div>
      </div>
    </section>
  );
}

function RefundSection({
  number,
  title,
  children,
  last,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div>
      <h2 className="font-display font-extrabold text-[22px] sm:text-[28px] md:text-[40px] leading-[normal] uppercase text-white mb-[12px] md:mb-[16px]">
        {number}. {title}
      </h2>
      <div className="font-body font-medium text-[14px] sm:text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-white">
        {children}
      </div>
      {!last && <div className="h-px bg-white/10 mt-[20px] md:mt-[30px]" />}
    </div>
  );
}
