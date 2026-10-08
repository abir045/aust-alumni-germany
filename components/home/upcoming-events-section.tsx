"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { HeadingText } from "@/components/globals/typography/heading-text";
import { BodyText } from "@/components/globals/typography/body-text";
import { UpcomingEventCard } from "@/components/home/upcoming-events-card";
import {
  UPCOMING_EVENTS_DATA,
  type UpcomingEvent,
} from "@/constants/events";
import { ROUTES } from "@/constants/routes";

interface UpcomingEventsSectionProps {
  events?: UpcomingEvent[];
}

export function UpcomingEventsSection({
  events = UPCOMING_EVENTS_DATA,
}: UpcomingEventsSectionProps) {
  return (
    <section className="bg-(--color-surface-light-blue) py-16 md:py-24 dark:bg-[#081226]">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-12">
          <div>
            <BodyText variant="caption" className="text-secondary">
              WHAT&apos;S HAPPENING
            </BodyText>
            <HeadingText variant="h2" className="text-[#00163D]">
              Upcoming Events
            </HeadingText>
          </div>

          <div>
            <Link
              href={ROUTES.EVENTS.ROOT}
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#0F2B5C] transition-colors hover:text-[#173BA2] dark:text-[#9EBEFA] dark:hover:text-white"
            >
              <span>View All Events</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                weight="bold"
              />
            </Link>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <UpcomingEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEventsSection;
