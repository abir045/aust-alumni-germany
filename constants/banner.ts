export interface CtaBannerData {
  badgeText?: string;
  hasBadgeIcon?: boolean;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export const HOME_CTA_BANNER_DATA: CtaBannerData = {
  badgeText: "AHSANULLAH UNIVERSITY ALUMNI E.V. REGISTERED NON-PROFIT ASSOCIATION",
  hasBadgeIcon: true,
  title: "Are you an AUST graduate living in Germany?",
  description:
    "Join our thriving network of engineers, researchers, and pioneers today. Access member directories, local city chapters, and mentorship.",
  buttonText: "Register for Free (Member Portal)",
  buttonHref: "/register",
};
