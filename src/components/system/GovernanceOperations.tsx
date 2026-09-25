import {
  ShieldCheck,
  Users,
  FileCheck,
  CheckCircle2,
  Lock,
  Server,
  Scale,
  MessageSquare,
  Network,
  Layers,
  Activity,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/cn";

interface GovernanceOperationsProps {
  isId?: boolean;
  className?: string | undefined;
}

/**
 * GovernanceOperations — Implements Board A.12 Governance, Operations & Continuous Value
 * - 01 Purpose & Objectives ("Sustained Excellence for a Brighter Tomorrow")
 * - 02 Operating Model / RACI Hierarchy
 * - 05 Governance Policies (Content, Design System, Security, Change Control, Legal, Vendor)
 * - 06 Risk Management Matrix (6 Areas: Security, Operational, Content, Reputational, Compliance, Vendor)
 * - 07 Performance & Operational KPIs
 * - 11 Enterprise Governance Commitment
 */
export function GovernanceOperations({
  isId = false,
  className,
}: GovernanceOperationsProps) {
  const raciHierarchy = [
    {
      roleEn: "Executive Sponsor",
      roleId: "Sponsor Eksekutif",
      levelEn: "Board of Directors",
      levelId: "Direksi",
      responsibilityEn: "Overall strategic vision, resource allocation, and organizational alignment.",
      responsibilityId: "Visi strategis menyeluruh, alokasi sumber daya, dan penyelarasan organisasi.",
      tag: "Accountable",
    },
    {
      roleEn: "Steering Committee",
      roleId: "Komite Pengarah",
      levelEn: "Cross-Sector VPs",
      levelId: "Wakil Presiden Lintas Sektor",
      responsibilityEn: "Quarterly roadmap prioritization, budget sign-off, and policy governance.",
      responsibilityId: "Prioritisasi peta jalan kuartalan, persetujuan anggaran, dan tata kelola kebijakan.",
      tag: "Consulted",
    },
    {
      roleEn: "Functional Leads",
      roleId: "Pimpinan Fungsional",
      levelEn: "Product, Tech, Content, Ops",
      levelId: "Produk, Teknologi, Konten, Ops",
      responsibilityEn: "Day-to-day delivery, engineering quality gates, editorial standards, and uptime.",
      responsibilityId: "Pengiriman harian, standar kualitas teknis, pedoman editorial, dan waktu aktif.",
      tag: "Responsible",
    },
    {
      roleEn: "Cross-Functional Team",
      roleId: "Tim Lintas Fungsi",
      levelEn: "Design, Dev, QA, SecOps",
      levelId: "Desain, Pengembang, QA, SecOps",
      responsibilityEn: "Sprint execution, automated testing, continuous integration, and vulnerability triage.",
      responsibilityId: "Eksekusi sprint, pengujian otomatis, integrasi berkelanjutan, dan triase kerentanan.",
      tag: "Informed / Active",
    },
  ];

  const riskMatrix = [
    {
      riskEn: "Security & Data Protection",
      riskId: "Keamanan & Perlindungan Data",
      exampleEn: "Unauthorized credential exposure, XSS, or unvalidated input attack",
      exampleId: "Akses tanpa izin, pelanggaran data, atau serangan injeksi",
      mitigationEn: "Strict RBAC, Zod validation, security monitoring, and regular audits",
      mitigationId: "Pemantauan keamanan, kontrol akses ketat, dan audit berkala",
      level: "High",
      icon: Lock,
    },
    {
      riskEn: "Operational Reliability",
      riskId: "Keandalan Operasional",
      exampleEn: "Service downtime, CDN interruption, or system failure",
      exampleId: "Waktu henti layanan, gangguan CDN, atau kegagalan sistem",
      mitigationEn: "24/7 synthetic monitoring, edge replication, and incident response plan",
      mitigationId: "Pemantauan 24/7, pencadangan otomatis, dan rencana tanggap insiden",
      level: "Medium",
      icon: Server,
    },
    {
      riskEn: "Content Accuracy",
      riskId: "Akurasi Konten",
      exampleEn: "Incorrect or outdated financial/subsidiary disclosures",
      exampleId: "Informasi yang salah atau kedaluwarsa pada profil anak usaha",
      mitigationEn: "Dual-tier review process with editorial and legal sign-off workflow",
      mitigationId: "Alur kerja persetujuan konten bertingkat dan verifikasi berkala",
      level: "Medium",
      icon: FileCheck,
    },
    {
      riskEn: "Reputational & Communications",
      riskId: "Reputasi & Komunikasi",
      exampleEn: "Miscommunication, unauthorized statements, or sensitive content drift",
      exampleId: "Miskomunikasi publik, konten sensitif, atau deviasi panduan brand",
      mitigationEn: "Strict communications clearance protocol and executive escalation process",
      mitigationId: "Komunikasi terpusat, pengawasan ketat, dan proses eskalasi pimpinan",
      level: "Medium",
      icon: MessageSquare,
    },
    {
      riskEn: "Legal & Regulatory Compliance",
      riskId: "Hukum & Kepatuhan Regulasi",
      exampleEn: "Cross-border data privacy updates (UU PDP & GDPR alignment)",
      exampleId: "Perubahan regulasi privasi data, UU PDP, atau kepatuhan korporat",
      mitigationEn: "Regular statutory reviews, privacy policy audits, and legal counsel consultation",
      mitigationId: "Tinjauan berkala, pembaruan kebijakan privasi, dan konsultasi hukum",
      level: "High",
      icon: Scale,
    },
    {
      riskEn: "Vendor & Third-Party Dependencies",
      riskId: "Manajemen Ketergantungan Vendor",
      exampleEn: "Upstream third-party cloud service degradation or API changes",
      exampleId: "Gangguan layanan pihak ketiga, API eksternal, atau kegagalan infrastruktur",
      mitigationEn: "Comprehensive vendor assessment, SLA enforcement, and multi-cloud fallback",
      mitigationId: "Penilaian vendor berkala, pemantauan SLA, dan opsi pencadangan",
      level: "Low / Monitored",
      icon: Network,
    },
  ];

  const governancePolicies = [
    {
      num: "01",
      nameEn: "Content Governance",
      nameId: "Tata Kelola Konten",
      descEn: "Strict review workflow, editorial guidelines, and scheduled audits.",
      descId: "Alur persetujuan terstruktur, pedoman editorial, dan audit berkala.",
    },
    {
      num: "02",
      nameEn: "Design System Governance",
      nameId: "Tata Kelola Design System",
      descEn: "Enforced UI component tokens, accessibility criteria, and brand fidelity.",
      descId: "Penegakan token UI, kriteria aksesibilitas WCAG, dan integritas brand.",
    },
    {
      num: "03",
      nameEn: "Security & Protection",
      nameId: "Keamanan & Perlindungan",
      descEn: "Role-based access, automated secret scanning, and encryption at rest/transit.",
      descId: "Kontrol akses berbasis peran, pemindaian kredensial, dan enkripsi data.",
    },
    {
      num: "04",
      nameEn: "Change Control",
      nameId: "Pengendalian Perubahan",
      descEn: "Mandatory PR reviews, automated CI/CD testing, and rollback runbooks.",
      descId: "Tinjauan kode wajib, pengujian CI/CD otomatis, dan protokol rollback.",
    },
    {
      num: "05",
      nameEn: "Legal & Compliance",
      nameId: "Hukum & Kepatuhan",
      descEn: "Alignment with Indonesian UU PDP, corporate governance, and IP protection.",
      descId: "Penyelarasan dengan UU PDP, tata kelola korporat, dan perlindungan HAKI.",
    },
    {
      num: "06",
      nameEn: "Vendor Management",
      nameId: "Manajemen Vendor",
      descEn: "Strict SLA auditing, credential rotation, and disaster-recovery readiness.",
      descId: "Audit SLA ketat, rotasi kredensial, dan kesiapan pemulihan bencana.",
    },
  ];

  const performanceKPIs = [
    { target: "≥ 99.9%", label: "Uptime SLA", sub: "24/7 Global Availability" },
    { target: "< 1.5s", label: "Core Web Vitals", sub: "LCP < 2.5s, INP < 200ms, CLS < 0.1" },
    { target: "100%", label: "Accessibility", sub: "WCAG 2.2 AA Verified" },
    { target: "0", label: "Critical Incidents", sub: "Clean Security Record" },
  ];

  return (
    <div className={cn("space-y-16", className)}>
      {/* 1. Header: Governance Statement */}
      <div className="max-w-4xl space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A6A6] block">
          {isId ? "A.12 TATA KELOLA, OPERASI & NILAI BERKELANJUTAN" : "A.12 GOVERNANCE, OPERATIONS & CONTINUOUS VALUE"}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#171C1B] leading-tight">
          {isId
            ? "Keunggulan Berkelanjutan untuk Hari Esok yang Lebih Cerah."
            : "Sustained Excellence for a Brighter Tomorrow."}
        </h2>
        <p className="text-base sm:text-lg text-[#5E6663] leading-relaxed font-light">
          {isId
            ? "Tata kelola yang baik memastikan pencapaian hari ini menciptakan nilai abadi untuk masa depan. Dari strategi hingga dampak nyata: Atur, Operasikan, Kembangkan."
            : "Good governance ensures today's achievements create lasting value for tomorrow. From strategy to sustained impact: Govern. Operate. Evolve."}
        </p>
      </div>

      {/* 2. RACI Governance & Operating Model (Board A.12 Item 02) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9DDDA]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase flex items-center gap-2">
            <Users className="w-4 h-4 text-[#00A6A6]" />
            <span>{isId ? "Model Operasional & Struktur RACI" : "Operating Model & RACI Governance"}</span>
          </h3>
          <span className="text-xs text-[#7C8581] font-mono">4-Tier Accountability</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {raciHierarchy.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#D9DDDA] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A6A6]">
                    Tier 0{idx + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#00A6A6]/10 text-[#00A6A6] border border-[#00A6A6]/20">
                    {item.tag}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-lg text-[#171C1B] mb-1">
                  {isId ? item.roleId : item.roleEn}
                </h4>
                <div className="text-xs font-mono text-[#5E6663] mb-4">
                  {isId ? item.levelId : item.levelEn}
                </div>
                <p className="text-xs text-[#5E6663] leading-relaxed">
                  {isId ? item.responsibilityId : item.responsibilityEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 6 Governance Policies (Board A.12 Item 05) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9DDDA]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#00A6A6]" />
            <span>{isId ? "Kebijakan Tata Kelola Terpadu" : "Governance Policies (6 Key Domains)"}</span>
          </h3>
          <span className="text-xs text-[#7C8581] font-mono">Institutional Standards</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {governancePolicies.map((p) => (
            <div
              key={p.num}
              className="p-5 rounded-2xl bg-white border border-[#D9DDDA] shadow-xs flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#00A6A6]">POLICY {p.num}</span>
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-[#171C1B]">
                  {isId ? p.nameId : p.nameEn}
                </h4>
                <p className="text-xs text-[#5E6663] mt-1 leading-relaxed">
                  {isId ? p.descId : p.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Risk Management Matrix (Board A.12 Item 06 - 6 Risk Areas) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9DDDA]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00A6A6]" />
            <span>{isId ? "Matriks Manajemen Risiko & Mitigasi (6 Area)" : "Risk Management & Mitigation Matrix (6 Domains)"}</span>
          </h3>
          <span className="text-xs text-[#16A34A] font-semibold bg-[#16A34A]/10 px-2.5 py-1 rounded-md">
            Active Defenses
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {riskMatrix.map((rm, idx) => {
            const IconComp = rm.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D9DDDA] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-[#00A6A6]">
                      <IconComp className="w-5 h-5 stroke-[2]" />
                      <h4 className="font-heading font-bold text-base text-[#171C1B]">
                        {isId ? rm.riskId : rm.riskEn}
                      </h4>
                    </div>
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                        rm.level === "High"
                          ? "bg-[#DC2626]/10 text-[#DC2626]"
                          : rm.level === "Medium"
                          ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                          : "bg-[#16A34A]/10 text-[#16A34A]"
                      )}
                    >
                      {rm.level}
                    </span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs text-[#5E6663]">
                      <strong className="text-[#171C1B]">{isId ? "Skenario Risiko:" : "Threat Scenario:"}</strong>{" "}
                      {isId ? rm.exampleId : rm.exampleEn}
                    </div>
                    <div className="text-xs text-[#5E6663]">
                      <strong className="text-[#00A6A6]">{isId ? "Kontrol Aktif:" : "Active Control:"}</strong>{" "}
                      {isId ? rm.mitigationId : rm.mitigationEn}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#D9DDDA] flex items-center gap-1.5 text-xs text-[#16A34A] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isId ? "Kontrol Terverifikasi Aktif" : "Control Verified Active"}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Performance & Operational KPIs (Board A.12 Item 07) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9DDDA]">
          <h3 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#00A6A6]" />
            <span>{isId ? "Target Kinerja & KPI Operasional" : "Performance & Operational KPIs"}</span>
          </h3>
          <span className="text-xs font-mono text-[#00A6A6] font-semibold">Real-Time SLA</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceKPIs.map((kpi, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#D9DDDA] shadow-xs flex flex-col justify-between"
            >
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#00A6A6]">
                {kpi.target}
              </div>
              <div className="mt-2">
                <div className="text-xs font-bold text-[#171C1B]">{kpi.label}</div>
                <div className="text-[11px] text-[#7C8581] mt-0.5">{kpi.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Enterprise Governance Commitment (Board A.12 Item 11) */}
      <div className="rounded-2xl p-8 sm:p-10 bg-[#071A22] text-white border border-white/10 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#00A6A6]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isId ? "KOMITMEN TATA KELOLA KAMI" : "GOVERNANCE COMMITMENT"}</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-white">
            “We will continue to build, improve, and explore — together, for a brighter tomorrow.”
          </h3>
          <p className="text-xs text-white/70 font-light">
            — PT. Trishanti Sinergi Indocorp Steering Committee
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#00A6A6] shrink-0">
          <CheckCircle2 className="w-4 h-4" />
          <span>Full Governance Activated</span>
        </div>
      </div>
    </div>
  );
}

export default GovernanceOperations;
