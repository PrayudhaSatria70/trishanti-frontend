"use client";

import React from "react";
import {
  Building2,
  Factory,
  Leaf,
  Cpu,
  Users,
  Mountain,
  User,
  Settings,
  Bell,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/cn";

/* =========================================================================
   TRISHANTI DESIGN SYSTEM — ICONOGRAPHY SYSTEM (Image 1)
   - Style: Outline (Primary)
   - Stroke Weight: 1.5px (>=24px) | 2px (12-20px)
   - Size Scale: 12px (XS), 16px (SM), 20px (MD), 24px (LG), 32px (XL), 48px (2XL)
   - States: Default (Neutral), Hover (Cyan), Active (Accent), Disabled (Muted)
   ========================================================================= */

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type IconState = "default" | "hover" | "active" | "disabled";

const SIZE_MAP: Record<IconSize, { size: number; strokeWidth: number; className: string }> = {
  xs: { size: 12, strokeWidth: 2, className: "w-3 h-3" },
  sm: { size: 16, strokeWidth: 2, className: "w-4 h-4" },
  md: { size: 20, strokeWidth: 2, className: "w-5 h-5" },
  lg: { size: 24, strokeWidth: 1.5, className: "w-6 h-6" },
  xl: { size: 32, strokeWidth: 1.5, className: "w-8 h-8" },
  "2xl": { size: 48, strokeWidth: 1.5, className: "w-12 h-12" },
};

const STATE_CLASSES: Record<IconState, string> = {
  default: "text-[#7C8581] dark:text-[#94a3b8]",
  hover: "text-[#00A6A6] transition-colors duration-200",
  active: "text-[#00A6A6] drop-shadow-[0_0_8px_rgba(0,166,166,0.5)]",
  disabled: "text-[#A6ADAA] dark:text-white/30 cursor-not-allowed",
};

interface IconWrapperProps {
  size?: IconSize;
  state?: IconState;
  className?: string;
  children: (props: { size: number; strokeWidth: number; className: string }) => React.ReactNode;
}

export function IconWrapper({
  size = "md",
  state = "default",
  className,
  children,
}: IconWrapperProps) {
  const config = SIZE_MAP[size];
  const stateClass = STATE_CLASSES[state];

  return (
    <span
      className={cn("inline-flex items-center justify-center shrink-0", stateClass, className)}
      aria-hidden="true"
    >
      {children({
        size: config.size,
        strokeWidth: config.strokeWidth,
        className: config.className,
      })}
    </span>
  );
}

/* =========================================================================
   BUSINESS PILLAR ICONS (Item 06)
   1. Infrastructure: Foundation for progress
   2. Industrial Trading: Connecting opportunities
   3. Agriculture & Food: Nourishing communities
   4. Technology & Digital: Innovating tomorrow
   5. Consumer & Lifestyle: Enhancing everyday life
   6. Experiences & Ventures: Exploring new horizons
   ========================================================================= */

export type PillarIconType =
  | "infrastructure"
  | "industrial-trading"
  | "agriculture-food"
  | "technology-digital"
  | "consumer-lifestyle"
  | "experiences-ventures";

interface PillarIconProps {
  pillar: PillarIconType;
  size?: IconSize;
  state?: IconState;
  container?: "none" | "light" | "dark";
  className?: string;
}

export function PillarIcon({
  pillar,
  size = "lg",
  state = "default",
  container = "none",
  className,
}: PillarIconProps) {
  const config = SIZE_MAP[size];

  const renderIcon = () => {
    switch (pillar) {
      case "infrastructure":
        return <Building2 size={config.size} strokeWidth={config.strokeWidth} />;
      case "industrial-trading":
        return <Factory size={config.size} strokeWidth={config.strokeWidth} />;
      case "agriculture-food":
        return <Leaf size={config.size} strokeWidth={config.strokeWidth} />;
      case "technology-digital":
        return <Cpu size={config.size} strokeWidth={config.strokeWidth} />;
      case "consumer-lifestyle":
        return <Users size={config.size} strokeWidth={config.strokeWidth} />;
      case "experiences-ventures":
        return <Mountain size={config.size} strokeWidth={config.strokeWidth} />;
      default:
        return <Building2 size={config.size} strokeWidth={config.strokeWidth} />;
    }
  };

  const content = (
    <span className={cn(STATE_CLASSES[state], className)} aria-hidden="true">
      {renderIcon()}
    </span>
  );

  if (container === "none") {
    return content;
  }

  // Item 07: Icon Containers
  if (container === "light") {
    return (
      <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_4px_16px_rgba(23,28,27,0.06)] flex items-center justify-center text-[#00A6A6]">
        {content}
      </div>
    );
  }

  return (
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0d222c] to-[#071A22] border border-[#00A6A6]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(0,166,166,0.15)] flex items-center justify-center text-[#00A6A6]">
      {content}
    </div>
  );
}

/* =========================================================================
   SOCIAL ICONS (Item 11)
   LinkedIn, Instagram, YouTube, X (Twitter)
   ========================================================================= */

interface SocialIconProps {
  platform: "linkedin" | "instagram" | "youtube" | "x";
  href: string;
  size?: IconSize;
  className?: string;
}

export function SocialIconLink({
  platform,
  href,
  size = "md",
  className,
}: SocialIconProps) {
  const config = SIZE_MAP[size];

  const renderSvg = () => {
    switch (platform) {
      case "linkedin":
        return (
          <svg className={config.className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className={config.className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "youtube":
        return (
          <svg className={config.className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case "x":
        return (
          <svg className={config.className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Trishanti on ${platform}`}
      className={cn(
        "p-2 rounded-full text-[#7C8581] hover:text-[#00A6A6] hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200",
        className,
      )}
    >
      {renderSvg()}
    </a>
  );
}

/* =========================================================================
   USER PROFILE DROPDOWN MENU (Items 08 & 09)
   Light Mode (Elevation 2, frosted glass) / Dark Mode (Elevation 1, tonal)
   ========================================================================= */

interface UserDropdownMenuProps {
  theme?: "light" | "dark";
  userName?: string;
  unreadCount?: number;
  isOpen: boolean;
  onClose: () => void;
  onLogout?: () => void;
}

export function UserDropdownMenu({
  theme = "dark",
  userName = "Daniel Pratama",
  unreadCount = 3,
  isOpen,
  onClose,
  onLogout,
}: UserDropdownMenuProps) {
  if (!isOpen) {
    return null;
  }

  const isLight = theme === "light";

  return (
    <div
      role="menu"
      aria-label="User navigation"
      className={cn(
        "absolute right-0 top-full mt-2 w-56 rounded-2xl p-2 z-[var(--trishanti-z-dropdown)] transition-all animate-fade-in",
        isLight
          ? "bg-white/90 backdrop-blur-xl border border-black/10 shadow-[0_8px_24px_rgba(23,28,27,0.12)] text-[#071A22]"
          : "bg-[#0d222c]/95 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(0,166,166,0.15)] text-white",
      )}
    >
      {/* User Header */}
      <div className="px-3 py-2 border-b border-black/5 dark:border-white/10 mb-1">
        <div className="text-xs text-[#7C8581] dark:text-[#94a3b8] uppercase tracking-wider font-semibold">
          Signed in as
        </div>
        <div className="text-sm font-semibold truncate mt-0.5">{userName}</div>
      </div>

      {/* Menu items */}
      <div className="space-y-0.5 text-xs font-medium">
        <button
          type="button"
          role="menuitem"
          onClick={onClose}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left",
            isLight
              ? "hover:bg-black/5 text-[#071A22]"
              : "hover:bg-white/10 text-white",
          )}
        >
          <User className="w-4 h-4 text-[#00A6A6]" />
          <span>Profile</span>
        </button>

        <button
          type="button"
          role="menuitem"
          onClick={onClose}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left",
            isLight
              ? "hover:bg-black/5 text-[#071A22]"
              : "hover:bg-white/10 text-white",
          )}
        >
          <Settings className="w-4 h-4 text-[#00A6A6]" />
          <span>Settings</span>
        </button>

        <button
          type="button"
          role="menuitem"
          onClick={onClose}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-left",
            isLight
              ? "hover:bg-black/5 text-[#071A22]"
              : "hover:bg-white/10 text-white",
          )}
        >
          <div className="flex items-center gap-3">
            <Bell className="w-4 h-4 text-[#00A6A6]" />
            <span>Notifications</span>
          </div>
          {unreadCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#00A6A6] text-white text-[10px] font-bold flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>

        <div className="border-t border-black/5 dark:border-white/10 my-1" />

        <button
          type="button"
          role="menuitem"
          onClick={() => {
            onClose();
            onLogout?.();
          }}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left text-[#DC2626]",
            isLight ? "hover:bg-[#DC2626]/10" : "hover:bg-[#DC2626]/20",
          )}
        >
          <LogOut className="w-4 h-4" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}
