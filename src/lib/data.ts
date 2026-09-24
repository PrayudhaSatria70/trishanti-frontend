export interface BusinessPillar {
  id: string;
  slug: string;
  nameKey: string;
  titleEn: string;
  titleId: string;
  displayTitleEn?: string;
  displayTitleId?: string;
  headlineEn?: string;
  headlineId?: string;
  taglineEn?: string;
  taglineId?: string;
  subtitleEn?: string;
  subtitleId?: string;
  summaryEn: string;
  summaryId: string;
  descriptionEn: string;
  descriptionId: string;
  image: string;
  kbliCount: number;
  kbliCodes: string[];
  keyHighlightsEn: string[];
  keyHighlightsId: string[];
  subsectorsEn?: string[];
  subsectorsId?: string[];
}

export interface InsightArticle {
  slug: string;
  category: "Corporate" | "People" | "Sustainability" | "business" | "technology" | "community";
  titleEn: string;
  titleId: string;
  excerptEn: string;
  excerptId: string;
  contentEn: string[];
  contentId: string[];
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
}

export interface LeaderProfile {
  name: string;
  roleEn: string;
  roleId: string;
  bioEn: string;
  bioId: string;
  image: string;
}

export const BUSINESS_PILLARS: BusinessPillar[] = [
  {
    id: "industrial-trading",
    slug: "industrial-trading",
    nameKey: "industrialTrading",
    titleEn: "Industrial Trading",
    titleId: "Perdagangan Industri",
    displayTitleEn: "Resources & Industrial",
    displayTitleId: "Sumber Daya & Industri",
    headlineEn: "Building opportunities across resources and industrial ecosystems.",
    headlineId: "Membangun peluang di seluruh ekosistem sumber daya dan industri.",
    taglineEn: "Powering industries forward",
    taglineId: "Mendorong industri terus maju",
    subtitleEn: "Stronger Industries",
    subtitleId: "Industri yang Lebih Tangguh",
    summaryEn:
      "Powering foundational heavy industry, mineral resources, and essential global supply chains.",
    summaryId:
      "Memperkuat industri berat fundamental, sumber daya mineral, dan rantai pasok global penting.",
    descriptionEn:
      "We supply high-grade raw commodities, metal ores, refined industrial products, and heavy equipment parts to domestic manufacturing and processing plants with absolute supply-chain integrity.",
    descriptionId:
      "Kami memasok komoditas mentah berkualitas tinggi, bijih logam, produk industri olahan, dan suku cadang alat berat untuk manufaktur domestik dengan kepatuhan rantai pasok yang terpercaya.",
    image: "/images/pillars/industrial-trading-hd.jpg",
    kbliCount: 5,
    kbliCodes: ["46610", "46620", "46631", "07101", "07291"],
    keyHighlightsEn: [
      "High-grade metal ores & refined metal products",
      "Industrial fuel & energy commodity supply",
      "Heavy machinery & processing equipment components",
    ],
    keyHighlightsId: [
      "Bijih logam mutu tinggi & produk logam olahan",
      "Pasokan bahan bakar industri & komoditas energi",
      "Komponen mesin berat & peralatan pengolahan industri",
    ],
    subsectorsEn: [
      "Energy Products",
      "Fuel & Petrochemicals",
      "Metal & Minerals",
      "Industrial Trading",
      "Commodities",
    ],
    subsectorsId: [
      "Produk Energi",
      "Bahan Bakar & Petrokimia",
      "Logam & Mineral",
      "Perdagangan Industri",
      "Komoditas",
    ],
  },
  {
    id: "infrastructure",
    slug: "infrastructure",
    nameKey: "infrastructure",
    titleEn: "Infrastructure",
    titleId: "Infrastruktur",
    displayTitleEn: "Infrastructure & Property",
    displayTitleId: "Infrastruktur & Properti",
    headlineEn: "Connecting communities through resilient modern infrastructure.",
    headlineId: "Menghubungkan masyarakat melalui infrastruktur modern dan tangguh.",
    taglineEn: "Building better connections",
    taglineId: "Membangun koneksi yang lebih baik",
    subtitleEn: "Connected Communities",
    subtitleId: "Komunitas yang Terhubung",
    summaryEn:
      "Building resilient transportation networks, maritime assets, and regional connectivity hubs.",
    summaryId:
      "Membangun jaringan transportasi yang tangguh, aset maritim, dan pusat konektivitas regional.",
    descriptionEn:
      "Our infrastructure pillar engineers critical physical connectivity—bridges, logistical hubs, and port facilities—that unify communities and accelerate national commercial transit across the archipelago.",
    descriptionId:
      "Pilar infrastruktur kami merekayasa konektivitas fisik penting—jembatan, pusat logistik, dan fasilitas pelabuhan—yang menyatukan komunitas dan mempercepat mobilitas perniagaan nasional.",
    image: "/images/pillars/infrastructure-hd.jpg",
    kbliCount: 6,
    kbliCodes: ["42101", "42102", "42911", "52221", "52291", "68111"],
    keyHighlightsEn: [
      "Strategic transport corridor bridges & highways",
      "Maritime logistics & deep-water terminal hubs",
      "Sustainable urban connectivity infrastructure",
    ],
    keyHighlightsId: [
      "Jembatan koridor transportasi strategis & jalan raya",
      "Logistik maritim & terminal laut dalam",
      "Infrastruktur konektivitas perkotaan berkelanjutan",
    ],
    subsectorsEn: [
      "Transport Networks",
      "Maritime Terminals",
      "Urban Logistics",
      "Commercial Property",
      "Regional Connectivity",
    ],
    subsectorsId: [
      "Jaringan Transportasi",
      "Terminal Maritim",
      "Logistik Perkotaan",
      "Properti Komersial",
      "Konektivitas Regional",
    ],
  },
  {
    id: "agriculture-food",
    slug: "agriculture-food",
    nameKey: "agricultureFood",
    titleEn: "Agriculture & Food",
    titleId: "Pertanian & Pangan",
    displayTitleEn: "Agriculture & Food",
    displayTitleId: "Pertanian & Pangan",
    headlineEn: "Cultivating sustainable agribusiness and food security.",
    headlineId: "Mengembangkan agribisnis berkelanjutan dan ketahanan pangan.",
    taglineEn: "Nourishing sustainable growth",
    taglineId: "Menumbuhkan pertumbuhan berkelanjutan",
    subtitleEn: "Healthier Futures",
    subtitleId: "Masa Depan yang Lebih Sehat",
    summaryEn:
      "Nourishing nations through regenerative agro-ecosystems and transparent food security chains.",
    summaryId:
      "Memelihara ketahanan pangan melalui agro-ekosistem regeneratif dan rantai pasok terpercaya.",
    descriptionEn:
      "From highland terraced cultivation to cold-chain regional distribution, our agriculture and food division partners with farming cooperatives to cultivate healthy, traceable staples and organic specialty harvests.",
    descriptionId:
      "Dari budidaya terasering dataran tinggi hingga distribusi rantai dingin regional, divisi pertanian dan pangan kami bermitra dengan koperasi petani untuk menghasilkan panen berkualitas dan terlacak.",
    image: "/images/pillars/agriculture-food-hd.jpg",
    kbliCount: 5,
    kbliCodes: ["01111", "01131", "01211", "46311", "10799"],
    keyHighlightsEn: [
      "Regenerative highland agriculture & terrace preservation",
      "Cold-chain distribution for fresh farm produce",
      "Smallholder farmer cooperative empowerment",
    ],
    keyHighlightsId: [
      "Pertanian dataran tinggi regeneratif & pelestarian terasering",
      "Distribusi rantai dingin untuk hasil bumi segar",
      "Pemberdayaan koperasi petani rakyat mandiri",
    ],
    subsectorsEn: [
      "Regenerative Farming",
      "Highland Cultivation",
      "Food Security Chains",
      "Cold-Chain Logistics",
      "Organic Specialty Crops",
    ],
    subsectorsId: [
      "Pertanian Regeneratif",
      "Budidaya Dataran Tinggi",
      "Rantai Ketahanan Pangan",
      "Logistik Rantai Dingin",
      "Hasil Panen Organik",
    ],
  },
  {
    id: "technology-digital",
    slug: "technology-digital",
    nameKey: "technologyDigital",
    titleEn: "Technology & Digital",
    titleId: "Teknologi & Digital",
    displayTitleEn: "Technology & Digital",
    displayTitleId: "Teknologi & Digital",
    headlineEn: "Enabling transformative digital solutions for tomorrow.",
    headlineId: "Mewujudkan solusi digital transformatif untuk hari esok.",
    taglineEn: "Enabling a smarter tomorrow",
    taglineId: "Mewujudkan hari esok yang lebih cerdas",
    subtitleEn: "Smarter Solutions",
    subtitleId: "Solusi yang Lebih Cerdas",
    summaryEn:
      "Enabling a smarter tomorrow through enterprise software, resilient cloud, and data systems.",
    summaryId:
      "Mewujudkan hari esok yang lebih cerdas melalui rekayasa peranti lunak korporasi dan sistem data.",
    descriptionEn:
      "In an era of hyper-scale transformation, our technology division delivers enterprise-grade software engineering, secure cloud architecture, and data-driven automation to digitize mission-critical operations.",
    descriptionId:
      "Di era transformasi digital pesat, divisi teknologi kami menghadirkan rekayasa perangkat lunak skala korporasi, arsitektur cloud aman, dan otomasi berbasis data untuk operasional penting.",
    image: "/images/pillars/technology-digital-hd.jpg",
    kbliCount: 5,
    kbliCodes: ["62019", "62029", "62090", "63111", "63120"],
    keyHighlightsEn: [
      "Enterprise systems & digital integration",
      "SecOps & ISO-compliant cyber resilience",
      "Industrial IoT & analytics engines",
    ],
    keyHighlightsId: [
      "Integrasi digital & sistem korporasi skala besar",
      "Ketahanan siber berbasis SecOps & kepatuhan ISO",
      "IoT industri & mesin analitik prediktif",
    ],
    subsectorsEn: [
      "Enterprise Software",
      "Cloud Infrastructure",
      "Industrial IoT",
      "Predictive Analytics",
      "Cyber Resilience",
    ],
    subsectorsId: [
      "Perangkat Lunak Korporasi",
      "Infrastruktur Cloud",
      "IoT Industri",
      "Analitik Prediktif",
      "Ketahanan Siber",
    ],
  },
  {
    id: "consumer-lifestyle",
    slug: "consumer-lifestyle",
    nameKey: "consumerLifestyle",
    titleEn: "Consumer & Lifestyle",
    titleId: "Konsumen & Gaya Hidup",
    displayTitleEn: "Consumer & Lifestyle",
    displayTitleId: "Konsumen & Gaya Hidup",
    headlineEn: "Enhancing everyday living with quality consumer brands.",
    headlineId: "Meningkatkan kualitas hidup melalui produk konsumer terpercaya.",
    taglineEn: "Enhancing everyday experiences",
    taglineId: "Meningkatkan pengalaman sehari-hari",
    subtitleEn: "Richer Everydays",
    subtitleId: "Keseharian yang Lebih Berarti",
    summaryEn:
      "Enhancing everyday experiences with curated consumer goods, retail, and wellness products.",
    summaryId:
      "Meningkatkan pengalaman sehari-hari dengan produk konsumer, ritel terkurasi, dan gaya hidup sehat.",
    descriptionEn:
      "Our consumer sector connects regional artisans, sustainable brands, and everyday households. Through refined retail hubs, modern distribution channels, and lifestyle offerings, we elevate domestic living with quality.",
    descriptionId:
      "Sektor konsumer kami menghubungkan produsen regional, merek berkelanjutan, dan kebutuhan keluarga. Melalui pusat ritel modern dan jalur distribusi terkurasi, kami meningkatkan kualitas hidup masyarakat.",
    image: "/images/pillars/consumer-lifestyle-hd.jpg",
    kbliCount: 5,
    kbliCodes: ["46311", "46321", "47111", "47112", "56101"],
    keyHighlightsEn: [
      "Nationwide FMCG distribution network",
      "Specialty modern retail & lifestyle hubs",
      "Stringent quality assurance & traceability",
    ],
    keyHighlightsId: [
      "Jaringan distribusi FMCG berskala nasional",
      "Pusat ritel khusus & gaya hidup modern",
      "Jaminan mutu dan ketertelusuran produk yang ketat",
    ],
    subsectorsEn: [
      "FMCG Distribution",
      "Modern Retail Hubs",
      "Curated Wellness",
      "Sustainable Living",
      "Domestic Brands",
    ],
    subsectorsId: [
      "Distribusi FMCG",
      "Pusat Ritel Modern",
      "Kebugaran Terkurasi",
      "Gaya Hidup Berkelanjutan",
      "Merek Domestik",
    ],
  },
  {
    id: "experiences-ventures",
    slug: "experiences-ventures",
    nameKey: "experiencesVentures",
    titleEn: "Experiences & Ventures",
    titleId: "Pengalaman & Usaha Baru",
    displayTitleEn: "Future Ventures",
    displayTitleId: "Ventura Masa Depan",
    headlineEn: "Investing in frontier technology and decarbonization.",
    headlineId: "Berinvestasi pada teknologi masa depan dan dekarbonisasi.",
    taglineEn: "Creating moments that matter",
    taglineId: "Menciptakan momen yang bermakna",
    subtitleEn: "Meaningful Moments",
    subtitleId: "Momen yang Lebih Bermakna",
    summaryEn:
      "Creating moments that matter through eco-hospitality, cultural destinations, and growth ventures.",
    summaryId:
      "Menciptakan momen berharga melalui hospitalitas ramah lingkungan, destinasi budaya, dan usaha rintisan.",
    descriptionEn:
      "We design immersive hospitality experiences, eco-tourism resorts, and cultural destinations that celebrate natural biodiversity while backing transformative early-stage entrepreneurial ventures.",
    descriptionId:
      "Kami merancang pengalaman hospitalitas imersif, resor ekowisata, dan destinasi budaya yang merayakan keanekaragaman hayati nusantara sekaligus mendukung usaha rintisan transformatif.",
    image: "/images/pillars/experiences-ventures-hd.jpg",
    kbliCount: 4,
    kbliCodes: ["55111", "55120", "79121", "93293"],
    keyHighlightsEn: [
      "Sustainable eco-tourism & luxury boutique resorts",
      "Cultural celebration & regenerative leisure venues",
      "Incubation for high-potential Indonesian ventures",
    ],
    keyHighlightsId: [
      "Ekowisata berkelanjutan & resor butik ramah lingkungan",
      "Destinasi budaya & sarana rekreasi regeneratif",
      "Inkubasi usaha rintisan inovatif berpotensi tinggi",
    ],
    subsectorsEn: [
      "Clean Tech & Renewables",
      "Decarbonization",
      "Frontier Innovation",
      "Eco-Hospitality",
      "Venture Incubation",
    ],
    subsectorsId: [
      "Teknologi Bersih & Terbarukan",
      "Dekarbonisasi",
      "Inovasi Garis Depan",
      "Hospitalitas Ramah Lingkungan",
      "Inkubasi Ventura",
    ],
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: "renewable-infrastructure-portfolio",
    category: "Corporate",
    titleEn: "Trishanti Advances Renewable Infrastructure Portfolio",
    titleId: "Trishanti Mengembangkan Portofolio Infrastruktur Terbarukan",
    excerptEn:
      "Expanding clean energy initiatives and modern regional connectivity to accelerate industrial decarbonization across Indonesia.",
    excerptId:
      "Memperluas inisiatif energi bersih dan konektivitas regional modern demi mempercepat dekarbonisasi industri di Indonesia.",
    contentEn: [
      "As Indonesia advances toward its Golden Vision 2045, energy transition represents both an operational imperative and an unprecedented industrial opportunity. Balancing baseload grid stability with aggressive renewable deployment requires pragmatic, multi-stakeholder capital allocation.",
      "At Trishanti, we believe the path forward lies in hybrid integration: decentralizing power generation across industrial estates, adopting high-efficiency storage mechanisms, and strictly adhering to transparent carbon measurement protocols.",
      "Long-term economic resilience will belong to enterprises that embed transition capital into their baseline strategy today, turning compliance into competitive advantage.",
    ],
    contentId: [
      "Menjelang visi Indonesia Emas 2045, transisi energi merupakan keharusan operasional sekaligus peluang industri yang belum pernah ada sebelumnya. Menyeimbangkan stabilitas pasokan listrik dengan percepatan energi terbarukan menuntut alokasi modal yang pragmatis dan kolaboratif.",
      "Di Trishanti, kami meyakini bahwa langkah ke depan terletak pada integrasi hibrida: desentralisasi pembangkit listrik di kawasan industri, adopsi penyimpanan berdaya guna tinggi, dan kepatuhan penuh terhadap protokol pengukuran karbon.",
      "Ketahanan ekonomi jangka panjang akan dimiliki oleh korporasi yang menempatkan investasi transisi ke dalam strategi dasar mereka hari ini.",
    ],
    date: "Mar 12, 2024",
    readTime: "4 min read",
    image: "/images/news/solar-hd.jpg",
    author: {
      name: "Corporate Communications",
      role: "PT. Trishanti Sinergi Indocorp",
    },
  },
  {
    slug: "investing-in-people-stronger-tomorrow",
    category: "People",
    titleEn: "Investing in People for a Stronger Tomorrow",
    titleId: "Berinvestasi pada Sumber Daya Manusia demi Masa Depan Tangguh",
    excerptEn:
      "Empowering local talent through vocational mastery, leadership incubation, and safety excellence across multi-sector operations.",
    excerptId:
      "Memberdayakan talenta lokal melalui keahlian vokasi, pembinaan kepemimpinan, dan standar keselamatan prima di seluruh lini.",
    contentEn: [
      "People are the heart of every sustainable enterprise. Across all six pillars, Trishanti continues to expand engineering apprenticeships, safety leadership accreditations, and community mentorship programs.",
      "By investing in our human capital, we ensure that as our infrastructure and technologies scale, the communities surrounding our projects thrive in lockstep.",
    ],
    contentId: [
      "Manusia adalah pusat dari setiap korporasi berkelanjutan. Di seluruh enam pilar, Trishanti terus memperluas program pemagangan teknik, akreditasi kepemimpinan keselamatan kerja, dan pendampingan masyarakat.",
      "Dengan berinvestasi pada talenta, kami memastikan bahwa seiring berkembangnya infrastruktur dan teknologi kami, masyarakat di sekitar proyek turut maju bersama.",
    ],
    date: "Feb 28, 2024",
    readTime: "5 min read",
    image: "/images/news/team-hd.jpg",
    author: {
      name: "People & Organization",
      role: "PT. Trishanti Sinergi Indocorp",
    },
  },
  {
    slug: "sustainable-growth-through-innovation",
    category: "Sustainability",
    titleEn: "Sustainable Growth Through Innovation",
    titleId: "Pertumbuhan Berkelanjutan Melalui Inovasi",
    excerptEn:
      "Harnessing digital analytics, circular bio-economy models, and environmental stewardship to build resilient ecosystems.",
    excerptId:
      "Memanfaatkan analitik digital, model bioekonomi sirkular, dan tata kelola lingkungan demi membangun ekosistem yang tangguh.",
    contentEn: [
      "True innovation harmonizes productivity with conservation. From deploying IoT moisture sensors in agroforestry to circular recycling within industrial estates, our ESG roadmaps deliver tangible, measurable impact.",
      "We measure success not merely by quarterly yields, but by the generational vitality of the ecosystems and communities we serve.",
    ],
    contentId: [
      "Inovasi sejati menyelaraskan produktivitas dengan kelestarian alam. Dari penerapan sensor kelembaban IoT di agroforestri hingga daur ulang sirkular di kawasan industri, peta jalan ESG kami menghasilkan dampak nyata yang terukur.",
      "Kami mengukur keberhasilan bukan hanya dari angka keuntungan kuartalan, melainkan dari keberlanjutan ekosistem dan kesejahteraan antargenerasi.",
    ],
    date: "Feb 15, 2024",
    readTime: "6 min read",
    image: "/images/news/sustainability-hd.jpg",
    author: {
      name: "Sustainability & ESG Council",
      role: "PT. Trishanti Sinergi Indocorp",
    },
  },
  {
    slug: "building-multi-sector-resilience-economic-cycles",
    category: "business",
    titleEn: "Building Multi-Sector Resilience Across Macroeconomic Cycles",
    titleId: "Membangun Ketahanan Multi-Sektor Melintasi Siklus Makroekonomi",
    excerptEn:
      "Why disciplined diversification across 6 strategic pillars creates structural defensive value during shifting market dynamics.",
    excerptId:
      "Mengapa diversifikasi berdisiplin di 6 pilar strategis menciptakan ketahanan struktural di tengah pergeseran dinamika pasar.",
    contentEn: [
      "Single-sector exposure often introduces systemic vulnerability to global commodity shocks and sudden regulatory shifts. By constructing a diversified enterprise anchored in 29 vetted KBLI business activities, Trishanti ensures counter-cyclical equilibrium.",
      "When resource cycles soften, infrastructure and consumer staples provide steady cash flow visibility. Conversely, commodity upswings supply the expansion capital needed for technology and venture experimentation.",
      "This institutional architecture emulates the world's most enduring conglomerates: disciplined capital stewardship, decentralized accountability, and shared core values.",
    ],
    contentId: [
      "Ketergantungan pada satu sektor tunggal kerap memicu kerentanan sistemik terhadap fluktuasi komoditas global dan perubahan regulasi. Melalui pembangunan korporasi terdiversifikasi yang berakar pada 29 kegiatan KBLI terverifikasi, Trishanti memastikan keseimbangan lintas siklus.",
      "Saat siklus komoditas melambat, sektor infrastruktur dan kebutuhan pokok menjaga visibilitas arus kas yang stabil. Sebaliknya, fase ekspansi komoditas mendanai investasi di bidang teknologi dan inovasi masa depan.",
      "Arsitektur institusi ini mengikuti jejak konglomerasi paling tangguh di dunia: tata kelola modal yang disiplin, akuntabilitas terdesentralisasi, dan nilai luhur bersama.",
    ],
    date: "February 28, 2026",
    readTime: "6 min read",
    image: "/images/businesses/infrastructure-hero.jpg",
    author: {
      name: "Corporate Planning Directorate",
      role: "PT. Trishanti Sinergi Indocorp",
    },
  },
  {
    slug: "digital-infrastructure-enabling-industrial-transformation",
    category: "technology",
    titleEn: "Digital Infrastructure: Powering Industrial Automation and Trust",
    titleId: "Infrastruktur Digital: Mendorong Otomasi Industri dan Kepercayaan",
    excerptEn:
      "Exploring how cybersecurity architecture and modern cloud telemetry unlock productivity in traditional operational sectors.",
    excerptId:
      "Menelaah bagaimana arsitektur keamanan siber dan telemetri komputasi awan modern mendorong produktivitas di sektor industri tradisional.",
    contentEn: [
      "Industry 4.0 in emerging markets cannot be solved with generic software alone. It demands edge hardware integration, hardened telemetry security, and low-latency operational data pipelines that withstand harsh physical environments.",
      "Trishanti's technology initiatives bridge legacy industrial machinery with cloud-native monitoring dashboards, providing real-time visibility into asset utilization and supply-chain logistics.",
      "The result is a safer workplace, optimized capital maintenance, and higher predictive accuracy across all operating divisions.",
    ],
    contentId: [
      "Industri 4.0 di pasar berkembang tidak dapat diselesaikan hanya dengan perangkat lunak umum. Diperlukan integrasi perangkat keras edge, keamanan telemetri teruji, dan jalur data operasional berlatensi rendah yang tahan terhadap kondisi fisik berat.",
      "Inisiatif teknologi Trishanti menjembatani mesin industri konvensional dengan dashboard pemantauan cloud-native, memberikan visibilitas langsung terhadap penggunaan aset dan logistik rantai pasok.",
      "Hasilnya adalah lingkungan kerja yang lebih aman, pemeliharaan modal yang terukur, dan akurasi prediksi yang lebih tinggi di seluruh lini operasi.",
    ],
    date: "January 20, 2026",
    readTime: "4 min read",
    image: "/images/businesses/renewable-hero.jpg",
    author: {
      name: "Technology Advisory Council",
      role: "PT. Trishanti Sinergi Indocorp",
    },
  },
];

