import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#071A22] text-white overflow-hidden">
      {/* Background Architectural Skyline (Matching Board A.5.15 Item 12) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-hd.jpg"
          alt="Architectural city landscape"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A22] via-[#071A22]/80 to-transparent" />
      </div>

      <PageContainer size="narrow" className="relative z-10 text-center px-4 py-24">
        {/* Large Serif 404 Display */}
        <h1 className="text-7xl sm:text-9xl font-serif font-bold text-white tracking-tight mb-4 select-none">
          404
        </h1>

        {/* Board Headline & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white mb-2 leading-snug">
          This path leads somewhere we haven&apos;t built yet.
        </h2>
        <p className="text-base text-[#A6ADAA] mb-8 font-light">
          Let&apos;s help you find your way back.
        </p>

        {/* Primary Cyan Pill CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/en"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00A6A6] text-white font-medium hover:bg-[#008f8f] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>Return Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Secondary Link from Board */}
        <div className="mt-6">
          <Link
            href="/en/businesses"
            className="text-xs uppercase tracking-wider text-[#A6ADAA] hover:text-[#00A6A6] transition-colors"
          >
            Explore Our Businesses
          </Link>
        </div>
      </PageContainer>
    </div>
  );
}
