import { SsNav } from "@/components/saku/SsNav";
import { SsHero } from "@/components/saku/SsHero";
import { SsQuickBar } from "@/components/saku/SsQuickBar";
import { SsFeatures } from "@/components/saku/SsFeatures";
import { SsRingkasan } from "@/components/saku/SsRingkasan";
import { SsShowcase } from "@/components/saku/SsShowcase";
import { SsProcess } from "@/components/saku/SsProcess";
import { SsVtn } from "@/components/saku/SsVtn";
import { SsEdudigi } from "@/components/saku/SsEdudigi";
import { SsEcosystem } from "@/components/saku/SsEcosystem";
import { SsPartners } from "@/components/saku/SsPartners";
import { SsTestimonials } from "@/components/saku/SsTestimonials";
import { SsCtaFooter } from "@/components/saku/SsCtaFooter";
import { SsWhatsapp } from "@/components/saku/SsWhatsapp";

/** / — halaman utama SAKU SULTAN (redesign total mengikuti referensi). */
export default function SakuSultanPage() {
  return (
    <main className="w-full overflow-x-clip bg-white">
      <SsNav />
      <SsHero />
      <SsQuickBar />
      <SsFeatures />
      <SsRingkasan />
      <SsShowcase />
      <SsProcess />
      <SsVtn />
      <SsEdudigi />
      <SsEcosystem />
      <SsPartners />
      <SsTestimonials />
      <SsCtaFooter />
      <SsWhatsapp />
    </main>
  );
}
