import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Flame,
  Leaf,
  Heart,
  ShieldCheck,
  Sparkles,
  Utensils,
  Award,
} from "lucide-react";
import { PORTFOLIO_ITEMS, BUSINESS_PILLARS, getPortfolioItem } from "@/lib/data";
import { PageContainer } from "@/components/layout/PageContainer";
import { Breadcrumb, Divider } from "@/components/composite/ContentCards";

interface PortfolioDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getPortfolioItem(slug);

  if (!item) {
    return { title: "Portfolio Venture Not Found | Trishanti" };
  }

  const title = item.name;
  const desc = locale === "id" ? item.descriptionId : item.descriptionEn;

  return {
    title: `${title} | Trishanti Portfolio`,
    description: desc,
  };
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { locale, slug } = await params;
  const isId = locale === "id";

  const item = getPortfolioItem(slug);
  if (!item) {
    notFound();
  }

  const pillar = BUSINESS_PILLARS.find((p) => p.slug === item.pillarSlug);
  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const featureIcons = {
    leaf: Leaf,
    flame: Flame,
    heart: Heart,
    shield: ShieldCheck,
    sparkles: Sparkles,
  };

  return (
    <div className="flex flex-col w-full bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)] transition-colors duration-300">
      {/* 1. CINEMATIC HERO (Matching Level 05 Board) */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-[#071A22] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority
            className="object-cover object-center opacity-45 mix-blend-luminosity scale-100"
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
                { label: isId ? "Portofolio" : "Portfolio", href: getPath("/portfolio") },
                { label: item.name },
              ]}
              variant="dark"
            />

            {/* Badges Stack */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase text-white/90">
                PORTFOLIO
              </span>
              <span className="px-3 py-1 rounded-full bg-[#00A6A6] text-white text-xs font-bold tracking-wide shadow-md">
                {item.status}
              </span>
            </div>

            {/* Title & Tagline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white leading-tight tracking-tight mb-3">
                {item.name}
              </h1>
              <p className="text-xl sm:text-2xl font-heading italic text-[#00A6A6]">
                &ldquo;{isId ? item.taglineId : item.taglineEn}&rdquo;
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#DEE3E1] leading-relaxed font-light max-w-2xl">
              {isId ? item.descriptionId : item.descriptionEn}
            </p>

            {/* Dual CTAs (Matching Level 05 Board) */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {item.websiteUrl && (
                <a
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00A6A6] hover:bg-[#008f8f] text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(0,166,166,0.4)] group"
                >
                  <span>{isId ? "Kunjungi Website" : "Visit Website"}</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}

              <a
                href="#our-story"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm tracking-wide backdrop-blur-md transition-all duration-200"
              >
                <span>{isId ? "Lihat Detail" : "View Details"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 2. SUB-NAVIGATION TABS (Matching Level 05 Board) */}
      <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-[#D9DDDA]">
        <PageContainer>
          <div className="flex items-center space-x-8 overflow-x-auto py-4 text-sm font-semibold text-[#5E6663]">
            <a href="#overview" className="text-[#00A6A6] border-b-2 border-[#00A6A6] pb-1 whitespace-nowrap">
              {isId ? "Ringkasan" : "Overview"}
            </a>
            <a href="#our-story" className="hover:text-[#171C1B] transition-colors whitespace-nowrap">
              {isId ? "Kisah Kami" : "Our Story"}
            </a>
            <a href="#products" className="hover:text-[#171C1B] transition-colors whitespace-nowrap">
              {isId ? "Menu & Produk" : "Products"}
            </a>
            <a href="#impact" className="hover:text-[#171C1B] transition-colors whitespace-nowrap">
              {isId ? "Dampak & Nilai" : "Impact"}
            </a>
          </div>
        </PageContainer>
      </div>

      {/* 3. PHILOSOPHY & THREE FEATURE PILLARS (Matching Level 05 Board) */}
      <section id="overview" className="py-20 lg:py-28 bg-white dark:bg-[#0d222c] border-b border-[var(--trishanti-neutral-200)] dark:border-[#1e293b] transition-colors duration-300">
        <PageContainer>
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00A6A6]">
              {isId ? "FILOSOFI PRODUK" : "PRODUCT PHILOSOPHY"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white leading-tight transition-colors">
              {isId ? "Hidangan Berkualitas untuk Setiap Hari." : "Quality Food for a Better Everyday."}
            </h2>
            <p className="text-base sm:text-lg text-[var(--trishanti-neutral-600)] dark:text-[#94a3b8] leading-relaxed font-light transition-colors">
              {isId
                ? "Kami percaya makanan berkualitas menciptakan momen bermakna. SteakMary dirancang untuk menyatukan banyak orang melalui santapan yang lezat, mudah diakses, dan bermutu tinggi."
                : "We believe great food creates meaningful moments. SteakMary is built to bring people together through delicious, accessible, and high-quality meals."}
            </p>
          </div>

          {/* 3 Feature Badges with Outline Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {item.features.map((feat, idx) => {
              const IconComp = featureIcons[feat.icon] ?? Sparkles;

              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[var(--trishanti-neutral-50)] dark:bg-[#111827] border border-[var(--trishanti-neutral-200)] dark:border-[#1e293b] hover:border-[#00A6A6] transition-all duration-300 flex flex-col items-center text-center group dark:glass-panel"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#0d222c] border border-[var(--trishanti-neutral-200)] dark:border-[#1e293b] text-[#00A6A6] group-hover:bg-[#00A6A6] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm mb-6">
                    <IconComp className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white mb-3 transition-colors">
                    {isId ? feat.titleId : feat.titleEn}
                  </h3>
                  <p className="text-base text-[var(--trishanti-neutral-600)] dark:text-[#94a3b8] leading-relaxed transition-colors">
                    {isId ? feat.descId : feat.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* 4. PRODUCTS & MENU HIGHLIGHTS */}
      {item.products && item.products.length > 0 && (
        <section id="products" className="py-20 lg:py-28 bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)] transition-colors duration-300">
          <PageContainer>
            <div className="space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9DDDA] pb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00A6A6] block mb-1">
                    {isId ? "MENU PILIHAN" : "SIGNATURE SELECTIONS"}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white transition-colors">
                    {isId ? "Hidangan Unggulan SteakMary" : "Signature Offerings"}
                  </h2>
                </div>
                <p className="text-base text-[var(--trishanti-neutral-600)] dark:text-[#94a3b8] max-w-md transition-colors">
                  {isId
                    ? "Dipersiapkan dari potongan daging segar berkualitas tinggi dengan teknik pemanggangan presisi."
                    : "Prepared using prime cuts, signature reductions, and chef-curated seasonings."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {item.products.map((prod, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-[#111827] rounded-2xl border border-[var(--trishanti-neutral-200)] dark:border-[#1e293b] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group dark:glass-panel"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={prod.image}
                        alt={prod.nameEn}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white group-hover:text-[#00A6A6] transition-colors mb-3">
                          {isId ? prod.nameId : prod.nameEn}
                        </h3>
                        <p className="text-base text-[var(--trishanti-neutral-600)] dark:text-[#94a3b8] leading-relaxed transition-colors">
                          {isId ? prod.descId : prod.descEn}
                        </p>
                      </div>
                      <div className="mt-8 pt-4 border-t border-[var(--trishanti-neutral-200)] dark:border-[#1e293b] flex items-center justify-between text-sm font-semibold text-[#00A6A6] transition-colors">
                        <span>{isId ? "Tersedia Setiap Hari" : "Available Daily"}</span>
                        <Utensils className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>
      )}

      {/* 5. OUR STORY NARRATIVE */}
      <section id="our-story" className="py-20 lg:py-28 bg-white dark:bg-[#0d222c] border-y border-[var(--trishanti-neutral-200)] dark:border-[#1e293b] transition-colors duration-300">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00A6A6]">
                <Award className="w-4 h-4" />
                <span>{isId ? "KEMITRAAN & INTEGRITAS" : "INTEGRITY & SOURCING"}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white leading-tight transition-colors">
                {isId ? "Kisah di Balik SteakMary" : "The Journey Behind SteakMary"}
              </h2>

              <p className="text-lg text-[var(--trishanti-neutral-600)] dark:text-[#94a3b8] leading-relaxed transition-colors">
                {isId ? item.storyId : item.storyEn}
              </p>

              {pillar && (
                <div className="pt-4">
                  <div className="p-6 rounded-xl bg-[var(--trishanti-neutral-50)] dark:bg-[#111827] border border-[var(--trishanti-neutral-200)] dark:border-[#1e293b] flex items-center justify-between transition-colors dark:glass-panel">
                    <div>
                      <span className="text-xs text-[var(--trishanti-neutral-500)] dark:text-[#64748b] font-semibold uppercase block transition-colors">
                        {isId ? "Bagian dari Pilar Bisnis" : "Part of Business Pillar"}
                      </span>
                      <p className="text-lg font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white transition-colors">
                        {isId ? pillar.titleId : pillar.titleEn}
                      </p>
                    </div>
                    <Link
                      href={getPath(`/businesses/${pillar.slug}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A6A6] hover:text-[#008f8f]"
                    >
                      <span>{isId ? "Lihat Pilar" : "View Pillar"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-[#D9DDDA]">
              <Image
                src="/images/businesses/focus-transportation.jpg"
                alt="SteakMary restaurant dining experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </PageContainer>
      </section>

      <Divider text={isId ? "Masa Depan Lebih Cerah" : "A Brighter Tomorrow"} />

      {/* 6. BOTTOM BACK LINK */}
      <section className="py-12 bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)] transition-colors duration-300">
        <PageContainer>
          <div className="flex items-center justify-between">
            <Link
              href={getPath("/portfolio")}
              className="inline-flex items-center gap-2 text-base font-semibold text-[var(--trishanti-neutral-600)] dark:text-white/70 hover:text-[#00A6A6] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isId ? "Kembali ke Semua Portofolio" : "Back to Portfolio"}</span>
            </Link>

            <Link
              href={getPath("/businesses")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A6A6] hover:text-[#008f8f] transition-colors"
            >
              <span>{isId ? "Jelajahi Ekosistem Bisnis" : "Explore Business Ecosystem"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
