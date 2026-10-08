"use client";

import { useEffect, type ReactNode } from "react";
import { createLenisInstance } from "@/lib/lenis";

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = createLenisInstance();
    if (!lenis) return;

    let animationFrameId: number;

    function raf(time: number) {
      lenis?.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
