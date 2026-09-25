import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { PageContainer } from "@/components/layout/PageContainer";

interface RealImpactSectionProps {
  locale: string;
  isId: boolean;
  className?: string | undefined;
}

/**
 * RealImpactSection — Matching Image 5 Board
 * "People at the Heart of Progress."
 * 3 Photography Cards with overlay title:
 * 1. Stronger Communities
 * 2. More Opportunities
 * 3. A More Sustainable World
 */
export function RealImpactSection({
  locale,
  isId,
  className,
}: RealImpactSectionProps) {
  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const impactCards = [
    {
      titleEn: "Stronger Communities",
      titleId: "Komunitas yang Lebih Kuat",
      image: "/images/businesses/focus-urban.jpg",
      alt: "Empowered child in community",
    },
    {
      titleEn: "More Opportunities",
      titleId: "Peluang yang Lebih Luas",
      image: "/images/businesses/approach-solar.jpg",
      alt: "Engineer in safety vest on site",
    },
    {
      titleEn: "A More Sustainable World",
      titleId: "Dunia yang Lebih Berkelanjutan",
      image: "/images/about/hero-engineers-hd.jpg",
      alt: "Lush river valley and mountain range",
    },
  ];

  return (
    <section className={cn("py-20 sm:py-28 bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)] border-b border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]", className)}>
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--trishanti-color-primary)] block">
              {isId ? "DAMPAK NYATA" : "REAL IMPACT"}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--trishanti-neutral-900)] dark:text-white leading-tight transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
              {isId ? "Manusia di Pusat Setiap Kemajuan." : "People at the Heart of Progress."}
            </h2>

            <p className="text-base text-[var(--trishanti-neutral-600)] dark:text-white/70 leading-relaxed font-light transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
              {isId
                ? "Kami percaya kemajuan bermakna ketika menciptakan peluang yang lebih baik bagi manusia — hari ini dan untuk generasi mendatang."
                : "We believe progress is meaningful when it creates better opportunities for people — today and for generations to come."}
            </p>

            <div className="pt-2">
              <Link
                href={getPath("/about")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--trishanti-color-primary)] hover:text-[var(--trishanti-color-primary-dark)] group"
                style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}
              >
                <span>{isId ? "Komitmen Kami" : "Our Commitment"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Impact Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {impactCards.map((card, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3/4] rounded-[var(--trishanti-radius-lg)] overflow-hidden border border-[var(--trishanti-neutral-200)] dark:border-white/10 bg-slate-900 flex flex-col justify-end p-6"
                style={{ boxShadow: `var(--trishanti-elevation-1)` }}
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 opacity-80 group-hover:opacity-90"
                  style={{ transition: `all var(--trishanti-duration-slow) var(--trishanti-ease-emphasized)` }}
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--trishanti-color-bg-dark)] via-[var(--trishanti-color-bg-dark)]/50 to-transparent" />

                <div className="relative z-10">
                  <h3 className="text-lg font-heading font-bold text-white leading-snug drop-shadow-sm group-hover:text-[var(--trishanti-color-primary)]" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                    {isId ? card.titleId : card.titleEn}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default RealImpactSection;
