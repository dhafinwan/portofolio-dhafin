import { useApp } from "@/context/AppContext";

export interface ProfileContact {
  email: string;
  linkedin: string;
  github: string;
  huggingface: string;
  instagram: string;
  tiktok: string;
  phone?: string;
}

export interface Profile {
  name: string;
  headline: string;
  subtitle: string;
  summary: string;
  location: string;
  contact: ProfileContact;
  cvFilePath: string;
}

export interface HighlightMetric {
  value: string;
  label: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  tech: string[];
  points: string[];
  featured?: boolean;
  href?: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  highlights: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  relevantCourses: string[];
  activities: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export type CredentialCategory =
  | "Data & AI"
  | "Programming & DB"
  | "Network & IT"
  | "General & Office";

export interface CertificateEvidence {
  id: string;
  name: string;
  issuer: string;
  periodOrYear: string;
  category: CredentialCategory | "Bundel PDF";
  fileUrl: string;
  previewType: "pdf" | "image";
  isBundle?: boolean;
}

export interface SectionLabels {
  nav: {
    links: Array<{ label: string; href: string; id: string }>;
    cta: string;
  };
  hero: {
    statusBadge: string;
    greeting: string;
    name: string;
    headlineAccent: string;
    roleChips: string[];
    subtitle: string;
    narrative: string;
    primaryCta: string;
    secondaryCta: string;
  };
  highlights: {
    sectionLabel: string;
    title: string;
    titleAccent: string;
    description: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    titleAccent: string;
    description: string;
    profileBadge: string;
    degreeBadge: string;
    quoteLead: string;
    quoteAccent: string;
    summary: string;
    location: string;
    status: string;
    quickFacts: Array<{
      label: string;
      value: string;
      badge: string;
      accent?: boolean;
    }>;
  };
  workflow: {
    sectionLabel: string;
    title: string;
    titleAccent: string;
    description: string;
  };
  projects: {
    sectionLabel: string;
    title: string;
    titleAccent: string;
    description: string;
    featuredBadge: string;
    otherProjectsHeader: string;
    viewRepo: string;
    viewProject: string;
  };
  skills: {
    sectionLabel: string;
    title: string;
    titleAccent: string;
    description: string;
  };
  timeline: {
    sectionLabel: string;
    title: string;
    titleAccent: string;
    description: string;
    experienceTab: string;
    educationTab: string;
  };
  credentials: {
    sectionLabel: string;
    title: string;
    titleAccent: string;
    description: string;
    allTab: string;
    categories: Record<string, string>;
    viewEvidence: string;
    downloadBundle: string;
    downloadFile: string;
    closeModal: string;
    bundleTitle: string;
    bundleDesc: string;
  };
  contact: {
    bannerTag: string;
    title: string;
    titleAccent: string;
    description: string;
    emailCta: string;
    cvCta: string;
    copyright: string;
  };
}

export interface PortfolioContent {
  profile: Profile;
  highlights: HighlightMetric[];
  projects: ProjectItem[];
  workflow: WorkflowStep[];
  experience: WorkExperience[];
  education: Education;
  skills: SkillCategory[];
  allCertificates: CertificateEvidence[];
  allCertificatesBundleUrl: string;
  labels: SectionLabels;
}

// ─── 14 BUKTI SERTIFIKAT LENGKAP (TETAP UTUH & PRESISI) ─────────────────────────
export const allCertificates: CertificateEvidence[] = [
  {
    id: "sementara-lsp-data-science",
    name: "Sementara LSP Data Science (Associate Data Scientist)",
    issuer: "BNSP (LSP Informatika)",
    periodOrYear: "2026",
    category: "Data & AI",
    fileUrl: encodeURI("/certificates/Sementara LSP Data Science.pdf"),
    previewType: "pdf",
  },
  {
    id: "data-science-course-1",
    name: "Data Science Course (First Case)",
    issuer: "Universitas Gunadarma",
    periodOrYear: "Mei 2026",
    category: "Data & AI",
    fileUrl: encodeURI("/certificates/Data Science Course (First Case).pdf"),
    previewType: "pdf",
  },
  {
    id: "data-science-course-2",
    name: "Data Science Course (Second Case)",
    issuer: "Universitas Gunadarma",
    periodOrYear: "Mei 2026",
    category: "Data & AI",
    fileUrl: encodeURI("/certificates/Data Science Course (Second Case).pdf"),
    previewType: "pdf",
  },
  {
    id: "junior-network-administrator",
    name: "Junior Network Administrator",
    issuer: "BNSP",
    periodOrYear: "Apr 2022 – Apr 2025",
    category: "Network & IT",
    fileUrl: encodeURI("/certificates/Junior Network Administrator.jpg"),
    previewType: "image",
  },
  {
    id: "intro-wireless-lan",
    name: "Introduction to wireless LAN installation",
    issuer: "Cisco Networking Academy",
    periodOrYear: "Okt 2024",
    category: "Network & IT",
    fileUrl: encodeURI("/certificates/Introduction to wireless LAN installation.pdf"),
    previewType: "pdf",
  },
  {
    id: "golang-beginner",
    name: "GO-LANG FOR BEGINNER",
    issuer: "Universitas Gunadarma",
    periodOrYear: "Feb 2024",
    category: "Programming & DB",
    fileUrl: encodeURI("/certificates/GO-LANG FOR BEGINNER.pdf"),
    previewType: "pdf",
  },
  {
    id: "golang-intermediate",
    name: "GO-LANG FOR INTERMEDIATE",
    issuer: "Universitas Gunadarma",
    periodOrYear: "Feb 2025",
    category: "Programming & DB",
    fileUrl: encodeURI("/certificates/GO-LANG FOR INTERMEDIATE.pdf"),
    previewType: "pdf",
  },
  {
    id: "oracle-beginner",
    name: "ORACLE FOR BEGINNER",
    issuer: "Universitas Gunadarma / Oracle",
    periodOrYear: "Agu 2023",
    category: "Programming & DB",
    fileUrl: encodeURI("/certificates/ORACLE FOR BEGINNER.pdf"),
    previewType: "pdf",
  },
  {
    id: "oracle-intermediate",
    name: "ORACLE FOR INTERMEDIATE",
    issuer: "Universitas Gunadarma / Oracle",
    periodOrYear: "Agu 2025",
    category: "Programming & DB",
    fileUrl: encodeURI("/certificates/ORACLE FOR INTERMEDIATE.pdf"),
    previewType: "pdf",
  },
  {
    id: "fundamental-dbms",
    name: "FUNDAMENTAL DBMS",
    issuer: "Universitas Gunadarma",
    periodOrYear: "Agu 2023",
    category: "Programming & DB",
    fileUrl: encodeURI("/certificates/FUNDAMENTAL DBMS.pdf"),
    previewType: "pdf",
  },
  {
    id: "fundamental-web-programming",
    name: "FUNDAMENTAL WEB PROGRAMMING",
    issuer: "Universitas Gunadarma",
    periodOrYear: "Feb 2023",
    category: "Programming & DB",
    fileUrl: encodeURI("/certificates/FUNDAMENTAL WEB PROGRAMMING.pdf"),
    previewType: "pdf",
  },
  {
    id: "mos-2016",
    name: "MOS 2016 (Microsoft Office Specialist)",
    issuer: "Microsoft",
    periodOrYear: "2022",
    category: "General & Office",
    fileUrl: encodeURI("/certificates/MOS 2016.pdf"),
    previewType: "pdf",
  },
  {
    id: "aptitude-test",
    name: "Aptitude Test",
    issuer: "Universitas Gunadarma",
    periodOrYear: "2023",
    category: "General & Office",
    fileUrl: encodeURI("/certificates/Aptitude Test.pdf"),
    previewType: "pdf",
  },
  {
    id: "gabungan-seluruh-sertifikat",
    name: "Gabungan seluruh sertifikat",
    issuer: "BNSP / Gunadarma / Cisco / Microsoft",
    periodOrYear: "2022 – 2026",
    category: "Bundel PDF",
    fileUrl: encodeURI("/certificates/Gabungan seluruh sertifikat.pdf"),
    previewType: "pdf",
    isBundle: true,
  },
];

export const allCertificatesBundleUrl = encodeURI("/certificates/Gabungan seluruh sertifikat.pdf");

const sharedContact: ProfileContact = {
  email: "dhafinkurniawan3@gmail.com",
  linkedin: "https://linkedin.com/in/dhafinkurniawan",
  github: "https://github.com/dhafinwan",
  huggingface: "https://huggingface.co/Dhafinwan",
  instagram: "https://instagram.com/dhafinwan",
  tiktok: "https://tiktok.com/@finn.code",
};

// ─── KONTEN BILINGUAL LENGKAP (INDONESIA & ENGLISH) ──────────────────────────
export const portfolioContent: Record<"id" | "en", PortfolioContent> = {
  id: {
    profile: {
      name: "Dhafin Kurniawan",
      headline: "Informatics Graduate · IT & System Enthusiast · Data & Reporting Analyst · Web & Python Developer",
      subtitle:
        "Lulusan S1 Informatika Universitas Gunadarma (IPK 3,80/4,00) • Certified Associate Data Scientist (BNSP)",
      summary:
        "Senang memecahkan masalah lewat teknologi. Berpengalaman membangun aplikasi web, mengolah data menjadi laporan, membuat sistem otomasi dengan Python, hingga menangani operasional teknis dan jaringan. Memiliki latar belakang kuat dari S1 Informatika (IPK 3,80), adaptif, dan siap berkontribusi pada peran IT Umum, Data & Reporting, Web Development, maupun Sistem Operasional.",
      location: "Pamulang, Tangerang Selatan, Banten, Indonesia",
      contact: sharedContact,
      cvFilePath: encodeURI("/cv/CV_DHAFIN KURNIAWAN.pdf"),
    },
    highlights: [
      {
        value: "94,34%",
        label: "Akurasi Klasifikasi Teks",
        description: "Akurasi model klasifikasi abstrak jurnal ilmiah pada proyek skripsi (IndoBERT)",
      },
      {
        value: "4.941",
        label: "Dokumen Teks Diolah",
        description: "Data abstrak yang diekstrak dan dibersihkan otomatis ke dalam 3 kategori bidang",
      },
      {
        value: "5+",
        label: "Proyek IT & Data",
        description: "Aplikasi web interaktif, sistem otomasi Python, dan analisis data end-to-end",
      },
      {
        value: "3,80",
        label: "IPK S1 Informatika",
        description: "Lulusan Universitas Gunadarma dengan predikat akademik Sangat Memuaskan",
      },
    ],
    projects: [
      {
        id: "indobert-journal-classification",
        title: "Sistem Klasifikasi Otomatis Abstrak Jurnal (Streamlit & IndoBERT)",
        category: "Web App & NLP",
        period: "Agu 2026",
        featured: true,
        tech: ["Python", "Streamlit", "Hugging Face", "BeautifulSoup", "Pandas"],
        points: [
          "Membangun aplikasi web interaktif berbasis Streamlit untuk mengelompokkan ribuan abstrak jurnal ke dalam kategori bidang studi secara instan dan akurat (94,34%).",
          "Mengembangkan pipeline ekstraksi data otomatis dengan teknik web scraping (Python + BeautifulSoup) untuk mengumpulkan dan membersihkan 4.900+ data dokumen.",
          "Menyediakan fitur batch upload dan indikator keyakinan (confidence score) agar pengguna dapat memproses banyak dokumen sekaligus dengan praktis.",
          "Menyelesaikan implementasi solusi secara end-to-end mulai dari perumusan kebutuhan, pengolahan data, hingga aplikasi siap pakai.",
        ],
      },
      {
        id: "used-car-price-prediction",
        title: "Aplikasi Estimasi Harga Pasar Mobil Bekas",
        category: "Data Analysis & Prediksi",
        period: "Jun 2026",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
        points: [
          "Menganalisis 4.300+ data pasar mobil bekas dan membangun model estimasi harga berbasis Random Forest untuk membantu menentukan harga jual yang wajar.",
          "Membersihkan data anomali, menangani nilai kosong, dan mengevaluasi faktor-faktor utama yang paling memengaruhi nilai kendaraan.",
          "Menyajikan ringkasan hasil evaluasi dan metrik performa prediksi yang transparan dan mudah dipahami.",
        ],
      },
      {
        id: "diabetes-risk-classification",
        title: "Dashboard Analisis & Skrining Risiko Kesehatan",
        category: "Data Analysis & Visualisasi",
        period: "Okt 2025",
        tech: ["Python", "Scikit-learn", "Pandas", "Plotly"],
        points: [
          "Mengolah dataset kesehatan dan membandingkan performa beberapa metode analisis untuk mendeteksi potensi risiko diabetes sejak dini dengan akurasi 90%.",
          "Menangani outlier dan menyeimbangkan data sampel (SMOTE) agar hasil klasifikasi lebih objektif dan andal.",
          "Merancang visualisasi interaktif dengan Plotly untuk mempermudah peninjauan indikator risiko kesehatan.",
        ],
      },
      {
        id: "electric-vehicle-sentiment-analysis",
        title: "Sistem Pemantauan Opini Publik Kendaraan Listrik",
        category: "Otomasi Data & Sentimen",
        period: "Jul 2025",
        tech: ["Python", "YouTube API", "NLP Sastrawi", "Naive Bayes", "SMOTE"],
        points: [
          "Mengambil ribuan data komentar masyarakat secara otomatis menggunakan YouTube API untuk melihat tren persepsi kendaraan listrik di Indonesia.",
          "Membersihkan teks dari kata-kata gaul dan singkatan, lalu mengelompokkan opini menjadi sentimen positif, netral, dan negatif (akurasi 78,28%).",
          "Menyusun laporan rangkuman insight yang menggabungkan analisis teks dengan data survei kuantitatif.",
        ],
      },
      {
        id: "academic-vision-architecture",
        title: "Otomasi Perbaikan Citra & Desain Arsitektur Sistem",
        category: "Sistem & IT Support",
        period: "2024–2026",
        tech: ["Python", "Google Colab", "Distributed Systems", "SOA Architecture"],
        points: [
          "Membuat skrip Python untuk peningkatan kualitas gambar (image brightening & contrast enhancement) secara terprogram.",
          "Merancang purwarupa arsitektur sistem berbasis Service-Oriented Architecture (SOA) untuk alur pemrosesan data yang terstruktur dan scalable.",
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: "Pengolahan Data & Reporting",
        description:
          "Mengumpulkan data dari database atau scraping web, membersihkan data yang berantakan, lalu menyusunnya menjadi laporan rapi dan visualisasi dashboard yang mudah dipahami.",
        highlights: [
          "Pengumpulan & pembersihan dataset kotor",
          "Penyusunan laporan berkala & visualisasi ringkas",
          "Dashboard analitik interaktif & eksplorasi wawasan",
        ],
      },
      {
        step: 2,
        title: "Pengembangan Web & Otomasi",
        description:
          "Membangun aplikasi web praktis yang responsif serta membuat skrip Python untuk mengotomasi pekerjaan manual berulang agar operasional tim lebih cepat dan efisien.",
        highlights: [
          "Pengembangan aplikasi web yang responsif & praktis",
          "Skrip otomasi Python untuk tugas rutin berulang",
          "Integrasi API & alur pemrosesan data otomatis",
        ],
      },
      {
        step: 3,
        title: "IT Support & Operasional Digital",
        description:
          "Menangani troubleshooting komputer & jaringan, memonitor sistem aplikasi, serta mendampingi kelancaran operasional teknis harian secara sigap dan solutif.",
        highlights: [
          "Troubleshooting perangkat keras & sistem operasi",
          "Konfigurasi dan pengawasan stabilitas jaringan LAN",
          "Pendampingan operasional teknis & live streaming",
        ],
      },
    ],
    experience: [
      {
        role: "Operator Live Streaming",
        company: "EMBA Group",
        period: "Des 2025 – Mar 2026",
        points: [
          "Memantau software live streaming, sistem pendukung, dan kondisi jaringan agar siaran stabil.",
          "Menyelesaikan masalah software dan jaringan secara real-time untuk meminimalkan gangguan.",
          "Berkoordinasi dengan tim produksi untuk mengidentifikasi masalah dan menjaga operasi tetap berjalan.",
        ],
      },
    ],
    education: {
      degree: "S1 Informatika",
      institution: "Universitas Gunadarma",
      location: "Depok, Jawa Barat",
      period: "Sep 2022 – Agu 2026",
      gpa: "3,80/4,00",
      relevantCourses: [
        "Rekayasa Perangkat Lunak",
        "Basis Data",
        "Pemrograman Jaringan",
        "Analisis Data",
        "Machine Learning",
        "NLP",
      ],
      activities: [
        "Aktif di Laboratorium Informatika",
        "Menyelesaikan evaluasi dan penyusunan proposal perancangan perangkat lunak",
      ],
    },
    skills: [
      {
        category: "Data & Reporting",
        skills: [
          "Data Analysis",
          "Reporting & Visualisasi",
          "Data Cleaning",
          "Web Scraping",
          "Predictive Modeling",
          "Machine Learning Dasar",
          "Text Processing / NLP",
          "Feature Engineering",
          "SMOTE",
          "Outlier Handling (IQR)",
          "Pandas",
          "Matplotlib & Seaborn",
          "Plotly",
        ],
      },
      {
        category: "Web & Pemrograman",
        skills: [
          "Python",
          "SQL",
          "HTML & CSS",
          "Go (Dasar)",
          "PHP",
          "Streamlit",
          "REST API",
          "Git & GitHub",
        ],
      },
      {
        category: "Database & Sistem",
        skills: [
          "Oracle Database",
          "MySQL / DBMS",
          "Relational Database Design",
          "Query Optimization",
          "System Architecture (SOA)",
          "Linux & Windows Environment",
        ],
      },
      {
        category: "IT Support & Jaringan",
        skills: [
          "Network Troubleshooting",
          "Wireless LAN Setup",
          "Junior Network Administration",
          "System Monitoring",
          "Live Streaming Ops",
          "Technical Troubleshooting",
          "Microsoft Office (MOS)",
        ],
      },
    ],
    allCertificates,
    allCertificatesBundleUrl,
    labels: {
      nav: {
        links: [
          { label: "Beranda", href: "#beranda", id: "beranda" },
          { label: "Sorotan", href: "#sorotan", id: "sorotan" },
          { label: "Tentang", href: "#tentang", id: "tentang" },
          { label: "Layanan", href: "#layanan", id: "layanan" },
          { label: "Proyek", href: "#proyek", id: "proyek" },
          { label: "Keahlian", href: "#keahlian", id: "keahlian" },
          { label: "Riwayat", href: "#riwayat", id: "riwayat" },
          { label: "Sertifikasi", href: "#sertifikasi", id: "sertifikasi" },
        ],
        cta: "Hubungi Saya",
      },
      hero: {
        statusBadge: "Terbuka untuk Peluang Kerja",
        greeting: "Halo, saya",
        name: "Dhafin Kurniawan",
        headlineAccent: "Teknologi & Solusi.",
        roleChips: [
          "Informatics Graduate",
          "IT & System Enthusiast",
          "Data & Reporting Analyst",
          "Web & Python Developer",
        ],
        subtitle:
          "Lulusan S1 Informatika Universitas Gunadarma (IPK 3,80/4,00) • Certified Associate Data Scientist (BNSP)",
        narrative:
          "Senang memecahkan masalah lewat teknologi. Berpengalaman membangun aplikasi web, mengolah data menjadi laporan, membuat sistem otomasi dengan Python, hingga menangani operasional teknis dan jaringan.",
        primaryCta: "Mulai Percakapan",
        secondaryCta: "Unduh CV (PDF)",
      },
      highlights: {
        sectionLabel: "Metrik & Pencapaian",
        title: "Tolok Ukur",
        titleAccent: "Hasil Nyata",
        description:
          "Bukti pencapaian akademik dan proyek teknis yang dikerjakan dengan standar presisi tinggi.",
      },
      about: {
        sectionLabel: "Profil & Latar Belakang",
        title: "Mengenal Lebih Dekat",
        titleAccent: "Dhafin",
        description:
          "Lulusan IT yang serbabisa, adaptif terhadap teknologi baru, dan berfokus menghadirkan solusi praktis yang bermanfaat.",
        profileBadge: "Profil Profesional",
        degreeBadge: "S1 Informatika",
        quoteLead: "Lulusan S1 Informatika yang fleksibel dan siap berkontribusi pada",
        quoteAccent: "kebutuhan IT umum, olah data & pelaporan, pembuatan web & skrip otomasi, hingga operasional sistem.",
        summary:
          "Saya terbiasa memecahkan masalah teknis dari hulu ke hilir: mulai dari mengambil dan merapikan data kotor, menyusun laporan interaktif, membangun antarmuka web yang intuitif, hingga memelihara stabilitas operasional sistem dan jaringan.",
        location: "Pamulang, Tangerang Selatan, Indonesia",
        status: "Siap Kerja — Full-time / Kontrak",
        quickFacts: [
          {
            label: "Pendidikan",
            value: "S1 Informatika, Univ. Gunadarma",
            badge: "Lulusan 2026",
            accent: false,
          },
          {
            label: "Prestasi Akademik",
            value: "IPK 3,80 / 4,00 (Sangat Memuaskan)",
            badge: "Akademik",
            accent: true,
          },
          {
            label: "Pengalaman Kerja",
            value: "Operator Live Streaming — EMBA Group",
            badge: "Operasional & Jaringan",
            accent: false,
          },
          {
            label: "Fokus Keahlian",
            value: "Data & Reporting · Web & Otomasi · IT Support",
            badge: "Serbabisa",
            accent: false,
          },
        ],
      },
      workflow: {
        sectionLabel: "Bidang Fokus & Solusi",
        title: "Apa yang",
        titleAccent: "Saya Kerjakan",
        description:
          "Tiga pilar solusi praktis yang siap saya terapkan untuk mendukung efisiensi data, pengembangan aplikasi, dan keandalan sistem.",
      },
      projects: {
        sectionLabel: "Portofolio & Solusi Praktis",
        title: "Proyek IT, Web &",
        titleAccent: "Olah Data",
        description:
          "Implementasi nyata mulai dari aplikasi web pengelompok teks otomatis, estimasi harga berbasis data, dashboard skrining kesehatan, hingga otomasi analisis opini publik.",
        featuredBadge: "Proyek Unggulan · Skripsi S1",
        otherProjectsHeader: "Proyek & Eksplorasi Lainnya",
        viewRepo: "Lihat Repositori",
        viewProject: "Buka Proyek",
      },
      skills: {
        sectionLabel: "Keahlian & Perangkat",
        title: "Instrumen &",
        titleAccent: "Kompetensi",
        description:
          "Kombinasi kemampuan praktis dalam pengelolaan data, pembuatan aplikasi web & skrip otomasi, administrasi basis data, serta operasional jaringan yang siap diterapkan.",
      },
      timeline: {
        sectionLabel: "Riwayat & Rekam Jejak",
        title: "Pengalaman &",
        titleAccent: "Pendidikan",
        description:
          "Latar belakang akademik di bidang Informatika dan pengalaman praktis dalam operasional sistem serta siaran langsung.",
        experienceTab: "Pengalaman Kerja",
        educationTab: "Pendidikan Formal",
      },
      credentials: {
        sectionLabel: "Validasi & Sertifikasi",
        title: "Sertifikat &",
        titleAccent: "Pelatihan Resmi",
        description:
          "Daftar sertifikasi kompetensi nasional BNSP, kursus teknologi, dan sertifikat keahlian resmi yang dapat diverifikasi langsung.",
        allTab: "Semua",
        categories: {
          "Data & AI": "Data & AI",
          "Programming & DB": "Programming & DB",
          "Network & IT": "Network & IT",
          "General & Office": "General & Office",
        },
        viewEvidence: "Lihat Bukti",
        downloadBundle: "Unduh Semua Sertifikat (Bundel PDF)",
        downloadFile: "Unduh File Dokumen",
        closeModal: "Tutup",
        bundleTitle: "Bundel Seluruh Sertifikat",
        bundleDesc: "Arsip lengkap seluruh dokumen sertifikasi yang digabungkan dalam satu file PDF resmi.",
      },
      contact: {
        bannerTag: "Mari Terhubung",
        title: "Tertarik Berdiskusi atau",
        titleAccent: "Peluang Kerja?",
        description:
          "Saya terbuka untuk posisi di bidang IT Umum, Data & Reporting, Web Development, maupun IT Support / Sistem Operasional. Mari diskusikan bagaimana saya dapat berkontribusi di tim Anda.",
        emailCta: "Hubungi via Email",
        cvCta: "Unduh CV Lengkap",
        copyright: "Hak Cipta Dilindungi · Didesain dengan standar Swiss Editorial.",
      },
    },
  },

  en: {
    profile: {
      name: "Dhafin Kurniawan",
      headline: "Informatics Graduate · IT & System Enthusiast · Data & Reporting Analyst · Web & Python Developer",
      subtitle:
        "B.S. in Informatics, Gunadarma University (GPA 3.80/4.00) • Certified Associate Data Scientist (BNSP)",
      summary:
        "Passionate about solving problems through technology. Experienced in building web apps, transforming raw data into actionable reports, automating workflows with Python, and managing technical IT operations and networks. Adaptable and ready to contribute across General IT, Data & Reporting, Web Development, or Systems Operations.",
      location: "Greater Jakarta Area, Indonesia",
      contact: sharedContact,
      cvFilePath: encodeURI("/cv/CV_DHAFIN KURNIAWAN.pdf"),
    },
    highlights: [
      {
        value: "94.34%",
        label: "Text Classification Accuracy",
        description: "IndoBERT model accuracy on academic paper abstracts classification (Undergraduate Thesis)",
      },
      {
        value: "4,941",
        label: "Text Records Processed",
        description: "Journal abstracts extracted and cleaned into 3 distinct engineering domains",
      },
      {
        value: "5+",
        label: "Data & IT Projects",
        description: "Interactive web applications, Python automation suites, and end-to-end data systems",
      },
      {
        value: "3.80",
        label: "Informatics B.S. GPA",
        description: "Graduated from Gunadarma University with High Honors distinction (Scale 4.00)",
      },
    ],
    projects: [
      {
        id: "indobert-journal-classification",
        title: "Automated Academic Text Classification System (Streamlit & IndoBERT)",
        category: "Web App & NLP",
        period: "Aug 2026",
        featured: true,
        tech: ["Python", "Streamlit", "Hugging Face", "BeautifulSoup", "Pandas"],
        points: [
          "Engineered an interactive Streamlit application to categorize thousands of scientific abstracts into engineering disciplines instantly with 94.34% accuracy.",
          "Built an automated data pipeline using web scraping (Python + BeautifulSoup) to extract, deduplicate, and clean over 4,900 document records.",
          "Equipped the UI with batch file upload capabilities, confidence scoring meters, and out-of-distribution (OOD) detection.",
          "Delivered the full lifecycle from business objective scoping and text preprocessing to final user-ready deployment.",
        ],
      },
      {
        id: "used-car-price-prediction",
        title: "Used Vehicle Market Price Estimation Tool",
        category: "Data Analytics & ML",
        period: "Jun 2026",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
        points: [
          "Analyzed 4,300+ automotive market listings and developed a Random Forest Regressor to estimate fair vehicle market value.",
          "Cleaned anomalies, imputed missing values, and isolated the key variables that influence vehicle resale prices.",
          "Provided a transparent performance evaluation summary using MAE, RMSE, and R² scores.",
        ],
      },
      {
        id: "diabetes-risk-classification",
        title: "Early Health Risk Screening & Analytics Dashboard",
        category: "Data Analytics & Dashboard",
        period: "Oct 2025",
        tech: ["Python", "Scikit-learn", "Pandas", "Plotly"],
        points: [
          "Evaluated clinical indicators across multiple classification models to identify early diabetes risk with 90% accuracy and 0.91 ROC-AUC.",
          "Handled outlier distributions with IQR and balanced minority classes using SMOTE for unbiased predictions.",
          "Built interactive Plotly visualizations enabling intuitive review of clinical threshold metrics.",
        ],
      },
      {
        id: "electric-vehicle-sentiment-analysis",
        title: "Electric Vehicle Public Sentiment Monitoring System",
        category: "Data Automation & NLP",
        period: "Jul 2025",
        tech: ["Python", "YouTube API", "NLP Sastrawi", "Naive Bayes", "SMOTE"],
        points: [
          "Automated the extraction of public feedback via the YouTube API to assess EV adoption sentiment in Indonesia.",
          "Preprocessed colloquial terms and slang, then classified opinions into positive, neutral, and negative tiers (78.28% accuracy).",
          "Synthesized textual sentiment with quantitative Likert survey responses for comprehensive market insights.",
        ],
      },
      {
        id: "academic-vision-architecture",
        title: "Digital Image Enhancement & System Architecture",
        category: "Systems & IT Support",
        period: "2024–2026",
        tech: ["Python", "Google Colab", "Distributed Systems", "SOA Architecture"],
        points: [
          "Wrote Python algorithms for programmatic image brightening and contrast enhancement in computer vision workflows.",
          "Designed a distributed Service-Oriented Architecture (SOA) prototype for scalable data ingestion and processing pipelines.",
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: "Data Analytics & Reporting",
        description:
          "Extracting data from databases or web endpoints, cleaning inconsistencies, and producing clear dashboards and executive reports for informed decision-making.",
        highlights: [
          "Data ingestion & pipeline hygiene",
          "Automated periodic reporting & KPI visualization",
          "Interactive analytics dashboards & insight discovery",
        ],
      },
      {
        step: 2,
        title: "Web Development & Automation",
        description:
          "Crafting clean, responsive web utilities and writing custom Python scripts to automate repetitive workflows so your team saves valuable time.",
        highlights: [
          "Functional, responsive web applications",
          "Python automation scripts for repetitive tasks",
          "REST API integrations & automated batch pipelines",
        ],
      },
      {
        step: 3,
        title: "IT Support & Digital Operations",
        description:
          "Handling workstation and network troubleshooting, monitoring application services, and ensuring seamless daily technical operations.",
        highlights: [
          "Hardware, software & OS troubleshooting",
          "Local area network (LAN) setup & monitoring",
          "Live streaming operations & technical standby",
        ],
      },
    ],
    experience: [
      {
        role: "Live Streaming Operator",
        company: "EMBA Group",
        period: "Dec 2025 – Mar 2026",
        points: [
          "Monitored live broadcast software, server backends, and network throughput to ensure uninterrupted streaming.",
          "Diagnosed and resolved software glitches and network latency issues in real-time.",
          "Collaborated closely with production directors to maintain technical readiness and operational continuity.",
        ],
      },
    ],
    education: {
      degree: "B.S. in Informatics (Computer Science)",
      institution: "Gunadarma University",
      location: "Depok, West Java, Indonesia",
      period: "Sep 2022 – Aug 2026",
      gpa: "3.80 / 4.00",
      relevantCourses: [
        "Software Engineering",
        "Database Systems",
        "Network Programming",
        "Data Analysis",
        "Machine Learning",
        "Natural Language Processing",
      ],
      activities: [
        "Active in Informatics Laboratory practical assignments",
        "Completed software design specifications and institutional system proposals",
      ],
    },
    skills: [
      {
        category: "Data & Reporting",
        skills: [
          "Data Analysis",
          "Reporting & Dashboards",
          "Data Cleaning",
          "Web Scraping",
          "Predictive Modeling",
          "Applied Machine Learning",
          "Text Processing / NLP",
          "Feature Engineering",
          "SMOTE",
          "Outlier Handling (IQR)",
          "Pandas",
          "Matplotlib & Seaborn",
          "Plotly",
        ],
      },
      {
        category: "Web & Programming",
        skills: [
          "Python",
          "SQL",
          "HTML & CSS",
          "Go (Fundamentals)",
          "PHP",
          "Streamlit",
          "REST APIs",
          "Git & GitHub",
        ],
      },
      {
        category: "Database & Systems",
        skills: [
          "Oracle Database",
          "MySQL / DBMS",
          "Relational Database Design",
          "Query Optimization",
          "System Architecture (SOA)",
          "Linux & Windows Environments",
        ],
      },
      {
        category: "IT Support & Networking",
        skills: [
          "Network Troubleshooting",
          "Wireless LAN Setup",
          "Junior Network Administration",
          "System Monitoring",
          "Live Streaming Ops",
          "Technical Troubleshooting",
          "Microsoft Office (MOS)",
        ],
      },
    ],
    allCertificates,
    allCertificatesBundleUrl,
    labels: {
      nav: {
        links: [
          { label: "Home", href: "#beranda", id: "beranda" },
          { label: "Highlights", href: "#sorotan", id: "sorotan" },
          { label: "About", href: "#tentang", id: "tentang" },
          { label: "Focus", href: "#layanan", id: "layanan" },
          { label: "Projects", href: "#proyek", id: "proyek" },
          { label: "Skills", href: "#keahlian", id: "keahlian" },
          { label: "Timeline", href: "#riwayat", id: "riwayat" },
          { label: "Credentials", href: "#sertifikasi", id: "sertifikasi" },
        ],
        cta: "Get in Touch",
      },
      hero: {
        statusBadge: "Available for Opportunities",
        greeting: "Hello, I'm",
        name: "Dhafin Kurniawan",
        headlineAccent: "Tech & Solutions.",
        roleChips: [
          "Informatics Graduate",
          "IT & System Enthusiast",
          "Data & Reporting Analyst",
          "Web & Python Developer",
        ],
        subtitle:
          "B.S. in Informatics, Gunadarma University (GPA 3.80/4.00) • Certified Associate Data Scientist (BNSP)",
        narrative:
          "Passionate about solving problems through technology. Experienced in building web apps, transforming raw data into actionable reports, automating workflows with Python, and managing technical IT operations and networks.",
        primaryCta: "Start a Conversation",
        secondaryCta: "Download Resume (PDF)",
      },
      highlights: {
        sectionLabel: "Metrics & Highlights",
        title: "Measurable",
        titleAccent: "Impact & Outcomes",
        description:
          "Demonstrated academic excellence and practical engineering work completed with high precision standards.",
      },
      about: {
        sectionLabel: "Background & Persona",
        title: "Getting to Know",
        titleAccent: "Dhafin",
        description:
          "A versatile IT graduate, quick to adopt modern tools, and focused on delivering practical and dependable solutions.",
        profileBadge: "Professional Profile",
        degreeBadge: "B.S. Informatics",
        quoteLead: "An adaptable Informatics graduate ready to contribute across",
        quoteAccent: "general IT needs, data analytics & reporting, web applications & automation scripts, and digital operations.",
        summary:
          "I thrive on solving technical challenges from inception to delivery: from scraping and cleaning messy datasets to crafting interactive executive reports, building responsive web tools, and safeguarding daily network and server health.",
        location: "Greater Jakarta Area, Indonesia",
        status: "Open to Work — Full-time / Contract",
        quickFacts: [
          {
            label: "Education",
            value: "B.S. in Informatics, Gunadarma Univ.",
            badge: "Class of 2026",
            accent: false,
          },
          {
            label: "Academic Record",
            value: "GPA 3.80 / 4.00 (High Distinction)",
            badge: "Honors",
            accent: true,
          },
          {
            label: "Work Experience",
            value: "Live Streaming Operator — EMBA Group",
            badge: "Ops & Network",
            accent: false,
          },
          {
            label: "Core Competency",
            value: "Data & Reporting · Web & Automation · IT Support",
            badge: "Versatile",
            accent: false,
          },
        ],
      },
      workflow: {
        sectionLabel: "Focus Areas & Services",
        title: "What I",
        titleAccent: "Actually Deliver",
        description:
          "Three practical pillars of technical capabilities ready to empower your team's operational efficiency and digital needs.",
      },
      projects: {
        sectionLabel: "Portfolio & Practical Work",
        title: "Featured IT, Web &",
        titleAccent: "Data Projects",
        description:
          "Hands-on engineering solutions spanning NLP document classifiers, predictive market estimation, healthcare screening dashboards, and public sentiment analytics.",
        featuredBadge: "Flagship Project · B.S. Thesis",
        otherProjectsHeader: "Selected Projects & Systems",
        viewRepo: "View Repository",
        viewProject: "Launch Project",
      },
      skills: {
        sectionLabel: "Tools & Competencies",
        title: "Technical",
        titleAccent: "Toolkit & Stack",
        description:
          "A well-rounded set of practical tools in data analytics, web and automation scripting, database management, and network troubleshooting.",
      },
      timeline: {
        sectionLabel: "Track Record & Journey",
        title: "Work Experience &",
        titleAccent: "Education",
        description:
          "Formal academic foundation in Computer Science / Informatics paired with operational experience in live digital streaming and network monitoring.",
        experienceTab: "Work Experience",
        educationTab: "Education",
      },
      credentials: {
        sectionLabel: "Certifications & Proof",
        title: "Verified",
        titleAccent: "Credentials & Training",
        description:
          "National competency certifications from BNSP, Cisco Networking Academy, Oracle, Microsoft, and university technical coursework.",
        allTab: "All",
        categories: {
          "Data & AI": "Data & AI",
          "Programming & DB": "Programming & DB",
          "Network & IT": "Network & IT",
          "General & Office": "General & Office",
        },
        viewEvidence: "View Credential",
        downloadBundle: "Download Full Bundle (PDF)",
        downloadFile: "Download Original Document",
        closeModal: "Close",
        bundleTitle: "Combined Credentials Bundle",
        bundleDesc: "Complete archive containing all official certification documents compiled into a single verified PDF.",
      },
      contact: {
        bannerTag: "Initiate Collaboration",
        title: "Let's Connect for",
        titleAccent: "Exciting Opportunities",
        description:
          "Open for roles in General IT, Data & Reporting Analytics, Web & Python Development, and Digital Systems Operations. Let's discuss how my skills can bring value to your team.",
        emailCta: "Contact via Email",
        cvCta: "Download Full Resume",
        copyright: "All rights reserved · Crafted with Swiss Editorial standards.",
      },
    },
  },
};

// Backward-compatible default export
export const portfolioData: PortfolioContent = portfolioContent.id;

// Getter by language
export const getContent = (lang: "id" | "en"): PortfolioContent =>
  portfolioContent[lang] || portfolioContent.id;

// React Hook to easily consume bilingual content
export function usePortfolioContent(): PortfolioContent {
  const { lang } = useApp();
  return portfolioContent[lang] || portfolioContent.id;
}
