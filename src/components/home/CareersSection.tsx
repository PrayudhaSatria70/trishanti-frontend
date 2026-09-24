import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Sparkles, TrendingUp } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";

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
    <section className="py-20 sm:py-28 bg-[var(--trishanti-color-surface-light)] border-b border-[var(--trishanti-neutral-200)]">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Media */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[var(--trishanti-radius-lg)] overflow-hidden border border-[var(--trishanti-neutral-200)]" style={{ boxShadow: `var(--trishanti-elevation-3)` }}>
              <Image
                src="/images/about/our-culture.jpg"
                alt="Trishanti multi-sector professional team collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--trishanti-color-bg-dark)]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[var(--trishanti-radius-md)] bg-white/90 backdrop-blur-md border border-white/40 shadow-lg text-[var(--trishanti-neutral-900)]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--trishanti-color-primary)] block mb-1">
                  {isId ? "KOMUNITAS TALENTA" : "TALENT COMMUNITY"}
                </span>
                <p className="text-xs font-serif font-bold text-[var(--trishanti-neutral-900)]">
                  {isId
                    ? "Membangun masa depan lebih cerah bersama talenta terbaik."
                    : "Building a brighter tomorrow alongside world-class talent."}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--trishanti-color-primary)] block">
                {isId ? "06 KARIR DI TRISHANTI" : "06 CAREERS AT TRISHANTI"}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--trishanti-neutral-900)] leading-tight">
                {isId
                  ? "Bergabung dalam Perjalanan. Ciptakan Dampak Nyata."
                  : "Join Our Journey. Build What's Next."}
              </h2>

              <p className="text-base text-[var(--trishanti-neutral-600)] leading-relaxed font-light">
                {isId
                  ? "Di Trishanti, kami percaya pertumbuhan bisnis dimulai dari pertumbuhan manusianya. Kami menyediakan wadah bagi para profesional visioner untuk menciptakan nilai jangka panjang di berbagai industri strategis."
                  : "At Trishanti, we believe organizational progress begins with our people. We empower visionaries, engineers, and builders to create lasting value across diverse strategic industries."}
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((h, idx) => {
                const IconComp = h.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-[var(--trishanti-radius-md)] bg-[var(--trishanti-neutral-50)] border border-[var(--trishanti-neutral-200)] space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white text-[var(--trishanti-color-primary)] flex items-center justify-center shadow-xs">
                      <IconComp className="w-4 h-4 stroke-[2]" />
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[var(--trishanti-neutral-900)]">
                      {isId ? h.titleId : h.titleEn}
                    </h4>
                    <p className="text-xs text-[var(--trishanti-neutral-600)] leading-snug">
                      {isId ? h.descId : h.descEn}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Link */}
            <div className="pt-2">
              <Link
                href={getPath("/careers")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[var(--trishanti-radius-full)] bg-[var(--trishanti-neutral-900)] hover:bg-[var(--trishanti-color-bg-dark)] text-white font-semibold text-xs tracking-wider uppercase shadow-md group"
                style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}
              >
                <span>{isId ? "Lihat Peluang Karir" : "Explore Careers"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default CareersSection;
