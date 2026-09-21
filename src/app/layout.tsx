import type { Metadata } from "next";
import { Caveat, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { PwThemeProvider } from "@/components/payway/PwThemeProvider";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./payway.css";
import "./saku-campaigns.css";
import "./saku-posters.css";
import "./saku-theme.css";
import "./saku-landing.css";
import "./saku-polish.css";

// Hanya berat/gaya yang benar-benar dipakai CSS diunduh: setiap kombinasi
// weight x style adalah satu berkas woff2 tambahan pada first paint.
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Italic dipakai .font-display dan aksen serif; tegak dipakai angka display.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saku Sultan — Melangkah Lebih Awal, Bergerak Secara Digital",
  description:
    "Cuan di setiap transaksi bersama Saku Sultan. Jelajahi layanan digital, kelas EduDigi, dan ekosistem Volume Transaksi Nasional. #CUANPERDETIK",
  robots: { index: false, follow: false },
<<<<<<< HEAD
  icons: { icon: "/images/saku-sultan-app-icon.png", apple: "/images/saku-sultan-app-icon.png" },
=======
  icons: { icon: "/images/saku-sultan-app-icon.webp", apple: "/images/saku-sultan-app-icon.webp" },
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
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
      className={`${plusJakartaSans.variable} ${instrumentSerif.variable} ${caveat.variable}`}
    >
      <head><script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} /></head>
      <body suppressHydrationWarning className="pw-body min-h-screen">
        <PwThemeProvider>{children}</PwThemeProvider>
      </body>
    </html>
  );
}
