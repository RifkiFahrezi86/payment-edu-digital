import Image from "next/image";
import { PwCampaignIcon, type CampaignIconName } from "@/components/payway/pw-campaign-icon";
import { PwEduDigiBrand, PwEduDigiHeader } from "@/components/payway/pw-edudigi-brand";

const CLASS_BENEFITS: { icon: CampaignIconName; title: string; description: string; color: string; highlight?: string }[] = [
  { icon: "ticket", title: "Voucher EduDigi", description: "Rp. 200.000,-", color: "green" },
  { icon: "book", title: "Modul EduDigi", description: "Materi lengkap dan aplikatif", color: "gold" },
  { icon: "certificate", title: "Sertifikat EduDigi", description: "Sebagai bukti keikutsertaan", color: "blue" },
  { icon: "wallet", title: "Support Master Sponsor by SAKU SULTAN", description: "Aplikasi dompet digital", highlight: "+ Saldo Rp.50.000,-", color: "purple" },
];

export function PwPricing() {
  return (
    <section id="promo" aria-labelledby="edudigi-join-title" className="saku-campaign-section scroll-mt-24">
      <div className="saku-campaign edu-join">
        <PwEduDigiHeader id="join" />
        <div className="edu-join-layout">
          <div className="edu-student-visual">
            <div className="edu-student-photo">
              <Image
                src="/images/payway/unsplash-photo-1543269865-cbf427effbad.jpg"
                alt="Peserta belajar dan berdiskusi bersama menggunakan perangkat digital"
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 90vw"
                className="object-cover"
              />
            </div>
            <p className="edu-student-note">Mulai langkah kecil<br />menuju masa depan <strong>besar!</strong></p>
            <blockquote><span aria-hidden="true">“</span>Skill Digital Hari Ini,<br />Peluang Lebih Besar<br />di Masa Depan</blockquote>
          </div>
          <div className="edu-join-content">
            <p className="edu-join-question">Bagaimana cara menjadi bagian dari</p>
            <h2 id="edudigi-join-title">EKOSISTEM <span>EduDigi</span>?</h2>
            <p className="edu-join-intro">Bersama membangun generasi digital yang lebih siap, produktif, dan berdaya saing.</p>
            <div className="edu-offer-layout">
              <div className="edu-offer">
                <a
                  href="https://play.google.com/store/apps/details?id=com.saku_sultan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-join-button"
                >
                  <span><PwCampaignIcon name="arrow" /></span>
                  JOIN KELAS EDUDIGI
                </a>
                <div className="edu-price">
                  <p>Biaya terJANGKAU hanya</p>
                  <strong><span>Rp.</span> 200.000,-</strong>
                </div>
              </div>
              <div className="edu-join-phone-visual" aria-hidden="true">
                <p>Investasi terbaik<br />untuk diri Anda</p>
                <div className="edu-mini-phone"><PwEduDigiBrand id="phone" compact /><span>Belajar · Praktik · Produktif</span></div>
                <div className="edu-sponsor-badge"><PwCampaignIcon name="crown" /><strong>SAKU<br />SULTAN</strong></div>
              </div>
            </div>
            <h3 className="edu-benefits-title">Fasilitas yang Anda Dapatkan:</h3>
            <div className="edu-class-benefits">
              {CLASS_BENEFITS.map((benefit) => (
                <div className={`edu-benefit edu-benefit-${benefit.color}`} key={benefit.title}>
                  <span className="edu-benefit-icon"><PwCampaignIcon name={benefit.icon} /></span>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                  {benefit.highlight && <strong className="edu-benefit-highlight">{benefit.highlight}</strong>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="edu-join-bottom"><span>Belajar hari ini.</span> Tumbuh dan produktif bersama EduDigi.</div>
      </div>
    </section>
  );
}
