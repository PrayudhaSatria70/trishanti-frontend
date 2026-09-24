"use client";

import React, { useEffect, useRef } from "react";
import { X, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";

/* =========================================================================
   TRISHANTI DESIGN SYSTEM — MODAL & OVERLAY SYSTEM (Image 1)
   - 01 Modal / Dialog (Light Mode): Frosted glass surface, subtle blur, clear hierarchy
   - 02 Modal / Dialog (Dark Mode): Tonal dark surface, subtle gradient, accent focus
   - 11 Layering System: z-modal: 60
   - 12 Backdrop:
     * Light: rgba(20, 30, 28, 0.18) + blur
     * Dark: rgba(4, 14, 18, 0.65) + subtle blur
   - 13 Interaction Behavior:
     * Escape closes (Yes)
     * Click outside (Yes)
     * Focus trap (Yes)
     * Scroll lock (Yes)
     * Close button (Yes)
   ========================================================================= */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: "light" | "dark";
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export function Modal({
  isOpen,
  onClose,
  theme = "light",
  title,
  subtitle,
  eyebrow,
  children,
  className,
  maxWidth = "md",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const isLight = theme === "light";

  // Escape key and scroll lock
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    // Focus trap: focus modal on open
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable && focusable.length > 0) {
      focusable[0]?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const maxWidthClass = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  }[maxWidth];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-[var(--trishanti-z-modal)] animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 transition-opacity",
          isLight ? "backdrop-overlay-light" : "backdrop-overlay-dark",
        )}
        aria-hidden="true"
      />

      {/* Modal Dialog Surface */}
      <div
        ref={modalRef}
        className={cn(
          "relative w-full rounded-2xl p-6 sm:p-8 transition-all shadow-2xl z-10 overflow-hidden",
          maxWidthClass,
          isLight
            ? "bg-white/85 backdrop-blur-2xl border border-white/60 text-[#071A22] shadow-[0_20px_50px_rgba(23,28,27,0.18)]"
            : "bg-[#071A22]/95 backdrop-blur-2xl border border-[#00A6A6]/20 text-white shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(0,166,166,0.15)]",
          className,
        )}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className={cn(
            "absolute top-5 right-5 p-2 rounded-full transition-colors",
            isLight
              ? "text-[#7C8581] hover:text-[#071A22] hover:bg-black/5"
              : "text-white/60 hover:text-white hover:bg-white/10",
          )}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        {(eyebrow || title || subtitle) && (
          <div className="mb-6 pr-8">
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00A6A6] block mb-2">
                — {eyebrow}
              </span>
            )}
            {title && (
              <h3
                id="modal-title"
                className={cn(
                  "text-2xl sm:text-3xl font-serif font-bold tracking-tight",
                  isLight ? "text-[#071A22]" : "text-white",
                )}
              >
                {title}
              </h3>
            )}
            {subtitle && (
              <p
                className={cn(
                  "text-sm mt-2 leading-relaxed font-light",
                  isLight ? "text-[#5E6663]" : "text-[#94a3b8]",
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        {children}
      </div>
    </div>
  );
}

/* =========================================================================
   01 MODAL / DIALOG (LIGHT MODE) — "Let's start a conversation"
   ========================================================================= */

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: () => void;
}

export function ContactModal({ isOpen, onClose, onSubmitSuccess }: ContactModalProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSent, setIsSent] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setName("");
      setEmail("");
      setMessage("");
      onSubmitSuccess?.();
      onClose();
    }, 1200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      theme="light"
      eyebrow="Get In Touch"
      title="Let's start a conversation."
      subtitle="We're always open to new opportunities and collaborations."
      maxWidth="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name input */}
        <div className="relative">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg bg-white/60 border border-[#E1E4E2] text-sm text-[#071A22] placeholder-[#7C8581] focus:border-[#00A6A6] focus:ring-1 focus:ring-[#00A6A6] outline-none transition-all"
          />
        </div>

        {/* Email input */}
        <div className="relative">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-lg bg-white/60 border border-[#E1E4E2] text-sm text-[#071A22] placeholder-[#7C8581] focus:border-[#00A6A6] focus:ring-1 focus:ring-[#00A6A6] outline-none transition-all"
          />
        </div>

        {/* Message textarea with character counter */}
        <div className="relative">
          <textarea
            required
            maxLength={500}
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help you?"
            className="w-full px-4 py-3 pb-7 rounded-lg bg-white/60 border border-[#E1E4E2] text-sm text-[#071A22] placeholder-[#7C8581] focus:border-[#00A6A6] focus:ring-1 focus:ring-[#00A6A6] outline-none transition-all resize-none"
          />
          <span className="absolute bottom-2 right-3 text-[11px] text-[#7C8581]">
            {message.length}/500
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#5E6663] hover:text-[#071A22] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSent}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00A6A6] hover:bg-[#008f8f] text-white text-xs font-semibold shadow-md transition-all"
          >
            <span>{isSent ? "Sent!" : "Send Message"}</span>
            {isSent ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Partner trust watermark strip */}
        <div className="pt-6 border-t border-black/5 mt-4">
          <p className="text-[11px] text-[#7C8581] uppercase tracking-wider text-center mb-3">
            Trusted by partners across the region
          </p>
          <div className="flex items-center justify-center gap-6 opacity-40 grayscale">
            <span className="text-xs font-bold tracking-widest text-[#071A22]">ASTRA</span>
            <span className="text-xs font-bold tracking-widest text-[#071A22]">BCA</span>
            <span className="text-xs font-bold tracking-widest text-[#071A22]">INDORAMA</span>
            <span className="text-xs font-bold tracking-widest text-[#071A22]">MEDCO</span>
          </div>
        </div>
      </form>
    </Modal>
  );
}

/* =========================================================================
   02 MODAL / DIALOG (DARK MODE) — "Stay informed with Trishanti"
   ========================================================================= */

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribeSuccess?: () => void;
}

export function NewsletterModal({
  isOpen,
  onClose,
  onSubscribeSuccess,
}: NewsletterModalProps) {
  const [email, setEmail] = React.useState("");
  const [agreed, setAgreed] = React.useState(false);
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      return;
    }
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
      onSubscribeSuccess?.();
      onClose();
    }, 1200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      theme="dark"
      eyebrow="Newsletter"
      title="Stay informed with Trishanti."
      subtitle="Get the latest updates on our initiatives, insights, and stories."
      maxWidth="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email input */}
        <div className="relative">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-lg bg-[#0d222c] border border-white/15 text-sm text-white placeholder-[#7C8581] focus:border-[#00A6A6] focus:ring-1 focus:ring-[#00A6A6] outline-none transition-all"
          />
        </div>

        {/* Checkbox agreement */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            required
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-white/20 bg-[#0d222c] text-[#00A6A6] focus:ring-[#00A6A6] cursor-pointer"
          />
          <span className="text-xs text-[#94a3b8] leading-relaxed group-hover:text-white transition-colors">
            I agree to receive updates, insights, and announcements from Trishanti.
          </span>
        </label>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#94a3b8] hover:text-white transition-colors"
          >
            No, thanks
          </button>
          <button
            type="submit"
            disabled={!agreed || isSubscribed}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00A6A6] hover:bg-[#008f8f] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-semibold shadow-[0_4px_16px_rgba(0,166,166,0.35)] transition-all"
          >
            <span>{isSubscribed ? "Subscribed!" : "Subscribe"}</span>
            {isSubscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </button>
        </div>
      </form>
    </Modal>
  );
}
