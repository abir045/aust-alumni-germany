import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const commonClasses = "font-sans text-current transition-colors";

export const headingVariants = {
  display:
    "text-[36px] leading-[44px] lg:text-[64px] lg:leading-[72px] font-extrabold tracking-[-0.02em]",
  h1: "text-[32px] leading-[40px] lg:text-[48px] lg:leading-[56px] font-bold tracking-[-0.015em]",
  h2: "text-[28px] leading-[36px] lg:text-[36px] lg:leading-[44px] font-semibold tracking-[-0.01em]",
  h3: "text-[22px] leading-[30px] lg:text-[28px] lg:leading-[36px] font-semibold tracking-[-0.005em]",
  h4: "text-[18px] leading-[26px] lg:text-[22px] lg:leading-[30px] font-semibold",
  h5: "text-[17px] leading-[24px] lg:text-[18px] lg:leading-[24px] font-semibold",
  h6: "text-[16px] leading-[22px] lg:text-[16px] lg:leading-[24px] font-semibold",
} as const;


export type HeadingVariant = keyof typeof headingVariants;

export interface HeadingTextProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType;
  variant?: HeadingVariant;
  children?: ReactNode;
}

const defaultElementMap: Record<string, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

export function HeadingText({
  as,
  variant,
  children,
  className,
  ...props
}: HeadingTextProps) {
  const Tag = as ?? (variant && defaultElementMap[variant] ? defaultElementMap[variant] : "h2");
  const styleVariant: HeadingVariant = variant ?? (typeof Tag === "string" && Tag in headingVariants ? (Tag as HeadingVariant) : "h2");

  return (
    <Tag
      className={cn(commonClasses, headingVariants[styleVariant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default HeadingText;

