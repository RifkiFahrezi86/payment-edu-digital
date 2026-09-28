"use client";

import { usePwTheme } from "./PwThemeProvider";

export function PwThemeToggle() {
  const { mode, setMode } = usePwTheme();
  const label = mode === "light" ? "Aktifkan mode gelap" : "Aktifkan mode terang";

  return (
    <button
      type="button"
      className="ss-nav-icon-button ss-theme-toggle"
      data-mode={mode}
      aria-label={label}
      title={label}
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
    >
      {mode === "light" ? (
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
        </svg>
      ) : (
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      )}
    </button>
  );
}
