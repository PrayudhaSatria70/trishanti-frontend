import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { BUSINESS_PILLARS } from "@/lib/data";
import { RevenueGrowthChart, BusinessContributionChart } from "@/components/ui/DataCharts";
import {
  Breadcrumb,
  Divider,
  Accordion,
} from "@/components/composite/ContentCards";
import { cn } from "@/lib/cn";

interface BusinessesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BusinessesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "businesses" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function BusinessesPage({
  params,
}: BusinessesPageProps) {
  const { locale } = await params;
  const isId = locale === "id";

  const getPath = (path: string) =>
    `/${locale}${path === "/" ? "" : path}`;

  const FOCUS_AREAS = [
    {
      titleEn: "Transportation",
      titleId: "Transportasi",
      descEn: "Modern expressways, bridges, and regional transit networks.",
      descId: "Jalan tol modern, jembatan, dan jaringan transit terintegrasi.",
      image: "/images/businesses/focus-transportation.jpg",
      href: "/businesses/renewable-energy",
    },
    {
      titleEn: "Urban Development",
      titleId: "Pengembangan Perkotaan",
      descEn: "Sustainable mixed-use communities and commercial ecosystems.",
      descId: "Kawasan terpadu berkelanjutan dan ekosistem komersial modern.",
      image: "/images/businesses/focus-urban.jpg",
      href: "/businesses/renewable-energy",
    },
    {
      titleEn: "Utilities",
      titleId: "Utilitas & Energi",
      descEn: "Clean power grids, water treatment, and resilient civic utilities.",
      descId: "Jaringan energi bersih, pengolahan air, dan utilitas publik handal.",
      image: "/images/businesses/focus-utilities.jpg",
      href: "/businesses/renewable-energy",
    },
  ];

  const PORTFOLIO_ITEMS = [
    {
      name: "SteakMary",
      categoryEn: "Food & Beverage",
      categoryId: "Makanan & Minuman",
      filterCategory: "Food & Beverage",
      image: "/images/portfolio/steakmary.jpg",
      descEn: "Artisanal culinary hospitality delivering premium dining experiences.",
      descId: "Restoran kuliner premium dengan standar layanan dan cita rasa terbaik.",
    },
    {
      name: "NexaTech",
      categoryEn: "Technology",
      categoryId: "Teknologi",
      filterCategory: "Technology",
      image: "/images/portfolio/nexatech.jpg",
      descEn: "Enterprise cloud systems, cybersecurity, and intelligent data solutions.",
      descId: "Sistem cloud perusahaan, keamanan siber, dan infrastruktur data cerdas.",
    },
    {
      name: "BumiLestari",
      categoryEn: "Agriculture",
      categoryId: "Pertanian & Perkebunan",
      filterCategory: "Consumer",
      image: "/images/portfolio/bumilestari.jpg",
      descEn: "Regenerative agriculture, ethical farming, and sustainable food chains.",
      descId: "Pertanian regeneratif terpadu, kemitraan petani, dan pangan berkelanjutan.",
    },
    {
      name: "UrbanLiving",
      categoryEn: "Real Estate",
      categoryId: "Properti & Real Estat",
      filterCategory: "Services",
      image: "/images/portfolio/urbanliving.jpg",
      descEn: "Modern architectural living spaces built for community and wellness.",
      descId: "Hunian arsitektur modern berorientasi komunitas dan kualitas hidup.",
    },
  ];

  return (
    <div className="flex flex-col w-full transition-colors duration-300">
      {/* 1. HERO: Infrastructure Pillar (Matching Board A.3.4 Item 3) */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-[#071A22] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/businesses/infrastructure-hero.jpg"
            alt="Infrastructure Viaduct Bridge"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A22] via-[#071A22]/80 to-transparent" />
        </div>

        <PageContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Breadcrumb (Image 2 Item 16) */}
            <Breadcrumb
              crumbs={[
                { label: isId ? "Bisnis Kami" : "Our Businesses", href: getPath("/businesses") },
                { label: isId ? "Infrastruktur" : "Infrastructure" },
              ]}
              className="text-white/70"
            />

            <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-[#00A6A6]">
              <span className="text-[#00A6A6] font-mono">/</span>
              <span className="uppercase">INFRASTRUCTURE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.15] tracking-tight">
              {isId ? "Membangun Konektivitas yang Lebih Baik." : "Building Better Connections."}
            </h1>
            <p className="text-lg sm:text-xl text-[#DEE3E1] leading-relaxed font-light">
              {isId
                ? "Mewujudkan infrastruktur yang lebih kokoh dan berdaya tahan bagi masyarakat dan masa depan Indonesia."
                : "Enabling stronger, more resilient infrastructure for people and communities."}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* 2. SECTION: Our Focus Areas (3 Landscape Cards) */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E1E4E2]">
        <PageContainer>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#171C1B]">
              {isId ? "Bidang Fokus Kami" : "Our Focus Areas"}
            </h2>
            <p className="text-sm text-[#7C8581] mt-2">
              {isId
                ? "Pengembangan terintegrasi pada sektor-sektor penopang pertumbuhan nasional."
                : "Integrated development across strategic sectors powering national growth."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FOCUS_AREAS.map((focus) => (
              <Link
                key={focus.titleEn}
                href={getPath(focus.href)}
                className="group flex flex-col bg-white dark:bg-[var(--trishanti-color-bg-dark)] rounded-xl border border-[var(--trishanti-neutral-200)] dark:border-white/10 overflow-hidden hover:border-[#00A6A6] dark:hover:border-[#00A6A6] transition-all duration-300 shadow-sm hover:shadow-md dark:glass-panel"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFF1F0]">
                  <Image
                    src={focus.image}
                    alt={isId ? focus.titleId : focus.titleEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white group-hover:text-[#00A6A6] transition-colors">
                      {isId ? focus.titleId : focus.titleEn}
                    </h3>
                    <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-white/70 mt-2">
                      {isId ? focus.descId : focus.descEn}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[var(--trishanti-neutral-100)] dark:bg-white/10 group-hover:bg-[#00A6A6] text-[#00A6A6] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0 ml-4">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 3. METRICS BANNER (Deep Midnight #071A22 - Matching Board A.3.4 Item 3) */}
      <section className="py-16 bg-[#071A22] text-white">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-6 md:pt-0">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                120+
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[#A6ADAA] font-medium">
                {isId ? "Proyek Didukung" : "Projects Supported"}
              </div>
            </div>
            <div className="pt-6 md:pt-0 md:pl-8">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                15
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[#A6ADAA] font-medium">
                {isId ? "Kemitraan Strategis" : "Strategic Partnerships"}
              </div>
            </div>
            <div className="pt-6 md:pt-0 md:pl-8">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                10M+
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[#A6ADAA] font-medium">
                {isId ? "Masyarakat Terdampak Positif" : "People Impacted"}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 4. DATA VISUALIZATION SYSTEM: REVENUE GROWTH & ECOSYSTEM CONTRIBUTION (Board 01) */}
      <section className="py-20 lg:py-28 bg-[#F7F8F7] border-b border-[#E1E4E2]">
        <PageContainer>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
              {isId ? "VISUALISASI DATA EKOSISTEM" : "ECOSYSTEM DATA VISUALIZATION"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#171C1B]">
              {isId ? "Pertumbuhan Berkelanjutan & Ketahanan Finansial" : "Steady Growth & Ecosystem Resilience"}
            </h2>
            <p className="text-sm text-[#7C8581] mt-2">
              {isId
                ? "Divergensi portofolio terukur di seluruh enam pilar industri penopang nilai korporasi."
                : "Balanced portfolio diversification across our six strategic pillars delivering compound long-term value."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <RevenueGrowthChart mode="light" />
            </div>
            <div className="lg:col-span-5">
              <BusinessContributionChart mode="light" isId={isId} />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 5. SECTION: Our Portfolio (Matching Board A.3.4 Item 5) */}
      <section id="portfolio" className="py-20 lg:py-28 bg-white border-b border-[#E1E4E2]">
        <PageContainer>
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#171C1B]">
              {isId ? "Portofolio Kami" : "Our Portfolio"}
            </h2>
            <p className="text-sm text-[#7C8581] mt-2">
              {isId
                ? "Bisnis yang beragam. Peluang yang lebih luas."
                : "Diverse businesses. Greater possibilities."}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {["All", "Consumer", "Food & Beverage", "Technology", "Services"].map((tab, idx) => (
              <button
                key={tab}
                type="button"
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  idx === 0
                    ? "bg-[var(--trishanti-neutral-900)] dark:bg-white text-white dark:text-[#171C1B] shadow-sm"
                    : "bg-[var(--trishanti-neutral-50)] dark:bg-white/5 text-[var(--trishanti-neutral-600)] dark:text-white/70 border border-[var(--trishanti-neutral-200)] dark:border-white/10 hover:border-[#00A6A6] dark:hover:border-[#00A6A6] hover:text-[#00A6A6]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 4 Asset Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_ITEMS.map((item) => (
              <div
                key={item.name}
                className="group rounded-xl overflow-hidden bg-white dark:bg-[var(--trishanti-color-bg-dark)] border border-[var(--trishanti-neutral-200)] dark:border-white/10 hover:border-[#00A6A6] dark:hover:border-[#00A6A6] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between dark:glass-panel"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--trishanti-neutral-100)] dark:bg-slate-800">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white group-hover:text-[#00A6A6] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#00A6A6] font-semibold mt-2">
                      {isId ? item.categoryId : item.categoryEn}
                    </p>
                    <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-white/70 mt-3 leading-relaxed">
                      {isId ? item.descId : item.descEn}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-[var(--trishanti-neutral-100)] dark:bg-white/10 group-hover:bg-[#00A6A6] text-[#00A6A6] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 6. ALL 6 BUSINESS PILLARS OVERVIEW (Business Discovery UX Level 02 & 03) */}
      <section className="py-20 lg:py-28 bg-[#F7F8F7]">
        <PageContainer>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
              {isId ? "ENAM PILAR UTAMA" : "SIX STRATEGIC PILLARS"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#171C1B]">
              {isId ? "Eksplorasi Ekosistem Bisnis" : "Explore Our Business Ecosystem"}
            </h2>
            <p className="text-sm text-[#5E6663] mt-2 max-w-2xl">
              {isId
                ? "Visi multi-sektor yang dibangun di sekitar industri nyata, peluang strategis, dan penciptaan nilai jangka panjang."
                : "A multi-sector vision built around real industries, strategic opportunities, and long-term development."}
            </p>

            {/* Category Filter Pills (Image 5 Item 02) */}
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {[
                { label: "All", labelId: "Semua" },
                { label: "Resources & Industrial", labelId: "Sumber Daya & Industri" },
                { label: "Infrastructure & Property", labelId: "Infrastruktur & Properti" },
                { label: "Agriculture & Food", labelId: "Pertanian & Pangan" },
                { label: "Technology & Digital", labelId: "Teknologi & Digital" },
                { label: "Consumer & Lifestyle", labelId: "Konsumen & Gaya Hidup" },
                { label: "Future Ventures", labelId: "Ventura Masa Depan" },
              ].map((pill, idx) => (
                <span
                  key={pill.label}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer",
                    idx === 0
                      ? "bg-[#00A6A6] text-white shadow-sm"
                      : "bg-white border border-[#DEE3E1] text-[#5E6663] hover:border-[#00A6A6] hover:text-[#00A6A6]",
                  )}
                >
                  {isId ? pill.labelId : pill.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_PILLARS.map((pillar) => (
              <Link
                key={pillar.id}
                href={getPath(`/businesses/${pillar.slug}`)}
                className="group p-8 rounded-xl bg-white dark:bg-[var(--trishanti-color-bg-dark)] border border-[var(--trishanti-neutral-200)] dark:border-white/10 hover:border-[#00A6A6] dark:hover:border-[#00A6A6] transition-all duration-300 hover:shadow-md flex flex-col justify-between dark:glass-panel"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[var(--trishanti-neutral-100)] dark:bg-white/5 group-hover:bg-[#00A6A6] text-[#00A6A6] group-hover:text-white flex items-center justify-center transition-colors mb-5 font-bold text-xl">
                    {pillar.id}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white group-hover:text-[#00A6A6] transition-colors">
                    {isId ? pillar.titleId : pillar.titleEn}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[var(--trishanti-neutral-500)] dark:text-white/50 font-semibold mt-2">
                    {pillar.subtitleEn ?? pillar.nameKey}
                  </p>
                  <p className="text-base text-[var(--trishanti-neutral-600)] dark:text-white/70 mt-3 leading-relaxed">
                    {isId ? pillar.taglineId : pillar.taglineEn}
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t border-[var(--trishanti-neutral-200)] dark:border-white/10 flex items-center justify-between text-sm font-semibold text-[#00A6A6]">
                  <span>{isId ? "Detail Pilar" : "View Pillar"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 7. BUSINESS FIELDS & DEVELOPMENT STATUS (Business Discovery UX Level 04) */}
      <section className="py-20 bg-[#071A22] text-white">
        <PageContainer>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00A6A6] block mb-2">
              — {isId ? "STATUS PENGEMBANGAN SEKTOR" : "FIELD DEVELOPMENT STATUS"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              {isId ? "Peluang & Status Bisnis Spesifik" : "Specific Business Fields & Horizons"}
            </h2>
            <p className="text-sm text-[#94a3b8] mt-2">
              {isId
                ? "Pemetaan 29 bidang usaha terstandarisasi dengan status operasional terverifikasi."
                : "29 standardized business field classifications mapped with verified operational development stages."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Active Field Card */}
            {/* Active Field Card */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-5 dark:glass-panel">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Transportation Systems
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A34A]/20 text-[#16A34A] text-[10px] font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Active
                </span>
              </div>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                Operating regional toll corridors, logistics bypass networks, and modern bridge infrastructure across West and Central Java.
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
                <span>Founded: 2015</span>
                <span>Markets: Indonesia, SEA</span>
              </div>
            </div>

            {/* In Development Field Card */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-5 dark:glass-panel">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Renewable Energy Grids
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A6A6]/20 text-[#00A6A6] text-[10px] font-bold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  In Development
                </span>
              </div>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                Utility-scale solar microgrids, battery energy storage systems (BESS), and hybrid industrial rooftop deployments.
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
                <span>Capacity: 12.4 MW</span>
                <span>Target: 2026 COD</span>
              </div>
            </div>

            {/* Future Opportunity Field Card */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-5 dark:glass-panel">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Smart Port Automation
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/20 text-[#2563EB] text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Future Opportunity
                </span>
              </div>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                Next-generation IoT telemetry, autonomous maritime terminal handling, and sustainable bunkering logistics.
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
                <span>Phase: Feasibility Study</span>
                <span>Partners: Regional</span>
              </div>
            </div>
          </div>

          {/* Centered Divider with Text (Image 2 Item 17) */}
          <Divider text="A Brighter Tomorrow" className="my-16" />

          {/* Accordion: Structured Questions (Image 2 Item 13) */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-white text-center mb-8">
              {isId ? "Struktur & Tata Kelola Ekosistem" : "Ecosystem Structure & Governance"}
            </h3>
            <Accordion
              defaultOpenId="what-we-do"
              items={[
                {
                  id: "what-we-do",
                  title: isId ? "Apa yang Kami Lakukan" : "What We Do",
                  content: isId
                    ? "Kami beroperasi di seluruh sektor energi, industri, dan infrastruktur, menciptakan nilai yang berkelanjutan bagi masyarakat dan mitra kerja."
                    : "We operate across energy, industrial, and infrastructure sectors, creating sustainable value for a better tomorrow through active operational stewardship.",
                },
                {
                  id: "our-approach",
                  title: isId ? "Pendekatan Kami" : "Our Approach",
                  content: isId
                    ? "Alokasi modal yang berdisiplin tinggi dipadukan dengan eksekusi operasional yang tangkas dan pola pikir ekosistem multi-dekade."
                    : "Disciplined capital allocation combined with agile operational execution, world-class ESG standards, and multi-decade ecosystem thinking.",
                },
                {
                  id: "our-impact",
                  title: isId ? "Dampak Nyata" : "Our Impact",
                  content: isId
                    ? "Membuka lapangan kerja lokal, memperkuat rantai pasok regional, dan memimpin percepatan transisi energi bersih di Asia Tenggara."
                    : "Generating quality local employment, empowering regional supplier networks, and accelerating clean energy adoption across key industrial hubs.",
                },
                {
                  id: "partner-with-us",
                  title: isId ? "Bermitra Bersama Kami" : "Partner With Us",
                  content: isId
                    ? "Kami berkolaborasi erat dengan investor institusi global, penyedia teknologi mutakhir, serta mitra korporasi terkemuka."
                    : "We collaborate with global institutional capital, advanced technology innovators, and regional state-owned enterprises to develop high-impact assets.",
                },
              ]}
            />
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
