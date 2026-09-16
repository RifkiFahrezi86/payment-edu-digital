import { PwCampaignIcon, type CampaignIconName } from "@/components/payway/pw-campaign-icon";

const TRANSACTION_SERVICES: { icon: CampaignIconName; label: string; color: string }[] = [
  { icon: "cart", label: "Belanja Online/Offline", color: "green" },
  { icon: "phone", label: "Pulsa & Data", color: "blue" },
  { icon: "zap", label: "PLN", color: "gold" },
  { icon: "droplet", label: "PDAM", color: "cyan" },
  { icon: "tv", label: "TV & Internet", color: "red" },
  { icon: "plane", label: "Tiket Transportasi", color: "violet" },
  { icon: "users", label: "Travel & Pariwisata", color: "pink" },
  { icon: "bank", label: "Perbankan", color: "teal" },
  { icon: "heart", label: "Donasi & Sosial", color: "orange" },
  { icon: "more", label: "Dan Lainnya", color: "slate" },
];

const VTN_BENEFITS: { icon: CampaignIconName; title: string; detail: string; color: string }[] = [
  { icon: "chart", title: "Skala Nasional", detail: "Potensi tanpa batas", color: "green" },
  { icon: "infinity", title: "Berulang Setiap Hari", detail: "Pendapatan berkelanjutan", color: "blue" },
  { icon: "users", title: "Semua Orang Terlibat", detail: "Pasar yang sangat luas", color: "violet" },
  { icon: "shield", title: "Sistem Aman & Terpercaya", detail: "Didukung teknologi modern", color: "gold" },
  { icon: "leaf", title: "Pertumbuhan Jangka Panjang", detail: "Untuk Anda, keluarga & Indonesia", color: "red" },
];

function VtnEngine() {
  return (
    <div className="vtn-visual" aria-hidden="true">
      <p className="vtn-visual-motto">Transaksi<br /><span>Menggerakkan</span><br />Indonesia</p>
      <div className="vtn-growth-bars"><i /><i /><i /><i /><i /></div>
      <svg className="vtn-growth-arrow" viewBox="0 0 280 320" fill="none">
        <path d="M12 297C110 250 161 163 229 49" stroke="#063C25" strokeWidth="39" />
        <path d="M12 291C110 244 161 157 229 43" stroke="#BAF853" strokeWidth="29" />
        <path d="m188 44 64-32 2 76" fill="#BAF853" stroke="#E5FF95" strokeWidth="3" />
      </svg>
      <div className="vtn-engine">
        <div className="vtn-engine-top"><i /><i /><i /></div>
        <span className="vtn-engine-port vtn-engine-port-left" />
        <span className="vtn-engine-port vtn-engine-port-right" />
        <div className="vtn-engine-face">
          <strong><span>V</span>TN</strong>
          <span>Volume Transaksi Nasional</span>
          <i className="vtn-engine-bolt vtn-bolt-tl" /><i className="vtn-engine-bolt vtn-bolt-tr" />
          <i className="vtn-engine-bolt vtn-bolt-bl" /><i className="vtn-engine-bolt vtn-bolt-br" />
        </div>
        <div className="vtn-engine-base" />
      </div>
      <div className="vtn-coins"><span>Rp</span><span>Rp</span><span>Rp</span><span>Rp</span></div>
      <p className="vtn-everyone">Cuan<br />untuk semua</p>
    </div>
  );
}

export function PwProcess() {
  return (
    <section id="alur-transaksi" aria-labelledby="vtn-title" className="saku-campaign-section scroll-mt-24">
      <div className="saku-campaign vtn-campaign">
        <div className="vtn-network" aria-hidden="true" />
        <div className="vtn-campaign-header">
          <p><span /> Indonesia Digital Ecosystem</p>
          <span className="vtn-flow-label">“ALUR TRANSAKSI” Saku Sultan dengan “VTN System”</span>
          <p className="vtn-future">Transaksi hari ini<br />masa depan lebih baik</p>
        </div>
        <div className="vtn-main">
          <div className="vtn-copy">
            <div className="vtn-wordmark"><span>VTN</span><p>Volume<br />Transaksi<br />Nasional</p></div>
            <h2 id="vtn-title">Sebagai <span>Mesin CUAN</span><br />JANGKA PANJANG</h2>
            <p className="vtn-description">Semakin besar volume transaksi di seluruh Indonesia, semakin besar <strong>peluang cuan</strong> yang terus mengalir secara berkelanjutan.</p>
            <ul className="vtn-services">
              {TRANSACTION_SERVICES.map((service) => (
                <li className={`vtn-service vtn-color-${service.color}`} key={service.label}>
                  <span><PwCampaignIcon name={service.icon} /></span>
                  <p>{service.label}</p>
                </li>
              ))}
            </ul>
          </div>
          <VtnEngine />
        </div>
        <div className="vtn-benefits">
          {VTN_BENEFITS.map((benefit) => (
            <div className={`vtn-benefit vtn-color-${benefit.color}`} key={benefit.title}>
              <PwCampaignIcon name={benefit.icon} />
              <div><h3>{benefit.title}</h3><p>{benefit.detail}</p></div>
            </div>
          ))}
        </div>
        <p className="vtn-bottom-line">Transaksi membangun Indonesia <span>|</span> Cuan untuk semua</p>
      </div>
    </section>
  );
}
