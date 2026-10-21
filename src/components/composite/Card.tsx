import React from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "dark" | "charcoal" | "glass" | "glass-light" | "interactive";
  cardRadius?: "none" | "compact" | "standard" | "featured" | "editorial";
}

/**
 * Card — Trishanti Design System composite card.
 * Adheres to Image 5 Radius System & Image 1 / 3 Color System.
 */
export function Card({
  className,
  variant = "default",
  cardRadius = "standard",
  children,
  ...props
}: CardProps) {
  const radiusStyles = {
    none: "rounded-none",
    compact: "rounded-md", // 8px SM per Image 5
    standard: "rounded-xl", // 12px MD Standard UI / Cards Primary
    featured: "rounded-2xl", // 16px LG Premium / Featured
    editorial: "rounded-3xl", // 24px XL Soft & Editorial
  }[cardRadius];

  const variantStyles = {
    default:
      "bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-[var(--trishanti-neutral-200)] dark:border-white/10 text-[var(--trishanti-neutral-900)] dark:text-white shadow-[var(--trishanti-elevation-1)] dark:shadow-[var(--trishanti-elevation-dark-1)] transition-all duration-[var(--trishanti-duration-normal)] hover:border-[#00A6A6]/60 dark:hover:border-[#00A6A6]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15),0_0_28px_rgba(0,166,166,0.22)] hover:-translate-y-1",
    dark:
      "bg-[var(--trishanti-color-bg-dark)]/80 backdrop-blur-xl border border-white/10 text-white shadow-[var(--trishanti-elevation-dark-2)] transition-all duration-[var(--trishanti-duration-normal)] hover:border-[#00A6A6]/60 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5),0_0_30px_rgba(0,166,166,0.25)] hover:-translate-y-1",
    charcoal:
      "bg-[#292F2D]/85 backdrop-blur-xl border border-white/10 text-white shadow-[var(--trishanti-elevation-dark-1)] transition-all duration-[var(--trishanti-duration-normal)] hover:border-[#00A6A6]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.45),0_0_25px_rgba(0,166,166,0.25)] hover:-translate-y-1",
    glass:
      "bg-[var(--trishanti-color-bg-dark)]/75 backdrop-blur-2xl border border-white/15 text-white shadow-[var(--trishanti-elevation-dark-3)] transition-all duration-[var(--trishanti-duration-normal)] hover:border-[#00A6A6]/60 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5),0_0_30px_rgba(0,166,166,0.3)] hover:-translate-y-1",
    "glass-light":
      "bg-white/75 backdrop-blur-2xl border border-white/40 text-[var(--trishanti-neutral-900)] shadow-[var(--trishanti-elevation-2)] transition-all duration-[var(--trishanti-duration-normal)] hover:border-[#00A6A6]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15),0_0_25px_rgba(0,166,166,0.25)] hover:-translate-y-1",
    interactive:
      "bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-[var(--trishanti-neutral-200)] dark:border-white/10 text-[var(--trishanti-neutral-900)] dark:text-white shadow-[var(--trishanti-elevation-1)] dark:shadow-[var(--trishanti-elevation-dark-1)] hover:border-[#00A6A6] hover:shadow-[0_18px_44px_rgba(0,0,0,0.18),0_0_32px_rgba(0,166,166,0.28)] dark:hover:shadow-[0_22px_50px_rgba(0,0,0,0.65),0_0_35px_rgba(0,166,166,0.32)] transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] group cursor-pointer hover:-translate-y-1.5",
  }[variant];

  return (
    <div
      className={cn("overflow-hidden", radiusStyles, variantStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-8 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-bold font-heading tracking-tight leading-snug",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-base text-[var(--trishanti-neutral-600)] dark:text-[var(--trishanti-neutral-400)] mt-3 leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-8 pt-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "p-8 pt-0 flex items-center justify-between border-t border-[var(--trishanti-neutral-200)] dark:border-white/10 mt-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
