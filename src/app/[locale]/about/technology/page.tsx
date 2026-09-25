import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Breadcrumb } from "@/components/composite/ContentCards";
import { FutureOpportunities } from "@/components/system/FutureOpportunities";
import { TestingQASystem } from "@/components/system/TestingQASystem";
import { LaunchMonitoringWidget } from "@/components/system/LaunchMonitoringWidget";
import { GrowthEvolution } from "@/components/system/GrowthEvolution";
import { GovernanceOperations } from "@/components/system/GovernanceOperations";
import { ProjectConclusion } from "@/components/system/ProjectConclusion";
import {
  Code2,
  FolderGit2,
  BookOpen,
  FileCheck2,
  CheckCircle2,
} from "lucide-react";

interface TechnologyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: TechnologyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";

  return {
    title: isId
      ? "Teknologi, Jaminan Kualitas & Inovasi Masa Depan | Trishanti"
      : "Technology, Quality Assurance & Future Innovation | Trishanti",
    description: isId
      ? "Sistem tata kelola teknologi, metrik jaminan kualitas, pemantauan waktu nyata, dan inisiatif masa depan PT. Trishanti Sinergi Indocorp."
      : "Technology governance, quality assurance benchmarks, real-time launch monitoring, and future opportunities of PT. Trishanti Sinergi Indocorp.",
  };
}

