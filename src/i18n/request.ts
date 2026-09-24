import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

/**
 * next-intl request configuration.
 * Loads the correct locale message file for each request.
 * SonarQube: explicit return type, no implicit any.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = (
    await import(`../../messages/${locale}.json`)
  ) as { default: Record<string, unknown> };

  return {
    locale,
    messages: messages.default,
  };
});
