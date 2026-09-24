import type { Metadata } from "next";

/**
 * Root document layout — minimal, locale-agnostic.
 * The actual <html lang> is set in the [locale]/layout.tsx.
 * This file only provides the outermost document shell.
 */
export const metadata: Metadata = {
  title: {
    template: "%s | Trishanti",
    default: "Trishanti — A Brighter Tomorrow, Together.",
  },
  description:
    "PT. Trishanti Sinergi Indocorp — A diversified Indonesian enterprise building a brighter tomorrow.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://trishanti.id",
  ),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
