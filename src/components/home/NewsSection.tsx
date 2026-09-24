"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InsightArticle } from "@/lib/data";

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
    <section className="py-20 sm:py-28 bg-[var(--trishanti-neutral-50)] text-[var(--trishanti-neutral-900)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row from Visual Board Image 3 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--trishanti-neutral-500)] block mb-3">
              {eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--trishanti-neutral-900)] font-normal leading-tight">
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
        </div>

        {/* 3 News Cards in 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.slice(0, 3).map((article) => {
            const title = isId ? article.titleId : article.titleEn;

            return (
              <Link
                key={article.slug}
                href={getPath(`/news#${article.slug}`)}
                className="bg-white rounded-[var(--trishanti-radius-md)] overflow-hidden border border-[var(--trishanti-neutral-200)] flex flex-col group"
                style={{ boxShadow: `var(--trishanti-elevation-1)`, transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `var(--trishanti-elevation-2)`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `var(--trishanti-elevation-1)`; }}
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
                <div className="p-6 flex flex-col flex-1 justify-between bg-white text-[var(--trishanti-neutral-900)]">
                  <div>
                    {/* Date */}
                    <span className="text-xs text-[var(--trishanti-neutral-500)] font-medium block mb-2">
                      {article.date}
                    </span>

                    {/* Title */}
                    <h3 className="font-sans font-bold text-base sm:text-lg text-[var(--trishanti-color-bg-dark)] group-hover:text-[var(--trishanti-color-primary)] leading-snug mb-4" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                      {title}
                    </h3>
                  </div>

                  {/* Bottom: Tag badge pill (rounded-full 9999px) + Cyan Arrow */}
                  <div className="pt-4 border-t border-[var(--trishanti-neutral-200)] flex items-center justify-between">
                    <span className="inline-block px-3 py-1 rounded-[var(--trishanti-radius-full)] border border-[var(--trishanti-neutral-200)] bg-[var(--trishanti-neutral-50)] text-[11px] font-semibold text-[var(--trishanti-neutral-700)]">
                      {article.category}
                    </span>
                    <span className="text-[var(--trishanti-color-primary)] group-hover:translate-x-1" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }}>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
