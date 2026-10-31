import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "id" | "en";
export type Theme = "light" | "dark";

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_LANG = "dhafin_portfolio_lang";
const STORAGE_KEY_THEME = "dhafin_portfolio_theme";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(STORAGE_KEY_LANG);
        if (saved === "id" || saved === "en") return saved;
      }
    } catch {
      // Ignore localStorage security/sandbox errors
    }
    return "id";
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(STORAGE_KEY_THEME);
        if (saved === "light" || saved === "dark") return saved;
      }
    } catch {
      // Ignore localStorage security/sandbox errors
    }
    return "light";
  });

  const applyThemeToDOM = (activeTheme: Theme) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-theme", activeTheme);
    if (activeTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const applyLangToDOM = (activeLang: Language) => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = activeLang;
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    applyLangToDOM(newLang);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY_LANG, newLang);
      }
    } catch {
      // Ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyThemeToDOM(newTheme);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY_THEME, newTheme);
      }
    } catch {
      // Ignore
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    applyLangToDOM(lang);
    applyThemeToDOM(theme);
  }, [lang, theme]);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
