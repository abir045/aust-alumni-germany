"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/globals/others/brand-logo";
import { BodyText } from "@/components/globals/typography/body-text";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { List, X } from "@phosphor-icons/react";

const NAV_ITEMS = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Events", href: ROUTES.EVENTS.ROOT },
  { label: "Community Stories", href: ROUTES.BLOG.ROOT },
  { label: "Alumni Map", href: ROUTES.ALUMNI_MAP },
  { label: "Contact", href: ROUTES.CONTACT },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-99 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all dark:border-slate-800 dark:bg-slate-950/95">
      <div className="site-container flex h-24 items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <BrandLogo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 min-[1025px]:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-5 py-2 rounded-xl transition-all duration-150 inline-flex items-center",
                  active
                    ? "bg-[#E8F0FE] text-[#00163D] dark:bg-[#173BA2]/25 dark:text-[#9EBEFA]"
                    : "text-[#44464F] hover:text-[#00163D] hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-900"
                )}
              >
                <BodyText
                  variant="small"
                  as="span"
                  className={cn(
                    "transition-colors",
                    active
                      ? "text-[#00163D] font-semibold dark:text-[#9EBEFA]"
                      : "text-[#44464F] font-medium dark:text-slate-400"
                  )}
                >
                  {item.label}
                </BodyText>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Login & Register */}
        <div className="hidden items-center gap-3 min-[1025px]:flex">
          <Link
            href={ROUTES.AUTH.LOGIN}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-[#00163D] shadow-xs transition-all hover:bg-slate-50 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Login
          </Link>
          <Link
            href={ROUTES.AUTH.REGISTER}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FFA800] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:from-[#EA6C00] hover:to-[#F59000] hover:shadow-orange-500/30 active:scale-[0.98]"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center min-[1025px]:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" weight="bold" />
            ) : (
              <List className="h-6 w-6" weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-6 shadow-xl min-[1025px]:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="site-container flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl transition-all duration-150 flex items-center justify-between",
                    active
                      ? "bg-[#E8F0FE] text-[#00163D] dark:bg-[#173BA2]/25 dark:text-[#9EBEFA]"
                      : "text-[#44464F] hover:text-[#00163D] hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white"
                  )}
                >
                  <BodyText
                    variant="small"
                    as="span"
                    className={cn(
                      active
                        ? "text-[#00163D] font-semibold dark:text-[#9EBEFA]"
                        : "text-[#44464F] font-medium dark:text-slate-400"
                    )}
                  >
                    {item.label}
                  </BodyText>
                </Link>
              );
            })}

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2 dark:border-slate-800">
              <Link
                href={ROUTES.AUTH.LOGIN}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-[#00163D] shadow-xs hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                Login
              </Link>
              <Link
                href={ROUTES.AUTH.REGISTER}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FFA800] py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 hover:from-[#EA6C00] hover:to-[#F59000]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

