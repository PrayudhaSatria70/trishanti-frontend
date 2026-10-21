"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Home,
  FileText,
  Presentation,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/cn";

/* =========================================================================
   A.5.16 CARDS & CONTENT COMPONENTS (Image 2)
   - 01 & 07 Content Card (Light & Dark)
   - 03 & 09 Feature Card with Circular Arrow CTA
   - 05 & 11 Card with Tags
   - 06 & 12 Card List / Compact
   - 13 Accordion
   - 14 Tabs
   - 16 Breadcrumb
   - 17 Divider
   - 18 List Group
   ========================================================================= */

/* -------------------------------------------------------------------------
   01 & 07 CONTENT CARD (Light & Dark)
   ------------------------------------------------------------------------- */
interface ContentCardProps {
  theme?: "light" | "dark";
  tag: string;
  date: string;
  title: string;
  description: string;
  image: string;
  href: string;
  readMoreText?: string;
  className?: string;
}

export function ContentCard({
  theme = "light",
  tag,
  date,
  title,
  description,
  image,
  href,
  readMoreText = "Read More",
  className,
}: ContentCardProps) {
  const isLight = theme === "light";

  return (
    <article
      className={cn(
        "group flex flex-col rounded-2xl overflow-hidden border transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] hover:-translate-y-1.5",
        "bg-white/85 dark:bg-[#071A22]/80 backdrop-blur-xl border-[var(--trishanti-neutral-200)] dark:border-white/10 shadow-sm hover:border-[#00A6A6]/60 dark:hover:border-[#00A6A6]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18),0_0_28px_rgba(0,166,166,0.22)] dark:hover:shadow-[0_20px_48px_rgba(0,0,0,0.6),0_0_32px_rgba(0,166,166,0.28)] text-[var(--trishanti-neutral-900)] dark:text-white",
        className,
      )}
    >
      {/* Image Container with fixed aspect ratio for CLS stability */}
      <div className="relative aspect-card w-full overflow-hidden bg-slate-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col p-8">
        <div className="flex items-center gap-3 text-xs mb-3">
          <span className="px-2.5 py-0.5 rounded-full bg-[#00A6A6]/15 text-[#00A6A6] font-semibold uppercase tracking-wider text-[10px]">
            {tag}
          </span>
          <span className={cn(isLight ? "text-[#7C8581]" : "text-[#94a3b8]")}>
            {date}
          </span>
        </div>

        <h3
          className={cn(
            "text-lg sm:text-xl font-heading font-bold leading-snug mb-3 group-hover:text-[#00A6A6] transition-colors line-clamp-2",
            isLight ? "text-[#071A22]" : "text-white",
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "text-xs sm:text-sm line-clamp-3 mb-6 font-light leading-relaxed flex-1",
            isLight ? "text-[#5E6663]" : "text-[#94a3b8]",
          )}
        >
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#00A6A6] group-hover:translate-x-1 transition-transform"
        >
          <span>{readMoreText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------
   03 & 09 FEATURE CARD (With Circular Arrow CTA)
   ------------------------------------------------------------------------- */
interface FeatureCardProps {
  badge: string;
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
}

export function FeatureCard({
  badge,
  title,
  description,
  image,
  href,
  className,
}: FeatureCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-end min-h-[380px] sm:min-h-[440px] rounded-2xl overflow-hidden p-8 sm:p-10 border border-[var(--trishanti-neutral-200)] dark:border-white/15 backdrop-blur-xl transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] hover:border-[#00A6A6]/70 hover:shadow-[0_16px_45px_rgba(0,0,0,0.7),0_0_32px_rgba(0,166,166,0.3)] hover:-translate-y-1.5",
        className,
      )}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071A22] via-[#071A22]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-end justify-between gap-4">
        <div className="max-w-md space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-[#00A6A6]/20 border border-[#00A6A6]/30 text-[#00A6A6] text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
            {badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-[#00A6A6] transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#cbd5e1] font-light leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Circular Cyan Arrow Button */}
        <div className="shrink-0 w-11 h-11 rounded-full border border-white/20 text-white group-hover:bg-[#00A6A6] group-hover:border-[#00A6A6] group-hover:scale-110 flex items-center justify-center transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]">
          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

/* -------------------------------------------------------------------------
   05 & 11 CARD WITH TAGS
   ------------------------------------------------------------------------- */
interface CardWithTagsProps {
  theme?: "light" | "dark";
  tags: string[];
  date: string;
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
}

export function CardWithTags({
  theme = "light",
  tags,
  date,
  title,
  description,
  image,
  href,
  className,
}: CardWithTagsProps) {
  const isLight = theme === "light";

  return (
    <article
      className={cn(
        "group flex flex-col rounded-2xl overflow-hidden border transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] hover:-translate-y-1.5",
        "bg-white/85 dark:bg-[#071A22]/80 backdrop-blur-xl border-[var(--trishanti-neutral-200)] dark:border-white/10 shadow-sm hover:border-[#00A6A6]/60 dark:hover:border-[#00A6A6]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18),0_0_28px_rgba(0,166,166,0.22)] dark:hover:shadow-[0_20px_48px_rgba(0,0,0,0.6),0_0_32px_rgba(0,166,166,0.28)] text-[var(--trishanti-neutral-900)] dark:text-white",
        className,
      )}
    >
      <div className="relative aspect-card w-full overflow-hidden bg-slate-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-[#00A6A6]/10 text-[#00A6A6] font-medium text-[10px] uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
          <span className={cn("text-xs ml-auto", isLight ? "text-[#7C8581]" : "text-[#94a3b8]")}>
            {date}
          </span>
        </div>

        <h3
          className={cn(
            "text-lg sm:text-xl font-heading font-bold leading-snug mb-2 group-hover:text-[#00A6A6] transition-colors line-clamp-2",
            isLight ? "text-[#071A22]" : "text-white",
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "text-xs sm:text-sm line-clamp-2 mb-6 font-light leading-relaxed flex-1",
            isLight ? "text-[#5E6663]" : "text-[#94a3b8]",
          )}
        >
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#00A6A6] group-hover:translate-x-1 transition-transform"
        >
          <span>Read More</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------
   06 & 12 CARD LIST / COMPACT
   ------------------------------------------------------------------------- */
interface CompactCardItem {
  id: string;
  date: string;
  title: string;
  image: string;
  href: string;
}

interface CompactCardListProps {
  items: CompactCardItem[];
  theme?: "light" | "dark";
  className?: string;
}

export function CompactCardList({
  items,
  theme = "light",
  className,
}: CompactCardListProps) {
  const isLight = theme === "light";

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            "group flex items-center gap-4 p-3 rounded-xl border transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]",
            "bg-white dark:bg-[var(--trishanti-color-bg-dark)] border-[var(--trishanti-neutral-200)] dark:border-white/10 text-[var(--trishanti-neutral-900)] dark:text-white hover:border-[#00A6A6]",
          )}
        >
          <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-800">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>

          <div className="flex-1 min-w-0">
            <span
              className={cn(
                "text-[10px] uppercase tracking-wider block font-semibold",
                isLight ? "text-[#7C8581]" : "text-[#94a3b8]",
              )}
            >
              {item.date}
            </span>
            <h4 className="text-xs sm:text-sm font-semibold truncate group-hover:text-[#00A6A6] transition-colors mt-0.5">
              {item.title}
            </h4>
          </div>

          <ArrowRight className="w-4 h-4 text-[#7C8581] group-hover:text-[#00A6A6] group-hover:translate-x-1 transition-all shrink-0 mr-2" />
        </Link>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------
   13 ACCORDION
   ------------------------------------------------------------------------- */
export interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("divide-y divide-white/10 border-y border-white/10", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left py-2 text-base sm:text-lg font-heading font-bold text-white hover:text-[#00A6A6] transition-colors"
            >
              <span>{item.title}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-[#00A6A6] transition-transform duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] shrink-0 ml-4",
                  isOpen && "rotate-180",
                )}
              />
            </button>

            {isOpen && (
              <div className="pt-3 pb-2 text-sm text-[#cbd5e1] font-light leading-relaxed animate-fade-in">
                {typeof item.content === "string" ? <p>{item.content}</p> : item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------
   14 TABS
   ------------------------------------------------------------------------- */
export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ContentTabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
}

export function ContentTabs({ tabs, defaultTabId, className }: ContentTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId ?? tabs[0]?.id);

  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <div className={cn("w-full space-y-6", className)}>
      {/* Tab Headers */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-2 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]",
                isActive
                  ? "bg-[#00A6A6] text-white shadow-[0_4px_16px_rgba(0,166,166,0.35)]"
                  : "text-[#94a3b8] hover:text-white hover:bg-white/5",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div className="animate-fade-in">{currentTab?.content}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   16 BREADCRUMB
   ------------------------------------------------------------------------- */
export interface BreadcrumbCrumb {
  label: string;
  href?: string | undefined;
}

interface BreadcrumbProps {
  crumbs?: BreadcrumbCrumb[] | undefined;
  items?: BreadcrumbCrumb[] | undefined;
  variant?: "light" | "dark" | undefined;
  className?: string | undefined;
}

export function Breadcrumb({ crumbs, items, variant = "light", className }: BreadcrumbProps) {
  const activeCrumbs = crumbs ?? items ?? [];
  const isDark = variant === "dark";

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-2 text-xs", className)}>
      <Link
        href="/"
        className={cn(
          "p-1 transition-colors",
          isDark ? "text-[#7C8581] hover:text-[#00A6A6]" : "text-[#7C8581] hover:text-[#00A6A6]"
        )}
        aria-label="Home"
      >
        <Home className="w-3.5 h-3.5" />
      </Link>

      {activeCrumbs.map((crumb, index) => {
        const isLast = index === activeCrumbs.length - 1;
        return (
          <React.Fragment key={`${crumb.label}-${index}`}>
            <ChevronRight className={cn("w-3.5 h-3.5", isDark ? "text-white/30" : "text-[#7C8581]/40")} />
            {isLast || !crumb.href ? (
              <span className="font-semibold text-[#00A6A6] truncate">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className={cn(
                  "transition-colors truncate",
                  isDark ? "text-[#DEE3E1] hover:text-white" : "text-[#5E6663] hover:text-[#171C1B]"
                )}
              >
                {crumb.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

/* -------------------------------------------------------------------------
   17 DIVIDER
   ------------------------------------------------------------------------- */
interface DividerProps {
  text?: string;
  className?: string;
}

export function Divider({ text, className }: DividerProps) {
  if (!text) {
    return <hr className={cn("border-t border-white/10 my-8", className)} />;
  }

  return (
    <div className={cn("relative flex items-center justify-center my-12", className)}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-[#00A6A6]/30" />
      </div>
      <div className="relative px-6 bg-[#071A22] text-xs font-heading italic text-[#DEE3E1] tracking-widest uppercase">
        — {text} —
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   18 LIST GROUP
   ------------------------------------------------------------------------- */
export interface ListGroupItem {
  id: string;
  title: string;
  type?: "pdf" | "presentation" | "governance" | "general";
  href: string;
}

interface ListGroupProps {
  items: ListGroupItem[];
  className?: string;
}

export function ListGroup({ items, className }: ListGroupProps) {
  const getIcon = (type?: string) => {
    switch (type) {
      case "presentation":
        return <Presentation className="w-4 h-4 text-[#00A6A6]" />;
      case "governance":
        return <ShieldCheck className="w-4 h-4 text-[#00A6A6]" />;
      default:
        return <FileText className="w-4 h-4 text-[#00A6A6]" />;
    }
  };

  return (
    <div className={cn("rounded-2xl border border-white/10 divide-y divide-white/10 bg-[#071A22]/60 overflow-hidden", className)}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="group flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-lg bg-[#00A6A6]/10 shrink-0">
              {getIcon(item.type)}
            </div>
            <span className="text-sm font-medium text-white group-hover:text-[#00A6A6] transition-colors truncate">
              {item.title}
            </span>
          </div>

          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#00A6A6] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
        </Link>
      ))}
    </div>
  );
}
