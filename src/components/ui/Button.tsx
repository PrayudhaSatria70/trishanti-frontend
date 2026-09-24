import React from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "secondary-dark" | "outline" | "ghost" | "link" | "gradient";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  isSuccess?: boolean;
  loadingText?: string;
  successText?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Button — Trishanti Design System atomic component.
 *
 * Implements WCAG 2.2 AA focus indicators, state changes (Default, Hover, Loading, Success, Disabled),
 * Cyan-Teal accent styling, Border System tokens (Image 3), and Gradient options (Image 4).
 * SonarQube: typed props, no any, accessible default role.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      isSuccess = false,
      loadingText = "Sending...",
      successText = "✓ Sent!",
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A6A6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071A22] disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
    }[size];

    const variantStyles = {
      primary: isSuccess
        ? "bg-[#16A34A] hover:bg-[#15803d] text-white font-semibold shadow-[0_0_20px_rgba(22,163,74,0.35)]"
        : "bg-[#00A6A6] hover:bg-[#008f8f] text-white font-semibold shadow-sm hover:shadow-[0_0_20px_rgba(0,166,166,0.35)]",
      secondary:
        "bg-white hover:bg-[#F2F4F3] text-[#171C1B] border border-[#D1D5DB] hover:border-[#A3A8B3] shadow-xs",
      "secondary-dark":
        "bg-[#071A22] hover:bg-[#0d222c] text-white border border-white/15 hover:border-white/30 backdrop-blur-sm",
      outline:
        "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40",
      ghost:
        "bg-transparent hover:bg-white/5 text-[#DEE3E1] hover:text-white border border-transparent hover:border-white/20",
      link:
        "bg-transparent text-[#00A6A6] hover:text-[#008f8f] hover:underline p-0 h-auto rounded-none focus-visible:ring-offset-0",
      gradient:
        "bg-gradient-to-r from-[#22B8C7] via-[#00A6A6] to-[#087C8C] text-white font-semibold shadow-[0_4px_20px_rgba(0,166,166,0.35)] hover:shadow-[0_6px_25px_rgba(0,166,166,0.5)] hover:brightness-105",
    }[variant];

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading || isSuccess}
        className={cn(
          baseStyles,
          sizeStyles,
          variantStyles,
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <span
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"
              aria-hidden="true"
            />
            <span>{loadingText}</span>
          </>
        ) : isSuccess ? (
          <span>{successText}</span>
        ) : (
          <>
            {leftIcon}
            <span>{children}</span>
            {rightIcon}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
