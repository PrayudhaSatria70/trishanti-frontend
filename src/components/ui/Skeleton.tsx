import React from "react";
import { cn } from "@/lib/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  skeletonRadius?: "sm" | "md" | "lg" | "full";
}

export function Skeleton({
  className,
  skeletonRadius = "md",
  ...props
}: SkeletonProps) {
  const radiusClass = {
    sm: "rounded-md", // 8px
    md: "rounded-xl", // 12px
    lg: "rounded-2xl", // 16px
    full: "rounded-full",
  }[skeletonRadius];

  return (
    <div
      className={cn("animate-pulse bg-white/10 relative overflow-hidden", radiusClass, className)}
      {...props}
    />
  );
}

export default Skeleton;
