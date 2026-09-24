import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Quote, Sparkles } from "lucide-react";
import { INSIGHT_ARTICLES } from "@/lib/data";
import { PageContainer } from "@/components/layout/PageContainer";
import { Badge } from "@/components/ui/Badge";

/* -------------------------------------------------------------------------
 * A.5.20 CONTENT & EDITORIAL SYSTEM (Image 4 Alignment)
 * Layout Specifications:
 * - 01 Content Hierarchy (Eyebrow -> Headline -> Lead Paragraph -> Body/Sections -> CTA)
 * - 02 Typography for Content (Playfair Display for Display/Editorial Headlines, Inter for Body)
 * - 03 Eyebrows, Categories & Tags
 * - 05 Standardized CTA Language ("Start a Conversation →", "Discover Our Commitment →")
 * - 07 Article Page Layout (Lead paragraph, Author byline, Hero image with caption,
 *      Section numbers '01 The Bigger Picture' & '02 Our Approach', Pull Quote Block,
 *      Inline statistics block, and Related Articles)
 * ------------------------------------------------------------------------- */

interface NewsDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHT_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found | Trishanti" };
  }

  const title = locale === "id" ? article.titleId : article.titleEn;
  const desc = locale === "id" ? article.excerptId : article.excerptEn;

  return {
    title: `${title} | Trishanti Insights`,
    description: desc,
  };
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { locale, slug } = await params;
  const isId = locale === "id";

  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const relatedArticles = INSIGHT_ARTICLES.filter(
    (a) => a.slug !== article.slug,
  ).slice(0, 2);

  const title = isId ? article.titleId : article.titleEn;
  const excerpt = isId ? article.excerptId : article.excerptEn;
  const content = isId ? article.contentId : article.contentEn;

  return (
    <div className="flex flex-col w-full bg-white text-[#171C1B]">
      {/* 01 ARTICLE HEADER */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 border-b border-[#DEE3E1] bg-white">
        <PageContainer size="narrow">
          <Link
            href={getPath("/news")}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00A6A6] hover:underline mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isId ? "Kembali ke Wawasan" : "Back to Insights"}</span>
          </Link>

          {/* 03 Eyebrow & Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Badge variant="sustainability">{article.category}</Badge>
            <span className="text-xs text-[#C5CCC9]">•</span>
            <span className="text-xs text-[#7C8581] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#00A6A6]" />
              {article.date}
            </span>
            <span className="text-xs text-[#C5CCC9]">•</span>
            <span className="text-xs text-[#7C8581] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#00A6A6]" />
              {article.readTime}
            </span>
          </div>

          {/* 02 Display Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171C1B] leading-[1.2] tracking-tight mb-6">
            {title}
          </h1>

          {/* Lead Intro Paragraph */}
          <p className="text-lg sm:text-xl text-[#5E6663] font-light leading-relaxed mb-8">
            {excerpt}
          </p>

          {/* Author Byline */}
          <div className="flex items-center justify-between py-4 border-t border-[#DEE3E1] text-xs text-[#7C8581]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00A6A6]/10 text-[#00A6A6] flex items-center justify-center font-serif font-bold text-base">
                T
              </div>
              <div>
                <div className="font-semibold text-[#171C1B]">Trishanti Editorial Team</div>
                <div className="text-[11px] text-[#7C8581]">
                  {isId ? `Wawasan — ${article.category}` : `Insights — ${article.category}`}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs text-[#5E6663] hover:text-[#00A6A6] transition-colors"
              aria-label="Share article"
            >
              <Share2 className="w-4 h-4 text-[#00A6A6]" />
              <span className="hidden sm:inline">{isId ? "Bagikan" : "Share"}</span>
            </button>
          </div>
        </PageContainer>
      </section>

      {/* 07 HERO IMAGE WITH CAPTION */}
      <section className="py-8 bg-[#F7F8F7] border-b border-[#DEE3E1]">
        <PageContainer size="default">
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-[#DEE3E1] shadow-md bg-[#EFF1F0]">
            <Image
              src={article.image}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <p className="text-center text-xs text-[#7C8581] mt-3 italic">
            {isId
              ? "Inisiatif strategis Trishanti yang mendukung transformasi berkelanjutan di Indonesia."
              : "Trishanti strategic initiatives driving sustainable regional transformation in Indonesia."}
          </p>
        </PageContainer>
      </section>

      {/* 07 ARTICLE LONG-FORM BODY */}
      <section className="py-16 sm:py-24 bg-white">
        <PageContainer size="narrow">
          <article className="space-y-12">
            {/* Section 01: The Bigger Picture */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00A6A6] tracking-wider uppercase">
                <span>01</span>
                <span>/</span>
                <span>{isId ? "Gambaran Lebih Luas" : "The Bigger Picture"}</span>
              </div>
              <p className="text-base sm:text-lg text-[#292F2D] leading-relaxed">
                {content[0] ?? excerpt}
              </p>
            </div>

            {/* PULL QUOTE BLOCK (Item 07 Layout) */}
            <blockquote className="my-10 p-6 sm:p-8 rounded-2xl bg-[#F7F8F7] border-l-4 border-[#00A6A6] shadow-xs relative">
              <Quote className="w-8 h-8 text-[#00A6A6]/20 absolute top-4 right-4" />
              <p className="font-serif italic text-lg sm:text-xl text-[#171C1B] leading-relaxed">
                {isId
                  ? "“Kemajuan jangka panjang menuntut kita berpikir melampaui kuartal berikutnya. Keberlanjutan adalah komitmen yang diwariskan antar generasi.”"
                  : "“Long-term progress requires us to think beyond the next quarter. Sustainability is an institutional commitment handed down across generations.”"}
              </p>
              <footer className="mt-3 text-xs uppercase tracking-wider text-[#7C8581] font-semibold not-italic">
                — {isId ? "Dewan Direksi & Manajemen Trishanti" : "Trishanti Leadership Team"}
              </footer>
            </blockquote>

            {/* Section 02: Our Approach */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00A6A6] tracking-wider uppercase">
                <span>02</span>
                <span>/</span>
                <span>{isId ? "Pendekatan Strategis Kami" : "Our Approach"}</span>
              </div>
              <p className="text-base sm:text-lg text-[#292F2D] leading-relaxed">
                {content[1] ?? content[0]}
              </p>
              {content.length > 2 && (
                <p className="text-base sm:text-lg text-[#292F2D] leading-relaxed">
                  {content[2]}
                </p>
              )}
            </div>

            {/* STATISTIC CALLOUT BLOCK (Item 09) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#071A22] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#00A6A6]/20 shadow-lg">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[#00A6A6] font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isId ? "Dampak Terverifikasi" : "Verified Impact"}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  250,000+
                </div>
                <div className="text-xs text-[#A6ADAA]">
                  {isId ? "Pohon ditanam & didukung program komunitas" : "Trees supported through community programs"}
                </div>
              </div>

              {/* 05 CTA Language: "Start a Conversation →" or "Discover Our Commitment →" */}
              <Link
                href={getPath("/contact")}
                className="px-6 py-3 rounded-full bg-[#00A6A6] text-white text-xs font-semibold hover:bg-[#008f8f] transition-all duration-200 active:scale-98 flex-shrink-0"
              >
                {isId ? "Mulai Percakapan Kemitraan →" : "Start a Conversation →"}
              </Link>
            </div>
          </article>

          {/* RELATED ARTICLES (Item 07 Layout) */}
          <div className="mt-20 pt-12 border-t border-[#DEE3E1]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#171C1B]">
                  {isId ? "Wawasan Terkait Lainnya" : "Related Insights"}
                </h3>
                <p className="text-xs text-[#7C8581] mt-0.5">
                  {isId ? "Jelajahi perspektif lain dari ekosistem Trishanti" : "Explore more stories of sustainable growth"}
                </p>
              </div>
              <Link
                href={getPath("/news")}
                className="text-xs font-semibold text-[#00A6A6] hover:underline hidden sm:inline-flex items-center gap-1"
              >
                <span>{isId ? "Lihat Semua Wawasan" : "View All Insights"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={getPath(`/news/${rel.slug}`)}
                  className="p-6 rounded-2xl bg-[#F7F8F7] border border-[#DEE3E1] hover:border-[#00A6A6] transition-all duration-300 group flex flex-col justify-between hover:shadow-md"
                >
                  <div>
                    <Badge variant="sustainability" className="mb-3">
                      {rel.category}
                    </Badge>
                    <h4 className="text-base font-serif font-bold text-[#171C1B] group-hover:text-[#00A6A6] transition-colors line-clamp-2">
                      {isId ? rel.titleId : rel.titleEn}
                    </h4>
                    <p className="text-xs text-[#5E6663] mt-2 line-clamp-2">
                      {isId ? rel.excerptId : rel.excerptEn}
                    </p>
                  </div>
                  <div className="text-xs text-[#7C8581] mt-5 pt-3 border-t border-[#DEE3E1] flex items-center justify-between">
                    <span>{rel.date}</span>
                    <span className="font-semibold text-[#00A6A6] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {isId ? "Baca Cerita" : "Read Story"} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
