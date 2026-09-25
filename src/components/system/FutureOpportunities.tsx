"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Brain,
  Database,
  Users,
  Leaf,
  Rocket,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/cn";

interface FutureOpportunitiesProps {
  locale?: string;
  isId?: boolean;
  className?: string | undefined;
}

/**
 * FutureOpportunities — Implements Board A.10 Beyond: Future Opportunities
 * - 01 Long-Term Vision
 * - 02 6 Future Opportunity Areas
 * - 03 Future Technology Horizon (Now, Near Term, Mid Term, Long Term)
 * - 05 Opportunity Prioritization 2x2 Matrix
 * - 06 Example Future Initiatives (Investor Relations, AI Discovery, Sustainability Dashboard, Community, New Ventures)
 * - 09 Our Commitment Banner
 */
export function FutureOpportunities({
  locale = "en",
  isId = false,
  className,
}: FutureOpportunitiesProps) {
  const [activeHorizon, setActiveHorizon] = useState<"now" | "near" | "mid" | "long">("now");

  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const opportunityAreas = [
    {
      icon: Globe,
      titleEn: "Digital Platform Expansion",
      titleId: "Ekspansi Platform Digital",
      itemsEn: [
        "Investor relations portal",
        "Partner collaboration platform",
        "Integrated business ecosystem",
        "Enhanced stakeholder access",
      ],
      itemsId: [
        "Portal hubungan investor terpadu",
        "Platform kolaborasi mitra bisnis",
        "Ekosistem bisnis terintegrasi",
        "Akses pemangku kepentingan terpadu",
      ],
    },
    {
      icon: Brain,
      titleEn: "AI & Intelligent Experiences",
      titleId: "AI & Pengalaman Cerdas",
      itemsEn: [
        "AI-powered contextual search",
        "Personalized content delivery",
        "Intelligent business matching",
        "Virtual corporate assistant",
      ],
      itemsId: [
        "Pencarian kontekstual bertenaga AI",
        "Penyajian konten terpersonalisasi",
        "Pencocokan peluang bisnis cerdas",
        "Asisten korporat virtual",
      ],
    },
    {
      icon: Database,
      titleEn: "Data & Insights Platform",
      titleId: "Platform Data & Wawasan",
      itemsEn: [
        "Advanced executive dashboards",
        "Sustainability data visualization",
        "Real-time business performance",
        "Data-driven strategic decisions",
      ],
      itemsId: [
        "Dasbor eksekutif canggih",
        "Visualisasi data keberlanjutan ESG",
        "Kinerja bisnis waktu nyata",
        "Keputusan strategis berbasis data",
      ],
    },
    {
      icon: Users,
      titleEn: "Community & Stakeholder",
      titleId: "Komunitas & Pemangku Kepentingan",
      itemsEn: [
        "Interactive editorial storytelling",
        "Community initiatives platform",
        "Talent community & alumni",
        "Customer & partner portals",
      ],
      itemsId: [
        "Penceritaan editorial interaktif",
        "Platform inisiatif komunitas",
        "Komunitas talenta & alumni",
        "Portal pelanggan & mitra bisnis",
      ],
    },
    {
      icon: Leaf,
      titleEn: "Sustainability & Impact",
      titleId: "Keberlanjutan & Solusi Dampak",
      itemsEn: [
        "Carbon & ESG impact tracking",
        "Automated ESG reporting tools",
        "Interactive conservation maps",
        "Cross-industry social partnerships",
      ],
      itemsId: [
        "Pelacakan dampak karbon & ESG",
        "Alat pelaporan ESG otomatis",
        "Peta interaktif konservasi",
        "Kemitraan sosial lintas industri",
      ],
    },
    {
      icon: Rocket,
      titleEn: "New Digital Ventures",
      titleId: "Ventura Digital Masa Depan",
      itemsEn: [
        "Explore emerging web technologies",
        "Incubate digital subsidiaries",
        "Corporate venture capital syndicates",
        "Open innovation acceleration",
      ],
      itemsId: [
        "Eksplorasi teknologi web mutakhir",
        "Inkubasi entitas digital mandiri",
        "Sindikasi modal ventura korporat",
        "Akselerasi inovasi terbuka",
      ],
    },
  ];

  const horizons = [
    {
      id: "now",
      time: "0 – 1 Year",
      label: "Optimize & Enhance",
      items: ["Enhanced Analytics", "Content Automation", "Performance Optimization", "Security Enhancement"],
    },
    {
      id: "near",
      time: "1 – 3 Years",
      label: "Expand & Integrate",
      items: ["AI-Powered Search", "Personalization", "Business Integrations", "Multilingual Expansion"],
    },
    {
      id: "mid",
      time: "3 – 5 Years",
      label: "Scale & Innovate",
      items: ["Advanced Data Platform", "Interactive Experiences", "Partner Ecosystem", "New Digital Services"],
    },
    {
      id: "long",
      time: "5+ Years",
      label: "Transform",
      items: ["AI-Driven Ecosystem", "Immersive Experiences", "Global Expansion", "Next-Gen Platforms"],
    },
  ];

  const futureInitiatives = [
    {
      category: "Platform",
      tagColor: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/30",
      title: "Investor Relations Portal",
      desc: "Centralized financial disclosure, regulatory filings, and stakeholder conference access.",
    },
    {
      category: "AI",
      tagColor: "bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30",
      title: "Intelligent Business Discovery",
      desc: "Algorithm-guided commercial matching across our 6 strategic economic pillars.",
    },
    {
      category: "Data",
      tagColor: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30",
      title: "Sustainability Dashboard",
      desc: "Real-time carbon footprint metrics, AMDAL compliance, and community development tracking.",
    },
    {
      category: "Engagement",
      tagColor: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30",
      title: "Community Platform",
      desc: "Collaborative engagement hub empowering local youth cooperatives and educational initiatives.",
    },
    {
      category: "Innovation",
      tagColor: "bg-[#EC4899]/10 text-[#EC4899] border-[#EC4899]/30",
      title: "New Digital Services",
      desc: "Incubating native technology products and corporate-backed venture experiments.",
    },
  ];

  return (
    <div className={cn("space-y-16", className)}>
      {/* 1. SECTION: Header & Vision */}
      <div className="max-w-4xl space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A6A6] block">
          {isId ? "A.10 MELAMPAUI BATAS: PELUANG MASA DEPAN" : "A.10 BEYOND: FUTURE OPPORTUNITIES"}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#171C1B] leading-tight">
          {isId
            ? "Fondasi Hari Ini. Kemungkinan Lebih Besar Esok Hari."
            : "Today's Foundation. Tomorrow's Greater Possibilities."}
        </h2>
        <p className="text-base sm:text-lg text-[#5E6663] leading-relaxed font-light">
          {isId
            ? "Perjalanan digital Trishanti tidak berhenti pada sebuah situs web. Ini adalah fondasi bagi peluang yang lebih luas — memungkinkan dampak lebih besar, hubungan lebih mendalam, dan nilai jangka panjang bagi seluruh pemangku kepentingan."
            : "Trishanti's digital journey doesn't stop at a website. It is a foundation for broader opportunities — enabling greater impact, deeper connections, and long-term value for all stakeholders."}
        </p>
      </div>

      {/* 2. SECTION: 6 Future Opportunity Areas (Board A.10 Item 02) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9DDDA]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase">
            {isId ? "Enam Bidang Peluang Masa Depan" : "Future Opportunity Areas"}
          </h3>
          <span className="text-xs text-[#7C8581] font-mono">6 Strategic Vectors</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunityAreas.map((area, idx) => {
            const IconComp = area.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D9DDDA] hover:border-[#00A6A6] transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F2F4F3] group-hover:bg-[#00A6A6]/10 text-[#00A6A6] flex items-center justify-center mb-5 transition-colors">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-[#171C1B] group-hover:text-[#00A6A6] transition-colors mb-4">
                    {isId ? area.titleId : area.titleEn}
                  </h4>
                  <ul className="space-y-2.5 text-xs text-[#5E6663]">
                    {(isId ? area.itemsId : area.itemsEn).map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A6A6] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. SECTION: Future Technology Horizon Timeline (Board A.10 Item 03) */}
      <div className="p-6 sm:p-10 rounded-2xl bg-[#071A22] text-white border border-white/10 shadow-2xl space-y-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A6A6] block mb-2">
            {isId ? "CAKRAWALA TEKNOLOGI MASA DEPAN" : "FUTURE TECHNOLOGY HORIZON"}
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            {isId ? "Mengevaluasi Adopsi Teknologi Masa Depan" : "Evaluating Emerging Technologies for Future Adoption"}
          </h3>
        </div>

        {/* Horizon Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {horizons.map((h) => {
            const isSelected = activeHorizon === h.id;
            return (
              <button
                key={h.id}
                type="button"
                onClick={() => setActiveHorizon(h.id as "now" | "near" | "mid" | "long")}
                className={cn(
                  "p-4 rounded-xl text-left border transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]",
                  isSelected
                    ? "bg-[#00A6A6]/20 border-[#00A6A6] text-white shadow-lg"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <div className="text-[11px] font-mono text-[#00A6A6] font-semibold">{h.time}</div>
                <div className="text-sm font-bold mt-1 text-white">{h.label}</div>
              </button>
            );
          })}
        </div>

        {/* Active Horizon Deliverables */}
        <div className="p-6 rounded-xl bg-white/[0.04] border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {horizons
            .find((h) => h.id === activeHorizon)
            ?.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#00A6A6] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
        </div>
      </div>

      {/* 4. SECTION: Opportunity Prioritization 2x2 Matrix (Board A.10 Item 05) */}
      <div className="space-y-6">
        <div className="pb-3 border-b border-[#D9DDDA]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase">
            {isId ? "Matriks Prioritisasi Peluang (2×2)" : "Opportunity Prioritization (2×2 Matrix)"}
          </h3>
          <p className="text-xs text-[#7C8581] mt-1">
            {isId ? "Dari ide menuju peta jalan implementasi strategis yang disiplin." : "From ideas to a disciplined strategic execution roadmap."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Quadrant 1: Strategic Initiatives */}
          <div className="p-6 rounded-xl bg-[#00A6A6]/10 border-2 border-[#00A6A6] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#00A6A6] uppercase tracking-wider">
                High Value • Low Effort
              </span>
              <Sparkles className="w-4 h-4 text-[#00A6A6]" />
            </div>
            <h4 className="text-base font-heading font-bold text-[#171C1B] mb-2">
              Strategic Initiatives
            </h4>
            <p className="text-xs text-[#5E6663] leading-relaxed">
              Immediate deployment focus. Delivers outsized organizational clarity and commercial connectivity with existing technology foundations.
            </p>
          </div>

          {/* Quadrant 2: Transformational Opportunities */}
          <div className="p-6 rounded-xl bg-[#071A22] text-white border border-white/20 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#22B8C7] uppercase tracking-wider">
                High Value • Higher Complexity
              </span>
              <Layers className="w-4 h-4 text-[#22B8C7]" />
            </div>
            <h4 className="text-base font-heading font-bold text-white mb-2">
              Transformational Opportunities
            </h4>
            <p className="text-xs text-white/80 leading-relaxed font-light">
              Multi-year investments requiring inter-departmental syndication, custom models, and enterprise API mesh architectures.
            </p>
          </div>

          {/* Quadrant 3: Quick Wins */}
          <div className="p-6 rounded-xl bg-white border border-[#D9DDDA] shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#5E6663] uppercase tracking-wider">
                Lower Complexity • Immediate Impact
              </span>
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
            </div>
            <h4 className="text-base font-heading font-bold text-[#171C1B] mb-2">
              Quick Wins
            </h4>
            <p className="text-xs text-[#5E6663] leading-relaxed">
              Tactical interface improvements, SEO metadata enrichment, caching tuning, and localized copy refinements.
            </p>
          </div>

          {/* Quadrant 4: Future Exploration */}
          <div className="p-6 rounded-xl bg-[#F2F4F3] border border-[#D9DDDA]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#7C8581] uppercase tracking-wider">
                R&D Horizon • Emerging Tech
              </span>
              <Globe className="w-4 h-4 text-[#7C8581]" />
            </div>
            <h4 className="text-base font-heading font-bold text-[#171C1B] mb-2">
              Future Exploration
            </h4>
            <p className="text-xs text-[#5E6663] leading-relaxed">
              Monitored innovations, AI generative asset workflows, and WebAssembly computation pipelines ready for future pilots.
            </p>
          </div>
        </div>
      </div>

      {/* 5. SECTION: Example Future Initiatives (Board A.10 Item 06) */}
      <div className="space-y-6">
        <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase pb-3 border-b border-[#D9DDDA]">
          {isId ? "Inisiatif Masa Depan Terpilih" : "Example Future Initiatives"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {futureInitiatives.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-[#D9DDDA] hover:border-[#00A6A6] transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <span
                  className={cn(
                    "inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border mb-3",
                    item.tagColor
                  )}
                >
                  {item.category}
                </span>
                <h4 className="font-heading font-bold text-base text-[#171C1B] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5E6663] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. SECTION: Our Commitment Banner (Board A.10 Item 09) */}
      <div className="rounded-2xl p-8 sm:p-12 bg-[#071A22] text-white border border-white/10 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,166,166,0.25),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-xl space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A6A6] block">
            {isId ? "KOMITMEN INOVASI KAMI" : "OUR COMMITMENT"}
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            {isId ? "Inovasi Hari Ini untuk Hari Esok yang Lebih Cerah." : "Innovation today for a brighter tomorrow."}
          </h3>
          <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
            {isId
              ? "Kami tetap berkomitmen mengeksplorasi peluang baru, merangkul teknologi bermakna, dan terus meningkatkan kehadiran digital Trishanti — bersama-sama."
              : "We remain committed to exploring new opportunities, embracing meaningful technology, and continuously improving Trishanti's digital presence — together."}
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <Link
            href={getPath("/contact")}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00A6A6] hover:bg-[#008f8f] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_4px_16px_rgba(0,166,166,0.35)] group"
          >
            <span>{isId ? "Jelajahi Masa Depan" : "Explore What's Next"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FutureOpportunities;
