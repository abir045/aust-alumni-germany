"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { AOSProvider } from "./aos-provider";
import { LenisProvider } from "./lenis-provider";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <LenisProvider>
        <AOSProvider>
          {children}
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            toastOptions={{
              className: "font-sans text-sm",
              duration: 4000,
            }}
          />
        </AOSProvider>
      </LenisProvider>
    </ThemeProvider>
  );
}
