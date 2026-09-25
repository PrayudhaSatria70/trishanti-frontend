import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/composite/FadeIn";

interface PurposeSectionProps {
  locale: string;
  isId: boolean;
  eyebrow: string;
  headlinePart1: string;
  headlinePart2: string;
  body: string;
  cta: string;
  stat1Value: string;
  stat1Label: string;
  stat1Sub: string;
  stat2Value: string;
  stat2Label: string;
  stat2Sub: string;
  stat3Value: string;
  stat3Label: string;
  stat3Sub: string;
  stat4Value: string;
  stat4Sub: string;
}

export function PurposeSection({
  locale,
  eyebrow,
  headlinePart1,
  headlinePart2,
  body,
  cta,
  stat1Value,
  stat1Label,
  stat1Sub,
  stat2Value,
  stat2Label,
  stat2Sub,
  stat3Value,
  stat3Label,
  stat3Sub,
  stat4Value,
  stat4Sub,
}: PurposeSectionProps) {
  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  return (
    <section className="py-20 sm:py-28 bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)] border-y border-[var(--trishanti-neutral-200)] dark:border-white/10 transition-colors duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 rounded-[var(--trishanti-radius-lg)] overflow-hidden border border-[var(--trishanti-neutral-200)] dark:border-white/10" style={{ boxShadow: `var(--trishanti-elevation-3)` }}>
          {/* Left 7 cols: Deep Midnight Card with Aerial River Background */}
          <div className="lg:col-span-7 relative p-8 sm:p-12 lg:p-14 bg-[var(--trishanti-color-bg-dark)] text-white flex flex-col justify-between overflow-hidden min-h-[420px]">
            {/* Background Image: Aerial Winding River */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/purpose-river-hd.jpg"
                alt="Winding rainforest river canopy"
                fill
                className="object-cover object-right opacity-40 scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--trishanti-color-bg-dark)] via-[var(--trishanti-color-bg-dark)]/90 to-[var(--trishanti-color-bg-dark)]/60" />
            </div>

            {/* Content Over Background */}
            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--trishanti-color-primary)] block mb-4">
                {eyebrow}
              </span>
              <h3 className="font-heading italic text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.12] mb-6 max-w-lg">
                {headlinePart1}
                <br />
                {headlinePart2}
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md font-light mb-8">
                {body}
              </p>
            </div>

            <div className="relative z-10">
              <Link
                href={getPath("/about")}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-[var(--trishanti-radius-full)] bg-[var(--trishanti-color-primary)] hover:bg-[var(--trishanti-color-primary-dark)] text-white font-semibold text-xs tracking-wider uppercase group active:scale-95 hover:-translate-y-0.5"
                style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}
              >
                <span>{cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
              </Link>
            </div>
          </div>

          {/* Right 5 cols: 4 Metric Cards in 2x2 Grid (Matching Visual Example Board Image 3) */}
          <div className="lg:col-span-5 bg-white dark:bg-white/5 dark:backdrop-blur-xl grid grid-cols-2 divide-x divide-y divide-[var(--trishanti-neutral-200)] dark:divide-white/10 dark:glass-panel">
            {/* Stat 1 */}
            <div className="p-8 sm:p-10 flex flex-col justify-center bg-white dark:bg-transparent transition-colors hover:bg-[var(--trishanti-neutral-50)] dark:hover:bg-white/5">
              <span className="font-sans font-extrabold text-4xl sm:text-5xl text-[var(--trishanti-neutral-900)] dark:text-white tracking-tight leading-none mb-3 drop-shadow-sm">
                {stat1Value}
              </span>
              <span className="font-semibold text-xs sm:text-sm text-[var(--trishanti-neutral-700)] dark:text-white/80 mb-1">
                {stat1Label}
              </span>
              <span className="text-xs text-[var(--trishanti-neutral-500)] dark:text-white/50">
                {stat1Sub}
              </span>
            </div>

            {/* Stat 2 */}
            <div className="p-8 sm:p-10 flex flex-col justify-center bg-white dark:bg-transparent transition-colors hover:bg-[var(--trishanti-neutral-50)] dark:hover:bg-white/5">
              <span className="font-sans font-extrabold text-4xl sm:text-5xl text-[var(--trishanti-neutral-900)] dark:text-white tracking-tight leading-none mb-3 drop-shadow-sm">
                {stat2Value}
              </span>
              <span className="font-semibold text-xs sm:text-sm text-[var(--trishanti-neutral-700)] dark:text-white/80 mb-1">
                {stat2Label}
              </span>
              <span className="text-xs text-[var(--trishanti-neutral-500)] dark:text-white/50">
                {stat2Sub}
              </span>
            </div>

            {/* Stat 3 */}
            <div className="p-8 sm:p-10 flex flex-col justify-center bg-white dark:bg-transparent transition-colors hover:bg-[var(--trishanti-neutral-50)] dark:hover:bg-white/5">
              <span className="font-sans font-extrabold text-3xl sm:text-4xl text-[var(--trishanti-neutral-900)] dark:text-white tracking-tight leading-none mb-3 drop-shadow-sm">
                {stat3Value}
              </span>
              <span className="font-semibold text-xs sm:text-sm text-[var(--trishanti-neutral-700)] dark:text-white/80 mb-1">
                {stat3Label}
              </span>
              <span className="text-xs text-[var(--trishanti-neutral-500)] dark:text-white/50">
                {stat3Sub}
              </span>
            </div>

            {/* Stat 4 */}
            <div className="p-8 sm:p-10 flex flex-col justify-center bg-[var(--trishanti-neutral-50)] dark:bg-black/20 transition-colors">
              <span className="font-heading italic text-xl sm:text-2xl text-[var(--trishanti-neutral-900)] dark:text-[#00A6A6] leading-snug mb-3">
                {stat4Value}
              </span>
              <span className="text-xs text-[var(--trishanti-neutral-500)] dark:text-white/60">
                {stat4Sub}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
