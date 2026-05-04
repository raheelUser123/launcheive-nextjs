"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";

type Offset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

const DESKTOP_BREAKPOINT = 1024;

export default function useScrollReveal(
  scope: RefObject<HTMLElement | null>,
  mobileOffset?: Offset,
  desktopOffset?: Offset
) {
  const shouldReduceMotion = useReducedMotion();
  const wordsRef = useRef<HTMLElement[]>([]);
  const prevCountRef = useRef(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Cache word elements once after mount
  useEffect(() => {
    if (!scope.current) return;
    wordsRef.current = Array.from(
      scope.current.querySelectorAll("[data-reveal-word='true']") as NodeListOf<HTMLElement>
    );
    prevCountRef.current = 0;
  }, [scope]);

  const defaultMobile: Offset = ["start 0.85", "end 0.2"];
  const defaultDesktop: Offset = ["start 0.75", "start -0.1"];

  const resolvedOffset = isDesktop
    ? (desktopOffset ?? defaultDesktop)
    : (mobileOffset ?? defaultMobile);

  const { scrollYProgress } = useScroll({
    target: scope,
    offset: resolvedOffset,
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (shouldReduceMotion) return;

    const words = wordsRef.current;
    if (!words.length) return;

    const revealedCount = Math.floor(progress * words.length);
    const prev = prevCountRef.current;

    // Only update words that changed state
    if (revealedCount > prev) {
      for (let i = prev; i < revealedCount; i++) {
        const s = words[i].style;
        s.opacity = "1";
        s.filter = "blur(0px)";
        s.transform = "translateY(0)";
      }
    } else if (revealedCount < prev) {
      for (let i = revealedCount; i < prev; i++) {
        const s = words[i].style;
        s.opacity = "0";
        s.filter = "blur(8px)";
        s.transform = "translateY(18px)";
      }
    }

    prevCountRef.current = revealedCount;
  });
}
