import Image from "next/image";
import { PwCampaignPoster } from "@/components/payway/pw-campaign-poster";
import { EDUDIGI_CLASS_POSTER } from "@/components/payway/pw-campaign-posters";
import { PwButton } from "@/components/payway/pw-button";

export function PwPricing() {
  return (
    <section id="kelas-edudigi" aria-labelledby="edudigi-join-title" className="saku-campaign-section scroll-mt-24">
      <div className="saku-campaign saku-original-campaign">
        <div className="saku-poster-frame"><PwCampaignPoster poster={EDUDIGI_CLASS_POSTER} /></div>
        <div className="saku-class-offer">
          <div>
            <p className="saku-poster-kicker">Bergabung dengan ekosistem EduDigi</p>
            <h2 id="edudigi-join-title">Join Kelas EduDigi <span>Rp200.000</span></h2>
            <p>Voucher, modul, sertifikat, dan dukungan saldo Saku Sultan Rp50.000.</p>
          </div>
          <div className="saku-class-actions">
            <PwButton href="https://play.google.com/store/apps/details?id=com.saku_sultan">Join Kelas EduDigi</PwButton>
            <a className="saku-poster-original" href={EDUDIGI_CLASS_POSTER.src} target="_blank" rel="noopener noreferrer">Lihat detail gambar</a>
          </div>
        </div>
        <div className="saku-poster-sponsor">
          <Image src="/images/saku-sultan-app-icon.png" alt="Logo Saku Sultan" width={32} height={32} />
          <span>Didukung oleh <strong>SAKU SULTAN</strong></span>
        </div>
      </div>
    </section>
  );
}
