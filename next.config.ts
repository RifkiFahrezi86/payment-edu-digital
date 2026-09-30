import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hosting cPanel (Apache) tidak menjalankan Node: seluruh situs diekspor jadi
  // HTML statis ke ./out. trailingSlash membuat /vtn -> /vtn/index.html sehingga
  // Apache bisa melayaninya tanpa aturan rewrite.
  output: "export",
  trailingSlash: true,
  // Tanpa ini Next memblokir /_next/webpack-hmr saat halaman dibuka lewat IP
  // LAN atau 127.0.0.1, sehingga hot reload mati dan perubahan tidak tampil.
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.100.27", "192.168.18.162"],
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
