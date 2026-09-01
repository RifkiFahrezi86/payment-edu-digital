import type { ReactNode } from "react";
import { PwReveal } from "@/components/payway/pw-reveal";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.saku_sultan";

const sparklesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sparkles w-4 h-4 text-[#198F38] fill-[#198F38]"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>
);

const arrowUpRightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-up-right w-3 h-3 text-[#042718]"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

function MiniPill({ children }: { children: ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full border border-[#042718]/10 bg-white/70 text-xs font-medium text-[#042718]/75">
      {children}
    </span>
  );
}

export function PwFeatureIntro() {
  return (
    <section
      id="fitur"
      className="w-full bg-white flex justify-center py-24 scroll-mt-24"
    >
      <div className="w-full max-w-[1440px] px-6 lg:px-[96px] flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center text-center gap-6">
          <PwReveal className="flex items-center gap-2 bg-[#198F380F] pl-[14px] pr-[16px] py-[6px] rounded-full border border-[#198F381A]">
            {sparklesIcon}
            <span className="font-sans font-normal text-base text-[#198F38] tracking-[-0.3px]">
              Fitur
            </span>
          </PwReveal>
          <PwReveal className="w-full max-w-[660px]" delay={100}>
            <h2 className="w-full font-heading font-semibold text-[32px] md:text-[42px] lg:text-[52px] leading-[38px] md:leading-[48px] lg:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] text-[#042718]">
              Fitur Saku Sultan yang Sesuai dengan Kebutuhan Harian
            </h2>
          </PwReveal>
          <PwReveal className="w-full max-w-[640px]" delay={200}>
            <p className="w-full font-sans font-normal text-base md:text-lg leading-[24px] md:leading-[28px] text-[#042718cc]">
              Berdasarkan data MCP Saku Sultan, fitur utama mencakup pembayaran
              tagihan, barcode scan, transfer uang, top-up saldo, e-commerce,
              dan keamanan biometrik.
            </p>
          </PwReveal>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col lg:flex-row gap-6">
            <PwReveal className="w-full lg:w-[506px] h-[360px] md:h-[408px] rounded-[28px] bg-[linear-gradient(160deg,#EAF1FF_0%,#BFD6FF_100%)] flex flex-col items-start justify-between p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -top-5 right-5 text-[72px] md:text-[120px] leading-none font-heading font-bold text-white/50 select-none">
                S
              </div>
              <div className="relative z-10 max-w-[320px]">
                <h3 className="font-heading font-semibold text-[28px] md:text-[34px] leading-[1.05] tracking-[-1px] text-[#042718] mb-4">
                  Pembayaran Tagihan
                </h3>
                <p className="font-sans text-base md:text-lg leading-7 text-[#042718]/75 mb-5">
                  Bayar listrik, air, internet, BPJS, dan TV kabel langsung dari
                  aplikasi tanpa antre.
                </p>
                <div className="flex flex-wrap gap-2">
                  <MiniPill>PLN</MiniPill>
                  <MiniPill>PDAM</MiniPill>
                  <MiniPill>BPJS</MiniPill>
                  <MiniPill>TV Kabel</MiniPill>
                </div>
              </div>

              <div className="relative z-10 w-full flex items-end justify-between gap-3">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center bg-[#042718] rounded-full overflow-hidden transition-all duration-300 h-[46px] min-w-[165px]"
                >
                  <div className="absolute right-[6px] w-8 h-8 bg-white rounded-full flex items-center justify-center z-10">
                    {arrowUpRightIcon}
                  </div>
                  <span className="block pl-[18px] pr-[46px] font-sans font-medium text-base text-white whitespace-nowrap">
                    Bayar Sekarang
                  </span>
                </a>

                <div className="rounded-[22px] bg-white/75 border border-white/60 shadow-sm px-4 py-3">
                  <p className="text-[11px] text-[#042718]/55">Semua dalam satu tempat</p>
                  <p className="text-sm font-bold text-[#042718]">Lebih cepat &amp; rapi</p>
                </div>
              </div>
            </PwReveal>

            <PwReveal
              className="flex-1 h-[360px] md:h-[408px] rounded-[28px] bg-[linear-gradient(160deg,#F5E7D2_0%,#E8D0A2_100%)] flex flex-col lg:flex-row items-stretch px-8 md:px-[48px] py-8 md:py-[32px] overflow-hidden relative gap-6"
              delay={100}
            >
              <div className="flex flex-col gap-4 z-10 lg:w-[368px]">
                <h3 className="font-heading font-semibold text-xl md:text-2xl leading-[30px] tracking-[-0.8px] text-[#042718]">
                  Barcode Scan &amp; QRIS
                </h3>
                <p className="font-sans font-normal text-base md:text-lg leading-7 text-[#042718cc]">
                  Scan QR atau barcode di merchant untuk pembayaran cepat tanpa
                  uang tunai.
                </p>
              </div>

              <PwReveal
                className="flex-1 flex items-end justify-center lg:justify-end"
                delay={200}
              >
                <div className="w-full max-w-[320px] space-y-3">
                  {[
                    ["Merchant QRIS", "Siap scan"],
                    ["Barcode pembayaran", "Instan"],
                    ["Toko harian", "Tanpa uang tunai"],
                    ["Transaksi retail", "Cepat selesai"],
                  ].map(([name, status], index) => (
                    <div
                      key={name}
                      className={`rounded-[22px] border border-white/55 bg-white/75 backdrop-blur-sm p-4 shadow-sm ${
                        index === 1 ? "translate-x-2" : ""
                      }`}
                    >
                      <p className="text-sm font-semibold text-[#042718]">{name}</p>
                      <p className="text-xs text-[#042718]/55 mt-1">{status}</p>
                    </div>
                  ))}
                </div>
              </PwReveal>
            </PwReveal>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <PwReveal className="flex-1 min-h-[380px] md:min-h-[430px] rounded-[28px] bg-[linear-gradient(180deg,#DFF2E4_0%,#C8E7D1_100%)] p-8 md:p-12 flex flex-col gap-8 overflow-hidden relative">
              <div className="flex flex-col gap-[10px] max-w-[622px] z-10">
                <h3 className="font-heading font-semibold text-xl md:text-2xl leading-[30px] tracking-[-0.8px] text-[#042718]">
                  Transfer Uang
                </h3>
                <p className="font-sans font-normal text-base md:text-lg leading-7 text-[#042718cc] opacity-80">
                  Kirim uang ke sesama pengguna atau ke rekening bank manapun
                  dengan proses yang praktis.
                </p>
              </div>

              <PwReveal className="relative flex-1 w-full flex items-end" delay={200}>
                <div className="w-full rounded-[28px] bg-white/72 border border-white/70 p-5 shadow-[0_18px_40px_rgba(4,39,24,0.08)]">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <MiniPill>Sesama Sultan</MiniPill>
                    <MiniPill>Bank Lokal</MiniPill>
                    <MiniPill>Realtime</MiniPill>
                    <MiniPill>Praktis</MiniPill>
                    <MiniPill>Aman</MiniPill>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm font-medium text-[#042718] mb-1">
                        <span>Transfer sesama pengguna</span>
                        <span>Instan</span>
                      </div>
                      <div className="h-2 rounded-full bg-[#042718]/8 overflow-hidden">
                        <div className="h-full w-[86%] bg-[#198F38] rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm font-medium text-[#042718] mb-1">
                        <span>Transfer ke rekening bank</span>
                        <span>Terverifikasi</span>
                      </div>
                      <div className="h-2 rounded-full bg-[#042718]/8 overflow-hidden">
                        <div className="h-full w-[72%] bg-[#042718] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </PwReveal>
            </PwReveal>

            <PwReveal
              className="w-full lg:w-[506px] min-h-[380px] md:min-h-[430px] rounded-[28px] bg-[linear-gradient(160deg,#F6F2FF_0%,#D8CCFF_100%)] px-8 md:px-[48px] pt-8 md:pt-[48px] pb-[32px] md:pb-[40px] flex flex-col items-start gap-6 overflow-hidden"
              delay={100}
            >
              <div className="flex flex-col gap-[10px] w-full max-w-[410px]">
                <h3 className="font-heading font-semibold text-xl md:text-2xl leading-[30px] tracking-[-0.8px] text-[#042718]">
                  Top-Up Saldo &amp; E-Commerce
                </h3>
                <p className="font-sans font-normal text-base md:text-lg leading-7 text-[#042718cc]">
                  Isi saldo kapan saja dan gunakan Saku Sultan untuk belanja
                  online di berbagai platform e-commerce.
                </p>
              </div>

              <PwReveal className="w-full mt-auto" delay={200}>
                <div className="rounded-[28px] bg-white/80 border border-white/70 p-5 shadow-[0_18px_40px_rgba(4,39,24,0.08)]">
                  <div className="grid grid-cols-[96px_1fr] gap-4 items-center">
                    <div className="aspect-square rounded-[20px] bg-[#042718] text-white flex items-center justify-center text-[10px] font-semibold tracking-[0.2em]">
                      TOP UP
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-[#042718]">
                        Saldo siap dipakai untuk transaksi online
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <MiniPill>E-Commerce</MiniPill>
                        <MiniPill>Bank Transfer</MiniPill>
                        <MiniPill>Minimarket</MiniPill>
                        <MiniPill>Siap Belanja</MiniPill>
                      </div>
                    </div>
                  </div>
                </div>
              </PwReveal>
            </PwReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
