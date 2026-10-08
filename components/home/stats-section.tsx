"use client";

import type { ReactNode } from "react";
import {
  UsersThree,
  Buildings,
  Confetti,
  HandHeart,
} from "@phosphor-icons/react";
import { BodyText } from "@/components/globals/typography/body-text";
import { CounterNumber } from "@/components/globals/animations/counter-number";
import { STATS_DATA, type StatIconType, type StatItem } from "@/constants/stats";

const iconMap: Record<StatIconType, ReactNode> = {
  users: <UsersThree className="h-6 w-6 md:h-7 md:w-7 text-[#0F2B5C] dark:text-[#9EBEFA]" weight="bold" />,
  cities: <Buildings className="h-6 w-6 md:h-7 md:w-7 text-[#0F2B5C] dark:text-[#9EBEFA]" weight="bold" />,
  events: <Confetti className="h-6 w-6 md:h-7 md:w-7 text-[#0F2B5C] dark:text-[#9EBEFA]" weight="bold" />,
  network: <HandHeart className="h-6 w-6 md:h-7 md:w-7 text-[#0F2B5C] dark:text-[#9EBEFA]" weight="bold" />,
};

interface StatsSectionProps {
  stats?: StatItem[];
}

export function StatsSection({ stats = STATS_DATA }: StatsSectionProps) {
  return (
    <section className="bg-[#F1F6FF] py-10 md:py-14 dark:bg-[#081226]">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center gap-4 rounded-[16px] border border-slate-200/60 bg-white p-5 md:p-6 shadow-xs transition-all duration-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Icon Badge */}
              <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl bg-[#E5EEFF] dark:bg-[#0F2B5C]/60">
                {iconMap[stat.icon]}
              </div>

              {/* Number and Label */}
              <div className="flex flex-col">
                <CounterNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="text-[#0F2B5C] dark:text-white"
                />
                <BodyText
                  variant="small"
                  className="text-[#64748B] dark:text-slate-400 uppercase"
                >
                  {stat.label}
                </BodyText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
