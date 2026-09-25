"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function VideoModal({ isOpen, onClose, title = "Trishanti Corporate Overview" }: VideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {return;}

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {onClose();}
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {return null;}

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#071A22] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A6A6] animate-pulse" />
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">{title}</h3>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00A6A6]"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {/* Working high quality ambient corporate loop or video fallback */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/LXb3EKWsInQ?autoplay=1&controls=1&rel=0&modestbranding=1"
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#0b1120] text-xs text-[#94a3b8] flex items-center justify-between border-t border-white/10">
          <span>PT. Trishanti Sinergi Indocorp — A Brighter Tomorrow, Together.</span>
          <span className="text-[#00A6A6] font-medium">1080p Full HD</span>
        </div>
      </div>
    </div>
  );
}
