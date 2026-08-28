"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Reveal-on-scroll pengganti framer-motion pada template asli.
 * Original merender elemen dengan opacity/transform via framer-motion;
 * di sini: IntersectionObserver + kelas .pw-reveal/.pw-in (payway.css),
 * threshold 0.2, sekali jalan (unobserve setelah masuk).
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
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => el.classList.add("pw-in"), delay);
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={cn("pw-reveal", className)}>
      {children}
    </Tag>
  );
}
