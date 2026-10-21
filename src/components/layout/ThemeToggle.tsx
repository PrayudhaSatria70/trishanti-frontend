"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLocale } from "next-intl";
import { cn } from "@/lib/cn";

export function ThemeToggle({ isScrolled = false }: { isScrolled?: boolean }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();
  const isId = locale === "id";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="touch-target-min rounded-full" aria-hidden="true" />;
  }

  const toggleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center touch-target-min rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--trishanti-color-primary)] active:scale-95",
        isScrolled
          ? "text-white/80 hover:text-white hover:bg-white/10"
          : "text-[var(--trishanti-neutral-700)] hover:text-[var(--trishanti-neutral-900)] hover:bg-black/5 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10"
      )}
      aria-label={isId ? "Ganti Tema" : "Toggle Theme"}
      title={isId ? "Ganti Tema" : "Toggle Theme"}
    >
      {resolvedTheme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
