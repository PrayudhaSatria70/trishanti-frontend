"use client";

import { useState } from "react";
import { FileText, Download, ChevronDown } from "lucide-react";

/* -------------------------------------------------------------------------
 * A.5.22 ITEM 11: DOCUMENT SEARCH & FILTER PATTERN
 * Features:
 * - Category filter tabs (All Documents, Annual Reports, Sustainability, Governance, Policies)
 * - Year dropdown filter
 * - Clean document cards with PDF badge, metadata, and download action
 * ------------------------------------------------------------------------- */

export interface CorporateDocument {
  id: string;
  titleEn: string;
  titleId: string;
  descEn: string;
  descId: string;
  category: "Annual Reports" | "Sustainability" | "Governance" | "Policies";
  year: string;
  fileSize: string;
  date: string;
  downloadUrl: string;
}

const DOCUMENTS_DATA: CorporateDocument[] = [
  {
    id: "doc-1",
    titleEn: "2025 Sustainability Report",
    titleId: "Laporan Keberlanjutan 2025",
    descEn: "Our progress, impact, and commitment to a more sustainable future across Indonesia.",
    descId: "Kemajuan, dampak nyata, dan komitmen menuju masa depan berkelanjutan di seluruh nusantara.",
    category: "Sustainability",
    year: "2025",
    fileSize: "12.4 MB",
    date: "18 Feb 2025",
    downloadUrl: "#",
  },
  {
    id: "doc-2",
    titleEn: "2024 Annual Financial Report",
    titleId: "Laporan Keuangan Tahunan 2024",
    descEn: "Audited financial performance, strategic milestones, and consolidated operational balance.",
    descId: "Kinerja keuangan teraudit, pencapaian strategis, dan laporan neraca konsolidasi grup.",
    category: "Annual Reports",
    year: "2024",
    fileSize: "18.2 MB",
    date: "12 Jan 2025",
    downloadUrl: "#",
  },
  {
    id: "doc-3",
    titleEn: "Corporate Governance & Ethics Charter",
    titleId: "Pedoman Tata Kelola & Etika Korporasi",
    descEn: "Board charters, anti-bribery standards, compliance oversight, and risk management policies.",
    descId: "Piagam direksi & komisaris, standar anti-penyuapan, pengawasan kepatuhan, dan manajemen risiko.",
    category: "Governance",
    year: "2024",
    fileSize: "4.8 MB",
    date: "05 Nov 2024",
    downloadUrl: "#",
  },
  {
    id: "doc-4",
    titleEn: "Environmental, Health & Safety (EHS) Policy",
    titleId: "Kebijakan Keselamatan, Kesehatan Kerja & Lingkungan",
    descEn: "Comprehensive operational safety protocols across heavy logistics and infrastructure assets.",
    descId: "Protokol keselamatan operasional terpadu di seluruh aset logistik dan infrastruktur strategis.",
    category: "Policies",
    year: "2024",
    fileSize: "3.5 MB",
    date: "20 Aug 2024",
    downloadUrl: "#",
  },
  {
    id: "doc-5",
    titleEn: "2023 Annual Strategic Review",
    titleId: "Tinjauan Strategis Tahunan 2023",
    descEn: "Macroeconomic evaluation and multi-sector investment portfolio performance.",
    descId: "Evaluasi makroekonomi dan kinerja portofolio investasi multi-sektor.",
    category: "Annual Reports",
    year: "2023",
    fileSize: "14.1 MB",
    date: "22 Jan 2024",
    downloadUrl: "#",
  },
];

export function DocumentList({
  isId = false,
  className = "",
}: {
  isId?: boolean;
  className?: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const CATEGORIES = [
    { en: "All Documents", id: "Semua Dokumen", value: "All" },
    { en: "Annual Reports", id: "Laporan Tahunan", value: "Annual Reports" },
    { en: "Sustainability", id: "Keberlanjutan", value: "Sustainability" },
    { en: "Governance", id: "Tata Kelola", value: "Governance" },
    { en: "Policies", id: "Kebijakan", value: "Policies" },
  ];

  const filteredDocs = DOCUMENTS_DATA.filter((doc) => {
    const matchesCat = selectedCategory === "All" || doc.category === selectedCategory;
    const matchesYear = selectedYear === "All" || doc.year === selectedYear;
    return matchesCat && matchesYear;
  });

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Filter Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--trishanti-neutral-200)] dark:border-white/10">
        {/* Category Pills (rounded-full) */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-[var(--trishanti-neutral-900)] dark:bg-white text-white dark:text-[#171C1B] shadow-sm"
                    : "bg-[var(--trishanti-neutral-50)] dark:bg-white/5 text-[var(--trishanti-neutral-600)] dark:text-white/70 border border-[var(--trishanti-neutral-200)] dark:border-white/10 hover:border-[#00A6A6] dark:hover:border-[#00A6A6] hover:text-[#00A6A6]"
                }`}
              >
                {isId ? cat.id : cat.en}
              </button>
            );
          })}
        </div>

        {/* Year Dropdown */}
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="appearance-none text-sm font-semibold px-5 py-2.5 pr-10 rounded-full border border-[var(--trishanti-neutral-200)] dark:border-white/10 bg-[var(--trishanti-neutral-50)] dark:bg-white/5 text-[var(--trishanti-neutral-900)] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#00A6A6] cursor-pointer"
          >
            <option value="All">{isId ? "Semua Tahun" : "All Years"}</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
        </div>
      </div>

      {/* Document Items List */}
      <div className="space-y-3">
        {filteredDocs.length === 0 ? (
          <div className="py-12 text-center text-[var(--trishanti-neutral-500)] dark:text-white/50 text-sm">
            {isId ? "Tidak ada dokumen yang sesuai dengan filter." : "No documents match the selected filters."}
          </div>
        ) : (
          filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-xl bg-white dark:bg-[var(--trishanti-color-bg-dark)] border border-[var(--trishanti-neutral-200)] dark:border-white/10 hover:border-[#00A6A6] dark:hover:border-[#00A6A6] transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] hover:shadow-[var(--trishanti-elevation-2)] hover:-translate-y-1 group dark:glass-panel"
            >
              {/* Left: Icon & Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#00A6A6]/10 text-[#00A6A6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#00A6A6] group-hover:text-white transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white group-hover:text-[#00A6A6] transition-colors">
                    {isId ? doc.titleId : doc.titleEn}
                  </h4>
                  <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-white/70 mt-2 max-w-xl">
                    {isId ? doc.descId : doc.descEn}
                  </p>
                </div>
              </div>

              {/* Right: Badges & Download Action */}
              <div className="flex items-center gap-3 sm:gap-5 self-end sm:self-center flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-[var(--trishanti-neutral-50)] dark:bg-white/5 text-[var(--trishanti-neutral-600)] dark:text-white/70 border border-[var(--trishanti-neutral-200)] dark:border-white/10">
                    PDF {doc.fileSize}
                  </span>
                  <span className="text-sm text-[var(--trishanti-neutral-500)] dark:text-white/60">{doc.date}</span>
                </div>

                <a
                  href={doc.downloadUrl}
                  download
                  aria-label={`Download ${doc.titleEn}`}
                  className="p-3 rounded-full border border-[var(--trishanti-neutral-200)] dark:border-white/10 text-[var(--trishanti-neutral-900)] dark:text-white hover:bg-[#00A6A6] dark:hover:bg-[#00A6A6] hover:text-white dark:hover:text-white hover:border-[#00A6A6] dark:hover:border-[#00A6A6] transition-all group-hover:shadow-xs"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
