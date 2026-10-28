export interface ProfileContact {
  email: string;
  linkedin: string;
  github: string;
  huggingface: string;
  instagram: string;
  tiktok: string;
  phone?: string; // Optional field: tidak boleh dirender di UI sesuai aturan privasi
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
  href?: string; // Optional field: dibiarkan undefined/kosong jika belum ada link publik
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
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

export interface Certification {
  name: string;
  issuer: string;
  periodOrYear: string;
  category: CredentialCategory;
  fileUrl: string; // Path ke file di /certificates/
  previewType: "pdf" | "image"; // Untuk menentukan cara preview di modal
}

export interface Training {
  name: string;
  issuer: string;
  periodOrYear: string;
  category: CredentialCategory;
  fileUrl: string;
  previewType: "pdf" | "image";
}

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

export interface PortfolioData {
  profile: Profile;
  highlights: HighlightMetric[];
  projects: ProjectItem[];
  workflow: WorkflowStep[];
  experience: WorkExperience[];
  education: Education;
  skills: SkillCategory[];
  certifications: Certification[];
  trainings: Training[];
  allCertificatesBundleUrl: string;
  allCertificates: CertificateEvidence[];
}

// ─── 14 BUKTI SERTIFIKAT LENGKAP ───────────────────────────────────────────────
export const allCertificates: CertificateEvidence[] = [
  {
    id: "sementara-lsp-data-science",
    name: "Sementara LSP Data Science",
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
    name: "MOS 2016",
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

export const portfolioData: PortfolioData = {
  profile: {
    name: "Dhafin Kurniawan",
    headline: "Informatics Graduate · IT & System Enthusiast · Data & Reporting Analyst · Web & Python Developer",
    subtitle:
      "Lulusan S1 Informatika Universitas Gunadarma (IPK 3,80/4,00) • Certified Associate Data Scientist (BNSP)",
    summary:
      "Senang memecahkan masalah lewat teknologi. Berpengalaman membangun aplikasi web, mengolah data menjadi laporan, membuat sistem otomasi dengan Python, hingga menangani operasional teknis dan jaringan. Memiliki latar belakang kuat dari S1 Informatika (IPK 3,80), adaptif, dan siap berkontribusi pada peran IT Umum, Data & Reporting, Web Development, maupun Sistem Operasional.",
    location: "Pamulang, Tangerang Selatan, Banten, Indonesia",
    contact: {
      email: "dhafinkurniawan3@gmail.com",
      linkedin: "https://linkedin.com/in/dhafinkurniawan",
      github: "https://github.com/dhafinwan",
      huggingface: "https://huggingface.co/Dhafinwan",
      instagram: "https://instagram.com/dhafinwan",
      tiktok: "https://tiktok.com/@finn.code",
      // phone sengaja tidak diisi (opsional, dilarang dirender di UI)
    },
    cvFilePath: encodeURI("/cv/CV_DHAFIN KURNIAWAN_ENGLISH.pdf"),
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
      tech: [
        "Python",
        "Streamlit",
        "Hugging Face",
        "BeautifulSoup",
        "Pandas",
      ],
      points: [
        "Membangun aplikasi web interaktif berbasis Streamlit untuk mengelompokkan ribuan abstrak jurnal ke dalam kategori bidang studi secara instan dan akurat (94,34%).",
        "Mengembangkan pipeline ekstraksi data otomatis dengan teknik web scraping (Python + BeautifulSoup) untuk mengumpulkan dan membersihkan 4.900+ data dokumen.",
        "Menyediakan fitur batch upload dan indikator keyakinan (confidence score) agar pengguna dapat memproses banyak dokumen sekaligus dengan praktis.",
        "Menyelesaikan implementasi solusi secara end-to-end mulai dari perumusan kebutuhan, pengolahan data, hingga aplikasi siap pakai.",
      ],
      // href sengaja kosong (belum ada URL publik spesifik)
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
      // href sengaja kosong (belum ada URL publik spesifik)
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
      // href sengaja kosong (belum ada URL publik spesifik)
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
      // href sengaja kosong (belum ada URL publik spesifik)
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
      // href sengaja kosong (belum ada URL publik spesifik)
    },
  ],

  workflow: [
    {
      step: 1,
      title: "Pengolahan Data & Reporting",
      description:
        "Mengumpulkan data dari database atau scraping web, membersihkan data yang berantakan, lalu menyusunnya menjadi laporan rapi dan visualisasi dashboard yang mudah dipahami.",
    },
    {
      step: 2,
      title: "Pengembangan Web & Otomasi",
      description:
        "Membangun aplikasi web praktis yang responsif serta membuat skrip Python untuk mengotomasi pekerjaan manual berulang agar operasional tim lebih cepat dan efisien.",
    },
    {
      step: 3,
      title: "IT Support & Operasional Digital",
      description:
        "Menangani troubleshooting komputer & jaringan, memonitor sistem aplikasi, serta mendampingi kelancaran operasional teknis harian secara sigap dan solutif.",
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

  certifications: [
    {
      name: "Sementara LSP Data Science (Associate Data Scientist)",
      issuer: "BNSP (LSP Informatika)",
      periodOrYear: "2026",
      category: "Data & AI",
      fileUrl: encodeURI("/certificates/Sementara LSP Data Science.pdf"),
      previewType: "pdf",
    },
    {
      name: "Junior Network Administrator",
      issuer: "BNSP",
      periodOrYear: "Apr 2022 – Apr 2025",
      category: "Network & IT",
      fileUrl: encodeURI("/certificates/Junior Network Administrator.jpg"),
      previewType: "image",
    },
    {
      name: "MOS 2016 (Microsoft Office Specialist)",
      issuer: "Microsoft",
      periodOrYear: "2022",
      category: "General & Office",
      fileUrl: encodeURI("/certificates/MOS 2016.pdf"),
      previewType: "pdf",
    },
  ],

  trainings: [
    {
      name: "Data Science Course (First Case)",
      issuer: "Universitas Gunadarma",
      periodOrYear: "Mei 2026",
      category: "Data & AI",
      fileUrl: encodeURI("/certificates/Data Science Course (First Case).pdf"),
      previewType: "pdf",
    },
    {
      name: "Data Science Course (Second Case)",
      issuer: "Universitas Gunadarma",
      periodOrYear: "Mei 2026",
      category: "Data & AI",
      fileUrl: encodeURI("/certificates/Data Science Course (Second Case).pdf"),
      previewType: "pdf",
    },
    {
      name: "ORACLE FOR BEGINNER",
      issuer: "Universitas Gunadarma / Oracle",
      periodOrYear: "Agu 2023",
      category: "Programming & DB",
      fileUrl: encodeURI("/certificates/ORACLE FOR BEGINNER.pdf"),
      previewType: "pdf",
    },
    {
      name: "ORACLE FOR INTERMEDIATE",
      issuer: "Universitas Gunadarma / Oracle",
      periodOrYear: "Agu 2025",
      category: "Programming & DB",
      fileUrl: encodeURI("/certificates/ORACLE FOR INTERMEDIATE.pdf"),
      previewType: "pdf",
    },
    {
      name: "GO-LANG FOR BEGINNER",
      issuer: "Universitas Gunadarma",
      periodOrYear: "Feb 2024",
      category: "Programming & DB",
      fileUrl: encodeURI("/certificates/GO-LANG FOR BEGINNER.pdf"),
      previewType: "pdf",
    },
    {
      name: "GO-LANG FOR INTERMEDIATE",
      issuer: "Universitas Gunadarma",
      periodOrYear: "Feb 2025",
      category: "Programming & DB",
      fileUrl: encodeURI("/certificates/GO-LANG FOR INTERMEDIATE.pdf"),
      previewType: "pdf",
    },
    {
      name: "Introduction to wireless LAN installation",
      issuer: "Cisco Networking Academy",
      periodOrYear: "Okt 2024",
      category: "Network & IT",
      fileUrl: encodeURI("/certificates/Introduction to wireless LAN installation.pdf"),
      previewType: "pdf",
    },
    {
      name: "FUNDAMENTAL DBMS",
      issuer: "Universitas Gunadarma",
      periodOrYear: "Agu 2023",
      category: "Programming & DB",
      fileUrl: encodeURI("/certificates/FUNDAMENTAL DBMS.pdf"),
      previewType: "pdf",
    },
    {
      name: "FUNDAMENTAL WEB PROGRAMMING",
      issuer: "Universitas Gunadarma",
      periodOrYear: "Feb 2023",
      category: "Programming & DB",
      fileUrl: encodeURI("/certificates/FUNDAMENTAL WEB PROGRAMMING.pdf"),
      previewType: "pdf",
    },
    {
      name: "Aptitude Test",
      issuer: "Universitas Gunadarma",
      periodOrYear: "2023",
      category: "General & Office",
      fileUrl: encodeURI("/certificates/Aptitude Test.pdf"),
      previewType: "pdf",
    },
  ],

  allCertificatesBundleUrl: encodeURI("/certificates/Gabungan seluruh sertifikat.pdf"),
  allCertificates,
};
