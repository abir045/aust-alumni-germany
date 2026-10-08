"use client";

import { useEffect, type ReactNode } from "react";
import { initAOS } from "@/lib/aos";
import "@/lib/aos.css";

interface AOSProviderProps {
  children: ReactNode;
}

export function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    initAOS();
  }, []);

  return <>{children}</>;
}
