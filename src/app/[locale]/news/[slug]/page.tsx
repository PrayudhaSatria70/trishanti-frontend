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
    <div className="flex flex-col w-full transition-colors duration-300">
      {/* 01 ARTICLE HEADER */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)] transition-colors duration-300">
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white leading-[1.2] tracking-tight mb-6 transition-colors">
            {title}
          </h1>

          {/* Lead Intro Paragraph */}
          <p className="text-lg sm:text-xl text-[var(--trishanti-neutral-600)] dark:text-white/70 font-light leading-relaxed mb-8 transition-colors">
            {excerpt}
          </p>

          {/* Author Byline */}
          <div className="flex items-center justify-between py-4 border-t border-[var(--trishanti-neutral-200)] dark:border-white/10 text-xs text-[var(--trishanti-neutral-500)] dark:text-white/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00A6A6]/10 text-[#00A6A6] flex items-center justify-center font-heading font-bold text-base">
                T
              </div>
              <div>
                <div className="font-semibold text-[var(--trishanti-neutral-900)] dark:text-white transition-colors">Trishanti Editorial Team</div>
                <div className="text-[11px] text-[var(--trishanti-neutral-500)] dark:text-white/50 transition-colors">
                  {isId ? `Wawasan — ${article.category}` : `Insights — ${article.category}`}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--trishanti-neutral-600)] dark:text-white/70 hover:text-[#00A6A6] dark:hover:text-[#00A6A6] transition-colors"
              aria-label="Share article"
            >
              <Share2 className="w-4 h-4 text-[#00A6A6]" />
              <span className="hidden sm:inline">{isId ? "Bagikan" : "Share"}</span>
            </button>
          </div>
        </PageContainer>
      </section>

      {/* 07 HERO IMAGE WITH CAPTION */}
      <section className="py-8 bg-[var(--trishanti-color-surface-light)] dark:bg-[var(--trishanti-color-bg-dark)] border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-300">
        <PageContainer size="default">
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-[var(--trishanti-neutral-200)] dark:border-white/10 shadow-md bg-[var(--trishanti-neutral-100)] dark:bg-slate-800">
            <Image
              src={article.image}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <p className="text-center text-xs text-[var(--trishanti-neutral-500)] dark:text-white/50 mt-3 italic transition-colors">
            {isId
              ? "Inisiatif strategis Trishanti yang mendukung transformasi berkelanjutan di Indonesia."
              : "Trishanti strategic initiatives driving sustainable regional transformation in Indonesia."}
          </p>
        </PageContainer>
      </section>

      {/* 07 ARTICLE LONG-FORM BODY */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0d222c] transition-colors duration-300">
        <PageContainer size="narrow">
          <article className="space-y-12">
            {/* Section 01: The Bigger Picture */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00A6A6] tracking-wider uppercase">
                <span>01</span>
                <span>/</span>
                <span>{isId ? "Gambaran Lebih Luas" : "The Bigger Picture"}</span>
              </div>
              <p className="text-base sm:text-lg text-[var(--trishanti-neutral-800)] dark:text-white/80 leading-relaxed transition-colors">
                {content[0] ?? excerpt}
              </p>
            </div>

            {/* PULL QUOTE BLOCK (Item 07 Layout) */}
            <blockquote className="my-10 p-6 sm:p-8 rounded-2xl bg-[var(--trishanti-color-surface-light)] dark:bg-[var(--trishanti-color-bg-dark)] border-l-4 border-[#00A6A6] shadow-xs relative transition-colors duration-300">
              <Quote className="w-8 h-8 text-[#00A6A6]/20 absolute top-4 right-4" />
              <p className="font-heading italic text-lg sm:text-xl text-[var(--trishanti-neutral-900)] dark:text-white leading-relaxed transition-colors">
                {isId
                  ? "“Kemajuan jangka panjang menuntut kita berpikir melampaui kuartal berikutnya. Keberlanjutan adalah komitmen yang diwariskan antar generasi.”"
                  : "“Long-term progress requires us to think beyond the next quarter. Sustainability is an institutional commitment handed down across generations.”"}
              </p>
              <footer className="mt-3 text-xs uppercase tracking-wider text-[var(--trishanti-neutral-500)] dark:text-white/50 font-semibold not-italic transition-colors">
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
              <p className="text-base sm:text-lg text-[var(--trishanti-neutral-800)] dark:text-white/80 leading-relaxed transition-colors">
                {content[1] ?? content[0]}
              </p>
              {content.length > 2 && (
                <p className="text-base sm:text-lg text-[var(--trishanti-neutral-800)] dark:text-white/80 leading-relaxed transition-colors">
                  {content[2]}
                </p>
              )}
            </div>

            {/* STATISTIC CALLOUT BLOCK (Item 09) */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white/5 dark:bg-[var(--trishanti-neutral-900)] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/20 dark:border-white/10 shadow-lg dark:glass-panel">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[#00A6A6] font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isId ? "Dampak Terverifikasi" : "Verified Impact"}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white transition-colors">
                  250,000+
                </div>
                <div className="text-xs text-[var(--trishanti-neutral-600)] dark:text-white/70 transition-colors">
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
          <div className="mt-20 pt-12 border-t border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-300">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white transition-colors">
                  {isId ? "Wawasan Terkait Lainnya" : "Related Insights"}
                </h3>
                <p className="text-xs text-[var(--trishanti-neutral-500)] dark:text-white/50 mt-0.5 transition-colors">
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
                  className="p-8 rounded-2xl bg-white dark:bg-[var(--trishanti-color-bg-dark)] border border-[var(--trishanti-neutral-200)] dark:border-white/10 hover:border-[#00A6A6] dark:hover:border-[#00A6A6] transition-all duration-300 group flex flex-col justify-between hover:shadow-md dark:glass-panel"
                >
                  <div>
                    <Badge variant="sustainability" className="mb-3">
                      {rel.category}
                    </Badge>
                    <h4 className="text-base font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white group-hover:text-[#00A6A6] dark:group-hover:text-[#00A6A6] transition-colors line-clamp-2">
                      {isId ? rel.titleId : rel.titleEn}
                    </h4>
                    <p className="text-xs text-[var(--trishanti-neutral-600)] dark:text-white/70 mt-2 line-clamp-2 transition-colors">
                      {isId ? rel.excerptId : rel.excerptEn}
                    </p>
                  </div>
                  <div className="text-xs text-[var(--trishanti-neutral-500)] dark:text-white/50 mt-5 pt-3 border-t border-[var(--trishanti-neutral-200)] dark:border-white/10 flex items-center justify-between transition-colors">
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
