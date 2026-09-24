import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

/**
 * Next.js middleware for locale detection and routing.
 * Handles automatic locale negotiation based on Accept-Language header.
 * No authentication or authorization logic here — keep it lean.
 */
export default createMiddleware(routing);

export const config = {
  /**
   * Match all pathnames except:
   * - API routes
   * - Static files (public directory, _next)
   * - Favicon and other root-level assets
   */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};
