import { PwCampaignPoster } from "@/components/payway/pw-campaign-poster";
import { VTN_POSTER } from "@/components/payway/pw-campaign-posters";
import { PwSectionHeader } from "@/components/payway/pw-section-header";
import { PwButton } from "@/components/payway/pw-button";

export function PwProcess() {
  return (
    <section id="sistem-vtn" aria-label="Sistem VTN" className="saku-campaign-section scroll-mt-24">
      <div className="saku-campaign saku-poster-section">
        <PwSectionHeader eyebrow="Sistem VTN" title="Volume Transaksi Nasional">
          Transaksi menggerakkan Indonesia. Cuan untuk semua.
        </PwSectionHeader>
        <div className="saku-poster-frame"><PwCampaignPoster poster={VTN_POSTER} /></div>
        <div className="saku-vtn-next">
          <div><h3>Mulai menjadi bagian dari ekosistem Saku Sultan.</h3><p>Ikuti langkah registrasi di bawah untuk mulai bertransaksi.</p></div>
          <PwButton href="#registrasi" external={false}>Mulai Registrasi</PwButton>
          <a className="saku-poster-original" href={VTN_POSTER.src} target="_blank" rel="noopener noreferrer">Lihat gambar lengkap</a>
        </div>
      </div>
    </section>
  );
}
