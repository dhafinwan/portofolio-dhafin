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
    openInNewTab: string;
    downloadAction: string;
    escHint: string;
    previewAll: string;
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

// ─── 14 BUKTI SERTIFIKAT LENGKAP ─────────────────────────────────────────────
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
    periodOrYear: "Apr 2022 - Apr 2025",
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
    periodOrYear: "2022 - 2026",
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
      headline: "S1 Informatika • Associate Data Scientist (BNSP) • IT & Web Developer",
      subtitle: "S1 Informatika Universitas Gunadarma • Associate Data Scientist (BNSP)",
      summary:
        "Lulusan S1 Informatika (IPK 3,80) yang senang membuat pekerjaan teknis jadi lebih rapi dan efisien. Terbiasa mengolah data menggunakan Python dan SQL, membangun aplikasi web, serta menangani operasional sistem dan jaringan.",
      location: "Pamulang, Tangerang Selatan, Banten, Indonesia",
      contact: sharedContact,
      cvFilePath: encodeURI("/cv/CV_DHAFIN KURNIAWAN.pdf"),
    },
    highlights: [
      {
        value: "94,34%",
        label: "Akurasi Klasifikasi Teks",
        description: "Hasil pengujian model IndoBERT untuk klasifikasi otomatis abstrak jurnal ilmiah skripsi.",
      },
      {
        value: "4.941",
        label: "Abstrak Jurnal Diolah",
        description: "Data teks yang diambil dari portal Garuda dan BIMA, lalu dirapikan ke format CSV.",
      },
      {
        value: "5+",
        label: "Proyek IT & Data",
        description: "Aplikasi web Streamlit, skrip otomasi Python, dan implementasi sistem database.",
      },
      {
        value: "3,80",
        label: "IPK Kelulusan (Skala 4,00)",
        description: "Lulusan S1 Informatika Universitas Gunadarma dengan predikat Sangat Memuaskan.",
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
          "Program Python otomatis untuk mengambil dan merapikan ribuan data abstrak jurnal dari portal Garuda dan BIMA ke dalam format CSV siap olah.",
          "Membangun antarmuka web interaktif dengan Streamlit agar pengguna bisa mengunggah file abstrak dan mendapatkan hasil kategori secara instan.",
          "Menerapkan model IndoBERT dengan akurasi pengujian 94,34% lengkap dengan indikator skor keyakinan prediksi.",
          "Mengembangkan seluruh alur kerja mulai dari scraping data, pembersihan teks, pelatihan model, hingga aplikasi web siap pakai.",
        ],
      },
      {
        id: "used-car-price-prediction",
        title: "Aplikasi Estimasi Harga Pasar Mobil Bekas",
        category: "Data Analysis & Prediksi",
        period: "Jun 2026",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
        points: [
          "Mengolah 4.300+ data pasar mobil bekas dan melatih model Random Forest untuk memperkirakan harga wajar berdasarkan spesifikasi kendaraan.",
          "Membersihkan data anomali dan menganalisis variabel utama yang paling berpengaruh terhadap harga jual.",
          "Menyajikan metrik performa prediksi yang jelas agar mudah dipahami pengguna awam.",
        ],
      },
      {
        id: "diabetes-risk-classification",
        title: "Dashboard Analisis & Skrining Risiko Kesehatan",
        category: "Data Analysis & Visualisasi",
        period: "Okt 2025",
        tech: ["Python", "Scikit-learn", "Pandas", "Plotly"],
        points: [
          "Mengolah data indikator kesehatan dan membandingkan metode analisis untuk mendeteksi risiko awal diabetes dengan akurasi 90%.",
          "Menyeimbangkan sebaran data sampel menggunakan SMOTE agar prediksi lebih adil dan tidak bias.",
          "Membuat visualisasi grafik interaktif dengan Plotly untuk mempermudah pengecekan faktor risiko.",
        ],
      },
      {
        id: "electric-vehicle-sentiment-analysis",
        title: "Pemantauan Opini Publik Kendaraan Listrik di YouTube",
        category: "Otomasi Data & Sentimen",
        period: "Jul 2025",
        tech: ["Python", "YouTube API", "NLP Sastrawi", "Naive Bayes", "SMOTE"],
        points: [
          "Mengambil ribuan data komentar publik dari YouTube secara otomatis untuk menganalisis respon masyarakat terhadap mobil dan motor listrik.",
          "Membersihkan teks dari bahasa gaul dan singkatan, lalu mengelompokkannya menjadi opini positif, netral, dan negatif (akurasi 78,28%).",
          "Menyusun laporan ringkasan opini yang menggabungkan hasil teks dengan data survei kuantitatif.",
        ],
      },
      {
        id: "academic-vision-architecture",
        title: "Skrip Peningkatan Citra & Perancangan Arsitektur Sistem",
        category: "Sistem & IT Support",
        period: "2024 - 2026",
        tech: ["Python", "Google Colab", "Distributed Systems", "SOA Architecture"],
        points: [
          "Membuat program Python untuk meningkatkan pencahayaan dan kontras gambar digital secara otomatis.",
          "Merancang rancangan arsitektur sistem berbasis Service-Oriented Architecture (SOA) untuk alur pemrosesan data yang terstruktur.",
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: "Pengolahan Data & Pelaporan",
        description:
          "Mengambil data dari database atau scraping web, membersihkan data yang belum rapi, lalu menyusunnya menjadi laporan dan dashboard yang informatif.",
        highlights: [
          "Ekstraksi dan pembersihan data kotor (Pandas & SQL)",
          "Penyusunan laporan berkala & visualisasi ringkas",
          "Dashboard interaktif dengan Streamlit & Plotly",
        ],
      },
      {
        step: 2,
        title: "Pengembangan Web & Otomasi",
        description:
          "Membangun website responsif serta membuat skrip Python untuk mengotomasi tugas rutin agar pekerjaan tim selesai lebih cepat.",
        highlights: [
          "Pembuatan aplikasi web interaktif & responsif",
          "Skrip otomatisasi Python untuk pekerjaan berulang",
          "Integrasi API publik dan pemrosesan file batch",
        ],
      },
      {
        step: 3,
        title: "Operasional IT & Jaringan",
        description:
          "Menjaga perangkat keras, sistem operasi, koneksi jaringan lokal (LAN/WLAN), dan software siaran tetap stabil tanpa kendala teknis.",
        highlights: [
          "Troubleshooting komputer, OS, dan software",
          "Pengaturan dan pemantauan jaringan lokal (LAN)",
          "Operator teknis siaran live streaming secara real-time",
        ],
      },
    ],
    experience: [
      {
        role: "Operator Live Streaming",
        company: "EMBA Group",
        period: "Des 2025 - Mar 2026",
        points: [
          "Mengawasi software live streaming, performa server, dan koneksi internet agar siaran produk berjalan stabil tanpa putus.",
          "Sigap mengatasi kendala teknis software dan jaringan secara langsung selama siaran berlangsung.",
          "Berkoordinasi dengan tim produksi untuk memastikan seluruh peralatan siap sebelum jadwal siaran dimulai.",
        ],
      },
    ],
    education: {
      degree: "S1 Informatika",
      institution: "Universitas Gunadarma",
      location: "Depok, Jawa Barat",
      period: "Sep 2022 - Agu 2026",
      gpa: "3,80/4,00",
      relevantCourses: [
        "Basis Data",
        "Rekayasa Perangkat Lunak",
        "Pemrograman Jaringan",
        "Analisis Data",
        "Machine Learning",
        "Pemrosesan Bahasa Alami (NLP)",
      ],
      activities: [
        "Aktif mengerjakan praktikum di Laboratorium Informatika Universitas Gunadarma.",
        "Menyelesaikan proyek skripsi klasifikasi dokumen ilmiah dengan predikat Sangat Memuaskan.",
      ],
    },
    skills: [
      {
        category: "Data & Reporting",
        skills: [
          "Python",
          "SQL",
          "Pandas",
          "Data Cleaning",
          "Web Scraping",
          "Matplotlib & Seaborn",
          "Plotly",
          "Machine Learning Dasar",
          "NLP & Text Processing",
          "Feature Engineering",
          "SMOTE",
          "Outlier Handling (IQR)",
        ],
      },
      {
        category: "Web & Pemrograman",
        skills: [
          "Python",
          "JavaScript / TypeScript",
          "HTML & CSS",
          "Streamlit",
          "REST API",
          "Go (Dasar)",
          "PHP",
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
          { label: "Tentang", href: "#tentang", id: "tentang" },
          { label: "Fokus Kerja", href: "#fokus-kerja", id: "fokus-kerja" },
          { label: "Proyek", href: "#proyek", id: "proyek" },
          { label: "Keahlian", href: "#keahlian", id: "keahlian" },
          { label: "Pengalaman", href: "#pengalaman", id: "pengalaman" },
          { label: "Sertifikasi", href: "#sertifikasi", id: "sertifikasi" },
        ],
        cta: "Hubungi Saya",
      },
      hero: {
        statusBadge: "S1 Informatika Universitas Gunadarma • Associate Data Scientist (BNSP)",
        greeting: "Halo, saya",
        name: "Dhafin Kurniawan.",
        headlineAccent: "Fokus di pengolahan data, pengembangan web, dan operasional IT.",
        roleChips: [
          "Informatics Graduate",
          "Associate Data Scientist",
          "Web & Python Developer",
          "IT & Network Operations",
        ],
        subtitle: "S1 Informatika Universitas Gunadarma • Associate Data Scientist (BNSP)",
        narrative:
          "Lulusan S1 Informatika (IPK 3,80) yang senang membuat pekerjaan teknis jadi lebih rapi dan efisien. Terbiasa mengolah data menggunakan Python dan SQL, membangun aplikasi web, serta menangani operasional sistem dan jaringan.",
        primaryCta: "Hubungi Saya",
        secondaryCta: "Lihat CV (PDF)",
      },
      highlights: {
        sectionLabel: "Pencapaian Utama",
        title: "Ringkasan",
        titleAccent: "Hasil Nyata",
        description:
          "Metrik konkret dari studi akademik dan proyek teknis yang telah saya selesaikan.",
      },
      about: {
        sectionLabel: "Tentang Saya",
        title: "Mengenal Lebih Dekat",
        titleAccent: "Dhafin Kurniawan",
        description:
          "Lulusan Informatika yang siap membantu kebutuhan operasional IT, analisis data, dan pembuatan aplikasi web.",
        profileBadge: "Profil Singkat",
        degreeBadge: "S1 Informatika Gunadarma",
        quoteLead: "Saya senang menyederhanakan proses kerja yang rumit menjadi",
        quoteAccent: "sistem yang rapi, otomatis, dan mudah digunakan",
        summary:
          "Selama kuliah dan bekerja, saya terbiasa menangani tugas teknis secara mandiri maupun tim. Mulai dari mengumpulkan dan membersihkan ribuan data kotor, menyusun laporan analisis, membuat aplikasi web praktis, hingga menjaga kelancaran jaringan dan live streaming saat siaran langsung.",
        location: "Pamulang, Tangerang Selatan, Indonesia",
        status: "Siap Bekerja (Full-time / Kontrak)",
        quickFacts: [
          {
            label: "Pendidikan",
            value: "S1 Informatika, Univ. Gunadarma",
            badge: "Lulus 2026",
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
            value: "Operator Live Streaming di EMBA Group",
            badge: "Operasional & Jaringan",
            accent: false,
          },
          {
            label: "Fokus Keahlian",
            value: "Data & Reporting, Web Development, IT Support",
            badge: "Kompetensi",
            accent: false,
          },
        ],
      },
      workflow: {
        sectionLabel: "Fokus Kerja",
        title: "Bidang yang",
        titleAccent: "Saya Kerjakan",
        description:
          "Tiga area pekerjaan yang menjadi keahlian utama saya untuk membantu kebutuhan tim.",
      },
      projects: {
        sectionLabel: "Proyek Pilihan",
        title: "Hasil Kerja &",
        titleAccent: "Proyek Nyata",
        description:
          "Beberapa proyek teknis yang pernah saya bangun, mulai dari aplikasi web skripsi, analisis data, hingga skrip otomasi.",
        featuredBadge: "Proyek Unggulan • Skripsi S1",
        otherProjectsHeader: "Proyek Lainnya",
        viewRepo: "Lihat Repositori",
        viewProject: "Buka Aplikasi",
      },
      skills: {
        sectionLabel: "Keahlian Teknis",
        title: "Perangkat &",
        titleAccent: "Keahlian yang Dikuasai",
        description:
          "Teknologi, bahasa pemrograman, dan alat bantu kerja yang biasa saya gunakan.",
      },
      timeline: {
        sectionLabel: "Pengalaman & Pendidikan",
        title: "Riwayat Kerja &",
        titleAccent: "Latar Belakang Pendidikan",
        description:
          "Pengalaman kerja praktis di lapangan dan pendidikan formal di bidang Informatika.",
        experienceTab: "Pengalaman Kerja",
        educationTab: "Pendidikan Formal",
      },
      credentials: {
        sectionLabel: "Sertifikasi & Pelatihan",
        title: "Sertifikat Resmi &",
        titleAccent: "Pelatihan Keahlian",
        description:
          "Daftar sertifikat kompetensi nasional (BNSP), pelatihan teknologi, dan sertifikat resmi yang bisa langsung dilihat atau diunduh.",
        allTab: "Semua",
        categories: {
          "Data & AI": "Data & AI",
          "Programming & DB": "Programming & DB",
          "Network & IT": "Network & IT",
          "General & Office": "General & Office",
        },
        viewEvidence: "Buka Dokumen",
        downloadBundle: "Unduh Semua Sertifikat (PDF Lengkap)",
        downloadFile: "Unduh Dokumen",
        closeModal: "Tutup",
        bundleTitle: "Bundel Seluruh Sertifikat (14 Dokumen)",
        bundleDesc:
          "Gabungan seluruh sertifikat resmi dari BNSP, Gunadarma, Cisco, dan Microsoft dalam satu file PDF ringkas.",
        openInNewTab: "Buka di Tab Baru",
        downloadAction: "Unduh",
        escHint: "Tekan ESC atau klik latar belakang untuk menutup",
        previewAll: "Pratinjau Seluruh 14 Sertifikat",
      },
      contact: {
        bannerTag: "Mari Terhubung",
        title: "Tertarik Berkolaborasi atau",
        titleAccent: "Merekrut Saya?",
        description:
          "Saya siap berkontribusi pada posisi IT Support, Pengolahan Data & Pelaporan, Pengembangan Web, maupun Operasional Sistem. Silakan hubungi saya melalui email atau lihat CV lengkap saya.",
        emailCta: "Kirim Email",
        cvCta: "Lihat CV (PDF)",
        copyright: "Hak Cipta Dilindungi • Dhafin Kurniawan.",
      },
    },
  },

  en: {
    profile: {
      name: "Dhafin Kurniawan",
      headline: "Informatics Graduate • Associate Data Scientist (BNSP) • IT & Web Developer",
      subtitle: "Informatics Graduate • Certified Associate Data Scientist (BNSP)",
      summary:
        "An Informatics graduate from Universitas Gunadarma (GPA 3.80/4.00) who enjoys turning raw data into clear reports, automating tasks with Python, and building reliable web and network systems.",
      location: "Pamulang, South Tangerang, Banten, Indonesia",
      contact: sharedContact,
      cvFilePath: encodeURI("/cv/CV_DHAFIN KURNIAWAN.pdf"),
    },
    highlights: [
      {
        value: "94.34%",
        label: "Text Classification Accuracy",
        description: "IndoBERT model evaluation score on undergraduate thesis academic paper abstract dataset.",
      },
      {
        value: "4,941",
        label: "Journal Abstracts Processed",
        description: "Scraped from Garuda and BIMA research portals and structured into clean CSV datasets.",
      },
      {
        value: "5+",
        label: "Data & IT Projects Built",
        description: "Streamlit web applications, Python automation suites, and relational database setups.",
      },
      {
        value: "3.80",
        label: "Degree GPA (4.00 Scale)",
        description: "Informatics graduate from Gunadarma University with high honors academic distinction.",
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
          "Automated Python pipeline to scrape and structure thousands of journal abstracts from the Garuda and BIMA research portals into clean CSV format.",
          "Built a practical web application with Streamlit where users can paste abstracts or upload batches to get instant topic predictions.",
          "Implemented an IndoBERT model achieving 94.34% test accuracy with confidence score indicators.",
          "Managed the full cycle from web scraping and preprocessing to model evaluation and final web deployment.",
        ],
      },
      {
        id: "used-car-price-prediction",
        title: "Used Vehicle Market Price Estimation Tool",
        category: "Data Analytics & ML",
        period: "Jun 2026",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
        points: [
          "Analyzed 4,300+ car listings and trained a Random Forest model to forecast fair market values based on vehicle specifications.",
          "Cleaned outlier data and identified the primary features driving vehicle resale value.",
          "Reported clear model error metrics (MAE, RMSE, and R2) for transparent results.",
        ],
      },
      {
        id: "diabetes-risk-classification",
        title: "Early Health Risk Screening & Analytics Dashboard",
        category: "Data Analytics & Dashboard",
        period: "Oct 2025",
        tech: ["Python", "Scikit-learn", "Pandas", "Plotly"],
        points: [
          "Processed clinical indicators across classification models to flag early diabetes risk factors with 90% accuracy.",
          "Applied SMOTE to address class imbalance for balanced and reliable predictive outcomes.",
          "Built interactive charts with Plotly so non-technical users can explore clinical risk trends easily.",
        ],
      },
      {
        id: "electric-vehicle-sentiment-analysis",
        title: "Electric Vehicle Public Sentiment Monitoring System",
        category: "Data Automation & NLP",
        period: "Jul 2025",
        tech: ["Python", "YouTube API", "NLP Sastrawi", "Naive Bayes", "SMOTE"],
        points: [
          "Extracted thousands of public comments via the YouTube API to understand consumer reactions toward electric vehicles in Indonesia.",
          "Cleaned slang and colloquial terms, then categorized feedback into positive, neutral, and negative sentiment (78.28% accuracy).",
          "Synthesized text findings with survey data into an easy-to-read summary report.",
        ],
      },
      {
        id: "academic-vision-architecture",
        title: "Digital Image Enhancement & System Architecture",
        category: "Systems & IT Support",
        period: "2024 - 2026",
        tech: ["Python", "Google Colab", "Distributed Systems", "SOA Architecture"],
        points: [
          "Wrote Python routines for programmatic brightness and contrast adjustment across image datasets.",
          "Drafted a Service-Oriented Architecture (SOA) blueprint for structured data processing workflows.",
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: "Data Analytics & Reporting",
        description:
          "Extracting data from databases or web endpoints, cleaning inconsistencies, and assembling clear reports and dashboards.",
        highlights: [
          "Data extraction and preprocessing (Pandas & SQL)",
          "Periodic performance reports & clear visualizations",
          "Interactive dashboards using Streamlit & Plotly",
        ],
      },
      {
        step: 2,
        title: "Web Development & Automation",
        description:
          "Building responsive web interfaces and developing Python scripts to automate repetitive tasks and save valuable team hours.",
        highlights: [
          "Practical, user-friendly web applications",
          "Python scripts to automate manual routines",
          "API integrations and batch data pipelines",
        ],
      },
      {
        step: 3,
        title: "IT Support & Digital Operations",
        description:
          "Maintaining workstation health, operating systems, local area networks (LAN/WLAN), and live streaming setups for zero downtime.",
        highlights: [
          "Hardware, OS, and application troubleshooting",
          "Local network setup and connection monitoring",
          "Real-time technical operator for live broadcasts",
        ],
      },
    ],
    experience: [
      {
        role: "Live Streaming Operator",
        company: "EMBA Group",
        period: "Dec 2025 - Mar 2026",
        points: [
          "Monitored streaming software, server health, and network connectivity to guarantee stable, uninterrupted broadcasts.",
          "Troubleshot real-time software glitches and network connection drops on the spot during live sessions.",
          "Worked closely with the production team to verify hardware, camera feeds, and software readiness prior to airtime.",
        ],
      },
    ],
    education: {
      degree: "B.S. in Informatics (Computer Science)",
      institution: "Gunadarma University",
      location: "Depok, West Java, Indonesia",
      period: "Sep 2022 - Aug 2026",
      gpa: "3.80 / 4.00",
      relevantCourses: [
        "Database Systems",
        "Software Engineering",
        "Network Programming",
        "Data Analysis",
        "Machine Learning",
        "Natural Language Processing",
      ],
      activities: [
        "Completed intensive coursework and lab assignments at Gunadarma Informatics Laboratory.",
        "Completed an undergraduate thesis on automated scientific document classification with top honors.",
      ],
    },
    skills: [
      {
        category: "Data & Reporting",
        skills: [
          "Python",
          "SQL",
          "Pandas",
          "Data Cleaning",
          "Web Scraping",
          "Matplotlib & Seaborn",
          "Plotly",
          "Applied Machine Learning",
          "NLP & Text Processing",
          "Feature Engineering",
          "SMOTE",
          "Outlier Handling (IQR)",
        ],
      },
      {
        category: "Web & Programming",
        skills: [
          "Python",
          "JavaScript / TypeScript",
          "HTML & CSS",
          "Streamlit",
          "REST APIs",
          "Go (Fundamentals)",
          "PHP",
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
          { label: "About", href: "#tentang", id: "tentang" },
          { label: "What I Do", href: "#fokus-kerja", id: "fokus-kerja" },
          { label: "Projects", href: "#proyek", id: "proyek" },
          { label: "Skills", href: "#keahlian", id: "keahlian" },
          { label: "Experience", href: "#pengalaman", id: "pengalaman" },
          { label: "Certifications", href: "#sertifikasi", id: "sertifikasi" },
        ],
        cta: "Contact Me",
      },
      hero: {
        statusBadge: "Informatics Graduate • Certified Associate Data Scientist (BNSP)",
        greeting: "Hi, I'm",
        name: "Dhafin Kurniawan.",
        headlineAccent: "Working across data analysis, web development, and IT operations.",
        roleChips: [
          "Informatics Graduate",
          "Associate Data Scientist",
          "Web & Python Developer",
          "IT & Network Operations",
        ],
        subtitle: "Informatics Graduate • Certified Associate Data Scientist (BNSP)",
        narrative:
          "An Informatics graduate from Universitas Gunadarma (GPA 3.80/4.00) who enjoys turning raw data into clear reports, automating tasks with Python, and building reliable web and network systems.",
        primaryCta: "Contact Me",
        secondaryCta: "View Resume (PDF)",
      },
      highlights: {
        sectionLabel: "Key Highlights",
        title: "Measurable",
        titleAccent: "Results",
        description:
          "Concrete metrics from academic studies and technical projects I have built.",
      },
      about: {
        sectionLabel: "About Me",
        title: "A Quick Look at",
        titleAccent: "Dhafin Kurniawan",
        description:
          "An Informatics graduate ready to support IT operations, data reporting, and web application needs.",
        profileBadge: "Quick Bio",
        degreeBadge: "B.S. Informatics",
        quoteLead: "I enjoy turning complex, repetitive manual work into",
        quoteAccent: "clean, automated, and easy-to-use systems",
        summary:
          "Throughout my studies and hands-on work, I have handled end-to-end technical responsibilities: from scraping and cleaning messy datasets to crafting interactive dashboards, building web utilities, and maintaining network stability during live broadcasts.",
        location: "Pamulang, South Tangerang, Indonesia",
        status: "Available for Work (Full-time / Contract)",
        quickFacts: [
          {
            label: "Education",
            value: "B.S. in Informatics, Gunadarma Univ.",
            badge: "Class of 2026",
            accent: false,
          },
          {
            label: "Academic Record",
            value: "GPA 3.80 / 4.00 (High Honors)",
            badge: "Honors",
            accent: true,
          },
          {
            label: "Work Experience",
            value: "Live Streaming Operator at EMBA Group",
            badge: "Ops & Network",
            accent: false,
          },
          {
            label: "Core Competency",
            value: "Data & Reporting, Web Development, IT Support",
            badge: "Competencies",
            accent: false,
          },
        ],
      },
      workflow: {
        sectionLabel: "What I Do",
        title: "Core Areas of",
        titleAccent: "My Work",
        description:
          "Three primary domains where I apply practical skills to support team productivity.",
      },
      projects: {
        sectionLabel: "Featured Projects",
        title: "Hands-on Work &",
        titleAccent: "Key Projects",
        description:
          "Selected technical projects I have built, ranging from my undergraduate thesis application to data analytics and automation scripts.",
        featuredBadge: "Flagship Project • B.S. Thesis",
        otherProjectsHeader: "Other Projects",
        viewRepo: "View Code",
        viewProject: "Open Project",
      },
      skills: {
        sectionLabel: "Technical Skills",
        title: "Tools &",
        titleAccent: "Technologies I Use",
        description:
          "Languages, software tools, and frameworks I use in everyday engineering work.",
      },
      timeline: {
        sectionLabel: "Experience & Education",
        title: "Work History &",
        titleAccent: "Academic Background",
        description:
          "Hands-on work experience in live broadcasting and formal education in Computer Science.",
        experienceTab: "Work Experience",
        educationTab: "Formal Education",
      },
      credentials: {
        sectionLabel: "Certifications & Training",
        title: "Verified",
        titleAccent: "Certificates & Training",
        description:
          "Official competency credentials (BNSP), technical courses, and certifications available for direct preview and download.",
        allTab: "All",
        categories: {
          "Data & AI": "Data & AI",
          "Programming & DB": "Programming & DB",
          "Network & IT": "Network & IT",
          "General & Office": "General & Office",
        },
        viewEvidence: "View Document",
        downloadBundle: "Download All Certificates (PDF Bundle)",
        downloadFile: "Download Document",
        closeModal: "Close",
        bundleTitle: "Complete Certificates Bundle (14 Files)",
        bundleDesc:
          "All official credentials from BNSP, Gunadarma, Cisco, and Microsoft compiled into a single verified PDF.",
        openInNewTab: "Open in New Tab",
        downloadAction: "Download",
        escHint: "Press ESC or click backdrop to close",
        previewAll: "Preview All 14 Certificates",
      },
      contact: {
        bannerTag: "Get in Touch",
        title: "Interested in Working",
        titleAccent: "Together?",
        description:
          "I am available for opportunities in IT Support, Data & Reporting Analysis, Web Development, and Digital System Operations. Feel free to send an email or review my resume.",
        emailCta: "Send an Email",
        cvCta: "View Resume (PDF)",
        copyright: "All rights reserved • Dhafin Kurniawan.",
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
