export interface ProfileContact {
  email: string;
  linkedin: string;
  github: string;
  huggingface: string;
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

export interface Certification {
  name: string;
  issuer: string;
  periodOrYear: string;
}

export interface Training {
  name: string;
  issuer: string;
  periodOrYear: string;
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
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Dhafin Kurniawan",
    headline: "Data Analyst · Data Scientist · Machine Learning Engineer",
    subtitle:
      "Lulusan S1 Informatika Universitas Gunadarma (IPK 3,80/4,00) • Certified Associate Data Scientist (BNSP)",
    summary:
      "Memiliki fondasi teknis dalam pemrograman, basis data, jaringan, dan analisis data. Membangun proyek machine learning dan NLP dengan Python, SQL, dan Streamlit, termasuk skripsi IndoBERT dengan akurasi 94,34%. Berpengalaman memantau dan menyelesaikan masalah teknis pada operasi siaran langsung. Berpengalaman mengeksekusi siklus proyek data end-to-end: ekstraksi data (web scraping, API), pembersihan data (outlier, imbalanced class), pengembangan model prediktif dan klasifikasi, hingga deployment aplikasi. Mencari posisi entry-level di bidang IT / data.",
    location: "Pamulang, Tangerang Selatan, Banten, Indonesia",
    contact: {
      email: "dhafinkurniawan3@gmail.com",
      linkedin: "https://linkedin.com/in/dhafinkurniawan",
      github: "https://github.com/dhafinwan",
      huggingface: "https://huggingface.co/Dhafinwan",
      // phone sengaja tidak diisi (opsional, dilarang dirender di UI)
    },
    cvFilePath: "/cv/CV_DHAFIN KURNIAWAN_ENGLISH.pdf",
  },

  highlights: [
    {
      value: "94,34%",
      label: "Akurasi IndoBERT",
      description: "Akurasi model IndoBERT pada klasifikasi teks abstrak jurnal ilmiah (skripsi)",
    },
    {
      value: "4.941",
      label: "Abstrak Jurnal",
      description: "Abstrak jurnal Teknik Mesin diklasifikasikan ke dalam 3 kelas",
    },
    {
      value: "5",
      label: "Proyek Data Science",
      description: "Proyek machine learning dan NLP yang dikembangkan secara end-to-end",
    },
    {
      value: "3,80",
      label: "IPK S1 Informatika",
      description: "Lulusan Universitas Gunadarma dengan predikat akademik memuaskan",
    },
  ],

  projects: [
    {
      id: "indobert-journal-classification",
      title: "Klasifikasi Teks Abstrak Jurnal Ilmiah dengan IndoBERT (Skripsi)",
      category: "Natural Language Processing",
      period: "Agu 2026",
      featured: true,
      tech: [
        "Python",
        "Hugging Face Transformers",
        "BeautifulSoup",
        "Pandas",
        "Streamlit",
      ],
      points: [
        "Mengembangkan model klasifikasi teks NLP berbasis IndoBERT untuk mengategorikan 4.941 abstrak jurnal Teknik Mesin ke dalam 3 kelas (Energi, Manufaktur, Material) dengan akurasi 94,34%.",
        "Merancang data pipeline dari web scraping (Python + BeautifulSoup) hingga pembersihan dan deduplikasi dataset.",
        "Menerapkan metodologi CRISP-DM secara end-to-end, dari pemahaman bisnis hingga evaluasi model akhir.",
        "Membangun aplikasi web Streamlit untuk deployment model, dengan fitur batch prediction, confidence bar, dan deteksi out-of-distribution (OOD).",
      ],
      // href sengaja kosong (belum ada URL publik spesifik)
    },
    {
      id: "used-car-price-prediction",
      title: "Prediksi Harga Jual Mobil Bekas dengan Random Forest (Data Science Course)",
      category: "Machine Learning / Regression",
      period: "Jun 2026",
      tech: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
      points: [
        "Membangun model regresi Random Forest Regressor untuk memprediksi harga jual kendaraan bekas dari 4.340 rekam data.",
        "Prapemrosesan: penanganan missing values, penghapusan duplikat, label encoding.",
        "Evaluasi dengan metrik MAE, RMSE, dan R² Score.",
      ],
      // href sengaja kosong (belum ada URL publik spesifik)
    },
    {
      id: "diabetes-risk-classification",
      title: "Klasifikasi Risiko Penderita Diabetes (Data Science Course)",
      category: "Machine Learning / Classification",
      period: "Okt 2025",
      tech: ["Python", "Scikit-learn", "Pandas", "Plotly"],
      points: [
        "Membandingkan Logistic Regression, Random Forest, SVM, dan Gradient Boosting.",
        "Menangani outlier dengan IQR, ketidakseimbangan kelas dengan SMOTE, reduksi dimensi dengan PCA (varians 85% dipertahankan).",
        "Random Forest mencapai akurasi 90% dan ROC-AUC 0,91, divisualisasikan interaktif dengan Plotly.",
      ],
      // href sengaja kosong (belum ada URL publik spesifik)
    },
    {
      id: "electric-vehicle-sentiment-analysis",
      title: "Analisis Sentimen Masyarakat Terhadap Mobil Listrik (Penulisan Ilmiah)",
      category: "NLP & Sentiment Analysis",
      period: "Jul 2025",
      tech: ["Python", "Naive Bayes", "SMOTE", "YouTube API", "Sastrawi"],
      points: [
        "Mengekstraksi 1.787 komentar opini publik via YouTube API.",
        "Pemrosesan teks: normalisasi bahasa gaul, stopword removal, tokenisasi, stemming dengan Sastrawi.",
        "Model Multinomial Naive Bayes dengan SMOTE, akurasi 78,28%.",
        "Insight menggabungkan analisis teks dengan data survei kuantitatif (Skala Likert).",
      ],
      // href sengaja kosong (belum ada URL publik spesifik)
    },
    {
      id: "academic-vision-architecture",
      title: "Proyek Akademik: Pengolahan Citra & Arsitektur Sistem",
      category: "Computer Vision & Distributed Systems",
      period: "2024–2026",
      tech: ["Python", "Google Colab", "Distributed Systems", "SOA Architecture"],
      points: [
        "Computer Vision: teknik peningkatan kualitas gambar (image brightening) dengan Python di Google Colab.",
        "System Architecture: desain arsitektur sistem terdistribusi untuk pipeline analisis sentimen, dan purwarupa arsitektur berbasis Service-Oriented Architecture (SOA).",
      ],
      // href sengaja kosong (belum ada URL publik spesifik)
    },
  ],

