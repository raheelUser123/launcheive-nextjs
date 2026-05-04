"use client";

import { type ButtonHTMLAttributes, type MouseEventHandler } from "react";
import { useFreeAuditModal } from "@/components/free-audit/FreeAuditModalProvider";

type FreeAuditButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function FreeAuditButton({
  children,
  onClick,
  type,
  ...props
}: FreeAuditButtonProps) {
  const { openModal } = useFreeAuditModal();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);

    if (!event.defaultPrevented) {
      openModal();
    }
  };

  return (
    <button {...props} onClick={handleClick} type={type ?? "button"}>
      {children}
    </button>
  );
}
