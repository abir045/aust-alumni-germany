export type StatIconType = "users" | "cities" | "events" | "network";

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: StatIconType;
}

export const STATS_DATA: StatItem[] = [
  {
    id: "alumni",
    value: 500,
    suffix: "+",
    label: "ALUMNI IN GERMANY",
    icon: "users",
  },
  {
    id: "cities",
    value: 20,
    suffix: "+",
    label: "GERMAN CITIES",
    icon: "cities",
  },
  {
    id: "events",
    value: 50,
    suffix: "+",
    label: "EVENTS & STAMMTISCHE",
    icon: "events",
  },
  {
    id: "network",
    value: 10,
    suffix: "+",
    label: "YEARS ACTIVE NETWORK",
    icon: "network",
  },
];
