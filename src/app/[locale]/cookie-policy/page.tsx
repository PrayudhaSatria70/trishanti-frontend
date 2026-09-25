import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Cookie Policy" };

export default async function CookiePolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isId = locale === "id";

  return (
    <article className="bg-[var(--trishanti-neutral-50)] dark:bg-[var(--trishanti-color-bg-dark)] pt-36 pb-24 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <p className="text-eyebrow mb-4">LEGAL</p>
        <h1 className="font-heading text-4xl sm:text-5xl text-[var(--trishanti-neutral-900)] dark:text-white leading-tight transition-colors">{isId ? "Kebijakan Cookie" : "Cookie Policy"}</h1>
        <div className="mt-8 space-y-8 text-[var(--trishanti-neutral-700)] dark:text-white/70 leading-relaxed transition-colors">
          <p>{isId ? "Situs ini dapat menggunakan cookie dan teknologi serupa untuk menjaga fungsi dasar, memahami penggunaan, dan meningkatkan pengalaman pengunjung." : "This website may use cookies and similar technologies to maintain core functionality, understand usage, and improve the visitor experience."}</p>
          <section><h2 className="font-heading text-2xl text-[var(--trishanti-neutral-900)] dark:text-white mb-2 transition-colors">{isId ? "Apa itu cookie?" : "What are cookies?"}</h2><p>{isId ? "Cookie adalah file teks kecil yang disimpan browser untuk membantu sebuah situs mengingat informasi tertentu." : "Cookies are small text files stored by a browser to help a website remember certain information."}</p></section>
          <section><h2 className="font-heading text-2xl text-[var(--trishanti-neutral-900)] dark:text-white mb-2 transition-colors">{isId ? "Pilihan Anda" : "Your choices"}</h2><p>{isId ? "Anda dapat mengelola atau menghapus cookie melalui pengaturan browser Anda." : "You can manage or delete cookies through your browser settings."}</p></section>
        </div>
        <Link href={`/${locale}/contact`} className="inline-flex mt-12 text-[var(--trishanti-color-primary)] font-semibold hover:text-[var(--trishanti-color-primary-dark)]">{isId ? "Hubungi Kami" : "Contact Us"} →</Link>
      </div>
    </article>
  );
}
