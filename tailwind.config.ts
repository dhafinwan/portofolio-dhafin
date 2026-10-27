import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // ── Color tokens — all map to CSS variables from index.css ──────
      colors: {
        bg:           "var(--color-bg)",
        surface:      "var(--color-surface)",
        "surface-2":  "var(--color-surface-2)",
        "surface-3":  "var(--color-surface-3)",
        border: {
          DEFAULT: "var(--color-border)",
          subtle:  "var(--color-border-subtle)",
          hover:   "var(--color-border-hover)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover:   "var(--color-accent-hover)",
          active:  "var(--color-accent-active)",
          muted:   "var(--color-accent-muted)",
          text:    "var(--color-accent-text)",
        },
        text: {
          primary:   "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted:     "var(--color-text-muted)",
          inverse:   "var(--color-text-inverse)",
        },
        // Zinc scale — used directly in Tailwind classes (hover:border-zinc-700)
        zinc: {
          50:  "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
          950: "#09090B",
        },
      },

      // ── Typography ───────────────────────────────────────────────────
      fontFamily: {
        heading: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body:    ["'DM Sans'",       "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'", "'Fira Code'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1.3" }],
        xs:    ["0.75rem",   { lineHeight: "1.4" }],
        sm:    ["0.875rem",  { lineHeight: "1.5" }],
        base:  ["1rem",      { lineHeight: "1.6" }],
        lg:    ["1.125rem",  { lineHeight: "1.55" }],
        xl:    ["1.25rem",   { lineHeight: "1.45" }],
        "2xl": ["1.5rem",    { lineHeight: "1.35" }],
        "3xl": ["1.875rem",  { lineHeight: "1.25" }],
        "4xl": ["2.25rem",   { lineHeight: "1.15" }],
        "5xl": ["3rem",      { lineHeight: "1.1" }],
        "6xl": ["3.75rem",   { lineHeight: "1.05" }],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight:   "-0.025em",
        normal:  "0em",
        wide:    "0.05em",
        wider:   "0.1em",
        widest:  "0.15em",
      },
      lineHeight: {
        tight:   "1.2",
        snug:    "1.35",
        normal:  "1.6",
        relaxed: "1.75",
      },

      // ── Spacing ──────────────────────────────────────────────────────
      // Tailwind's default scale is already 4px-based; we extend with names
      spacing: {
        "4.5": "1.125rem",
        "13":  "3.25rem",
        "15":  "3.75rem",
        "18":  "4.5rem",
        "22":  "5.5rem",
        "26":  "6.5rem",
        "30":  "7.5rem",
      },

      // ── Border Radius ────────────────────────────────────────────────
      borderRadius: {
        none: "0",
        sm:   "4px",
        DEFAULT: "6px",
        md:   "6px",
        lg:   "10px",
        xl:   "14px",
        "2xl":"20px",
        full: "9999px",
      },

      // ── Box Shadow ───────────────────────────────────────────────────
      boxShadow: {
        sm:    "var(--shadow-sm)",
        md:    "var(--shadow-md)",
        lg:    "var(--shadow-lg)",
        xl:    "var(--shadow-xl)",
        focus: "var(--shadow-focus)",
        none:  "none",
      },

      // ── Layout ───────────────────────────────────────────────────────
      maxWidth: {
        container: "1200px",
        prose:     "680px",
        narrow:    "900px",
      },

      // ── Transitions ──────────────────────────────────────────────────
      transitionTimingFunction: {
        standard: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "ease-out": "cubic-bezier(0.0, 0.0, 0.2, 1)",
        "ease-in": "cubic-bezier(0.4, 0.0, 1.0, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "350ms",
      },

      // ── Backdrop blur ─────────────────────────────────────────────────
      backdropBlur: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
      },

      // ── Animation ────────────────────────────────────────────────────
      keyframes: {
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.45", transform: "scale(0.6)" },
          "50%":      { opacity: "1",    transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) both",
        "fade-in":    "fade-in 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) both",
        "pulse-dot":  "pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
