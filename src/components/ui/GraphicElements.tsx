"use client";

import { Users, Lightbulb, Compass, Leaf, Factory } from "lucide-react";

/* -------------------------------------------------------------------------
 * ILLUSTRATION & GRAPHIC ELEMENTS (Image 2 Alignment)
 * Rules:
 * - Structure. Movement. Possibility.
 * - Primitives: Structural lines, Directional paths, Architectural grid, Diagrammatic nodes
 * - Colors: Neutral lines (#A6ADAA, 20-60%), Cyan accent (#00A6A6, 60-100%), Soft gradient
 * - Diagram: Ecosystem visualization connecting TRISHANTI to People, Innovation, Opportunities, Environment, Industries
 * - Strictly NO generic cartoon illustrations
 * ------------------------------------------------------------------------- */

/**
 * 02 CORE GRAPHIC ELEMENT: Architectural Grid Background
 */
export function ArchitecturalGrid({
  className = "",
  mode = "light",
}: {
  className?: string;
  mode?: "light" | "dark";
}) {
  const isDark = mode === "dark";
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Subtle Grid Pattern */}
      <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`arch-grid-${mode}`} width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(23,28,27,0.06)"}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#arch-grid-${mode})`} />
      </svg>

      {/* Structural Corner Lines */}
      <div
        className={`absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 ${
          isDark ? "border-[#00A6A6]/40" : "border-[#00A6A6]/30"
        }`}
      />
      <div
        className={`absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 ${
          isDark ? "border-[#00A6A6]/40" : "border-[#00A6A6]/30"
        }`}
      />
      <div
        className={`absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 ${
          isDark ? "border-[#00A6A6]/40" : "border-[#00A6A6]/30"
        }`}
      />
      <div
        className={`absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 ${
          isDark ? "border-[#00A6A6]/40" : "border-[#00A6A6]/30"
        }`}
      />
    </div>
  );
}

/**
 * 02 CORE GRAPHIC ELEMENT: Directional Curved Path with Cyan Arrowhead
 */
export function DirectionalPath({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-40 h-16 pointer-events-none ${flip ? "-scale-x-100" : ""} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <marker
          id="cyan-arrow"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L6,3 z" fill="#00A6A6" />
        </marker>
        <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A6ADAA" stopOpacity="0.2" />
          <stop offset="70%" stopColor="#00A6A6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00A6A6" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M 10 70 C 60 70, 100 20, 185 20"
        stroke="url(#path-gradient)"
        strokeWidth="2"
        strokeDasharray="4 4"
        markerEnd="url(#cyan-arrow)"
      />
    </svg>
  );
}

/**
 * 06 DIAGRAM EXAMPLE: Ecosystem Visualization Diagram
 * Center: TRISHANTI ("A BRIGHTER TOMORROW, TOGETHER")
 * Surrounding Nodes:
 * - People (Empowered communities)
 * - Innovation (Future-ready solutions)
 * - Opportunities (A more inclusive tomorrow)
 * - Environment (A healthier planet)
 * - Industries (Sustainable growth)
 */
