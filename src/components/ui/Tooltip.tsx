"use client";

import React, { useState, useId } from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/cn";

/* =========================================================================
   TRISHANTI DESIGN SYSTEM — TOOLTIP (Image 1, Item 07)
   - Helpful hints for better understanding
   - Dark balloon with subtle border and clear message
   - Layering: z-tooltip: 40
   ========================================================================= */

interface TooltipProps {
  content: string;
  children?: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export function Tooltip({
  content,
  children,
  side = "top",
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const id = useId();

  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  }[side];

  return (
    <span
      className={cn("relative inline-flex items-center", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children ?? (
        <button
          type="button"
          aria-describedby={isVisible ? id : undefined}
          aria-label="More information"
          className="inline-flex items-center justify-center p-1 rounded-full text-[#7C8581] hover:text-[#00A6A6] transition-colors"
        >
          <Info className="w-4 h-4" />
        </button>
      )}

      {isVisible && (
        <span
          id={id}
          role="tooltip"
          className={cn(
            "absolute w-64 p-3 rounded-xl bg-[#071A22] border border-white/15 text-white text-xs leading-relaxed shadow-xl z-[var(--trishanti-z-tooltip)] pointer-events-none animate-fade-in text-center sm:text-left",
            sideClasses,
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
}
