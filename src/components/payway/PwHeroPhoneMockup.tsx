"use client";

/* eslint-disable @next/next/no-img-element */

import { usePwTheme } from "@/components/payway/PwThemeProvider";

export function PwHeroPhoneMockup() {
  const { mode } = usePwTheme();

  return (
    <figure
      aria-label="Pratinjau aplikasi Saku Sultan"
      data-theme={mode}
      className="saku-hero-phone relative mx-auto flex w-full justify-center lg:mx-0 lg:justify-start"
    >
      <div className="saku-phone-preview">
        <div
          className="saku-hero-phone-frame"
          role="img"
          aria-label={`Tampilan aplikasi Saku Sultan dalam mode ${mode === "light" ? "Light" : "Dark"}`}
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
              className={`saku-hero-phone-screen-image saku-phone-theme-image ${mode === "light" ? "is-visible" : ""}`}
            />
            <img
              src="/images/DARK.jpeg"
              alt=""
              width={720}
              height={1455}
              className={`saku-hero-phone-screen-image saku-phone-theme-image ${mode === "dark" ? "is-visible" : ""}`}
            />
            <span aria-hidden="true" className="saku-phone-dynamic-island"><span className="saku-phone-camera" /></span>
          </div>
        </div>
      </div>
    </figure>
  );
}
