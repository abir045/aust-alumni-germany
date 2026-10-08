import Link from "next/link";
import { BrandLogo } from "@/components/globals/others/brand-logo";
import { BRAND } from "@/constants/brand";
import { ROUTES } from "@/constants/routes";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-[#0F2B5C] text-white dark:border-slate-800 dark:bg-[#081226]">
      <div className="site-container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <BrandLogo />
            <p className="max-w-md text-sm text-slate-300 leading-relaxed">
              {BRAND.tagline}. An independent, non-profit community platform
              connecting graduates of {BRAND.university} living, working, and
              pursuing research across Germany.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              Community
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  href={ROUTES.ALUMNI_MAP}
                  className="hover:text-white transition-colors"
                >
                  Alumni Map
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.EVENTS.ROOT}
                  className="hover:text-white transition-colors"
                >
                  Events & Meetups
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.BLOG.ROOT}
                  className="hover:text-white transition-colors"
                >
                  Stories & Blog
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.DESIGN_SYSTEMS}
                  className="hover:text-white transition-colors"
                >
                  Design Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href={BRAND.contact.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn Group
                </a>
              </li>
              <li>
                <a
                  href={BRAND.contact.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook Group
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-slate-400">
            Built for AUSTians in Germany.
          </p>
        </div>
      </div>
    </footer>
  );
}
