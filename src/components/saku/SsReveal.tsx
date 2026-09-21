"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { observeReveal } from "./ss-reveal-observer";

/** Pembungkus reveal-on-scroll ringan berbasis IntersectionObserver. */
export function SsReveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // delay sudah ditangani transitionDelay di CSS, jadi cukup pasang kelas.
    return observeReveal(el, { cls: "is-in", rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={cn("ss-reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
