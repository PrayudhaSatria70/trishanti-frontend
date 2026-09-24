import React from "react";
import { cn } from "@/lib/cn";

export interface SectionWrapperProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: "dark" | "midnight" | "neutral600" | "card" | "accent";
}

export function SectionWrapper({
  variant = "midnight",
  className,
  children,
  ...props
}: SectionWrapperProps) {
  const variantStyles = {
    midnight: "bg-[#071A22] text-white",
    neutral600: "bg-[#5E6663] text-white",
    dark: "bg-[#292F2D] text-white",
    card: "bg-white text-[#171C1B]",
    accent: "bg-[#071A22] text-white border-y border-white/10",
  }[variant];

  return (
    <section
      className={cn("py-20 sm:py-24 lg:py-32 relative", variantStyles, className)}
      {...props}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
