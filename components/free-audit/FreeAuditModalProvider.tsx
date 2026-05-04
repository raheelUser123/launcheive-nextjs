"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import FreeAuditModal from "@/components/free-audit/FreeAuditModal";

type FreeAuditModalContextValue = {
  closeModal: () => void;
  isOpen: boolean;
  openModal: () => void;
};

const FreeAuditModalContext = createContext<FreeAuditModalContextValue | null>(
  null,
);

export function useFreeAuditModal() {
  const context = useContext(FreeAuditModalContext);

  if (!context) {
    throw new Error(
      "useFreeAuditModal must be used within FreeAuditModalProvider",
    );
  }

  return context;
}

export default function FreeAuditModalProvider({
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
    <FreeAuditModalContext.Provider value={value}>
      {children}
      <FreeAuditModal isOpen={isOpen} onClose={value.closeModal} />
    </FreeAuditModalContext.Provider>
  );
}
