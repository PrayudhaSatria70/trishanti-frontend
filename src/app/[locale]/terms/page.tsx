import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms of Service" };

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isId = locale === "id";

  return (
    <article className="bg-[var(--trishanti-neutral-50)] pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <p className="text-eyebrow mb-4">LEGAL</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[var(--trishanti-neutral-900)] leading-tight">{isId ? "Syarat & Ketentuan" : "Terms of Service"}</h1>
        <div className="mt-8 space-y-8 text-[var(--trishanti-neutral-700)] leading-relaxed">
          <p>{isId ? "Dengan menggunakan situs ini, Anda menyetujui penggunaan informasi dan materi situs untuk tujuan yang sah dan sesuai dengan ketentuan ini." : "By using this website, you agree to use its information and materials lawfully and in accordance with these terms."}</p>
          <section><h2 className="font-serif text-2xl text-[var(--trishanti-neutral-900)] mb-2">{isId ? "Konten situs" : "Website content"}</h2><p>{isId ? "Seluruh konten disediakan sebagai informasi umum mengenai Trishanti dan dapat diperbarui tanpa pemberitahuan sebelumnya." : "All content is provided as general information about Trishanti and may be updated without prior notice."}</p></section>
          <section><h2 className="font-serif text-2xl text-[var(--trishanti-neutral-900)] mb-2">{isId ? "Penggunaan yang wajar" : "Acceptable use"}</h2><p>{isId ? "Anda tidak boleh menggunakan situs ini dengan cara yang merusak, mengganggu, atau melanggar hak pihak lain." : "You must not use this website in a way that harms, disrupts, or infringes the rights of others."}</p></section>
        </div>
        <Link href={`/${locale}/contact`} className="inline-flex mt-12 text-[var(--trishanti-color-primary)] font-semibold hover:text-[var(--trishanti-color-primary-dark)]">{isId ? "Hubungi Kami" : "Contact Us"} →</Link>
      </div>
    </article>
  );
}
