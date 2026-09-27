"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { isWebsiteTheme, THEME_STORAGE_KEY, type WebsiteTheme } from "@/lib/theme";

type ThemeContextValue = {
  mode: WebsiteTheme;
  websiteTheme: WebsiteTheme;
  setMode: (mode: WebsiteTheme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function PwThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<WebsiteTheme>("light");

  const applyMode = useCallback((nextMode: WebsiteTheme, persist = true) => {
    setModeState(nextMode);
    document.documentElement.dataset.theme = nextMode;
    if (persist) {
      try { localStorage.setItem(THEME_STORAGE_KEY, nextMode); } catch {}
    }
  }, []);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(THEME_STORAGE_KEY); } catch {}
    applyMode(isWebsiteTheme(saved) ? saved : "light", false);

    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) {
        applyMode(isWebsiteTheme(event.newValue) ? event.newValue : "light", false);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [applyMode]);

  const value = useMemo<ThemeContextValue>(() => ({
    mode,
    websiteTheme: mode,
    setMode: applyMode,
  }), [mode, applyMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function usePwTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("usePwTheme must be used within PwThemeProvider");
  return theme;
}
