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
      "bg-white dark:bg-white/5 border border-[var(--trishanti-neutral-200)] dark:border-white/10 text-[var(--trishanti-neutral-900)] dark:text-white shadow-[var(--trishanti-elevation-1)] dark:shadow-[var(--trishanti-elevation-dark-1)] dark:glass-panel",
    dark:
      "bg-[var(--trishanti-color-bg-dark)] border border-white/10 text-white shadow-[var(--trishanti-elevation-dark-2)] glass-panel",
    charcoal:
      "bg-[#292F2D] border border-white/10 text-white shadow-[var(--trishanti-elevation-dark-1)]",
    glass:
      "bg-[var(--trishanti-color-bg-dark)]/80 backdrop-blur-md border border-white/15 text-white shadow-[var(--trishanti-elevation-dark-3)]",
    "glass-light":
      "bg-white/70 backdrop-blur-md border border-white/40 text-[var(--trishanti-neutral-900)] shadow-[var(--trishanti-elevation-2)]",
    interactive:
      "bg-white dark:bg-white/5 border border-[var(--trishanti-neutral-200)] dark:border-white/10 text-[var(--trishanti-neutral-900)] dark:text-white shadow-[var(--trishanti-elevation-1)] dark:shadow-[var(--trishanti-elevation-dark-1)] hover:border-[var(--trishanti-color-primary)] hover:shadow-[var(--trishanti-elevation-2)] hover:shadow-[var(--trishanti-shadow-glow)] dark:hover:shadow-[var(--trishanti-elevation-dark-2)] transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] group cursor-pointer dark:glass-panel hover:-translate-y-1",
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
