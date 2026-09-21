"use client";

/**
 * Satu IntersectionObserver untuk seluruh elemen reveal di halaman.
 *
 * Sebelumnya tiap <SsReveal>/<PwReveal> membuat observer sendiri — 57 instance
 * pada route "/". Observer bersama memangkasnya jadi satu per konfigurasi
 * rootMargin, dengan perilaku sama: sekali masuk viewport, elemen di-unobserve.
 */

type RevealTarget = { cls: string; delay: number; timer: number };

const targets = new WeakMap<Element, RevealTarget>();
const observers = new Map<string, IntersectionObserver>();

function observerFor(rootMargin: string, threshold: number): IntersectionObserver {
  // Satu observer per kombinasi config; dua komponen reveal memakai threshold beda.
  const key = `${threshold}|${rootMargin}`;
  let io = observers.get(key);
  if (io) return io;
  io = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const target = targets.get(entry.target);
        if (!target) continue;
        window.clearTimeout(target.timer);
        const el = entry.target;
        window.setTimeout(() => el.classList.add(target.cls), target.delay);
        io!.unobserve(el);
        targets.delete(el);
      }
    },
    { threshold, rootMargin },
  );
  observers.set(key, io);
  return io;
}

/**
 * Daftarkan elemen; mengembalikan fungsi pembersih.
 *
 * `safety` menjaga elemen tetap muncul kalau observer tidak pernah melapor —
 * terjadi pada webview in-app dan saat browser melompat langsung ke #hash.
 */
export function observeReveal(
  el: Element,
  {
    cls,
    delay = 0,
    rootMargin,
    threshold = 0,
    safety,
  }: { cls: string; delay?: number; rootMargin: string; threshold?: number; safety?: number },
): () => void {
  if (typeof IntersectionObserver === "undefined") {
    el.classList.add(cls);
    return () => {};
  }
  const timer = safety ? window.setTimeout(() => el.classList.add(cls), safety + delay) : 0;
  targets.set(el, { cls, delay, timer });
  const io = observerFor(rootMargin, threshold);
  io.observe(el);
  return () => {
    window.clearTimeout(timer);
    io.unobserve(el);
    targets.delete(el);
  };
}
