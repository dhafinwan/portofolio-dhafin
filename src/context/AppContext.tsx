import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "id" | "en";
export type Theme = "dark" | "light";

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dhafin_portfolio_lang");
      if (saved === "id" || saved === "en") return saved;
    }
    return "id";
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dhafin_portfolio_theme");
      if (saved === "dark" || saved === "light") return saved;
    }
    return "dark"; // Default dark: #111110
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("dhafin_portfolio_lang", newLang);
      document.documentElement.lang = newLang;
    }
  };

  const toggleLang = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("dhafin_portfolio_theme", newTheme);
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // Initial sync
    document.documentElement.lang = lang;
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

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
