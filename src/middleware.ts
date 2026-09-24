import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Next.js middleware for bilingual locale detection and routing.
 * Handles automatic locale negotiation based on Accept-Language header.
 * Must reside in src/ when Next.js project has a src/ directory.
 */
export default createMiddleware(routing);

export const config = {
  /**
   * Match:
   * - Root pathname ('/')
   * - Localized paths ('/en/:path*', '/id/:path*')
   * - All other pathnames except API routes, _next, static assets, and favicon
   */
  matcher: [
    "/",
    "/(en|id)/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};

