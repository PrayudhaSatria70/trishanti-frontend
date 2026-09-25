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
    midnight: "bg-gradient-to-b from-[#071A22] to-[#041015] text-white",
    neutral600: "bg-[var(--trishanti-neutral-100)] dark:bg-[var(--trishanti-color-bg-dark)] text-[var(--trishanti-neutral-900)] dark:text-white transition-colors duration-300",
    dark: "bg-white dark:bg-[#0d222c] text-[var(--trishanti-neutral-900)] dark:text-white transition-colors duration-300",
    card: "bg-white dark:bg-[var(--trishanti-color-bg-dark)] text-[var(--trishanti-neutral-900)] dark:text-white transition-colors duration-300",
    accent: "bg-gradient-to-br from-[#00A6A6]/5 to-transparent dark:from-[#00A6A6]/10 dark:bg-[#071A22] text-[var(--trishanti-neutral-900)] dark:text-white border-y border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-300",
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
