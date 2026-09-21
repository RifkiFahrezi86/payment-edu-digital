"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePwTheme } from "@/components/payway/PwThemeProvider";
import type { DisplayMode, WebsiteTheme } from "@/lib/theme";

export function SsPhonePreview() {
  const { mode, setMode } = usePwTheme();
  const [automaticTheme, setAutomaticTheme] = useState<WebsiteTheme>("light");
  const phoneTheme = mode === "auto" ? automaticTheme : mode;

  useEffect(() => {
    if (mode !== "auto") return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!document.hidden && !motion.matches) {
        setAutomaticTheme(current => current === "light" ? "dark" : "light");
      }
    }, 5000);
    return () => window.clearInterval(timer);
  }, [mode]);

  const selectMode = (nextMode: DisplayMode) => {
    if (nextMode === "auto") setAutomaticTheme("light");
    setMode(nextMode);
  };

  return (
    <figure className="ss-device-preview" data-phone-theme={phoneTheme} data-preview-mode={mode}>
      <div className="ss-device-stage" role="img" aria-label={`Dua HP Saku Sultan, mode ${phoneTheme} di depan dan mode ${phoneTheme === "light" ? "dark" : "light"} di belakang`}>
        <div className="ss-device-glow" aria-hidden="true" />
        <div className={`ss-device-phone ${phoneTheme === "light" ? "is-primary" : "is-secondary"}`} data-device="light">
          <Image src="/images/saku/phone-front.png" alt="" fill priority sizes="(min-width: 1024px) 420px, 75vw" className="ss-device-artwork" />
        </div>
        <div className={`ss-device-phone ${phoneTheme === "dark" ? "is-primary" : "is-secondary"}`} data-device="dark">
          <Image src="/images/saku/phone-back.png" alt="" fill sizes="(min-width: 1024px) 380px, 65vw" className="ss-device-artwork" />
        </div>
      </div>
      <figcaption>
        <div className="saku-phone-theme-controls ss-device-theme" role="group" aria-label="Pilih tema website dan aplikasi" aria-describedby="ss-theme-description">
          {(["light", "dark", "auto"] as const).map(value => (
            <button
              key={value}
              type="button"
              aria-pressed={mode === value}
              aria-label={value === "auto" ? "Ganti tema otomatis" : `Gunakan mode ${value === "light" ? "Light" : "Dark"}`}
              title={value === "auto" ? "Website tetap Light; hanya tampilan HP yang berganti" : `Ubah website dan aplikasi ke mode ${value}`}
              onClick={() => selectMode(value)}
            >
              {value === "light" ? "Light" : value === "dark" ? "Dark" : "Auto"}
            </button>
          ))}
        </div>
        <span id="ss-theme-description" className="sr-only">Auto mempertahankan tema website Light dan hanya mengganti tampilan HP setiap 5 detik.</span>
      </figcaption>
    </figure>
  );
}
