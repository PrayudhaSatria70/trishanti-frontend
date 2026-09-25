"use client";

import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  locale: string;
  messages: AbstractIntlMessages;
  children: React.ReactNode;
}

/**
 * Providers — wraps the locale layout with client-side context providers.
 * Currently: NextIntlClientProvider for bilingual support.
 * Future: ThemeProvider, QueryClientProvider can be added here.
 *
 * SonarQube: explicit interface, no any, single responsibility.
 */
export default function Providers({ locale, messages, children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
