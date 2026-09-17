"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { isDisplayMode, THEME_STORAGE_KEY, type DisplayMode, type WebsiteTheme } from "@/lib/theme";

type ThemeContextValue = {
  mode: DisplayMode;
  websiteTheme: WebsiteTheme;
  setMode: (mode: DisplayMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function PwThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<DisplayMode>("auto");

  const applyMode = useCallback((nextMode: DisplayMode, persist = true) => {
    setModeState(nextMode);
    document.documentElement.dataset.theme = nextMode === "dark" ? "dark" : "light";
    document.documentElement.dataset.displayMode = nextMode;
    if (persist) {
      try { localStorage.setItem(THEME_STORAGE_KEY, nextMode); } catch {}
    }
  }, []);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(THEME_STORAGE_KEY); } catch {}
    applyMode(isDisplayMode(saved) ? saved : "auto", false);

    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) {
        applyMode(isDisplayMode(event.newValue) ? event.newValue : "auto", false);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [applyMode]);

  const value = useMemo<ThemeContextValue>(() => ({
    mode,
    websiteTheme: mode === "dark" ? "dark" : "light",
    setMode: applyMode,
  }), [mode, applyMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function usePwTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("usePwTheme must be used within PwThemeProvider");
  return theme;
}
