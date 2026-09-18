import { IcWhatsapp } from "./ss-icons";

/** Tombol WhatsApp mengambang kanan-bawah. */
export function SsWhatsapp() {
  return (
    <a
      href="https://wa.me/6281100000000?text=Halo%20Saku%20Sultan%2C%20saya%20butuh%20bantuan"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_16px_40px_rgba(37,211,102,.45)] transition-transform duration-200 hover:scale-110"
    >
      <IcWhatsapp width={28} height={28} />
    </a>
  );
}
