export interface EventDetailItem {
  icon: "location" | "hybrid" | "clock" | "check" | "panel" | "attendees";
  text: string;
  isSuccess?: boolean;
}

export interface UpcomingEvent {
  id: string;
  badge: string;
  date: string;
  title: string;
  details: EventDetailItem[];
  cta: {
    label: string;
    href: string;
    variant: "dark" | "soft";
    icon: "ticket" | "user" | "walk";
  };
}

export const UPCOMING_EVENTS_DATA: UpcomingEvent[] = [
  {
    id: "aust-annual-german-gala-2024",
    badge: "FLAGSHIP EVENT",
    date: "Nov 16, 2024",
    title: "AUST Annual German Gala 2024",
    details: [
      {
        icon: "location",
        text: "Frankfurt am Main • Grand Saal Westend",
      },
      {
        icon: "clock",
        text: "17:00 - 23:00 CET",
      },
      {
        icon: "check",
        text: "Free for Registered Members",
        isSuccess: true,
      },
    ],
    cta: {
      label: "Reserve Spot",
      href: "/events/aust-annual-german-gala-2024",
      variant: "dark",
      icon: "ticket",
    },
  },
  {
    id: "career-stammtisch-ai-german-industry",
    badge: "TECH & AI",
    date: "Dec 05, 2024",
    title: "Career Stammtisch: AI in German Industry",
    details: [
      {
        icon: "hybrid",
        text: "Munich (TUM Campus) & Live Stream",
      },
      {
        icon: "clock",
        text: "18:30 - 21:00 CET",
      },
      {
        icon: "panel",
        text: "Panel with Siemens & BMW leads",
      },
    ],
    cta: {
      label: "RSVP Free",
      href: "/events/career-stammtisch-ai-german-industry",
      variant: "soft",
      icon: "user",
    },
  },
  {
    id: "winter-gluehwein-networking-walk",
    badge: "SOCIAL MEETUP",
    date: "Dec 14, 2024",
    title: "Winter Glühwein & Networking Walk",
    details: [
      {
        icon: "location",
        text: "Berlin Alexanderplatz Christmas Market",
      },
      {
        icon: "clock",
        text: "16:00 - 19:30 CET",
      },
      {
        icon: "attendees",
        text: "34 Attending",
      },
    ],
    cta: {
      label: "Join Walk",
      href: "/events/winter-gluehwein-networking-walk",
      variant: "soft",
      icon: "walk",
    },
  },
];
