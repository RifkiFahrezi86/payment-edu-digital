<<<<<<< HEAD
"use client";

import { useState } from "react";
import { TRUSTED_PARTNERS } from "./ss-partners-data";
import { IcArrowRight, IcPlay } from "./ss-icons";

export function SsPartnerMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="ss-trusted-band" data-paused={paused}>
=======
import { TRUSTED_PARTNERS } from "./ss-partners-data";
import { IcArrowRight } from "./ss-icons";

export function SsPartnerMarquee() {
  return (
    <div className="ss-trusted-band">
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
      <p>Didukung oleh<br /><strong>Mitra Terpercaya</strong></p>
      <div className="ss-trusted-viewport">
        <div className="ss-trusted-track">
          {[0, 1].map(copy => (
            <ul key={copy} className="ss-trusted-group" aria-label={copy === 0 ? "Mitra dan kanal pembayaran" : undefined} aria-hidden={copy === 1 ? true : undefined}>
<<<<<<< HEAD
              {TRUSTED_PARTNERS.map(partner => <li key={partner.name} className="ss-trusted-logo">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={partner.logo} alt={copy === 0 ? partner.name : ""} width={132} height={36} /></li>)}
=======
              {TRUSTED_PARTNERS.map(partner => <li key={partner.name} className="ss-trusted-logo">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={partner.logo} alt={copy === 0 ? partner.name : ""} width={132} height={36} loading="lazy" decoding="async" /></li>)}
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
            </ul>
          ))}
        </div>
      </div>
      <div className="ss-trusted-actions">
<<<<<<< HEAD
        <button type="button" className="ss-marquee-control" aria-pressed={paused} aria-label={paused ? "Lanjutkan pergerakan logo" : "Jeda pergerakan logo"} onClick={() => setPaused(value => !value)}>
          {paused ? <IcPlay width={15} height={15} /> : <svg aria-hidden="true" width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><rect x="4" y="3" width="4" height="14" rx="1" /><rect x="12" y="3" width="4" height="14" rx="1" /></svg>}
        </button>
=======
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
        <a href="#mitra">Lihat Semua Mitra<IcArrowRight width={15} height={15} /></a>
      </div>
    </div>
  );
}