export const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    name: "Dr. Bambang Suryopratomo",
    roleEn: "President Commissioner",
    roleId: "Presiden Komisaris",
    bioEn:
      "Over 30 years of corporate governance, public policy leadership, and strategic oversight in national enterprises.",
    bioId:
      "Lebih dari 30 tahun pengalaman dalam tata kelola korporasi, kepemimpinan kebijakan publik, dan pengawasan strategis perusahaan nasional.",
    image: "/images/about/leader-1.jpg",
  },
  {
    name: "Arya Wicaksono, MBA",
    roleEn: "President Director & CEO",
    roleId: "Presiden Direktur & CEO",
    bioEn:
      "Architect of Trishanti's multi-sector vision, bringing extensive investment banking, operations, and cross-border expansion expertise.",
    bioId:
      "Penggagas visi multi-sektor Trishanti dengan keahlian mendalam di bidang perbankan investasi, manajemen operasional, dan ekspansi lintas batas.",
    image: "/images/about/leader-2.jpg",
  },
  {
    name: "Siti Rahmawati, M.Sc.",
    roleEn: "Director of Sustainability & ESG",
    roleId: "Direktur Keberlanjutan & ESG",
    bioEn:
      "Leading Trishanti's decarbonization protocols, community impact partnerships, and ecological compliance framework.",
    bioId:
      "Memimpin protokol dekarbonisasi Trishanti, kemitraan dampak komunitas, dan kerangka kepatuhan ekologis perusahaan.",
    image: "/images/about/leader-3.jpg",
  },
  {
    name: "Michael Tan, CFA",
    roleEn: "Director of Finance & Strategy",
    roleId: "Direktur Keuangan & Strategi",
    bioEn:
      "Specialist in capital structure optimization, treasury risk, and institutional investor relations across cyclical sectors.",
    bioId:
      "Spesialis dalam optimalisasi struktur permodalan, mitigasi risiko perbendaharaan, dan hubungan investor institusional.",
    image: "/images/about/leader-4.jpg",
  },
];

