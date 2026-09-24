import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  BUSINESS_PILLARS,
  BUSINESS_FIELDS,
  getFieldBySlug,
  getPortfolioItem,
} from "@/lib/data";
import { PageContainer } from "@/components/layout/PageContainer";
import { Breadcrumb, Divider } from "@/components/composite/ContentCards";

interface BusinessFieldPageProps {
  params: Promise<{ locale: string; slug: string; fieldSlug: string }>;
}

export async function generateStaticParams() {
  return BUSINESS_FIELDS.map((field) => ({
    slug: field.pillarSlug,
    fieldSlug: field.slug,
  }));
}

export async function generateMetadata({
  params,
}: BusinessFieldPageProps): Promise<Metadata> {
  const { locale, slug, fieldSlug } = await params;
  const field = getFieldBySlug(slug, fieldSlug);

  if (!field) {
    return { title: "Business Field Not Found | Trishanti" };
  }

  const title = locale === "id" ? field.titleId : field.titleEn;
  const desc = locale === "id" ? field.subtitleId : field.subtitleEn;

  return {
    title: `${title} | Trishanti Business Fields`,
    description: desc,
  };
}

export default async function BusinessFieldPage({
  params,
}: BusinessFieldPageProps) {
  const { locale, slug, fieldSlug } = await params;
  const isId = locale === "id";

  const pillar = BUSINESS_PILLARS.find((p) => p.slug === slug);
  const field = getFieldBySlug(slug, fieldSlug);

  if (!pillar || !field) {
    notFound();
  }

  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;
  const portfolioItem = field.portfolioSlug
    ? getPortfolioItem(field.portfolioSlug)
    : null;

  return (
    <div className="flex flex-col w-full bg-[#F2F4F3] text-[#171C1B]">
      {/* 1. CINEMATIC HERO (Matching Level 04 Board) */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-[#071A22] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={field.image}
            alt={isId ? field.titleId : field.titleEn}
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A22] via-[#071A22]/85 to-transparent sm:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A22] via-[#071A22]/70 to-transparent" />
        </div>

        <PageContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Breadcrumb
              items={[
                { label: isId ? "Beranda" : "Home", href: getPath("/") },
                { label: isId ? "Bisnis" : "Business", href: getPath("/businesses") },
                {
                  label: isId ? pillar.titleId : pillar.titleEn,
                  href: getPath(`/businesses/${pillar.slug}`),
                },
                { label: isId ? field.titleId : field.titleEn },
              ]}
              variant="dark"
            />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase text-[#00A6A6]">
              <Layers className="w-3.5 h-3.5" />
              <span>{isId ? "BIDANG BISNIS" : "BUSINESS FIELD"}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.12] tracking-tight">
              {isId ? field.titleId : field.titleEn}
            </h1>

            <p className="text-lg sm:text-xl text-[#DEE3E1] leading-relaxed font-light">
              {isId ? field.subtitleId : field.subtitleEn}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* 2. SUB-NAVIGATION TABS (Matching Level 04 Board) */}
      <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-[#D9DDDA]">
        <PageContainer>
          <div className="flex items-center space-x-8 overflow-x-auto py-4 text-sm font-semibold text-[#5E6663]">
            <a href="#overview" className="text-[#00A6A6] border-b-2 border-[#00A6A6] pb-1 whitespace-nowrap">
              {isId ? "Ringkasan" : "Overview"}
            </a>
            <a href="#industry-context" className="hover:text-[#171C1B] transition-colors whitespace-nowrap">
              {isId ? "Konteks Industri" : "Industry Context"}
            </a>
            <a href="#direction" className="hover:text-[#171C1B] transition-colors whitespace-nowrap">
              {isId ? "Arah Strategis" : "Our Direction"}
            </a>
            <a href="#opportunities" className="hover:text-[#171C1B] transition-colors whitespace-nowrap">
              {isId ? "Peluang & Sinergi" : "Opportunities"}
            </a>
            <a href="#related" className="hover:text-[#171C1B] transition-colors whitespace-nowrap">
              {isId ? "Bidang Terkait" : "Related"}
            </a>
          </div>
        </PageContainer>
      </div>

      {/* 3. OVERVIEW & CURRENT STATUS CARD (Matching Level 04 Board) */}
      <section id="overview" className="py-20 lg:py-28 bg-white border-b border-[#D9DDDA]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 7 cols: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A6A6]">
                {isId ? "FONDASI EKOSISTEM" : "ECOSYSTEM FOUNDATION"}
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171C1B] leading-snug">
                {isId
                  ? `Energi & Peluang untuk Masa Depan yang Lebih Baik`
                  : `Powering Opportunities for a Better Future`}
              </h2>

              <p className="text-base text-[#5E6663] leading-relaxed">
                {isId ? field.overviewId : field.overviewEn}
              </p>

              {field.kbliCode && (
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F4F3] border border-[#D9DDDA] text-xs font-mono font-semibold text-[#414946]">
                    <span>KBLI Scope:</span>
                    <span className="text-[#00A6A6]">{field.kbliCode}</span>
                  </span>
                </div>
              )}
            </div>

            {/* Right 5 cols: Current Status Box (Exact Level 04 Design) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-[#071A22] text-white border border-white/10 shadow-xl space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DEE3E1] block">
                  {isId ? "STATUS SAAT INI" : "CURRENT STATUS"}
                </span>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00A6A6] bg-[#00A6A6]/10 text-xs font-bold tracking-wide text-[#00A6A6]">
                  <span className="w-2 h-2 rounded-full bg-[#00A6A6] animate-pulse" />
                  <span>{field.status}</span>
                </div>

                <p className="text-sm text-[#DEE3E1] leading-relaxed font-light">
                  {isId
                    ? "Bidang bisnis ini merupakan bagian dari visi pembangunan jangka panjang Trishanti. Usaha dan inisiatif spesifik akan diperkenalkan seiring berkembangnya peluang."
                    : "This business field is part of Trishanti's long-term development vision. Specific ventures and initiatives will be introduced as opportunities evolve."}
                </p>

                {portfolioItem && (
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs text-[#DEE3E1] uppercase tracking-wider block mb-2 font-medium">
                      {isId ? "Ventura Aktif Terkait:" : "Active Venture in Market:"}
                    </span>
                    <Link
                      href={getPath(`/portfolio/${portfolioItem.slug}`)}
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
                    >
                      <div>
                        <p className="font-serif font-bold text-white text-base group-hover:text-[#00A6A6] transition-colors">
                          {portfolioItem.name}
                        </p>
                        <p className="text-xs text-[#DEE3E1] italic">
                          &ldquo;{isId ? portfolioItem.taglineId : portfolioItem.taglineEn}&rdquo;
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#00A6A6] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 4. INDUSTRY CONTEXT & OUR DIRECTION */}
      <section id="industry-context" className="py-20 lg:py-28 bg-[#F2F4F3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Industry Context */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#D9DDDA] shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00A6A6]">
                <TrendingUp className="w-4 h-4" />
                <span>{isId ? "KONTEKS INDUSTRI" : "INDUSTRY CONTEXT"}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#171C1B]">
                {isId ? "Dinamika & Peluang Sektor" : "Sector Dynamics & Macro Outlook"}
              </h3>
              <p className="text-sm text-[#5E6663] leading-relaxed">
                {isId ? field.industryContextId : field.industryContextEn}
              </p>
            </div>

            {/* Our Direction */}
            <div id="direction" className="p-8 sm:p-10 rounded-2xl bg-white border border-[#D9DDDA] shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00A6A6]">
                <Sparkles className="w-4 h-4" />
                <span>{isId ? "ARAH STRATEGIS KAMI" : "OUR STRATEGIC DIRECTION"}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#171C1B]">
                {isId ? "Pendekatan Operasional Trishanti" : "Trishanti's Operational Approach"}
              </h3>
              <p className="text-sm text-[#5E6663] leading-relaxed">
                {isId ? field.ourDirectionId : field.ourDirectionEn}
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 5. OPPORTUNITIES LIST */}
      <section id="opportunities" className="py-20 lg:py-28 bg-white border-y border-[#D9DDDA]">
        <PageContainer>
          <div className="max-w-3xl space-y-6 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A6A6]">
              {isId ? "PELUANG INVESTASI & USAHA" : "VENTURE & INVESTMENT OPPORTUNITIES"}
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#171C1B]">
              {isId ? "Area Fokus Pengembangan" : "Key Growth Focus Areas"}
            </h2>
            <p className="text-sm text-[#5E6663]">
              {isId
                ? "Inisiatif yang sedang ditelaah untuk menghasilkan imbal hasil jangka panjang yang bertanggung jawab."
                : "Active focus areas structured for responsible capital deployment and sustainable community benefit."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(isId ? field.opportunitiesId : field.opportunitiesEn).map((opp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#F2F4F3] border border-[#D9DDDA] flex items-start gap-3.5"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00A6A6] flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-[#171C1B] leading-relaxed">
                  {opp}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 6. RELATED BUSINESS FIELDS (Matching Level 04 Board) */}
      {field.relatedFields && field.relatedFields.length > 0 && (
        <section id="related" className="py-20 lg:py-28 bg-[#F2F4F3]">
          <PageContainer>
            <div className="space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A6A6] block mb-1">
                  {isId ? "SINERGI EKOSISTEM" : "ECOSYSTEM SYNERGIES"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171C1B]">
                  {isId ? "Bidang Bisnis Terkait" : "Related Business Fields"}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {field.relatedFields.map((rel, idx) => (
                  <Link
                    key={idx}
                    href={getPath(`/businesses/${rel.pillarSlug}/${rel.slug}`)}
                    className="p-5 rounded-xl bg-white border border-[#D9DDDA] hover:border-[#00A6A6] hover:shadow-md transition-all flex items-center justify-between group"
                  >
                    <span className="font-semibold text-sm text-[#171C1B] group-hover:text-[#00A6A6] transition-colors">
                      {isId ? rel.titleId : rel.titleEn}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#7C8581] group-hover:text-[#00A6A6] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>
      )}

      <Divider text={isId ? "Masa Depan Lebih Cerah" : "A Brighter Tomorrow"} />

      {/* 7. BOTTOM NAVIGATION */}
      <section className="py-12 bg-white border-t border-[#D9DDDA]">
        <PageContainer>
          <div className="flex items-center justify-between">
            <Link
              href={getPath(`/businesses/${pillar.slug}`)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5E6663] hover:text-[#00A6A6] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                {isId
                  ? `Kembali ke Pilar ${pillar.titleId}`
                  : `Back to ${pillar.titleEn} Pillar`}
              </span>
            </Link>

            <Link
              href={getPath("/businesses")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A6A6] hover:text-[#008f8f] transition-colors"
            >
              <span>{isId ? "Lihat Semua Bisnis" : "All Businesses"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
