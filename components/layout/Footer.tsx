import Link from "next/link";
import Image from "next/image";
import FreeAuditButton from "../free-audit/FreeAuditButton";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Premium Audit", href: "/premium-audit" },
  { label: "Built With Us", href: "/built-with-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy & Cookie Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      {/* Main content */}
      <div className="backdrop-blur-[30px] rounded-t-[30px] px-6 md:px-[48px] lg:px-28 pt-[30px] pb-[60px] md:pb-[96px] flex flex-col md:flex-row items-start justify-between gap-[40px]">
        {/* Left - Logo & text */}
        <div className="flex flex-col gap-[16px] max-w-[426px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Launchieve"
              width={178}
              height={66}
              className="object-contain h-auto"
            />
          </Link>

          <p className="font-body font-medium text-[14px] leading-[28px] text-white max-w-[348px]">
            We help founders move from idea to real product with clarity at
            every step
          </p>

          <p className="font-body text-[14px] leading-[28px] text-white">
            Not sure if this is right for you?{" "}
            <FreeAuditButton
              className="font-extrabold text-[16px] text-[#1C5AF9] underline"
            >
              Submit anyway
            </FreeAuditButton>.{" "}
            The worst outcome is you get a free second opinion.
          </p>
        </div>

        {/* Right - Menu columns */}
        <div className="flex flex-col sm:flex-row items-start justify-between flex-1 w-full md:max-w-[720px] gap-[32px] sm:gap-[16px] md:gap-0">
          {/* Company */}
          <div className="flex flex-col">
            <div className="flex items-center gap-[10px] px-[10px] py-[10px]">
              <div className="w-0 h-[20px] border-l-2 border-[#1C5AF9]" />
              <span className="font-display font-semibold text-[14px] leading-[20px] text-white">
                Company
              </span>
            </div>
            {companyLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-[20px] py-[10px] font-body font-normal text-[16px] leading-[20px] text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col">
            <div className="flex items-center gap-[10px] p-[10px]">
              <div className="w-0 h-[20px] border-l-2 border-[#1C5AF9]" />
              <span className="font-display font-semibold text-[14px] leading-[20px] text-white">
                Legal
              </span>
            </div>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-[20px] py-[10px] font-body font-normal text-[16px] leading-[20px] text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[10px] pr-[20px] py-[10px]">
              <div className="w-0 h-[20px] border-l-2 border-[#1C5AF9]" />
              <span className="font-body font-medium text-[14px] leading-[20px] text-white">
                FOLLOW US
              </span>
            </div>
            <div className="flex items-center gap-[10px]">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/launchieve"
                target="_blank"
                className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center"
                style={{
                  boxShadow:
                    "0px 1px 0px rgba(0,0,0,0.05), 0px 4px 4px rgba(0,0,0,0.05), 0px 10px 10px rgba(0,0,0,0.1)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                    fill="black"
                  />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/launchieve"
                target="_blank"
                className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center"
                style={{
                  boxShadow:
                    "0px 1px 0px rgba(0,0,0,0.05), 0px 4px 4px rgba(0,0,0,0.05), 0px 10px 10px rgba(0,0,0,0.1)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M11.025 0.65625H13.172L8.482 6.03025L14 13.3442H9.68L6.294 8.90925L2.424 13.3442H0.275L5.291 7.59425L0 0.65725H4.43L7.486 4.71025L11.025 0.65625ZM10.27 12.0562H11.46L3.78 1.87725H2.504L10.27 12.0562Z"
                    fill="black"
                  />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/launchieve/"
                target="_blank"
                className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center"
                style={{
                  boxShadow:
                    "0px 1px 0px rgba(0,0,0,0.05), 0px 4px 4px rgba(0,0,0,0.05), 0px 10px 10px rgba(0,0,0,0.1)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="black" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/launchieve"
                target="_blank"
                className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center"
                style={{
                  boxShadow:
                    "0px 1px 0px rgba(0,0,0,0.05), 0px 4px 4px rgba(0,0,0,0.05), 0px 10px 10px rgba(0,0,0,0.1)",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 640 640"><path fill="rgb(0, 0, 0)" d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#1C5AF9] px-6 md:px-[48px] lg:px-[96px] py-[20px] flex items-center justify-center">
        <p className="font-body font-semibold text-[12px] md:text-[16px] leading-[20px] text-white">
          © 2026 Launchieve. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
