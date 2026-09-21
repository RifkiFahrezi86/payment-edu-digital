import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PwHeroNavigation } from "@/components/payway/PwHeroNavigation";
import { PwCtaFooter } from "@/components/payway/PwCtaFooter";
import { SsReveal } from "@/components/saku/SsReveal";
import { IcArrowRight, IcArrowUpRight, IcCheckCircle, IcChevronRight } from "@/components/saku/ss-icons";
import { PRODUCT_LABELS, PRODUCT_PAGES, PRODUCT_SLUGS } from "@/components/saku/ss-product-pages";
import type { ShowcaseTab } from "@/components/saku/ss-showcase-bus";

type Params = { params: Promise<{ slug: string }> };

/** Enam halaman produk dirender statis; tidak ada slug lain yang sah. */
export function generateStaticParams() {
  return PRODUCT_SLUGS.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = PRODUCT_PAGES[slug as ShowcaseTab];
  if (!page) return { title: "Produk tidak ditemukan — Saku Sultan" };
  return {
    title: `${page.title} ${page.titleAccent} — Saku Sultan`,
    description: page.lead,
    robots: { index: false, follow: false },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const page = PRODUCT_PAGES[slug as ShowcaseTab];
  if (!page) notFound();

  const others = PRODUCT_SLUGS.filter(s => s !== slug);

  return (
    <main className="ss-site w-full overflow-x-clip">
      <PwHeroNavigation />

      <section className="ss-product-hero">
        <div className="ss-product-hero-inner">
          <SsReveal>
            <Link href="/#fitur" className="ss-product-back">
              <IcChevronRight width={15} height={15} className="rotate-180" />
              Kembali ke Fitur
            </Link>
          </SsReveal>
          <div className="ss-product-hero-grid">
            <div>
              <SsReveal delay={60}>
                <p className="ss-eyebrow ss-product-eyebrow">{page.eyebrow}</p>
              </SsReveal>
              <SsReveal delay={120}>
                <h1 className="ss-h1 ss-product-title">
                  {page.title}
                  <br />
                  <span>{page.titleAccent}</span>
                </h1>
              </SsReveal>
              <SsReveal delay={180}>
                <p className="ss-product-lead">{page.lead}</p>
              </SsReveal>
              <SsReveal delay={240}>
                <div className="ss-product-actions">
                  <a href={`/${page.cta.href}`} className="ss-btn ss-btn-lime">
                    {page.cta.label}
                    <IcArrowUpRight width={17} height={17} />
                  </a>
                  <a href="#rincian" className="ss-btn ss-btn-outline-light">
                    Baca Rincian
                  </a>
                </div>
              </SsReveal>
              <SsReveal delay={300}>
                <dl className="ss-product-stats">
                  {page.stats.map(stat => (
                    <div key={stat.label}>
                      <dt>{stat.value}</dt>
                      <dd>{stat.label}</dd>
                    </div>
                  ))}
                </dl>
              </SsReveal>
            </div>
            <SsReveal delay={200} className="ss-product-hero-art">
              <Image src={page.art} alt={page.artAlt} width={880} height={620} priority sizes="(min-width: 1024px) 520px, 92vw" />
            </SsReveal>
          </div>
        </div>
      </section>

      <section id="rincian" className="ss-product-body scroll-mt-24">
        <div className="ss-product-body-inner">
          <SsReveal className="ss-product-prose">
            <h2 className="ss-h2">Tentang Layanan Ini</h2>
            {page.body.map(paragraph => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </SsReveal>

          <SsReveal delay={80} className="ss-product-steps">
            <h2 className="ss-h2">Cara Kerjanya</h2>
            <ol>
              {page.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="ss-product-step-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{step.title}</strong>
                    <small>{step.detail}</small>
                  </span>
                </li>
              ))}
            </ol>
          </SsReveal>

          <SsReveal delay={120} className="ss-product-benefits">
            <h2 className="ss-h2">Manfaat Utama</h2>
            <ul>
              {page.benefits.map(benefit => (
                <li key={benefit.title}>
                  <IcCheckCircle width={19} height={19} />
                  <span>
                    <strong>{benefit.title}</strong>
                    <small>{benefit.detail}</small>
                  </span>
                </li>
              ))}
            </ul>
          </SsReveal>

          <SsReveal delay={160} className="ss-product-notes">
            <h2 className="ss-h3">Yang Perlu Diketahui</h2>
            <ul>
              {page.notes.map(note => (
                <li key={note.slice(0, 40)}>{note}</li>
              ))}
            </ul>
          </SsReveal>

          <SsReveal delay={200} className="ss-product-faq">
            <h2 className="ss-h2">Pertanyaan Umum</h2>
            {page.faq.map(item => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <IcChevronRight width={17} height={17} />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </SsReveal>

          <SsReveal delay={240} className="ss-product-next">
            <h2 className="ss-h3">Jelajahi Layanan Lain</h2>
            <ul>
              {others.map(other => (
                <li key={other}>
                  <Link href={`/produk/${other}`}>
                    {PRODUCT_LABELS[other]}
                    <IcArrowRight width={15} height={15} />
                  </Link>
                </li>
              ))}
            </ul>
          </SsReveal>
        </div>
      </section>

      <PwCtaFooter />
    </main>
  );
}
