"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  Search,
  X,
  ArrowRight,
  Building2,
  Newspaper,
  ChevronRight,
  TrendingUp,
  FileText,
  History,
} from "lucide-react";
import { BUSINESS_PILLARS, INSIGHT_ARTICLES } from "@/lib/data";

/* -------------------------------------------------------------------------
 * A.5.22 SEARCH, FILTER & DISCOVERY PATTERNS
 * Board Alignment:
 * - 01 Search Input States (Default, Focused, Typing with clear 'x', Dark Mode)
 * - 02 Search Suggestions (Popular Searches & Recent Searches with Clear all)
 * - 03 Search Results with Category Filter Tabs (All, News, Businesses, Reports, Careers)
 * - 04 Empty & Loading States (Searching spinner, No results found with bullet tips + Explore button)
 * ------------------------------------------------------------------------- */

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SEARCHES = [
  { en: "Sustainability", id: "Keberlanjutan", query: "sustainability" },
  { en: "Annual Reports", id: "Laporan Tahunan", query: "annual report" },
  { en: "Our Businesses", id: "Pilar Bisnis", query: "infrastructure" },
  { en: "Careers", id: "Karier", query: "career" },
  { en: "Corporate Governance", id: "Tata Kelola Korporasi", query: "governance" },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const locale = useLocale();
  const isId = locale === "id";
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "renewable energy",
    "sustainability report 2025",
    "infrastructure",
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    setTimeout(() => inputRef.current?.focus(), 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Simulate short realistic searching transition
  const handleQueryChange = (val: string) => {
    setQuery(val);
    if (val.trim()) {
      setIsSearching(true);
      setTimeout(() => setIsSearching(false), 120);
    } else {
      setIsSearching(false);
    }
  };

  const handleSelectSuggestion = (searchQuery: string) => {
    setQuery(searchQuery);
    if (!recentSearches.includes(searchQuery)) {
      setRecentSearches((prev) => [searchQuery, ...prev.slice(0, 4)]);
    }
  };

  const clearRecent = () => setRecentSearches([]);

  if (!isOpen) {
    return null;
  }

  const normalizedQuery = query.toLowerCase().trim();

  // Filter Pillars
  const filteredPillars = BUSINESS_PILLARS.filter((p) => {
    if (!normalizedQuery) {
      return false;
    }
    const title = (isId ? p.titleId : p.titleEn).toLowerCase();
    const tagline = (isId ? (p.taglineId ?? "") : (p.taglineEn ?? "")).toLowerCase();
    const subtitle = (isId ? (p.subtitleId ?? "") : (p.subtitleEn ?? "")).toLowerCase();
    return (
      title.includes(normalizedQuery) ||
      tagline.includes(normalizedQuery) ||
      subtitle.includes(normalizedQuery)
    );
  });

  // Filter News
  const filteredNews = INSIGHT_ARTICLES.filter((n) => {
    if (!normalizedQuery) {
      return false;
    }
    const title = (isId ? n.titleId : n.titleEn).toLowerCase();
    const excerpt = (isId ? n.excerptId : n.excerptEn).toLowerCase();
    const cat = n.category.toLowerCase();
    return title.includes(normalizedQuery) || excerpt.includes(normalizedQuery) || cat.includes(normalizedQuery);
  });

  // Simulated Reports match
  const hasReportMatch =
    normalizedQuery.includes("report") ||
    normalizedQuery.includes("laporan") ||
    normalizedQuery.includes("sustain") ||
    normalizedQuery.includes("annual");

  const reportsResults = hasReportMatch
    ? [
        {
          id: "rep-2025",
          titleEn: "2025 Sustainability Report",
          titleId: "Laporan Keberlanjutan 2025",
          descEn: "Our progress, impact, and commitment to a greener tomorrow.",
          descId: "Kemajuan, dampak nyata, dan komitmen menuju hari esok yang lebih hijau.",
          category: "Reports",
          date: "05 January 2025",
          href: "/sustainability",
        },
      ]
    : [];

  // Filter counts
  const totalCount = filteredPillars.length + filteredNews.length + reportsResults.length;

  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Search Trishanti"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#071A22] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 01 SEARCH INPUT STATES (Default / Focused / Typing / Clear X) */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
          <Search className="w-5 h-5 text-[#00A6A6] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder={
              isId
                ? "Cari pilar bisnis, laporan tahunan, karier..."
                : "Search news, reports, careers, businesses..."
            }
            className="flex-1 bg-transparent text-white placeholder-[#A6ADAA] text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-white/10 text-white/70 hover:text-white hover:bg-white/20 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Esc
          </button>
        </div>

        {/* 03 SEARCH RESULTS CATEGORY TABS (Shown when searching) */}
        {normalizedQuery && !isSearching && totalCount > 0 && (
          <div className="flex items-center gap-2 px-5 py-2.5 bg-black/30 border-b border-white/5 overflow-x-auto">
            <span className="text-xs text-[#A6ADAA] mr-2">
              {isId ? `Hasil untuk "${query}" (${totalCount})` : `Results for "${query}" (${totalCount})`}
            </span>
            {[
              { id: "All", label: isId ? `Semua (${totalCount})` : `All (${totalCount})` },
              { id: "News", label: isId ? `Berita (${filteredNews.length})` : `News (${filteredNews.length})` },
              { id: "Businesses", label: isId ? `Bisnis (${filteredPillars.length})` : `Our Businesses (${filteredPillars.length})` },
              { id: "Reports", label: isId ? `Laporan (${reportsResults.length})` : `Reports (${reportsResults.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                  selectedFilter === tab.id
                    ? "bg-[#00A6A6] text-white"
                    : "text-[#DEE3E1] hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* BODY AREA */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1">
          {/* 04 LOADING STATE */}
          {isSearching && (
            <div className="py-12 text-center space-y-3">
              <div className="w-10 h-10 border-2 border-[#00A6A6]/20 border-t-[#00A6A6] rounded-full animate-spin mx-auto" />
              <div className="text-sm font-medium text-white">
                {isId ? "Mencari..." : "Searching..."}
              </div>
              <p className="text-xs text-[#A6ADAA]">
                {isId ? "Menemukan hasil yang paling relevan untuk Anda." : "Finding the most relevant results for you."}
              </p>
            </div>
          )}

          {/* 02 SEARCH SUGGESTIONS (Default State when query is empty) */}
          {!normalizedQuery && !isSearching && (
            <div className="space-y-6">
              {/* Popular Searches */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00A6A6] mb-3">
                  {isId ? "Pencarian Populer" : "Popular Searches"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((item) => (
                    <button
                      key={item.query}
                      onClick={() => handleSelectSuggestion(item.query)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#EFF1F0] hover:border-[#00A6A6] hover:text-[#00A6A6] transition-all"
                    >
                      <TrendingUp className="w-3 h-3 text-[#00A6A6]" />
                      <span>{isId ? item.id : item.en}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00A6A6]">
                      {isId ? "Pencarian Terkini" : "Recent Searches"}
                    </h4>
                    <button
                      onClick={clearRecent}
                      className="text-[11px] text-[#A6ADAA] hover:text-white transition-colors"
                    >
                      {isId ? "Hapus semua" : "Clear all"}
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSelectSuggestion(term)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-[#EFF1F0] hover:bg-white/5 transition-colors text-left group"
                      >
                        <span className="flex items-center gap-2">
                          <History className="w-3.5 h-3.5 text-white/40 group-hover:text-[#00A6A6]" />
                          <span>{term}</span>
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#00A6A6] group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 04 EMPTY STATE: NO RESULTS FOUND */}
          {normalizedQuery && !isSearching && totalCount === 0 && (
            <div className="py-8 text-center space-y-5">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#00A6A6]">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold text-white">
                  {isId ? "Tidak Ada Hasil Ditemukan" : "No results found"}
                </h4>
                <p className="text-xs text-[#A6ADAA] mt-1">
                  {isId
                    ? `Kami tidak dapat menemukan apa pun untuk "${query}"`
                    : `We couldn't find anything for "${query}"`}
                </p>
                <div className="text-xs text-[#A6ADAA] mt-4 max-w-sm mx-auto text-left space-y-1.5 bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="font-semibold text-white/90">{isId ? "Coba lakukan:" : "Try checking:"}</p>
                  <p className="flex items-center gap-1.5">• {isId ? "Periksa ejaan kata kunci Anda" : "Check your spelling"}</p>
                  <p className="flex items-center gap-1.5">• {isId ? "Gunakan istilah pencarian yang lebih umum" : "Use a more general search term"}</p>
                  <p className="flex items-center gap-1.5">• {isId ? "Jelajahi pilar bisnis atau wawasan terkait" : "Explore related business topics"}</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={getPath("/businesses")}
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#00A6A6] text-white text-xs font-semibold hover:bg-[#008f8f] transition-all"
                >
                  <span>{isId ? "Jelajahi Semua Konten" : "Explore All Content"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* 03 SEARCH RESULTS LIST */}
          {normalizedQuery && !isSearching && totalCount > 0 && (
            <div className="space-y-6">
              {/* Reports Section */}
              {(selectedFilter === "All" || selectedFilter === "Reports") && reportsResults.length > 0 && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00A6A6] mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>{isId ? "Laporan & Publikasi" : "Reports & Publications"}</span>
                  </div>
                  <div className="space-y-2">
                    {reportsResults.map((item) => (
                      <Link
                        key={item.id}
                        href={getPath(item.href)}
                        onClick={onClose}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00A6A6]/50 transition-all group"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#00A6A6]/20 text-[#00A6A6]">
                              {item.category}
                            </span>
                            <span className="text-[11px] text-[#A6ADAA]">{item.date}</span>
                          </div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-[#00A6A6] transition-colors">
                            {isId ? item.titleId : item.titleEn}
                          </h4>
                          <p className="text-xs text-[#A6ADAA] mt-0.5">
                            {isId ? item.descId : item.descEn}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#00A6A6] group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Pillars */}
              {(selectedFilter === "All" || selectedFilter === "Businesses") && filteredPillars.length > 0 && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00A6A6] mb-2 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{isId ? "Pilar Bisnis" : "Our Businesses"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredPillars.map((pillar) => (
                      <Link
                        key={pillar.id}
                        href={getPath(`/businesses/${pillar.slug}`)}
                        onClick={onClose}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00A6A6]/50 transition-all group"
                      >
                        <div>
                          <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-white/10 text-[#00A6A6] mb-1 inline-block">
                            {isId ? "Pilar" : "Business Pillar"}
                          </span>
                          <h4 className="text-sm font-semibold text-white group-hover:text-[#00A6A6] transition-colors">
                            {isId ? pillar.titleId : pillar.titleEn}
                          </h4>
                          <p className="text-xs text-[#A6ADAA] mt-0.5">
                            {isId ? (pillar.subtitleId ?? pillar.taglineId) : (pillar.subtitleEn ?? pillar.taglineEn)}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#00A6A6] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* News / Insights */}
              {(selectedFilter === "All" || selectedFilter === "News") && filteredNews.length > 0 && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00A6A6] mb-2 flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>{isId ? "Kabar & Wawasan" : "News & Insights"}</span>
                  </div>
                  <div className="space-y-2">
                    {filteredNews.map((item) => (
                      <Link
                        key={item.slug}
                        href={getPath(`/news#${item.slug}`)}
                        onClick={onClose}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00A6A6]/50 transition-all group"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#00A6A6]/20 text-[#00A6A6]">
                              {item.category}
                            </span>
                            <span className="text-[11px] text-[#A6ADAA]">{item.date}</span>
                          </div>
                          <h4 className="text-sm font-medium text-white group-hover:text-[#00A6A6] transition-colors line-clamp-1">
                            {isId ? item.titleId : item.titleEn}
                          </h4>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#00A6A6] group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="px-5 py-3 bg-black/40 border-t border-white/10 text-xs text-[#A6ADAA] flex items-center justify-between">
          <span>{isId ? "Tekan ESC untuk menutup" : "Press ESC to close"}</span>
          <span className="text-[#00A6A6] font-medium">Trishanti Discovery</span>
        </div>
      </div>
    </div>
  );
}
