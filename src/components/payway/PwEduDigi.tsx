import { PwPosterGallery } from "@/components/payway/PwPosterGallery";
import { EDUDIGI_POSTERS } from "@/components/payway/pw-campaign-posters";
import { PwSectionHeader } from "@/components/payway/pw-section-header";

export function PwEduDigi() {
  return (
    <section id="edudigi" aria-label="Ekosistem EduDigi" className="saku-campaign-section scroll-mt-24">
      <div className="saku-campaign saku-poster-section">
        <PwSectionHeader eyebrow="EduDigi" title="Belajar. Praktik. Produktif.">
          Kenali EduDigi, tujuan program, visi dan misi, serta tahapan legalitasnya.
        </PwSectionHeader>
        <PwPosterGallery posters={EDUDIGI_POSTERS} />
      </div>
    </section>
  );
}
