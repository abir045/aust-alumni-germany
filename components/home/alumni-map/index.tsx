"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { HeadingText } from "@/components/globals/typography/heading-text";
import { BodyText } from "@/components/globals/typography/body-text";
import { ChapterDetailsCard } from "@/components/home/alumni-map/chapter-details-card";
import {
  REGIONAL_HUBS,
  TOTAL_ALUMNI_GERMANY,
  type RegionalHub,
} from "@/constants/alumni-map";

// Dynamic import with SSR disabled to prevent Leaflet "window is not defined" issues
const LeafletMapView = dynamic(
  () => import("@/components/home/alumni-map/leaflet-map-view"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[420px] md:min-h-[480px] w-full items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse">
        <span className="text-sm font-medium text-slate-400">Loading Germany Map...</span>
      </div>
    ),
  }
);

interface AlumniMapSectionProps {
  hubs?: RegionalHub[];
}

export function AlumniMapSection({ hubs = REGIONAL_HUBS }: AlumniMapSectionProps) {
  const [selectedHubId, setSelectedHubId] = useState<string>("berlin");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilterId, setActiveFilterId] = useState<string>("all");

  const filteredHubs = useMemo(() => {
    let list = hubs;
    if (activeFilterId !== "all") {
      list = list.filter((h) => h.id === activeFilterId);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (h) =>
          h.name.toLowerCase().includes(q) ||
          h.shortName.toLowerCase().includes(q) ||
          h.federalState.toLowerCase().includes(q) ||
          h.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [hubs, activeFilterId, searchQuery]);

  const selectedHub = useMemo(() => {
    return hubs.find((h) => h.id === selectedHubId) ?? hubs[0];
  }, [hubs, selectedHubId]);

  const handleSelectPill = (filterId: string) => {
    setActiveFilterId(filterId);
    if (filterId !== "all") {
      setSelectedHubId(filterId);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAFBFD] dark:bg-[#050C1A]">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <BodyText variant="caption" className="text-[#F59E0B]">
              ALUMNI GEOGRAPHY
            </BodyText>
            <HeadingText variant="h1" className="mt-1 text-[#00163D] dark:text-white">
              Find Alumni Near You
            </HeadingText>
          </div>
          <div className="max-w-md">
            <BodyText variant="regular" className="text-[#44464F] dark:text-slate-300">
              Connect with engineers, software leads, and university researchers living
              within your Bundesland or city corridor.
            </BodyText>
          </div>
        </div>

        {/* Filter Pills & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Scrollable Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {/* All Pill */}
            <button
              type="button"
              onClick={() => handleSelectPill("all")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                activeFilterId === "all"
                  ? "bg-[#00163D] text-white dark:bg-[#6093F5] dark:text-[#081226]"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              All ({TOTAL_ALUMNI_GERMANY}+)
            </button>

            {/* Individual Hub Pills */}
            {hubs.map((hub) => (
              <button
                key={hub.id}
                type="button"
                onClick={() => handleSelectPill(hub.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  activeFilterId === hub.id || selectedHubId === hub.id
                    ? "bg-[#00163D] text-white dark:bg-[#6093F5] dark:text-[#081226]"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {hub.shortName} ({hub.memberCount})
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] md:min-w-[300px]">
            <MagnifyingGlass
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
              weight="bold"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search alumni by city or firm..."
              className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-4 text-xs text-slate-800 placeholder-slate-400 shadow-xs outline-none transition-all focus:border-[#00163D] focus:ring-1 focus:ring-[#00163D] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
        </div>

        {/* Outer White Card Container */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-4 md:p-6 lg:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left: Interactive Leaflet Map (7 cols) */}
            <div className="lg:col-span-7 h-[420px] md:h-[480px] lg:h-[520px]">
              <LeafletMapView
                selectedHubId={selectedHubId}
                onSelectHub={(id) => {
                  setSelectedHubId(id);
                  setActiveFilterId(id);
                }}
                filteredHubs={filteredHubs}
              />
            </div>

            {/* Right: Selected Chapter Details Panel (5 cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <ChapterDetailsCard hub={selectedHub} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlumniMapSection;
