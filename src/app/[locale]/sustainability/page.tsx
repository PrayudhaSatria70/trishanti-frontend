import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { SustainabilityProgressWidget, RegionalGrowthWidget } from "@/components/ui/DataCharts";
import { DocumentList } from "@/components/ui/DocumentList";
import {
  HeroStatistics,
  CapacityBarChart,
  RadialProgressIndicators,
} from "@/components/ui/InformationDisplay";

interface SustainabilityPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: SustainabilityPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";

  return {
    title: isId
      ? "Keberlanjutan & Tata Kelola ESG | Trishanti"
      : "Sustainability & ESG Stewardship | Trishanti",
    description: isId
      ? "Komitmen PT. Trishanti Sinergi Indocorp dalam pelestarian lingkungan, pemberdayaan komunitas, dan tata kelola berstandar tinggi."
      : "PT. Trishanti Sinergi Indocorp's commitment to environmental stewardship, social prosperity, and rigorous corporate governance.",
  };
}

export default async function SustainabilityPage({
  params,
}: SustainabilityPageProps) {
  const { locale } = await params;
  const isId = locale === "id";

  const getPath = (path: string) =>
    `/${locale}${path === "/" ? "" : path}`;

  const SUSTAINABILITY_PILLARS = [
    {
      titleEn: "Environment",
      titleId: "Lingkungan Hidup",
      image: "/images/sustainability/pillar-environment.jpg",
      descEn:
        "Actively reducing our carbon footprint through hybrid renewable energy systems, soil restoration, and zero-deforestation mandates.",
      descId:
        "Secara proaktif menurunkan jejak karbon melalui energi hibrida terbarukan, restorasi tanah, dan kebijakan tanpa deforestasi.",
      metricsEn: "100% AMDAL Certified Operations",
      metricsId: "100% Operasi Bersertifikasi AMDAL",
    },
    {
      titleEn: "Social",
      titleId: "Sosial & Komunitas",
      image: "/images/sustainability/pillar-social.jpg",
      descEn:
        "Fostering inclusive economic participation through local cooperative partnerships, occupational health, and skilled education.",
      descId:
        "Mendorong partisipasi ekonomi inklusif melalui kemitraan koperasi lokal, keselamatan kerja tinggi, dan pelatihan keterampilan.",
      metricsEn: "Local Workforce Priority Across All Sites",
      metricsId: "Prioritas Penyerapan Tenaga Kerja Lokal",
    },
    {
      titleEn: "Governance",
      titleId: "Tata Kelola Perusahaan",
      image: "/images/sustainability/pillar-governance.jpg",
      descEn:
        "Enforcing an uncompromising culture of integrity, transparent financial reporting, and zero tolerance for corruption.",
      descId:
        "Menegakkan budaya integritas tanpa kompromi, pelaporan keuangan transparan, dan toleransi nol terhadap korupsi.",
      metricsEn: "Independent Audit & Risk Oversight",
      metricsId: "Pengawasan Audit & Risiko Independen",
    },
  ];

  return (
    <div className="flex flex-col w-full transition-colors duration-300">
      {/* 1. HERO: Panoramic Emerald River & Forest (Board A.3.4 Item 7) */}
      <section className="relative pt-32 pb-24 sm:pt-44 sm:pb-36 overflow-hidden bg-[#071A22] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sustainability/sustainability-hero.jpg"
            alt="Pristine Rainforest and River"
            fill
            priority
            className="object-cover object-center opacity-45 mix-blend-luminosity"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A22] via-[#071A22]/75 to-transparent" />
        </div>

        <PageContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
              {isId ? "KOMITMEN ESG TRISHANTI" : "TRISHANTI ESG COMMITMENT"}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.15] tracking-tight">
              {isId ? "Hari Esok yang Lebih Berkelanjutan." : "A More Sustainable Tomorrow."}
            </h1>
            <p className="text-lg sm:text-xl text-[#DEE3E1] leading-relaxed font-light">
              {isId
                ? "Kami berkomitmen pada pertumbuhan bertanggung jawab yang menciptakan nilai abadi bagi manusia dan kelestarian alam semesta."
                : "We are committed to responsible growth that creates lasting value for people and the environment."}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* 2. HERO STATISTICS (Image 3 A.5.21 Item 01) */}
      <section className="-mt-12 relative z-20">
        <PageContainer>
          <HeroStatistics isId={isId} mode="light" />
        </PageContainer>
      </section>

      {/* 3. SECTION: 3 Pillar Cards (Environment, Social, Governance) */}
      <section className="py-20 lg:py-28 bg-[var(--trishanti-color-surface-light)] dark:bg-[var(--trishanti-color-bg-dark)] border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-300">
        <PageContainer>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white">
              {isId ? "Pilar Keberlanjutan Kami" : "Our Sustainability Pillars"}
            </h2>
            <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-white/70 mt-2">
              {isId
                ? "Tiga fondasi terpadu dalam setiap keputusan investasi dan operasional."
                : "Three unified foundations governing every investment and operational mandate."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => (
              <div
                key={pillar.titleEn}
                className="group flex flex-col bg-white dark:bg-[var(--trishanti-color-bg-dark)] rounded-xl border border-[var(--trishanti-neutral-200)] dark:border-white/10 overflow-hidden hover:border-[#00A6A6] dark:hover:border-[#00A6A6] transition-all duration-300 shadow-sm hover:shadow-md justify-between dark:glass-panel"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--trishanti-neutral-100)] dark:bg-slate-800">
                    <Image
                      src={pillar.image}
                      alt={isId ? pillar.titleId : pillar.titleEn}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white group-hover:text-[#00A6A6] transition-colors">
                        {isId ? pillar.titleId : pillar.titleEn}
                      </h3>
                      <div className="text-[#00A6A6] group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                    <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-white/70 leading-relaxed mt-3">
                      {isId ? pillar.descId : pillar.descEn}
                    </p>
                  </div>
                </div>
                <div className="p-8 pt-0">
                  <div className="pt-6 border-t border-[var(--trishanti-neutral-200)] dark:border-white/10 text-xs font-semibold text-[#00A6A6] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#00A6A6]" />
                    <span>{isId ? pillar.metricsId : pillar.metricsEn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 4. SECTION: DATA VISUALIZATION SYSTEM (Board 01 & Image 3 A.5.21 Integration) */}
      <section className="py-20 lg:py-28 bg-[#071A22] text-white">
        <PageContainer>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
              {isId ? "DATA & AKUNTABILITAS ESG" : "ESG DATA & ACCOUNTABILITY"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              {isId ? "Kemajuan Nyata yang Terverifikasi" : "Measurable Progress, Verified by Data"}
            </h2>
            <p className="text-sm text-[#DEE3E1] mt-2">
              {isId
                ? "Data yang jelas membawa wawasan yang lebih dalam dan kemungkinan yang lebih luas."
                : "Clear data leads to deeper insight and greater possibilities for our environment."}
            </p>
          </div>

          {/* Grid of Visualizations: Capacity Bar Chart + Progress Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <CapacityBarChart mode="dark" isId={isId} />
            <SustainabilityProgressWidget mode="dark" isId={isId} />
          </div>

          <div className="mt-8">
            <RegionalGrowthWidget mode="dark" isId={isId} />
          </div>

          {/* 5. RADIAL PROGRESS INDICATORS (Image 3 A.5.21 Item 05) */}
          <div className="mt-12">
            <RadialProgressIndicators mode="dark" isId={isId} />
          </div>
        </PageContainer>
      </section>

      {/* 6. SECTION: DOCUMENT SEARCH & FILTER (Board A.5.22 Item 11) */}
      <section className="py-20 lg:py-28 bg-[var(--trishanti-color-surface-light)] dark:bg-[var(--trishanti-color-bg-dark)] border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-300">
        <PageContainer>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
              {isId ? "TRANSPARANSI & DOKUMEN" : "TRANSPARENCY & DISCLOSURES"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white">
              {isId ? "Laporan & Kebijakan Tata Kelola" : "Reports & Governance Disclosures"}
            </h2>
            <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-white/70 mt-2">
              {isId
                ? "Akses dan unduh laporan keberlanjutan tahunan, kebijakan lingkungan, dan piagam kepatuhan kami."
                : "Access and download our annual sustainability disclosures, environmental standards, and compliance charters."}
            </p>
          </div>

          <DocumentList isId={isId} />
        </PageContainer>
      </section>

      {/* 7. SECTION: Call to Action (Standardized CTA per Image 4) */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[var(--trishanti-color-bg-dark)] transition-colors duration-300">
        <PageContainer>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white">
              {isId ? "Komitmen Bersama untuk Hari Esok" : "Building a Brighter Tomorrow, Together"}
            </h2>
            <p className="text-base text-[var(--trishanti-neutral-600)] dark:text-white/70 leading-relaxed">
              {isId
                ? "Keberlanjutan di Trishanti bukan sekadar inisiatif sampingan, melainkan prinsip inti yang mengarahkan alokasi kapital, pemilihan mitra, dan tata kelola di seluruh unit usaha."
                : "Sustainability at Trishanti is not a peripheral mandate — it is the core operating discipline that guides our capital deployment, partnership standards, and everyday corporate governance."}
            </p>
            <div className="pt-4">
              <Link
                href={getPath("/contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00A6A6] text-white font-medium hover:bg-[#008f8f] transition-all duration-200 shadow-sm active:scale-98"
              >
                {isId ? "Temukan Komitmen Kami →" : "Discover Our Commitment →"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
