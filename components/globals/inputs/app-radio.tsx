"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface AppRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  error?: string;
}

export const AppRadio = forwardRef<HTMLInputElement, AppRadioProps>(
  ({ className, label, description, error, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-center pt-0.5">
          <input
            id={inputId}
            ref={ref}
            type="radio"
            className={cn(
              "peer h-5 w-5 appearance-none rounded-full border border-slate-300 bg-white transition-all checked:border-[#0F2B5C] focus:outline-none focus:ring-2 focus:ring-[#0F2B5C]/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:checked:border-[#6093F5]",
              error && "border-red-500",
              className
            )}
            {...props}
          />
          <div className="pointer-events-none absolute left-1.5 top-2 hidden h-2 w-2 rounded-full bg-[#0F2B5C] peer-checked:block dark:bg-[#6093F5]" />
        </div>
        {(label || description) && (
          <div className="text-sm">
            {label && (
              <label
                htmlFor={inputId}
                className="font-medium text-slate-800 cursor-pointer select-none dark:text-slate-200"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
            )}
            {error && <p className="text-xs font-medium text-red-600 mt-1">{error}</p>}
          </div>
        )}
      </div>
    );
  }
);

AppRadio.displayName = "AppRadio";
