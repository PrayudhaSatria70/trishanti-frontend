import {
  CheckCircle2,
  Users,
  Briefcase,
  Handshake,
  Compass,
  HeartHandshake,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/cn";

interface ProjectConclusionProps {
  isId?: boolean;
  className?: string | undefined;
}

/**
 * ProjectConclusion — Implements Board A.11 & Project Complete Board
 * - Dual-language executive closing statement
 * - 5 Core Tenets: People, Businesses, Partnerships, Opportunities, Impact
 * - Measurable Success (100% metrics across all phases)
 * - The Road Ahead (6 guiding execution vectors)
 */
export function ProjectConclusion({
  isId = false,
  className,
}: ProjectConclusionProps) {
  const tenets = [
    {
      icon: Users,
      nameEn: "People",
      nameId: "Orang",
      descEn: "Human capital at the core",
      descId: "Modal manusia di inti kemajuan",
    },
    {
      icon: Briefcase,
      nameEn: "Businesses",
      nameId: "Bisnis",
      descEn: "6 resilient economic sectors",
      descId: "6 sektor ekonomi tangguh",
    },
    {
      icon: Handshake,
      nameEn: "Partnerships",
      nameId: "Kemitraan",
      descEn: "Strategic multi-sector alliances",
      descId: "Aliansi multi-sektor strategis",
    },
    {
      icon: Compass,
      nameEn: "Opportunities",
      nameId: "Peluang",
      descEn: "Unlocking global frontiers",
      descId: "Membuka batas pasar global",
    },
    {
      icon: HeartHandshake,
      nameEn: "Impact",
      nameId: "Dampak",
      descEn: "Generational prosperity & ESG",
      descId: "Kemakmuran antargenerasi & ESG",
    },
  ];

  const roadAheadSteps = [
    {
      num: "01",
      titleEn: "Operate & Maintain",
      titleId: "Operasikan & Rawat",
      descEn: "Keep the website healthy, secure, and fast with 24/7 observability.",
      descId: "Menjaga situs web sehat, aman, dan cepat dengan observabilitas 24/7.",
    },
    {
      num: "02",
      titleEn: "Measure & Learn",
      titleId: "Ukur & Pelajari",
      descEn: "Use telemetry data to drive meaningful, evidence-based improvements.",
      descId: "Gunakan data telemetri untuk mendorong peningkatan berbasis bukti nyata.",
    },
    {
      num: "03",
      titleEn: "Grow & Evolve",
      titleId: "Bertumbuh & Berkembang",
      descEn: "Support new strategic business subsidiaries and corporate ventures.",
      descId: "Mendukung anak usaha bisnis strategis baru dan ventura korporat.",
    },
    {
      num: "04",
      titleEn: "Innovate Responsibly",
      titleId: "Berinovasi dengan Bertanggung Jawab",
      descEn: "Adopt AI and emerging technologies where real value is created.",
      descId: "Adopsi kapabilitas AI dan teknologi baru saat nilai nyata tercipta.",
    },
    {
      num: "05",
      titleEn: "Create Greater Impact",
      titleId: "Ciptakan Dampak yang Lebih Besar",
      descEn: "Contribute to a more sustainable, inclusive, and connected society.",
      descId: "Berkontribusi pada masyarakat yang lebih berkelanjutan dan inklusif.",
    },
    {
      num: "06",
      titleEn: "Continue Together",
      titleId: "Terus Melangkah Bersama",
      descEn: "People. Progress. Possibilities. Together.",
      descId: "Orang. Kemajuan. Peluang. Bersama.",
    },
  ];

  return (
    <div className={cn("space-y-16", className)}>
      {/* 1. Executive Master Closing Hero */}
      <div className="rounded-3xl p-8 sm:p-14 bg-[#071A22] text-white border border-white/10 relative overflow-hidden shadow-2xl space-y-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,166,166,0.3),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold text-[#00A6A6]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROJECT COMPLETE: PHASE 0 TO A.12</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
            {isId
              ? "Lebih dari Sekadar Situs Web. Fondasi untuk Masa Depan."
              : "More Than a Website. A Foundation for What's Next."}
          </h2>

          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
            {isId
              ? "Bersama, kita telah membangun fondasi yang kokoh — dan menciptakan jalan yang jelas untuk nilai jangka panjang, pertumbuhan, dan dampak."
              : "Together, we have established a solid foundation — and created a clear path for long-term value, growth, and generational impact."}
          </p>
        </div>

        {/* 5 Core Tenets Grid */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t border-white/10">
          {tenets.map((t, idx) => {
            const IconComp = t.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center space-y-2 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#00A6A6]/20 text-[#00A6A6] flex items-center justify-center">
                  <IconComp className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="font-heading font-bold text-sm text-white">
                  {isId ? t.nameId : t.nameEn}
                </div>
                <div className="text-[11px] text-[#94a3b8] leading-tight font-light">
                  {isId ? t.descId : t.descEn}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Measurable Success Dashboard (Board A.11 Item 05) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9DDDA]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
            <span>{isId ? "Metrik Keberhasilan Terukur (100% Selesai)" : "Measurable Success Metrics (100% Complete)"}</span>
          </h3>
          <span className="text-xs font-mono font-semibold text-[#16A34A] bg-[#16A34A]/10 px-2.5 py-1 rounded-md">
            All Quality Gates Passed
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {[
            { value: "100%", label: "Implementation Plan (0–A.12)" },
            { value: "100%", label: "Key Pages & Templates Defined" },
            { value: "100%", label: "Design System Established" },
            { value: "100%", label: "WCAG 2.2 AA Standards Set" },
            { value: "Ready", label: "For Multi-Sector Scale" },
            { value: "Active", label: "Continuous Value Loop" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#D9DDDA] shadow-xs flex flex-col justify-between"
            >
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#00A6A6]">
                {item.value}
              </div>
              <div className="text-xs text-[#5E6663] font-medium mt-2 leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The Road Ahead: 6 Pillars of Future Execution (Project Complete Board) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9DDDA]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#00A6A6]" />
            <span>{isId ? "Jalan ke Depan: Enam Vektor Eksekusi" : "The Road Ahead: Six Execution Vectors"}</span>
          </h3>
          <span className="text-xs text-[#7C8581] font-mono">Future Roadmap</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {roadAheadSteps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-white border border-[#D9DDDA] hover:border-[#00A6A6] transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#00A6A6] block mb-2">
                  {step.num}
                </span>
                <h4 className="font-heading font-bold text-base text-[#171C1B] mb-2">
                  {isId ? step.titleId : step.titleEn}
                </h4>
                <p className="text-xs text-[#5E6663] leading-relaxed">
                  {isId ? step.descId : step.descEn}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#D9DDDA]/60 flex items-center justify-between text-xs text-[#00A6A6] font-semibold">
                <span>{isId ? "Pelajari Vektor" : "Explore Vector"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectConclusion;
