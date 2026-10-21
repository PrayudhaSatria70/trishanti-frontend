"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { BusinessPillar } from "@/lib/data";
import { FadeIn } from "@/components/composite/FadeIn";

interface PillarsSectionProps {
  locale: string;
  isId: boolean;
  eyebrow: string;
  headlinePart1: string;
  headlinePart2: string;
  description: string;
  cta: string;
  pillars: BusinessPillar[];
}

function InfrastructureIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" />
      <path d="M2 19h20" />
      <path d="M12 7v12" />
      <path d="M8 19l4-10 4 10" />
    </svg>
  );
}

function IndustrialIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  );
}

function AgricultureIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10" />
      <path d="M12 20V10" />
      <path d="M12 10c0-4.5 4-7 8-7-0.5 4-3 7-8 7z" />
      <path d="M12 14c0-3.5-3-5.5-6-5.5.4 3 2.2 5.5 6 5.5z" />
    </svg>
  );
}

function TechnologyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6h7M6 8.5v7M18 8.5v7M8.5 18h7M8.5 8.5l7 7M15.5 8.5l-7 7" />
    </svg>
  );
}

function ConsumerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function ExperiencesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-2 3-5 5-5 9a5 5 0 0 0 10 0c0-4-3-6-5-9z" />
      <path d="M6 14c-2 0-3-1-3-3 2-1 4 0 5 2" />
      <path d="M18 14c2 0 3-1 3-3-2-1-4 0-5 2" />
    </svg>
  );
}

const PILLAR_ICON_MAP: Record<string, React.ElementType> = {
  infrastructure: InfrastructureIcon,
  "industrial-trading": IndustrialIcon,
  "agriculture-food": AgricultureIcon,
  "technology-digital": TechnologyIcon,
  "consumer-lifestyle": ConsumerIcon,
  "experiences-ventures": ExperiencesIcon,
};

export function PillarsSection({
  locale,
  isId,
  eyebrow,
  headlinePart1,
  headlinePart2,
  description,
  cta,
  pillars,
}: PillarsSectionProps) {
  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  return (
    <section className="relative py-20 sm:py-28 bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)] text-[var(--trishanti-neutral-900)] dark:text-white transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] overflow-hidden">
      {/* Ambient background glow for dark mode to prevent a "depressing" flat look */}
      <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,166,166,0.15),transparent_60%)] pointer-events-none" />
      <div className="hidden dark:block absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#00A6A6]/5 to-transparent pointer-events-none" />
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">
        {/* Top Header Row from Visual Board Image 3 */}
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          {/* Left: Eyebrow + Serif Headline */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--trishanti-neutral-500)] block mb-3">
              {eyebrow}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--trishanti-neutral-900)] dark:text-white font-normal leading-[1.12] transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
              {headlinePart1}
              <br />
              {headlinePart2}
            </h2>
          </div>

          {/* Right: Explanatory paragraph + Explore Link */}
          <div className="lg:col-span-6 flex flex-col justify-between items-start lg:items-end">
            <p className="text-[var(--trishanti-neutral-600)] dark:text-white/70 text-sm sm:text-base leading-relaxed max-w-lg mb-4 lg:text-right font-light transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
              {description}
            </p>
            <Link
              href={getPath("/businesses")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--trishanti-color-primary)] hover:text-[var(--trishanti-color-primary-dark)] group"
              style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}
            >
              <span>{cta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
            </Link>
          </div>
        </FadeIn>

        {/* Editorial cards: 3 per row to ensure premium size and visual impact. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = PILLAR_ICON_MAP[pillar.id] ?? Layers;
            const title = isId ? pillar.titleId : pillar.titleEn;
            const tagline = isId ? (pillar.taglineId ?? "") : (pillar.taglineEn ?? "");

            return (
              <FadeIn key={pillar.id} delay={index * 100} duration={800} direction="up" className="flex">
                <Link
                  href={getPath(`/businesses#${pillar.slug}`)}
                  className="w-full relative z-10 rounded-[var(--trishanti-radius-lg)] overflow-hidden flex flex-col group glass-card-interactive"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-black/20">
                    <Image
                      src={pillar.image}
                      alt={title}
                      fill
                      className="object-cover object-center group-hover:scale-105"
                      style={{ transition: `transform var(--trishanti-duration-slow) var(--trishanti-ease-emphasized)` }}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                  </div>

                  {/* Card Body Bottom */}
                  <div className="p-8 flex flex-col flex-1 justify-between bg-transparent">
                    <div>
                      {/* Cyan Outlined Icon */}
                      <div className="text-[var(--trishanti-color-primary)] mb-5">
                        <Icon className="w-8 h-8 stroke-[1.5]" />
                      </div>

                      {/* Title */}
                      <h3 className="font-sans font-bold text-lg text-[var(--trishanti-color-bg-dark)] dark:text-white group-hover:text-[var(--trishanti-color-primary)] mb-2 leading-snug transition-colors">
                        {title}
                      </h3>

                      {/* One-line descriptor */}
                      <p className="text-sm text-[var(--trishanti-neutral-600)] dark:text-[var(--trishanti-neutral-400)] leading-relaxed line-clamp-2">
                        {tagline}
                      </p>
                    </div>

                    {/* Circular Icon Button with Gradient Effect */}
                    <div className="mt-6">
                      <span className="w-10 h-10 rounded-full border border-[var(--trishanti-neutral-300)] dark:border-white/20 text-[var(--trishanti-color-primary)] flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#00A6A6] group-hover:to-[#20B8B8] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_4px_14px_rgba(0,166,166,0.35)] transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
