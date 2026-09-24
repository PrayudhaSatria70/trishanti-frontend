import React from "react";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/cn";

export interface SemanticAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "success" | "warning" | "error" | "info";
  title?: string;
  description: string;
  onClose?: () => void;
}

/**
 * SemanticAlert — System Feedback & Alert component.
 * Implements Board A.5.15 Item 03 & Image 1 / 3 Semantic UI Colors.
 * Radius: 12px (rounded-xl) per Image 5 Surface Examples.
 */
export function SemanticAlert({
  className,
  variant,
  title,
  description,
  onClose,
  ...props
}: SemanticAlertProps) {
  const configs = {
    success: {
      icon: CheckCircle2,
      container: "bg-[#16A34A]/10 border-[#16A34A]/30 text-[#16A34A]",
      iconColor: "text-[#16A34A]",
      titleColor: "text-[#16A34A]",
      textColor: "text-[#292F2D] dark:text-[#DEE3E1]",
    },
    warning: {
      icon: AlertTriangle,
      container: "bg-[#F59E0B]/10 border-[#F59E0B]/30 text-[#F59E0B]",
      iconColor: "text-[#F59E0B]",
      titleColor: "text-[#F59E0B]",
      textColor: "text-[#292F2D] dark:text-[#DEE3E1]",
    },
    error: {
      icon: AlertCircle,
      container: "bg-[#DC2626]/10 border-[#DC2626]/30 text-[#DC2626]",
      iconColor: "text-[#DC2626]",
      titleColor: "text-[#DC2626]",
      textColor: "text-[#292F2D] dark:text-[#DEE3E1]",
    },
    info: {
      icon: Info,
      container: "bg-[#2563EB]/10 border-[#2563EB]/30 text-[#2563EB]",
      iconColor: "text-[#2563EB]",
      titleColor: "text-[#2563EB]",
      textColor: "text-[#292F2D] dark:text-[#DEE3E1]",
    },
  }[variant];

  const IconComponent = configs.icon;

  return (
    <div
      role="alert"
      className={cn(
        "rounded-xl border p-4 flex items-start gap-3.5 transition-all shadow-xs",
        configs.container,
        className,
      )}
      {...props}
    >
      <div className={cn("mt-0.5 shrink-0", configs.iconColor)}>
        <IconComponent className="w-5 h-5" aria-hidden="true" />
      </div>

      <div className="flex-1 text-sm">
        {title && (
          <h4 className={cn("font-semibold mb-0.5 leading-snug", configs.titleColor)}>
            {title}
          </h4>
        )}
        <p className={cn("text-xs sm:text-sm leading-relaxed", configs.textColor)}>
          {description}
        </p>
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 p-1 rounded-md text-inherit opacity-70 hover:opacity-100 hover:bg-black/5 transition-opacity"
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

/**
 * SemanticFeedbackCard — Matching Image 1 "SEMANTIC UI EXAMPLES"
 * Renders the exact pill card with colored icon, bold title, and description.
 */
export function SemanticFeedbackCard({
  variant,
  title,
  description,
  className,
}: {
  variant: "success" | "warning" | "error" | "info";
  title?: string | undefined;
  description: string;
  className?: string | undefined;
}) {
  const configs = {
    success: {
      icon: CheckCircle2,
      bg: "bg-[#16A34A]/10 border-[#16A34A]/25",
      iconColor: "text-[#16A34A]",
      defaultTitle: "Success",
    },
    warning: {
      icon: AlertTriangle,
      bg: "bg-[#F59E0B]/10 border-[#F59E0B]/25",
      iconColor: "text-[#F59E0B]",
      defaultTitle: "Warning",
    },
    error: {
      icon: AlertCircle,
      bg: "bg-[#DC2626]/10 border-[#DC2626]/25",
      iconColor: "text-[#DC2626]",
      defaultTitle: "Error",
    },
    info: {
      icon: Info,
      bg: "bg-[#2563EB]/10 border-[#2563EB]/25",
      iconColor: "text-[#2563EB]",
      defaultTitle: "Info",
    },
  }[variant];

  const IconComp = configs.icon;

  return (
    <div
      className={cn(
        "flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all",
        configs.bg,
        className
      )}
    >
      <div className={cn("p-1 rounded-full", configs.iconColor)}>
        <IconComp className="w-5 h-5 stroke-[2]" />
      </div>
      <div className="flex-1">
        <h5 className="text-xs font-bold text-[#171C1B] leading-none mb-1">
          {title ?? configs.defaultTitle}
        </h5>
        <p className="text-xs text-[#5E6663] leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}

/**
 * SemanticFeedbackList — Renders the complete suite of 4 semantic cards from Image 1
 */
export function SemanticFeedbackList({ className }: { className?: string | undefined }) {
  return (
    <div className={cn("space-y-3", className)}>
      <SemanticFeedbackCard
        variant="success"
        title="Success"
        description="Your changes have been saved."
      />
      <SemanticFeedbackCard
        variant="warning"
        title="Warning"
        description="Please review your input."
      />
      <SemanticFeedbackCard
        variant="error"
        title="Error"
        description="Something went wrong."
      />
      <SemanticFeedbackCard
        variant="info"
        title="Info"
        description="New updates are available."
      />
    </div>
  );
}

export default SemanticAlert;

