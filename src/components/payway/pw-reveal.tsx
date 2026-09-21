"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { observeReveal } from "@/components/saku/ss-reveal-observer";

/**
 * Reveal-on-scroll pengganti framer-motion pada template asli.
 * Original merender elemen dengan opacity/transform via framer-motion;
 * di sini: IntersectionObserver + kelas .pw-reveal/.pw-in (payway.css),
 * threshold 0.2, sekali jalan (unobserve setelah masuk).
 *
 * Fallback wajib: di HP, observer bisa gagal memicu (race hydration saat
 * browser lompat langsung ke section via #hash, in-app webview dengan
 * IntersectionObserver yang tidak stabil, dll) sehingga elemen mentok di
 * opacity 0 selamanya. Timer pengaman memaksa tampil walau observer diam.
 */
export function PwReveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** delay ms sebelum kelas pw-in dipasang (stagger antar kartu) */
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeReveal(el, {
      cls: "pw-in",
      delay,
      rootMargin: "0px 0px -10% 0px",
      safety: 1800,
    });
  }, [delay]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={cn("pw-reveal", className)}>
      {children}
    </Tag>
  );
}
