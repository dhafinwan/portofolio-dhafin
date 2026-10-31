import { resolveAssetUrl } from "@/lib/utils";
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
  titleLine1: string;
  titleLine2: string;
  statusBadge: string;
  summary: string;
  location: string;
  contact: ProfileContact;
  cvFilePath: string;
}

export interface KeyMetric {
  value: string;
  label: string;
  description: string;
}

export interface WorkFocusItem {
  id: number;
  title: string;
  description: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  tech: string[];
  problemAndResult: string;
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  thesis: string;
  points: string[];
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

export interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

export interface SectionLabels {
  skipLink: string;
  nav: {
    links: NavLinkItem[];
    cta: string;
    toggleThemeAria: string;
    toggleLangAria: string;
    openMenuAria: string;
    closeMenuAria: string;
    navAria: string;
    mobileNavAria: string;
  };
  hero: {
    statusBadge: string;
    name: string;
    roleHeadline: string;
    paragraph: string;
    primaryCta: string;
    secondaryCta: string;
    socialGithubAria: string;
    socialLinkedinAria: string;
    socialInstagramAria: string;
    socialTiktokAria: string;
  };
  bento: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    profileTitle: string;
    profileText: string;
    overviewBadge: string;
    focusTitle: string;
    focusBadge: string;
    focusFooter: string;
    skillsTitle: string;
  };
  projects: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    viewCode: string;
    viewLive: string;
  };
  timeline: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    experienceHeading: string;
    educationHeading: string;
    gpaLabel: string;
    thesisLabel: string;
  };
  credentials: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    allTab: string;
    categories: Record<string, string>;
    viewCertificate: string;
    downloadBundle: string;
    downloadFile: string;
    closeModal: string;
    openInNewTab: string;
    escHint: string;
    bundleNotice: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    emailCta: string;
    cvCta: string;
    copyright: string;
  };
}

