"use client";

import { useEffect, useRef, useState, useCallback, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { MOBILE_BOTTOM_NAV_ID } from "./MobileBottomNav";

interface FooterRevealProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

const emptySubscribe = () => () => {};

/**
 * FooterReveal
 *
 * Implements an authentic, GPU-accelerated curtain reveal effect:
 * 1. The upper layer (containing main content and "Connect With Trishanti") acts
 *    as an elevated sliding curtain with rounded bottom edges, a cyan laser rim,
 *    and a deep physical drop shadow.
 * 2. As the user scrolls past "Connect With Trishanti", the curtain lifts up,
 *    unveiling the Foundational Quote and Deep Midnight Footer underneath.
 * 3. Supports responsive parallax translation so that regardless of screen height,
 *    the foundational quote is revealed first, followed by the columns and copyright bar.
 */
export function FooterReveal({ children, footer }: FooterRevealProps) {
  const curtainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const footerHeightRef = useRef<number>(0);
  const [footerHeight, setFooterHeight] = useState<number>(0);
  const rafIdRef = useRef<number | null>(null);

  // React 19 / 18 idiomatic client mount check without cascading render warnings
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const updatePositions = useCallback(() => {
    if (!curtainRef.current || !footerRef.current) {
      return;
    }

    // Respect user's reduced motion accessibility preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      footerRef.current.style.transform = "none";
      return;
    }

    const fHeight = footerHeightRef.current;
    if (fHeight <= 0) {
      return;
    }

    const rect = curtainRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const bottomNavEl = document.getElementById(MOBILE_BOTTOM_NAV_ID);
    const bottomNavH = bottomNavEl ? bottomNavEl.offsetHeight : 0;
    const availableVh = vh - bottomNavH;

    // d represents how much the bottom of the curtain has lifted above the available viewport edge
    const d = availableVh - rect.bottom;
    const progress = Math.min(1, Math.max(0, d / fHeight));

    if (fHeight > availableVh) {
      // Content taller than available viewport: translate smoothly from +excess down to 0
      // At progress = 0 (reveal begins): translateY = excess (aligns top of footer/quote at top)
      // At progress = 1 (reveal ends): translateY = 0 (aligns bottom of footer at bottom)
      const excess = fHeight - availableVh;
      const translateY = (1 - progress) * excess;
      footerRef.current.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
    } else {
      footerRef.current.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  useEffect(() => {
    const measureAndSync = () => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight;
        if (height > 0) {
          footerHeightRef.current = height;
          setFooterHeight(height);
        }
      }
      updatePositions();
    };

    const handleScroll = () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(updatePositions);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measureAndSync);

    const resizeObserver = new ResizeObserver(() => {
      measureAndSync();
    });

    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }
    if (curtainRef.current) {
      resizeObserver.observe(curtainRef.current);
    }

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measureAndSync);
      resizeObserver.disconnect();
    };
  }, [updatePositions]);

  return (
    <>
      {/* Sliding Curtain Layer (Main Content + "Connect With Trishanti") */}
      <div
        ref={curtainRef}
        className={cn(
          "relative w-full z-10 transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]",
          "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)]"
        )}
        style={{ marginBottom: isMounted ? `${footerHeight}px` : "0px" }}
      >
        <div className="relative w-full overflow-hidden rounded-b-[2rem] sm:rounded-b-[2.5rem] border-b border-black/10 dark:border-white/10 bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)]">
          {children}

          {/* Cyan laser accent line on bottom edge of the sliding curtain */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-[1.5px] bg-gradient-to-r from-transparent via-[#00A6A6]/60 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Revealed Background Layer (Foundational Quote + Deep Midnight Footer) */}
      <div
        ref={footerRef}
        className={cn(
          "left-0 right-0 z-0 pointer-events-auto will-change-transform",
          isMounted ? "fixed bottom-0" : "relative"
        )}
      >
        {footer}
      </div>
    </>
  );
}

export default FooterReveal;
