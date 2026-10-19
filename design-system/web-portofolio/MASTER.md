# MASTER Design System — Web Portofolio Dhafin Kurniawan
*Generated: 2026-10-19 · Opsi A "Editorial Dark" · ui-ux-pro-max v1*

> **Aturan Utama**: Dokumen ini adalah satu-satunya sumber kebenaran visual.
> Tidak boleh ada nilai warna, spacing, radius, atau durasi yang "hardcoded" di komponen
> tanpa tercantum di sini terlebih dahulu. Semua keputusan visual mengacu ke MASTER ini.

---

## 1. Identitas Visual & Tone

| Aspek | Keputusan |
|---|---|
| **Produk** | Portofolio Personal — Dhafin Kurniawan |
| **Persona Pengunjung** | Rekruter, HR, hiring manager di bidang data/IT (1–2 menit scanning) |
| **Tone** | Profesional · Bersih · Percaya Diri · Teknis tapi Hangat |
| **Rasa Visual** | "Editorial Data" — laporan teknis premium, bukan landing page SaaS |
| **Style** | Motion-Driven + Minimalism & Swiss Style (Portfolio/Personal #11) |
| **Mode** | Dark Only — tidak ada light/dark toggle |

### Anti-Pattern yang Wajib Dihindari

- Gradient ungu–biru generik ala template AI
- Glassmorphism berlebihan (backdrop-blur di mana-mana)
- Neon / glow effect
- Ilustrasi stock / emoji sebagai ikon struktural
- Shadow berat (box-shadow tebal berlapis)
- Lebih dari 2 font family
- Kartu yang semua sama persis tanpa hierarki
- Angka / testimoni / tautan repo yang dikarang
- Animasi layout (width, height, margin, top, left)
- Lorem ipsum / placeholder

---

## 2. Color Tokens

### Primitive Palette (jangan dipakai langsung di komponen)

```css
/* Zinc scale */
--zinc-950: #09090B;
--zinc-900: #18181B;
--zinc-800: #27272A;
--zinc-700: #3F3F46;
--zinc-600: #52525B;
--zinc-500: #71717A;
--zinc-400: #A1A1AA;
--zinc-300: #D4D4D8;
--zinc-100: #F4F4F5;
--zinc-50:  #FAFAFA;

/* Blue accent scale */
--blue-700: #1D4ED8;
--blue-600: #2563EB;
--blue-500: #3B82F6;
--blue-400: #60A5FA;

/* Semantic states */
--red-500:   #EF4444;
--green-500: #22C55E;
--amber-500: #F59E0B;
```

### Semantic Tokens (WAJIB dipakai di semua komponen)

```css
/* Surfaces */
--color-bg:            #09090B;
--color-surface:       #111113;
--color-surface-2:     #18181B;
--color-overlay:       rgba(9,9,11,0.85);

/* Border */
--color-border:        #27272A;
--color-border-subtle: #1C1C1F;

/* Text */
--color-text-primary:   #FAFAFA;
--color-text-secondary: #A1A1AA;
--color-text-muted:     #52525B;
--color-text-inverse:   #09090B;

/* Accent (satu warna aksen saja) */
--color-accent:       #2563EB;
--color-accent-hover: #1D4ED8;
--color-accent-muted: rgba(37,99,235,0.12);
--color-accent-text:  #60A5FA;

/* Semantic states */
--color-success: #22C55E;
--color-warning: #F59E0B;
--color-error:   #EF4444;
--color-info:    #3B82F6;

/* Focus */
--color-focus-ring: #2563EB;
```

### Kontras & Aksesibilitas (WCAG)

| Pasangan Warna | Rasio | Level |
|---|---|---|
| text-primary di atas color-bg | ~19.6:1 | AAA |
| text-secondary di atas color-bg | ~5.8:1 | AA |
| accent-text di atas color-bg | ~5.0:1 | AA |
| zinc-50 di atas color-accent (tombol) | ~5.4:1 | AA |
| text-muted — JANGAN untuk teks konten penting | ~2.6:1 | Fail |

---

## 3. Typography

### Font Pairing: Space Grotesk + DM Sans

Sumber: typography.csv row #3 (Tech Startup) + row #20 (Premium Sans DM Sans)

```html
<!-- Google Fonts — masukkan di index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&display=swap" rel="stylesheet">
```

```css
--font-heading: 'Space Grotesk', system-ui, sans-serif;
--font-body:    'DM Sans', system-ui, sans-serif;
```

### Type Scale (clamp-responsive)

```css
/* Heading */
--text-display: clamp(2.5rem, 5vw, 4rem);
--text-h1:      clamp(2rem, 4vw, 3rem);
--text-h2:      clamp(1.5rem, 3vw, 2rem);
--text-h3:      clamp(1.125rem, 2vw, 1.375rem);
--text-h4:      1.125rem;

/* Body */
--text-body-lg: 1.125rem;
--text-body:    1rem;
--text-body-sm: 0.9375rem;
--text-caption: 0.875rem;
--text-xs:      0.75rem;

/* Line height */
--leading-tight:   1.2;
--leading-snug:    1.35;
--leading-normal:  1.6;
--leading-relaxed: 1.75;

/* Weight */
--weight-regular:  400;
--weight-medium:   500;
--weight-semibold: 600;
--weight-bold:     700;

/* Letter spacing */
--tracking-tight:  -0.025em;
--tracking-normal:  0;
--tracking-wide:    0.05em;
--tracking-wider:   0.1em;
```

### Hierarki Penerapan

| Elemen | Font | Size | Weight | Color |
|---|---|---|---|---|
| Nama hero | heading | display | 700 | text-primary |
| Section title | heading | h2 | 700 | text-primary |
| Card title | heading | h3 | 600 | text-primary |
| Body paragraph | body | body | 400 | text-primary |
| Keterangan / tanggal | body | caption | 400 | text-secondary |
| Label section (uppercase) | body | xs | 600 | text-secondary |
| Chip keahlian | body | xs | 500 | text-secondary |
| Angka sorotan | heading | h1/display | 700 | text-primary |

---

## 4. Spacing Scale (4px rhythm)

```css
--space-1:  0.25rem;  /* 4px */
--space-2:  0.5rem;   /* 8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Panduan Penggunaan

| Konteks | Token |
|---|---|
| Padding internal card | space-5 / space-6 |
| Gap antar elemen dalam section | space-6 / space-8 |
| Gap antar card / grid item | space-4 / space-6 |
| Padding section vertikal | space-16/space-20 (desktop), space-12 (mobile) |
| Gap chip keahlian | space-2 |
| Margin antara section | space-20 / space-24 |

---

## 5. Border Radius

```css
--radius-sm:   4px;
--radius-md:   6px;
--radius-lg:   10px;
--radius-xl:   14px;
--radius-full: 9999px;
```

Prinsip: radius kecil — tegas dan editorial, tidak bubbly.

---

## 6. Shadow & Elevation

Border sebagai pemisah primer. Shadow hanya untuk elemen mengambang.

```css
--shadow-none:  none;
--shadow-sm:    0 1px 2px rgba(0,0,0,0.4);
--shadow-md:    0 4px 12px rgba(0,0,0,0.5);
--shadow-lg:    0 8px 24px rgba(0,0,0,0.6);
--shadow-focus: 0 0 0 3px rgba(37,99,235,0.5);
```

Aturan: gunakan `border: 1px solid var(--color-border)` sebagai pemisah primer.
Shadow-md hanya saat hover kartu. Shadow-lg untuk modal/dropdown.

---

## 7. Grid & Layout

### Lebar Kontainer

```css
--container-max:    1200px;
--container-prose:  680px;
--container-narrow: 900px;
```

### Responsive Breakpoints

| Breakpoint | Min-width | Tailwind | Konteks |
|---|---|---|---|
| Mobile | 360px (default) | — | 1 kolom, stack vertikal |
| Tablet | 768px | md: | 2 kolom, nav horizontal |
| Desktop | 1280px | xl: | layout penuh, 3 kolom |

### Gutter

```css
--gutter-mobile:  1.25rem;  /* 20px */
--gutter-tablet:  2rem;     /* 32px */
--gutter-desktop: 2.5rem;   /* 40px */
```

### Grid Proyek

- Mobile: 1 kolom
- Tablet (768px+): 2 kolom
- Desktop (1280px+): Featured baris pertama (penuh/lebar), lalu 2-3 kolom
- Gap: space-6

---

## 8. Component Specifications

### 8.1 Tombol

#### Primer (Hubungi Saya)

```css
background:    var(--color-accent);
color:         var(--color-text-primary);
padding:       var(--space-3) var(--space-6);
border-radius: var(--radius-md);
font-weight:   var(--weight-semibold);
font-size:     var(--text-body);
border:        none;
transition:    background 0.2s ease, transform 0.2s ease;

/* Hover */
background:  var(--color-accent-hover);
transform:   translateY(-1px);

/* Focus */
outline:        3px solid var(--color-focus-ring);
outline-offset: 3px;
```

#### Sekunder (Unduh CV)

```css
background:    transparent;
color:         var(--color-text-primary);
border:        1px solid var(--color-border);
padding:       var(--space-3) var(--space-6);
border-radius: var(--radius-md);
transition:    border-color 0.2s ease, background 0.2s ease;

/* Hover */
border-color: var(--color-accent);
background:   var(--color-accent-muted);
```

#### Ghost (Nav links)

```css
background: transparent;
color:      var(--color-text-secondary);
padding:    var(--space-2) var(--space-3);
border:     none;
transition: color 0.2s ease;

/* Hover */
color: var(--color-text-primary);
```

### 8.2 Card Proyek

```css
/* Default */
background:    var(--color-surface);
border:        1px solid var(--color-border);
border-radius: var(--radius-md);
padding:       var(--space-6);
transition:    border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

/* Hover */
border-color: var(--zinc-700);
box-shadow:   var(--shadow-md);
transform:    translateY(-2px);

/* Featured — tambahan */
border-left:   2px solid var(--color-accent);
padding:       var(--space-8);
border-radius: var(--radius-lg);
```

Struktur card (urutan dari atas):
1. category — uppercase, text-xs, text-secondary, tracking-wider
2. title — text-h3, semibold, text-primary
3. period — text-caption, text-secondary
4. Tech badge chips
5. Bullet points
6. Tombol (HANYA jika href tidak kosong/undefined)

### 8.3 Chip / Badge

#### Chip Keahlian (Skills section)

```css
background:    var(--color-accent-muted);
color:         var(--color-accent-text);
border:        1px solid rgba(37,99,235,0.2);
border-radius: var(--radius-sm);
padding:       3px var(--space-2);
font-size:     var(--text-xs);
font-weight:   var(--weight-medium);
white-space:   nowrap;
```

#### Chip Tech Stack (di dalam card proyek)

```css
background:    var(--color-surface-2);
color:         var(--color-text-secondary);
border:        1px solid var(--color-border);
border-radius: var(--radius-sm);
padding:       3px var(--space-2);
font-size:     var(--text-xs);
```

### 8.4 Timeline

```css
/* Wrapper */
position:     relative;
padding-left: var(--space-8);

/* Garis vertikal */
.timeline-line {
  position:   absolute;
  left:       7px;
  top:        8px;
  bottom:     0;
  width:      1px;
  background: var(--color-border);
}

/* Titik */
.timeline-dot {
  position:      absolute;
  left:          0;
  top:           6px;
  width:         8px;
  height:        8px;
  border-radius: 50%;
  background:    var(--color-accent);
  border:        2px solid var(--color-bg);
}

/* Teks */
.timeline-period  { font-size: var(--text-xs);      color: var(--color-text-secondary); }
.timeline-title   { font-size: var(--text-h3);      font-weight: var(--weight-semibold); }
.timeline-company { font-size: var(--text-body-sm); color: var(--color-text-secondary); }
```

### 8.5 Angka Sorotan (Highlight Metric)

```css
.metric-value {
  font-family:     var(--font-heading);
  font-size:       var(--text-h1);
  font-weight:     var(--weight-bold);
  color:           var(--color-text-primary);
  letter-spacing:  var(--tracking-tight);
  line-height:     var(--leading-tight);
}

.metric-label {
  font-family:  var(--font-body);
  font-size:    var(--text-caption);
  color:        var(--color-text-secondary);
  font-weight:  var(--weight-medium);
}
```

Grid: 2x2 mobile → 4 kolom desktop.
Pemisah kolom: `border-right: 1px solid var(--color-border)` (kecuali kolom terakhir).

### 8.6 Navbar

```css
background:             rgba(9,9,11,0.85);
backdrop-filter:        blur(12px);
-webkit-backdrop-filter: blur(12px);
border-bottom:          1px solid var(--color-border);
height:                 64px;
position:               fixed;
top:                    0;
width:                  100%;
z-index:                var(--z-sticky);

/* Kompensasi body */
/* body { padding-top: 64px; } */
```

Nav links: Ghost style. Active: `color: text-primary; border-bottom: 2px solid accent`.
Mobile: hamburger (List icon) → drawer slide dari kanan, overlay color-overlay.

### 8.7 Section Label

```css
.section-label {
  font-family:     var(--font-body);
  font-size:       var(--text-xs);
  font-weight:     var(--weight-semibold);
  letter-spacing:  var(--tracking-wider);
  text-transform:  uppercase;
  color:           var(--color-accent-text);
  margin-bottom:   var(--space-2);
  display:         block;
}
```

### 8.8 Social Links / Kontak

```css
color:      var(--color-text-secondary);
transition: color 0.2s ease;

/* Hover */
color: var(--color-text-primary);
```

### 8.9 Workflow Step (CRISP-DM)

```css
.workflow-step {
  display:     flex;
  gap:         var(--space-4);
  align-items: flex-start;
}

.step-number {
  font-family:  var(--font-heading);
  font-size:    var(--text-h2);
  font-weight:  var(--weight-bold);
  color:        rgba(37,99,235,0.25);
  line-height:  1;
  min-width:    2rem;
  flex-shrink:  0;
}

.step-title {
  font-size:   var(--text-body-lg);
  font-weight: var(--weight-semibold);
  color:       var(--color-text-primary);
}

.step-desc {
  font-size: var(--text-body-sm);
  color:     var(--color-text-secondary);
}
```

---

## 9. Motion & Animation Rules

Referensi: motion.csv row #4 (Scroll Reveal Subtle), #7 (Stagger List Subtle), #1 (Hover Micro Subtle)

### Aturan Wajib

1. Animasikan HANYA `transform` dan `opacity` — tidak pernah `width`, `height`, `top`, `left`, `margin`
2. Entrance pattern tunggal: `opacity: 0→1` + `translateY: 12px→0`
3. Stagger: `0.06s` per anak, `delayChildren: 0.04s`
4. Hover feedback maks `translateY(-2px)` untuk card kecil, `(-4px)` untuk featured
5. `AnimatePresence` hanya untuk elemen yang benar-benar masuk/keluar DOM (mobile nav drawer)
6. WAJIB menghormati `prefers-reduced-motion` — render final state langsung

### Token Animasi

```ts
// Dari src/lib/motion.ts
export const fadeInUpVariants: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export const containerStaggerVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

// Hover card (inline, bukan variants)
// whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: 'easeOut' }}
```

### Durasi Referensi

| Jenis | Durasi | Easing |
|---|---|---|
| Hover feedback | 150–200ms | easeOut |
| Entrance scroll | 350–450ms | [0.25, 0.1, 0.25, 1] |
| Transisi warna/border | 200ms | ease |
| Mobile drawer buka | 300ms | easeOut |
| Mobile drawer tutup | 220ms | easeIn |

### Reduced Motion

```ts
const shouldReduceMotion = usePrefersReducedMotion(); // dari src/lib/motion.ts

const safeVariants = shouldReduceMotion
  ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
  : fadeInUpVariants;
```

---

## 10. Icon System

Library: `@phosphor-icons/react`
Style: `weight="regular"` (outline) — konsisten di semua level
Size: `size={18}` inline teks, `size={20}` kontrol UI, `size={24}` dekoratif section

### Mapping Ikon

| Fungsi | Ikon | Import |
|---|---|---|
| Email | `Envelope` | `import { Envelope } from '@phosphor-icons/react'` |
| LinkedIn | `LinkedinLogo` | `import { LinkedinLogo } from '@phosphor-icons/react'` |
| GitHub | `GithubLogo` | `import { GithubLogo } from '@phosphor-icons/react'` |
| Hugging Face | `Robot` | `import { Robot } from '@phosphor-icons/react'` |
| Unduh CV | `DownloadSimple` | `import { DownloadSimple } from '@phosphor-icons/react'` |
| Lokasi | `MapPin` | `import { MapPin } from '@phosphor-icons/react'` |
| Hamburger | `List` | `import { List } from '@phosphor-icons/react'` |
| Tutup drawer | `X` | `import { X } from '@phosphor-icons/react'` |
| Link eksternal | `ArrowSquareOut` | `import { ArrowSquareOut } from '@phosphor-icons/react'` |
| Tanggal | `Calendar` | `import { Calendar } from '@phosphor-icons/react'` |

### Aksesibilitas Ikon

- Ikon dekoratif (di samping teks terlihat): `aria-hidden="true"`
- Ikon bermakna tanpa teks: beri `aria-label` pada wrapper
- Ikon dalam tombol: label pada `<button>`, bukan pada ikon

---

## 11. Responsive Rules

Mobile-first. Default = 360px. Override di `md:` (768px) dan `xl:` (1280px).

### Layout Per Breakpoint

| Section | 360px | 768px | 1280px |
|---|---|---|---|
| Navbar | Logo + hamburger | Logo + nav links | sama |
| Hero | 1 kol, center | 1 kol, left | 1 kol, max 900px |
| Metrics | 2×2 grid | 4 kol | 4 kol |
| Proyek | 1 kol | 2 kol | featured + 2-3 kol |
| Cara Kerja | 1 kol stack | 2×2 | 4 kol horizontal |
| Keahlian | 1 kol | 2 kol | 2 kol |
| Pengalaman | timeline | timeline | timeline max 800px |
| Sertifikasi | 1 kol | 2 kol | 3 kol |
| Kontak/Footer | 1 kol | 2 kol | 2 kol |

### Aturan Tambahan

- Tidak ada horizontal overflow di breakpoint manapun
- Teks body: `max-width: 65ch` di desktop
- Touch target minimum: `min-height: 44px`
- `html { scroll-behavior: smooth; }`
- `scroll-margin-top: 80px` di semua section (kompensasi sticky nav)

---

## 12. Z-Index Scale

```css
--z-base:     0;
--z-card:     10;
--z-dropdown: 20;
--z-sticky:   30;
--z-overlay:  40;
--z-modal:    50;
--z-toast:    60;
```

---

## 13. Section Architecture (Single-Page Scroll)

1. `#beranda`   — Hero (nama, headline, subjudul, ringkasan, CTA, sosial)
2. `#sorotan`   — Highlight Metrics (4 angka besar)
3. `#proyek`    — Project Showcase (featured + grid)
4. `#cara-kerja` — Workflow CRISP-DM (4 langkah)
5. `#keahlian`  — Skills (4 kategori chip)
6. `#pengalaman` — Work Experience (timeline)
7. `#pendidikan` — Education (timeline)
8. `#sertifikasi` — Certifications & Training
9. `#kontak`    — Contact & Footer

---

## 14. Tailwind Config Notes

```ts
// tailwind.config.ts
theme: {
  extend: {
    fontFamily: {
      heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
      body:    ['DM Sans', 'system-ui', 'sans-serif'],
    },
    colors: {
      bg:             '#09090B',
      surface:        '#111113',
      'surface-2':    '#18181B',
      border:         '#27272A',
      accent:         '#2563EB',
      'accent-hover': '#1D4ED8',
      'accent-text':  '#60A5FA',
      'accent-muted': 'rgba(37,99,235,0.12)',
    },
    maxWidth: {
      container: '1200px',
      prose:     '680px',
      narrow:    '900px',
    },
  },
}
```

---

## 15. Content Rules (Lintas Komponen)

- Semua konten WAJIB dari `src/data/content.ts`
- `project.href` kosong/undefined → tombol tautan TIDAK dirender sama sekali
- `profile.contact.phone` → TIDAK PERNAH dirender di UI
- Tidak ada string statis konten dalam komponen
- Angka sorotan: tampilkan `value` persis dari data, tanpa modifikasi

---

## 16. Accessibility Checklist (Pre-Delivery)

- [ ] Heading berurutan: h1 di Hero, h2 tiap section, h3 card/item
- [ ] Semua ikon dekoratif: aria-hidden="true"
- [ ] Semua tombol/link: label aksesibel
- [ ] Focus ring visible (3px solid focus-ring) di semua elemen interaktif
- [ ] prefers-reduced-motion dihormati di semua animasi
- [ ] Kontras teks primer ≥ 4.5:1 (WCAG AA)
- [ ] Tidak ada horizontal overflow di 360 / 768 / 1440px
- [ ] Touch target ≥ 44×44px
- [ ] Skip-to-main link tersembunyi (muncul saat focus)
- [ ] lang="id" di tag html
- [ ] title deskriptif
- [ ] meta description ada

---

*End of MASTER.md — jangan modifikasi tanpa persetujuan.*
*Buat page override di design-system/web-portofolio/pages/ jika perlu.*
