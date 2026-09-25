"use client";

import { useState } from "react";
import { TrendingUp, Leaf, Users, Droplets, Sprout, ChevronDown } from "lucide-react";

/* -------------------------------------------------------------------------
 * DATA VISUALIZATION SYSTEM (Board 01 & Board 06 / 07 Alignment)
 * Rules:
 * - Keep it simple and intentional
 * - Use brand colours consistently (#00A6A6 Primary Cyan, #3B82F6 Ocean Blue, #22C55E Green, #F59E0B Warning Amber, #64748B Neutral)
 * - Prioritize clarity over decoration
 * - Use subtle gridlines and labels
 * - Provide meaningful context
 * - Ensure accessibility and contrast
 * - Never make it feel like a generic dashboard
 * ------------------------------------------------------------------------- */

export interface RevenuePoint {
  year: number;
  revenue: number; // in Billions USD
  growth?: string;
}

const REVENUE_DATA: RevenuePoint[] = [
  { year: 2020, revenue: 0.8 },
  { year: 2021, revenue: 1.1 },
  { year: 2022, revenue: 1.4 },
  { year: 2023, revenue: 1.7 },
  { year: 2024, revenue: 2.0, growth: "+17.6%" },
  { year: 2025, revenue: 2.4, growth: "+18.6%" },
];

/**
 * 01 & 02: REVENUE GROWTH LINE / AREA CHART
 * Supports both Light mode (Glass surface + subtle grid) and Dark mode (Gradient surface + subtle grid)
 */
