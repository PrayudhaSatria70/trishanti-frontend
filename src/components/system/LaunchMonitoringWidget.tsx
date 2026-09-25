"use client";

import { useState } from "react";
import {
  Activity,
  CheckCircle2,
  Clock,
  Globe,
  TrendingUp,
  Users,
  Eye,
  Percent,
} from "lucide-react";
import { cn } from "@/lib/cn";

interface LaunchMonitoringWidgetProps {
  isId?: boolean;
  className?: string | undefined;
}

/**
 * LaunchMonitoringWidget — Implements Board A.8 Item 05 & 07
 * - System Status: All Systems Operational (Mon, 15 Jul 2024, 10:24:18 WIB)
 * - 4 KPIs: Uptime 99.99%, Response Time 215ms, Active Users 1.2K, Critical Issues 0
 * - Real-time Traffic Graph with peak tooltip (4,823 users • 16:20 WIB)
 * - Analytics & Initial Insights: 4,823 Unique Visitors, 12,540 Page Views, 2m 18s Duration, 68% Bounce Rate
 */
export function LaunchMonitoringWidget({
  isId = false,
  className,
}: LaunchMonitoringWidgetProps) {
  const [activePoint, setActivePoint] = useState<{
    time: string;
    users: string;
    x: number;
    y: number;
  }>({
    time: "16:20 WIB",
    users: "4,823 users",
    x: 480,
    y: 70,
  });

  // Traffic timeline points (08:00 to 20:00)
  const trafficPoints = [
    { time: "08:00", users: "1,200", x: 40, y: 160 },
    { time: "10:00", users: "2,150", x: 130, y: 130 },
    { time: "12:00", users: "3,100", x: 220, y: 110 },
    { time: "14:00", users: "3,400", x: 310, y: 100 },
    { time: "16:00", users: "4,750", x: 400, y: 65 },
    { time: "16:20", users: "4,823", x: 480, y: 70 },
    { time: "18:00", users: "3,800", x: 570, y: 105 },
    { time: "20:00", users: "2,600", x: 660, y: 140 },
  ];

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-[#071A22] text-white p-6 sm:p-8 shadow-2xl space-y-8",
        className
      )}
    >
      {/* 1. Header: System Status & Live Pulse */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3.5">
          <div className="relative flex items-center justify-center">
            <span className="w-3.5 h-3.5 rounded-full bg-[#16A34A] animate-ping opacity-75 absolute" />
            <span className="w-3 h-3 rounded-full bg-[#16A34A] relative z-10" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#94a3b8] font-medium">
              {isId ? "Status Sistem" : "System Status"}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>{isId ? "Semua Sistem Beroperasi Normal" : "All Systems Operational"}</span>
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#94a3b8] font-mono bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 self-start sm:self-auto">
          <Clock className="w-3.5 h-3.5 text-[#00A6A6]" />
          <span>Mon, 15 Jul 2024, 10:24:18 WIB</span>
        </div>
      </div>

      {/* 2. 4 Primary KPIs in 2x2 or 4x1 Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* KPI 1: Uptime */}
        <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <span className="text-xs text-[#94a3b8] font-medium block mb-2">
            {isId ? "Waktu Aktif (Uptime)" : "Uptime"}
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
            99.99%
          </div>
          <div className="text-[11px] text-[#16A34A] font-semibold mt-2 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Target 99.9%</span>
          </div>
        </div>

        {/* KPI 2: Response Time */}
        <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <span className="text-xs text-[#94a3b8] font-medium block mb-2">
            {isId ? "Waktu Respons" : "Response Time"}
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#00A6A6] font-mono tracking-tight">
            215 ms
          </div>
          <div className="text-[11px] text-[#16A34A] font-semibold mt-2 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Target &lt; 300 ms</span>
          </div>
        </div>

        {/* KPI 3: Active Users */}
        <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <span className="text-xs text-[#94a3b8] font-medium block mb-2">
            {isId ? "Pengguna Aktif" : "Active Users"}
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
            1.2K
          </div>
          <div className="text-[11px] text-[#94a3b8] mt-2 flex items-center gap-1">
            <Users className="w-3 h-3 text-[#00A6A6]" />
            <span>{isId ? "Sesi bersamaan" : "Concurrent sessions"}</span>
          </div>
        </div>

        {/* KPI 4: Critical Issues */}
        <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <span className="text-xs text-[#94a3b8] font-medium block mb-2">
            {isId ? "Isu Kritis" : "Critical Issues"}
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#16A34A] font-mono tracking-tight">
            0
          </div>
          <div className="text-[11px] text-[#16A34A] font-semibold mt-2 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>{isId ? "Nol gangguan aktif" : "Zero active incidents"}</span>
          </div>
        </div>
      </div>

      {/* 3. Real-time Traffic Graph (Board A.8 Item 05) */}
      <div className="p-5 sm:p-6 rounded-xl bg-white/[0.03] border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#00A6A6]" />
            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide uppercase">
              {isId ? "Lalu Lintas Real-Time" : "Real-time Traffic"}
            </h4>
          </div>
          <span className="text-[11px] text-[#94a3b8] font-mono">
            {isId ? "Pemantauan 24 Jam" : "24h Window"}
          </span>
        </div>

        {/* Interactive SVG Chart */}
        <div className="relative w-full h-44 sm:h-52 overflow-hidden">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 700 200"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00A6A6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00A6A6" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Horizontal Grid lines */}
            <line x1="0" y1="40" x2="700" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
            <line x1="0" y1="90" x2="700" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
            <line x1="0" y1="140" x2="700" y2="140" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
            <line x1="0" y1="190" x2="700" y2="190" stroke="rgba(255,255,255,0.12)" />

            {/* Area Fill */}
            <path
              d="M 40,160 Q 130,130 220,110 T 310,100 T 400,65 T 480,70 T 570,105 T 660,140 L 660,190 L 40,190 Z"
              fill="url(#trafficGradient)"
            />

            {/* Line Stroke */}
            <path
              d="M 40,160 Q 130,130 220,110 T 310,100 T 400,65 T 480,70 T 570,105 T 660,140"
              fill="none"
              stroke="#00A6A6"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Data Points */}
            {trafficPoints.map((pt, idx) => (
              <circle
                key={idx}
                cx={pt.x}
                cy={pt.y}
                r={activePoint.time === pt.time ? 5 : 3.5}
                className={cn(
                  "cursor-pointer transition-all",
                  activePoint.time === pt.time
                    ? "fill-white stroke-[#00A6A6] stroke-2"
                    : "fill-[#00A6A6] hover:fill-white"
                )}
                onClick={() =>
                  setActivePoint({
                    time: pt.time,
                    users: `${pt.users} users`,
                    x: pt.x,
                    y: pt.y,
                  })
                }
              />
            ))}
          </svg>

          {/* Floating Tooltip at activePoint */}
          <div
            className="absolute -translate-x-1/2 -translate-y-12 px-3 py-1.5 rounded-lg bg-[#071A22] border border-[#00A6A6] text-white text-[11px] font-mono shadow-xl pointer-events-none transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]"
            style={{
              left: `${(activePoint.x / 700) * 100}%`,
              top: `${(activePoint.y / 200) * 100}%`,
            }}
          >
            <div className="font-bold text-[#00A6A6]">{activePoint.users}</div>
            <div className="text-[10px] text-[#94a3b8]">{activePoint.time}</div>
          </div>
        </div>

        {/* Timeline Labels */}
        <div className="flex justify-between text-[10px] text-[#94a3b8] font-mono pt-2 border-t border-white/5">
          <span>08:00</span>
          <span>10:00</span>
          <span>12:00</span>
          <span>14:00</span>
          <span className="text-[#00A6A6] font-bold">16:00</span>
          <span>18:00</span>
          <span>20:00</span>
        </div>
      </div>

      {/* 4. Analytics & Initial Insights (Board A.8 Item 07) */}
      <div className="pt-2">
        <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide uppercase mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#00A6A6]" />
          <span>{isId ? "Analitik & Wawasan Awal" : "Analytics & Initial Insights"}</span>
        </h4>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Metric 1: Unique Visitors */}
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <div className="flex items-center justify-between text-[#94a3b8] mb-2">
              <span className="text-xs">{isId ? "Pengunjung Unik" : "Unique Visitors"}</span>
              <Globe className="w-3.5 h-3.5 text-[#00A6A6]" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">4,823</div>
            <span className="text-[10px] text-[#16A34A] font-semibold mt-1 block">
              +12% vs. target
            </span>
          </div>

          {/* Metric 2: Page Views */}
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <div className="flex items-center justify-between text-[#94a3b8] mb-2">
              <span className="text-xs">{isId ? "Tampilan Halaman" : "Page Views"}</span>
              <Eye className="w-3.5 h-3.5 text-[#00A6A6]" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">12,540</div>
            <span className="text-[10px] text-[#94a3b8] mt-1 block">
              2.6 views/visitor
            </span>
          </div>

          {/* Metric 3: Avg Session Duration */}
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <div className="flex items-center justify-between text-[#94a3b8] mb-2">
              <span className="text-xs">{isId ? "Durasi Sesi Rata-rata" : "Avg. Session"}</span>
              <Clock className="w-3.5 h-3.5 text-[#00A6A6]" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">2m 18s</div>
            <span className="text-[10px] text-[#16A34A] font-semibold mt-1 block">
              High engagement
            </span>
          </div>

          {/* Metric 4: Bounce Rate */}
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <div className="flex items-center justify-between text-[#94a3b8] mb-2">
              <span className="text-xs">{isId ? "Rasio Pentalan" : "Bounce Rate"}</span>
              <Percent className="w-3.5 h-3.5 text-[#00A6A6]" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">68%</div>
            <span className="text-[10px] text-[#16A34A] font-semibold mt-1 block">
              Target &lt; 70%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchMonitoringWidget;
