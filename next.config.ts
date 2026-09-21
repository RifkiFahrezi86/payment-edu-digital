import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // `next build` spawn 1 worker per core (24 di mesin ini) dan tiap worker boot
    // isolate V8 sendiri, jadi RAM sistem habis sebelum build/render selesai.
    cpus: 2,
    // sharp default concurrency = jumlah core. Dekode penuh ke RAM:
    // hero-bg.jpg 2200x1467 = 12 MB raster per job, dikali 24 job paralel.
    imgOptConcurrency: 1,
    imgOptSequentialRead: true,
    imgOptMaxInputPixels: 6e6,
  },
  images: {
    // ponytail: default 8 deviceSizes x 46 file = ratusan job optimize.
    // Naikkan lagi kalau butuh varian retina spesifik.
    deviceSizes: [640, 828, 1080, 1920],
    imageSizes: [32, 64, 128, 384],
  },
};

export default nextConfig;
