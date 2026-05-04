"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import PremiumAuditModal from "@/components/premium-audit/PremiumAuditModal";

type PremiumAuditModalContextValue = {
  closeModal: () => void;
  isOpen: boolean;
  openModal: () => void;
};

const PremiumAuditModalContext =
  createContext<PremiumAuditModalContextValue | null>(null);

export function usePremiumAuditModal() {
  const context = useContext(PremiumAuditModalContext);

  if (!context) {
    throw new Error(
      "usePremiumAuditModal must be used within PremiumAuditModalProvider",
    );
  }

  return context;
}

export default function PremiumAuditModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({
      closeModal: () => setIsOpen(false),
      isOpen,
      openModal: () => setIsOpen(true),
    }),
    [isOpen],
  );

  return (
    <PremiumAuditModalContext.Provider value={value}>
      {children}
      <PremiumAuditModal isOpen={isOpen} onClose={value.closeModal} />
    </PremiumAuditModalContext.Provider>
  );
}
