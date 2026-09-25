import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { PurposeSection } from "@/components/home/PurposeSection";
import { NewsSection } from "@/components/home/NewsSection";
import { RealImpactSection } from "@/components/home/RealImpactSection";
import { CareersSection } from "@/components/home/CareersSection";
import { BUSINESS_PILLARS, INSIGHT_ARTICLES } from "@/lib/data";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: `${t("siteName")} — ${t("tagline")}`,
    description: t("siteDescription"),
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const isId = locale === "id";

  const tHome = await getTranslations({ locale, namespace: "home" });

  const sideText = [
    tHome("hero.sideText1"),
    tHome("hero.sideText2"),
    tHome("hero.sideText3"),
    tHome("hero.sideText4"),
  ];

  return (
    <div className="flex flex-col w-full">
      {/* ============================================================
          §1 — HERO SECTION (Matching Visual Example 07 & 35)
          Metropolis bridge skyline at sunset, display typography with
          highlighted GENERATIONS., dual CTAs, and editorial side column.
          ============================================================ */}
      <HeroSection
        locale={locale}
        isId={isId}
        eyebrow={tHome("hero.eyebrow")}
        headline1={tHome("hero.headline1")}
        headline2={tHome("hero.headline2")}
        headline3={tHome("hero.headline3")}
        headlineHighlight={tHome("hero.headlineHighlight")}
        subheadline={tHome("hero.subheadline")}
        ctaPrimary={tHome("hero.ctaPrimary")}
        ctaSecondary={tHome("hero.ctaSecondary")}
        sideText={sideText}
      />

      {/* ============================================================
          §2 — OUR BUSINESS PILLARS (Matching Visual Example 07 & 35)
          Two-level architecture: Left headline & Right descriptive text,
          followed by 6 Vertical Editorial Photography Cards.
          ============================================================ */}
      <PillarsSection
        locale={locale}
        isId={isId}
        eyebrow={tHome("pillars.eyebrow")}
        headlinePart1={tHome("pillars.headlinePart1")}
        headlinePart2={tHome("pillars.headlinePart2")}
        description={tHome("pillars.description")}
        cta={tHome("pillars.cta")}
        pillars={BUSINESS_PILLARS}
      />

      {/* ============================================================
          §3 — OUR PURPOSE (Matching Visual Example 07 & 35)
          Split 50/50 container: Deep Midnight aerial river card on the left
          and 4 Metric Statistics Cards in a 2x2 grid on the right.
          ============================================================ */}
      <PurposeSection
        locale={locale}
        isId={isId}
        eyebrow={tHome("purpose.eyebrow")}
        headlinePart1={tHome("purpose.headlinePart1")}
        headlinePart2={tHome("purpose.headlinePart2")}
        body={tHome("purpose.body")}
        cta={tHome("purpose.cta")}
        stat1Value={tHome("purpose.stat1Value")}
        stat1Label={tHome("purpose.stat1Label")}
        stat1Sub={tHome("purpose.stat1Sub")}
        stat2Value={tHome("purpose.stat2Value")}
        stat2Label={tHome("purpose.stat2Label")}
        stat2Sub={tHome("purpose.stat2Sub")}
        stat3Value={tHome("purpose.stat3Value")}
        stat3Label={tHome("purpose.stat3Label")}
        stat3Sub={tHome("purpose.stat3Sub")}
        stat4Value={tHome("purpose.stat4Value")}
        stat4Sub={tHome("purpose.stat4Sub")}
      />

      {/* ============================================================
          §4 — REAL IMPACT (Matching Image 5 Board)
          People at the Heart of Progress — Stronger Communities,
          More Opportunities, and A More Sustainable World.
          ============================================================ */}
      <RealImpactSection
        locale={locale}
        isId={isId}
      />

      {/* ============================================================
          §5 — LATEST NEWS & INSIGHTS (Matching Visual Example 35)
          Editorial header with 3 featured article cards covering
          Corporate, People, and Sustainability initiatives.
          ============================================================ */}
      <NewsSection
        locale={locale}
        isId={isId}
        eyebrow={tHome("news.eyebrow")}
        headline={tHome("news.headline")}
        cta={tHome("news.cta")}
        articles={INSIGHT_ARTICLES}
      />

      {/* ============================================================
          §6 — CAREERS HIGHLIGHT (Board B.5 Item 03 Section 06)
          Join our journey and make an impact.
          ============================================================ */}
      <CareersSection
        locale={locale}
        isId={isId}
      />

    </div>
  );
}
