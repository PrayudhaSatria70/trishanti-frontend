import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { cn } from "@/lib/cn";

/* ============================================================
   GRADIENT & GLASS SYSTEM COMPONENTS (Image 4 Board)
   "Subtle gradients for atmosphere, not decoration."
   "Architectural transparency — modern and refined."
   ============================================================ */

/**
 * 03 TINTED STAT CARD (Image 4 Component Example)
 * Glass: Tinted Glass (Brand) — rgba(34, 184, 199, 0.12), blur 10px, 1px border
 */
export function TintedStatCard({
  value = "1,000+",
  label = "People",
  subtitle = "Across our ecosystem",
  className,
}: {
  value?: string;
  label?: string;
  subtitle?: string;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 bg-[#22B8C7]/12 backdrop-blur-[10px] border border-white/20 text-[#171C1B] shadow-sm flex flex-col justify-between",
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-white/80 border border-white/40 text-[#00A6A6] flex items-center justify-center mb-6 shadow-xs">
        <Users className="w-6 h-6 stroke-[1.5]" />
      </div>

      <div>
        <span className="font-sans font-extrabold text-3xl sm:text-4xl text-[#171C1B] tracking-tight block mb-1">
          {value}
        </span>
        <span className="font-semibold text-sm text-[#171C1B] block">
          {label}
        </span>
        <span className="text-xs text-[#5E6663]">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

/**
 * 03 SIGNATURE GRADIENT BUTTON (Image 4 Component Example)
 * Gradient: Cyan -> Teal (#22B8C7 -> #00A6A6 -> #087C8C)
 */
export function SignatureGradientButton({
  children = "Get Started",
  href,
  onClick,
  className,
}: {
  children?: ReactNode;
  href?: string | undefined;
  onClick?: (() => void) | undefined;
  className?: string | undefined;
}) {
  const content = (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide shadow-[0_4px_20px_rgba(0,166,166,0.35)] hover:shadow-[0_6px_25px_rgba(0,166,166,0.5)] transition-all duration-200 group bg-gradient-to-r from-[#22B8C7] via-[#00A6A6] to-[#087C8C] hover:brightness-105 active:scale-[0.98]",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
}

/**
 * 03 GLASS CARD (Image 4 Component Example)
 * Frosted Glass with delicate border and subtle depth
 */
export function FrostedGlassCard({
  title,
  description,
  href,
  className,
}: {
  title: string;
  description: string;
  href?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 bg-white/72 backdrop-blur-[20px] border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group",
        className
      )}
    >
      <div>
        <h3 className="text-xl font-serif font-bold text-[#171C1B] group-hover:text-[#00A6A6] transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-[#5E6663] leading-relaxed">
          {description}
        </p>
      </div>

      {href && (
        <div className="pt-6 mt-6 border-t border-[#D9DDDA]/60">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#00A6A6] group-hover:translate-x-1 transition-transform"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

/**
 * 06 CONTEXTUAL GRADIENT PILLAR CARD (Image 4)
 * Applies specific contextual tone for each pillar
 */
export function ContextualGradientCard({
  pillar,
  title,
  subtitle,
  className,
}: {
  pillar: "infrastructure" | "industrial" | "agriculture" | "technology" | "consumer" | "experiences";
  title: string;
  subtitle: string;
  className?: string | undefined;
}) {
  const gradientMap = {
    infrastructure: "gradient-infrastructure",
    industrial: "gradient-industrial",
    agriculture: "gradient-agriculture",
    technology: "gradient-technology",
    consumer: "gradient-consumer",
    experiences: "gradient-experiences",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 text-white shadow-md flex flex-col justify-between min-h-[140px]",
        gradientMap[pillar],
        className
      )}
    >
      <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
        {pillar}
      </span>
      <div>
        <h4 className="font-serif font-bold text-lg text-white mb-1">{title}</h4>
        <p className="text-xs text-white/85 font-light">{subtitle}</p>
      </div>
    </div>
  );
}
