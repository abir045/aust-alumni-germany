import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants/routes";

export interface BrandLogoProps {
  className?: string;
  isCompact?: boolean;
}

export function BrandLogo({ className, isCompact = false }: BrandLogoProps) {
  return (
    <Link
      href={ROUTES.HOME}
      className={cn(
        "group inline-flex items-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg",
        className
      )}
    >
      <Image
        src="/icons/logo.svg"
        alt="AUST Alumni Germany Chapter"
        width={216}
        height={40}
        priority
        className={cn(
          "h-20 w-auto object-contain",
          isCompact && "h-20"
        )}
      />
    </Link>
  );
}

