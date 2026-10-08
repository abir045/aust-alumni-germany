"use client";

import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { LeadText } from "@/components/globals/typography/lead-text";
import { BodyText } from "@/components/globals/typography/body-text";
import { cn } from "@/lib/utils";
import type { AlumniSpotlightItem } from "@/constants/spotlight";

interface SpotlightCardProps {
  spotlight: AlumniSpotlightItem;
  currentIndex: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
}

export function SpotlightCard({
  spotlight,
  currentIndex,
  totalCount,
  onPrev,
  onNext,
  onSelectIndex,
}: SpotlightCardProps) {
  return (
    <article className="rounded-[24px] border border-slate-200/80 bg-white p-6 sm:p-8 md:p-12 shadow-xs dark:border-slate-800 dark:bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column: Alumni Photo with rounded-[24px] and NO badge */}
        <div className="md:col-span-5 lg:col-span-4 flex justify-center">
          <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-[24px] shadow-sm">
            <Image
              src={spotlight.image}
              alt={spotlight.name}
              fill
              sizes="(max-width: 768px) 280px, 320px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Column: Quotes, Name, Subtitle, & Slider Controls */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between h-full min-h-[220px]">
          {/* Top Quote Mark & Info */}
          <div>
            <span className="font-serif text-4xl md:text-5xl font-black leading-none text-[#F59E0B] select-none block">
              ”
            </span>

            {/* Person Name & Role/Batch */}
            <div className="mt-4 md:mt-6">
              <LeadText className="text-dark-blue font-bold">
                {spotlight.name}
              </LeadText>
              <div className="mt-1">
                <BodyText variant="regular" className="text-desc-text">
                  {spotlight.roleAndBatch}
                </BodyText>
              </div>
            </div>
          </div>

          {/* Bottom Controls Row: Pagination Dots & Arrows */}
          <div className="mt-8 md:mt-12 flex items-center justify-between">
            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalCount }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSelectIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={cn(
                    "transition-all duration-300 cursor-pointer",
                    idx === currentIndex
                      ? "h-2 w-7 rounded-full bg-[#F59E0B]"
                      : "h-2 w-2 rounded-full bg-[#DCE7FF] hover:bg-[#B9D2FF] dark:bg-slate-700"
                  )}
                />
              ))}
            </div>

            {/* Prev / Next Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF2FF] text-dark-blue transition-colors hover:bg-[#D9E7FF] dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 cursor-pointer shadow-xs active:scale-95"
              >
                <CaretLeft className="h-4 w-4" weight="bold" />
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF2FF] text-dark-blue transition-colors hover:bg-[#D9E7FF] dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 cursor-pointer shadow-xs active:scale-95"
              >
                <CaretRight className="h-4 w-4" weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default SpotlightCard;
