import { CORE_PARTNERS, REGULATOR_PARTNERS, type PartnerLogo } from "./ss-partners-data";

/**
 * Strip logo pendukung. `heading` dan `logos` dapat diganti supaya satu
 * komponen melayani baris "Mitra Resmi" maupun "Ekosistem Terpercaya".
 */
export function SsPartnerSupport({
  heading = "Mitra Resmi",
  logos = CORE_PARTNERS,
}: {
  heading?: string;
  logos?: PartnerLogo[];
}) {
  return (
    <div className="ss-partner-support-strip" aria-label={`Didukung oleh ${heading}`}>
      <p>Didukung oleh<br /><strong>{heading}</strong></p>
      <ul>
        {logos.map(partner => (
          <li key={partner.name} data-partner={partner.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={partner.logo} alt={`Logo ${partner.name}`} width={160} height={44} loading="lazy" decoding="async" />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Baris ekosistem: bank sentral, pengawas, dan pembina pendidikan. */
export const TRUSTED_ECOSYSTEM: PartnerLogo[] = [...CORE_PARTNERS, ...REGULATOR_PARTNERS];
