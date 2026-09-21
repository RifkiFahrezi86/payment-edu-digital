import { CORE_PARTNERS } from "./ss-partners-data";

export function SsPartnerSupport() {
  return (
    <div className="ss-partner-support-strip" aria-label="Didukung oleh mitra resmi">
      <p>Didukung oleh<br /><strong>Mitra Resmi</strong></p>
      <ul>
        {CORE_PARTNERS.map(partner => <li key={partner.name} data-partner={partner.name}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={partner.logo} alt={`Logo ${partner.name}`} width={160} height={44} loading="lazy" /></li>)}
      </ul>
    </div>
  );
}
