import { PwHero } from "@/components/payway/PwHero";
import { PwHeroNavigation } from "@/components/payway/PwHeroNavigation";
import { PwInsights } from "@/components/payway/PwInsights";
import { PwProcess } from "@/components/payway/PwProcess";
import { PwOnboardingSteps } from "@/components/payway/PwOnboardingSteps";
import { PwFeaturesTriple } from "@/components/payway/PwFeaturesTriple";
import { PwTestimonials } from "@/components/payway/PwTestimonials";
import { PwCharts } from "@/components/payway/PwCharts";
import { PwPricing } from "@/components/payway/PwPricing";
import { PwFaq } from "@/components/payway/PwFaq";
import { PwCtaFooter } from "@/components/payway/PwCtaFooter";
import { PwWhatsappButton } from "@/components/payway/PwWhatsappButton";
import { PwEduDigi } from "@/components/payway/PwEduDigi";

/**
 * / — halaman utama Saku Sultan landing.
 */
export default function PaywayPage() {
  return (
    <main className="w-full overflow-x-clip">
      <PwHeroNavigation />
      <PwHero />
      <PwInsights />
      <div id="fitur" className="scroll-mt-24">
        <PwEduDigi />
        <PwPricing />
        <PwOnboardingSteps />
        <PwProcess />
        <PwFeaturesTriple />
      </div>
      <PwTestimonials />
      <PwCharts />
      <PwFaq />
      <PwCtaFooter />
      <PwWhatsappButton />
    </main>
  );
}
