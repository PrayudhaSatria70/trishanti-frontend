import React from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "subtle" | "outline" | "corporate" | "featured" | "development" | "sustainability";
  size?: "sm" | "md";
}

/**
 * Badge — Atomic label / status tag component.
 * Radius scale: 9999px (Full / Pills) per Image 5.
 */
export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full tracking-wider uppercase";

  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  }[size];

  const variantStyles = {
    default: "bg-[#292F2D] text-[#DEE3E1] border border-white/10",
    accent: "bg-[#00A6A6]/15 text-[#00A6A6] border border-[#00A6A6]/30",
    subtle: "bg-white/10 text-white/90 border border-white/15",
    outline: "bg-transparent text-[#DEE3E1] border border-white/20",
    corporate: "bg-white/95 text-[#292F2D] border border-[#DEE3E1] shadow-xs font-semibold",
    featured: "bg-white/95 text-[#071A22] font-semibold text-[10px] px-2.5 py-0.5 shadow-sm",
    development: "bg-[#071A22] text-[#00A6A6] border border-[#00A6A6]/40",
    sustainability: "bg-[#00A6A6]/10 text-[#00A6A6] border border-[#00A6A6]/25 font-semibold",
  }[variant];

  return (
    <span
      className={cn(baseStyles, sizeStyles, variantStyles, className)}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
