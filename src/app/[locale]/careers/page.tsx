import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Compass,
  GraduationCap,
} from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface CareersPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CareersPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "careers" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function CareersPage({ params }: CareersPageProps) {
  const { locale } = await params;
  const isId = locale === "id";

  const tCareers = await getTranslations({ locale, namespace: "careers" });

  const getPath = (path: string) =>
    `/${locale}${path === "/" ? "" : path}`;


  const POSITIONS = [
    {
      id: "corporate-finance-manager",
      titleEn: "Corporate Finance & Treasury Manager",
      titleId: "Manajer Keuangan Korporasi & Perbendaharaan",
      departmentEn: "Finance & Strategy",
      departmentId: "Keuangan & Strategi",
      location: "Jakarta Headquarters",
      typeEn: "Full-time · On-site",
      typeId: "Penuh Waktu · Di Kantor",
      descEn:
        "Lead financial modeling, capital budgeting, and banking relationship management for multi-sector growth projects.",
      descId:
        "Memimpin pemodelan keuangan, penganggaran modal, dan hubungan perbankan untuk proyek ekspansi multi-sektor.",
    },
    {
      id: "senior-cloud-infrastructure-architect",
      titleEn: "Senior Cloud Infrastructure Architect",
      titleId: "Arsitek Infrastruktur Cloud Senior",
      departmentEn: "Technology & Innovation",
      departmentId: "Teknologi & Inovasi",
      location: "Jakarta (Hybrid)",
      typeEn: "Full-time · Hybrid",
      typeId: "Penuh Waktu · Hibrida",
      descEn:
        "Design mission-critical cloud pipelines, microservices security, and enterprise telemetry monitoring across our digital divisions.",
      descId:
        "Merancang arsitektur cloud misi-kritis, keamanan layanan mikro, dan telemetri korporasi di lini digital kami.",
    },
    {
      id: "lead-environmental-compliance-officer",
      titleEn: "Lead Environmental & ESG Compliance Officer",
      titleId: "Petugas Kepatuhan Lingkungan & ESG Utama",
      departmentEn: "Sustainability Directorate",
      departmentId: "Direktorat Keberlanjutan",
      location: "Jakarta / Regional Sites",
      typeEn: "Full-time · Field & Office",
      typeId: "Penuh Waktu · Lapangan & Kantor",
      descEn:
        "Oversee AMDAL environmental monitoring, carbon accounting protocols, and local community engagement audits.",
      descId:
        "Mengawasi pemantauan lingkungan AMDAL, protokol penghitungan emisi karbon, dan audit kemitraan masyarakat lokal.",
    },
    {
      id: "supply-chain-logistics-specialist",
      titleEn: "Industrial Supply Chain & Logistics Specialist",
      titleId: "Spesialis Rantai Pasok & Logistik Industri",
      departmentEn: "Energy & Infrastructure",
      departmentId: "Energi & Infrastruktur",
      location: "Surabaya / Regional Hubs",
      typeEn: "Full-time · On-site",
      typeId: "Penuh Waktu · Di Lokasi",
      descEn:
        "Manage inter-island freight operations, inventory warehousing throughput, and third-party logistics vendor compliance.",
      descId:
        "Mengelola operasi pengiriman antarpulau, kapasitas pergudangan persediaan, dan kepatuhan vendor logistik.",
    },
  ];

  const CULTURE_PILLARS = [
    {
      icon: Compass,
      titleEn: "Autonomous Ownership",
      titleId: "Kepemilikan Mandiri",
      descEn:
        "We empower leaders at every level to make principled, data-informed decisions with high accountability.",
      descId:
        "Kami memberdayakan setiap talenta untuk mengambil keputusan yang berprinsip, berbasis data, dan bertanggung jawab.",
    },
    {
      icon: GraduationCap,
      titleEn: "Continuous Mastery",
      titleId: "Pengembangan Berkelanjutan",
      descEn:
        "Subsidized executive education, technical certifications, and structured rotation across operating sectors.",
      descId:
        "Dukungan sertifikasi profesional, pelatihan kepemimpinan, dan rotasi terarah di berbagai sektor usaha.",
    },
    {
      icon: Users,
      titleEn: "Inclusive Meritocracy",
      titleId: "Meritokrasi Inklusif",
      descEn:
        "Performance, character, and dedication are recognized and rewarded without internal bureaucracy.",
      descId:
        "Kinerja nyata, integritas, dan dedikasi diapresiasi secara transparan tanpa hambatan birokrasi.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#0b1120] text-white">
      {/* Editorial Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden border-b border-[#1e293b]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/our-culture.jpg"
            alt="Trishanti Careers & People"
            fill
            priority
            className="object-cover object-center opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/90 to-[#0b1120]/70" />
        </div>

        <PageContainer className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4">
              {tCareers("hero.eyebrow")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-6 leading-tight">
              {tCareers("hero.headline")}
            </h1>
            <p className="text-lg sm:text-xl text-[#94a3b8] leading-relaxed font-light">
              {tCareers("hero.body")}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Culture Pillars */}
      <SectionWrapper variant="midnight">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="accent" className="mb-3">
              {isId ? "Budaya Kerja" : "Our Culture"}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              {isId
                ? "Tumbuh Bersama Komunitas Profesional Berdedikasi"
                : "Grow Alongside Purpose-Driven Professionals"}
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8]">
              {isId
                ? "Kami membangun lingkungan kerja yang mengutamakan integritas, kejelasan arah, dan saling mendukung."
                : "We foster an environment of high autonomy, intellectual rigor, and collective progress."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CULTURE_PILLARS.map((cult, idx) => {
              const Icon = cult.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#111827] border border-[#1e293b] hover:border-[#06b6d4]/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white mb-3">
                    {isId ? cult.titleId : cult.titleEn}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {isId ? cult.descId : cult.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Open Positions List */}
      <SectionWrapper variant="dark" className="border-y border-[#1e293b]">
        <PageContainer>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Badge variant="accent" className="mb-3">
                {isId ? "Peluang Karir" : "Opportunities"}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {tCareers("openPositions")}
              </h2>
            </div>
            <p className="text-sm text-[#94a3b8]">
              {isId
                ? "Posisi terbuka di berbagai sektor operasional dan holding korporasi."
                : "Active openings across operational divisions and corporate holding."}
            </p>
          </div>

          <div className="space-y-4">
            {POSITIONS.map((pos) => (
              <div
                key={pos.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#111827] border border-[#1e293b] hover:border-[#06b6d4]/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="accent" size="sm">
                      {isId ? pos.departmentId : pos.departmentEn}
                    </Badge>
                    <span className="text-xs text-[#64748b] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {pos.location}
                    </span>
                    <span className="text-xs text-[#64748b] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {isId ? pos.typeId : pos.typeEn}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#06b6d4] transition-colors">
                    {isId ? pos.titleId : pos.titleEn}
                  </h3>

                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {isId ? pos.descId : pos.descEn}
                  </p>
                </div>

                <div className="shrink-0">
                  <Link href={getPath("/contact")}>
                    <Button
                      variant="primary"
                      size="sm"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      {tCareers("apply")}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* General Inquiries */}
          <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
            <h3 className="text-lg font-bold text-white mb-2">
              {isId
                ? "Tidak menemukan posisi yang sesuai?"
                : "Don't See an Exact Match for Your Background?"}
            </h3>
            <p className="text-sm text-[#94a3b8] max-w-lg mx-auto mb-6">
              {isId
                ? "Kami selalu mencari talenta berintegritas tinggi. Kirimkan CV dan profil Anda ke direktorat sumber daya manusia kami."
                : "We are always keen to connect with disciplined, ambitious professionals. Submit your portfolio to our talent acquisition team."}
            </p>
            <Link href={getPath("/contact")}>
              <Button variant="outline" size="sm">
                {isId ? "Kirim Lamaran Umum" : "Submit Open Application"}
              </Button>
            </Link>
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
