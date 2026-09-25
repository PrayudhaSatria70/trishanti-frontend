"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log unexpected runtime error safely without exposing confidential telemetry
    console.error("Trishanti Application Error:", error);
  }, [error]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#071A22] text-white overflow-hidden">
      {/* Background Architectural Mist & Bridge (Board A.5.15 Item 13) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-hd.jpg"
          alt="Architectural atmosphere"
          fill
          priority
          className="object-cover object-center opacity-25 mix-blend-luminosity"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A22] via-[#071A22]/85 to-transparent" />
      </div>

      <PageContainer size="narrow" className="relative z-10 text-center px-4 py-24">
        {/* Large Serif 500 Display */}
        <h1 className="text-7xl sm:text-9xl font-heading font-bold text-white tracking-tight mb-4 select-none">
          500
        </h1>

        {/* Board Headline & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-heading font-medium text-white mb-2 leading-snug">
          Something went wrong on our side.
        </h2>
        <p className="text-base text-[#DEE3E1] mb-8 font-light max-w-md mx-auto">
          Our team has been notified. Please try again later.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium border border-white/20 transition-all text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/en"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#00A6A6] text-white font-medium hover:bg-[#008f8f] transition-all duration-200 shadow-md hover:shadow-lg text-sm"
          >
            <span>Return Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </PageContainer>
    </div>
  );
}
