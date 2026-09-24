"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Building2,
  Factory,
  Sprout,
  Cpu,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { VideoModal } from "@/components/composite/VideoModal";

interface HeroSectionProps {
  locale: string;
  isId?: boolean;
  eyebrow: string;
  headline1: string;
  headline2: string;
  headline3: string;
  headlineHighlight: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  sideText: string[];
}

const QUICK_PILLARS = [
  {
    slug: "infrastructure",
    nameEn: "Property & Infrastructure",
    nameId: "Properti & Infrastruktur",
    icon: Building2,
  },
  {
    slug: "industrial-trading",
    nameEn: "Resources & Industrial",
    nameId: "Sumber Daya & Industri",
    icon: Factory,
  },
  {
    slug: "agriculture-food",
    nameEn: "Agriculture & Food",
    nameId: "Pertanian & Pangan",
    icon: Sprout,
  },
  {
    slug: "technology-digital",
    nameEn: "Technology & Digital",
    nameId: "Teknologi & Digital",
    icon: Cpu,
  },
  {
    slug: "consumer-lifestyle",
    nameEn: "Consumer & Lifestyle",
    nameId: "Konsumen & Gaya Hidup",
    icon: ShoppingBag,
  },
  {
    slug: "experiences-ventures",
    nameEn: "Experiences & Emerging",
    nameId: "Pengalaman & Usaha Baru",
    icon: Sparkles,
  },
];

export function HeroSection({
  locale,
  isId = false,
  eyebrow,
  headline1,
  headline2,
  headline3,
  headlineHighlight,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  sideText,
}: HeroSectionProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  return (
    <>
      <section className="relative min-h-[760px] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[var(--trishanti-color-bg-dark)]">
        {/* B.5 direction: a calmer, nature-led hero makes room for the corporate message. */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sustainability/sustainability-hero.jpg"
            alt="Mountain valley and river at dawn"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A22]/95 via-[#071A22]/72 to-[#071A22]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A22]/92 via-[#071A22]/20 to-[#071A22]/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(0,166,166,0.18),transparent_42%)]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-10 sm:pt-40 sm:pb-14 flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_270px] gap-10 lg:gap-20 items-end w-full">
            {/* Left 8 cols: Typography & CTAs — Board B.5 exact layout */}
            <div className="max-w-3xl">
              {/* Eyebrow — small uppercase tracked tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--trishanti-radius-full)] bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-6" style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--trishanti-color-primary)] animate-pulse" />
                <span>{eyebrow}</span>
              </div>

              {/* Display Headline — Board shows ALL-CAPS bold sans, "GENERATIONS." in cyan */}
              <h1 className="font-serif text-[clamp(3rem,6vw,5.75rem)] font-medium tracking-[-0.035em] text-white leading-[0.94] mb-7">
                {headline1}
                <br />
                {headline2}
                <br />
                {headline3}{" "}
                <span className="text-[var(--trishanti-color-primary)]">{headlineHighlight}</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed max-w-xl mb-9">
                {subheadline}
              </p>

              {/* Dual CTAs — Board B.5: cyan filled pill + glass secondary pill */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={getPath("/businesses")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--trishanti-color-primary)] hover:bg-[var(--trishanti-color-primary-dark)] text-white font-semibold text-sm shadow-[0_4px_20px_rgba(0,166,166,0.38)] transition-colors group"
                  style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}
                >
                  <span>{ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#071A22]/45 hover:bg-[#071A22]/70 border border-white/30 hover:border-white/60 text-white font-medium text-sm backdrop-blur-md transition-colors group"
                  style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}
                  aria-label="Watch Trishanti corporate video presentation"
                >
                  <span>{ctaSecondary}</span>
                  <Play className="w-3.5 h-3.5 fill-white text-white group-hover:scale-110" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
                </button>
              </div>
            </div>

            {/* B.5 uses a quiet fact column instead of decorative card chrome. */}
            <div className="hidden lg:grid border-l border-white/25 divide-y divide-white/20 text-white">
              <div className="py-5 pl-7">
                <p className="text-4xl font-serif leading-none">6</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/70">
                  {isId ? "Pilar Strategis" : "Strategic pillars"}
                </p>
              </div>
              <div className="py-5 pl-7">
                <p className="text-4xl font-serif leading-none">100+</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/70">
                  {isId ? "Manusia & komunitas" : "People and communities"}
                </p>
              </div>
              <div className="py-5 pl-7">
                <p className="font-serif text-2xl leading-tight">{sideText.slice(2).join(" ")}</p>
                <div className="w-12 h-px bg-[var(--trishanti-color-primary)] mt-5" />
              </div>
            </div>

            {/* Mobile / Tablet Stats Bar (visible on < lg) */}
            <div className="lg:hidden grid grid-cols-3 gap-3 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-serif text-white">6</div>
                <div className="text-[10px] text-white/65 mt-1 uppercase tracking-wider">
                  {isId ? "Pilar Bisnis" : "Pillars"}
                </div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-2xl font-serif text-white">100+</div>
                <div className="text-[10px] text-white/65 mt-1 uppercase tracking-wider">
                  {isId ? "Insan" : "People"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-serif text-[var(--trishanti-color-primary)] truncate">
                  {isId ? "Masa Depan" : "Tomorrow"}
                </div>
                <div className="text-[10px] text-white/65 mt-1 uppercase tracking-wider">
                  {isId ? "Generasi" : "Generations"}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full border-t border-white/15 bg-[#071A22]/85 backdrop-blur-md">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-1">
              {QUICK_PILLARS.map((p) => {
                const IconComp = p.icon;
                return (
                  <Link
                    key={p.slug}
                    href={getPath(`/businesses/${p.slug}`)}
                    className="flex items-center gap-2.5 px-3 py-2 text-white/85 hover:text-white transition-colors group"
                    style={{ transition: `all var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}
                  >
                    <div className="w-6 h-6 rounded-md bg-white/10 group-hover:bg-[var(--trishanti-color-primary)]/20 flex items-center justify-center shrink-0" style={{ transition: `background-color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                      <IconComp className="w-3.5 h-3.5 text-[var(--trishanti-color-primary)] group-hover:scale-110" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
                    </div>
                    <span className="text-xs font-medium truncate">
                      {isId ? p.nameId : p.nameEn}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title="Trishanti Corporate Overview"
      />
    </>
  );
}
