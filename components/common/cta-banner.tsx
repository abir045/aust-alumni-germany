import Link from "next/link";
import { ShieldCheck, IdentificationCard } from "@phosphor-icons/react/dist/ssr";
import { HeadingText } from "@/components/globals/typography/heading-text";
import { BodyText } from "@/components/globals/typography/body-text";
import { cn } from "@/lib/utils";
import {
  HOME_CTA_BANNER_DATA,
  type CtaBannerData,
} from "@/constants/banner";

export interface CtaBannerProps extends Partial<CtaBannerData> {
  className?: string;
  cardClassName?: string;
}

export function CtaBanner({
  badgeText = HOME_CTA_BANNER_DATA.badgeText,
  hasBadgeIcon = HOME_CTA_BANNER_DATA.hasBadgeIcon,
  title = HOME_CTA_BANNER_DATA.title,
  description = HOME_CTA_BANNER_DATA.description,
  buttonText = HOME_CTA_BANNER_DATA.buttonText,
  buttonHref = HOME_CTA_BANNER_DATA.buttonHref,
  className,
  cardClassName,
}: CtaBannerProps) {
  return (
    <section className={cn("bg-white py-16 md:py-24 dark:bg-[#081226]", className)}>
      <div className="site-container">
        {/* Banner Card Container */}
        <div
          className={cn(
            "relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-dark-blue px-6 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-20 lg:py-24 text-center shadow-2xl flex flex-col items-center",
            cardClassName
          )}
        >
          {/* Subtle Ambient Depth Lighting in corner */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
            aria-hidden="true"
          />

          {/* Eyebrow Badge */}
          {badgeText && (
            <div className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 border border-white/15 shadow-xs">
              {hasBadgeIcon && (
                <ShieldCheck
                  className="h-3.5 w-3.5 text-secondary shrink-0"
                  weight="fill"
                />
              )}
              <BodyText variant="caption" className="text-[#D9E2FF]">
                {badgeText}
              </BodyText>
            </div>
          )}

          {/* Title */}
          <div className="relative z-10 mt-6 max-w-3xl">
            <HeadingText variant="h1" className="text-white text-center">
              {title}
            </HeadingText>
          </div>

          {/* Description Text */}
          <div className="relative z-10 mt-4 max-w-2xl">
            <BodyText variant="large" className="text-[#AFC6FF] text-center">
              {description}
            </BodyText>
          </div>

          {/* Action Button */}
          <div className="relative z-10 mt-8 md:mt-10">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3.5 shadow-lg shadow-orange-500/25 transition-all duration-200 hover:brightness-105 active:scale-[0.98] cursor-pointer"
            >
              <IdentificationCard
                className="h-5 w-5 text-white shrink-0"
                weight="bold"
              />
              <BodyText variant="small" className="text-white font-semibold">
                {buttonText}
              </BodyText>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
