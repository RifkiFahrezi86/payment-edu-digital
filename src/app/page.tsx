import { PwHero } from "@/components/payway/PwHero";
import { PwInsights } from "@/components/payway/PwInsights";
import { PwFeatureIntro } from "@/components/payway/PwFeatureIntro";
import { PwProcess } from "@/components/payway/PwProcess";
import { PwFeaturesTriple } from "@/components/payway/PwFeaturesTriple";
import { PwTestimonials } from "@/components/payway/PwTestimonials";
import { PwCharts } from "@/components/payway/PwCharts";
import { PwPricing } from "@/components/payway/PwPricing";
import { PwFaq } from "@/components/payway/PwFaq";
import { PwCtaFooter } from "@/components/payway/PwCtaFooter";

/**
 * / — halaman utama PayWay landing (project mandiri).
 * Urutan section persis topologi preview asli
 * (docs/research/global-recon.json):
 * hero → insights → feature-intro → process → features (4 blok) →
 * testimonials → charts/integrations → pricing → faq → cta+footer.
 */
export default function PaywayPage() {
  return (
    <main className="w-full overflow-x-clip">
      <PwHero />
      <PwInsights />
      <PwFeatureIntro />
      <PwProcess />
      <PwFeaturesTriple />
      <PwTestimonials />
      <PwCharts />
      <PwPricing />
      <PwFaq />
      <PwCtaFooter />
    </main>
  );
}
