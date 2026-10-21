"use client";

import { useEffect } from "react";
import { CheckCircle2, Info, AlertTriangle, AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/cn";

/* =========================================================================
   TRISHANTI DESIGN SYSTEM — TOAST / NOTIFICATION (Image 1, Item 08)
   - 4 Semantic states: Success, Info, Warning, Error
   - Layering: z-toast: 70
   - Behaviors: Auto-dismiss (4000ms), manual close 'x', accessible announcement
   ========================================================================= */

export type ToastType = "success" | "info" | "warning" | "error";

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  message?: string | undefined;
  duration?: number | undefined;
}

interface ToastProps {
  toast: ToastItem;
  onDismiss: (id: string) => void;
}

const TOAST_ICONS = {
  success: CheckCircle2,
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
};

const TOAST_STYLES: Record<
  ToastType,
  {
    container: string;
    iconColor: string;
    borderColor: string;
  }
> = {
  success: {
    container: "bg-[#071A22]/95 border-[#16A34A]/40 text-white shadow-[0_8px_30px_rgba(22,163,74,0.15)]",
    iconColor: "text-[#16A34A]",
    borderColor: "border-[#16A34A]",
  },
  info: {
    container: "bg-[#071A22]/95 border-[#2563EB]/40 text-white shadow-[0_8px_30px_rgba(37,99,235,0.15)]",
    iconColor: "text-[#2563EB]",
    borderColor: "border-[#2563EB]",
  },
  warning: {
    container: "bg-[#071A22]/95 border-[#F59E0B]/40 text-white shadow-[0_8px_30px_rgba(245,158,11,0.15)]",
    iconColor: "text-[#F59E0B]",
    borderColor: "border-[#F59E0B]",
  },
  error: {
    container: "bg-[#071A22]/95 border-[#DC2626]/40 text-white shadow-[0_8px_30px_rgba(220,38,38,0.15)]",
    iconColor: "text-[#DC2626]",
    borderColor: "border-[#DC2626]",
  },
};

export function Toast({ toast, onDismiss }: ToastProps) {
  const { id, type, title, message, duration = 4000 } = toast;
  const IconComponent = TOAST_ICONS[type];
  const style = TOAST_STYLES[type];

  useEffect(() => {
    if (duration <= 0) {
      return;
    }
    const timer = setTimeout(() => {
      onDismiss(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [id, duration, onDismiss]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-start gap-3.5 p-4 rounded-xl border backdrop-blur-xl shadow-xl transition-all duration-[var(--trishanti-duration-normal)] ease-[var(--trishanti-ease-standard)] w-full max-w-sm pointer-events-auto",
        style.container,
      )}
    >
      <div className={cn("shrink-0 mt-0.5", style.iconColor)}>
        <IconComponent className="w-5 h-5" aria-hidden="true" />
      </div>

      <div className="flex-1 min-w-0 pr-1">
        <h5 className="text-xs font-semibold leading-snug">{title}</h5>
        {message && (
          <p className="text-[11px] text-[#94a3b8] mt-0.5 leading-relaxed">{message}</p>
        )}
      </div>

      <button
        type="button"
        onClick={() => onDismiss(id)}
        aria-label="Dismiss notification"
        className="shrink-0 p-1 text-white/50 hover:text-white rounded-md transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

/* =========================================================================
   TOAST CONTAINER / CONTEXT HOOK
   ========================================================================= */

interface ToastContainerProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  if (toasts.length === 0) {
    return null;
  }

  return (
    <div
      className="fixed bottom-[calc(var(--trishanti-bottom-nav-offset)+1rem)] right-4 sm:right-6 lg:bottom-6 flex flex-col gap-2.5 z-[var(--trishanti-z-toast)] pointer-events-none"
      aria-label="Notifications"
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
}
