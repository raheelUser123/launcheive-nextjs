import Image from "next/image";

export default function PrivacyContent() {
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
          {/* 1. Introduction */}
          <PolicySection number={1} title="INTRODUCTION">
            <p>
              Launchieve, Inc. (EIN: 32-0833811) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              protect your personal information when you visit Launchieve.com or
              use our services.
            </p>
            <p className="mt-4">
              By using our website, you agree to the collection and use of
              information as described in this policy.
            </p>
          </PolicySection>

          {/* 2. Information We Collect */}
          <PolicySection number={2} title="INFORMATION WE COLLECT">
            <p>We collect the following types of information:</p>

            <p className="mt-4">
              <span className="font-bold text-[#1C5AF9] text-[20px] md:text-[24px]">
                Information you provide directly:
              </span>
            </p>
            <ul className="list-disc pl-[30px] mt-3 flex flex-col gap-1">
              <li>
                Name and email address submitted via the homepage inquiry form
              </li>
              <li>
                Name, email, product details, and responses submitted via the
                Premium Audit intake form
              </li>
              <li>
                Name, email, subject, and message submitted via the Contact page
                form
              </li>
              <li>
                Payment information processed through Stripe — we do not store
                card details directly
              </li>
            </ul>

            <p className="mt-4">
              <span className="font-bold text-[#1C5AF9] text-[20px] md:text-[24px]">
                Information collected automatically:
              </span>
            </p>
            <ul className="list-disc pl-[30px] mt-3 flex flex-col gap-1">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on site</li>
              <li>Referral source</li>
              <li>Device and operating system information</li>
            </ul>

            <p className="mt-4">
              This information is collected through cookies and analytics tools
              as described in the Cookie Policy section below.
            </p>
          </PolicySection>

          {/* 3. How We Use Your Information */}
          <PolicySection number={3} title="HOW WE USE YOUR INFORMATION">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-[30px] mt-3 flex flex-col gap-1">
              <li>Deliver the Premium Audit and communicate results</li>
              <li>
                Respond to inquiries submitted via the homepage or contact form
              </li>
              <li>Process payments securely through Stripe</li>
              <li>Send confirmation and acknowledgement emails</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or trade your personal information to third
              parties.
            </p>
          </PolicySection>

          {/* 4. Data Storage & Security */}
          <PolicySection number={4} title="DATA STORAGE & SECURITY">
            <p>
              Your data is stored securely and accessed only by authorized
              members of the Launchieve, Inc. team. We take reasonable technical
              and organizational measures to protect your information from
              unauthorized access, loss, or misuse.
            </p>
            <p className="mt-4">
              Payment data is handled entirely by Stripe and is subject to
              Stripe&apos;s own privacy and security standards. We do not store
              credit card information on our systems.
            </p>
          </PolicySection>

          {/* 5. Third-Party Services */}
          <PolicySection number={5} title="THIRD-PARTY SERVICES">
            <p>
              We use the following third-party tools that may collect or process
              your data:
            </p>
            <ul className="list-disc pl-[30px] mt-3 flex flex-col gap-1">
              <li>
                <span className="font-bold text-[#1C5AF9]">Stripe</span> —
                payment processing
              </li>
              <li>
                <span className="font-bold text-[#1C5AF9]">Calendly</span> —
                discovery call booking
              </li>
              <li>
                <span className="font-bold text-[#1C5AF9]">
                  Google Analytics
                </span>{" "}
                — website usage analytics
              </li>
              <li>
                <span className="font-bold text-[#1C5AF9]">Framer</span> —
                website hosting
              </li>
            </ul>
            <p className="mt-4">
              Each of these services operates under their own privacy policies.
              We encourage you to review them independently.
            </p>
          </PolicySection>

          {/* 6. Your Rights */}
          <PolicySection number={6} title="YOUR RIGHTS">
            <p>You have the right to:</p>
            <ul className="list-disc pl-[30px] mt-3 flex flex-col gap-1">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>
                Request that we stop processing your data in certain
                circumstances
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at
              info@Launchieve.com.
            </p>
          </PolicySection>

          {/* 7. Data Retention */}
          <PolicySection number={7} title="DATA RETENTION">
            <p>
              We retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this policy or as required by law.
              Audit-related data is retained for a minimum of 12 months
              following the completion of the engagement.
            </p>
          </PolicySection>

          {/* 8. Children's Privacy */}
          <PolicySection number={8} title="CHILDREN'S PRIVACY">
            <p>
              Our website and services are not directed at individuals under the
              age of 18. We do not knowingly collect personal information from
              minors.
            </p>
          </PolicySection>

          {/* 9. Cookie Policy */}
          <PolicySection number={9} title="COOKIE POLICY">
            <p>
              <span className="font-bold text-[#1C5AF9] text-[20px] md:text-[24px]">
                What are cookies?
              </span>{" "}
              Cookies are small text files stored on your device when you visit a
              website. They help the site function properly and provide us with
              information about how visitors use the site.
            </p>

            <p className="mt-4">
              <span className="font-bold text-[#1C5AF9] text-[20px] md:text-[24px]">
                What cookies do we use?
              </span>
            </p>
            <ul className="list-disc pl-[30px] mt-3 flex flex-col gap-2">
              <li>
                <span className="font-bold text-[#1C5AF9]">
                  Essential cookies
                </span>{" "}
                — required for the website to function. These cannot be
                disabled.
              </li>
              <li>
                <span className="font-bold text-[#1C5AF9]">
                  Analytics cookies
                </span>{" "}
                — used to understand how visitors interact with our site (via
                Google Analytics). These are anonymous and help us improve the
                experience.
              </li>
              <li>
                <span className="font-bold text-[#1C5AF9]">
                  Preference cookies
                </span>{" "}
                — used to remember your dark/light mode selection during your
                current session.
              </li>
            </ul>

            <p className="mt-4">
              We do not use advertising or tracking cookies.
            </p>

            <p className="mt-4">
              <span className="font-bold text-white">Managing cookies:</span>{" "}
              You can control and disable cookies through your browser settings.
              Note that disabling certain cookies may affect the functionality of
              the website.
            </p>

            <p className="mt-4">
              By continuing to use Launchieve.com, you consent to our use of
              cookies as described above.
            </p>
          </PolicySection>

          {/* 10. Changes to This Policy */}
          <PolicySection number={10} title="CHANGES TO THIS POLICY">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated effective date. Continued
              use of our website after changes are posted constitutes acceptance
              of the revised policy.
            </p>
          </PolicySection>

          {/* 11. Contact */}
          <PolicySection number={11} title="CONTACT" last>
            <p>
              For privacy-related questions or requests, contact us at:
            </p>
            <div className="mt-4 flex flex-col gap-1">
              <p>info@launchieve.com</p>
              <p>(737) 387-6629</p>
              <p>131 Continental Dr, Newark, DE 19713, USA</p>
            </div>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

function PolicySection({
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
