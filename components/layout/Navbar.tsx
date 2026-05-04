"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { useFreeAuditModal } from "@/components/free-audit/FreeAuditModalProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Premium Audit", href: "/premium-audit" },
  { label: "Built With Us", href: "/built-with-us" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

function CelestialToggle({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="relative w-[64px] h-[38px] rounded-full cursor-pointer border-0 p-0 shrink-0 transition-all duration-500"
      style={{
        background: isDark
          ? "#0E314C"
          : "linear-gradient(135deg, #74b9ff 0%, #a29bfe 100%)",
        boxShadow: isDark
          ? "0 0 20px rgba(14,49,76,0.8), 0 0 40px rgba(14,49,76,0.4)"
          : "0 0 20px rgba(116,185,255,0.4)",
      }}
    >
      {/* Stars (visible in dark mode) */}
      <span
        className="absolute w-[3px] h-[3px] rounded-full bg-white transition-opacity duration-500"
        style={{ top: 10, left: 12, opacity: isDark ? 0.9 : 0 }}
      />
      <span
        className="absolute w-[2px] h-[2px] rounded-full bg-white transition-opacity duration-500"
        style={{ top: 20, left: 19, opacity: isDark ? 0.6 : 0 }}
      />
      <span
        className="absolute w-[2px] h-[2px] rounded-full bg-white transition-opacity duration-500"
        style={{ top: 12, left: 27, opacity: isDark ? 0.7 : 0 }}
      />
      <span
        className="absolute w-[1.5px] h-[1.5px] rounded-full bg-white transition-opacity duration-500"
        style={{ top: 24, left: 10, opacity: isDark ? 0.5 : 0 }}
      />
      <span
        className="absolute w-[2px] h-[2px] rounded-full bg-white transition-opacity duration-500"
        style={{ top: 8, left: 36, opacity: isDark ? 0.4 : 0 }}
      />

      {/* Thumb (moon / sun) */}
      <span
        className="absolute top-[4px] w-[30px] h-[30px] rounded-full transition-all duration-500 ease-in-out flex items-center justify-center"
        style={{
          left: isDark ? 30 : 4,
          background: isDark
            ? "radial-gradient(circle at 40% 40%, #f5f0e0 0%, #e8e0c8 40%, #d4cdb5 100%)"
            : "linear-gradient(135deg, #fdcb6e 0%, #f39c12 100%)",
          boxShadow: isDark
            ? "0 0 12px rgba(245,240,224,0.6), 0 0 24px rgba(245,240,224,0.3)"
            : "0 0 10px rgba(253,203,110,0.6)",
        }}
      >
        {/* Moon craters (dark mode) */}
        {isDark && (
          <>
            <span
              className="absolute rounded-full"
              style={{
                top: 6,
                left: 8,
                width: 8,
                height: 8,
                background: "rgba(190,185,170,0.5)",
                boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.15)",
              }}
            />
            <span
              className="absolute rounded-full"
              style={{
                top: 16,
                left: 16,
                width: 6,
                height: 6,
                background: "rgba(190,185,170,0.4)",
                boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.1)",
              }}
            />
            <span
              className="absolute rounded-full"
              style={{
                top: 10,
                left: 20,
                width: 4,
                height: 4,
                background: "rgba(190,185,170,0.35)",
                boxShadow: "inset 0.5px 0.5px 1px rgba(0,0,0,0.1)",
              }}
            />
            <span
              className="absolute rounded-full"
              style={{
                top: 20,
                left: 6,
                width: 5,
                height: 5,
                background: "rgba(190,185,170,0.3)",
                boxShadow: "inset 0.5px 0.5px 1px rgba(0,0,0,0.1)",
              }}
            />
          </>
        )}
      </span>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openModal: openFreeAuditModal } = useFreeAuditModal();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-secondary)]/90 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Launchieve"
            width={140}
            height={36}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-display transition-colors duration-200 relative group text-white ${
                isActive(link.href) ? "font-bold" : "font-medium"
              }`}
            >
              {link.label}
              {/* Active underline */}
              {isActive(link.href) ? (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] rounded-full bg-brand-blue" />
              ) : (
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full bg-brand-blue transition-all duration-300 group-hover:w-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Right side: theme toggle + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="hidden">
            <CelestialToggle isDark={theme === "dark"} onToggle={toggleTheme} />
          </div>

          <button
            onClick={openFreeAuditModal}
            className="px-5 py-2.5 rounded-full bg-brand-blue hover:bg-brand-blue-light text-white text-sm font-display font-bold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/25"
          >
            GET YOUR AUDIT
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <div className="hidden scale-[0.7] origin-right mt-1">
            <CelestialToggle isDark={theme === "dark"} onToggle={toggleTheme} />
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-theme-secondary hover:text-theme-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-[var(--bg-secondary)]/95 backdrop-blur-xl border-b border-[var(--border)]`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-display transition-colors py-1 text-white ${
                isActive(link.href) ? "font-bold" : "font-medium"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              openFreeAuditModal();
            }}
            className="mt-2 px-4 py-2.5 rounded-full bg-brand-blue text-white text-sm font-display font-bold text-center"
          >
            GET YOUR AUDIT
          </button>
        </div>
      </div>
    </header>
  );
}
