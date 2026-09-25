"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { cn } from "@/lib/cn";

interface LanguageSwitcherProps {
  compact?: boolean;
  isScrolled?: boolean;
}

/**
 * LanguageSwitcher — toggles between EN and ID locales.
 * Preserves the current path when switching.
 * SonarQube: explicit interface, no any, no hardcoded locale strings.
 */
export default function LanguageSwitcher({ compact = false, isScrolled = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();

  /**
   * Builds the alternate locale path preserving the current page.
   */
  const getAlternatePath = (targetLocale: string): string => {
    if (pathname.startsWith("/en") || pathname.startsWith("/id")) {
      return pathname.replace(/^\/(en|id)/, `/${targetLocale}`);
    }
    return `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  };


  if (compact) {
    return (
      <div className="flex items-center gap-1" role="group" aria-label="Language selection">
        <Globe className="w-3.5 h-3.5 text-[#94a3b8]" aria-hidden="true" />
        {(["en", "id"] as const).map((lang) => (
          <Link
            key={lang}
            href={getAlternatePath(lang)}
            className={cn(
              "text-xs font-semibold uppercase tracking-wider px-1 py-0.5",
              "transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]",
              locale === lang
                ? isScrolled ? "text-[#00A6A6]" : "text-[var(--trishanti-color-primary)]"
                : isScrolled
                  ? "text-white/70 hover:text-white"
                  : "text-[var(--trishanti-neutral-700)] hover:text-[var(--trishanti-neutral-900)] dark:text-white/70 dark:hover:text-white",
            )}
            aria-label={lang === "en" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            aria-current={locale === lang ? "true" : undefined}
            hrefLang={lang}
          >
            {lang.toUpperCase()}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-1 rounded-full px-3 py-1.5", isScrolled ? "bg-white/5" : "bg-black/5 dark:bg-white/5")} role="group" aria-label="Language selection">
      <Globe className="w-3.5 h-3.5 text-[#94a3b8]" aria-hidden="true" />
      {(["en", "id"] as const).map((lang, index) => (
        <span key={lang} className="flex items-center">
          {index > 0 && (
            <span className="text-[#1e293b] text-xs mx-1" aria-hidden="true">|</span>
          )}
          <Link
            href={getAlternatePath(lang)}
            className={cn(
              "text-xs font-semibold uppercase tracking-wider px-1",
              "transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]",
              locale === lang
                ? isScrolled ? "text-[#00A6A6]" : "text-[var(--trishanti-color-primary)]"
                : isScrolled
                  ? "text-white/70 hover:text-white"
                  : "text-[var(--trishanti-neutral-700)] hover:text-[var(--trishanti-neutral-900)] dark:text-white/70 dark:hover:text-white",
            )}
            aria-label={lang === "en" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            aria-current={locale === lang ? "true" : undefined}
            hrefLang={lang}
          >
            {lang.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