export default async function TechnologyPage({
  params,
}: TechnologyPageProps) {
  const { locale } = await params;
  const isId = locale === "id";

  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const handoverDeliverables = [
    {
      icon: FolderGit2,
      title: "Source Code (Git Repository)",
      desc: "Clean modular repository with strict TypeScript, ESLint 9, and zero uncommitted debt.",
    },
    {
      icon: BookOpen,
      title: "Documentation (Technical & User Guide)",
      desc: "Comprehensive settings_api_and_flow.md canonical specifications and architecture walkthroughs.",
    },
    {
      icon: Code2,
      title: "Design System & Component Library",
      desc: "Fully tokenized atomic components, border scales, glass translucency, and responsive layouts.",
    },
    {
      icon: FileCheck2,
      title: "Deployment & Environment Guide",
      desc: "Production runbooks, environment variable matrices, SSL configurations, and rollback routines.",
    },
  ];

  return (
    <div className="flex flex-col w-full transition-colors duration-300">
      {/* 1. CINEMATIC HERO (Matching Board A.5 Design System) */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#071A22] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,166,166,0.2),transparent_70%)] pointer-events-none" />

        <PageContainer className="relative z-10 space-y-8">
          <Breadcrumb
            items={[
              { label: isId ? "Beranda" : "Home", href: getPath("/") },
              { label: isId ? "Tentang Trishanti" : "About", href: getPath("/about") },
              { label: isId ? "Teknologi & Inovasi" : "Technology & Innovation" },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#00A6A6]">
                {isId ? "TATA KELOLA & EKOSISTEM DIGITAL" : "SYSTEM GOVERNANCE & DIGITAL ECOSYSTEM"}
              </span>
              <span className="text-[10px] font-mono text-white/90 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                Design System v1.0
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.12] tracking-tight">
              {isId
                ? "Kehadiran Digital yang Kuat Dibangun Bersama-sama."
                : "A Stronger Digital Presence Is Built by All of Us, Together."}
            </h1>

            <p className="text-base sm:text-lg text-[#DEE3E1] leading-relaxed font-light max-w-2xl">
              {isId
                ? "Sistem desain dan arsitektur teknis yang komprehensif, terukur, dan siap masa depan, selaras dengan visi jangka panjang dan tata kelola Trishanti."
                : "A comprehensive, scalable, and future-ready engineering architecture aligned with Trishanti's multi-sector vision, quality standards, and stakeholder trust."}
            </p>
          </div>

          {/* 4 Pillars Grid (Board A.5) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-[#00A6A6] block mb-1">01</span>
              <h4 className="text-sm font-semibold text-white">Consistent Experience</h4>
              <p className="text-xs text-[#94a3b8] mt-1 font-light">Unified visual grammar across all channels.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-[#00A6A6] block mb-1">02</span>
              <h4 className="text-sm font-semibold text-white">Efficient Development</h4>
              <p className="text-xs text-[#94a3b8] mt-1 font-light">Modular component primitives and tokens.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-[#00A6A6] block mb-1">03</span>
              <h4 className="text-sm font-semibold text-white">Scalable Across Teams</h4>
              <p className="text-xs text-[#94a3b8] mt-1 font-light">Enterprise governance and type-safety.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-[#00A6A6] block mb-1">04</span>
              <h4 className="text-sm font-semibold text-white">Built for Tomorrow</h4>
              <p className="text-xs text-[#94a3b8] mt-1 font-light">Extensible AI and real-time data horizons.</p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 2. SECTION: Future Opportunities (Board A.10 Beyond: Future Opportunities) */}
      <section className="py-20 lg:py-28 border-b border-[#D9DDDA]">
        <PageContainer>
          <FutureOpportunities locale={locale} isId={isId} />
        </PageContainer>
      </section>

      {/* 3. SECTION: Testing & Quality Assurance (Board A.7) */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#D9DDDA]">
        <PageContainer>
          <TestingQASystem isId={isId} />
        </PageContainer>
      </section>

      {/* 4. SECTION: Launch Day Monitoring & Operations (Board A.8) */}
      <section className="py-20 lg:py-28 bg-[#071A22] text-white">
        <PageContainer className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A6A6] block">
              {isId ? "OPERASI & PEMANTAUAN LANGSUNG" : "OPERATIONS & LIVE MONITORING"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              {isId ? "Peluncuran Mulus. Masa Depan Kokoh." : "A Smooth Launch. A Strong Future."}
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              {isId
                ? "Dari persiapan hingga pengoperasian nyata, kami memantau stabilitas sistem, lalu lintas waktu nyata, dan kepuasan pengguna 24/7."
                : "From deployment preparation to live real-time operations, ensuring 24/7 uptime, fast performance, and zero operational disruption."}
            </p>
          </div>

          <LaunchMonitoringWidget isId={isId} />
        </PageContainer>
      </section>

      {/* 5. SECTION: Growth & Evolution Trajectory (Board A.9) */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D9DDDA]">
        <PageContainer>
          <GrowthEvolution isId={isId} />
        </PageContainer>
      </section>

      {/* 6. SECTION: Governance, Operations & Continuous Value (Board A.12) */}
      <section className="py-20 lg:py-28 bg-[#F2F4F3] border-b border-[#D9DDDA]">
        <PageContainer>
          <GovernanceOperations isId={isId} />
        </PageContainer>
      </section>

      {/* 7. SECTION: Project Complete & The Road Ahead (Board A.11 & Project Complete Board) */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D9DDDA]">
        <PageContainer>
          <ProjectConclusion isId={isId} />
        </PageContainer>
      </section>

      {/* 8. SECTION: Handover Deliverables & Knowledge Transfer (Board A.8 Items 08 & 09) */}
      <section className="py-20 lg:py-28 bg-[#F2F4F3]">
        <PageContainer className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A6A6] block">
              {isId ? "PAKET SERAH TERIMA LENGKAP" : "HANDOVER DELIVERABLES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#171C1B]">
              {isId ? "Dokumentasi Lengkap Memberdayakan Masa Depan." : "Empowering People for What's Next."}
            </h2>
            <p className="text-sm text-[#5E6663] font-light leading-relaxed">
              “A well-documented system empowers people, not just today, but for what&apos;s next.” — Trishanti Engineering Team
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {handoverDeliverables.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#D9DDDA] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#00A6A6]/10 text-[#00A6A6] flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-[#171C1B] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5E6663] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#D9DDDA] flex items-center gap-1.5 text-xs text-[#16A34A] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed & Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
