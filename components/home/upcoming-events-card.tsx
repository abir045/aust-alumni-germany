"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  CalendarBlank,
  MapPin,
  Desktop,
  Clock,
  CheckCircle,
  UsersThree,
  Fire,
  Ticket,
  UserPlus,
  PersonSimpleWalk,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import type { UpcomingEvent, EventDetailItem } from "@/constants/events";

interface UpcomingEventCardProps {
  event: UpcomingEvent;
}

function renderDetailIcon(iconType: EventDetailItem["icon"]): ReactNode {
  switch (iconType) {
    case "location":
      return <MapPin className="h-4 w-4 shrink-0 text-slate-500" weight="regular" />;
    case "hybrid":
      return <Desktop className="h-4 w-4 shrink-0 text-slate-500" weight="regular" />;
    case "clock":
      return <Clock className="h-4 w-4 shrink-0 text-slate-500" weight="regular" />;
    case "check":
      return <CheckCircle className="h-4 w-4 shrink-0 text-[#16A34A]" weight="fill" />;
    case "panel":
      return <UsersThree className="h-4 w-4 shrink-0 text-[#D97706]" weight="bold" />;
    case "attendees":
      return <Fire className="h-4 w-4 shrink-0 text-[#D97706]" weight="bold" />;
    default:
      return null;
  }
}

function renderCtaIcon(iconType: UpcomingEvent["cta"]["icon"]): ReactNode {
  switch (iconType) {
    case "ticket":
      return <Ticket className="h-4 w-4 shrink-0" weight="bold" />;
    case "user":
      return <UserPlus className="h-4 w-4 shrink-0" weight="bold" />;
    case "walk":
      return <PersonSimpleWalk className="h-4 w-4 shrink-0" weight="bold" />;
    default:
      return null;
  }
}

export function UpcomingEventCard({ event }: UpcomingEventCardProps) {
  const isDarkCta = event.cta.variant === "dark";

  return (
    <article className="flex flex-col justify-between rounded-[16px] border border-slate-200/80 bg-white p-6 md:p-7 shadow-xs transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {/* Top Section */}
      <div>
        {/* Badge & Date Header */}
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full bg-[#EAF2FF] px-3.5 py-1 text-xs font-bold tracking-wide text-[#0F2B5C] uppercase dark:bg-[#0F2B5C]/60 dark:text-[#9EBEFA]">
            {event.badge}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <CalendarBlank className="h-4 w-4 text-[#D97706]" weight="bold" />
            <span>{event.date}</span>
          </div>
        </div>

        {/* Event Title */}
        <h3 className="mt-4 min-h-[56px] text-xl font-bold leading-snug text-[#00163D] dark:text-white">
          {event.title}
        </h3>

        {/* Details List */}
        <ul className="mt-4 space-y-2.5">
          {event.details.map((detail, index) => (
            <li key={index} className="flex items-center gap-2.5 text-xs md:text-sm">
              {renderDetailIcon(detail.icon)}
              <span
                className={cn(
                  "leading-tight",
                  detail.isSuccess
                    ? "font-semibold text-[#16A34A] dark:text-emerald-400"
                    : detail.icon === "attendees"
                    ? "font-semibold text-[#B45309] dark:text-amber-400"
                    : "text-slate-600 dark:text-slate-300"
                )}
              >
                {detail.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom CTA Action Button */}
      <div className="pt-6">
        <Link
          href={event.cta.href}
          className={cn(
            "flex h-11 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition-all duration-200 active:scale-[0.98]",
            isDarkCta
              ? "bg-[#00163D] text-white shadow-xs hover:bg-[#0F2B5C] hover:shadow-sm dark:bg-[#6093F5] dark:text-[#081226] dark:hover:bg-[#9EBEFA]"
              : "bg-[#F0F5FF] text-[#0F2B5C] hover:bg-[#E2EDFF] dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
          )}
        >
          <span>{event.cta.label}</span>
          {renderCtaIcon(event.cta.icon)}
        </Link>
      </div>
    </article>
  );
}

export default UpcomingEventCard;
