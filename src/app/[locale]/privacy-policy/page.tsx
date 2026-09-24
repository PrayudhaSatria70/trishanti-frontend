import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy Policy" };

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isId = locale === "id";

  return (
    <article className="bg-[var(--trishanti-neutral-50)] pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <p className="text-eyebrow mb-4">{isId ? "LEGAL" : "LEGAL"}</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[var(--trishanti-neutral-900)] leading-tight">
          {isId ? "Kebijakan Privasi" : "Privacy Policy"}
        </h1>
        <p className="mt-6 text-[var(--trishanti-neutral-600)] leading-relaxed">
          {isId
            ? "Kami menghormati privasi Anda. Kebijakan ini menjelaskan cara Trishanti mengumpulkan, menggunakan, dan melindungi informasi yang diberikan melalui situs ini."
            : "We respect your privacy. This policy explains how Trishanti collects, uses, and safeguards information you provide through this website."}
        </p>
        <section className="mt-12 space-y-8 text-[var(--trishanti-neutral-700)] leading-relaxed">
          <div><h2 className="font-serif text-2xl text-[var(--trishanti-neutral-900)] mb-2">{isId ? "Informasi yang kami kumpulkan" : "Information we collect"}</h2><p>{isId ? "Kami hanya mengumpulkan informasi yang Anda kirimkan melalui formulir kontak atau kanal komunikasi lain di situs ini." : "We only collect information that you voluntarily submit through contact forms or other communication channels on this website."}</p></div>
          <div><h2 className="font-serif text-2xl text-[var(--trishanti-neutral-900)] mb-2">{isId ? "Cara kami menggunakan informasi" : "How we use information"}</h2><p>{isId ? "Informasi digunakan untuk menanggapi pertanyaan, mengevaluasi peluang kerja sama, dan meningkatkan pengalaman digital kami." : "Information is used to respond to enquiries, assess collaboration opportunities, and improve our digital experience."}</p></div>
          <div><h2 className="font-serif text-2xl text-[var(--trishanti-neutral-900)] mb-2">{isId ? "Hubungi kami" : "Contact us"}</h2><p>{isId ? "Untuk pertanyaan terkait privasi, silakan hubungi tim Trishanti." : "For privacy-related questions, please contact the Trishanti team."}</p></div>
        </section>
        <Link href={`/${locale}/contact`} className="inline-flex mt-12 text-[var(--trishanti-color-primary)] font-semibold hover:text-[var(--trishanti-color-primary-dark)]">{isId ? "Hubungi Kami" : "Contact Us"} →</Link>
      </div>
    </article>
  );
}
