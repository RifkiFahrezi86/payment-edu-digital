export type WebsiteTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "saku-sultan-display-mode";

export function isWebsiteTheme(value: string | null): value is WebsiteTheme {
  return value === "light" || value === "dark";
}

// Apply the saved website theme before paint. Old "auto" preferences fall back to light.
export const THEME_INIT_SCRIPT = `(() => {
  let mode = "light";
  try {
    const saved = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (saved === "dark") mode = "dark";
  } catch {}
  document.documentElement.dataset.theme = mode;
})();`;
