import React from "react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------
 * BREAKPOINT SYSTEM — GRID & CONTAINER BEHAVIOR (Image 1 Alignment)
 * Specs:
 * - XS (< 480px) & SM (≥ 480px): Fluid, Padding 20px (px-5)
 * - MD (≥ 768px): Fluid, Padding 24px (px-6)
 * - LG (>= 1024px) & XL (>= 1280px): Container max-w-[1920px], Padding 48px (px-12)
 * - 2XL (>= 1536px): Padding 96px (px-24)
 * ------------------------------------------------------------------------- */

export interface PageContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function PageContainer({
  size = "default",
  className,
  children,
  ...props
}: PageContainerProps) {
  const sizeStyles = {
    narrow: "max-w-5xl",
    default: "max-w-[1920px]",
    wide: "max-w-none",
  }[size];

  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-6 lg:px-12 xl:px-24",
        sizeStyles,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default PageContainer;