export function EcosystemDiagram({
  mode = "light",
  isId = false,
  className = "",
}: {
  mode?: "light" | "dark";
  isId?: boolean;
  className?: string;
}) {
  const isDark = mode === "dark";

  const NODES = [
    {
      id: "people",
      titleEn: "People",
      titleId: "Insan",
      descEn: "Empowered communities",
      descId: "Komunitas berdaya",
      icon: Users,
      angle: -90, // Top
    },
    {
      id: "innovation",
      titleEn: "Innovation",
      titleId: "Inovasi",
      descEn: "Future-ready solutions",
      descId: "Solusi siap masa depan",
      icon: Lightbulb,
      angle: -18, // Top-Right
    },
    {
      id: "opportunities",
      titleEn: "Opportunities",
      titleId: "Peluang",
      descEn: "A more inclusive tomorrow",
      descId: "Hari esok lebih inklusif",
      icon: Compass,
      angle: 54, // Bottom-Right
    },
    {
      id: "environment",
      titleEn: "Environment",
      titleId: "Lingkungan",
      descEn: "A healthier planet",
      descId: "Bumi lebih lestari",
      icon: Leaf,
      angle: 126, // Bottom-Left
    },
    {
      id: "industries",
      titleEn: "Industries",
      titleId: "Industri",
      descEn: "Sustainable growth",
      descId: "Pertumbuhan berkelanjutan",
      icon: Factory,
      angle: 198, // Top-Left
    },
  ];

  // Center coordinate in a 600x600 SVG viewBox
  const cx = 300;
  const cy = 300;
  const orbitRadius = 190;

  return (
    <div
      className={`relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center p-4 ${className}`}
      aria-label="Trishanti Ecosystem Diagram"
    >
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="diagram-center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00A6A6" stopOpacity={isDark ? "0.25" : "0.12"} />
            <stop offset="100%" stopColor="#00A6A6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Center Glow */}
        <circle cx={cx} cy={cy} r="220" fill="url(#diagram-center-glow)" />

        {/* Outer Concentric Subtle Rings */}
        <circle
          cx={cx}
          cy={cy}
          r="240"
          fill="none"
          stroke={isDark ? "rgba(255,255,255,0.06)" : "rgba(23,28,27,0.05)"}
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <circle
          cx={cx}
          cy={cy}
          r={orbitRadius}
          fill="none"
          stroke={isDark ? "rgba(255,255,255,0.12)" : "rgba(23,28,27,0.08)"}
          strokeWidth="1.5"
        />
        <circle
          cx={cx}
          cy={cy}
          r="110"
          fill="none"
          stroke={isDark ? "rgba(0,166,166,0.3)" : "rgba(0,166,166,0.2)"}
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Connecting Spokes from Center to Nodes */}
        {NODES.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = cx + orbitRadius * Math.cos(rad);
          const ny = cy + orbitRadius * Math.sin(rad);

          return (
            <g key={node.id}>
              <line
                x1={cx}
                y1={cy}
                x2={nx}
                y2={ny}
                stroke={isDark ? "rgba(0,166,166,0.4)" : "rgba(0,166,166,0.25)"}
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              {/* Subtle Cyan Node Connector Dot */}
              <circle
                cx={cx + (orbitRadius * 0.45) * Math.cos(rad)}
                cy={cy + (orbitRadius * 0.45) * Math.sin(rad)}
                r="3"
                fill="#00A6A6"
              />
            </g>
          );
        })}
      </svg>

      {/* Center Brand Node */}
      <div
        className={`absolute z-10 w-44 h-44 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-xl border transition-all duration-300 ${
          isDark
            ? "bg-[#071A22] border-[#00A6A6]/40 text-white shadow-[#00A6A6]/10"
            : "bg-white border-[#DEE3E1] text-[#171C1B] shadow-[#171C1B]/5"
        }`}
      >
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#00A6A6]">
          TRISHANTI
        </span>
        <span className="text-[10px] text-[#7C8581] mt-1 font-medium leading-tight">
          {isId ? "MASA DEPAN YANG LEBIH CERAH" : "A BRIGHTER TOMORROW,"}
        </span>
        <span className="text-[10px] text-[#7C8581] font-medium leading-tight">
          {isId ? "BERSAMA" : "TOGETHER"}
        </span>
        <div className="w-6 h-0.5 bg-[#00A6A6] mt-2 rounded-full" />
      </div>

      {/* Surrounding Outer Nodes (Positioned absolutely according to trigonometry) */}
      {NODES.map((node) => {
        const rad = (node.angle * Math.PI) / 180;
        // Position percentage: center is 50%, offset is (orbitRadius / 600 * 100)%
        const leftPercent = 50 + (orbitRadius / 300) * 50 * Math.cos(rad);
        const topPercent = 50 + (orbitRadius / 300) * 50 * Math.sin(rad);
        const Icon = node.icon;

        return (
          <div
            key={node.id}
            style={{
              left: `${leftPercent}%`,
              top: `${topPercent}%`,
              transform: "translate(-50%, -50%)",
            }}
            className="absolute z-20 flex flex-col items-center group cursor-pointer"
          >
            {/* Circular Icon Node */}
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110 ${
                isDark
                  ? "bg-[#0E2833] border-[#00A6A6] text-[#00A6A6] shadow-lg shadow-[#00A6A6]/20"
                  : "bg-white border-[#00A6A6] text-[#00A6A6] shadow-md"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>

            {/* Label & Description */}
            <div className="text-center mt-2 pointer-events-none">
              <span
                className={`block text-xs font-serif font-bold ${
                  isDark ? "text-white" : "text-[#171C1B]"
                }`}
              >
                {isId ? node.titleId : node.titleEn}
              </span>
              <span
                className={`block text-[10px] whitespace-nowrap ${
                  isDark ? "text-[#A6ADAA]" : "text-[#5E6663]"
                }`}
              >
                {isId ? node.descId : node.descEn}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
