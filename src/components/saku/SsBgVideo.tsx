"use client";

import { useEffect, useRef } from "react";

/**
 * Video latar yang hanya diputar saat benar-benar terlihat.
 *
 * Tanpa ini `autoPlay` memaksa browser menarik seluruh berkas dan menjalankan
 * dekode selama halaman terbuka — termasuk ketika section sudah jauh di luar
 * viewport. Poster tampil lebih dulu sehingga first paint tidak menunggu video.
 */
export function SsBgVideo({
  src,
  poster,
  className,
}: {
  src: string;
  /** Dilewati kalau section sudah punya latar solid sendiri. */
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Sumber baru dipasang saat dibutuhkan: byte video tidak ikut first paint.
          if (!video.src) video.src = src;
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.01 },
    );
    io.observe(video);
    return () => {
      io.disconnect();
      video.pause();
    };
  }, [src]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
      className={className}
    />
  );
}
