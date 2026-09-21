import { TRUSTED_PARTNERS } from "./ss-partners-data";
import { IcArrowRight } from "./ss-icons";

export function SsPartnerMarquee() {
  return (
    <div className="ss-trusted-band">
      <p>Didukung oleh<br /><strong>Mitra Terpercaya</strong></p>
      <div className="ss-trusted-viewport">
        <div className="ss-trusted-track">
          {[0, 1].map(copy => (
            <ul key={copy} className="ss-trusted-group" aria-label={copy === 0 ? "Mitra dan kanal pembayaran" : undefined} aria-hidden={copy === 1 ? true : undefined}>
              {TRUSTED_PARTNERS.map(partner => <li key={partner.name} className="ss-trusted-logo">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={partner.logo} alt={copy === 0 ? partner.name : ""} width={132} height={36} loading="lazy" decoding="async" /></li>)}
            </ul>
          ))}
        </div>
      </div>
      <div className="ss-trusted-actions">
        <a href="#mitra">Lihat Semua Mitra<IcArrowRight width={15} height={15} /></a>
      </div>
    </div>
  );
}
