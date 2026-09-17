"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { usePwTheme } from "@/components/payway/PwThemeProvider";
import type { DisplayMode, WebsiteTheme } from "@/lib/theme";

const PREVIEW_MODES: { value: DisplayMode; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "auto", label: "Auto" },
];

export function PwHeroPhoneMockup() {
  const { mode, setMode } = usePwTheme();
  const [autoTheme, setAutoTheme] = useState<WebsiteTheme>("light");
  const phoneTheme = mode === "auto" ? autoTheme : mode;

  useEffect(() => {
    if (mode !== "auto") return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const intervalId = window.setInterval(() => {
      if (document.hidden || reducedMotion.matches) return;
      setAutoTheme(current => current === "light" ? "dark" : "light");
    }, 5_000);
    return () => window.clearInterval(intervalId);
  }, [mode]);

  const selectMode = (nextMode: DisplayMode) => {
    if (nextMode === "auto") setAutoTheme("light");
    setMode(nextMode);
  };

  return (
    <figure
      aria-label="Pratinjau aplikasi Saku Sultan"
      data-theme={phoneTheme}
      data-preview-mode={mode}
      className="saku-hero-phone relative mx-auto flex w-full justify-center lg:mx-0 lg:justify-start"
    >
      <div className="saku-phone-preview">
        <div
          className="saku-hero-phone-frame"
          role="img"
          aria-label={`Tampilan aplikasi Saku Sultan dalam mode ${phoneTheme === "light" ? "Light" : "Dark"}`}
        >
          <span aria-hidden="true" className="saku-phone-button saku-phone-button-silent" />
          <span aria-hidden="true" className="saku-phone-button saku-phone-button-volume-up" />
          <span aria-hidden="true" className="saku-phone-button saku-phone-button-volume-down" />
          <span aria-hidden="true" className="saku-phone-button saku-phone-button-power" />
          <div className="saku-hero-phone-screen">
            <img
              src="/images/LIGHT.jpeg"
              alt=""
              width={749}
              height={1545}
              fetchPriority="high"
              className={`saku-hero-phone-screen-image saku-phone-theme-image ${phoneTheme === "light" ? "is-visible" : ""}`}
            />
            <img
              src="/images/DARK.jpeg"
              alt=""
              width={720}
              height={1455}
              className={`saku-hero-phone-screen-image saku-phone-theme-image ${phoneTheme === "dark" ? "is-visible" : ""}`}
            />
            <span aria-hidden="true" className="saku-phone-dynamic-island"><span className="saku-phone-camera" /></span>
          </div>
        </div>
        <div className="saku-phone-theme-controls" role="group" aria-label="Pilih tema website dan aplikasi" aria-describedby="saku-theme-help">
          {PREVIEW_MODES.map(option => (
            <button
              key={option.value}
              type="button"
              aria-pressed={mode === option.value}
              aria-label={option.value === "auto" ? "Ganti tema otomatis" : `Gunakan mode ${option.label}`}
              onClick={() => selectMode(option.value)}
              title={option.value === "auto" ? "Website tetap Light; tema HP berganti setiap 5 detik" : `Tema ${option.label} untuk website dan aplikasi`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p id="saku-theme-help" className="sr-only">Light dan Dark mengubah tema website serta HP. Auto menjaga website tetap Light, sementara tampilan HP berganti setiap 5 detik.</p>
      </div>
    </figure>
  );
}
