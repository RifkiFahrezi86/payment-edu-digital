"use client";

import { useEffect, useState, type ReactNode } from "react";
import { IcX } from "./ss-icons";

/** Tombol yang membuka modal pemutar video (Escape/klik luar untuk menutup). */
export function SsVideoLauncher({
  src,
  title,
  className,
  children,
}: {
  src: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02120b]/92 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="w-full max-w-[960px]" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[14px] font-extrabold text-white/90">{title}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup video"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-[var(--ss-lime)] hover:text-[var(--ss-lime)]"
              >
                <IcX width={16} height={16} />
              </button>
            </div>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src={src}
              controls
              autoPlay
              playsInline
              className="max-h-[78vh] w-full rounded-2xl bg-black shadow-[0_40px_120px_rgba(0,0,0,.6)]"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
