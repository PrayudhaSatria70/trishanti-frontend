import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/Providers";
import { FooterReveal } from "@/components/layout/FooterReveal";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

/**
 * Generates page-level metadata with locale-aware title and description.
 */
export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      template: `%s | ${t("siteName")}`,
      default: `${t("siteName")} — ${t("tagline")}`,
    },
    description: t("siteDescription"),
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_APP_URL ?? "https://trishanti.id",
    ),
    openGraph: {
      siteName: t("siteName"),
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
  };
}

/**
 * Generates static locale params for Next.js static generation.
 */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Root locale layout — wraps every page with:
 * - <html> with correct lang attribute (WCAG 2.2 AA)
 * - Skip-to-content link (keyboard accessibility)
 * - Providers (next-intl)
 * - Navbar + Footer (B.4 shell)
 */
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased font-sans text-[var(--trishanti-neutral-900)] bg-[var(--trishanti-neutral-50)] dark:text-white dark:bg-[var(--trishanti-color-bg-dark)] transition-colors duration-300" suppressHydrationWarning>
        <Providers locale={locale} messages={messages}>
          {/* Skip-to-content — WCAG 2.2 AA keyboard accessibility */}
          <a href="#main-content" className="skip-to-content">
            {t("skipToContent")}
          </a>

          <Navbar />

        <FooterReveal footer={<Footer />}>
          <main id="main-content">
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </main>
        </FooterReveal>
        </Providers>
      </body>
    </html>
  );
}
