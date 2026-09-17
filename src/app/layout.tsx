import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { PwThemeProvider } from "@/components/payway/PwThemeProvider";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./payway.css";
import "./saku-campaigns.css";
import "./saku-posters.css";
import "./saku-theme.css";

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
      data-theme="light"
      data-display-mode="auto"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${instrumentSerif.variable}`}
    >
      <head><script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} /></head>
      <body suppressHydrationWarning className="pw-body min-h-screen">
        <PwThemeProvider>{children}</PwThemeProvider>
      </body>
    </html>
  );
}
