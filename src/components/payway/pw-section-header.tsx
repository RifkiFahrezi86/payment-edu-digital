import { PwReveal } from "@/components/payway/pw-reveal";
import { PwEyebrow } from "@/components/payway/pw-eyebrow";

/**
 * Header section: eyebrow + judul + subcopy.
 * Enam section sebelumnya menulis ulang pola ini dengan ukuran judul
 * yang berbeda-beda (42px vs 52px) dan jarak yang tidak seragam.
 */
export function PwSectionHeader({
  eyebrow,
  title,
  children,
  align = "center",
  tone = "surface",
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  align?: "center" | "left";
  tone?: "surface" | "media";
  className?: string;
}) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      <PwReveal>
        <PwEyebrow tone={tone}>{eyebrow}</PwEyebrow>
      </PwReveal>
      <PwReveal delay={100}>
        <h2 className="max-w-[760px] text-[length:var(--pw-h2)] font-semibold leading-[1.1] tracking-[-0.035em] text-[#042718]">
          {title}
        </h2>
      </PwReveal>
      {children ? (
        <PwReveal delay={200}>
          <p className="max-w-[640px] text-[length:var(--pw-body-lg)] leading-[1.6] text-[#042718cc]">
            {children}
          </p>
        </PwReveal>
      ) : null}
    </div>
  );
}
