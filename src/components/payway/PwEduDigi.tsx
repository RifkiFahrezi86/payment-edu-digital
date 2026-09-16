import { PwCampaignIcon, type CampaignIconName } from "@/components/payway/pw-campaign-icon";
import { PwEduDigiHeader } from "@/components/payway/pw-edudigi-brand";
import { PwLegalIllustration } from "@/components/payway/PwLegalIllustration";

const LEGAL_STEPS: { icon: CampaignIconName; label: string }[] = [
  { icon: "document", label: "Akta Pendirian YAYASAN EDUDIGI Notaris" },
  { icon: "bank", label: "Administrasi dan Identitas Kelembagaan" },
  { icon: "certificate", label: "NIB serta KBLI melalui Sistem OSS" },
  { icon: "shield", label: "Perizinan Operasional Lembaga Pendidikan/Kursus dan Pelatihan" },
];

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
          <PwLegalIllustration />
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
