import { PwCampaignIcon, type CampaignIconName } from "@/components/payway/pw-campaign-icon";
import { PwEduDigiBrand, PwEduDigiHeader } from "@/components/payway/pw-edudigi-brand";

const LEGAL_STEPS: { icon: CampaignIconName; label: string }[] = [
  { icon: "document", label: "Akta Pendirian YAYASAN EDUDIGI Notaris" },
  { icon: "bank", label: "Administrasi dan Identitas Kelembagaan" },
  { icon: "certificate", label: "NIB serta KBLI melalui Sistem OSS" },
  { icon: "shield", label: "Perizinan Operasional Lembaga Pendidikan/Kursus dan Pelatihan" },
];

function LegalDocuments() {
  return (
    <div className="edu-legal-visual" aria-hidden="true">
      <div className="edu-office-brand"><PwEduDigiBrand id="office" compact /></div>
      <div className="edu-office-window" />
      <div className="edu-document edu-document-kbli">
        <span className="edu-document-crest">✦</span>
        <strong>KBLI</strong>
        <small>Klasifikasi Baku<br />Lapangan Usaha Indonesia</small>
        <div className="edu-document-lines" />
      </div>
      <div className="edu-document edu-document-nib">
        <span className="edu-document-crest">✦</span>
        <span className="edu-oss">OSS</span>
        <strong>NIB</strong>
        <small>Nomor Induk Berusaha</small>
        <div className="edu-document-lines" />
        <div className="edu-document-seal"><PwCampaignIcon name="shield" /></div>
      </div>
      <div className="edu-notary-book">
        <PwCampaignIcon name="graduate" />
        <span>Akta Pendirian<br />Yayasan</span>
        <strong>EDUDIGI</strong>
        <span>Notaris</span>
        <i />
      </div>
      <div className="edu-book-stack">
        {["Regulasi", "Pendidikan", "Pelatihan", "Masa Depan"].map((book) => <span key={book}>{book}</span>)}
      </div>
      <div className="edu-desk-pen" />
      <span className="edu-plant edu-plant-one" />
      <span className="edu-plant edu-plant-two" />
    </div>
  );
}

export function PwEduDigi() {
  return (
    <section id="edudigi" aria-labelledby="edudigi-legal-title" className="saku-campaign-section scroll-mt-24">
      <div className="saku-campaign edu-legal">
        <PwEduDigiHeader id="legal" />
        <div className="edu-legal-content">
          <div className="edu-legal-copy">
            <h2 id="edudigi-legal-title">Legalitas <span>EduDigi</span></h2>
            <span className="edu-heading-rule" aria-hidden="true" />
            <p>
              Legalitas EduDigi dikembangkan secara bertahap melalui{" "}
              <strong>Akta Pendirian YAYASAN EDUDIGI Notaris,</strong> administrasi
              dan identitas kelembagaan, <strong>NIB serta KBLI</strong> yang sesuai
              melalui <b>sistem OSS,</b> kemudian dilanjutkan dengan pemenuhan
              persyaratan dan <strong>perizinan operasional lembaga
              pendidikan/kursus dan pelatihan</strong> sesuai ketentuan pemerintah
              yang berlaku.
            </p>
            <ol className="edu-legal-steps">
              {LEGAL_STEPS.map((step) => (
                <li key={step.label}>
                  <span className="edu-step-icon"><PwCampaignIcon name={step.icon} /></span>
                  <span>{step.label}</span>
                </li>
              ))}
            </ol>
          </div>
          <LegalDocuments />
        </div>
        <div className="edu-campaign-footer">
          <p>Pendidikan digital<br />untuk masa depan yang lebih baik</p>
          <div className="edu-trust-values">
            <span><PwCampaignIcon name="graduate" /> Terpercaya</span>
            <span><PwCampaignIcon name="users" /> Profesional</span>
            <span><PwCampaignIcon name="shield" /> Berkelanjutan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
