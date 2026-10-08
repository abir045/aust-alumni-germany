"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleNotch } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0F2B5C] text-white hover:bg-[#173BA2] active:bg-[#14307F] shadow-sm hover:shadow-md dark:bg-[#6093F5] dark:text-[#081226] dark:hover:bg-[#9EBEFA]",
        secondary:
          "bg-[#F59E0B] text-slate-950 hover:bg-[#D97706] active:bg-[#B45309] shadow-sm hover:shadow-md",
        outline:
          "border border-[#0F2B5C]/20 bg-transparent text-[#0F2B5C] hover:bg-[#F1F6FF] hover:border-[#0F2B5C]/40 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
        dark: "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 shadow-sm dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white",
        link: "text-[#0F2B5C] underline-offset-4 hover:underline dark:text-[#6093F5] p-0 h-auto font-medium active:scale-100",
        text: "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        md: "h-10 px-5 text-sm rounded-lg",
        lg: "h-12 px-6 text-base rounded-xl",
        icon: "h-10 w-10 p-0 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {isLoading ? (
          <CircleNotch className="h-4 w-4 animate-spin" weight="bold" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
