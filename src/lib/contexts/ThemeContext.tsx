import React, { createContext, useCallback, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Theme = "light" | "dark";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleThemeMode: () => void;
};

/* eslint-disable react-refresh/only-export-components */
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage<Theme>("light", "theme");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleThemeMode = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setTheme]);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode: theme === "dark", toggleThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