export interface PortfolioContent {
  profile: Profile;
  keyMetrics: KeyMetric[];
  workFocus: WorkFocusItem[];
  skillGroups: SkillCategoryGroup[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem;
  certificates: CertificateEvidence[];
  certificatesBundleUrl: string;
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
    fileUrl: resolveAssetUrl("/certificates/Sementara LSP Data Science.pdf"),
    previewType: "pdf",
  },
  {
    id: "data-science-course-1",
    name: "Data Science Course (First Case)",
    issuer: "Universitas Gunadarma",
    periodOrYear: "Mei 2026",
    category: "Data & AI",
    fileUrl: resolveAssetUrl("/certificates/Data Science Course (First Case).pdf"),
    previewType: "pdf",
  },
  {
    id: "data-science-course-2",
    name: "Data Science Course (Second Case)",
    issuer: "Universitas Gunadarma",
    periodOrYear: "Mei 2026",
    category: "Data & AI",
    fileUrl: resolveAssetUrl("/certificates/Data Science Course (Second Case).pdf"),
    previewType: "pdf",
  },
  {
    id: "junior-network-administrator",
    name: "Junior Network Administrator",
    issuer: "BNSP",
    periodOrYear: "2022 - 2025",
    category: "Network & IT",
    fileUrl: resolveAssetUrl("/certificates/Junior Network Administrator.jpg"),
    previewType: "image",
  },
  {
    id: "intro-wireless-lan",
    name: "Introduction to wireless LAN installation",
    issuer: "Cisco Networking Academy",
    periodOrYear: "2024",
    category: "Network & IT",
    fileUrl: resolveAssetUrl("/certificates/Introduction to wireless LAN installation.pdf"),
    previewType: "pdf",
  },
  {
    id: "golang-beginner",
    name: "GO-LANG FOR BEGINNER",
    issuer: "Universitas Gunadarma",
    periodOrYear: "2024",
    category: "Programming & DB",
    fileUrl: resolveAssetUrl("/certificates/GO-LANG FOR BEGINNER.pdf"),
    previewType: "pdf",
  },
  {
    id: "golang-intermediate",
    name: "GO-LANG FOR INTERMEDIATE",
    issuer: "Universitas Gunadarma",
    periodOrYear: "2025",
    category: "Programming & DB",
    fileUrl: resolveAssetUrl("/certificates/GO-LANG FOR INTERMEDIATE.pdf"),
    previewType: "pdf",
  },
  {
    id: "oracle-beginner",
    name: "ORACLE FOR BEGINNER",
    issuer: "Universitas Gunadarma / Oracle",
    periodOrYear: "2023",
    category: "Programming & DB",
    fileUrl: resolveAssetUrl("/certificates/ORACLE FOR BEGINNER.pdf"),
    previewType: "pdf",
  },
  {
    id: "oracle-intermediate",
    name: "ORACLE FOR INTERMEDIATE",
    issuer: "Universitas Gunadarma / Oracle",
    periodOrYear: "2025",
    category: "Programming & DB",
    fileUrl: resolveAssetUrl("/certificates/ORACLE FOR INTERMEDIATE.pdf"),
    previewType: "pdf",
  },
  {
    id: "fundamental-dbms",
    name: "FUNDAMENTAL DBMS",
    issuer: "Universitas Gunadarma",
    periodOrYear: "2023",
    category: "Programming & DB",
    fileUrl: resolveAssetUrl("/certificates/FUNDAMENTAL DBMS.pdf"),
    previewType: "pdf",
  },
  {
    id: "fundamental-web-programming",
    name: "FUNDAMENTAL WEB PROGRAMMING",
    issuer: "Universitas Gunadarma",
    periodOrYear: "2023",
    category: "Programming & DB",
    fileUrl: resolveAssetUrl("/certificates/FUNDAMENTAL WEB PROGRAMMING.pdf"),
    previewType: "pdf",
  },
  {
    id: "mos-2016",
    name: "MOS 2016 (Microsoft Office Specialist)",
    issuer: "Microsoft / Certiport",
    periodOrYear: "2022",
    category: "General & Office",
    fileUrl: resolveAssetUrl("/certificates/MOS 2016.pdf"),
    previewType: "pdf",
  },
  {
    id: "aptitude-test",
    name: "Aptitude Test",
    issuer: "Universitas Gunadarma",
    periodOrYear: "2023",
    category: "General & Office",
    fileUrl: resolveAssetUrl("/certificates/Aptitude Test.pdf"),
    previewType: "pdf",
  },
  {
    id: "gabungan-seluruh-sertifikat",
    name: "Gabungan seluruh sertifikat",
    issuer: "BNSP / Gunadarma / Cisco / Microsoft",
    periodOrYear: "2022 - 2026",
    category: "Bundel PDF",
    fileUrl: resolveAssetUrl("/certificates/Gabungan seluruh sertifikat.pdf"),
    previewType: "pdf",
    isBundle: true,
  },
];

export const allCertificatesBundleUrl = resolveAssetUrl("/certificates/Gabungan seluruh sertifikat.pdf");

const sharedContact: ProfileContact = {
  email: "dhafinkurniawan3@gmail.com",
  linkedin: "https://linkedin.com/in/dhafinkurniawan",
  github: "https://github.com/dhafinwan",
  huggingface: "https://huggingface.co/Dhafinwan",
  instagram: "https://instagram.com/dhafinwan",
  tiktok: "https://tiktok.com/@finn.code",
};

