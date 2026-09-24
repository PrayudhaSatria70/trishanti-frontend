import {
  CheckCircle2,
  Gauge,
  Smartphone,
  Tablet,
  Monitor,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/cn";

interface TestingQASystemProps {
  isId?: boolean;
  className?: string | undefined;
}

/**
 * TestingQASystem — Implements Board A.7 Testing & Quality Assurance
 * - Performance Metrics (Lighthouse: Perf 98, A11y 100, BP 100, SEO 92)
 * - Core Web Vitals Targets: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1
 * - Breakpoint Matrix: Desktop (1920x1080), Tablet (768x1024), Mobile (375x812)
 * - Issue Tracking & Resolution Table (#001 - #006)
 * - Launch Readiness Verification
 */
export function TestingQASystem({
  isId = false,
  className,
}: TestingQASystemProps) {
  const lighthouseScores = [
    { label: "Performance", score: 98, color: "text-[#16A34A]", stroke: "stroke-[#16A34A]" },
    { label: "Accessibility", score: 100, color: "text-[#16A34A]", stroke: "stroke-[#16A34A]" },
    { label: "Best Practices", score: 100, color: "text-[#16A34A]", stroke: "stroke-[#16A34A]" },
    { label: "SEO", score: 92, color: "text-[#16A34A]", stroke: "stroke-[#16A34A]" },
  ];

  const webVitals = [
    {
      metric: "Largest Contentful Paint (LCP)",
      target: "≤ 2.5s",
      actual: "1.2s",
      status: "Good",
    },
    {
      metric: "Interaction to Next Paint (INP)",
      target: "≤ 200ms",
      actual: "45ms",
      status: "Good",
    },
    {
      metric: "Cumulative Layout Shift (CLS)",
      target: "≤ 0.1",
      actual: "0.02",
      status: "Good",
    },
  ];

  const issuesList = [
    {
      id: "#001",
      category: "UI/UX",
      priority: "High",
      status: "Resolved",
      descEn: "Mobile navigation drawer transition and focus trap",
      descId: "Transisi drawer navigasi mobile dan penangkapan fokus",
    },
    {
      id: "#002",
      category: "Functional",
      priority: "High",
      status: "Resolved",
      descEn: "Contact form client-side and server-side validation",
      descId: "Validasi formulir kontak di sisi klien dan server",
    },
    {
      id: "#003",
      category: "Performance",
      priority: "Medium",
      status: "Resolved",
      descEn: "Optimize hero skyline image WebP compression and LCP priority",
      descId: "Optimalisasi kompresi WebP gambar hero dan prioritas LCP",
    },
    {
      id: "#004",
      category: "Content",
      priority: "Medium",
      status: "Resolved",
      descEn: "Update multi-sector career location filters and metadata",
      descId: "Pembaruan filter lokasi karir multi-sektor dan metadata",
    },
    {
      id: "#005",
      category: "Accessibility",
      priority: "High",
      status: "Resolved",
      descEn: "WCAG 2.2 AA compliant alt text and ARIA live announcements",
      descId: "Teks alternatif dan pengumuman ARIA live sesuai standar WCAG 2.2 AA",
    },
    {
      id: "#006",
      category: "Responsive",
      priority: "Medium",
      status: "Resolved",
      descEn: "Tablet 768px layout spacing on business pillars grid",
      descId: "Tata letak tablet 768px pada kisi pilar bisnis",
    },
  ];

  return (
    <div className={cn("space-y-10", className)}>
      {/* 1. Header: QA Philosophy */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#D9DDDA]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A6A6] block mb-2">
            {isId ? "JAMINAN KUALITAS & PENGUJIAN" : "TESTING & QUALITY ASSURANCE"}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#171C1B]">
            {isId ? "Kepercayaan Dibangun Melalui Pengalaman Konsisten." : "Trust is Built Through Consistent Experiences."}
          </h3>
          <p className="text-sm text-[#5E6663] mt-2 max-w-2xl font-light">
            {isId
              ? "Memastikan setiap interaksi di situs web Trishanti andal, dapat diakses semua orang, dan selaras dengan standar korporasi global."
              : "Quality assurance ensures that every interaction with Trishanti is reliable, accessible, and aligned with our corporate mission."}
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/25 text-xs font-semibold self-start sm:self-auto">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{isId ? "Kesiapan Peluncuran 100%" : "100% Launch Readiness"}</span>
        </div>
      </div>

      {/* 2. Performance Metrics & Lighthouse Scores (Board A.7 Item 08) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left 7 cols: 4 Circular Lighthouse Scores */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-[#D9DDDA] shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#00A6A6]" />
              <h4 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase">
                {isId ? "Skor Audit Lighthouse (Produksi)" : "Lighthouse Audit Scores (Production)"}
              </h4>
            </div>
            <span className="text-xs font-mono text-[#16A34A] font-semibold bg-[#16A34A]/10 px-2.5 py-1 rounded-md">
              Google Chrome 126+
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {lighthouseScores.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-20 h-20 flex items-center justify-center mb-3">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-[#E8E8E9]"
                      strokeWidth="3.5"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className={item.stroke}
                      strokeWidth="3.5"
                      strokeDasharray="100"
                      strokeDashoffset={100 - item.score}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute font-mono font-extrabold text-xl text-[#171C1B]">
                    {item.score}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#171C1B]">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-[#D9DDDA] flex flex-wrap items-center justify-between text-xs text-[#5E6663] gap-2">
            <span>• Optimized Images (WebP/AVIF)</span>
            <span>• Zero Unused JavaScript</span>
            <span>• WCAG 2.2 AA Verified</span>
            <span>• Fast Server TTFB</span>
          </div>
        </div>

        {/* Right 5 cols: Core Web Vitals Targets */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#071A22] text-white border border-white/10 shadow-lg flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-[#00A6A6]" />
            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide uppercase">
              {isId ? "Metrik Core Web Vitals" : "Core Web Vitals Targets"}
            </h4>
          </div>

          <div className="space-y-4">
            {webVitals.map((wv, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
              >
                <div>
                  <div className="text-xs text-white font-medium">{wv.metric}</div>
                  <div className="text-[11px] text-[#94a3b8] font-mono mt-0.5">
                    Target: {wv.target} • Actual: <span className="text-[#00A6A6]">{wv.actual}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#16A34A] font-semibold bg-[#16A34A]/20 px-2 py-1 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{wv.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 text-[11px] text-[#94a3b8]">
            {isId
              ? "Diuji pada koneksi 4G terdistribusi & jaringan fiber optik nasional."
              : "Tested on simulated 4G mobile profiles & enterprise gigabit fiber."}
          </div>
        </div>
      </div>

      {/* 3. Responsive Breakpoints Verification (Board A.7 Item 07) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#F2F4F3] border border-[#D9DDDA]">
        <h4 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase mb-6 flex items-center gap-2">
          <span>{isId ? "Matriks Pengujian Responsif & Lintas Perangkat" : "Responsive & Cross-Device Test Matrix"}</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Desktop */}
          <div className="p-5 rounded-xl bg-white border border-[#D9DDDA] shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-[#00A6A6]">
                <Monitor className="w-5 h-5" />
                <span className="font-bold text-sm text-[#171C1B]">Desktop</span>
              </div>
              <span className="text-[11px] font-mono text-[#5E6663]">≥ 1024px</span>
            </div>
            <div className="text-xs text-[#5E6663] space-y-1.5">
              <div>Resolution: <strong className="text-[#171C1B]">1920 × 1080 px</strong></div>
              <div>Mega-menu navigation, multi-column grids, and full high-res imagery.</div>
            </div>
          </div>

          {/* Tablet */}
          <div className="p-5 rounded-xl bg-white border border-[#D9DDDA] shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-[#00A6A6]">
                <Tablet className="w-5 h-5" />
                <span className="font-bold text-sm text-[#171C1B]">Tablet</span>
              </div>
              <span className="text-[11px] font-mono text-[#5E6663]">768 – 1023px</span>
            </div>
            <div className="text-xs text-[#5E6663] space-y-1.5">
              <div>Resolution: <strong className="text-[#171C1B]">768 × 1024 px</strong></div>
              <div>Fluid touch interactions, adaptive 2-column cards, and collapsible tabs.</div>
            </div>
          </div>

          {/* Mobile */}
          <div className="p-5 rounded-xl bg-white border border-[#D9DDDA] shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-[#00A6A6]">
                <Smartphone className="w-5 h-5" />
                <span className="font-bold text-sm text-[#171C1B]">Mobile</span>
              </div>
              <span className="text-[11px] font-mono text-[#5E6663]">≤ 767px</span>
            </div>
            <div className="text-xs text-[#5E6663] space-y-1.5">
              <div>Resolution: <strong className="text-[#171C1B]">375 × 812 px</strong></div>
              <div>Accessible bottom drawers, thumb-zone tap targets, and streamlined typography.</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Issue Tracking & Resolution Table (Board A.7 Item 09) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D9DDDA] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-[#171C1B] tracking-wide uppercase">
              {isId ? "Pelacakan & Resolusi Isu Kualitas" : "Issue Tracking & Resolution"}
            </h4>
            <p className="text-xs text-[#7C8581] mt-1">
              {isId ? "Semua 6 isu pra-peluncuran telah terselesaikan dan terverifikasi." : "All 6 pre-launch quality tickets resolved and verified in regression suites."}
            </p>
          </div>
          <span className="text-xs font-mono font-semibold text-[#16A34A] bg-[#16A34A]/10 px-3 py-1.5 rounded-full border border-[#16A34A]/20 self-start sm:self-auto">
            6 / 6 Tickets Resolved
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#D9DDDA] text-[#5E6663] uppercase tracking-wider font-semibold">
                <th className="pb-3 pr-4 font-mono">ID</th>
                <th className="pb-3 pr-4">Category</th>
                <th className="pb-3 pr-4">Priority</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9DDDA]">
              {issuesList.map((item) => (
                <tr key={item.id} className="hover:bg-[#F2F4F3]/60 transition-colors">
                  <td className="py-3 pr-4 font-mono text-[#171C1B] font-bold">{item.id}</td>
                  <td className="py-3 pr-4 font-semibold text-[#171C1B]">{item.category}</td>
                  <td className="py-3 pr-4">
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                        item.priority === "High"
                          ? "bg-[#DC2626]/10 text-[#DC2626]"
                          : "bg-[#F59E0B]/10 text-[#F59E0B]"
                      )}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#16A34A]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{item.status}</span>
                    </span>
                  </td>
                  <td className="py-3 text-[#414946]">
                    {isId ? item.descId : item.descEn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TestingQASystem;
