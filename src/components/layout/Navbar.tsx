"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Plus,
  Minus,
  Pickaxe,
  Building2,
  Sprout,
  Cpu,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/cn";
import LanguageSwitcher from "./LanguageSwitcher";
import { SearchModal } from "./SearchModal";
import { ThemeToggle } from "./ThemeToggle";
import { BUSINESS_PILLARS, BusinessPillar } from "@/lib/data";

interface NavLink {
  key: string;
  href: string;
  labelEn: string;
  labelId: string;
  hasDropdown?: "about" | "business" | undefined;
}

export default function Navbar() {
  const locale = useLocale();
  const isId = locale === "id";
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Desktop Dropdown & Mega Menu states
  const [desktopDropdown, setDesktopDropdown] = useState<"about" | "business" | null>(null);
  const [activeDesktopPillarSlug, setActiveDesktopPillarSlug] = useState<string>("industrial-trading");
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mobile navigation accordion states (Board 0)
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const [mobileBusinessExpanded, setMobileBusinessExpanded] = useState(false);
  const [mobileSelectedPillarSlug, setMobileSelectedPillarSlug] = useState<string | null>(null);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const getPath = (path: string) => `/${locale}${path === "/" ? "" : path}`;

  const navLinks: NavLink[] = [
    {
      key: "about",
      href: getPath("/about"),
      labelEn: "About",
      labelId: "Tentang Kami",
      hasDropdown: "about",
    },
    {
      key: "business",
      href: getPath("/businesses"),
      labelEn: "Our Businesses",
      labelId: "Bisnis Kami",
      hasDropdown: "business",
    },
    {
      key: "sustainability",
      href: getPath("/sustainability"),
      labelEn: "Sustainability",
      labelId: "Keberlanjutan",
    },
    {
      key: "news",
      href: getPath("/news"),
      labelEn: "News",
      labelId: "Berita",
    },
    {
      key: "careers",
      href: getPath("/careers"),
      labelEn: "Careers",
      labelId: "Karir",
    },
  ];

  // Helper icon for 6 pillars
  const getPillarIcon = (slug: string) => {
    switch (slug) {
      case "industrial-trading":
        return <Pickaxe className="w-4 h-4" />;
      case "infrastructure":
        return <Building2 className="w-4 h-4" />;
      case "agriculture-food":
        return <Sprout className="w-4 h-4" />;
      case "technology-digital":
        return <Cpu className="w-4 h-4" />;
      case "consumer-lifestyle":
        return <ShoppingBag className="w-4 h-4" />;
      case "experiences-ventures":
        return <Sparkles className="w-4 h-4" />;
      default:
        return <Building2 className="w-4 h-4" />;
    }
  };

  const activeDesktopPillar: BusinessPillar =
    BUSINESS_PILLARS.find((p) => p.slug === activeDesktopPillarSlug) ??
    (BUSINESS_PILLARS[0] as BusinessPillar);

  const activeDesktopPillarIndex = BUSINESS_PILLARS.findIndex(
    (p) => p.slug === activeDesktopPillarSlug,
  );
  const formattedPillarIndex = `0${(activeDesktopPillarIndex >= 0 ? activeDesktopPillarIndex : 0) + 1} / 0${BUSINESS_PILLARS.length}`;

  const handlePrevPillar = () => {
    const currentIdx = activeDesktopPillarIndex >= 0 ? activeDesktopPillarIndex : 0;
    const prevIdx = (currentIdx - 1 + BUSINESS_PILLARS.length) % BUSINESS_PILLARS.length;
    const prevPillar = BUSINESS_PILLARS[prevIdx];
    if (prevPillar) {
      setActiveDesktopPillarSlug(prevPillar.slug);
    }
  };

  const handleNextPillar = () => {
    const currentIdx = activeDesktopPillarIndex >= 0 ? activeDesktopPillarIndex : 0;
    const nextIdx = (currentIdx + 1) % BUSINESS_PILLARS.length;
    const nextPillar = BUSINESS_PILLARS[nextIdx];
    if (nextPillar) {
      setActiveDesktopPillarSlug(nextPillar.slug);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer and dropdown on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileOpen(false);
    setDesktopDropdown(null);
  }

  // Handle escape key
  useEffect(() => {
    if (!isMobileOpen) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleMouseEnter = (type: "about" | "business") => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDesktopDropdown(type);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdown(null);
    }, 200);
  };

  const isActiveLink = (href: string): boolean => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  const isHeroState = !isScrolled && (pathname === `/${locale}` || pathname === `/${locale}/`);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[200] pointer-events-none transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]",
          isHeroState
            ? "bg-gradient-to-b from-white/90 via-white/40 to-transparent dark:from-[#071A22]/90 dark:via-[#071A22]/40 py-4 sm:py-5"
            : "py-3 px-3 sm:px-6",
        )}
        role="banner"
      >
        {/* Top Slogan Banner in Hero State (Board 3 Item 1) */}
        {isHeroState && (
          <div className="hidden lg:block w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 mb-2">
            <div className="flex justify-end items-center">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--trishanti-neutral-700)] dark:text-white/70 font-light select-none">
                Greater Possibilities for a Better Tomorrow
              </span>
            </div>
          </div>
        )}

        {/* Navigation Bar / Floating Capsule (Board 3 Items 2 & 3) */}
        <div
          className={cn(
            "transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] pointer-events-auto",
            isHeroState
              ? "w-full max-w-[1920px] mx-auto rounded-full glass-nav-hero px-5 sm:px-6 lg:px-12 xl:px-24 py-2"
              : "w-full max-w-[1920px] mx-auto rounded-full glass-nav-floating px-5 sm:px-6 lg:px-12 xl:px-24 py-2",
          )}
        >
          <nav className="flex items-center justify-between h-10 sm:h-12" aria-label="Main navigation">
            {/* Brand Logo */}
            <Link
              href={getPath("/")}
              className="flex items-center gap-2 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A6A6] rounded-sm"
              aria-label="Trishanti — Go to homepage"
            >
              <Image src="/logo.png" alt="Trishanti Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <div className="flex flex-col justify-center">
                <span className={cn(
                  "font-sans font-extrabold tracking-[0.2em] text-lg sm:text-xl leading-none transition-colors",
                  isScrolled ? "text-white" : "text-[var(--trishanti-neutral-900)] dark:text-white"
                )}>
                  TRISHANTI
                </span>
                <span className="text-[#00A6A6] font-sans text-[7.5px] sm:text-[8px] font-semibold tracking-[0.28em] uppercase leading-none mt-1">
                  PT. TRISHANTI SINERGI INDOCORP
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Board 3) */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-8" role="list">
              {navLinks.map((link) => (
                <li
                  key={link.key}
                  className="relative py-2"
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.hasDropdown)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-[13px] font-medium tracking-wide transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] py-1 inline-flex items-center gap-1 group",
                      isActiveLink(link.href)
                        ? "text-[#00A6A6] drop-shadow-[0_0_10px_rgba(0,166,166,0.6)]"
                        : isScrolled
                          ? "text-white/80 hover:text-white"
                          : "text-[var(--trishanti-neutral-800)] hover:text-[var(--trishanti-neutral-900)] dark:text-white/80 dark:hover:text-white",
                    )}
                    aria-current={isActiveLink(link.href) ? "page" : undefined}
                    aria-expanded={link.hasDropdown ? desktopDropdown === link.hasDropdown : undefined}
                  >
                    <span>{isId ? link.labelId : link.labelEn}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)]",
                          isScrolled ? "text-white/50" : "text-[var(--trishanti-neutral-600)] dark:text-white/50",
                          desktopDropdown === link.hasDropdown && "rotate-180 text-[#00A6A6]",
                        )}
                      />
                    )}
                    {isActiveLink(link.href) && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00A6A6] rounded-full shadow-[0_0_8px_rgba(0,166,166,0.8)]" />
                    )}
                  </Link>

                  {/* Desktop About Dropdown (Board 3 Item 5) */}
                  {link.hasDropdown === "about" && desktopDropdown === "about" && (
                    <div
                      className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-[#071A22]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] py-2 text-white z-50 animate-fade-in"
                      onMouseEnter={() => handleMouseEnter("about")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={getPath("/about")}
                        className="block px-4 py-2.5 text-xs text-white/80 hover:text-white hover:bg-white/5 hover:text-[#00A6A6] transition-colors"
                      >
                        {isId ? "Tentang Trishanti" : "About Trishanti"}
                      </Link>
                      <Link
                        href={getPath("/about#purpose")}
                        className="block px-4 py-2.5 text-xs text-white/80 hover:text-white hover:bg-white/5 hover:text-[#00A6A6] transition-colors"
                      >
                        {isId ? "Tujuan Kami" : "Our Purpose"}
                      </Link>
                      <Link
                        href={getPath("/about#vision")}
                        className="block px-4 py-2.5 text-xs text-white/80 hover:text-white hover:bg-white/5 hover:text-[#00A6A6] transition-colors"
                      >
                        {isId ? "Visi & Arah" : "Vision & Direction"}
                      </Link>
                      <Link
                        href={getPath("/about#leadership")}
                        className="block px-4 py-2.5 text-xs text-white/80 hover:text-white hover:bg-white/5 hover:text-[#00A6A6] transition-colors"
                      >
                        {isId ? "Kepemimpinan" : "Leadership"}
                      </Link>
                      <Link
                        href={getPath("/about/technology")}
                        className="block px-4 py-2.5 text-xs text-white/80 hover:text-white hover:bg-white/5 hover:text-[#00A6A6] transition-colors"
                      >
                        {isId ? "Teknologi & Inovasi" : "Technology & Innovation"}
                      </Link>
                    </div>
                  )}
                </li>
              ))}

              {/* Search Icon Trigger */}
              <li>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className={cn(
                    "inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#00A6A6]",
                    isScrolled
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-[var(--trishanti-neutral-700)] hover:text-[var(--trishanti-neutral-900)] hover:bg-black/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10"
                  )}
                  aria-label="Search site"
                >
                  <Search className="w-4 h-4" />
                </button>
              </li>
            </ul>

            {/* Desktop Right: language utility and one prominent public CTA. */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <ThemeToggle isScrolled={isScrolled} />
              <LanguageSwitcher isScrolled={isScrolled} />
              <Link
                href={getPath("/contact")}
                className="inline-flex items-center justify-center min-h-11 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00A6A6] via-[#00B4B4] to-[#087C8C] hover:from-[#00B4B4] hover:to-[#008f8f] active:from-[#008f8f] active:to-[#06636f] text-white font-semibold text-xs tracking-wider shadow-[0_4px_16px_rgba(0,166,166,0.35)] hover:shadow-[0_6px_22px_rgba(0,166,166,0.5)] hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--trishanti-color-primary)] transition-all duration-300"
              >
                {isId ? "Hubungi Kami" : "Contact Us"}
              </Link>
            </div>

            {/* Mobile: Search + Theme + Hamburger — 44px targets, 8px apart (Fitts's Law) */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle isScrolled={isScrolled} />
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className={cn(
                  "inline-flex items-center justify-center touch-target-min rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--trishanti-color-primary)] active:scale-95",
                  isScrolled
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-[var(--trishanti-neutral-800)] hover:text-[var(--trishanti-neutral-900)] hover:bg-black/5 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10"
                )}
                aria-label="Search site"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                className={cn(
                  "inline-flex items-center justify-center touch-target-min rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#00A6A6]",
                  isScrolled
                    ? "text-white hover:text-[#00A6A6] hover:bg-white/10"
                    : "text-[var(--trishanti-neutral-900)] hover:text-[#00A6A6] hover:bg-black/5 dark:text-white dark:hover:text-[#00A6A6] dark:hover:bg-white/10"
                )}
                aria-expanded={isMobileOpen}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Desktop Business Mega Menu (Board 3 Item 4) */}
        {desktopDropdown === "business" && (
          <div
            className="hidden lg:block w-full max-w-[1920px] mx-auto px-4 lg:px-12 xl:px-24 mt-3 pointer-events-auto"
            onMouseEnter={() => handleMouseEnter("business")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="rounded-2xl bg-[#071A22]/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-7 grid grid-cols-12 gap-6 text-white animate-fade-in">
              {/* Col 1: Ecosystem Introduction */}
              <div className="col-span-3 flex flex-col justify-between border-r border-white/10 pr-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2 leading-tight">
                    {isId ? "Ekosistem Bisnis Kami" : "Our Business Ecosystem"}
                  </h3>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {isId
                      ? "Menjelajahi peluang di berbagai industri untuk menciptakan nilai jangka panjang berkelanjutan."
                      : "Exploring opportunities across diverse industries to create lasting value."}
                  </p>
                </div>

                <Link
                  href={getPath("/businesses")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#00A6A6] hover:text-[#20b8b8] transition-colors mt-6"
                >
                  <span>{isId ? "Lihat Semua Bisnis" : "View All Businesses"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Col 2: 6 Pillars List */}
              <div className="col-span-4 space-y-1.5 border-r border-white/10 pr-6">
                {BUSINESS_PILLARS.map((pillar) => {
                  const isSelected = pillar.slug === activeDesktopPillarSlug;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onMouseEnter={() => setActiveDesktopPillarSlug(pillar.slug)}
                      onClick={() => setActiveDesktopPillarSlug(pillar.slug)}
                      className={cn(
                        "w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] flex items-center justify-between",
                        isSelected
                          ? "bg-[#00A6A6]/20 border border-[#00A6A6]/40 text-[#00A6A6]"
                          : "text-white/80 hover:text-white hover:bg-white/5 border border-transparent",
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={isSelected ? "text-[#00A6A6]" : "text-white/50"}>
                          {getPillarIcon(pillar.slug)}
                        </span>
                        <span>
                          {isId
                            ? pillar.displayTitleId || pillar.titleId
                            : pillar.displayTitleEn || pillar.titleEn}
                        </span>
                      </div>
                      <ChevronRight
                        className={cn(
                          "w-3.5 h-3.5 transition-transform",
                          isSelected ? "text-[#00A6A6] translate-x-0.5" : "text-white/30",
                        )}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Col 3: Interactive Preview Card */}
              <div className="col-span-5">
                <div className="relative rounded-xl overflow-hidden min-h-[290px] h-full p-6 flex flex-col justify-end border border-white/10 group">
                  <Image
                    src={activeDesktopPillar.image}
                    alt={activeDesktopPillar.titleEn}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A22] via-[#071A22]/75 to-transparent" />

                  <div className="relative z-10 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest text-[#00A6A6] uppercase">
                        {isId
                          ? activeDesktopPillar.displayTitleId || activeDesktopPillar.titleId
                          : activeDesktopPillar.displayTitleEn || activeDesktopPillar.titleEn}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-white/70 bg-black/40 px-2 py-0.5 rounded-full border border-white/10">
                        {formattedPillarIndex}
                      </span>
                    </div>

                    <h4 className="font-heading text-base font-semibold text-white leading-snug">
                      {isId
                        ? activeDesktopPillar.headlineId || activeDesktopPillar.summaryId
                        : activeDesktopPillar.headlineEn || activeDesktopPillar.summaryEn}
                    </h4>

                    {/* Subsectors pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {((isId
                        ? activeDesktopPillar.subsectorsId
                        : activeDesktopPillar.subsectorsEn) || []
                      ).map((sector) => (
                        <span
                          key={sector}
                          className="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm border border-white/10 text-[10.5px] text-white/80"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Link
                        href={getPath(`/businesses#${activeDesktopPillar.slug}`)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A6A6] hover:text-[#20b8b8] transition-colors"
                      >
                        <span>{isId ? "Jelajahi Pilar" : "Explore Pillar"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {/* Circular Pagination Controls (Image 2 Item 4) */}
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handlePrevPillar();
                          }}
                          className="w-9 h-9 rounded-full bg-black/50 hover:bg-[#00A6A6] border border-white/15 text-white flex items-center justify-center transition-colors"
                          aria-label="Previous pillar"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleNextPillar();
                          }}
                          className="w-9 h-9 rounded-full bg-black/50 hover:bg-[#00A6A6] border border-white/15 text-white flex items-center justify-center transition-colors"
                          aria-label="Next pillar"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* ============================================================
          MOBILE NAVIGATION UX — Board 0 (8 States)
          ============================================================ */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-[210] lg:hidden bg-[#071A22] text-white flex flex-col justify-between overflow-y-auto animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Top Bar: Brand Logo + Close Button */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10 bg-[#071A22]/90 backdrop-blur-md sticky top-0 z-20">
            <Link
              href={getPath("/")}
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-2"
            >
              <Image src="/logo.png" alt="Trishanti Logo" width={32} height={32} className="w-8 h-8 object-contain" />
              <div className="flex flex-col justify-center">
                <span className="text-white font-sans font-extrabold tracking-[0.2em] text-lg leading-none">
                  TRISHANTI
                </span>
                <span className="text-[#00A6A6] font-sans text-[7.5px] font-semibold tracking-[0.25em] uppercase leading-none mt-1">
                  PT. TRISHANTI SINERGI INDOCORP
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="inline-flex items-center justify-center touch-target-min rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Accordion List */}
          <div className="px-6 py-6 space-y-2 flex-1">
            {/* 1. Home */}
            <Link
              href={getPath("/")}
              onClick={() => setIsMobileOpen(false)}
              className="block text-xl font-medium text-white hover:text-[#00A6A6] py-3 border-b border-white/5 transition-colors"
            >
              {isId ? "Beranda" : "Home"}
            </Link>

            {/* 2. About Accordion (Board 0 Item 4) */}
            <div className="border-b border-white/5 pb-2">
              <button
                type="button"
                onClick={() => setMobileAboutExpanded((prev) => !prev)}
                className="w-full flex items-center justify-between text-xl font-medium text-white hover:text-[#00A6A6] py-3 transition-colors"
              >
                <span>{isId ? "Tentang Kami" : "About"}</span>
                {mobileAboutExpanded ? (
                  <Minus className="w-5 h-5 text-[#00A6A6]" />
                ) : (
                  <Plus className="w-5 h-5 text-white/60" />
                )}
              </button>

              {mobileAboutExpanded && (
                <div className="pl-4 pb-2 space-y-1 animate-fade-in border-l-2 border-[#00A6A6]/40 ml-2">
                  <Link
                    href={getPath("/about")}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center min-h-11 text-sm text-[#cbd5e1] hover:text-[#00A6A6]"
                  >
                    {isId ? "Tentang Trishanti" : "About Trishanti"}
                  </Link>
                  <Link
                    href={getPath("/about#purpose")}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center min-h-11 text-sm text-[#cbd5e1] hover:text-[#00A6A6]"
                  >
                    {isId ? "Tujuan Kami" : "Our Purpose"}
                  </Link>
                  <Link
                    href={getPath("/about#vision")}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center min-h-11 text-sm text-[#cbd5e1] hover:text-[#00A6A6]"
                  >
                    {isId ? "Visi & Arah" : "Vision & Direction"}
                  </Link>
                  <Link
                    href={getPath("/about#leadership")}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center min-h-11 text-sm text-[#cbd5e1] hover:text-[#00A6A6]"
                  >
                    {isId ? "Kepemimpinan" : "Leadership"}
                  </Link>
                  <Link
                    href={getPath("/about/technology")}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center min-h-11 text-sm text-[#cbd5e1] hover:text-[#00A6A6]"
                  >
                    {isId ? "Teknologi & Inovasi" : "Technology & Innovation"}
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Business Accordion (Board 0 Items 5 & 6) */}
            <div className="border-b border-white/5 pb-2">
              <button
                type="button"
                onClick={() => {
                  setMobileBusinessExpanded((prev) => !prev);
                  if (mobileBusinessExpanded) {
                    setMobileSelectedPillarSlug(null);
                  }
                }}
                className="w-full flex items-center justify-between text-xl font-medium text-white hover:text-[#00A6A6] py-3 transition-colors"
              >
                <span>{isId ? "Bisnis" : "Business"}</span>
                {mobileBusinessExpanded ? (
                  <Minus className="w-5 h-5 text-[#00A6A6]" />
                ) : (
                  <Plus className="w-5 h-5 text-white/60" />
                )}
              </button>

              {mobileBusinessExpanded && (
                <div className="pl-2 pt-2 pb-3 space-y-2.5 animate-fade-in">
                  {/* Back button & All Businesses link (Image 2 Item 4) */}
                  <div className="flex items-center justify-between px-1 pb-1 border-b border-white/5">
                    <button
                      type="button"
                      onClick={() => setMobileBusinessExpanded(false)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#00A6A6] hover:text-white transition-colors py-1"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>{isId ? "Menu Utama" : "Business"}</span>
                    </button>
                    <Link
                      href={getPath("/businesses")}
                      onClick={() => setIsMobileOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white/70 hover:text-[#00A6A6] transition-colors py-1"
                    >
                      <span>{isId ? "Semua Bisnis" : "All Businesses"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* 6 Pillars */}
                  {BUSINESS_PILLARS.map((pillar) => {
                    const isPillarOpen = mobileSelectedPillarSlug === pillar.slug;
                    return (
                      <div key={pillar.id} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                        <button
                          type="button"
                          onClick={() =>
                            setMobileSelectedPillarSlug(isPillarOpen ? null : pillar.slug)
                          }
                          className="w-full flex items-center justify-between p-3.5 text-sm font-medium text-white hover:text-[#00A6A6]"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-[#00A6A6]">{getPillarIcon(pillar.slug)}</span>
                            <span>
                              {isId
                                ? pillar.displayTitleId || pillar.titleId
                                : pillar.displayTitleEn || pillar.titleEn}
                            </span>
                          </div>
                          {isPillarOpen ? (
                            <Minus className="w-4 h-4 text-[#00A6A6]" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-white/50" />
                          )}
                        </button>

                        {/* Pillar Expanded Card (Board 0 Item 6) */}
                        {isPillarOpen && (
                          <div className="p-4 bg-[#071A22] border-t border-white/10 space-y-3 animate-fade-in">
                            <div className="relative h-32 w-full rounded-lg overflow-hidden">
                              <Image
                                src={pillar.image}
                                alt={pillar.titleEn}
                                fill
                                sizes="100vw"
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#071A22] via-[#071A22]/50 to-transparent" />
                            </div>

                            <p className="text-xs text-[#cbd5e1] leading-relaxed">
                              {isId
                                ? pillar.headlineId || pillar.summaryId
                                : pillar.headlineEn || pillar.summaryEn}
                            </p>

                            <div className="space-y-1.5 pt-1">
                              {((isId ? pillar.subsectorsId : pillar.subsectorsEn) || []).map(
                                (item) => (
                                  <div
                                    key={item}
                                    className="text-xs text-white/80 flex items-center gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6A6]" />
                                    <span>{item}</span>
                                  </div>
                                ),
                              )}
                            </div>

                            <div className="pt-2">
                              <Link
                                href={getPath(`/businesses#${pillar.slug}`)}
                                onClick={() => setIsMobileOpen(false)}
                                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full border border-[#00A6A6] text-[#00A6A6] hover:bg-[#00A6A6] hover:text-white text-xs font-semibold transition-colors"
                              >
                                <span>{isId ? "Jelajahi Pilar" : "Explore Pillar"}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 4. Sustainability */}
            <Link
              href={getPath("/sustainability")}
              onClick={() => setIsMobileOpen(false)}
              className="block text-xl font-medium text-white hover:text-[#00A6A6] py-3 border-b border-white/5 transition-colors"
            >
              {isId ? "Keberlanjutan" : "Sustainability"}
            </Link>

            {/* 5. News */}
            <Link
              href={getPath("/news")}
              onClick={() => setIsMobileOpen(false)}
              className="block text-xl font-medium text-white hover:text-[#00A6A6] py-3 border-b border-white/5 transition-colors"
            >
              {isId ? "Berita" : "News"}
            </Link>

            {/* 6. Careers */}
            <Link
              href={getPath("/careers")}
              onClick={() => setIsMobileOpen(false)}
              className="block text-xl font-medium text-white hover:text-[#00A6A6] py-3 border-b border-white/5 transition-colors"
            >
              {isId ? "Karir" : "Careers"}
            </Link>
          </div>

          {/* Bottom Card: Contact CTA & Language & Socials (Board 0 Item 7) */}
          <div className="px-6 pt-4 pb-6 space-y-5 bg-gradient-to-t from-black via-[#071A22] to-transparent">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <h4 className="text-white font-heading font-semibold text-lg mb-1">
                {isId ? "Mari Bangun Bersama." : "Let's Build What's Next."}
              </h4>
              <p className="text-xs text-[#94a3b8] mb-4 max-w-xs mx-auto leading-relaxed">
                {isId
                  ? "Jelajahi bisnis kami, diskusikan peluang, atau hubungi kami."
                  : "Explore our businesses, discuss opportunities, or simply say hello."}
              </p>
              <Link
                href={getPath("/contact")}
                onClick={() => setIsMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#00A6A6] via-[#00B4B4] to-[#087C8C] hover:from-[#00B4B4] hover:to-[#008f8f] text-white font-semibold text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(0,166,166,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                <span>{isId ? "Hubungi Kami" : "Contact Us"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4 text-xs text-[#94a3b8]">
              <div className="flex items-center gap-4">
                <span className="text-[11px] uppercase tracking-wider text-white/50">
                  {isId ? "Ikuti Perjalanan Kami" : "Follow Our Journey"}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center touch-target-min rounded-full bg-white/5 hover:text-[#00A6A6] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center touch-target-min rounded-full bg-white/5 hover:text-[#00A6A6] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-4 h-4 fill-none stroke-currentColor stroke-width-2"
                      viewBox="0 0 24 24"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center touch-target-min rounded-full bg-white/5 hover:text-[#00A6A6] transition-colors"
                    aria-label="YouTube"
                  >
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between w-full border-t border-white/5 pt-3">
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>
                <div className="flex items-center gap-3 text-[11px] text-[#94a3b8]">
                  <span>Privacy Policy</span>
                  <span>•</span>
                  <span>Terms of Service</span>
                </div>
              </div>

              <p className="text-[10px] text-white/40 tracking-wider">
                © 2026 PT. Trishanti Sinergi Indocorp
              </p>
            </div>

            {/* Earth horizon bottom graphic (Board 0 Items 3 & 4) */}
            <div className="relative h-16 w-full rounded-b-xl overflow-hidden flex items-end justify-center pb-2">
              <div className="absolute inset-0 bg-gradient-to-t from-[#00A6A6]/20 via-[#071A22] to-transparent pointer-events-none" />
              <div className="absolute -bottom-16 w-72 h-32 rounded-full border-t border-[#00A6A6]/50 shadow-[0_0_30px_rgba(0,166,166,0.4)] pointer-events-none" />
              <span className="relative z-10 text-[9px] uppercase tracking-[0.2em] text-white/60 font-light select-none">
                Greater Possibilities for a Better Tomorrow
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
