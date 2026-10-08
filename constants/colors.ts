export const COLOR_PALETTE = {
  primary: {
    hex: "#0F2B5C",
    name: "Primary",
    role: "Headings, Nav, Footer",
  },
  secondary: {
    hex: "#F59E0B",
    name: "Secondary",
    role: "Accents & Active States",
  },
  tertiary: {
    hex: "#EA580C",
    name: "Tertiary",
    role: "CTA Buttons & Badges",
  },
  neutral: {
    hex: "#64748B",
    name: "Neutral (Base)",
    role: "Borders, Captions, Muted",
  },
  surfaceLightBlue: {
    hex: "#F1F6FF",
    name: "Surface (Light Blue)",
    role: "Section Backgrounds",
  },
  surfacePureWhite: {
    hex: "#FFFFFF",
    borderHex: "#E2E8F0",
    name: "Surface (Pure White)",
    role: "Cards & Borders",
  },
  darkBlue: {
    hex: "#00163D",
    name: "Dark Blue",
    role: "Headings & Card Titles",
  },
  descText: {
    hex: "#44464F",
    name: "Desc Text",
    role: "Descriptions & Body Text",
  },
  status: {
    success: {
      hex: "#16A34A",
      name: "Success",
    },
    warning: {
      hex: "#F59E0B",
      name: "Warning",
    },
    error: {
      hex: "#DC2626",
      name: "Error",
    },
    info: {
      hex: "#2563EB",
      name: "Info",
    },
  },
} as const;

export type ColorPalette = typeof COLOR_PALETTE;
