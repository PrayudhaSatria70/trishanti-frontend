import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { EcosystemDiagram } from "@/components/ui/GraphicElements";
import { ComparisonBlock, FinancialDataTable } from "@/components/ui/InformationDisplay";
import { Divider, ListGroup } from "@/components/composite/ContentCards";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const isId = locale === "id";

  const getPath = (path: string) =>
    `/${locale}${path === "/" ? "" : path}`;

  const TIMELINE_MILESTONES = [
    {
      year: "2010",
      titleEn: "Founding & Strategic Inception",
      titleId: "Pendirian & Inisiasi Strategis",
      descEn: "Establishment of Trishanti with core industrial foundations.",
      descId: "Pendirian Trishanti dengan fondasi industri terintegrasi.",
    },
    {
      year: "2015",
      titleEn: "Multi-Sector Expansion",
      titleId: "Ekspansi Multi-Sektor",
      descEn: "Diversification into agricultural, logistics, and digital services.",
      descId: "Diversifikasi ke agribisnis, logistik, dan layanan digital.",
    },
    {
      year: "2020",
      titleEn: "Institutional Governance",
      titleId: "Tata Kelola Institusional",
      descEn: "Benchmarking against global conglomerate standards and ESG practices.",
      descId: "Penerapan standar konglomerasi global dan prinsip tata kelola ESG.",
    },
    {
      year: "2025",
      titleEn: "Global Value Creation",
      titleId: "Penciptaan Nilai Global",
      descEn: "Scaling high-growth subsidiaries towards international competitiveness.",
      descId: "Mendorong entitas anak usaha menuju daya saing pasar internasional.",
    },
  ];

  const LEADERS = [
    {
      name: "Budi Santoso",
      roleEn: "Executive Chairman",
      roleId: "Presiden Komisaris",
      image: "/images/about/leader-1.jpg",
    },
    {
      name: "Dewi Anggraini",
      roleEn: "Chief Executive Officer",
      roleId: "Presiden Direktur",
      image: "/images/about/leader-2.jpg",
    },
    {
      name: "Hendra Gunawan",
      roleEn: "Chief Operating Officer",
      roleId: "Direktur Operasional",
      image: "/images/about/leader-3.jpg",
    },
    {
      name: "Siti Rahmawati",
      roleEn: "Chief Financial Officer",
      roleId: "Direktur Keuangan",
      image: "/images/about/leader-4.jpg",
    },
  ];

  return (
    <div className="flex flex-col w-full transition-colors duration-300">
      {/* 1. HERO: People Build Progress (Matching Board A.3.4 Item 2) */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 bg-white dark:bg-[var(--trishanti-color-bg-dark)] transition-colors duration-300">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typography */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
                {isId ? "TENTANG TRISHANTI" : "ABOUT TRISHANTI"}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white leading-[1.15] tracking-tight">
                {isId ? "Manusia Membangun Kemajuan." : "People Build Progress."}
              </h1>
              <p className="text-lg sm:text-xl text-[var(--trishanti-neutral-600)] dark:text-white/70 leading-relaxed font-light max-w-xl">
                {isId
                  ? "Kami adalah perusahaan multi-sektor dengan satu tujuan bersama — menciptakan nilai jangka panjang bagi manusia dan hari esok yang lebih cerah."
                  : "We are a multi-sector enterprise with a shared purpose — to create long-term value for people and a brighter tomorrow."}
              </p>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href={getPath("/businesses")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00A6A6] text-white font-medium hover:bg-[#008f8f] transition-all duration-200 shadow-sm active:scale-98"
                >
                  {isId ? "Jelajahi Bisnis Kami" : "Explore Our Businesses"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={getPath("/contact")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[var(--trishanti-neutral-300)] dark:border-white/20 text-[var(--trishanti-neutral-700)] dark:text-white/80 font-medium hover:bg-[var(--trishanti-neutral-100)] dark:hover:bg-white/10 transition-colors"
                >
                  {isId ? "Mulai Percakapan" : "Start a Conversation"}
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[var(--trishanti-neutral-200)] dark:border-white/10">
              <Image
                src="/images/about/hero-engineers-hd.jpg"
                alt="Trishanti Engineers on Project Site"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 2. SECTION: ECOSYSTEM VISUALIZATION DIAGRAM (Image 2 Alignment) */}
      <section className="py-20 lg:py-28 bg-[var(--trishanti-color-surface-light)] dark:bg-[var(--trishanti-color-bg-dark)] border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-300">
        <PageContainer>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
              {isId ? "STRUKTUR. PERGERAKAN. KEMUNGKINAN." : "STRUCTURE. MOVEMENT. POSSIBILITY."}
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white">
              {isId ? "Ekosistem Terintegrasi Trishanti" : "Our Connected Ecosystem"}
            </h2>
            <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-white/70 mt-2">
              {isId
                ? "Bahasa visual terpadu yang menghubungkan insan, industri, dan masa depan berkelanjutan."
                : "A unified visual language connecting people, industries, innovation, and our environment."}
            </p>
          </div>

          <EcosystemDiagram mode="light" isId={isId} />
        </PageContainer>
      </section>

      {/* 3. SECTION: Our Journey (Panoramic Landscape with Timeline) */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[var(--trishanti-color-bg-dark)] border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-300">
        <PageContainer>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white">
              {isId ? "Perjalanan Kami" : "Our Journey"}
            </h2>
            <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-white/70 mt-2">
              {isId
                ? "Tonggak pencapaian historis menuju konglomerasi berkelanjutan."
                : "Historical milestones shaping an enduring multi-sector institution."}
            </p>
          </div>

          {/* Panoramic Image Banner */}
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-2xl overflow-hidden shadow-md border border-[#DEE3E1] mb-12">
            <Image
              src="/images/about/our-journey-panorama.jpg"
              alt="Our Journey Landscape"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white text-sm font-light hidden sm:block">
              {isId ? "Transformasi berkelanjutan lintas dekade" : "Enduring transformation across decades"}
            </div>
          </div>

          {/* Horizontal Timeline Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative pt-4">
            {TIMELINE_MILESTONES.map((item, idx) => (
              <div key={item.year} className="relative flex flex-col space-y-3 group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#00A6A6] text-white font-bold flex items-center justify-center text-sm shadow-sm group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <span className="text-2xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white">
                    {item.year}
                  </span>
                </div>
                <div className="h-0.5 w-full bg-[var(--trishanti-neutral-200)] dark:bg-white/20 group-hover:bg-[#00A6A6] dark:group-hover:bg-[#00A6A6] transition-colors" />
                <h3 className="text-base font-semibold text-[var(--trishanti-neutral-900)] dark:text-white">
                  {isId ? item.titleId : item.titleEn}
                </h3>
                <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-white/70 leading-relaxed">
                  {isId ? item.descId : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 4. SECTION: COMPARISON BLOCK (Image 3 A.5.21 Item 04) */}
      <section className="py-20 lg:py-28 bg-[var(--trishanti-color-surface-light)] dark:bg-[var(--trishanti-color-bg-dark)] border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-300">
        <PageContainer>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
              {isId ? "TRANSFORMASI & PERTUMBUHAN" : "TRANSFORMATION & GROWTH"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white">
              {isId ? "Membangun Fondasi, Membuka Peluang Baru" : "Building Foundations, Opening New Possibilities"}
            </h2>
          </div>

          <ComparisonBlock isId={isId} />
        </PageContainer>
      </section>

      {/* 5. SECTION: FINANCIAL STEWARDSHIP (Image 3 A.5.21 Item 08) */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[var(--trishanti-color-bg-dark)] border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-300">
        <PageContainer>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
              {isId ? "DISIPLIN KEUANGAN" : "FINANCIAL STEWARDSHIP"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white">
              {isId ? "Kinerja Keuangan Multi-Tahun" : "Multi-Year Financial Track Record"}
            </h2>
            <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-white/70 mt-2">
              {isId
                ? "Pertumbuhan neraca yang konsisten didukung alokasi modal terdisiplin di seluruh unit usaha."
                : "Consistent balance sheet expansion backed by disciplined capital allocation across business units."}
            </p>
          </div>

          <FinancialDataTable isId={isId} />
        </PageContainer>
      </section>

      {/* 6. SECTION: Leadership (4 Executive Studio Portraits) */}
      <section className="py-20 lg:py-28 bg-[var(--trishanti-color-surface-light)] dark:bg-[var(--trishanti-color-bg-dark)] border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-300">
        <PageContainer>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white">
                {isId ? "Kepemimpinan" : "Leadership"}
              </h2>
              <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-white/70 mt-2">
                {isId
                  ? "Dewan eksekutif berintegritas tinggi dengan pengalaman industri lintas dekade."
                  : "Seasoned executive leadership guiding disciplined long-term stewardship."}
              </p>
            </div>
            <Link
              href={getPath("/about#leadership")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A6A6] hover:text-[#008f8f] transition-colors group"
            >
              {isId ? "Lihat Semua Kepemimpinan" : "View Leadership"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 4 Executive Portrait Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {LEADERS.map((leader) => (
              <div
                key={leader.name}
                className="group rounded-xl overflow-hidden bg-white dark:bg-white/5 border border-[var(--trishanti-neutral-200)] dark:border-white/10 hover:border-[#00A6A6]/40 dark:hover:border-[#00A6A6]/40 transition-all duration-300 shadow-sm hover:shadow-md dark:glass-panel"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--trishanti-neutral-100)] dark:bg-slate-800">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white group-hover:text-[#00A6A6] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[var(--trishanti-neutral-500)] dark:text-white/60 mt-1 font-medium">
                    {isId ? leader.roleId : leader.roleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 7. SECTION: Our Culture (Split Meeting Room + Philosophy) */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[var(--trishanti-color-bg-dark)] transition-colors duration-300">
        <PageContainer>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white">
              {isId ? "Budaya Kami" : "Our Culture"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[var(--trishanti-color-surface-light)] dark:bg-white/5 p-8 lg:p-12 rounded-2xl border border-[var(--trishanti-neutral-200)] dark:border-white/10 shadow-sm dark:glass-panel">
            {/* Left: Meeting Image */}
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden border border-[var(--trishanti-neutral-200)] dark:border-white/10 shadow-sm">
              <Image
                src="/images/about/our-culture.jpg"
                alt="Trishanti Collaborative Team Discussion"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            {/* Right: Statement & Link */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
                {isId ? "NILAI KORPORASI" : "CORPORATE VALUES"}
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white leading-snug">
                {isId
                  ? "Budaya kolaborasi, rasa ingin tahu, dan pertumbuhan berkelanjutan."
                  : "A culture of collaboration, curiosity, and continuous growth."}
              </h3>
              <p className="text-base text-[var(--trishanti-neutral-600)] dark:text-white/70 leading-relaxed">
                {isId
                  ? "Kami percaya bahwa pertumbuhan sejati berakar dari pemberdayaan talenta terbaik, keterbukaan ide, dan komitmen moral untuk menghadirkan dampak positif di setiap lini bisnis."
                  : "We believe enduring growth takes root when talented people are empowered with shared purpose, intellectual rigor, and an uncompromising standard of execution."}
              </p>
              <div>
                <Link
                  href={getPath("/careers")}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A6A6] hover:text-[#008f8f] transition-colors group"
                >
                  {isId ? "Pelajari Lebih Lanjut" : "Learn More"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 8. SECTION: Corporate Governance & Public Disclosures (Image 2 Item 18 List Group) */}
      <section className="py-20 bg-[#071A22] text-white">
        <PageContainer>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00A6A6] block mb-2">
              — {isId ? "TATA KELOLA & LAPORAN" : "CORPORATE DISCLOSURES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              {isId ? "Laporan & Dokumen Resmi" : "Official Reports & Governance"}
            </h2>
            <p className="text-sm text-[#94a3b8] mt-2">
              {isId
                ? "Akses langsung terhadap laporan keuangan terverifikasi dan kerangka kerja tata kelola korporat kami."
                : "Direct access to our audited financial statements, governance charters, and sustainability disclosures."}
            </p>
          </div>

          <div className="max-w-3xl">
            <ListGroup
              items={[
                {
                  id: "annual-report-2024",
                  title: isId ? "Laporan Tahunan 2024" : "Annual Report 2024",
                  type: "pdf",
                  href: getPath("/documents/annual-report-2024.pdf"),
                },
                {
                  id: "sustainability-report-2024",
                  title: isId ? "Laporan Keberlanjutan 2024" : "Sustainability Report 2024",
                  type: "pdf",
                  href: getPath("/sustainability"),
                },
                {
                  id: "investor-presentation",
                  title: isId ? "Presentasi Investor & Analis (Q4 2024)" : "Investor & Analyst Presentation (Q4 2024)",
                  type: "presentation",
                  href: getPath("/about"),
                },
                {
                  id: "corporate-governance",
                  title: isId ? "Pedoman Tata Kelola Korporasi" : "Corporate Governance Charter",
                  type: "governance",
                  href: getPath("/about"),
                },
              ]}
            />
          </div>

          {/* Centered Divider with Text (Image 2 Item 17) */}
          <Divider text="A Brighter Tomorrow" className="my-16" />
        </PageContainer>
      </section>
    </div>
  );
}