  workflow: [
    {
      step: 1,
      title: "Ekstraksi Data",
      description: "Web scraping & API",
    },
    {
      step: 2,
      title: "Pembersihan Data",
      description: "Outlier, missing values, duplikat, imbalanced class",
    },
    {
      step: 3,
      title: "Pemodelan",
      description:
        "Klasifikasi & regresi (IndoBERT, Random Forest, Naive Bayes, dll.)",
    },
    {
      step: 4,
      title: "Deployment",
      description: "Aplikasi Streamlit dengan batch prediction & deteksi OOD",
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
      category: "Data & Machine Learning",
      skills: [
        "Data Analysis",
        "Predictive Modeling (Classification & Regression)",
        "Machine Learning",
        "NLP",
        "Text Classification",
        "Sentiment Analysis",
        "Web Scraping",
        "Computer Vision (dasar)",
        "CRISP-DM",
        "Feature Engineering",
        "SMOTE",
        "PCA",
        "Label Encoding",
        "Outlier Handling (IQR)",
        "Data Cleaning",
      ],
    },
    {
      category: "Bahasa & Database",
      skills: [
        "Python",
        "SQL",
        "Go",
        "PHP",
        "HTML",
        "Oracle Database",
        "DBMS",
      ],
    },
    {
      category: "Library & Tools",
      skills: [
        "Hugging Face Transformers",
        "Scikit-learn",
        "Pandas",
        "NLTK",
        "BeautifulSoup",
        "Streamlit",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "RapidMiner",
        "Git",
        "Figma",
      ],
    },
    {
      category: "Jaringan & IT Operations",
      skills: [
        "Network Troubleshooting",
        "Wireless LAN Installation",
        "Junior Network Administration",
        "System Monitoring",
        "Technical Troubleshooting",
      ],
    },
  ],

  certifications: [
    {
      name: "Associate Data Scientist (Ilmuwan Data Madya)",
      issuer: "BNSP",
      periodOrYear: "2026",
    },
    {
      name: "Junior Network Administrator",
      issuer: "BNSP",
      periodOrYear: "Apr 2022 – Apr 2025",
    },
    {
      name: "Microsoft Office Specialist (MOS): Word 2016",
      issuer: "Microsoft",
      periodOrYear: "2022",
    },
  ],

  trainings: [
    {
      name: "Data Science Course: First & Second Case",
      issuer: "Universitas Gunadarma",
      periodOrYear: "Mei 2026",
    },
    {
      name: "Oracle for Beginner & Intermediate",
      issuer: "Universitas Gunadarma / Oracle",
      periodOrYear: "Agu 2023 – Agu 2025",
    },
    {
      name: "Go-Lang for Beginner & Intermediate",
      issuer: "Universitas Gunadarma",
      periodOrYear: "Feb 2024 – Feb 2025",
    },
    {
      name: "Introduction to Wireless LAN Installation",
      issuer: "Cisco Networking Academy",
      periodOrYear: "Okt 2024",
    },
    {
      name: "Fundamental DBMS",
      issuer: "Universitas Gunadarma",
      periodOrYear: "Agu 2023",
    },
    {
      name: "Fundamental Web Programming",
      issuer: "Universitas Gunadarma",
      periodOrYear: "Feb 2023",
    },
  ],
};
