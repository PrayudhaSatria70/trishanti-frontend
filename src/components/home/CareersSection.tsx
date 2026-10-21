import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Sparkles, TrendingUp } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { FadeIn } from "@/components/composite/FadeIn";

interface CareersSectionProps {
  locale: string;
  isId?: boolean;
}

/**
 * CareersSection — Board B.5 Item 03 Section 06
 * "Careers: Join our journey and make an impact."
 */
export function CareersSection({ locale, isId = false }: CareersSectionProps) {
  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const highlights = [
    {
      icon: Users,
      titleEn: "Empowered Culture",
      titleId: "Budaya Berdaya",
      descEn: "Collaborative, merit-driven environment focused on ethical growth.",
      descId: "Lingkungan kolaboratif berbasis meritokrasi dengan pertumbuhan etis.",
    },
    {
      icon: TrendingUp,
      titleEn: "Multi-Sector Mobility",
      titleId: "Mobilitas Multi-Sektor",
      descEn: "Opportunities across 6 strategic pillars, from tech to agribusiness.",
      descId: "Peluang lintas 6 pilar strategis, dari teknologi hingga agribisnis.",
    },
    {
      icon: Sparkles,
      titleEn: "Continuous Learning",
      titleId: "Pembelajaran Berkelanjutan",
      descEn: "Leadership training and capability development for long-term impact.",
      descId: "Pelatihan kepemimpinan dan pengembangan kapabilitas jangka panjang.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[var(--trishanti-color-surface-light)] dark:bg-[var(--trishanti-color-bg-dark)] border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Media */}
          <FadeIn className="lg:col-span-5 relative" direction="right">
            <div className="relative aspect-[4/5] rounded-[var(--trishanti-radius-lg)] overflow-hidden border border-[var(--trishanti-neutral-200)]" style={{ boxShadow: `var(--trishanti-elevation-3)` }}>
              <Image
                src="/images/about/our-culture.jpg"
                alt="Trishanti multi-sector professional team collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--trishanti-color-bg-dark)]/80 via-transparent to-transparent" />
              
              <div
                className="absolute bottom-6 left-6 right-6 p-5 rounded-[var(--trishanti-radius-md)] bg-white/90 dark:bg-[#071A22]/80 backdrop-blur-xl border border-[var(--trishanti-neutral-200)] dark:border-white/10 text-[var(--trishanti-neutral-900)] dark:text-white transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]"
                style={{ boxShadow: `var(--trishanti-elevation-2)` }}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--trishanti-color-primary)] block mb-1.5 drop-shadow-sm">
                  {isId ? "KOMUNITAS TALENTA" : "TALENT COMMUNITY"}
                </span>
                <p className="text-sm font-heading font-medium text-[var(--trishanti-neutral-900)] dark:text-white/90 leading-snug">
                  {isId
                    ? "Membangun masa depan lebih cerah bersama talenta terbaik."
                    : "Building a brighter tomorrow alongside world-class talent."}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <FadeIn className="space-y-4" direction="left">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--trishanti-color-primary)] block">
                {isId ? "06 KARIR DI TRISHANTI" : "06 CAREERS AT TRISHANTI"}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white leading-tight transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
                {isId
                  ? "Bergabung dalam Perjalanan. Ciptakan Dampak Nyata."
                  : "Join Our Journey. Build What's Next."}
              </h2>

              <p className="text-base text-[var(--trishanti-neutral-600)] dark:text-[var(--trishanti-neutral-300)] leading-relaxed font-light transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
                {isId
                  ? "Di Trishanti, kami percaya pertumbuhan bisnis dimulai dari pertumbuhan manusianya. Kami menyediakan wadah bagi para profesional visioner untuk menciptakan nilai jangka panjang di berbagai industri strategis."
                  : "At Trishanti, we believe organizational progress begins with our people. We empower visionaries, engineers, and builders to create lasting value across diverse strategic industries."}
              </p>
            </FadeIn>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((h, idx) => {
                const IconComp = h.icon;
                return (
                  <FadeIn key={idx} delay={idx * 150} direction="up">
                    <div
                      className="p-8 rounded-[var(--trishanti-radius-md)] space-y-4 transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] group hover:-translate-y-1 h-full glass-card-interactive"
                    >
                      <div
                        className="w-12 h-12 rounded-lg bg-white/90 dark:bg-[#071A22] text-[var(--trishanti-color-primary)] flex items-center justify-center transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] group-hover:bg-gradient-to-br group-hover:from-[#00A6A6] group-hover:to-[#20B8B8] group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(0,166,166,0.3)]"
                        style={{ boxShadow: `var(--trishanti-elevation-1)` }}
                      >
                        <IconComp className="w-6 h-6 stroke-[2] group-hover:scale-110 transition-transform duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]" />
                      </div>
                      <h4 className="font-heading font-bold text-base text-[var(--trishanti-neutral-900)] dark:text-white transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
                        {isId ? h.titleId : h.titleEn}
                      </h4>
                      <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-[var(--trishanti-neutral-400)] leading-relaxed transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
                        {isId ? h.descId : h.descEn}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* CTA Link with Gradient Effect */}
            <FadeIn className="pt-2" delay={450}>
              <Link
                href={getPath("/careers")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[var(--trishanti-radius-full)] bg-gradient-to-r from-[var(--trishanti-neutral-900)] to-[#203642] dark:from-white/15 dark:to-white/5 dark:border dark:border-white/20 hover:from-[#00A6A6] hover:to-[#20B8B8] hover:border-transparent text-white font-semibold text-xs tracking-wider uppercase group active:scale-95 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,166,166,0.35)]"
                style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}
              >
                <span>{isId ? "Lihat Peluang Karir" : "Explore Careers"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default CareersSection;