/* ============================================================
   BUSINESS DISCOVERY UX (5 LEVELS) — Image 5 Board
   Level 03: Pillar Deep Dive
   Level 04: Business Field Detail
   Level 05: Portfolio Integration
   ============================================================ */

export type FieldDevelopmentStatus = "Active" | "In Development" | "Future Opportunity";

export interface BusinessFieldItem {
  id: string;
  slug: string;
  pillarSlug: string;
  titleEn: string;
  titleId: string;
  subtitleEn: string;
  subtitleId: string;
  status: FieldDevelopmentStatus;
  overviewEn: string;
  overviewId: string;
  industryContextEn: string;
  industryContextId: string;
  ourDirectionEn: string;
  ourDirectionId: string;
  opportunitiesEn: string[];
  opportunitiesId: string[];
  image: string;
  kbliCode?: string;
  portfolioSlug?: string;
  relatedFields: {
    titleEn: string;
    titleId: string;
    slug: string;
    pillarSlug: string;
  }[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  name: string;
  pillarSlug: string;
  fieldSlug: string;
  status: "Active Business" | "In Development" | "Future Venture";
  taglineEn: string;
  taglineId: string;
  descriptionEn: string;
  descriptionId: string;
  storyEn: string;
  storyId: string;
  websiteUrl: string;
  image: string;
  features: {
    icon: "leaf" | "flame" | "heart" | "shield" | "sparkles";
    titleEn: string;
    titleId: string;
    descEn: string;
    descId: string;
  }[];
  products?: {
    nameEn: string;
    nameId: string;
    descEn: string;
    descId: string;
    image: string;
  }[];
}

export const BUSINESS_FIELDS: BusinessFieldItem[] = [
  // 1. Resources & Industrial
  {
    id: "energy-products",
    slug: "energy-products",
    pillarSlug: "industrial-trading",
    titleEn: "Energy Products",
    titleId: "Produk Energi",
    subtitleEn: "Powering progress through reliable and sustainable energy solutions.",
    subtitleId: "Mendorong kemajuan melalui solusi energi andal dan berkelanjutan.",
    status: "In Development",
    overviewEn:
      "Energy remains one of the foundations of modern economic development. We explore opportunities across energy products to support industries, communities, and a more sustainable future.",
    overviewId:
      "Energi tetap menjadi salah satu fondasi pembangunan ekonomi modern. Kami mengeksplorasi peluang di seluruh produk energi untuk mendukung industri, masyarakat, dan masa depan yang lebih berkelanjutan.",
    industryContextEn:
      "Global energy landscapes are undergoing a profound structural shift toward decarbonized feedstocks and hybrid distribution architectures. Trishanti's strategy bridges critical industrial energy reliability with progressive transition milestones.",
    industryContextId:
      "Lanskap energi global sedang mengalami transformasi struktural menuju bahan baku rendah karbon dan arsitektur distribusi hibrida. Strategi Trishanti menjembatani keandalan energi industri dengan target transisi bertahap.",
    ourDirectionEn:
      "Developing compliant regional supply hubs, biofuels integration, and co-generation technologies for heavy industrial corridors across the Indonesian archipelago.",
    ourDirectionId:
      "Mengembangkan pusat pasokan regional berizin resmi, integrasi biofuel, dan teknologi kogenerasi untuk koridor industri berat di seluruh nusantara.",
    opportunitiesEn: [
      "Low-emission industrial fuels & synthetic diesel",
      "Decentralized power storage for remote manufacturing",
      "Biomass & bio-pellet supply integration",
    ],
    opportunitiesId: [
      "Bahan bakar industri rendah emisi & diesel sintetis",
      "Penyimpanan daya terdesentralisasi untuk manufaktur jarak jauh",
      "Integrasi pasokan biomassa & pelet bio",
    ],
    image: "/images/pillars/industrial-trading-hd.jpg",
    kbliCode: "46610",
    relatedFields: [
      { titleEn: "Fuel & Petrochemicals", titleId: "Bahan Bakar & Petrokimia", slug: "fuel-petrochemicals", pillarSlug: "industrial-trading" },
      { titleEn: "Industrial Trading", titleId: "Perdagangan Industri", slug: "industrial-trading-field", pillarSlug: "industrial-trading" },
      { titleEn: "Transport Networks", titleId: "Jaringan Transportasi", slug: "transport-networks", pillarSlug: "infrastructure" },
      { titleEn: "Clean Tech & Renewables", titleId: "Teknologi Bersih", slug: "clean-tech-renewables", pillarSlug: "experiences-ventures" },
    ],
  },
  {
    id: "metal-minerals",
    slug: "metal-minerals",
    pillarSlug: "industrial-trading",
    titleEn: "Metal & Minerals",
    titleId: "Logam & Mineral",
    subtitleEn: "Responsible mineral sourcing and metallurgical supply networks.",
    subtitleId: "Pengadaan mineral bertanggung jawab dan jaringan pasokan metalurgi.",
    status: "In Development",
    overviewEn:
      "Essential metals power civil infrastructure, electronics, and green industrial technologies. We participate with strict compliance, traceability, and environmental responsibility.",
    overviewId:
      "Logam esensial menopang infrastruktur sipil, elektronik, dan teknologi industri hijau. Kami beroperasi dengan kepatuhan penuh, ketertelusuran, dan tanggung jawab lingkungan.",
    industryContextEn:
      "Downstream domestic processing (hilirisasi) in Indonesia creates unprecedented demand for traceable mineral ores and refined metal components.",
    industryContextId:
      "Kebijakan hilirisasi nasional di Indonesia menciptakan permintaan tinggi terhadap bijih mineral terlacak dan komponen logam olahan berkualitas.",
    ourDirectionEn:
      "Partnering with licensed domestic smelters and certified concession holders to maintain an ethical, transparent supply chain.",
    ourDirectionId:
      "Bermitra dengan smelter domestik berizin dan pemegang konsesi tersertifikasi demi menjaga rantai pasok yang etis dan transparan.",
    opportunitiesEn: [
      "Certified metallurgical grade nickel & iron ore",
      "Recycled scrap metal re-processing",
      "Precision industrial castings",
    ],
    opportunitiesId: [
      "Bijih nikel & besi mutu metalurgi tersertifikasi",
      "Pengolahan ulang limbah logam bernilai tambah",
      "Pengecoran industri presisi tinggi",
    ],
    image: "/images/pillars/industrial-trading-hd.jpg",
    kbliCode: "46620",
    relatedFields: [
      { titleEn: "Energy Products", titleId: "Produk Energi", slug: "energy-products", pillarSlug: "industrial-trading" },
      { titleEn: "Commodities", titleId: "Komoditas", slug: "commodities", pillarSlug: "industrial-trading" },
    ],
  },
  {
    id: "industrial-trading-field",
    slug: "industrial-trading-field",
    pillarSlug: "industrial-trading",
    titleEn: "Industrial Trading",
    titleId: "Perdagangan Industri",
    subtitleEn: "Connecting producers and manufacturers with verified supply integrity.",
    subtitleId: "Menghubungkan produsen dan pabrikan dengan integritas pasokan teruji.",
    status: "Active",
    overviewEn:
      "Direct B2B distribution of industrial components, raw feedstocks, and machinery parts to national production facilities.",
    overviewId:
      "Distribusi B2B langsung untuk komponen industri, bahan baku, dan suku cadang mesin ke fasilitas produksi nasional.",
    industryContextEn:
      "Resilient supply networks are essential for continuous industrial operations in high-throughput manufacturing hubs.",
    industryContextId:
      "Rantai pasok yang tangguh mutlak diperlukan demi kelancaran operasional manufaktur di kawasan industri strategis.",
    ourDirectionEn:
      "Digitally monitored inventory management with rapid multi-modal logistics deployment across Java and Sumatra corridors.",
    ourDirectionId:
      "Manajemen inventaris terdigitalisasi dengan penyaluran logistik multi-moda cepat melintasi koridor Jawa dan Sumatra.",
    opportunitiesEn: ["Long-term institutional supply agreements", "Just-in-time delivery for processing plants"],
    opportunitiesId: ["Perjanjian pasokan institusional jangka panjang", "Pengiriman tepat waktu untuk pabrik pengolahan"],
    image: "/images/pillars/industrial-trading-hd.jpg",
    kbliCode: "46631",
    relatedFields: [
      { titleEn: "Energy Products", titleId: "Produk Energi", slug: "energy-products", pillarSlug: "industrial-trading" },
    ],
  },

  // 2. Agriculture & Food & Consumer
  {
    id: "food-beverage-brands",
    slug: "food-beverage-brands",
    pillarSlug: "consumer-lifestyle",
    titleEn: "Food & Beverage Brands",
    titleId: "Merek Makanan & Minuman",
    subtitleEn: "Crafting memorable dining and everyday culinary experiences.",
    subtitleId: "Menghadirkan pengalaman bersantap istimewa dan kuliner sehari-hari.",
    status: "Active",
    overviewEn:
      "Great food brings people together. Our consumer F&B division incubates bold, accessible, and high-quality culinary ventures for modern lifestyle consumers.",
    overviewId:
      "Makanan berkualitas menyatukan kita. Divisi F&B konsumen kami menginkubasi merek kuliner berkarakter, terjangkau, dan bermutu tinggi untuk masyarakat modern.",
    industryContextEn:
      "Urban food and dining in Southeast Asia requires both culinary authenticity and strict supply-chain consistency from farm to table.",
    industryContextId:
      "Industri kuliner perkotaan di Asia Tenggara membutuhkan keaslian rasa sekaligus konsistensi rantai pasok terpercaya dari hulu ke hilir.",
    ourDirectionEn:
      "Expanding high-volume, accessible dining brands that celebrate premium cuts and local hospitality.",
    ourDirectionId:
      "Mengembangkan jenama kuliner terjangkau berskala besar yang mengedepankan daging pilihan dan keramahan khas Indonesia.",
    opportunitiesEn: [
      "Fast-casual steakhouse concepts",
      "Ready-to-cook packaged gourmet meats",
      "Centralized cloud kitchens",
    ],
    opportunitiesId: [
      "Konsep restoran steak cepat saji berkualitas",
      "Daging olahan siap masak kemasan gourmet",
      "Dapur bersama terpusat skala kota",
    ],
    image: "/images/pillars/consumer-lifestyle-hd.jpg",
    kbliCode: "56101",
    portfolioSlug: "steakmary",
    relatedFields: [
      { titleEn: "Regenerative Farming", titleId: "Pertanian Regeneratif", slug: "regenerative-farming", pillarSlug: "agriculture-food" },
      { titleEn: "FMCG Distribution", titleId: "Distribusi FMCG", slug: "fmcg-distribution", pillarSlug: "consumer-lifestyle" },
    ],
  },
  {
    id: "regenerative-farming",
    slug: "regenerative-farming",
    pillarSlug: "agriculture-food",
    titleEn: "Regenerative Farming",
    titleId: "Pertanian Regeneratif",
    subtitleEn: "Restoring soil health and supporting agricultural communities.",
    subtitleId: "Memulihkan kesehatan tanah dan memberdayakan komunitas petani.",
    status: "Active",
    overviewEn:
      "Farming methods that replenish ecosystem biodiversity, protect highland watersheds, and deliver traceable organic harvests.",
    overviewId:
      "Metode pertanian yang memulihkan keanekaragaman hayati, menjaga daerah aliran sungai, dan menghasilkan panen organik bermutu.",
    industryContextEn:
      "Regenerative agriculture reduces chemical dependency while increasing long-term yield resilience against climate fluctuations.",
    industryContextId:
      "Pertanian regeneratif mengurangi ketergantungan kimia sekaligus meningkatkan ketahanan panen terhadap perubahan iklim.",
    ourDirectionEn:
      "Empowering smallholder cooperatives with organic certification and guaranteed off-take contracts.",
    ourDirectionId:
      "Memberdayakan koperasi petani rakyat dengan sertifikasi organik dan kepastian serapan pasar.",
    opportunitiesEn: ["Specialty organic staples", "Agroforestry micro-climates"],
    opportunitiesId: ["Bahan pangan pokok organik pilihan", "Agroforestri iklim mikro"],
    image: "/images/pillars/agriculture-food-hd.jpg",
    kbliCode: "01111",
    relatedFields: [
      { titleEn: "Food & Beverage Brands", titleId: "Merek Makanan & Minuman", slug: "food-beverage-brands", pillarSlug: "consumer-lifestyle" },
    ],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "steakmary",
    slug: "steakmary",
    name: "SteakMary",
    pillarSlug: "consumer-lifestyle",
    fieldSlug: "food-beverage-brands",
    status: "Active Business",
    taglineEn: "Good Food Brings People Together.",
    taglineId: "Makanan Berkualitas Menyatukan Kita.",
    descriptionEn:
      "SteakMary is our food and beverage venture delivering quality meals with bold flavors, crafted for everyday enjoyment.",
    descriptionId:
      "SteakMary adalah usaha makanan dan minuman kami yang menyajikan hidangan berkualitas dengan cita rasa kuat untuk dinikmati setiap hari.",
    storyEn:
      "We believe great food creates meaningful moments. SteakMary was founded on the conviction that premium steakhouse quality should not be reserved solely for luxury occasions. By partnering directly with ethical livestock producers and optimizing kitchen preparation, SteakMary delivers mouthwatering, perfectly seared cuts in a warm, welcoming atmosphere.",
    storyId:
      "Kami meyakini hidangan istimewa menciptakan momen penuh kenangan. SteakMary dibangun atas keyakinan bahwa kenikmatan daging steak bermutu tinggi dapat dinikmati siapa saja. Melalui kemitraan langsung dengan peternak terpercaya dan efisiensi dapur modern, SteakMary menghadirkan sajian lezat dalam suasana yang bersahabat.",
    websiteUrl: "https://steakmary.trishanti.com",
    image: "/images/businesses/focus-urban.jpg",
    features: [
      {
        icon: "leaf",
        titleEn: "Quality Ingredients",
        titleId: "Bahan Berkualitas",
        descEn: "Sourced from trusted, traceable farms with strict freshness standards.",
        descId: "Berasal dari peternakan terpercaya dengan standar kesegaran tinggi.",
      },
      {
        icon: "flame",
        titleEn: "Bold Flavors",
        titleId: "Cita Rasa Khas",
        descEn: "Signature spice rubs, flame searing, and house-made culinary reductions.",
        descId: "Bumbu khas racikan istimewa dengan teknik pemanggangan api yang presisi.",
      },
      {
        icon: "heart",
        titleEn: "Made for Everyone",
        titleId: "Untuk Semua Kalangan",
        descEn: "Generous portions, accessible price points, and family-friendly dining.",
        descId: "Porsi memuaskan, harga bersahabat, dan suasana nyaman untuk seluruh keluarga.",
      },
    ],
    products: [
      {
        nameEn: "Signature Ribeye Steak",
        nameId: "Ribeye Steak Andalan",
        descEn: "Tender, well-marbled beef seared to perfection with aromatic herb butter.",
        descId: "Daging ribeye lembut dengan marbling merata dan lelehan mentega herba.",
        image: "/images/businesses/approach-solar.jpg",
      },
      {
        nameEn: "Char-Grilled Tenderloin",
        nameId: "Tenderloin Panggang Arang",
        descEn: "Lean and succulent cut paired with roasted garlic mash and mushroom reduction.",
        descId: "Potongan daging tanpa lemak yang empuk dengan saus jamur khas.",
        image: "/images/businesses/focus-utilities.jpg",
      },
      {
        nameEn: "Crispy Golden Cutlet",
        nameId: "Cutlet Renyah Keemasan",
        descEn: "Crispy breaded prime cut served with fresh garden salad and house dressing.",
        descId: "Daging pilihan berbalut tepung renyah keemasan disajikan dengan salad segar.",
        image: "/images/businesses/infrastructure-hero.jpg",
      },
    ],
  },
];

export function getFieldsByPillar(pillarSlug: string): BusinessFieldItem[] {
  return BUSINESS_FIELDS.filter((f) => f.pillarSlug === pillarSlug);
}

export function getFieldBySlug(pillarSlug: string, fieldSlug: string): BusinessFieldItem | undefined {
  return BUSINESS_FIELDS.find((f) => f.pillarSlug === pillarSlug && f.slug === fieldSlug);
}

export function getPortfolioItem(slug: string): PortfolioItem | undefined {
  return PORTFOLIO_ITEMS.find((p) => p.slug === slug);
}

