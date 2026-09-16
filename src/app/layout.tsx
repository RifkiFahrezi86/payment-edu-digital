import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./payway.css";
import "./saku-campaigns.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saku Sultan — Melangkah Lebih Awal, Bergerak Secara Digital",
  description:
    "Cuan di setiap transaksi bersama Saku Sultan. Jelajahi layanan digital, kelas EduDigi, dan ekosistem Volume Transaksi Nasional. #CUANPERDETIK",
  robots: { index: false, follow: false },
};

export default function PaywayRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${instrumentSerif.variable}`}
    >
      <body suppressHydrationWarning className="pw-body min-h-screen">
        {children}
      </body>
    </html>
  );
}
