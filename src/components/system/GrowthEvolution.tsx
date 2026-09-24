"use client";

import { useState } from "react";
import {
  TrendingUp,
  RotateCcw,
  Users,
  Eye,
  Clock,
  Sparkles,
  Layers,
  Target,
} from "lucide-react";
import { cn } from "@/lib/cn";

interface GrowthEvolutionProps {
  isId?: boolean;
  className?: string | undefined;
}

/**
 * GrowthEvolution — Implements Board A.9 Growth & Evolution
 * - 01 Purpose & Vision
 * - 03 Evolution Roadmap: Phase 1 Stabilize, Phase 2 Enhance, Phase 3 Expand, Phase 4 Innovate
 * - 05 Data & Insights: 12,540 Monthly Visitors, 48,230 Page Views, 2m 18s Avg Session, 78% Return Visitors
 * - 12-Month Traffic Growth SVG Chart
 * - 06 Continuous User Feedback Loop
 */
export function GrowthEvolution({
  isId = false,
  className,
}: GrowthEvolutionProps) {
  const [activePhase, setActivePhase] = useState<number>(1);

  const growthMetrics = [
    {
      labelEn: "Monthly Visitors",
      labelId: "Pengunjung Bulanan",
      value: "12,540",
      change: "+28%",
      icon: Users,
    },
    {
      labelEn: "Page Views",
      labelId: "Tayangan Halaman",
      value: "48,230",
      change: "+35%",
      icon: Eye,
    },
    {
      labelEn: "Avg. Session Duration",
      labelId: "Durasi Sesi Rata-rata",
      value: "2m 18s",
      change: "+22%",
      icon: Clock,
    },
    {
      labelEn: "Return Visitors",
      labelId: "Pengunjung Kembali",
      value: "78%",
      change: "+18%",
      icon: RotateCcw,
    },
  ];

  const roadmapPhases = [
    {
      phase: 1,
      nameEn: "Stabilize",
      nameId: "Stabilisasi",
      periodEn: "0 – 3 Months",
      periodId: "0 – 3 Bulan",
      tasksEn: [
        "Monitor live performance & uptime",
        "Resolve minor telemetry issues",
        "Content tone refinement",
        "Initial user feedback analysis",
      ],
      tasksId: [
        "Pemantauan performa & waktu aktif",
        "Resolusi isu minor telemetri",
        "Penyempurnaan nada konten",
        "Analisis umpan balik pengguna",
      ],
    },
    {
      phase: 2,
      nameEn: "Enhance",
      nameId: "Peningkatan",
      periodEn: "3 – 6 Months",
      periodId: "3 – 6 Bulan",
      tasksEn: [
        "Deploy new content sections",
        "Component feature enhancements",
        "Advanced technical SEO optimization",
        "Deep predictive analytics insights",
      ],
      tasksId: [
        "Penerapan bagian konten baru",
        "Peningkatan fitur komponen",
        "Optimalisasi SEO teknis lanjutan",
        "Wawasan analitik prediktif mendalam",
      ],
    },
    {
      phase: 3,
      nameEn: "Expand",
      nameId: "Ekspansi",
      periodEn: "6 – 12 Months",
      periodId: "6 – 12 Bulan",
      tasksEn: [
        "Publish new business subsidiary pages",
        "B2B partner portal integrations",
        "Role-based content personalization",
        "Operational content automation",
      ],
      tasksId: [
        "Publikasi halaman anak usaha baru",
        "Integrasi portal mitra B2B",
        "Personalisasi konten berbasis peran",
        "Otomatisasi konten operasional",
      ],
    },
    {
      phase: 4,
      nameEn: "Innovate",
      nameId: "Inovasi",
      periodEn: "12+ Months",
      periodId: "12+ Bulan",
      tasksEn: [
        "AI-driven search & recommendation agents",
        "Interactive ESG impact dashboards",
        "Enterprise API mesh federation",
        "Regional & global digital expansion",
      ],
      tasksId: [
        "Agen pencarian & rekomendasi AI",
        "Dasbor dampak ESG interaktif",
        "Federasi API korporat terpadu",
        "Ekspansi digital regional & global",
      ],
    },
  ];

  return (
    <div className={cn("space-y-16", className)}>
      {/* 1. Header & Vision */}
      <div className="max-w-4xl space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A6A6] block">
          {isId ? "A.9 PERTUMBUHAN & EVOLUSI" : "A.9 GROWTH & EVOLUTION"}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171C1B] leading-tight">
          {isId
            ? "Kehadiran Digital yang Hidup untuk Hari Esok yang Lebih Cerah."
            : "A Living Digital Presence for a Brighter Tomorrow."}
        </h2>
        <p className="text-base sm:text-lg text-[#5E6663] leading-relaxed font-light">
          {isId
            ? "Situs web Trishanti bukanlah proyek final yang statis, melainkan platform hidup yang terus bertumbuh bersama bisnis kami, masyarakat, dan dampak nyata yang kami ciptakan."
            : "Trishanti's website is not a final static project, but a living platform that grows with our business, our people, and our community impact."}
        </p>
      </div>

      {/* 2. 12-Month Data & Insights Grid (Board A.9 Item 05) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9DDDA]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#00A6A6]" />
            <span>{isId ? "Wawasan Pertumbuhan & Kinerja (12 Bulan)" : "Growth & Performance Insights (12 Months)"}</span>
          </h3>
          <span className="text-xs text-[#16A34A] font-semibold bg-[#16A34A]/10 px-2.5 py-1 rounded-md">
            +35% YoY Growth
          </span>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {growthMetrics.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#D9DDDA] shadow-xs flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[#5E6663] mb-3">
                  <span className="text-xs font-medium">{isId ? m.labelId : m.labelEn}</span>
                  <div className="w-8 h-8 rounded-lg bg-[#F2F4F3] text-[#00A6A6] flex items-center justify-center">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#171C1B] tracking-tight">
                    {m.value}
                  </div>
                  <span className="text-[11px] font-semibold text-[#16A34A] mt-1 block">
                    {m.change} vs. benchmark
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive 12-Month Traffic SVG Chart */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#071A22] text-white border border-white/10 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                {isId ? "Kurva Pertumbuhan Lalu Lintas (Januari – Desember 2024)" : "Traffic Growth Trajectory (Jan – Dec 2024)"}
              </h4>
              <p className="text-xs text-[#94a3b8] mt-0.5">
                {isId ? "Peningkatan konsisten pengguna baru dan pengunjung berulang." : "Steady compounding of new stakeholders and returning visitors."}
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A6A6]" />
                <span className="text-[#94a3b8]">New Visitors</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22B8C7]" />
                <span className="text-[#94a3b8]">Returning Visitors</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-44 sm:h-56 pt-4">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 720 180"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00A6A6" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#00A6A6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="30" x2="720" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="75" x2="720" y2="75" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="120" x2="720" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="165" x2="720" y2="165" stroke="rgba(255,255,255,0.12)" />

              {/* Area */}
              <path
                d="M 30,150 Q 150,135 270,110 T 510,70 T 690,25 L 690,165 L 30,165 Z"
                fill="url(#growthArea)"
              />

              {/* Curve 1: Total Growth */}
              <path
                d="M 30,150 Q 150,135 270,110 T 510,70 T 690,25"
                fill="none"
                stroke="#00A6A6"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Curve 2: Returning Visitors */}
              <path
                d="M 30,160 Q 150,148 270,130 T 510,95 T 690,55"
                fill="none"
                stroke="#22B8C7"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />

              {/* Peak Marker at Dec */}
              <circle cx="690" cy="25" r="5" fill="#FFFFFF" stroke="#00A6A6" strokeWidth="2.5" />
            </svg>

            {/* Peak Tooltip */}
            <div className="absolute right-0 top-0 -translate-y-2 px-3 py-1 rounded bg-[#00A6A6] text-white font-mono text-[11px] font-bold shadow-lg">
              Dec 2024: 48,230 views
            </div>
          </div>

          <div className="flex justify-between text-[11px] text-[#94a3b8] font-mono pt-3 border-t border-white/5">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span className="text-[#00A6A6] font-bold">Dec</span>
          </div>
        </div>
      </div>

      {/* 3. Phased Evolution Roadmap (Board A.9 Item 03) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9DDDA]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#00A6A6]" />
            <span>{isId ? "Peta Jalan Evolusi Bertahap" : "Phased Evolution Roadmap"}</span>
          </h3>
          <span className="text-xs text-[#7C8581] font-mono">4 Strategic Phases</span>
        </div>

        {/* Phase Selectors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {roadmapPhases.map((p) => {
            const isSelected = activePhase === p.phase;
            return (
              <button
                key={p.phase}
                type="button"
                onClick={() => setActivePhase(p.phase)}
                className={cn(
                  "p-5 rounded-2xl border text-left transition-all duration-200",
                  isSelected
                    ? "bg-[#071A22] text-white border-[#00A6A6] shadow-lg"
                    : "bg-white text-[#171C1B] border-[#D9DDDA] hover:border-[#A3A8B3]"
                )}
              >
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A6A6]">
                  Phase 0{p.phase}
                </div>
                <h4 className="text-base font-serif font-bold mt-1">
                  {isId ? p.nameId : p.nameEn}
                </h4>
                <div
                  className={cn(
                    "text-xs mt-1 font-mono",
                    isSelected ? "text-[#94a3b8]" : "text-[#7C8581]"
                  )}
                >
                  {isId ? p.periodId : p.periodEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Details */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D9DDDA] shadow-sm">
          {roadmapPhases
            .filter((p) => p.phase === activePhase)
            .map((p) => (
              <div key={p.phase} className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#00A6A6]" />
                  <h4 className="font-serif font-bold text-lg text-[#171C1B]">
                    {isId ? `Fokus Phase 0${p.phase}: ${p.nameId}` : `Phase 0${p.phase} Deliverables: ${p.nameEn}`}
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {(isId ? p.tasksId : p.tasksEn).map((task, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#F2F4F3] border border-[#D9DDDA] flex items-center gap-3 text-xs text-[#171C1B] font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#00A6A6] shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* 4. Strategic Objectives (Board A.9 Item 02) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9DDDA]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase flex items-center gap-2">
            <Target className="w-4 h-4 text-[#00A6A6]" />
            <span>{isId ? "Tujuan Strategis Pertumbuhan" : "Strategic Growth Objectives"}</span>
          </h3>
          <span className="text-xs text-[#7C8581] font-mono">7 Focus Areas</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {[
            { en: "Continuous Improvement", id: "Peningkatan Berkelanjutan" },
            { en: "Content Growth", id: "Pertumbuhan Konten" },
            { en: "New Features & Capabilities", id: "Fitur & Kapabilitas Baru" },
            { en: "Business Expansion Support", id: "Dukungan Ekspansi Bisnis" },
            { en: "UX Optimization", id: "Optimalisasi Pengalaman Pengguna" },
            { en: "Data-Driven Decisions", id: "Keputusan Berbasis Data" },
            { en: "Scalable & Future-Ready", id: "Siap Berkembang di Masa Depan" },
          ].map((obj, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#D9DDDA] shadow-xs flex items-center gap-3 text-xs font-semibold text-[#171C1B]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00A6A6] shrink-0" />
              <span>{isId ? obj.id : obj.en}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Continuous User Feedback & Improvement Loop (Board A.9 Item 06 & 10) */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#F2F4F3] border border-[#D9DDDA] space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A6A6] block">
            {isId ? "SIKLUS PERBAIKAN BERKELANJUTAN" : "CONTINUOUS IMPROVEMENT LOOP"}
          </span>
          <h3 className="text-2xl font-serif font-bold text-[#171C1B]">
            {isId ? "Mendengarkan. Mempelajari. Mengiterasi." : "Listening. Learning. Iterating."}
          </h3>
          <p className="text-sm text-[#5E6663] font-light">
            “Every feedback is a new opportunity to build a better experience.” — Trishanti Engineering Team
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
          {[
            { step: "01", name: "Collect Feedback", desc: "User sessions & forms" },
            { step: "02", name: "Analyze Insights", desc: "Telemetry & heatmaps" },
            { step: "03", name: "Prioritize", desc: "RACI & 2x2 matrix" },
            { step: "04", name: "Implement", desc: "Sprint execution" },
            { step: "05", name: "Measure Impact", desc: "Core Web Vitals & KPIs" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-[#D9DDDA] shadow-xs flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono font-bold text-[#00A6A6] mb-2">{item.step}</div>
              <div>
                <div className="text-xs font-bold text-[#171C1B]">{item.name}</div>
                <div className="text-[11px] text-[#7C8581] mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Long-Term Vision Banner (Board A.9 Item 11) */}
      <div className="rounded-2xl p-8 sm:p-10 bg-[#071A22] text-white border border-white/10 relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A6A6] block">
            {isId ? "VISI JANGKA PANJANG" : "LONG-TERM VISION"}
          </span>
          <h3 className="text-2xl font-serif font-bold text-white">
            {isId
              ? "Peluang Lebih Luas. Dampak Lebih Besar. Masa Depan Lebih Cerah."
              : "More Possibilities. Greater Impact. A Brighter Tomorrow."}
          </h3>
          <p className="text-xs text-white/70 font-light leading-relaxed">
            {isId
              ? "Seiring Trishanti bertumbuh, kehadiran digital kami akan terus berkembang — mendukung bisnis baru, peluang baru, dan masa depan yang lebih berkelanjutan untuk semua."
              : "As Trishanti grows, our digital presence will continue to evolve — supporting new business, new opportunities, and a more sustainable future for all."}
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#00A6A6] shrink-0">
          <Sparkles className="w-4 h-4" />
          <span>Continuous Growth Active</span>
        </div>
      </div>
    </div>
  );
}

export default GrowthEvolution;
