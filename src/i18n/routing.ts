import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

/**
 * Defines the locale routing configuration for the application.
 * Supported locales: English (en) and Bahasa Indonesia (id).
 * Default locale: en.
 * Using localePrefix: "always" guarantees deterministic, 1:1 folder-based routing
 * (/en, /en/about, /id, /id/about) and prevents 404 rewrite ambiguities.
 */
export const routing = defineRouting({
  locales: ["en", "id"] as const,
  defaultLocale: "en",
  localePrefix: "always",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

