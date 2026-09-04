"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const THEME_DURATION_MS = 5_000;

export function PwHeroPhoneMockup() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIsDark((currentTheme) => !currentTheme);
    }, THEME_DURATION_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <figure
      role="img"
      aria-label="Tampilan aplikasi Saku Sultan"
      className="saku-hero-phone relative mx-auto flex w-full justify-center lg:mx-0 lg:justify-start"
    >
      <div className="saku-hero-phone-frame">
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
            className={`saku-hero-phone-screen-image transition-opacity duration-700 ease-in-out ${
              isDark ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src="/images/DARK.jpeg"
            alt=""
            width={720}
            height={1455}
            className={`saku-hero-phone-screen-image transition-opacity duration-700 ease-in-out ${
              isDark ? "opacity-100" : "opacity-0"
            }`}
          />

          <span aria-hidden="true" className="saku-phone-dynamic-island">
            <span className="saku-phone-camera" />
          </span>
        </div>
      </div>
    </figure>
  );
}
