"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { BusinessPillar } from "@/lib/data";

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
    <section className="py-20 sm:py-28 bg-[var(--trishanti-neutral-50)] text-[var(--trishanti-neutral-900)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row from Visual Board Image 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          {/* Left: Eyebrow + Serif Headline */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--trishanti-neutral-500)] block mb-3">
              {eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--trishanti-neutral-900)] font-normal leading-[1.12]">
              {headlinePart1}
              <br />
              {headlinePart2}
            </h2>
          </div>

          {/* Right: Explanatory paragraph + Explore Link */}
          <div className="lg:col-span-6 flex flex-col justify-between items-start lg:items-end">
            <p className="text-[var(--trishanti-neutral-600)] text-sm sm:text-base leading-relaxed max-w-lg mb-4 lg:text-right font-light">
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
        </div>

        {/* Six concise editorial cards: image-led, easy to scan, and never dashboard-like. */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
          {pillars.map((pillar) => {
            const Icon = PILLAR_ICON_MAP[pillar.id] ?? Layers;
            const title = isId ? pillar.titleId : pillar.titleEn;
            const tagline = isId ? (pillar.taglineId ?? "") : (pillar.taglineEn ?? "");

            return (
              <Link
                key={pillar.id}
                href={getPath(`/businesses#${pillar.slug}`)}
                className="bg-white rounded-[var(--trishanti-radius-md)] overflow-hidden border border-[var(--trishanti-neutral-200)] hover:border-[var(--trishanti-color-primary)] hover:-translate-y-1 flex flex-col group transition-all duration-300"
                style={{ boxShadow: `var(--trishanti-elevation-1)` }}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
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
                <div className="p-4 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Cyan Outlined Icon */}
                    <div className="text-[var(--trishanti-color-primary)] mb-3">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-bold text-xs text-[var(--trishanti-color-bg-dark)] group-hover:text-[var(--trishanti-color-primary)] mb-1.5 leading-snug transition-colors">
                      {title}
                    </h3>

                    {/* One-line descriptor */}
                    <p className="text-[11px] text-[var(--trishanti-neutral-600)] leading-relaxed line-clamp-2">
                      {tagline}
                    </p>
                  </div>

                  {/* Circular Cyan Arrow Button from Visual Board */}
                  <div className="mt-4">
                    <span className="w-7 h-7 rounded-full bg-[var(--trishanti-color-primary)] text-white flex items-center justify-center group-hover:bg-[var(--trishanti-color-primary-dark)] group-hover:translate-x-1 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
