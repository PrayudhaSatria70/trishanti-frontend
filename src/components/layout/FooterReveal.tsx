"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface FooterRevealProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

export function FooterReveal({ children, footer }: FooterRevealProps) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isTall, setIsTall] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight;
        setFooterHeight(height);
        setIsTall(height >= window.innerHeight);
      }
    };

    // Initial measurement
    updateHeight();

    // Use ResizeObserver for accurate measurements when content changes
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    window.addEventListener("resize", updateHeight);

    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "relative w-full overflow-hidden z-10 bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)] transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]",
          !isTall && "rounded-b-[2.5rem] sm:rounded-b-[3rem] border-b border-[var(--trishanti-neutral-200)] dark:border-white/5"
        )}
        style={{ marginBottom: isTall ? "0px" : `${footerHeight}px` }}
      >
        {children}
      </div>
      <div
        ref={footerRef}
        className={cn(
          "left-0 right-0 z-0 pointer-events-auto",
          isTall ? "relative bottom-auto" : "fixed bottom-0"
        )}
      >
        {footer}
      </div>
    </>
  );
}
