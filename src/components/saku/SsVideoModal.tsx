"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.showModal();
    dialog?.querySelector<HTMLButtonElement>("button")?.focus();
    return () => {
      if (dialog?.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <button ref={triggerRef} type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open ? createPortal(
        <dialog
          ref={dialogRef}
          aria-label={title}
          className="ss-video-dialog"
          onCancel={() => setOpen(false)}
          onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}
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
        </dialog>,
        document.body,
      ) : null}
    </>
  );
}
