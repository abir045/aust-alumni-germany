export const ROUTES = {
  HOME: "/",
  // Authentication Routes
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    VERIFY_EMAIL: "/verify-email",
  },
  // Public Features
  ALUMNI_MAP: "/alumni-map",
  EVENTS: {
    ROOT: "/events",
    DETAILS: (slug: string) => `/events/${slug}`,
    REGISTER: (slug: string) => `/events/${slug}/register`,
  },
  BLOG: {
    ROOT: "/blog",
    DETAILS: (slug: string) => `/blog/${slug}`,
    CATEGORY: (category: string) => `/blog/category/${category}`,
    TAG: (tag: string) => `/blog/tag/${tag}`,
  },
  COMMUNITY: {
    ROOT: "/community",
    MEMBERS: "/community/members",
    MENTORSHIP: "/community/mentorship",
  },
  ABOUT: "/about",
  CONTACT: "/contact",
  // User Profile
  USER: {
    PROFILE: "/profile",
    SETTINGS: "/profile/settings",
    MY_EVENTS: "/profile/events",
  },
  // Admin Features
  ADMIN: {
    ROOT: "/admin",
    DASHBOARD: "/admin/dashboard",
    MEMBERS: "/admin/members",
    EVENTS: "/admin/events",
    BLOG: "/admin/blog",
    SETTINGS: "/admin/settings",
  },
  // Design Systems & Internal Tools
  DESIGN_SYSTEMS: "/design-systems",
} as const;

export type RouteKey = typeof ROUTES;
