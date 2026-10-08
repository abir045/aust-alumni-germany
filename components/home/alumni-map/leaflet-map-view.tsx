"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { REGIONAL_HUBS, type RegionalHub } from "@/constants/alumni-map";

interface LeafletMapViewProps {
  selectedHubId: string;
  onSelectHub: (hubId: string) => void;
  filteredHubs?: RegionalHub[];
}

export function LeafletMapView({
  selectedHubId,
  onSelectHub,
  filteredHubs = REGIONAL_HUBS,
}: LeafletMapViewProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Initialize map centered on Germany with bounds restriction
      const map = L.map(mapContainerRef.current, {
        center: [51.1657, 10.4515],
        zoom: 6,
        minZoom: 5,
        maxZoom: 9,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
      });

      // Add CartoDB Positron minimalist tile layer
      // L.tileLayer(
      //   "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      //   {
      //     subdomains: "abcd",
      //     maxZoom: 19,
      //   }
      // ).addTo(map);


      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add Zoom control at bottom right
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Draw dashed network connector lines
      const hubMap = new Map(REGIONAL_HUBS.map((h) => [h.id, h.coordinates]));
      const connections: [string, string][] = [
        ["berlin", "frankfurt"],
        ["frankfurt", "munich"],
        ["frankfurt", "nrw"],
        ["frankfurt", "stuttgart"],
        ["berlin", "hamburg"],
        ["nrw", "hamburg"],
      ];

      connections.forEach(([fromId, toId]) => {
        const fromCoord = hubMap.get(fromId);
        const toCoord = hubMap.get(toId);
        if (fromCoord && toCoord) {
          L.polyline([fromCoord, toCoord], {
            color: "#F59E0B",
            weight: 2,
            opacity: 0.6,
            dashArray: "6, 8",
          }).addTo(map);
        }
      });

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Clear existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    // Render Hub Markers
    filteredHubs.forEach((hub) => {
      const isSelected = hub.id === selectedHubId;

      const iconHtml = isSelected
        ? `
          <div class="relative flex items-center justify-center cursor-pointer group">
            <div class="absolute -inset-2.5 rounded-full bg-[#F59E0B]/30 animate-ping"></div>
            <div class="absolute -inset-1.5 rounded-full bg-[#F59E0B]/40 ring-4 ring-[#F59E0B]/20"></div>
            <div class="relative h-6 w-6 rounded-full bg-[#F59E0B] border-2 border-white shadow-lg flex items-center justify-center">
              <div class="h-2 w-2 rounded-full bg-white"></div>
            </div>
            <div class="absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#0F2B5C] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-md pointer-events-none">
              ${hub.shortName} (${hub.memberCount})
            </div>
          </div>
        `
        : `
          <div class="relative flex items-center justify-center cursor-pointer group">
            <div class="h-4 w-4 rounded-full bg-[#0F2B5C] border-2 border-white shadow-md transition-transform group-hover:scale-125 flex items-center justify-center">
              <div class="h-1 w-1 rounded-full bg-white"></div>
            </div>
            <div class="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/90 text-slate-800 text-[10px] font-semibold px-1.5 py-0.2 rounded border border-slate-200 shadow-sm pointer-events-none opacity-90 group-hover:opacity-100">
              ${hub.shortName} (${hub.memberCount})
            </div>
          </div>
        `;

      const customIcon = L.divIcon({
        html: iconHtml,
        className: "custom-leaflet-marker",
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const marker = L.marker(hub.coordinates, { icon: customIcon }).addTo(map);
      marker.on("click", () => {
        onSelectHub(hub.id);
      });

      markersRef.current[hub.id] = marker;
    });

    // If selected hub changes, pan gracefully
    const activeHub = REGIONAL_HUBS.find((h) => h.id === selectedHubId);
    if (activeHub) {
      map.panTo(activeHub.coordinates, {
        animate: true,
        duration: 0.8,
      });
    }

    return () => {
      // Map cleanup on complete component unmount
    };
  }, [selectedHubId, filteredHubs, onSelectHub]);

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative z-0 isolate h-full min-h-[420px] md:min-h-[480px] w-full overflow-hidden rounded-2xl bg-[#F8FAFC]">
      {/* Federal Regional Hubs Floating Badge */}
      <div className="absolute left-4 top-4 z-50 flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200">
        <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
        Federal Regional Hubs
      </div>

      {/* Leaflet Map DOM Node */}
      <div ref={mapContainerRef} className="h-full w-full" />
    </div>
  );
}

export default LeafletMapView;
