"use client";

import {
  UsersThree,
  CalendarBlank,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { HeadingText } from "@/components/globals/typography/heading-text";
import { BodyText } from "@/components/globals/typography/body-text";
import { type RegionalHub } from "@/constants/alumni-map";

interface ChapterDetailsCardProps {
  hub: RegionalHub;
}

const leadColors = [
  "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200",
  "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
  "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200",
  "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200",
];

export function ChapterDetailsCard({ hub }: ChapterDetailsCardProps) {
  const otherCount = Math.max(0, hub.leadCountTotal - hub.leads.length);

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#F1F6FF] p-6 md:p-8 dark:bg-[#0D1E3D]/80">
      <div className="space-y-6">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-md bg-[#FEF3C7] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#92400E] dark:bg-amber-950/60 dark:text-amber-300">
            Selected Chapter
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Active Hub
          </span>
        </div>

        {/* Hub Title & Description */}
        <div>
          <HeadingText variant="h2" className="text-[#00163D] dark:text-white">
            {hub.name}
          </HeadingText>
          <BodyText variant="small" className="mt-2 text-[#64748B] dark:text-slate-400">
            {hub.description}
          </BodyText>
        </div>

        {/* Key Stats Cards */}
        <div className="space-y-3">
          {/* Active Alumni Stat */}
          <div className="flex items-center justify-between rounded-xl border border-slate-200/60 bg-white px-4 py-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E5EEFF] text-[#0F2B5C] dark:bg-[#0F2B5C]/50 dark:text-[#9EBEFA]">
                <UsersThree className="h-5 w-5" weight="bold" />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Active Alumni
              </span>
            </div>
            <span className="text-sm font-bold text-[#00163D] dark:text-white">
              {hub.memberCount} Members
            </span>
          </div>

          {/* Next Stammtisch Stat */}
          <div className="flex items-center justify-between rounded-xl border border-slate-200/60 bg-white px-4 py-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-[#EA580C] dark:bg-orange-950/40 dark:text-orange-400">
                <CalendarBlank className="h-5 w-5" weight="bold" />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Next Stammtisch
              </span>
            </div>
            <span className="text-sm font-bold text-[#EA580C] dark:text-orange-400">
              {hub.nextStammtisch}
            </span>
          </div>
        </div>

        {/* Chapter Leads & Coordinators */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
            Chapter Leads & Coordinators
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {hub.leads.map((initials, idx) => (
              <div
                key={initials}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold border border-white dark:border-slate-800 shadow-xs ${
                  leadColors[idx % leadColors.length]
                }`}
              >
                {initials}
              </div>
            ))}
            {otherCount > 0 && (
              <span className="ml-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                +{otherCount} others
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action CTA Button */}
      <div className="pt-6">
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#00163D] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0F2B5C] active:scale-[0.99] dark:bg-[#6093F5] dark:text-[#081226] dark:hover:bg-[#9EBEFA]"
        >
          <span>Open Interactive Alumni Directory & Map</span>
          <ArrowUpRight className="h-4 w-4" weight="bold" />
        </button>
      </div>
    </div>
  );
}

export default ChapterDetailsCard;
