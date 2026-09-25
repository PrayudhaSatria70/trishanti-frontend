"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  threshold?: number;
  style?: React.CSSProperties;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 1000,
  threshold = 0.1,
  style,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, we don't need to observe anymore
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getDirectionStyles = () => {
    switch (direction) {
      case "up":
        return "translate-y-8";
      case "down":
        return "-translate-y-8";
      case "left":
        return "translate-x-8";
      case "right":
        return "-translate-x-8";
      case "none":
        return "";
    }
  };

  return (
    <div
      ref={domRef}
      className={cn(
        "transition-all will-change-[opacity,transform]",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${getDirectionStyles()}`,
        className
      )}
      style={{
        ...style,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
}
