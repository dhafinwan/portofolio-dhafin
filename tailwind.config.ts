import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // ── Swiss Editorial / Independent Studio "Forma" tokens ──────
      colors: {
        bg:          "var(--sh-bg)",
        fg:          "var(--sh-fg)",
        surface:     "var(--sh-surface)",
        "surface-2": "var(--sh-surface-2)",
        border:      "var(--sh-border)",
        text: {
          primary:   "var(--sh-fg)",
          secondary: "var(--sh-text-secondary)",
          muted:     "var(--sh-text-muted)",
          inverse:   "var(--sh-bg)",
        },
        accent: {
          DEFAULT:   "var(--sh-fg)",
          text:      "var(--sh-fg)",
        },
      },

      // ── Typography: Geist + Instrument Serif ─────────────────────
      fontFamily: {
        sans:    ["'Geist'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["'Geist'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body:    ["'Geist'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif:   ["'Instrument Serif'", "Georgia", "serif"],
        mono:    ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
        "5xl": ["3rem",      { lineHeight: "1.08" }],
        "6xl": ["3.75rem",   { lineHeight: "1.04" }],
        "7xl": ["4.5rem",    { lineHeight: "1.02" }],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight:   "-0.025em",
        normal:  "0em",
        wide:    "0.05em",
        wider:   "0.1em",
        widest:  "0.15em",
      },
      borderRadius: {
        none: "0",
        sm:   "6px",
        md:   "10px",
        lg:   "14px",
        xl:   "20px",
        "2xl":"28px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
