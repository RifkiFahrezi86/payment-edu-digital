import { ArrowUpRightIcon } from "@/components/payway/pw-icons";

type Variant = "primary" | "secondary";

/**
 * Tombol pill Saku Sultan.
 * Sebelumnya pola yang sama ditulis ulang di Hero, FeaturesTriple,
 * Charts, Pricing, dan CtaFooter dengan tinggi, radius, dan hover
 * yang sedikit berbeda — disatukan di sini.
 *
 * - `primary`   : pill ink dengan bulatan panah putih.
 * - `secondary` : pill terang dengan bulatan panah ink.
 */
export function PwButton({
  href,
  children,
  variant = "primary",
  size = "md",
  external = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
}) {
  const sizing =
    size === "lg"
      ? "h-[64px] pl-6 pr-2 text-lg md:h-[72px] md:pl-8 md:text-[20px]"
      : "h-[48px] pl-5 pr-1.5 text-base";

  const knobSize =
    size === "lg" ? "h-12 w-12 md:h-14 md:w-14" : "h-9 w-9";

  const shell =
    variant === "primary"
      ? "bg-[#042718] text-white border-[#0427180f] hover:bg-[#06381F]"
      : "bg-white text-[#042718] border-white/20 hover:bg-[#F1F7ED]";

  const knob =
    variant === "primary"
      ? "bg-white text-[#042718]"
      : "bg-[#042718] text-white";

  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`pw-lift group inline-flex w-fit items-center justify-between gap-4 overflow-hidden rounded-full border font-medium tracking-[-0.3px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#198F38]/30 ${sizing} ${shell} ${className}`}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${knobSize} ${knob}`}
      >
        <ArrowUpRightIcon className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      </span>
    </a>
  );
}
