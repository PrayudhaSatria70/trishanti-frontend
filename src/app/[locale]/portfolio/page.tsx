import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ExternalLink, Sparkles, Building2 } from "lucide-react";
import { PORTFOLIO_ITEMS, BUSINESS_PILLARS } from "@/lib/data";
import { PageContainer } from "@/components/layout/PageContainer";
import { Breadcrumb, Divider } from "@/components/composite/ContentCards";

interface PortfolioPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";

  return {
    title: isId
      ? "Portofolio Usaha & Ventura | Trishanti"
      : "Active Ventures & Portfolio | Trishanti",
    description: isId
      ? "Jelajahi portofolio usaha aktif dan inisiatif komersial PT. Trishanti Sinergi Indocorp di seluruh sektor strategis."
      : "Explore active ventures, commercial operating brands, and portfolio companies across Trishanti's multi-sector ecosystem.",
  };
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;
  const isId = locale === "id";

  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  return (
    <div className="flex flex-col w-full bg-[#F2F4F3] text-[#171C1B]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#071A22] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/businesses/focus-urban.jpg"
            alt="Trishanti Portfolio Ventures"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A22] via-[#071A22]/85 to-transparent" />
        </div>

        <PageContainer className="relative z-10">
          <div className="max-w-4xl space-y-6">
            <Breadcrumb
              items={[
                { label: isId ? "Beranda" : "Home", href: getPath("/") },
                { label: isId ? "Portofolio" : "Portfolio" },
              ]}
              variant="dark"
            />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isId ? "VENTURA & PORTOFOLIO AKTIF" : "ACTIVE VENTURES & PORTFOLIO"}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.12] tracking-tight">
              {isId ? "Mewujudkan Visi Menjadi Usaha Nyata." : "From Strategic Vision to Operating Reality."}
            </h1>

            <p className="text-lg sm:text-xl text-[#DEE3E1] leading-relaxed font-light max-w-2xl">
              {isId
                ? "Integritas operasional di seluruh jenama konsumen, rantai pasok industri, dan solusi teknologi yang tumbuh bersama masyarakat."
                : "Active commercial businesses and transformative ventures built to deliver long-term value, exceptional quality, and sustainable growth."}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* 2. PORTFOLIO SHOWCASE GRID (Level 05 Discovery) */}
      <section className="py-20 sm:py-28 bg-[#F2F4F3]">
        <PageContainer>
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9DDDA] pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A6A6] block mb-1">
                  {isId ? "DAFTAR PORTOFOLIO" : "PORTFOLIO INDEX"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171C1B]">
                  {isId ? "Jenama & Perusahaan Operasional" : "Operating Companies & Consumer Brands"}
                </h2>
              </div>
              <p className="text-sm text-[#5E6663] max-w-md">
                {isId
                  ? "Setiap portofolio diinkubasi dengan standar keandalan tinggi dan komitmen mutu berkelanjutan."
                  : "Each portfolio company operates with rigorous quality control, modern execution, and responsible stewardship."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PORTFOLIO_ITEMS.map((item) => {
                const pillar = BUSINESS_PILLARS.find((p) => p.slug === item.pillarSlug);

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-[#D9DDDA] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#00A6A6] transition-all duration-300 flex flex-col group"
                  >
                    {/* Image Top */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#00A6A6] text-white text-[11px] font-bold tracking-wide shadow-md">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        {pillar && (
                          <span className="text-xs uppercase tracking-wider font-semibold text-[#7C8581] block mb-2">
                            {isId ? pillar.titleId : pillar.titleEn}
                          </span>
                        )}

                        <h3 className="text-2xl font-serif font-bold text-[#171C1B] group-hover:text-[#00A6A6] transition-colors mb-2">
                          {item.name}
                        </h3>

                        <p className="text-sm font-medium text-[#00A6A6] mb-3 italic">
                          &ldquo;{isId ? item.taglineId : item.taglineEn}&rdquo;
                        </p>

                        <p className="text-sm text-[#5E6663] leading-relaxed line-clamp-3">
                          {isId ? item.descriptionId : item.descriptionEn}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-[#D9DDDA] flex items-center justify-between">
                        <Link
                          href={getPath(`/portfolio/${item.slug}`)}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A6A6] hover:text-[#008f8f] transition-colors"
                        >
                          <span>{isId ? "Lihat Detail" : "View Details"}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {item.websiteUrl && (
                          <a
                            href={item.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#7C8581] hover:text-[#00A6A6] transition-colors"
                            aria-label={`Visit ${item.name} website`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </PageContainer>
      </section>

      <Divider text={isId ? "Masa Depan Lebih Cerah" : "A Brighter Tomorrow"} />

      {/* 3. ECOSYSTEM CROSS LINK */}
      <section className="py-16 bg-white border-t border-[#D9DDDA]">
        <PageContainer>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-[#071A22] text-white">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00A6A6]">
                <Building2 className="w-4 h-4" />
                <span>{isId ? "Jelajahi Ekosistem" : "Explore Ecosystem"}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                {isId ? "Pelajari 6 Pilar Bisnis Kami" : "Discover Our 6 Business Pillars"}
              </h3>
              <p className="text-sm text-[#DEE3E1] max-w-xl">
                {isId
                  ? "Lihat bagaimana setiap ventura berakar pada strategi jangka panjang dan kepatuhan KBLI resmi."
                  : "See how each portfolio company integrates into Trishanti's multi-sector economic development blueprint."}
              </p>
            </div>
            <Link
              href={getPath("/businesses")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00A6A6] hover:bg-[#008f8f] text-white font-semibold text-sm transition-all whitespace-nowrap"
            >
              <span>{isId ? "Lihat Semua Pilar Bisnis" : "Explore Business Pillars"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
