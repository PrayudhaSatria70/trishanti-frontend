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
        ? "bg-[var(--trishanti-color-success)] hover:brightness-110 text-white font-semibold shadow-[0_0_20px_rgba(22,163,74,0.35)]"
        : "bg-[var(--trishanti-color-primary)] hover:bg-[var(--trishanti-color-primary-dark)] text-white font-semibold shadow-[var(--trishanti-elevation-1)] hover:shadow-[0_0_20px_rgba(0,166,166,0.35)] border border-transparent",
      secondary:
        "bg-[var(--trishanti-color-surface-light)] hover:bg-[var(--trishanti-color-bg-light)] text-[var(--trishanti-color-text-light)] border border-[var(--trishanti-neutral-200)] hover:border-[var(--trishanti-neutral-400)] shadow-[var(--trishanti-elevation-1)]",
      "secondary-dark":
        "bg-[var(--trishanti-color-bg-dark)] hover:bg-[var(--trishanti-color-surface-dark)] text-white border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.24)] backdrop-blur-sm shadow-[var(--trishanti-elevation-dark-1)]",
      outline:
        "bg-transparent hover:bg-white/10 text-white border border-[rgba(255,255,255,0.2)] hover:border-white/40",
      ghost:
        "bg-transparent hover:bg-white/5 text-[var(--trishanti-neutral-200)] hover:text-white border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)]",
      link:
        "bg-transparent text-[var(--trishanti-color-primary)] hover:text-[var(--trishanti-color-primary-dark)] hover:underline p-0 h-auto rounded-none focus-visible:ring-offset-0 border border-transparent",
      gradient:
        "bg-[var(--trishanti-gradient-signature)] text-white font-semibold shadow-[0_4px_20px_rgba(0,166,166,0.35)] hover:shadow-[0_6px_25px_rgba(0,166,166,0.5)] hover:brightness-105 border border-transparent",
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
