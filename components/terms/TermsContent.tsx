import Image from "next/image";

export default function TermsContent() {
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
          {/* 1. Company Information */}
          <TermsSection number={1} title="COMPANY INFORMATION">
            <p>launchieve, Inc. offers the following services:</p>
            <ul className="list-disc pl-[30px] mt-3 flex flex-col gap-1">
              <li>
                <span className="font-bold text-[#1C5AF9]">Company Name:</span>{" "}
                Launchieve
              </li>
              <li>
                <span className="font-bold text-[#1C5AF9]">EIN:</span>{" "}
                32-0833811
              </li>
              <li>
                <span className="font-bold text-[#1C5AF9]">
                  Registered Address:
                </span>{" "}
                131 Continental Dr, Newark, DE 19713, USA
              </li>
              <li>
                <span className="font-bold text-[#1C5AF9]">Email:</span>{" "}
                info@launchieve.com
              </li>
              <li>
                <span className="font-bold text-[#1C5AF9]">Phone:</span> (737)
                387-6629
              </li>
            </ul>
            <p className="mt-4">
              By accessing our website or purchasing any service, you agree to
              be bound by these Terms &amp; Conditions. If you do not agree,
              please do not use our website or services.
            </p>
          </TermsSection>

          {/* 2. Services */}
          <TermsSection number={2} title="SERVICES">
            <p>launchieve, Inc. offers the following services:</p>
            <p className="mt-4">
              <span className="font-bold text-[#1C5AF9] text-[20px] md:text-[24px]">
                Premium Audit:
              </span>{" "}
              A structured, written review of your product idea or prototype,
              delivered within 5 working days of payment and completed intake
              form submission. Priced at $149 (fixed).
            </p>
            <p className="mt-4">
              <span className="font-bold text-[#1C5AF9] text-[20px] md:text-[24px]">
                Build With Us:{" "}
              </span>
              (Development Support) Custom software development services
              including product design, web applications, mobile applications,
              backend and API development, DevOps, deployment, and no-code to
              real code migrations. Scope, timeline, and pricing are agreed upon
              individually for each engagement.
            </p>
          </TermsSection>

          {/* 3. Purchases & Payments */}
          <TermsSection number={3} title="PURCHASES & PAYMENTS">
            <p>
              All payments are processed securely through Stripe. By completing
              a purchase, you confirm that you are authorized to use the payment
              method provided.
            </p>
            <p className="mt-4">
              For the Premium Audit, payment of $149 is required in full before
              work begins. The audit process starts only after both payment and
              the completed intake form have been received.
            </p>
            <p className="mt-4">
              For Development Support engagements, payment terms are outlined in
              a separate agreement or proposal provided to the client before
              work begins.
            </p>
          </TermsSection>

          {/* 4. Refund Policy */}
          <TermsSection number={4} title="REFUND POLICY">
            <p>
              Please refer to our Refund Policy page for full details. In
              summary:
            </p>
            <ul className="list-disc pl-[30px] mt-3 flex flex-col gap-2">
              <li>
                The Premium Audit is non-refundable once the audit has
                commenced.
              </li>
              <li>
                If launchieve, Inc. fails to deliver the Premium Audit within 5
                working days of receiving payment and a completed intake form, a
                full refund will be issued.
              </li>
              <li>
                Development Support engagements are governed by the refund terms
                outlined in the individual client agreement.
              </li>
            </ul>
          </TermsSection>

          {/* 5. Intellectual Property */}
          <TermsSection number={5} title="INTELLECTUAL PROPERTY">
            <p>
              All content on launchieve — including text, design, graphics, and
              branding — is the property of launchieve, Inc. and may not be
              copied, reproduced, or distributed without prior written
              permission.
            </p>
            <p className="mt-4">
              Work produced for clients under Development Support engagements
              remains the property of the client upon full payment, as outlined
              in the individual client agreement.
            </p>
          </TermsSection>

          {/* 6. Confidentiality */}
          <TermsSection number={6} title="CONFIDENTIALITY">
            <p>
              Any information shared with launchieve, Inc. during the audit
              intake process or development engagement will be treated as
              confidential and will not be shared with third parties without
              your consent, except where required by law.
            </p>
          </TermsSection>

          {/* 7. Limitation of Liability */}
          <TermsSection number={7} title="LIMITATION OF LIABILITY">
            <p>
              launchieve, Inc. provides the Premium Audit as an advisory
              service. Audit findings and recommendations are based on our
              professional assessment and do not constitute a guarantee of
              business success or product viability.
            </p>
            <p className="mt-4">
              To the fullest extent permitted by law, launchieve, Inc. shall not
              be liable for any indirect, incidental, or consequential damages
              arising from the use of our services or website.
            </p>
          </TermsSection>

          {/* 8. Disclaimer */}
          <TermsSection number={8} title="DISCLAIMER">
            <p>
              Our website and services are provided on an &quot;as is&quot;
              basis. We make no warranties, expressed or implied, regarding the
              accuracy or completeness of any information provided.
            </p>
          </TermsSection>

          {/* 9. Governing Law */}
          <TermsSection number={9} title="GOVERNING LAW">
            <p>
              These Terms &amp; Conditions are governed by and construed in
              accordance with the laws of the State of Delaware, United States,
              without regard to its conflict of law provisions.
            </p>
          </TermsSection>

          {/* 10. Changes to These Terms */}
          <TermsSection number={10} title="CHANGES TO THESE TERMS">
            <p>
              We reserve the right to update these Terms &amp; Conditions at any
              time. Changes will be posted on this page with an updated
              effective date. Continued use of our website or services after
              changes are posted constitutes acceptance of the revised terms.
            </p>
          </TermsSection>

          {/* 11. Contact */}
          <TermsSection number={11} title="CONTACT" last>
            <p>
              For questions about these Terms &amp; Conditions, please contact
              us at:
            </p>
            <div className="mt-4 flex flex-col gap-1">
              <p>info@launchieve.com</p>
              <p>(737) 387-6629</p>
              <p>131 Continental Dr, Newark, DE 19713, USA</p>
            </div>
          </TermsSection>
        </div>
      </div>
    </section>
  );
}

function TermsSection({
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
