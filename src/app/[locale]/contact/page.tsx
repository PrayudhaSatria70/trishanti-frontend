import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, Globe } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import ContactForm from "@/components/composite/ContactForm";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const isId = locale === "id";

  const tContact = await getTranslations({ locale, namespace: "contact" });

  return (
    <div className="flex flex-col w-full transition-colors duration-300">
      {/* Editorial Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/businesses/infrastructure-hero.jpg"
            alt="Trishanti Corporate Office"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--trishanti-color-surface-light)] dark:from-[var(--trishanti-color-bg-dark)] via-[var(--trishanti-color-surface-light)]/90 dark:via-[var(--trishanti-color-bg-dark)]/90 to-[var(--trishanti-color-surface-light)]/70 dark:to-[var(--trishanti-color-bg-dark)]/70 transition-colors duration-300" />
        </div>

        <PageContainer className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4">
              {tContact("hero.eyebrow")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-[var(--trishanti-neutral-900)] dark:text-white mb-6 leading-tight transition-colors">
              {tContact("hero.headline")}
            </h1>
            <p className="text-lg sm:text-xl text-[var(--trishanti-neutral-700)] dark:text-[#DEE3E1] leading-relaxed font-light transition-colors">
              {tContact("hero.body")}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Main Content: 2-column Layout */}
      <SectionWrapper variant="neutral600">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">
                {isId ? "Kirimkan Pesan atau Pertanyaan" : "Send Us a Message"}
              </h2>
              <p className="text-sm text-white/80 mb-8 font-light">
                {isId
                  ? "Tim hubungan korporat kami akan merespons pertanyaan Anda dalam 1-2 hari kerja."
                  : "Our corporate communications team will respond to your inquiry within 1–2 business days."}
              </p>

              <ContactForm />
            </div>

            {/* Office Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-2xl space-y-6 shadow-xl glass-panel">
                <h3 className="text-xl font-heading font-bold text-white">
                  {isId ? "Kantor Pusat" : "Headquarters"}
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-md bg-[#00A6A6]/15 text-[#00A6A6] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        PT. Trishanti Sinergi Indocorp
                      </div>
                      <div className="text-white/80 dark:text-[#DEE3E1] text-xs leading-relaxed mt-1">
                        Sudirman Central Business District (SCBD)
                        <br />
                        Jakarta Selatan 12190, Indonesia
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-md bg-[#00A6A6]/15 text-[#00A6A6] shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {isId ? "Surat Elektronik" : "Electronic Mail"}
                      </div>
                      <div className="text-[#00A6A6] text-xs mt-1 font-mono">
                        corporate@trishanti.id
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-md bg-[#00A6A6]/15 text-[#00A6A6] shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {isId ? "Telepon Kantor" : "Telephone"}
                      </div>
                      <div className="text-white/80 dark:text-[#DEE3E1] text-xs mt-1 font-mono">
                        +62 (21) 5088-2900
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-md bg-[#00A6A6]/15 text-[#00A6A6] shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {isId ? "Jam Operasional" : "Operating Hours"}
                      </div>
                      <div className="text-white/80 dark:text-[#DEE3E1] text-xs mt-1">
                        {isId
                          ? "Senin – Jumat: 09.00 – 17.00 WIB"
                          : "Monday – Friday: 09:00 – 17:00 WIB"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Institutional Notice */}
              <div className="p-6 rounded-2xl shadow-lg glass-panel">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#00A6A6] uppercase tracking-wider mb-2">
                  <Globe className="w-4 h-4" />
                  <span>{isId ? "Hubungan Investor & Media" : "Investor & Media Inquiries"}</span>
                </div>
                <p className="text-xs text-white/80 dark:text-[#DEE3E1] leading-relaxed">
                  {isId
                    ? "Untuk pengajuan wawancara media atau dokumen keterbukaan informasi korporasi, silakan cantumkan referensi pada subjek pesan."
                    : "For formal press inquiries or institutional documentation requests, please specify 'IR / Media' in the subject line."}
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
