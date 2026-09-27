"use client";

import Image from "next/image";
import { usePwTheme } from "@/components/payway/PwThemeProvider";

export function SsPhonePreview() {
  const { mode } = usePwTheme();

  return (
    <figure className="ss-device-preview" data-phone-theme={mode}>
      <div className="ss-device-stage" role="img" aria-label={`Dua HP Saku Sultan, mode ${mode} di depan dan mode ${mode === "light" ? "dark" : "light"} di belakang`}>
        <div className="ss-device-glow" aria-hidden="true" />
        <div className={`ss-device-phone ${mode === "light" ? "is-primary" : "is-secondary"}`} data-device="light">
          <Image src="/images/saku/phone-front.webp" alt="" fill priority sizes="(min-width: 1024px) 420px, 75vw" className="ss-device-artwork" />
        </div>
        <div className={`ss-device-phone ${mode === "dark" ? "is-primary" : "is-secondary"}`} data-device="dark">
          <Image src="/images/saku/phone-back.webp" alt="" fill sizes="(min-width: 1024px) 380px, 65vw" className="ss-device-artwork" />
        </div>
      </div>
    </figure>
  );
}
