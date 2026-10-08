import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const commonClasses = "font-sans text-current transition-colors";

export const bodyVariants = {
  large:
    "text-[16px] leading-[24px] lg:text-[18px] lg:leading-[26px] font-normal ",
  regular:
    "text-[16px] leading-[24px] font-normal",
  small:
    "text-[14px] leading-[20px] lg:text-[14px] lg:leading-[22px] font-normal",
  caption:
    "text-[12px] leading-[16px] font-semibold tracking-[0.06em] lg:tracking-[0.08em] uppercase",
  overline:
    "text-[12px] leading-[16px] font-bold tracking-[0.06em] lg:tracking-[0.08em] uppercase",
  muted:
    "text-[14px] leading-[20px] lg:text-[14px] lg:leading-[22px] font-normal",
} as const;


export type BodyVariant = keyof typeof bodyVariants;

export interface BodyTextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: BodyVariant;
  children?: ReactNode;
}

const defaultElementMap: Record<string, ElementType> = {
  large: "p",
  regular: "p",
  small: "p",
  caption: "span",
  overline: "span",
  muted: "p",
};

export function BodyText({
  as,
  variant,
  children,
  className,
  ...props
}: BodyTextProps) {
  const Tag = as ?? (variant && defaultElementMap[variant] ? defaultElementMap[variant] : "p");
  const styleVariant: BodyVariant = variant ?? (typeof Tag === "string" && Tag in bodyVariants ? (Tag as BodyVariant) : "regular");

  return (
    <Tag
      className={cn(commonClasses, bodyVariants[styleVariant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default BodyText;

