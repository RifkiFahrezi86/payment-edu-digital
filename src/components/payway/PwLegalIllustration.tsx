import Image from "next/image";
import { PwCampaignIcon } from "@/components/payway/pw-campaign-icon";

function DocumentDetails() {
  return (
    <>
      <div className="edu-document-lines">
        {Array.from({ length: 6 }, (_, index) => <i key={index} />)}
      </div>
      <div className="edu-document-signature" />
      <div className="edu-document-seal"><PwCampaignIcon name="shield" /></div>
    </>
  );
}

/** Decorative illustration; the actual legal process is explained beside it. */
export function PwLegalIllustration() {
  return (
    <div className="edu-legal-visual" aria-hidden="true">
      <div className="edu-legal-stage">
        <div className="edu-office-window" />
        <div className="edu-office-brand">
          <Image src="/images/saku-sultan-logo.png" alt="" width={700} height={140} sizes="220px" />
          <span>Ekosistem digital</span>
        </div>
        <div className="edu-display-plinth" />
        <div className="edu-document edu-document-kbli">
          <span className="edu-document-crest"><PwCampaignIcon name="bank" /></span>
          <span className="edu-document-kicker">Kegiatan usaha</span>
          <strong>KBLI</strong>
          <small>Klasifikasi Baku<br />Lapangan Usaha Indonesia</small>
          <DocumentDetails />
        </div>
        <div className="edu-document edu-document-nib">
          <span className="edu-document-crest"><PwCampaignIcon name="document" /></span>
          <span className="edu-oss">OSS</span>
          <strong>NIB</strong>
          <small>Nomor Induk Berusaha</small>
          <DocumentDetails />
        </div>
        <div className="edu-notary-book">
          <div className="edu-notary-cover">
            <Image src="/images/saku-sultan-app-icon.webp" alt="" width={64} height={64} className="edu-notary-logo" />
            <span className="edu-notary-brand">SAKU SULTAN</span>
            <span className="edu-notary-heading">Akta Pendirian<br />Yayasan</span>
            <strong>EDUDIGI</strong>
            <span className="edu-notary-subtitle">Notaris</span>
            <i className="edu-notary-ornament" />
          </div>
        </div>
        <div className="edu-book-stack">
          {["Regulasi", "Pendidikan", "Pelatihan", "Masa Depan"].map((book, index) => (
            <div className="edu-stack-book" key={book}>
              <span className="edu-stack-book-number">0{index + 1}</span>
              <span className="edu-stack-book-title">{book}</span>
              <span className="edu-stack-book-pages" />
            </div>
          ))}
        </div>
        <div className="edu-desk-pen"><span /></div>
      </div>
    </div>
  );
}
