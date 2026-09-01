import type { Metadata } from "next";
import { Geist, Instrument_Serif, Inter } from "next/font/google";
import "./payway.css";

/**
 * Font persis seperti preview PayWay (jiro.build):
 * - Inter 400-700 sebagai sans utama (body & UI)
 * - Instrument Serif 400 (regular + italic) untuk kata aksen heading
 * - Geist 300-700 dimuat halaman aslinya (angka/UI sekunder)
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-pw-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-pw-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-pw-geist",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saku Sultan — Mudahkan Hidupmu dengan Transaksi Kekinian",
  description:
    "Bayar pulsa, listrik, PDAM, BPJS, dan top-up e-money semua dalam satu genggaman. Praktis, cepat, dan aman. #PastiUNTUNG",
  robots: { index: false, follow: false },
};

export default function PaywayRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${instrumentSerif.variable} ${geist.variable}`}
    >
      <body suppressHydrationWarning className="pw-body min-h-screen">
        {children}
      </body>
    </html>
  );
}