export function RevenueGrowthChart({
  mode = "light",
  className = "",
}: {
  mode?: "light" | "dark";
  className?: string;
}) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(5); // default hover to 2025

  const isDark = mode === "dark";

  // Dimensions
  const width = 560;
  const height = 220;
  const paddingX = 45;
  const paddingTop = 30;
  const paddingBottom = 40;

  const chartW = width - paddingX * 2;
  const chartH = height - paddingTop - paddingBottom;
  const maxRevenue = 3.0;

  const points = REVENUE_DATA.map((d, i) => {
    const x = paddingX + (i / (REVENUE_DATA.length - 1)) * chartW;
    const y = paddingTop + chartH - (d.revenue / maxRevenue) * chartH;
    return { x, y, ...d };
  });

  // Construct SVG path with smooth cubic beziers
  const pathD = points.reduce((acc, curr, idx, arr) => {
    if (idx === 0) {
      return `M ${curr.x} ${curr.y}`;
    }
    const prev = arr[idx - 1] ?? curr;
    const cp1x = prev.x + (curr.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (curr.x - prev.x) / 2;
    const cp2y = curr.y;
    return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }, "");

  const firstPt = points[0] ?? { x: paddingX, y: paddingTop + chartH, year: 2020, revenue: 0 };
  const lastPt = points[points.length - 1] ?? { x: width - paddingX, y: paddingTop, year: 2025, revenue: 2.4 };

  const areaD = `${pathD} L ${lastPt.x} ${paddingTop + chartH} L ${firstPt.x} ${paddingTop + chartH} Z`;

  const activePoint =
    (hoveredIdx !== null ? points[hoveredIdx] : lastPt) ?? lastPt;

  return (
    <div
      className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] ${
        isDark
          ? "bg-gradient-to-br from-[#071A22] via-[#0E2833] to-[#071A22] border border-white/10 text-white shadow-2xl"
          : "bg-white/80 backdrop-blur-xl border border-[#DEE3E1] text-[#171C1B] shadow-lg shadow-[#171C1B]/5"
      } ${className}`}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00A6A6]">
            <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
            <span className="text-white/30">•</span>
            <span>{isDark ? "Gradient surface + subtle grid" : "Glass surface + subtle grid"}</span>
          </div>
          <h3 className="text-2xl font-heading font-bold mt-1">Revenue Growth</h3>
          <p className={`text-xs sm:text-sm mt-0.5 ${isDark ? "text-[#A6ADAA]" : "text-[#7C8581]"}`}>
            Steady progress across our ecosystem.
          </p>
        </div>

        {/* Milestone Callout */}
        <div
          className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${
            isDark
              ? "bg-white/5 border-white/10 text-white"
              : "bg-[#F7F8F7] border-[#DEE3E1] text-[#171C1B]"
          }`}
        >
          <div>
            <div className="text-[11px] font-medium opacity-60">{activePoint.year}</div>
            <div className="text-lg font-bold">${activePoint.revenue.toFixed(1)}B</div>
          </div>
          <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#168C5A] bg-[#168C5A]/10 px-2 py-1 rounded-md">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{activePoint.growth || "+18.6%"}</span>
          </div>
        </div>
      </div>

      {/* SVG Chart Area */}
      <div className="relative w-full aspect-[21/9] min-h-[220px]">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id={`areaGrad-${mode}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00A6A6" stopOpacity={isDark ? "0.35" : "0.20"} />
              <stop offset="100%" stopColor="#00A6A6" stopOpacity="0.0" />
            </linearGradient>
            <filter id={`glow-${mode}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00A6A6" floodOpacity={isDark ? "0.6" : "0.3"} />
            </filter>
          </defs>

          {/* Subtle Gridlines (Y-axis: 0, 1.0B, 2.0B, 3.0B) */}
          {[0, 1.0, 2.0, 3.0].map((val) => {
            const y = paddingTop + chartH - (val / maxRevenue) * chartH;
            return (
              <g key={val}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(23,28,27,0.06)"}
                  strokeDasharray="3 3"
                />
                <text
                  x={paddingX - 10}
                  y={y + 3}
                  textAnchor="end"
                  className={`text-[10px] font-sans ${isDark ? "fill-white/40" : "fill-[#7C8581]"}`}
                >
                  {val === 0 ? "0" : `${val.toFixed(1)}B`}
                </text>
              </g>
            );
          })}

          {/* Area Fill */}
          <path d={areaD} fill={`url(#areaGrad-${mode})`} />

          {/* Cyan Curve */}
          <path
            d={pathD}
            fill="none"
            stroke="#00A6A6"
            strokeWidth="3"
            strokeLinecap="round"
            filter={`url(#glow-${mode})`}
          />

          {/* Vertical guideline on hovered point */}
          {activePoint && (
            <line
              x1={activePoint.x}
              y1={paddingTop}
              x2={activePoint.x}
              y2={paddingTop + chartH}
              stroke="#00A6A6"
              strokeWidth="1.5"
              strokeDasharray="2 2"
              opacity="0.6"
            />
          )}

          {/* Data Points */}
          {points.map((pt, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <g
                key={pt.year}
                className="cursor-pointer transition-transform duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]"
                onMouseEnter={() => setHoveredIdx(i)}
              >
                {/* Outer ring on hover / focus */}
                {isHovered && (
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="8"
                    fill="#00A6A6"
                    fillOpacity="0.25"
                    className="animate-ping"
                  />
                )}
                {/* Dot */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? "5" : "3.5"}
                  fill={isHovered ? "#FFFFFF" : "#00A6A6"}
                  stroke="#00A6A6"
                  strokeWidth="2"
                  className="transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]"
                />
                {/* X-axis label */}
                <text
                  x={pt.x}
                  y={paddingTop + chartH + 22}
                  textAnchor="middle"
                  className={`text-[11px] font-sans transition-colors ${
                    isHovered
                      ? "fill-[#00A6A6] font-bold"
                      : isDark
                      ? "fill-white/60"
                      : "fill-[#5E6663]"
                  }`}
                >
                  {pt.year}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/**
 * 03 & 04: BUSINESS CONTRIBUTION DONUT CHART
 * Share of revenue by pillar:
 * - Infrastructure: 32% (Primary Cyan-Teal #00A6A6)
 * - Industrial Trading: 24% (Ocean Blue #3B82F6)
 * - Agriculture & Food: 18% (Forest Green #22C55E)
 * - Technology & Digital: 14% (Deep Cyan #087C8C)
 * - Consumer & Lifestyle: 8% (Earth Copper #A66A3F)
 * - Experiences & Ventures: 4% (Neutral Slate #64748B)
 */
export interface DonutPillar {
  name: string;
  nameId: string;
  percentage: number;
  color: string;
}

export const BUSINESS_CONTRIBUTION_DATA: DonutPillar[] = [
  { name: "Infrastructure", nameId: "Infrastruktur", percentage: 32, color: "#00A6A6" },
  { name: "Industrial Trading", nameId: "Perdagangan Industri", percentage: 24, color: "#3B82F6" },
  { name: "Agriculture & Food", nameId: "Pertanian & Pangan", percentage: 18, color: "#22C55E" },
  { name: "Technology & Digital", nameId: "Teknologi & Digital", percentage: 14, color: "#087C8C" },
  { name: "Consumer & Lifestyle", nameId: "Konsumen & Gaya Hidup", percentage: 8, color: "#A66A3F" },
  { name: "Experiences & Ventures", nameId: "Pengalaman & Ventura", percentage: 4, color: "#64748B" },
];

export function BusinessContributionChart({
  mode = "light",
  isId = false,
  className = "",
}: {
  mode?: "light" | "dark";
  isId?: boolean;
  className?: string;
}) {
  const [activePillar, setActivePillar] = useState<DonutPillar | null>(null);

  const isDark = mode === "dark";
  const size = 200;
  const center = size / 2;
  const radius = 75;
  const strokeWidth = 26;

  // Compute SVG stroke dash offsets purely
  const circumference = 2 * Math.PI * radius;
  const segments = BUSINESS_CONTRIBUTION_DATA.map((pillar, idx) => {
    const priorPercent = BUSINESS_CONTRIBUTION_DATA.slice(0, idx).reduce((sum, p) => sum + p.percentage, 0);
    const strokeDasharray = `${(pillar.percentage / 100) * circumference} ${circumference}`;
    const strokeDashoffset = -((priorPercent / 100) * circumference);
    return {
      ...pillar,
      strokeDasharray,
      strokeDashoffset,
    };
  });

  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] ${
        isDark
          ? "bg-[#071A22] border border-white/10 text-white"
          : "bg-white border border-[#DEE3E1] text-[#171C1B]"
      } shadow-md ${className}`}
    >
      <div className="mb-5">
        <h4 className="text-xl font-heading font-bold">
          {isId ? "Kontribusi Bisnis" : "Business Contribution"}
        </h4>
        <p className={`text-xs mt-0.5 ${isDark ? "text-[#A6ADAA]" : "text-[#7C8581]"}`}>
          {isId ? "Pangsa pendapatan berdasarkan pilar" : "Share of revenue by pillar"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Donut Chart with Center Stat */}
        <div className="sm:col-span-6 flex justify-center relative">
          <div className="relative w-[180px] h-[180px]">
            <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full -rotate-90">
              {/* Background Ring */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="transparent"
                stroke={isDark ? "rgba(255,255,255,0.06)" : "#EFF1F0"}
                strokeWidth={strokeWidth}
              />

              {/* Segments */}
              {segments.map((pillar) => {
                const isCurrent = activePillar?.name === pillar.name;

                return (
                  <circle
                    key={pillar.name}
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="transparent"
                    stroke={pillar.color}
                    strokeWidth={isCurrent ? strokeWidth + 4 : strokeWidth}
                    strokeDasharray={pillar.strokeDasharray}
                    strokeDashoffset={pillar.strokeDashoffset}
                    className="cursor-pointer transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]"
                    onMouseEnter={() => setActivePillar(pillar)}
                    onMouseLeave={() => setActivePillar(null)}
                  />
                );
              })}
            </svg>

            {/* Donut Center Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <span className="text-xl font-heading font-bold">
                {activePillar ? `${activePillar.percentage}%` : "$2.4B"}
              </span>
              <span className={`text-[10px] uppercase tracking-wider font-medium ${isDark ? "text-white/60" : "text-[#7C8581]"}`}>
                {activePillar ? (isId ? activePillar.nameId : activePillar.name) : (isId ? "Total Pendapatan" : "Total Revenue")}
              </span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="sm:col-span-6 space-y-2">
          {BUSINESS_CONTRIBUTION_DATA.map((pillar) => {
            const isCurrent = activePillar?.name === pillar.name;
            return (
              <div
                key={pillar.name}
                onMouseEnter={() => setActivePillar(pillar)}
                onMouseLeave={() => setActivePillar(null)}
                className={`flex items-center justify-between text-xs p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isCurrent
                    ? isDark ? "bg-white/10" : "bg-[#F7F8F7]"
                    : "hover:bg-black/5"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: pillar.color }}
                  />
                  <span className={`font-medium ${isDark ? "text-[#EFF1F0]" : "text-[#414946]"}`}>
                    {isId ? pillar.nameId : pillar.name}
                  </span>
                </div>
                <span className="font-semibold text-right">{pillar.percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * 03 & 04: SUSTAINABILITY PROGRESS WIDGET
 * Key ESG metrics with clean teal progress bars:
 * - 42% Carbon intensity reduction (Leaf)
 * - 78% Community programs (Users)
 * - 65% Water efficiency (Droplets)
 * - 90% Responsible sourcing (Sprout)
 */
export function SustainabilityProgressWidget({
  mode = "light",
  isId = false,
  className = "",
}: {
  mode?: "light" | "dark";
  isId?: boolean;
  className?: string;
}) {
  const [selectedYear, setSelectedYear] = useState<string>("2025");
  const isDark = mode === "dark";

  const METRICS = [
    {
      id: "carbon",
      percentage: 42,
      labelEn: "Carbon intensity reduction",
      labelId: "Penurunan intensitas karbon",
      icon: Leaf,
    },
    {
      id: "community",
      percentage: 78,
      labelEn: "Community programs",
      labelId: "Cakupan program komunitas",
      icon: Users,
    },
    {
      id: "water",
      percentage: 65,
      labelEn: "Water efficiency",
      labelId: "Efisiensi sirkulasi air",
      icon: Droplets,
    },
    {
      id: "sourcing",
      percentage: 90,
      labelEn: "Responsible sourcing",
      labelId: "Pengadaan rantai pasok bertanggung jawab",
      icon: Sprout,
    },
  ];

  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] ${
        isDark
          ? "bg-[#071A22] border border-white/10 text-white"
          : "bg-white border border-[#DEE3E1] text-[#171C1B]"
      } shadow-md ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-xl font-heading font-bold">
            {isId ? "Kemajuan Keberlanjutan" : "Sustainability Progress"}
          </h4>
          <p className={`text-xs mt-0.5 ${isDark ? "text-[#A6ADAA]" : "text-[#7C8581]"}`}>
            {isId ? "Metrik ESG Kunci Terverifikasi" : "Key ESG metrics"}
          </p>
        </div>

        {/* Year Dropdown Pill */}
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className={`appearance-none text-xs font-semibold px-3 py-1.5 pr-7 rounded-full border cursor-pointer ${
              isDark
                ? "bg-white/10 border-white/15 text-white"
                : "bg-[#F7F8F7] border-[#DEE3E1] text-[#171C1B]"
            } focus:outline-none focus:ring-1 focus:ring-[#00A6A6]`}
          >
            <option value="2025" className="bg-[#171C1B] text-white">2025</option>
            <option value="2024" className="bg-[#171C1B] text-white">2024</option>
            <option value="2023" className="bg-[#171C1B] text-white">2023</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
        </div>
      </div>

      {/* Progress Bars List */}
      <div className="space-y-4">
        {METRICS.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#00A6A6]/10 flex items-center justify-center text-[#00A6A6] flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`font-medium ${isDark ? "text-[#EFF1F0]" : "text-[#414946]"}`}>
                    {isId ? metric.labelId : metric.labelEn}
                  </span>
                </div>
                <span className="text-base font-heading font-bold text-[#00A6A6]">
                  {metric.percentage}%
                </span>
              </div>

              {/* Progress Track */}
              <div
                className={`w-full h-2 rounded-full overflow-hidden ${
                  isDark ? "bg-white/10" : "bg-[#EFF1F0]"
                }`}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00A6A6] to-[#087C8C] transition-all duration-700 ease-out"
                  style={{ width: `${metric.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * 03 & 04: REGIONAL REVENUE GROWTH WIDGET
 * Revenue by region:
 * - Asia Pacific 42%
 * - Indonesia 28%
 * - Middle East 14%
 * - Europe 10%
 * - Americas 6%
 */
export function RegionalGrowthWidget({
  mode = "light",
  isId = false,
  className = "",
}: {
  mode?: "light" | "dark";
  isId?: boolean;
  className?: string;
}) {
  const isDark = mode === "dark";

  const REGIONS = [
    { nameEn: "Asia Pacific", nameId: "Asia Pasifik", share: 42, color: "#00A6A6" },
    { nameEn: "Indonesia", nameId: "Indonesia", share: 28, color: "#087C8C" },
    { nameEn: "Middle East", nameId: "Timur Tengah", share: 14, color: "#3B82F6" },
    { nameEn: "Europe", nameId: "Eropa", share: 10, color: "#22C55E" },
    { nameEn: "Americas", nameId: "Amerika", share: 6, color: "#64748B" },
  ];

  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] ${
        isDark
          ? "bg-[#071A22] border border-white/10 text-white"
          : "bg-white border border-[#DEE3E1] text-[#171C1B]"
      } shadow-md ${className}`}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="text-xl font-heading font-bold">
            {isId ? "Pertumbuhan Regional" : "Regional Growth"}
          </h4>
          <p className={`text-xs mt-0.5 ${isDark ? "text-[#A6ADAA]" : "text-[#7C8581]"}`}>
            {isId ? "Pendapatan per wilayah geografis" : "Revenue by region"}
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#00A6A6]/10 text-[#00A6A6]">
          2025
        </span>
      </div>

      <div className="space-y-3">
        {REGIONS.map((region) => (
          <div key={region.nameEn} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: region.color }}
                />
                <span className={`font-medium ${isDark ? "text-[#EFF1F0]" : "text-[#414946]"}`}>
                  {isId ? region.nameId : region.nameEn}
                </span>
              </div>
              <span className="font-semibold">{region.share}%</span>
            </div>

            <div
              className={`w-full h-1.5 rounded-full overflow-hidden ${
                isDark ? "bg-white/10" : "bg-[#EFF1F0]"
              }`}
            >
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${region.share}%`, backgroundColor: region.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
