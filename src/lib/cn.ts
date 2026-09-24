import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — Utility to merge Tailwind CSS classes safely.
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 * SonarQube: explicit types, no any.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
