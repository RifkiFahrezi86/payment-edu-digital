import { PwHero } from "@/components/payway/PwHero";
import { PwInsights } from "@/components/payway/PwInsights";
import { PwProcess } from "@/components/payway/PwProcess";
import { PwFeaturesTriple } from "@/components/payway/PwFeaturesTriple";
import { PwTestimonials } from "@/components/payway/PwTestimonials";
import { PwCharts } from "@/components/payway/PwCharts";
import { PwPricing } from "@/components/payway/PwPricing";
import { PwFaq } from "@/components/payway/PwFaq";
import { PwCtaFooter } from "@/components/payway/PwCtaFooter";
import { PwWhatsappButton } from "@/components/payway/PwWhatsappButton";

/**
 * / — halaman utama Saku Sultan landing.
 */
export default function PaywayPage() {
  return (
    <main className="w-full overflow-x-clip">
      <PwHero />
      <PwInsights />
      <PwFeaturesTriple />
      <PwProcess />
      <PwTestimonials />
      <PwCharts />
      <PwPricing />
      <PwFaq />
      <PwCtaFooter />
      <PwWhatsappButton />
    </main>
  );
}
