import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tanpa ini Next memblokir /_next/webpack-hmr saat halaman dibuka lewat IP
  // LAN atau 127.0.0.1, sehingga hot reload mati dan perubahan tidak tampil.
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.100.27"],
  experimental: {
    // `next build` spawn 1 worker per core (24 di mesin ini) dan tiap worker boot
    // isolate V8 sendiri, jadi RAM sistem habis sebelum build/render selesai.
    cpus: 2,
  },
  images: {
    // Optimizer dimatikan: di dev ia mengubah gambar per request sehingga
    // panel terasa lama dibuka. Ganti strateginya — aset sudah disiapkan pada
    // ukuran tampil oleh scripts/build-display-assets.cjs, jadi berkas di
    // public/ langsung dikirim apa adanya.
    unoptimized: true,
  },
};

export default nextConfig;
