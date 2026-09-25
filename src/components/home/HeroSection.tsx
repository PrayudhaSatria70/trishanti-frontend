"use client";

import { useState } from "react";
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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
            poster="/images/sustainability/sustainability-hero.jpg"
          >
            {/* Cinematic aerial city video placeholder */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-city-aerial-view-37158-large.mp4" type="video/mp4" />
          </video>
          {/* Lighter overlays to let the video shine, while maintaining text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent dark:from-[#071A22]/90 dark:via-[#071A22]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent dark:from-[#071A22]/95 dark:via-[#071A22]/10" />
          {/* Ambient animated glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,166,166,0.35),transparent_50%)] animate-pulse duration-[4000ms]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-6 lg:px-12 xl:px-24 pt-32 pb-10 sm:pt-40 sm:pb-14 flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_270px] gap-10 lg:gap-20 items-end w-full">
            {/* Left 8 cols: Typography & CTAs */}
            <div className="max-w-3xl animate-fade-in-up" style={{ animationDuration: "1s" }}>
              {/* Eyebrow — small uppercase tracked tag */}
              <div className="inline-flex items-center gap-2 mb-6" style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--trishanti-neutral-800)] dark:text-white/80">
                  {eyebrow}
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="font-sans text-[clamp(3rem,6vw,5.5rem)] font-bold tracking-tight text-[var(--trishanti-neutral-900)] dark:text-white leading-[1.05] mb-6">
                {headline1}
                <br />
                {headline2}
                <br />
                {headline3}{" "}
                <span className="text-[#00A6A6]">{headlineHighlight}</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-[var(--trishanti-neutral-700)] dark:text-white/80 font-normal leading-relaxed max-w-xl mb-10">
                {subheadline}
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href={getPath("/businesses")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00A6A6] hover:bg-[#008f8f] text-white font-medium text-sm transition-all group"
                  style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}
                >
                  <span>{ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/10 border border-[var(--trishanti-neutral-800)] dark:border-white text-[var(--trishanti-neutral-900)] dark:text-white font-medium text-sm transition-all group"
                  style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}
                  aria-label="Watch Trishanti corporate video presentation"
                >
                  <span>{ctaSecondary}</span>
                  <Play className="w-3.5 h-3.5 group-hover:scale-110 group-hover:translate-x-1" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
                </button>
              </div>
            </div>

            {/* Floating poetic text (right side on dark concrete wall) */}
            <div className="hidden lg:flex flex-col items-end justify-center text-right pr-4 mb-16 animate-fade-in" style={{ animationDuration: "1.5s", animationDelay: "0.5s", animationFillMode: "both" }}>
              <div className="flex flex-col gap-2 text-white/90 font-heading italic text-3xl xl:text-4xl leading-tight border-b border-white pb-2 text-left w-full pl-6">
                {sideText.map((text, idx) => (
                  <span key={idx} className="block text-left text-white drop-shadow-md">
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full border-t border-white/15 bg-[#071A22]/85 backdrop-blur-md">
          <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-6 lg:px-12 xl:px-24 py-3">
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
