"use client";

import { useState } from "react";
import {
  Leaf,
  Heart,
  MapPin,
  Users,
  TrendingUp,
  CheckCircle2,
  Quote,
} from "lucide-react";

/* -------------------------------------------------------------------------
 * A.5.21 DATA, STATISTICS & INFORMATION DISPLAY
 * Image 3 Alignment:
 * - 01 Hero Statistics (250,000+, 48, 12, 1,000+)
 * - 03 Capacity Bar Chart (Renewable Energy Growth 2021-2025)
 * - 04 Comparison Block (Today vs Tomorrow)
 * - 05 Radial Progress Indicators (75%, 60%, 90%)
 * - 06 Timeline / Milestones (2014 to 2025)
 * - 07 Geographic Coverage
 * - 08 Multi-year Financial Data Table
 * ------------------------------------------------------------------------- */

/**
 * 01 HERO STATISTICS
 * 4 High-impact numbers with meaningful context
 */
export function HeroStatistics({
  mode = "light",
  isId = false,
  className = "",
}: {
  mode?: "light" | "dark";
  isId?: boolean;
  className?: string;
}) {
  const isDark = mode === "dark";

  const STATS = [
    {
      value: "250,000+",
      labelEn: "Trees Supported",
      subEn: "Through Community Programs",
      labelId: "Pohon Ditanam",
      subId: "Melalui Program Komunitas",
      icon: Leaf,
    },
    {
      value: "48",
      labelEn: "Active Programs",
      subEn: "Community Development",
      labelId: "Program Aktif",
      subId: "Pemberdayaan Komunitas",
      icon: Heart,
    },
    {
      value: "12",
      labelEn: "Regional Initiatives",
      subEn: "Across Archipelago",
      labelId: "Inisiatif Wilayah",
      subId: "Di Seluruh Nusantara",
      icon: MapPin,
    },
    {
      value: "1,000+",
      labelEn: "People Connected",
      subEn: "Across Our Ecosystem",
      labelId: "Insan Terhubung",
      subId: "Di Seluruh Ekosistem",
      icon: Users,
    },
  ];

  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
        isDark
          ? "bg-[#071A22] border-white/10 text-white"
          : "bg-white border-[#DEE3E1] text-[#171C1B] shadow-sm"
      } ${className}`}
    >
      {STATS.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.labelEn} className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#00A6A6]/10 text-[#00A6A6] flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#00A6A6]">
                {stat.value}
              </div>
              <div
                className={`text-xs sm:text-sm font-semibold mt-1 ${
                  isDark ? "text-white" : "text-[#171C1B]"
                }`}
              >
                {isId ? stat.labelId : stat.labelEn}
              </div>
              <div
                className={`text-[11px] leading-tight ${
                  isDark ? "text-[#A6ADAA]" : "text-[#7C8581]"
                }`}
              >
                {isId ? stat.subId : stat.subEn}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * 03 CAPACITY BAR CHART
 * Growth in Renewable Energy Capacity (2021 to 2025)
 */
export function CapacityBarChart({
  mode = "dark",
  isId = false,
  className = "",
}: {
  mode?: "light" | "dark";
  isId?: boolean;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState<"capacity" | "emissions" | "projects">("capacity");
  const isDark = mode === "dark";

  const CAPACITY_DATA = [
    { year: 2021, value: 200, label: "200 MW" },
    { year: 2022, value: 350, label: "350 MW" },
    { year: 2023, value: 480, label: "480 MW" },
    { year: 2024, value: 600, label: "600 MW" },
    { year: 2025, value: 720, label: "720 MW" },
  ];

  const maxVal = 800;

  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
        isDark
          ? "bg-[#071A22] border-white/10 text-white"
          : "bg-white border-[#DEE3E1] text-[#171C1B] shadow-md"
      } ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-xl font-serif font-bold">
            {isId ? "Kapasitas Energi Terbarukan" : "Growth in Renewable Energy Capacity"}
          </h4>
          <p className={`text-xs mt-0.5 ${isDark ? "text-[#A6ADAA]" : "text-[#7C8581]"}`}>
            {isId ? "Progres stabil menuju hari esok yang lebih bersih" : "Steady progress toward a cleaner tomorrow"}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-black/20 border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("capacity")}
            className={`px-3 py-1 rounded-full font-medium transition-all ${
              activeTab === "capacity"
                ? "bg-[#00A6A6] text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            Capacity (MW)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("emissions")}
            className={`px-3 py-1 rounded-full font-medium transition-all ${
              activeTab === "emissions"
                ? "bg-[#00A6A6] text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            Emissions Reduced
          </button>
        </div>
      </div>

      {/* Bar Chart Visualization */}
      <div className="h-48 flex items-end justify-between gap-4 pt-4 pb-2 border-b border-white/10">
        {CAPACITY_DATA.map((item) => {
          const heightPercent = (item.value / maxVal) * 100;
          return (
            <div key={item.year} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span className="text-[11px] font-bold text-[#00A6A6] opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
              <div
                style={{ height: `${heightPercent}%` }}
                className="w-full max-w-[42px] rounded-t-lg bg-gradient-to-t from-[#087C8C] to-[#00A6A6] transition-all duration-500 group-hover:brightness-110"
              />
              <span className={`text-xs ${isDark ? "text-white/60" : "text-[#7C8581]"}`}>
                {item.year}
              </span>
            </div>
          );
        })}
      </div>

      {/* Stat Callout */}
      <div className="mt-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#168C5A]">
          <TrendingUp className="w-4 h-4" />
          <span className="font-semibold">+28% growth in capacity since 2021</span>
        </div>
        <span className="text-[11px] opacity-60">Verified 2025</span>
      </div>
    </div>
  );
}

/**
 * 04 COMPARISON BLOCK
 * Today (Building Foundations) vs Tomorrow (Greater Possibilities)
 */
export function ComparisonBlock({
  isId = false,
  className = "",
}: {
  isId?: boolean;
  className?: string;
}) {
  const COMPARISONS = [
    {
      todayEn: "3 Strategic Industries",
      todayId: "3 Industri Strategis",
      tomorrowEn: "6+ Integrated Industries",
      tomorrowId: "6+ Industri Terintegrasi",
    },
    {
      todayEn: "Local Indonesian Focus",
      todayId: "Fokus Pasar Lokal",
      tomorrowEn: "Regional Southeast Asian Expansion",
      tomorrowId: "Ekspansi Regional Asia Tenggara",
    },
    {
      todayEn: "Emerging Opportunities",
      todayId: "Peluang Baru Bertumbuh",
      tomorrowEn: "Scaled Impact & Infrastructure",
      tomorrowId: "Dampak Berskala & Ekosistem Mantap",
    },
    {
      todayEn: "Growing Enterprise Team",
      todayId: "Tim Inti yang Berkembang",
      tomorrowEn: "Stronger Empowered Communities",
      tomorrowId: "Komunitas Berdaya Lintas Generasi",
    },
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Today Column */}
        <div className="p-6 rounded-2xl bg-[#F7F8F7] border border-[#DEE3E1] space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-serif font-bold text-[#171C1B]">
              {isId ? "Hari Ini" : "Today"}
            </h4>
            <span className="text-xs uppercase tracking-wider text-[#7C8581] font-semibold">
              {isId ? "Membangun Fondasi" : "Building Foundations"}
            </span>
          </div>
          <ul className="space-y-2.5">
            {COMPARISONS.map((item) => (
              <li key={item.todayEn} className="flex items-center gap-2.5 text-xs text-[#5E6663]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7C8581]" />
                <span>{isId ? item.todayId : item.todayEn}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tomorrow Column */}
        <div className="p-6 rounded-2xl bg-[#071A22] text-white border border-[#00A6A6]/30 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-serif font-bold text-white">
              {isId ? "Hari Esok" : "Tomorrow"}
            </h4>
            <span className="text-xs uppercase tracking-wider text-[#00A6A6] font-semibold">
              {isId ? "Kemungkinan Lebih Luas" : "Greater Possibilities"}
            </span>
          </div>
          <ul className="space-y-2.5">
            {COMPARISONS.map((item) => (
              <li key={item.tomorrowEn} className="flex items-center gap-2.5 text-xs text-[#EFF1F0]">
                <CheckCircle2 className="w-4 h-4 text-[#00A6A6] flex-shrink-0" />
                <span className="font-medium">{isId ? item.tomorrowId : item.tomorrowEn}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Highlight Quote */}
      <div className="p-5 rounded-xl bg-white border border-[#DEE3E1] flex items-start gap-4">
        <Quote className="w-6 h-6 text-[#00A6A6] flex-shrink-0 mt-0.5" />
        <p className="text-sm font-serif italic text-[#414946] leading-relaxed">
          {isId
            ? "“Dari awal yang bersahaja menuju dampak yang lebih luas, perjalanan kami senantiasa didefinisikan oleh manusia, tujuan luhur, dan komitmen jangka panjang.”"
            : "“From local beginnings to a broader impact, our journey is defined by people, purpose, and long-term commitment.”"}
        </p>
      </div>
    </div>
  );
}

/**
 * 05 RADIAL PROGRESS INDICATORS
 * 75% Renewable Energy Target, 60% Community Engagement, 90% Sustainable Operations
 */
export function RadialProgressIndicators({
  mode = "light",
  isId = false,
  className = "",
}: {
  mode?: "light" | "dark";
  isId?: boolean;
  className?: string;
}) {
  const isDark = mode === "dark";

  const METRICS = [
    {
      percentage: 75,
      titleEn: "Renewable Energy Target",
      titleId: "Target Energi Bersih",
      subEn: "On track for 2030 commitment",
      subId: "Sesuai peta jalan 2030",
    },
    {
      percentage: 60,
      titleEn: "Community Engagement",
      titleId: "Keterlibatan Komunitas",
      subEn: "Growing year on year",
      subId: "Tumbuh berkelanjutan tahunan",
    },
    {
      percentage: 90,
      titleEn: "Sustainable Operations",
      titleId: "Operasional Berkelanjutan",
      subEn: "Across key business units",
      subId: "Di seluruh lini unit usaha",
    },
  ];

  const size = 120;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
        isDark
          ? "bg-[#071A22] border-white/10 text-white"
          : "bg-white border-[#DEE3E1] text-[#171C1B] shadow-sm"
      } ${className}`}
    >
      {METRICS.map((metric) => {
        const offset = circumference - (metric.percentage / 100) * circumference;
        return (
          <div key={metric.titleEn} className="flex flex-col items-center text-center space-y-3">
            <div className="relative w-[120px] h-[120px]">
              <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full -rotate-90">
                {/* Track */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="transparent"
                  stroke={isDark ? "rgba(255,255,255,0.08)" : "#EFF1F0"}
                  strokeWidth={strokeWidth}
                />
                {/* Progress */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="transparent"
                  stroke="#00A6A6"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-serif text-2xl font-bold">
                {metric.percentage}%
              </div>
            </div>

            <div>
              <h5 className="text-sm font-serif font-bold">
                {isId ? metric.titleId : metric.titleEn}
              </h5>
              <p className={`text-xs mt-0.5 ${isDark ? "text-[#A6ADAA]" : "text-[#7C8581]"}`}>
                {isId ? metric.subId : metric.subEn}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * 06 TIMELINE / MILESTONES
 * 2014 Founded, 2017 Expansion, 2020 Framework, 2023 Regional, 2025 A Stronger Tomorrow
 */
export function MilestoneTimeline({
  isId = false,
  className = "",
}: {
  isId?: boolean;
  className?: string;
}) {
  const MILESTONES = [
    {
      year: "2014",
      titleEn: "Founded",
      titleId: "Pendirian Korporasi",
      descEn: "Established with a bold vision for a brighter, more integrated tomorrow.",
      descId: "Didirikan dengan visi berani mewujudkan hari esok yang lebih cerah dan terpadu.",
    },
    {
      year: "2017",
      titleEn: "Business Expansion",
      titleId: "Ekspansi Lintas Pilar",
      descEn: "Entered new core industries and strengthened long-term ecosystem partnerships.",
      descId: "Memasuki sektor industri inti baru dan memperkokoh kemitraan ekosistem jangka panjang.",
    },
    {
      year: "2020",
      titleEn: "Sustainability Framework",
      titleId: "Kerangka Keberlanjutan ESG",
      descEn: "Formalized our institutional commitment to responsible, regenerative growth.",
      descId: "Merumuskan komitmen kelembagaan menuju pertumbuhan bertanggung jawab.",
    },
    {
      year: "2023",
      titleEn: "Regional Growth",
      titleId: "Pertumbuhan Regional",
      descEn: "Expanded operational presence across critical logistics and national energy corridors.",
      descId: "Memperluas cakupan operasional di koridor logistik dan energi nasional strategis.",
    },
    {
      year: "2025",
      titleEn: "A Stronger Tomorrow",
      titleId: "Hari Esok yang Lebih Kokoh",
      descEn: "Continuing our multi-sector journey with deeper compound impact and innovation.",
      descId: "Melanjutkan kiprah multi-sektor dengan dampak terpadu dan inovasi berkelanjutan.",
    },
  ];

  return (
    <div className={`relative pl-8 sm:pl-10 space-y-8 before:absolute before:left-3.5 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#00A6A6]/30 ${className}`}>
      {MILESTONES.map((item) => (
        <div key={item.year} className="relative group">
          {/* Node Indicator */}
          <div className="absolute -left-8 sm:-left-10 top-1 w-7 h-7 rounded-full bg-white border-2 border-[#00A6A6] flex items-center justify-center group-hover:bg-[#00A6A6] transition-colors shadow-xs">
            <div className="w-2 h-2 rounded-full bg-[#00A6A6] group-hover:bg-white transition-colors" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#00A6A6] tracking-wider">
              {item.year}
            </span>
            <h4 className="text-lg font-serif font-bold text-[#171C1B]">
              {isId ? item.titleId : item.titleEn}
            </h4>
            <p className="text-xs text-[#5E6663] max-w-xl leading-relaxed">
              {isId ? item.descId : item.descEn}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * 08 FINANCIAL DATA TABLE
 * Multi-year performance (2021 to 2025)
 */
export function FinancialDataTable({
  isId = false,
  className = "",
}: {
  isId?: boolean;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState<string>("business");

  const ROWS = [
    { year: 2021, rev: 320, ebitda: 85, assets: 1050 },
    { year: 2022, rev: 420, ebitda: 112, assets: 1280 },
    { year: 2023, rev: 510, ebitda: 138, assets: 1620 },
    { year: 2024, rev: 620, ebitda: 176, assets: 1980 },
    { year: 2025, rev: 720, ebitda: 210, assets: 2340 },
  ];

  return (
    <div className={`p-6 sm:p-7 rounded-2xl bg-white border border-[#DEE3E1] shadow-sm ${className}`}>
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#DEE3E1] mb-4">
        {[
          { id: "business", labelEn: "Business Performance", labelId: "Kinerja Bisnis" },
          { id: "sustainability", labelEn: "Sustainability Impact", labelId: "Dampak Keberlanjutan" },
          { id: "community", labelEn: "People & Community", labelId: "Insan & Komunitas" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === tab.id
                ? "bg-[#171C1B] text-white shadow-xs"
                : "bg-[#F7F8F7] text-[#5E6663] border border-[#DEE3E1] hover:border-[#00A6A6]"
            }`}
          >
            {isId ? tab.labelId : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[#DEE3E1] text-[#7C8581] uppercase tracking-wider font-semibold">
              <th className="py-3 px-4">Year</th>
              <th className="py-3 px-4">Revenue (USD Million)</th>
              <th className="py-3 px-4">EBITDA (USD Million)</th>
              <th className="py-3 px-4">Total Assets (USD Million)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EFF1F0]">
            {ROWS.map((row) => (
              <tr key={row.year} className="hover:bg-[#F7F8F7] transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-[#171C1B]">{row.year}</td>
                <td className="py-3.5 px-4 font-medium text-[#414946]">${row.rev}M</td>
                <td className="py-3.5 px-4 font-medium text-[#168C5A]">${row.ebitda}M</td>
                <td className="py-3.5 px-4 font-bold text-[#00A6A6]">${row.assets.toLocaleString()}M</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
