# PayWay — Konvensi Bersama Semua Builder

## Sumber kebenaran
- Markup persis: `docs/research/jiro-payway/sections/NN-nama.html` (outerHTML live, kelas Tailwind inline)
- Screenshot per section: `docs/design-references/jiro-payway/sec-NN-nama.png`
- Mapping aset CDN -> lokal: `docs/research/jiro-payway/asset-manifest.json`
- Full page reference: `full-desktop-1440.png`, `full-mobile-390.png`

## Aturan konversi HTML -> React
1. Pertahankan kelas Tailwind PERSIS seperti markup (arbitrary values dsb) — jangan "dirapikan".
2. `style="opacity: 1; transform: none;"` = residu framer-motion → HAPUS; ganti reveal dengan `<PwReveal>` dari `@/components/payway/pw-reveal` (props: className, delay ms untuk stagger).
3. SEMUA url `https://cdn.jiro.build/...`, unsplash, flagcdn, iconify → ganti path lokal sesuai asset-manifest.json (`/images/payway/...`, `/videos/payway/...`).
4. Gambar pakai `<img>` biasa + alt dari markup; tambah `// eslint-disable-next-line @next/next/no-img-element` bila lint protes, JANGAN ganti ke next/image (dimensi asli dipertahankan atribut width/height bila ada di markup).
5. Video: `autoPlay loop muted playsInline` + `<source src="/videos/payway/..." type="video/mp4" />`.
6. `<style>` tersemat di section → salin ke dalam JSX sebagai `<style>{`...`}</style>` di akhir komponen (scoped by uniqueness selector), atau konversi ke Tailwind bila trivial.
7. SVG inline di markup → pertahankan inline sebagai JSX (konversi atribut: `stroke-width`→`strokeWidth`, `class`→`className`, dst).
8. Font aksen serif: kelas seperti `font-serif`/`[font-family:'Instrument_Serif']` di markup → pakai `[font-family:var(--pw-font-serif)]` (italic: tambah `italic`). Body default sudah Inter via .pw-body.
9. Komponen = named export, server component bila tidak butuh interaktivitas; `"use client"` hanya jika ada state/handler.
10. TS strict, no any. Verifikasi WAJIB: `npx tsc --noEmit` lolos.

## Token
--pw-ink #042718 · --pw-ink-hover #06381f · --pw-green #16a34a · --pw-mist #f4f6f5
util: .main-container (1440px/96px), .banner-sheen, .scrollbar-hide (payway.css — sudah ada)
