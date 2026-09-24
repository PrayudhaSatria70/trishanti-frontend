import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Cookie Policy" };

export default async function CookiePolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isId = locale === "id";

  return (
    <article className="bg-[var(--trishanti-neutral-50)] pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <p className="text-eyebrow mb-4">LEGAL</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[var(--trishanti-neutral-900)] leading-tight">{isId ? "Kebijakan Cookie" : "Cookie Policy"}</h1>
        <div className="mt-8 space-y-8 text-[var(--trishanti-neutral-700)] leading-relaxed">
          <p>{isId ? "Situs ini dapat menggunakan cookie dan teknologi serupa untuk menjaga fungsi dasar, memahami penggunaan, dan meningkatkan pengalaman pengunjung." : "This website may use cookies and similar technologies to maintain core functionality, understand usage, and improve the visitor experience."}</p>
          <section><h2 className="font-serif text-2xl text-[var(--trishanti-neutral-900)] mb-2">{isId ? "Apa itu cookie?" : "What are cookies?"}</h2><p>{isId ? "Cookie adalah file teks kecil yang disimpan browser untuk membantu sebuah situs mengingat informasi tertentu." : "Cookies are small text files stored by a browser to help a website remember certain information."}</p></section>
          <section><h2 className="font-serif text-2xl text-[var(--trishanti-neutral-900)] mb-2">{isId ? "Pilihan Anda" : "Your choices"}</h2><p>{isId ? "Anda dapat mengelola atau menghapus cookie melalui pengaturan browser Anda." : "You can manage or delete cookies through your browser settings."}</p></section>
        </div>
        <Link href={`/${locale}/contact`} className="inline-flex mt-12 text-[var(--trishanti-color-primary)] font-semibold hover:text-[var(--trishanti-color-primary-dark)]">{isId ? "Hubungi Kami" : "Contact Us"} →</Link>
      </div>
    </article>
  );
}
