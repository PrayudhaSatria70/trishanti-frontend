"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Share2 } from "lucide-react";

/* =========================================================================
   TRISHANTI DESIGN SYSTEM — POPOVER (Image 1, Item 06)
   - Contextual information or quick actions
   - Report preview card + Actions: View Report, Download PDF, Share Link
   - Layering: z-popover: 30
   ========================================================================= */

interface ReportPopoverProps {
  title?: string;
  subtitle?: string;
  image?: string;
  viewHref?: string;
  downloadHref?: string;
  children: React.ReactNode;
}

export function ReportPopover({
  title = "Sustainability Report 2024",
  subtitle = "A more inclusive tomorrow.",
  image = "/images/businesses/focus-urban.jpg",
  viewHref = "/sustainability",
  downloadHref = "/documents/sustainability-report-2024.pdf",
  children,
}: ReportPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={popoverRef} className="relative inline-block">
      <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">
        {children}
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-label={title}
          className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-72 rounded-2xl bg-white/95 dark:bg-[#071A22]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.25)] p-4 z-[var(--trishanti-z-popover)] animate-fade-in"
        >
          {/* Thumbnail Image */}
          <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Titles */}
          <h4 className="text-sm font-semibold text-[#071A22] dark:text-white leading-snug">
            {title}
          </h4>
          <p className="text-xs text-[#7C8581] dark:text-[#94a3b8] mt-0.5 mb-4">
            {subtitle}
          </p>

          {/* Quick Actions */}
          <div className="space-y-1 text-xs font-semibold">
            <Link
              href={viewHref}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-[#00A6A6] hover:bg-[#00A6A6]/10 transition-colors"
            >
              <span>View Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={downloadHref}
              download
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[#5E6663] dark:text-[#DEE3E1] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#00A6A6]" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title, url: window.location.href });
                }
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[#5E6663] dark:text-[#DEE3E1] hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-left"
            >
              <Share2 className="w-3.5 h-3.5 text-[#00A6A6]" />
              <span>Share Link</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
