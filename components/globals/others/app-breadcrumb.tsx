import Link from "next/link";
import { CaretRight, House } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface AppBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function AppBreadcrumb({ items, className }: AppBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-xs text-slate-500 dark:text-slate-400", className)}
    >
      <ol className="flex items-center gap-1.5">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#0F2B5C] dark:hover:text-slate-200 transition-colors"
          >
            <House className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <CaretRight className="h-3 w-3 text-slate-400" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#0F2B5C] dark:hover:text-slate-200 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn("font-semibold text-slate-900 dark:text-slate-100", isLast && "truncate max-w-[200px]")}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
