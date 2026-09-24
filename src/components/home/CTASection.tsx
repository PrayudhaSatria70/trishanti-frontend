import Link from "next/link";
import { ArrowRight, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";

interface CTASectionProps {
  locale: string;
  isId?: boolean;
}

/**
 * CTASection — Board B.5 Item 03 Section 07
 * "07 Call to Action: Direct users to explore, connect, or learn more."
 */
export function CTASection({ locale, isId = false }: CTASectionProps) {
  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  return (
    <section className="py-20 sm:py-28 bg-[var(--trishanti-color-bg-dark)] text-white relative overflow-hidden">
      {/* Subtle radial cyan atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,166,166,0.18),transparent_70%)] pointer-events-none" />

      <PageContainer className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--trishanti-radius-full)] bg-white/10 border border-white/15 text-xs text-[var(--trishanti-color-primary)] font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isId ? "HUBUNGI TRISHANTI" : "CONNECT WITH TRISHANTI"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            {isId
              ? "Siap Mengeksplorasi Peluang yang Lebih Luas?"
              : "Ready to Explore Greater Possibilities?"}
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            {isId
              ? "Baik untuk menjalin kemitraan strategis, mengeksplorasi investasi multi-sektor, atau mendiskusikan inisiatif bersama, tim kami siap terhubung dengan Anda."
              : "Whether partnering with our strategic subsidiaries, exploring multi-sector investment avenues, or initiating corporate collaboration, our team is ready to connect."}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={getPath("/contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--trishanti-radius-full)] bg-[var(--trishanti-color-primary)] hover:bg-[var(--trishanti-color-primary-dark)] text-white font-semibold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(0,166,166,0.4)] group"
              style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}
            >
              <span>{isId ? "Hubungi Tim Kami" : "Contact Our Team"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
            </Link>

            <Link
              href={getPath("/businesses")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--trishanti-radius-full)] bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 font-semibold text-xs tracking-wider uppercase"
              style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}
            >
              <span>{isId ? "Jelajahi Pilar Bisnis" : "Explore Our Businesses"}</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-10 mt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[var(--trishanti-color-text-dark-muted)]">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--trishanti-color-primary)]" />
              <span>{isId ? "Tata Kelola Institusional" : "Institutional Governance"}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Layers className="w-4 h-4 text-[var(--trishanti-color-primary)]" />
              <span>{isId ? "Skalabilitas Multi-Sektor" : "Multi-Sector Scalability"}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--trishanti-color-primary)]" />
              <span>{isId ? "Penciptaan Nilai Berkelanjutan" : "Long-Term Value Creation"}</span>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default CTASection;
