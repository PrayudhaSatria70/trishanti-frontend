"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  LayoutGrid,
  List,
  RotateCw,
} from "lucide-react";

/* -------------------------------------------------------------------------
 * A.5.22 SEARCH, FILTER & DISCOVERY PATTERNS:
 * - 05 Quick Filters (Chips with counts)
 * - 07 Content List / Grid View Toggle
 * - 08 Pagination & Load More
 * ------------------------------------------------------------------------- */

export interface ArticleItem {
  slug: string;
  date: string;
  category: string;
  titleEn: string;
  titleId: string;
  excerptEn: string;
  excerptId: string;
  image: string;
  readTime: string;
}

interface NewsDiscoveryProps {
  articles: ArticleItem[];
  locale: string;
}

export function NewsDiscovery({ articles, locale }: NewsDiscoveryProps) {
  const isId = locale === "id";
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const CATEGORIES = ["All", "Corporate", "Sustainability", "People"];

  const filteredArticles = articles.filter(
    (a) => selectedCategory === "All" || a.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setIsLoadingMore(false);
    }, 300);
  };

  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  return (
    <div className="space-y-10">
      {/* 05 FILTER PATTERNS & 07 VIEW TOGGLE */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DEE3E1]">
        {/* Quick Filter Chips with Counts */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? articles.length
                : articles.filter((a) => a.category.toLowerCase() === cat.toLowerCase()).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-[#171C1B] text-white shadow-sm"
                    : "bg-[#F7F8F7] text-[#5E6663] border border-[#DEE3E1] hover:border-[#00A6A6] hover:text-[#00A6A6]"
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-1.5 text-[11px] ${isActive ? "text-white/70" : "text-[#7C8581]"}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* 07 Content List / Grid View Switcher */}
        <div className="flex items-center gap-1 p-1 bg-[#F7F8F7] border border-[#DEE3E1] rounded-full">
          <button
            type="button"
            onClick={() => setViewMode("list")}
            aria-label="List View"
            className={`p-1.5 rounded-full transition-colors ${
              viewMode === "list"
                ? "bg-white text-[#00A6A6] shadow-xs"
                : "text-[#7C8581] hover:text-[#171C1B]"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            aria-label="Grid View"
            className={`p-1.5 rounded-full transition-colors ${
              viewMode === "grid"
                ? "bg-white text-[#00A6A6] shadow-xs"
                : "text-[#7C8581] hover:text-[#171C1B]"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ARTICLES CONTAINER: List or Grid */}
      {viewMode === "list" ? (
        <div className="space-y-8 max-w-5xl mx-auto">
          {displayedArticles.map((article) => (
            <Link
              key={article.slug}
              href={getPath(`/news/${article.slug}`)}
              className="group bg-white rounded-xl border border-[#DEE3E1] overflow-hidden hover:border-[#00A6A6] transition-all duration-300 shadow-sm hover:shadow-md grid grid-cols-1 md:grid-cols-12 items-center"
            >
              {/* Image Column */}
              <div className="md:col-span-5 relative aspect-[16/10] w-full overflow-hidden bg-[#EFF1F0]">
                <Image
                  src={article.image}
                  alt={isId ? article.titleId : article.titleEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-[#171C1B] backdrop-blur-sm shadow-xs">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content Column */}
              <div className="md:col-span-7 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs text-[#7C8581]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#00A6A6]" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#00A6A6]" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#171C1B] group-hover:text-[#00A6A6] transition-colors leading-snug">
                  {isId ? article.titleId : article.titleEn}
                </h2>

                <p className="text-sm text-[#5E6663] leading-relaxed">
                  {isId ? article.excerptId : article.excerptEn}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A6A6] group-hover:translate-x-1 transition-transform">
                    <span>{isId ? "Baca Selengkapnya" : "Read More"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* GRID VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayedArticles.map((article) => (
            <Link
              key={article.slug}
              href={getPath(`/news/${article.slug}`)}
              className="group flex flex-col bg-white rounded-xl border border-[#DEE3E1] overflow-hidden hover:border-[#00A6A6] transition-all duration-300 shadow-sm hover:shadow-md justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFF1F0]">
                  <Image
                    src={article.image}
                    alt={isId ? article.titleId : article.titleEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-[#171C1B] backdrop-blur-sm shadow-xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#7C8581]">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#171C1B] group-hover:text-[#00A6A6] transition-colors leading-snug">
                    {isId ? article.titleId : article.titleEn}
                  </h3>

                  <p className="text-xs text-[#5E6663] leading-relaxed line-clamp-3">
                    {isId ? article.excerptId : article.excerptEn}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#00A6A6] group-hover:translate-x-1 transition-transform">
                  <span>{isId ? "Baca Selengkapnya" : "Read More"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* 08 PAGINATION & LOAD MORE */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#DEE3E1]">
        {/* Numbered Pagination (< 1 2 3 >) */}
        <div className="flex items-center gap-1 text-xs font-medium text-[#171C1B]">
          <button
            type="button"
            className="w-8 h-8 rounded-full border border-[#DEE3E1] flex items-center justify-center hover:border-[#00A6A6] transition-colors disabled:opacity-40"
            disabled
          >
            ‹
          </button>
          <span className="w-8 h-8 rounded-full bg-[#171C1B] text-white flex items-center justify-center font-bold">
            1
          </span>
          <button
            type="button"
            className="w-8 h-8 rounded-full border border-[#DEE3E1] flex items-center justify-center hover:border-[#00A6A6] transition-colors"
          >
            2
          </button>
          <button
            type="button"
            className="w-8 h-8 rounded-full border border-[#DEE3E1] flex items-center justify-center hover:border-[#00A6A6] transition-colors"
          >
            ›
          </button>
        </div>

        {/* Load More Stories Button */}
        <button
          type="button"
          onClick={handleLoadMore}
          disabled={isLoadingMore}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#DEE3E1] bg-white text-xs font-semibold text-[#171C1B] hover:border-[#00A6A6] hover:text-[#00A6A6] transition-all shadow-xs active:scale-98"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isLoadingMore ? "animate-spin text-[#00A6A6]" : ""}`} />
          <span>{isId ? "Muat Lebih Banyak Artikel" : "Load More Stories"}</span>
        </button>
      </div>
    </div>
  );
}
