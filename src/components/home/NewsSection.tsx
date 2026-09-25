"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InsightArticle } from "@/lib/data";
import { FadeIn } from "@/components/composite/FadeIn";

interface NewsSectionProps {
  locale: string;
  isId: boolean;
  eyebrow: string;
  headline: string;
  cta: string;
  articles: InsightArticle[];
}

export function NewsSection({
  locale,
  isId,
  eyebrow,
  headline,
  cta,
  articles,
}: NewsSectionProps) {
  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  return (
    <section className="relative py-20 sm:py-28 bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)] text-[var(--trishanti-neutral-900)] dark:text-white transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] overflow-hidden">
      <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,166,166,0.15),transparent_60%)] pointer-events-none" />
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">
        {/* Header row from Visual Board Image 3 */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--trishanti-neutral-500)] block mb-3">
              {eyebrow}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--trishanti-neutral-900)] dark:text-white font-normal leading-tight transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
              {headline}
            </h2>
          </div>

          <Link
            href={getPath("/news")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--trishanti-color-primary)] hover:text-[var(--trishanti-color-primary-dark)] group"
            style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}
          >
            <span>{cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
          </Link>
        </FadeIn>

        {/* 3 News Cards in 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.slice(0, 3).map((article, index) => {
            const title = isId ? article.titleId : article.titleEn;

            return (
              <FadeIn key={article.slug} delay={index * 200} duration={800} direction="up" className="flex">
                <Link
                  href={getPath(`/news#${article.slug}`)}
                  className="w-full bg-white dark:bg-white/5 dark:backdrop-blur-xl rounded-[var(--trishanti-radius-lg)] overflow-hidden border border-[var(--trishanti-neutral-200)] dark:border-white/10 dark:hover:border-white/30 dark:hover:bg-white/10 flex flex-col group hover:shadow-2xl hover:shadow-[#00A6A6]/20 hover:-translate-y-2 transition-all duration-500 dark:glass-panel"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={article.image}
                      alt={title}
                      fill
                      className="object-cover object-center group-hover:scale-105"
                      style={{ transition: `transform var(--trishanti-duration-slow) var(--trishanti-ease-emphasized)` }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1 justify-between bg-white dark:bg-transparent text-[var(--trishanti-neutral-900)]">
                    <div>
                      {/* Date */}
                      <span className="text-sm text-[var(--trishanti-neutral-500)] font-medium block mb-3">
                        {article.date}
                      </span>

                      {/* Title */}
                      <h3 className="font-sans font-bold text-lg sm:text-xl text-[var(--trishanti-color-bg-dark)] dark:text-white group-hover:text-[var(--trishanti-color-primary)] leading-snug mb-6" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                        {title}
                      </h3>
                    </div>

                    {/* Bottom: Tag badge pill (rounded-full 9999px) + Cyan Arrow */}
                    <div className="pt-5 border-t border-[var(--trishanti-neutral-200)] dark:border-white/10 flex items-center justify-between mt-auto">
                      <span className="inline-block px-4 py-1.5 rounded-[var(--trishanti-radius-full)] border border-[var(--trishanti-neutral-200)] dark:border-white/10 bg-[var(--trishanti-neutral-50)] dark:bg-black/20 text-xs font-semibold text-[var(--trishanti-neutral-700)] dark:text-[var(--trishanti-neutral-300)]">
                        {article.category}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[var(--trishanti-neutral-100)] dark:bg-white/10 flex items-center justify-center text-[var(--trishanti-color-primary)] group-hover:bg-[var(--trishanti-color-primary)] group-hover:text-white transition-all shadow-sm">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
