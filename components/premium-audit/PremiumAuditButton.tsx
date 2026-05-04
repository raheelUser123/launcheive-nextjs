"use client";

import { type ButtonHTMLAttributes, type MouseEventHandler } from "react";
import { usePremiumAuditModal } from "@/components/premium-audit/PremiumAuditModalProvider";

type PremiumAuditButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PremiumAuditButton({
  children,
  onClick,
  type,
  ...props
}: PremiumAuditButtonProps) {
  const { openModal } = usePremiumAuditModal();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);

    if (!event.defaultPrevented) {
      openModal();
    }
  };

  return (
    <button {...props} type={type ?? "button"} onClick={handleClick}>
      {children}
    </button>
  );
}
