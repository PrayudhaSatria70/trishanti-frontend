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
      "group inline-flex items-center justify-center font-medium rounded-full transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A6A6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071A22] disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
    }[size];

    const variantStyles = {
      primary: isSuccess
        ? "bg-gradient-to-r from-[#16A34A] to-[#15803D] hover:brightness-110 text-white font-semibold shadow-[0_0_20px_rgba(22,163,74,0.35)]"
        : "bg-gradient-to-r from-[#00A6A6] via-[#00B4B4] to-[#087C8C] hover:from-[#00B4B4] hover:to-[#008f8f] active:from-[#008f8f] active:to-[#06636f] text-white font-semibold shadow-[0_4px_16px_rgba(0,166,166,0.3)] hover:shadow-[0_6px_24px_rgba(0,166,166,0.45)] border border-transparent hover:brightness-105",
      secondary:
        "bg-gradient-to-b from-white via-slate-50 to-[var(--trishanti-neutral-100)] dark:from-white/10 dark:via-white/5 dark:to-white/[0.02] hover:from-[var(--trishanti-neutral-100)] hover:to-[var(--trishanti-neutral-200)] dark:hover:from-white/15 dark:hover:to-white/10 text-[var(--trishanti-color-text-light)] dark:text-white border border-[var(--trishanti-neutral-200)] dark:border-white/15 hover:border-[var(--trishanti-color-primary)] shadow-[var(--trishanti-elevation-1)]",
      "secondary-dark":
        "bg-gradient-to-b from-[#13333f] via-[#0d222c] to-[#071A22] hover:from-[#1a4454] hover:to-[#102b35] text-white border border-white/15 hover:border-[#00A6A6]/40 backdrop-blur-sm shadow-[var(--trishanti-elevation-dark-1)]",
      outline:
        "bg-gradient-to-r from-white/[0.04] via-transparent to-white/[0.04] hover:from-white/15 hover:via-white/20 hover:to-white/15 text-white border border-white/25 hover:border-[#00A6A6] backdrop-blur-sm",
      ghost:
        "bg-gradient-to-r from-transparent to-transparent hover:from-white/10 hover:to-white/5 text-[var(--trishanti-neutral-200)] hover:text-white border border-[rgba(255,255,255,0.15)] hover:border-[#00A6A6]/50",
      link:
        "bg-transparent bg-gradient-to-r from-[var(--trishanti-color-primary)] to-[var(--trishanti-color-primary-light)] bg-clip-text text-transparent hover:brightness-125 hover:underline p-0 h-auto rounded-none focus-visible:ring-offset-0 border border-transparent",
      gradient:
        "bg-[var(--trishanti-gradient-signature)] text-white font-semibold shadow-[0_4px_20px_rgba(0,166,166,0.35)] hover:shadow-[0_6px_25px_rgba(0,166,166,0.5)] hover:brightness-110 border border-transparent",
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
            {leftIcon && (
              <span className="transition-transform duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] group-hover:-translate-x-1">
                {leftIcon}
              </span>
            )}
            <span>{children}</span>
            {rightIcon && (
              <span className="transition-transform duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] group-hover:translate-x-1">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