export const portfolioContent: Record<"id" | "en", PortfolioContent> = {
  id: {
    profile: {
      name: "Dhafin Kurniawan",
      titleLine1: "Dhafin Kurniawan",
      titleLine2: "Data Analyst, Web Developer & IT Operations.",
      statusBadge: "Tersedia untuk Full-Time & Project",
      summary:
        "Lulusan S1 Informatika Universitas Gunadarma (IPK 3,80) dan Associate Data Scientist (BNSP). Terbiasa mengolah data menjadi laporan, membangun aplikasi web dan skrip Python, serta menjaga operasional harian IT.",
      location: "Pamulang, Tangerang Selatan, Banten, Indonesia",
      contact: sharedContact,
      cvFilePath: resolveAssetUrl("/cv/CV_DHAFIN KURNIAWAN.pdf"),
    },
    keyMetrics: [
      {
        value: "3,80 / 4,00",
        label: "IPK S1 Informatika",
        description: "Lulusan Universitas Gunadarma dengan predikat Sangat Memuaskan.",
      },
      {
        value: "BNSP",
        label: "Associate Data Scientist",
        description: "Sertifikasi kompetensi resmi bidang sains data dari LSP Informatika.",
      },
      {
        value: "14+",
        label: "Sertifikasi & Pelatihan",
        description: "Kompetensi terverifikasi di bidang data, pemrograman, jaringan, dan database.",
      },
    ],
    workFocus: [
      {
        id: 1,
        title: "Data Analysis & Reporting",
        description:
          "Mengolah dan membersihkan data kotor dengan Pandas dan SQL, menganalisis pola, serta membuat laporan rutin dan dashboard visual.",
      },
      {
        id: 2,
        title: "Web Development & Python Automation",
        description:
          "Membangun website interaktif dengan React atau Streamlit, serta membuat skrip Python untuk mengotomasi tugas rutin yang berulang.",
      },
      {
        id: 3,
        title: "IT Support & Operations",
        description:
          "Menjaga komputer, koneksi jaringan lokal LAN/WLAN, dan sistem operasi tetap stabil, serta menangani operasional siaran live streaming.",
      },
    ],
    skillGroups: [
      {
        id: "data-python",
        title: "Data & Python",
        skills: [
          "Python",
          "Pandas",
          "Scikit-learn",
          "PyTorch",
          "IndoBERT / NLP",
          "SQL",
          "Data Cleaning",
          "Excel/CSV Reporting",
        ],
      },
      {
        id: "web-software",
        title: "Web & Software",
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Streamlit",
          "Go (Golang)",
          "HTML/CSS",
          "Git & GitHub",
          "Selenium Web Scraping",
        ],
      },
      {
        id: "database-it-ops",
        title: "Database, Network & IT Ops",
        skills: [
          "MySQL",
          "SQL Server",
          "Oracle DB",
          "LAN/WLAN Installation",
          "ICMP Network Monitoring",
          "Live Streaming Operations",
          "Windows/Hardware Troubleshooting",
        ],
      },
    ],
    projects: [
      {
        id: "indobert-journal-classification",
        title: "Sistem Klasifikasi Otomatis Abstrak Jurnal Ilmiah",
        category: "Web App & NLP",
        period: "2026",
        featured: true,
        tech: ["Python", "IndoBERT", "Streamlit", "Pandas", "Hugging Face", "PyTorch"],
        problemAndResult:
          "Ribuan abstrak jurnal penelitian sulit dikelompokkan secara manual ke dalam kategori bidang ilmu. Sistem ini mengotomasi scraping jurnal Garuda/BIMA, melatih model IndoBERT dengan akurasi 94,34%, dan menyajikan aplikasi web Streamlit siap pakai.",
        repoUrl: "https://github.com/dhafinwan",
      },
      {
        id: "used-car-price-prediction",
        title: "Aplikasi Estimasi Harga Pasar Mobil Bekas",
        category: "Machine Learning & Data",
        period: "2026",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
        problemAndResult:
          "Calon pembeli dan penjual mobil sering kesulitan memperkirakan harga pasar wajar berdasarkan spesifikasi teknis kendaraan. Model Random Forest ini dilatih menggunakan 4.300+ data pasar yang telah dibersihkan untuk memprediksi harga secara transparan.",
        repoUrl: "https://github.com/dhafinwan",
      },
      {
        id: "diabetes-risk-classification",
        title: "Dashboard Skrining & Analisis Risiko Diabetes",
        category: "Data Analysis & Visualisasi",
        period: "2025",
        tech: ["Python", "Scikit-learn", "Pandas", "Plotly", "SMOTE"],
        problemAndResult:
          "Ketidakseimbangan data pasien sering kali menyebabkan hasil skrining risiko diabetes menjadi bias terhadap kelompok tertentu. Sistem ini menerapkan penyeimbangan data dengan SMOTE dan menghasilkan akurasi prediksi 90% menggunakan grafik interaktif Plotly.",
        repoUrl: "https://github.com/dhafinwan",
      },
      {
        id: "electric-vehicle-sentiment-analysis",
        title: "Pemantauan Sentimen Publik Kendaraan Listrik di YouTube",
        category: "NLP & Otomasi Data",
        period: "2025",
        tech: ["Python", "YouTube API", "NLP Sastrawi", "Naive Bayes", "Pandas"],
        problemAndResult:
          "Tingginya volume komentar publik di YouTube memerlukan analisis terstruktur untuk memantau sentimen terhadap kendaraan listrik. Skrip Python ini mengambil data komentar via YouTube API, membersihkan bahasa slang, dan mengelompokkan sentimen dengan akurasi 78,28%.",
        repoUrl: "https://github.com/dhafinwan",
      },
    ],
    experience: [
      {
        role: "Operator Live Streaming",
        company: "EMBA Group",
        period: "Des 2025 - Mar 2026",
        location: "Tangerang, Indonesia",
        points: [
          "Mengoperasikan software OBS dan vMix serta memantau koneksi internet agar siaran produk berjalan lancar.",
          "Mengatasi kendala teknis software, drop frame, dan audio secara langsung untuk mencegah downtime.",
          "Menyiapkan tata letak kamera, pencahayaan studio, dan input audio sebelum jadwal siaran dimulai.",
        ],
      },
      {
        role: "Koordinator Acara & Anggaran (RAB)",
        company: "Panitia Kemerdekaan Pemuda",
        period: "Jul 2024 - Agu 2024",
        location: "Tangerang Selatan, Indonesia",
        points: [
          "Menyusun Rencana Anggaran Biaya (RAB) dan jadwal kegiatan kepanitiaan agar alokasi dana efisien.",
          "Mengkoordinasikan kebutuhan sound system, panggung, dan logistik acara hingga selesai.",
          "Menyusun laporan pertanggungjawaban keuangan dan operasional kegiatan secara transparan.",
        ],
      },
    ],
    education: {
      degree: "S1 Informatika (Sarjana Komputer)",
      institution: "Universitas Gunadarma",
      location: "Depok, Jawa Barat",
      period: "Sep 2022 - Agu 2026",
      gpa: "3,80 / 4,00 (Sangat Memuaskan)",
      thesis: "Penerapan IndoBERT untuk Klasifikasi Otomatis Abstrak Jurnal Ilmiah Teknik Mesin",
      points: [
        "Menyelesaikan studi sarjana dalam 4 tahun dengan IPK 3,80 dari skala 4,00.",
        "Mengembangkan skripsi klasifikasi teks abstrak jurnal penelitian menggunakan model IndoBERT dengan akurasi 94,34%.",
        "Menyelesaikan seluruh modul praktikum laboratorium: Basis Data, Pemrograman Berorientasi Objek, dan Jaringan Komputer.",
      ],
    },
    certificates: allCertificates,
    certificatesBundleUrl: allCertificatesBundleUrl,
    labels: {
      skipLink: "Lompat ke konten utama",
      nav: {
        links: [
          { label: "Beranda", href: "#beranda", id: "beranda" },
          { label: "Profil & Keahlian", href: "#profil-keahlian", id: "profil-keahlian" },
          { label: "Proyek", href: "#proyek", id: "proyek" },
          { label: "Pengalaman", href: "#pengalaman", id: "pengalaman" },
          { label: "Sertifikasi", href: "#sertifikasi", id: "sertifikasi" },
        ],
        cta: "Hubungi Saya",
        toggleThemeAria: "Ganti mode warna tema",
        toggleLangAria: "Ganti pilihan bahasa",
        openMenuAria: "Buka menu navigasi",
        closeMenuAria: "Tutup menu navigasi",
        navAria: "Navigasi Utama",
        mobileNavAria: "Navigasi Seluler",
      },
      hero: {
        statusBadge: "Tersedia untuk Full-Time & Project",
        name: "Dhafin Kurniawan",
        roleHeadline: "Data Analyst, Web Developer & IT Operations.",
        paragraph:
          "Lulusan S1 Informatika Universitas Gunadarma (IPK 3,80) dan Associate Data Scientist (BNSP). Terbiasa mengolah data menjadi laporan, membangun aplikasi web dan skrip Python, serta menjaga operasional harian IT.",
        primaryCta: "Hubungi Saya",
        secondaryCta: "Lihat CV (PDF)",
        socialGithubAria: "Buka profil GitHub Dhafin Kurniawan",
        socialLinkedinAria: "Buka profil LinkedIn Dhafin Kurniawan",
        socialInstagramAria: "Buka profil Instagram @dhafinwan",
        socialTiktokAria: "Buka profil TikTok @finn.code",
      },
      bento: {
        sectionLabel: "Profil & Keahlian",
        title: "Ringkasan Profil & Kemampuan Teknis",
        subtitle:
          "Kombinasi analisis data, rekayasa web, dan keandalan operasional sistem untuk mendukung target tim kerja.",
        profileTitle: "Tentang Dhafin",
        profileText:
          "Saya memiliki latar belakang komputasi dan analisis data dengan fokus pada pemecahan masalah praktis melalui kode yang rapi. Saya menikmati proses mengubah data mentah menjadi laporan yang jelas, membangun aplikasi web yang mempercepat pekerjaan, serta menjaga sistem operasional tetap berjalan stabil.",
        overviewBadge: "Ringkasan",
        focusTitle: "3 Fokus Kerja Utama",
        focusBadge: "Kompetensi",
        focusFooter: "Teruji dalam proyek praktis dan kebutuhan operasional.",
        skillsTitle: "Keahlian & Tech Stack",
      },
      projects: {
        sectionLabel: "Proyek Pilihan",
        title: "Studi Kasus & Proyek Nyata",
        subtitle:
          "Daftar proyek teknis yang dirancang untuk menyelesaikan kebutuhan nyata, dari klasifikasi teks hingga visualisasi data.",
        viewCode: "Lihat Kode",
        viewLive: "Buka Aplikasi",
      },
      timeline: {
        sectionLabel: "Pengalaman & Pendidikan",
        title: "Riwayat Kerja & Latar Belakang Akademik",
        subtitle:
          "Pengalaman operasional langsung di lapangan yang dipadukan dengan dasar pendidikan formal di bidang Informatika.",
        experienceHeading: "Pengalaman Kerja & Operasional",
        educationHeading: "Pendidikan Formal",
        gpaLabel: "IPK Kelulusan",
        thesisLabel: "Topik Skripsi",
      },
      credentials: {
        sectionLabel: "Sertifikasi & Kredensial",
        title: "Bukti Sertifikat & Pelatihan Resmi",
        subtitle:
          "14 sertifikat kompetensi nasional (BNSP), pelatihan teknologi, dan keahlian resmi yang dapat langsung dilihat atau diunduh.",
        allTab: "Semua",
        categories: {
          "Data & AI": "Data & AI",
          "Programming & DB": "Programming & DB",
          "Network & IT": "Network & IT",
          "General & Office": "General & Office",
        },
        viewCertificate: "Lihat Sertifikat",
        downloadBundle: "Unduh Semua Sertifikat (PDF Lengkap)",
        downloadFile: "Unduh File",
        closeModal: "Tutup",
        openInNewTab: "Buka di Tab Baru",
        escHint: "Tekan ESC atau klik area luar untuk menutup jendela",
        bundleNotice: "Bundel resmi mencakup 14 sertifikat terverifikasi dalam satu file PDF gabungan.",
      },
      contact: {
        tag: "Kontak & Kolaborasi",
        title: "Siap Berkontribusi untuk Tim Anda",
        subtitle:
          "Saya terbuka untuk kesempatan kerja penuh waktu (Full-Time) maupun proyek teknis di bidang Analisis Data, Web Development, dan IT Support. Silakan kirim pesan atau tinjau berkas CV saya.",
        emailCta: "Hubungi Saya",
        cvCta: "Lihat CV (PDF)",
        copyright: "Dhafin Kurniawan. Seluruh hak cipta dilindungi.",
      },
    },
  },

  en: {
    profile: {
      name: "Dhafin Kurniawan",
      titleLine1: "Dhafin Kurniawan",
      titleLine2: "Data Analyst, Web Developer & IT Operations.",
      statusBadge: "Available for Full-Time & Projects",
      summary:
        "Informatics graduate from Universitas Gunadarma (GPA 3.80) and BNSP-certified Associate Data Scientist. Experienced in turning raw data into clear reports, building web apps and Python automation, and managing daily IT operations.",
      location: "Pamulang, South Tangerang, Banten, Indonesia",
      contact: sharedContact,
      cvFilePath: resolveAssetUrl("/cv/CV_DHAFIN KURNIAWAN.pdf"),
    },
    keyMetrics: [
      {
        value: "3.80 / 4.00",
        label: "Informatics Degree GPA",
        description: "Graduated from Gunadarma University with high honors.",
      },
      {
        value: "BNSP",
        label: "Associate Data Scientist",
        description: "Nationally accredited data science competency certification from LSP Informatika.",
      },
      {
        value: "14+",
        label: "Certificates & Training",
        description: "Verified credentials across data, development, networking, and databases.",
      },
    ],
    workFocus: [
      {
        id: 1,
        title: "Data Analysis & Reporting",
        description:
          "Extracting and cleaning datasets with Pandas and SQL, analyzing trends, and preparing periodic reports and visual dashboards.",
      },
      {
        id: 2,
        title: "Web Development & Python Automation",
        description:
          "Building interactive web apps with React or Streamlit, and writing Python automation scripts to speed up repetitive tasks.",
      },
      {
        id: 3,
        title: "IT Support & Operations",
        description:
          "Maintaining computers, local LAN/WLAN connections, and operating systems, and managing live streaming broadcasts.",
      },
    ],
    skillGroups: [
      {
        id: "data-python",
        title: "Data & Python",
        skills: [
          "Python",
          "Pandas",
          "Scikit-learn",
          "PyTorch",
          "IndoBERT / NLP",
          "SQL",
          "Data Cleaning",
          "Excel/CSV Reporting",
        ],
      },
      {
        id: "web-software",
        title: "Web & Software",
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Streamlit",
          "Go (Golang)",
          "HTML/CSS",
          "Git & GitHub",
          "Selenium Web Scraping",
        ],
      },
      {
        id: "database-it-ops",
        title: "Database, Network & IT Ops",
        skills: [
          "MySQL",
          "SQL Server",
          "Oracle DB",
          "LAN/WLAN Installation",
          "ICMP Network Monitoring",
          "Live Streaming Operations",
          "Windows/Hardware Troubleshooting",
        ],
      },
    ],
    projects: [
      {
        id: "indobert-journal-classification",
        title: "Automated Academic Text Classification System",
        category: "Web App & NLP",
        period: "2026",
        featured: true,
        tech: ["Python", "IndoBERT", "Streamlit", "Pandas", "Hugging Face", "PyTorch"],
        problemAndResult:
          "Manually organizing thousands of research paper abstracts into academic fields is slow and difficult. This system scrapes papers from Garuda/BIMA, fine-tunes an IndoBERT model to 94.34% accuracy, and deploys an interactive Streamlit web tool.",
        repoUrl: "https://github.com/dhafinwan",
      },
      {
        id: "used-car-price-prediction",
        title: "Used Vehicle Market Price Estimation Tool",
        category: "Machine Learning & Data",
        period: "2026",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
        problemAndResult:
          "Car buyers and sellers often struggle to determine fair vehicle market prices based on technical specifications. This Random Forest model was trained on 4,300+ cleaned market records to predict fair prices transparently.",
        repoUrl: "https://github.com/dhafinwan",
      },
      {
        id: "diabetes-risk-classification",
        title: "Diabetes Risk Screening & Analytics Dashboard",
        category: "Data Analysis & Visualisasi",
        period: "2025",
        tech: ["Python", "Scikit-learn", "Pandas", "Plotly", "SMOTE"],
        problemAndResult:
          "Imbalanced clinical patient datasets often cause early diabetes screening models to produce biased results. This system balances sample distributions with SMOTE and achieves 90% predictive accuracy with interactive Plotly visual charts.",
        repoUrl: "https://github.com/dhafinwan",
      },
      {
        id: "electric-vehicle-sentiment-analysis",
        title: "Electric Vehicle Public Sentiment Monitoring System",
        category: "NLP & Otomasi Data",
        period: "2025",
        tech: ["Python", "YouTube API", "NLP Sastrawi", "Naive Bayes", "Pandas"],
        problemAndResult:
          "High volumes of public YouTube comments require automated processing to understand consumer reactions toward electric vehicles. This Python script extracts comments via YouTube API, cleans informal slang, and classifies sentiment with 78.28% accuracy.",
        repoUrl: "https://github.com/dhafinwan",
      },
    ],
    experience: [
      {
        role: "Live Streaming Operator",
        company: "EMBA Group",
        period: "Dec 2025 - Mar 2026",
        location: "Tangerang, Indonesia",
        points: [
          "Operated OBS and vMix broadcasting software and monitored network stability during live product streams.",
          "Resolved software glitches, frame drops, and audio sync issues in real time to avoid downtime.",
          "Configured camera angles, studio lighting, and audio mixer inputs according to production standards.",
        ],
      },
      {
        role: "Event & Budget Coordinator (RAB)",
        company: "Youth Independence Committee",
        period: "Jul 2024 - Aug 2024",
        location: "South Tangerang, Indonesia",
        points: [
          "Prepared detailed budget plans (RAB) and timelines for cost-effective event resource allocation.",
          "Coordinated sound systems, staging, and logistics to keep the community event running on schedule.",
          "Drafted transparent financial and operational reports for all committee members.",
        ],
      },
    ],
    education: {
      degree: "B.S. in Informatics (Computer Science)",
      institution: "Gunadarma University",
      location: "Depok, West Java, Indonesia",
      period: "Sep 2022 - Aug 2026",
      gpa: "3.80 / 4.00 (High Honors)",
      thesis: "Application of IndoBERT for Automated Classification of Mechanical Engineering Journal Abstracts",
      points: [
        "Completed the 4-year undergraduate degree with a 3.80 GPA on a 4.00 scale.",
        "Built a thesis on academic paper abstract classification using IndoBERT, achieving 94.34% accuracy.",
        "Completed rigorous laboratory coursework in Database Systems, Object-Oriented Programming, and Computer Networks.",
      ],
    },
    certificates: allCertificates,
    certificatesBundleUrl: allCertificatesBundleUrl,
    labels: {
      skipLink: "Skip to main content",
      nav: {
        links: [
          { label: "Home", href: "#beranda", id: "beranda" },
          { label: "Profile & Skills", href: "#profil-keahlian", id: "profil-keahlian" },
          { label: "Projects", href: "#proyek", id: "proyek" },
          { label: "Experience", href: "#pengalaman", id: "pengalaman" },
          { label: "Certifications", href: "#sertifikasi", id: "sertifikasi" },
        ],
        cta: "Contact Me",
        toggleThemeAria: "Toggle color theme",
        toggleLangAria: "Toggle language selection",
        openMenuAria: "Open navigation menu",
        closeMenuAria: "Close navigation menu",
        navAria: "Main Navigation",
        mobileNavAria: "Mobile Navigation",
      },
      hero: {
        statusBadge: "Available for Full-Time & Projects",
        name: "Dhafin Kurniawan",
        roleHeadline: "Data Analyst, Web Developer & IT Operations.",
        paragraph:
          "Informatics graduate from Universitas Gunadarma (GPA 3.80) and BNSP-certified Associate Data Scientist. Experienced in turning raw data into clear reports, building web apps and Python automation, and managing daily IT operations.",
        primaryCta: "Contact Me",
        secondaryCta: "View Resume (PDF)",
        socialGithubAria: "View Dhafin Kurniawan's GitHub profile",
        socialLinkedinAria: "View Dhafin Kurniawan's LinkedIn profile",
        socialInstagramAria: "View Dhafin Kurniawan's Instagram profile",
        socialTiktokAria: "View Dhafin Kurniawan's TikTok profile",
      },
      bento: {
        sectionLabel: "Profile & Skills",
        title: "Profile Summary & Technical Capabilities",
        subtitle:
          "Combining data analytics, web engineering, and reliable IT operational support to deliver team objectives.",
        profileTitle: "About Dhafin",
        profileText:
          "I have a computer science and data analysis background focused on solving practical problems through clean code. I enjoy turning raw data into clear reports, building web applications that speed up work, and keeping operational systems running reliably.",
        overviewBadge: "Overview",
        focusTitle: "3 Core Work Focus Areas",
        focusBadge: "Capabilities",
        focusFooter: "Proven across practical projects and operational needs.",
        skillsTitle: "Skills & Tech Stack",
      },
      projects: {
        sectionLabel: "Featured Projects",
        title: "Case Studies & Practical Work",
        subtitle:
          "A selection of technical projects built to solve practical challenges, from NLP text classification to data visualization dashboards.",
        viewCode: "View Code",
        viewLive: "Open App",
      },
      timeline: {
        sectionLabel: "Experience & Education",
        title: "Work History & Academic Background",
        subtitle:
          "Hands-on operational experience in live broadcasting paired with formal education in Computer Science.",
        experienceHeading: "Work Experience & Operations",
        educationHeading: "Formal Education",
        gpaLabel: "Graduation GPA",
        thesisLabel: "Thesis Topic",
      },
      credentials: {
        sectionLabel: "Certifications & Credentials",
        title: "Verified Certificates & Training",
        subtitle:
          "14 national competency credentials (BNSP), technical courses, and certifications available for direct preview and download.",
        allTab: "All",
        categories: {
          "Data & AI": "Data & AI",
          "Programming & DB": "Programming & DB",
          "Network & IT": "Network & IT",
          "General & Office": "General & Office",
        },
        viewCertificate: "View Certificate",
        downloadBundle: "Download All Certificates (Complete PDF)",
        downloadFile: "Download File",
        closeModal: "Close",
        openInNewTab: "Open in New Tab",
        escHint: "Press ESC or click outside to close the dialog",
        bundleNotice: "Official bundle includes 14 verified certificates in one compiled PDF document.",
      },
      contact: {
        tag: "Contact & Collaboration",
        title: "Ready to Deliver Value to Your Team",
        subtitle:
          "I am actively open to full-time opportunities and technical projects in Data Analysis, Web Development, and IT Support. Feel free to reach out via email or review my resume.",
        emailCta: "Contact Me",
        cvCta: "View Resume (PDF)",
        copyright: "Dhafin Kurniawan. All rights reserved.",
      },
    },
  },
};

// Backward compatibility helper
export const portfolioData: PortfolioContent = portfolioContent.id;

export const getContent = (lang: "id" | "en"): PortfolioContent =>
  portfolioContent[lang] || portfolioContent.id;

export function usePortfolioContent(): PortfolioContent {
  const { lang } = useApp();
  return portfolioContent[lang] || portfolioContent.id;
}
