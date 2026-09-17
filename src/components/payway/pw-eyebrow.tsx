import { SparklesIcon } from "@/components/payway/pw-icons";

/**
 * Chip eyebrow di atas judul section.
 * Sebelumnya ada tiga varian berbeda (#198F380A, #198F380F,
 * #F6FDFF/80 + backdrop-blur) — disatukan di sini.
 *
 * - `tone="surface"` untuk section berlatar putih/polos.
 * - `tone="media"` untuk section yang berdiri di atas video/foto,
 *   memakai latar semi-transparan + blur agar tetap terbaca.
 */
export function PwEyebrow({
  children,
  tone = "surface",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "surface" | "media";
  className?: string;
}) {
  const toneClass =
    tone === "media"
      ? "border-[#198F3833] bg-white/85 backdrop-blur-sm"
      : "border-[#198F381A] bg-[#198F380F]";

  return (
    <span
      className={`pw-eyebrow inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-[color:var(--pw-green-text)] ${toneClass} ${className}`}
    >
      <SparklesIcon className="h-4 w-4 shrink-0 md:h-[18px] md:w-[18px]" />
      <span className="text-sm font-medium tracking-[-0.3px] md:text-base">
        {children}
      </span>
    </span>
  );
}
