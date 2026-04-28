import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";

export type AccentColor = "indigo" | "emerald" | "rose" | "violet";
export type ThemeMode = "dark" | "light";

const ACCENTS: AccentColor[] = ["indigo", "emerald", "rose", "violet"];

type ThemeContextType = {
  theme: ThemeMode;
  accent: AccentColor;
  toggleTheme: () => void;
  setAccent: (accent: AccentColor) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(
    () => (localStorage.getItem("theme") as ThemeMode) ?? "dark"
  );
  const [accent, setAccentState] = useState<AccentColor>(
    () => (localStorage.getItem("accent") as AccentColor) ?? "indigo"
  );

  // Apply on initial paint to avoid flash
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.classList.add("theme-light");
    root.classList.add(`accent-${accent}`);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    ACCENTS.forEach((a) => root.classList.remove(`accent-${a}`));
    root.classList.add(`accent-${accent}`);
    localStorage.setItem("accent", accent);
  }, [accent]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const setAccent = (a: AccentColor) => setAccentState(a);

  return (
    <ThemeContext.Provider value={{ theme, accent, toggleTheme, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
