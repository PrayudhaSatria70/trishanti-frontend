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
        "p-8 rounded-2xl border transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] relative overflow-hidden",
        accent
          ? "bg-[#111827] border-[#06b6d4]/40 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          : "bg-[#111827]/70 border-[#1e293b] hover:border-[#334155]",
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
