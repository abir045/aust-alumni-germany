export interface StoryAuthor {
  name: string;
  initials: string;
  details: string;
  avatarUrl?: string;
}

export interface CommunityStory {
  id: string;
  tags: string[];
  readTime: string;
  title: string;
  description: string;
  author: StoryAuthor;
  href?: string;
}

export const COMMUNITY_STORIES_DATA: CommunityStory[] = [
  {
    id: "from-tejgaon-to-munich",
    tags: ["Career", "Automotive"],
    readTime: "5 min read",
    title: "From Tejgaon to Munich: Landing my first Senior Engineer role at BMW",
    description:
      "Practical strategies on passing technical system design rounds, presenting Bangladeshi degree credentials in Germany, and adapting to German workplace culture.",
    author: {
      name: "Farhana Rahman",
      initials: "FR",
      details: "CSE '16 • Munich",
    },
    href: "/blog/from-tejgaon-to-munich",
  },
  {
    id: "navigating-german-eu-blue-card",
    tags: ["Immigration", "Guide 2024"],
    readTime: "8 min read",
    title: "Navigating the German EU Blue Card & Permanent Residency in 2024",
    description:
      "A step-by-step breakdown of newly relaxed salary thresholds, B1 German test acceleration, and spouse work permits for South Asian engineering expats.",
    author: {
      name: "Tanvir Ahmed",
      initials: "TA",
      details: "EEE '14 • Frankfurt",
    },
    href: "/blog/navigating-german-eu-blue-card",
  },
  {
    id: "founding-deeptech-clean-energy-startup",
    tags: ["Startups", "CleanTech"],
    readTime: "6 min read",
    title: "Founding a DeepTech Clean Energy Startup in Aachen",
    description:
      "How our research team turned a mechanical engineering doctoral thesis into an EXIST-funded spin-off in North Rhine-Westphalia.",
    author: {
      name: "Dr. Sakib Hassan",
      initials: "SH",
      details: "ME '12 • Aachen",
    },
    href: "/blog/founding-deeptech-clean-energy-startup",
  },
];
