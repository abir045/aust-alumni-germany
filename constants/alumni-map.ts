export interface RegionalHub {
  id: string;
  name: string;
  shortName: string;
  memberCount: number;
  coordinates: [number, number]; // [lat, lng]
  description: string;
  nextStammtisch: string;
  leads: string[];
  leadCountTotal: number;
  federalState: string;
}

export const REGIONAL_HUBS: RegionalHub[] = [
  {
    id: "berlin",
    name: "Berlin Regional Hub",
    shortName: "Berlin",
    memberCount: 142,
    coordinates: [52.5200, 13.4050],
    description:
      "Capital city diaspora covering Mitte, Charlottenburg, Potsdam, and greater Brandenburg.",
    nextStammtisch: "Oct 26, 2024",
    leads: ["TR", "FH", "AA", "SK"],
    leadCountTotal: 142,
    federalState: "Berlin & Brandenburg",
  },
  {
    id: "munich",
    name: "Munich Regional Hub",
    shortName: "Munich",
    memberCount: 96,
    coordinates: [48.1351, 11.5820],
    description:
      "Bavarian chapter connecting engineers, automotive specialists, AI researchers, and academic fellows across southern Germany.",
    nextStammtisch: "Nov 02, 2024",
    leads: ["MR", "SK", "TA", "HN"],
    leadCountTotal: 96,
    federalState: "Bavaria (Bayern)",
  },
  {
    id: "frankfurt",
    name: "Frankfurt Regional Hub",
    shortName: "Frankfurt",
    memberCount: 78,
    coordinates: [50.1109, 8.6821],
    description:
      "Financial engineering, software architecture, and technology consulting network spanning the Rhein-Main metropolitan area.",
    nextStammtisch: "Nov 15, 2024",
    leads: ["AS", "KN", "RH", "DP"],
    leadCountTotal: 78,
    federalState: "Hesse (Hessen)",
  },
  {
    id: "nrw",
    name: "NRW Hub (Düsseldorf & Cologne)",
    shortName: "NRW Hub",
    memberCount: 84,
    coordinates: [51.2277, 6.7735],
    description:
      "Rhine-Ruhr industrial software cluster, process automation engineers, and university research diaspora.",
    nextStammtisch: "Nov 09, 2024",
    leads: ["SI", "MH", "FA", "LK"],
    leadCountTotal: 84,
    federalState: "North Rhine-Westphalia",
  },
  {
    id: "hamburg",
    name: "Hamburg Regional Hub",
    shortName: "Hamburg",
    memberCount: 45,
    coordinates: [53.5511, 9.9937],
    description:
      "Northern maritime logistics, green energy systems, and aviation engineering network in the Hanseatic city.",
    nextStammtisch: "Nov 22, 2024",
    leads: ["NA", "KB", "EM"],
    leadCountTotal: 45,
    federalState: "Hamburg & Northern Germany",
  },
  {
    id: "stuttgart",
    name: "Stuttgart Regional Hub",
    shortName: "Stuttgart",
    memberCount: 35,
    coordinates: [48.7758, 9.1829],
    description:
      "Baden-Württemberg automotive core, mechanical automation, and high-tech industrial research professionals.",
    nextStammtisch: "Nov 29, 2024",
    leads: ["RT", "IK", "SM"],
    leadCountTotal: 35,
    federalState: "Baden-Württemberg",
  },
];

export const TOTAL_ALUMNI_GERMANY = REGIONAL_HUBS.reduce(
  (acc, hub) => acc + hub.memberCount,
  0
);
