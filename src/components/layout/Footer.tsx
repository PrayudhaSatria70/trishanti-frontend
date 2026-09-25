import Link from "next/link";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { BUSINESS_PILLARS } from "@/lib/data";
import { CTASection } from "@/components/home/CTASection";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default async function Footer() {
  const locale = await getLocale();
  const isId = locale === "id";

  const localePath = (path: string): string =>
    `/${locale}${path === "/" ? "" : path}`;

  return (
    <footer
      className="bg-[var(--trishanti-color-bg-dark)] text-white relative"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* ============================================================
          GLOBAL CTA SECTION (Curtain Reveal Starts Here)
          ============================================================ */}
      <CTASection locale={locale} isId={isId} />

      {/* ============================================================
          FOUNDATIONAL QUOTE
          Seamless transition into the Deep Midnight Footer.
          ============================================================ */}
      <div className="w-full relative overflow-hidden py-10 sm:py-12 border-t border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,166,166,0.12),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="w-8 h-1 bg-[var(--trishanti-color-primary)] mx-auto block mb-6 rounded-[var(--trishanti-radius-full)]" />
          <blockquote className="font-heading italic text-xl sm:text-2xl lg:text-3xl text-white/95 leading-relaxed mb-4">
            {isId
              ? "“Fondasi yang kokoh menciptakan pengalaman yang mulus. Pengalaman yang konsisten membangun keterhubungan yang lebih kuat.”"
              : "“A strong foundation creates seamless experiences. Consistent experiences create stronger connections.”"}
          </blockquote>
          <cite className="not-italic text-xs font-semibold uppercase tracking-[0.25em] text-[var(--trishanti-color-primary)]">
            — PT. Trishanti Sinergi Indocorp
          </cite>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1 — Brand (4 cols) */}
          <div className="lg:col-span-4">
            <Link
              href={localePath("/")}
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--trishanti-color-primary)] rounded-sm"
              aria-label="Trishanti — Go to homepage"
            >
              <Image src="/logo.png" alt="Trishanti Logo" width={48} height={48} className="w-12 h-12 object-contain" />
              <div className="flex flex-col justify-center">
                <span className="text-white font-sans font-black tracking-[0.18em] text-2xl leading-none">
                  TRISHANTI
                </span>
                <span className="text-[var(--trishanti-color-primary)] font-sans text-[9px] font-semibold tracking-[0.25em] uppercase leading-none mt-1.5">
                  PT. TRISHANTI SINERGI INDOCORP
                </span>
              </div>
            </Link>

            <p className="mt-5 text-[var(--trishanti-color-text-dark-muted)] text-sm leading-relaxed max-w-sm font-light">
              {isId
                ? "Perusahaan multi-sektor jangka panjang yang membangun bisnis untuk menciptakan pengalaman bermakna bagi masyarakat, lintas industri."
                : "A long-term multi-sector enterprise building businesses that create meaningful experiences for people, across industries."}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-[var(--trishanti-radius-full)] border border-white/10 text-white/70 hover:text-[var(--trishanti-color-primary)] hover:border-[var(--trishanti-color-primary)] group"
                style={{ transition: `all var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}
                aria-label="Follow Trishanti on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-[var(--trishanti-radius-full)] border border-white/10 text-white/70 hover:text-[var(--trishanti-color-primary)] hover:border-[var(--trishanti-color-primary)] group"
                style={{ transition: `all var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}
                aria-label="Follow Trishanti on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-[var(--trishanti-radius-full)] border border-white/10 text-white/70 hover:text-[var(--trishanti-color-primary)] hover:border-[var(--trishanti-color-primary)] group"
                style={{ transition: `all var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}
                aria-label="Watch Trishanti on YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-[var(--trishanti-radius-full)] border border-white/10 text-white/70 hover:text-[var(--trishanti-color-primary)] hover:border-[var(--trishanti-color-primary)] group"
                style={{ transition: `all var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}
                aria-label="Follow Trishanti on X"
              >
                <XIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Our Businesses (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-xs tracking-[0.2em] uppercase mb-5 text-[var(--trishanti-color-primary)]">
              {isId ? "Pilar Bisnis Kami" : "Our Businesses"}
            </h3>
            <ul className="space-y-3" role="list">
              {BUSINESS_PILLARS.map((pillar) => (
                <li key={pillar.id}>
                  <Link
                    href={localePath(`/businesses#${pillar.slug}`)}
                    className="text-[var(--trishanti-color-text-dark-muted)] text-sm hover:text-[var(--trishanti-color-primary)] block"
                    style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}
                  >
                    {isId ? pillar.titleId : pillar.titleEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-xs tracking-[0.2em] uppercase mb-5 text-[var(--trishanti-color-primary)]">
              {isId ? "Perusahaan" : "Company"}
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link href={localePath("/about")} className="text-[var(--trishanti-color-text-dark-muted)] text-sm hover:text-[var(--trishanti-color-primary)]" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                  {isId ? "Tentang Trishanti" : "About Trishanti"}
                </Link>
              </li>
              <li>
                <Link href={localePath("/about/technology")} className="text-[var(--trishanti-color-text-dark-muted)] text-sm hover:text-[var(--trishanti-color-primary)]" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                  {isId ? "Teknologi & Inovasi" : "Technology & Innovation"}
                </Link>
              </li>
              <li>
                <Link href={localePath("/sustainability")} className="text-[var(--trishanti-color-text-dark-muted)] text-sm hover:text-[var(--trishanti-color-primary)]" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                  {isId ? "Keberlanjutan" : "Sustainability"}
                </Link>
              </li>
              <li>
                <Link href={localePath("/news")} className="text-[var(--trishanti-color-text-dark-muted)] text-sm hover:text-[var(--trishanti-color-primary)]" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                  {isId ? "Berita & Wawasan" : "News & Insights"}
                </Link>
              </li>
              <li>
                <Link href={localePath("/careers")} className="text-[var(--trishanti-color-text-dark-muted)] text-sm hover:text-[var(--trishanti-color-primary)]" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                  {isId ? "Karir" : "Careers"}
                </Link>
              </li>
              <li>
                <Link href={localePath("/contact")} className="text-[var(--trishanti-color-text-dark-muted)] text-sm hover:text-[var(--trishanti-color-primary)]" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                  {isId ? "Hubungi Kami" : "Contact Us"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Legal (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-xs tracking-[0.2em] uppercase mb-5 text-[var(--trishanti-color-primary)]">
              {isId ? "Legal" : "Legal"}
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link href={localePath("/privacy-policy")} className="text-[var(--trishanti-color-text-dark-muted)] text-sm hover:text-[var(--trishanti-color-primary)]" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                  {isId ? "Kebijakan Privasi" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link href={localePath("/terms")} className="text-[var(--trishanti-color-text-dark-muted)] text-sm hover:text-[var(--trishanti-color-primary)]" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                  {isId ? "Syarat & Ketentuan" : "Terms of Service"}
                </Link>
              </li>
              <li>
                <Link href={localePath("/cookie-policy")} className="text-[var(--trishanti-color-text-dark-muted)] text-sm hover:text-[var(--trishanti-color-primary)]" style={{ transition: `color var(--trishanti-duration-fast) var(--trishanti-ease-standard)` }}>
                  {isId ? "Kebijakan Cookie" : "Cookie Policy"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--trishanti-color-text-dark-muted)]">
          <p className="tracking-wide">
            © 2024 PT. Trishanti Sinergi Indocorp. All rights reserved.
          </p>
          <p className="text-white/60 tracking-[0.2em] uppercase text-[11px]">
            A BRIGHTER TOMORROW, TOGETHER
          </p>
        </div>
      </div>
    </footer>
  );
}
