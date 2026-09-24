import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <section className="py-20 sm:py-28 bg-[var(--trishanti-neutral-50)] border-y border-[var(--trishanti-neutral-200)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[var(--trishanti-radius-lg)] overflow-hidden border border-[var(--trishanti-neutral-200)]" style={{ boxShadow: `var(--trishanti-elevation-3)` }}>
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
              <h3 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.12] mb-6 max-w-lg">
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
                className="inline-flex items-center gap-2 px-7 py-3 rounded-[var(--trishanti-radius-full)] bg-[var(--trishanti-color-primary)] hover:bg-[var(--trishanti-color-primary-dark)] text-white font-semibold text-xs tracking-wider uppercase shadow-[0_4px_15px_rgba(0,166,166,0.35)] group"
                style={{ transition: `all var(--trishanti-duration-normal) var(--trishanti-ease-standard)` }}
              >
                <span>{cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1" style={{ transition: `transform var(--trishanti-duration-fast) var(--trishanti-ease-emphasized)` }} />
              </Link>
            </div>
          </div>

          {/* Right 5 cols: 4 Metric Cards in 2x2 Grid (Matching Visual Example Board Image 3) */}
          <div className="lg:col-span-5 bg-white grid grid-cols-2 divide-x divide-y divide-[var(--trishanti-neutral-200)]">
            {/* Stat 1 */}
            <div className="p-6 sm:p-8 flex flex-col justify-center bg-white">
              <span className="font-sans font-extrabold text-4xl sm:text-5xl text-[var(--trishanti-neutral-900)] tracking-tight leading-none mb-3">
                {stat1Value}
              </span>
              <span className="font-semibold text-xs sm:text-sm text-[var(--trishanti-neutral-700)] mb-1">
                {stat1Label}
              </span>
              <span className="text-xs text-[var(--trishanti-neutral-500)]">
                {stat1Sub}
              </span>
            </div>

            {/* Stat 2 */}
            <div className="p-6 sm:p-8 flex flex-col justify-center bg-white">
              <span className="font-sans font-extrabold text-4xl sm:text-5xl text-[var(--trishanti-neutral-900)] tracking-tight leading-none mb-3">
                {stat2Value}
              </span>
              <span className="font-semibold text-xs sm:text-sm text-[var(--trishanti-neutral-700)] mb-1">
                {stat2Label}
              </span>
              <span className="text-xs text-[var(--trishanti-neutral-500)]">
                {stat2Sub}
              </span>
            </div>

            {/* Stat 3 */}
            <div className="p-6 sm:p-8 flex flex-col justify-center bg-white">
              <span className="font-sans font-extrabold text-3xl sm:text-4xl text-[var(--trishanti-neutral-900)] tracking-tight leading-none mb-3">
                {stat3Value}
              </span>
              <span className="font-semibold text-xs sm:text-sm text-[var(--trishanti-neutral-700)] mb-1">
                {stat3Label}
              </span>
              <span className="text-xs text-[var(--trishanti-neutral-500)]">
                {stat3Sub}
              </span>
            </div>

            {/* Stat 4 */}
            <div className="p-6 sm:p-8 flex flex-col justify-center bg-[var(--trishanti-neutral-50)]">
              <span className="font-serif italic text-xl sm:text-2xl text-[var(--trishanti-neutral-900)] leading-snug mb-3">
                {stat4Value}
              </span>
              <span className="text-xs text-[var(--trishanti-neutral-500)]">
                {stat4Sub}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
