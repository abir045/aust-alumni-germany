export const TYPOGRAPHY_SCALE = {
  fontFamily: "var(--font-plus-jakarta-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  desktop: {
    display: { size: "64px", lineHeight: "72px", weight: "700", tracking: "-0.02em" },
    h1: { size: "48px", lineHeight: "56px", weight: "700", tracking: "-0.015em" },
    h2: { size: "36px", lineHeight: "44px", weight: "600", tracking: "-0.01em" },
    h3: { size: "28px", lineHeight: "36px", weight: "600", tracking: "-0.005em" },
    h4: { size: "22px", lineHeight: "30px", weight: "600", tracking: "0em" },
    h5: { size: "18px", lineHeight: "24px", weight: "600", tracking: "0em" },
    bodyLarge: { size: "18px", lineHeight: "26px", weight: "400", tracking: "0em" },
    bodyRegular: { size: "16px", lineHeight: "24px", weight: "400", tracking: "0em" },
    bodySmall: { size: "14px", lineHeight: "22px", weight: "400", tracking: "0em" },
    labelButton: { size: "15px", lineHeight: "20px", weight: "600", tracking: "0em" },
    captionOverline: { size: "12px", lineHeight: "16px", weight: "600", tracking: "0.08em", transform: "uppercase" },
  },
  mobile: {
    display: { size: "36px", lineHeight: "44px", weight: "700", tracking: "-0.02em" },
    h1: { size: "32px", lineHeight: "40px", weight: "700", tracking: "-0.015em" },
    h2: { size: "28px", lineHeight: "36px", weight: "600", tracking: "-0.01em" },
    h3: { size: "22px", lineHeight: "30px", weight: "600", tracking: "-0.005em" },
    h4: { size: "18px", lineHeight: "26px", weight: "600", tracking: "0em" },
    h5: { size: "17px", lineHeight: "24px", weight: "600", tracking: "0em" },
    bodyLarge: { size: "16px", lineHeight: "24px", weight: "400", tracking: "0em" },
    bodyRegular: { size: "16px", lineHeight: "24px", weight: "400", tracking: "0em" },
    bodySmall: { size: "14px", lineHeight: "20px", weight: "400", tracking: "0em" },
    labelButton: { size: "15px", lineHeight: "20px", weight: "600", tracking: "0em" },
    captionOverline: { size: "12px", lineHeight: "16px", weight: "600", tracking: "0.06em", transform: "uppercase" },
  },
} as const;

export const RADIUS_SCALE = {
  none: "0px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  "3xl": "24px",
  "4xl": "32px",
  full: "9999px",
} as const;

export const LAYOUT_CONFIG = {
  maxContainerWidth: "1680px",
  contentWidth: "1680px",
  mobilePadding: "16px",
  tabletPadding: "32px",
  desktopPadding: "48px",
} as const;

