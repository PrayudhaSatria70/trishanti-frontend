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
      "bg-white border border-[#DEE3E1] text-[#171C1B] shadow-sm",
    dark:
      "bg-[#071A22] border border-white/10 text-white shadow-lg",
    charcoal:
      "bg-[#292F2D] border border-white/10 text-white shadow-lg",
    glass:
      "bg-[#071A22]/80 backdrop-blur-md border border-white/15 text-white shadow-xl",
    "glass-light":
      "bg-white/70 backdrop-blur-md border border-white/40 text-[#171C1B] shadow-md",
    interactive:
      "bg-white border border-[#DEE3E1] text-[#171C1B] hover:border-[#00A6A6] hover:shadow-[0_10px_30px_rgba(0,166,166,0.15)] transition-all duration-300 group cursor-pointer",
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
    <div className={cn("p-6 pb-3", className)} {...props}>
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
        "text-xl font-bold font-serif tracking-tight leading-snug",
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
      className={cn("text-sm text-[#5E6663] mt-2 leading-relaxed", className)}
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
    <div className={cn("p-6 pt-3", className)} {...props}>
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
        "p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
