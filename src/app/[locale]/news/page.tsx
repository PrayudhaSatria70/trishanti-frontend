import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { NewsDiscovery } from "@/components/news/NewsDiscovery";

interface NewsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  const isId = locale === "id";

  const ARTICLES = [
    {
      slug: "renewable-energy-resilient-future",
      date: "Mar 12, 2024",
      category: "Corporate",
      titleEn: "The Role of Renewable Energy in a More Resilient Future",
      titleId: "Peran Energi Terbarukan dalam Mewujudkan Masa Depan Berdaya Tahan",
      excerptEn:
        "Exploring how clean energy can create long-term value for communities across the Indonesian archipelago.",
      excerptId:
        "Mengeksplorasi bagaimana energi bersih dapat menciptakan nilai jangka panjang bagi masyarakat di seluruh nusantara.",
      image: "/images/businesses/renewable-hero.jpg",
      readTime: "5 min read",
    },
    {
      slug: "investing-in-people-communities",
      date: "Feb 28, 2024",
      category: "People",
      titleEn: "Investing in People and Communities",
      titleId: "Investasi pada Insan dan Komunitas untuk Hari Esok yang Kokoh",
      excerptEn:
        "Empowering local talent through structured vocational training, fair wages, and inclusive healthcare programs.",
      excerptId:
        "Memberdayakan talenta lokal melalui pelatihan vokasi terstruktur, upah layak, dan program kesehatan keluarga.",
      image: "/images/about/hero-engineers-hd.jpg",
      readTime: "4 min read",
    },
    {
      slug: "sustainable-growth-through-innovation",
      date: "Feb 15, 2024",
      category: "Sustainability",
      titleEn: "Sustainable Growth Through Innovation",
      titleId: "Pertumbuhan Berkelanjutan Melalui Inovasi Operasional",
      excerptEn:
        "Integrating regenerative practices and circular resource flows across traditional industrial operations.",
      excerptId:
        "Mengintegrasikan praktik regeneratif dan sirkularitas sumber daya di seluruh lini operasional industri.",
      image: "/images/news/sustainability-hd.jpg",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)] transition-colors duration-300">
      {/* 1. HEADER: Insights for a Brighter Tomorrow (Board A.3.4 Item 6) */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 bg-[var(--trishanti-neutral-50)] dark:bg-[#071A22] transition-colors duration-300">
        <PageContainer>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#00A6A6] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />
              {isId ? "KABAR & WAWASAN" : "NEWS & INSIGHTS"}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white leading-[1.15] tracking-tight transition-colors">
              {isId ? "Wawasan untuk Hari Esok yang Lebih Cerah." : "Insights for a Brighter Tomorrow."}
            </h1>
            <p className="text-lg sm:text-xl text-[var(--trishanti-neutral-600)] dark:text-white/70 font-light max-w-xl transition-colors">
              {isId
                ? "Pemikiran strategis, pembaruan korporasi, dan narasi kemajuan dari ekosistem Trishanti."
                : "Strategic perspectives, corporate milestones, and stories of progress from across our ecosystem."}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* 2. SECTION: Interactive News Discovery (Board A.5.22 Alignment) */}
      <section className="py-16 lg:py-24 bg-white dark:bg-[#0d222c] transition-colors duration-300">
        <PageContainer>
          <NewsDiscovery articles={ARTICLES} locale={locale} />
        </PageContainer>
      </section>
    </div>
  );
}
