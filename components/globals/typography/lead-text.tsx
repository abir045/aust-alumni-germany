import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const commonClasses = "font-sans text-current transition-colors leading-relaxed max-w-3xl";

export const leadVariants = {
  default:
    "text-[18px] leading-[28px] lg:text-[20px] lg:leading-[32px] font-normal",
} as const;

export type LeadVariant = keyof typeof leadVariants;

export interface LeadTextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: ElementType;
  variant?: LeadVariant;
  children?: ReactNode;
}

export function LeadText({
  as: Tag = "p",
  variant = "default",
  className,
  children,
  ...props
}: LeadTextProps) {
  const styleVariant: LeadVariant = variant ?? "default";

  return (
    <Tag
      className={cn(commonClasses, leadVariants[styleVariant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default LeadText;

