import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./payway.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saku Sultan - Mudahkan Hidupmu dengan Transaksi Kekinian",
  description:
    "Bayar pulsa, listrik, PDAM, BPJS, dan top-up e-money dalam satu genggaman bersama Saku Sultan.",
  robots: { index: false, follow: false },
};

export default function PaywayRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body suppressHydrationWarning className="pw-body min-h-screen">
        {children}
      </body>
    </html>
  );
}
