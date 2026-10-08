import type { ReactNode } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/globals/others/brand-logo";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F1F6FF] px-4 py-12 dark:bg-[#081226]">
      <div className="mb-8">
        <BrandLogo />
      </div>
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-[#0D1E3D]">
        {children}
      </div>
      <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:underline">
          &larr; Return to Home
        </Link>
      </div>
    </div>
  );
}
