import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  BUSINESS_PILLARS,
  getFieldsByPillar,
} from "@/lib/data";
import { PageContainer } from "@/components/layout/PageContainer";
import { Breadcrumb, Divider } from "@/components/composite/ContentCards";

interface BusinessDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return BUSINESS_PILLARS.map((pillar) => ({
    slug: pillar.slug,
  }));
}

export async function generateMetadata({
  params,
}: BusinessDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const pillar = BUSINESS_PILLARS.find((p) => p.slug === slug);

  if (!pillar) {
    return { title: "Sector Not Found | Trishanti" };
  }

  const title = locale === "id" ? pillar.titleId : pillar.titleEn;
  const desc = locale === "id" ? pillar.summaryId : pillar.summaryEn;

  return {
    title: `${title} | Trishanti Businesses`,
    description: desc,
  };
}

export default async function BusinessDetailPage({
  params,
}: BusinessDetailPageProps) {
  const { locale, slug } = await params;
  const isId = locale === "id";

  const pillarIndex = BUSINESS_PILLARS.findIndex((p) => p.slug === slug);
  if (pillarIndex === -1) {
    notFound();
  }

  const pillar = BUSINESS_PILLARS[pillarIndex]!;
  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const fields = getFieldsByPillar(slug);
  const otherPillars = BUSINESS_PILLARS.filter((p) => p.slug !== slug).slice(0, 2);

  // 01 / 06 counter format
  const counterText = `${String(pillarIndex + 1).padStart(2, "0")} / ${String(
    BUSINESS_PILLARS.length
  ).padStart(2, "0")}`;

  return (
    <div className="flex flex-col w-full transition-colors duration-300">
      {/* 1. CINEMATIC HERO (Matching Level 03 Board) */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-[#071A22] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={pillar.image}
            alt={isId ? pillar.titleId : pillar.titleEn}
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity scale-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A22] via-[#071A22]/85 to-transparent sm:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A22] via-[#071A22]/80 to-transparent" />
        </div>

        <PageContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Breadcrumb
              items={[
                { label: isId ? "Beranda" : "Home", href: getPath("/") },
                { label: isId ? "Bisnis" : "Business", href: getPath("/businesses") },
                { label: isId ? pillar.titleId : pillar.titleEn },
              ]}
              variant="dark"
            />

            {/* Pillar Counter & Tag */}
            <div className="flex items-center gap-4 text-sm font-semibold tracking-wider text-[#00A6A6]">
              <span className="font-mono text-base font-bold text-white/90 bg-white/10 px-3 py-1 rounded-md border border-white/15">
                {counterText}
              </span>
              <span className="uppercase tracking-widest text-xs">
                {pillar.subtitleEn ?? pillar.nameKey}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.12] tracking-tight">
              {isId ? pillar.titleId : pillar.titleEn}
            </h1>

            <p className="text-lg sm:text-xl text-[#DEE3E1] leading-relaxed font-light">
              {isId
                ? pillar.headlineId ?? pillar.summaryId
                : pillar.headlineEn ?? pillar.summaryEn}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* 2. SUB-NAVIGATION TABS (Matching Level 03 Board) */}
      <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-[#D9DDDA]">
        <PageContainer>
          <div className="flex items-center space-x-8 overflow-x-auto py-4 text-sm font-semibold text-[#5E6663]">
            <a href="#overview" className="text-[#00A6A6] border-b-2 border-[#00A6A6] pb-1 whitespace-nowrap">
              {isId ? "Ringkasan" : "Overview"}
            </a>
            <a href="#business-fields" className="hover:text-[#171C1B] transition-colors whitespace-nowrap">
              {isId ? "Bidang Bisnis" : "Business Fields"}
            </a>
            <a href="#our-approach" className="hover:text-[#171C1B] transition-colors whitespace-nowrap">
              {isId ? "Pendekatan Operasional" : "Our Approach"}
            </a>
            <a href="#related" className="hover:text-[#171C1B] transition-colors whitespace-nowrap">
              {isId ? "Bisnis Terkait" : "Related Business"}
            </a>
            <Link href={getPath("/news")} className="hover:text-[#171C1B] transition-colors whitespace-nowrap">
              {isId ? "Wawasan & Berita" : "Insights"}
            </Link>
          </div>
        </PageContainer>
      </div>

      {/* 3. OVERVIEW & METRICS ROW (Matching Level 03 Board) */}
      <section id="overview" className="py-20 lg:py-28 bg-white border-b border-[#D9DDDA]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A6A6]">
                {isId ? "FONDASI ESENSIAL" : "AN ESSENTIAL FOUNDATION"}
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#171C1B] leading-tight">
                {isId
                  ? "Fondasi Esensial untuk Hari Esok yang Lebih Cerah."
                  : "An Essential Foundation for a Brighter Tomorrow."}
              </h2>

              <p className="text-base text-[#5E6663] leading-relaxed">
                {isId ? pillar.descriptionId : pillar.descriptionEn}
              </p>

              <div className="pt-4">
                <a
                  href="#business-fields"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00A6A6] hover:bg-[#008f8f] text-white font-semibold text-sm transition-all shadow-md group"
                >
                  <span>{isId ? "Jelajahi Bidang Bisnis" : "Explore Business Fields"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Metrics Row / Column */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              <div className="p-6 rounded-2xl bg-[#F2F4F3] border border-[#D9DDDA]">
                <span className="font-sans font-extrabold text-4xl text-[#171C1B] block mb-1">
                  {fields.length || pillar.kbliCount}
                </span>
                <span className="font-semibold text-sm text-[#171C1B] block">
                  {isId ? "Bidang Bisnis" : "Business Fields"}
                </span>
                <span className="text-xs text-[#7C8581]">
                  {isId ? "Terintegrasi KBLI resmi" : "Mapped to KBLI scopes"}
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-[#F2F4F3] border border-[#D9DDDA]">
                <span className="font-sans font-extrabold text-4xl text-[#171C1B] block mb-1">
                  3+
                </span>
                <span className="font-semibold text-sm text-[#171C1B] block">
                  {isId ? "Fokus Strategis" : "Strategic Focus"}
                </span>
                <span className="text-xs text-[#7C8581]">
                  {isId ? "Mitigasi risiko multi-siklus" : "Multi-cycle risk mitigation"}
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-[#071A22] text-white border border-[#071A22]">
                <span className="font-heading italic text-2xl text-[#00A6A6] block mb-1">
                  {isId ? "Jangka Panjang" : "Long-Term"}
                </span>
                <span className="font-semibold text-sm text-white block">
                  {isId ? "Penciptaan Nilai Berkelanjutan" : "Value Creation"}
                </span>
                <span className="text-xs text-[#DEE3E1]">
                  {isId ? "Berdampak bagi generasi penerus" : "Lasting generational impact"}
                </span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 4. BUSINESS FIELDS GRID (Matching Level 03 & 04 Flow) */}
      <section id="business-fields" className="py-20 lg:py-28 bg-[#F2F4F3]">
        <PageContainer>
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9DDDA] pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A6A6] block mb-1">
                  {isId ? "PETA BIDANG USAHA" : "BUSINESS FIELDS DIRECTORY"}
                </span>
                <h2 className="text-3xl font-heading font-bold text-[#171C1B]">
                  {isId
                    ? `Bidang Bisnis ${pillar.titleId}`
                    : `${pillar.titleEn} Business Fields`}
                </h2>
              </div>
              <p className="text-sm text-[#5E6663] max-w-md">
                {isId
                  ? "Eksplorasi setiap bidang spesifik, status pengembangan, dan potensi sinergi rantai pasok."
                  : "Explore detailed opportunities, active operations, and development milestones."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fields.length > 0 ? (
                fields.map((field) => (
                  <Link
                    key={field.id}
                    href={getPath(`/businesses/${pillar.slug}/${field.slug}`)}
                    className="bg-white rounded-2xl border border-[#D9DDDA] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#00A6A6] transition-all duration-300 flex flex-col justify-between p-6 group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C8581]">
                          {field.kbliCode ? `KBLI ${field.kbliCode}` : "FIELD"}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                            field.status === "Active"
                              ? "bg-[#00A6A6] text-white"
                              : field.status === "In Development"
                              ? "border border-[#00A6A6] text-[#00A6A6] bg-[#00A6A6]/10"
                              : "bg-[#E8E8E9] text-[#5E6663]"
                          }`}
                        >
                          {field.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-bold text-[#171C1B] group-hover:text-[#00A6A6] transition-colors mb-2">
                        {isId ? field.titleId : field.titleEn}
                      </h3>

                      <p className="text-sm text-[#5E6663] leading-relaxed line-clamp-3">
                        {isId ? field.subtitleId : field.subtitleEn}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#D9DDDA] flex items-center justify-between text-sm font-semibold text-[#00A6A6]">
                      <span>{isId ? "Pelajari Bidang Ini" : "Explore This Field"}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))
              ) : (
                /* Fallback if pillar doesn't have granular fields yet */
                (pillar.subsectorsEn ?? []).map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-[#D9DDDA] flex flex-col justify-between"
                  >
                    <div>
                      <span className="px-2.5 py-1 rounded-full bg-[#E8E8E9] text-[11px] font-semibold text-[#5E6663] inline-block mb-3">
                        {isId ? "Dalam Perencanaan" : "Strategic Scope"}
                      </span>
                      <h3 className="text-lg font-heading font-bold text-[#171C1B] mb-2">
                        {isId ? (pillar.subsectorsId?.[idx] ?? sub) : sub}
                      </h3>
                      <p className="text-xs text-[#5E6663] leading-relaxed">
                        {isId
                          ? "Pengembangan bertahap selaras dengan standar tata kelola dan keberlanjutan."
                          : "Progressive development aligned with governance and sustainability."}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 5. STRATEGIC APPROACH SECTION */}
      <section id="our-approach" className="py-20 lg:py-28 bg-white border-y border-[#D9DDDA]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#D9DDDA] bg-[#EFF1F0]">
              <Image
                src="/images/businesses/approach-solar.jpg"
                alt="Trishanti Strategic Approach"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
                {isId ? "PENDEKATAN STRATEGIS" : "STRATEGIC APPROACH"}
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#171C1B] leading-snug">
                {isId ? "Pendekatan Operasional Kami" : "Our Operational Approach"}
              </h2>

              <p className="text-base text-[#5E6663] leading-relaxed">
                {isId
                  ? "Kami mengeksplorasi dan mengembangkan peluang bisnis yang dapat menciptakan nilai jangka panjang bagi manusia dan kelestarian lingkungan hidup."
                  : "We explore and develop business opportunities that create long-term value for people and the environment."}
              </p>

              <div className="space-y-3 pt-2">
                {(isId ? pillar.keyHighlightsId : pillar.keyHighlightsEn).map(
                  (hl, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00A6A6] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#414946]">{hl}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 6. RELATED BUSINESSES */}
      <section id="related" className="py-20 lg:py-28 bg-[#F2F4F3]">
        <PageContainer>
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#171C1B]">
              {isId ? "Bisnis Terkait" : "Related Businesses"}
            </h2>
            <p className="text-sm text-[#7C8581] mt-2">
              {isId
                ? "Sinergi antar pilar dalam ekosistem korporasi Trishanti."
                : "Cross-sector synergies across the Trishanti corporate ecosystem."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {otherPillars.map((rel) => (
              <Link
                key={rel.id}
                href={getPath(`/businesses/${rel.slug}`)}
                className="group flex flex-col sm:flex-row bg-white rounded-2xl border border-[#D9DDDA] overflow-hidden hover:border-[#00A6A6] transition-all duration-300 shadow-sm hover:shadow-md items-center"
              >
                <div className="relative aspect-[16/10] sm:aspect-square w-full sm:w-48 overflow-hidden bg-[#EFF1F0] flex-shrink-0">
                  <Image
                    src={rel.image}
                    alt={isId ? rel.titleId : rel.titleEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 200px"
                  />
                </div>
                <div className="p-6 flex-1 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-[#171C1B] group-hover:text-[#00A6A6] transition-colors">
                      {isId ? rel.titleId : rel.titleEn}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#7C8581] font-semibold mt-1">
                      {rel.subtitleEn ?? rel.nameKey}
                    </p>
                    <p className="text-xs text-[#5E6663] mt-2 line-clamp-2">
                      {isId ? rel.taglineId : rel.taglineEn}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#EFF1F0] group-hover:bg-[#00A6A6] text-[#00A6A6] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0 ml-4">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      <Divider text={isId ? "Masa Depan Lebih Cerah" : "A Brighter Tomorrow"} />
    </div>
  );
}
