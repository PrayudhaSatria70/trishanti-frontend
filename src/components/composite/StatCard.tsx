import { cn } from "@/lib/cn";

export interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
  accent?: boolean;
}

export function StatCard({
  value,
  label,
  description,
  className,
  accent = false,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "p-8 rounded-2xl border backdrop-blur-xl transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] relative overflow-hidden group hover:-translate-y-1.5",
        accent
          ? "bg-[#111827]/80 border-[#06b6d4]/40 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-[#00A6A6] hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(0,166,166,0.3)]"
          : "bg-white/80 dark:bg-[#111827]/75 border-[var(--trishanti-neutral-200)] dark:border-[#1e293b] hover:border-[#00A6A6]/60 hover:shadow-[0_16px_36px_rgba(0,0,0,0.15),0_0_25px_rgba(0,166,166,0.22)] dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.6),0_0_30px_rgba(0,166,166,0.25)] text-[var(--trishanti-neutral-900)] dark:text-white",
        className,
      )}
    >
      <div className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight text-white mb-2 flex items-baseline gap-1">
        <span className={accent ? "text-[#06b6d4]" : "text-white"}>{value}</span>
      </div>
      <div className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4] mb-1">
        {label}
      </div>
      {description && (
        <p className="text-xs text-[#94a3b8] leading-relaxed mt-2">
          {description}
        </p>
      )}
    </div>
  );
}

export default StatCard;
