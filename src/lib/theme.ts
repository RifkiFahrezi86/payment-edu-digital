export type DisplayMode = "light" | "dark" | "auto";
export type WebsiteTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "saku-sultan-display-mode";

export function isDisplayMode(value: string | null): value is DisplayMode {
  return value === "light" || value === "dark" || value === "auto";
}

// Apply the saved website theme before paint. Auto always means a light website.
export const THEME_INIT_SCRIPT = `(() => {
  let mode = "auto";
  try {
    const saved = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (saved === "light" || saved === "dark" || saved === "auto") mode = saved;
  } catch {}
  document.documentElement.dataset.theme = mode === "dark" ? "dark" : "light";
  document.documentElement.dataset.displayMode = mode;
})();`;
