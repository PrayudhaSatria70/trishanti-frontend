import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

/* ============================================================
   BORDER SYSTEM COMPONENTS (Design System — Image 3 Board)
   "Subtle by default. Meaningful when it matters."
   ============================================================ */

export interface InteractiveListItem {
  id: string;
  label: string;
  href?: string | undefined;
  icon?: ReactNode | undefined;
}

export interface InteractiveListProps {
  items: InteractiveListItem[];
  activeId?: string | undefined;
  onSelect?: ((id: string) => void) | undefined;
  className?: string | undefined;
}

/**
 * 08 INTERACTIVE LIST EXAMPLE
 * Border feedback for selection and hover:
 * - Default: 1px default border (#D1D5DB)
 * - Hover: 1px strong border (#A3A8B3)
 * - Active / Selected: 1px accent (#06B6D4) + subtle cyan background
 */
export function InteractiveList({
  items,
  activeId,
  onSelect,
  className,
}: InteractiveListProps) {
  return (
    <div className={cn("space-y-2.5", className)}>
      {items.map((item) => {
        const isSelected = item.id === activeId;

        const content = (
          <div
            className={cn(
              "flex items-center justify-between p-4 rounded-xl transition-all duration-200 cursor-pointer",
              isSelected
                ? "border-2 border-[#06B6D4] bg-[#00A6A6]/10 text-[#00A6A6] shadow-sm font-semibold"
                : "border border-[#D1D5DB] bg-white hover:border-[#A3A8B3] text-[#171C1B] hover:bg-[#F2F4F3]/50 font-medium"
            )}
          >
            <div className="flex items-center gap-3">
              {item.icon && (
                <span className={cn(isSelected ? "text-[#00A6A6]" : "text-[#7C8581]")}>
                  {item.icon}
                </span>
              )}
              <span className="text-sm">{item.label}</span>
            </div>
            <ChevronRight
              className={cn(
                "w-4 h-4 transition-transform",
                isSelected
                  ? "text-[#00A6A6] translate-x-1"
                  : "text-[#7C8581] group-hover:translate-x-0.5"
              )}
            />
          </div>
        );

        if (item.href) {
          return (
            <Link key={item.id} href={item.href} className="block group">
              {content}
            </Link>
          );
        }

        return (
          <div
            key={item.id}
            onClick={() => onSelect?.(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onSelect?.(item.id);
              }
            }}
            className="group"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}

/**
 * 06 CARD EXAMPLES
 * Standard Card: 1px default border (#D1D5DB), 12px radius (rounded-xl)
 */
export function StandardBorderCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#D1D5DB] bg-white p-6 shadow-sm hover:border-[#A3A8B3] transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Featured Card: 1px subtle border (#E7E9EC), 16px radius (rounded-2xl)
 */
export function FeaturedBorderCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#E7E9EC] bg-white p-8 shadow-md hover:shadow-xl hover:border-[#00A6A6] transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Dark Card: 1px subtle border (rgba(255,255,255,0.08)), 12px radius (rounded-xl)
 */
export function DarkBorderCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-[#071A22] p-6 text-white shadow-lg hover:border-[#06B6D4]/50 transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Glass Card: 1px glass border (rgba(255,255,255,0.2)), 16px radius (rounded-2xl)
 */
export function GlassBorderCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 text-white shadow-2xl hover:border-white/40 transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}
