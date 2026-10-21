"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Building2, House, MessageCircle, Newspaper, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * DOM id of the bottom navigation bar. `FooterReveal` reads its rendered
 * height so the fixed footer is never hidden behind the bar.
 */
export const MOBILE_BOTTOM_NAV_ID = "mobile-bottom-nav";

interface BottomNavItem {
  key: "home" | "businesses" | "news" | "contact";
  path: string;
  labelEn: string;
  labelId: string;
  icon: LucideIcon;
  isPrimary?: boolean;
}

/**
 * Hick's Law — exactly FOUR top-level destinations are exposed on mobile.
 * Secondary pages (About, Sustainability, Careers, legal) remain available in
 * the full hamburger menu so the thumb bar never presents more than 4 choices.
 */
export const BOTTOM_NAV_ITEMS: readonly BottomNavItem[] = [
  { key: "home", path: "/", labelEn: "Home", labelId: "Beranda", icon: House },
  { key: "businesses", path: "/businesses", labelEn: "Businesses", labelId: "Bisnis", icon: Building2 },
  { key: "news", path: "/news", labelEn: "News", labelId: "Berita", icon: Newspaper },
  {
    key: "contact",
    path: "/contact",
    labelEn: "Contact",
    labelId: "Kontak",
    icon: MessageCircle,
    isPrimary: true,
  },
];

/**
 * MobileBottomNav — thumb-zone primary navigation (< lg breakpoint only).
 *
 * Fitts's Law:
 * - Docked to the bottom edge, inside the natural thumb reach on phones.
 * - Each item spans 1/4 of the viewport width and ≥ 56px height (well above
 *   the 44 × 44px WCAG 2.2 / A.5.18 minimum) with an 8px gap between targets.
 * - The primary conversion action (Contact) gets a filled, larger icon disc.
 *
 * Layering: z-[190] keeps it above page content and the fixed footer, but
 * below the header (200), the mobile drawer (210) and search/video overlays (300).
 */
export default function MobileBottomNav() {
  const locale = useLocale();
  const isId = locale === "id";
  const pathname = usePathname();

  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const isActive = (href: string): boolean => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      id={MOBILE_BOTTOM_NAV_ID}
      aria-label={isId ? "Navigasi utama seluler" : "Mobile primary navigation"}
      className="lg:hidden fixed inset-x-0 bottom-0 z-[190] h-[var(--trishanti-bottom-nav-offset)] pb-[env(safe-area-inset-bottom,0px)] border-t border-[var(--trishanti-neutral-200)] dark:border-white/10 bg-white/90 dark:bg-[#071A22]/90 backdrop-blur-xl shadow-[0_-8px_30px_rgba(7,26,34,0.12)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.45)]"
    >
      <ul className="grid grid-cols-4 gap-2 h-full px-2" role="list">
        {BOTTOM_NAV_ITEMS.map((item) => {
          const href = getPath(item.path);
          const active = isActive(href);
          const Icon = item.icon;
          const label = isId ? item.labelId : item.labelEn;

          return (
            <li key={item.key} className="flex">
              <Link
                href={href}
                data-testid={`bottom-nav-${item.key}`}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative flex flex-1 min-h-14 min-w-[var(--trishanti-touch-target)] flex-col items-center justify-center gap-1 rounded-xl",
                  "text-[11px] font-semibold tracking-wide select-none active:scale-[0.97]",
                  "transition-colors duration-[var(--trishanti-duration-fast)] ease-[var(--trishanti-ease-standard)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--trishanti-color-primary)]",
                  active
                    ? "text-[var(--trishanti-color-primary)]"
                    : "text-[var(--trishanti-neutral-700)] hover:text-[var(--trishanti-neutral-900)] dark:text-white/70 dark:hover:text-white",
                )}
              >
                {item.isPrimary ? (
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full text-white shadow-[0_4px_14px_rgba(0,166,166,0.45)]",
                      "bg-[var(--trishanti-color-primary)] group-hover:bg-[var(--trishanti-color-primary-dark)]",
                      "transition-colors duration-[var(--trishanti-duration-fast)] ease-[var(--trishanti-ease-standard)]",
                      active && "ring-2 ring-[var(--trishanti-color-primary)]/40 ring-offset-2 ring-offset-white dark:ring-offset-[#071A22]",
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                ) : (
                  <Icon className="h-6 w-6" aria-hidden="true" />
                )}
                <span>{label}</span>
                {active && !item.isPrimary && (
                  <span
                    className="absolute top-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-[var(--trishanti-color-primary)]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
