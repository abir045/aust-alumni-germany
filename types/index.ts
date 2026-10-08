import type { ReactNode } from "react";

export type VariantSize = "sm" | "md" | "lg";

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export type ButtonVariant =
  | "primary"
  | "outline"
  | "secondary"
  | "dark"
  | "link"
  | "text";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body-large"
  | "body"
  | "body-small"
  | "label"
  | "caption";
