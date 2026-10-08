import type { Metadata } from "next";

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin?: string;
    facebook?: string;
    github?: string;
    email: string;
  };
  keywords: string[];
}

export const siteConfig: SiteConfig = {
  name: "AUST Alumni Germany",
  shortName: "AUST Alumni DE",
  description:
    "Official network and community platform for Ahsanullah University of Science and Technology (AUST) alumni residing, studying, and working in Germany.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://austalumnigermany.de",
  ogImage: "/brand/og-image.png",
  links: {
    linkedin: "https://www.linkedin.com/company/aust-alumni-germany",
    facebook: "https://www.facebook.com/groups/austalumnigermany",
    email: "contact@austalumnigermany.de",
  },
  keywords: [
    "AUST Alumni Germany",
    "Ahsanullah University of Science and Technology",
    "AUSTians in Germany",
    "Bangladeshi Engineers in Germany",
    "Germany Alumni Network",
    "AUST Alumni Association",
  ],
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/icons/favicon.svg",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: siteConfig.keywords,
    authors: [
      {
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@AUSTAlumniDE",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
