export type PartnerLogo = { name: string; logo: string; sub?: string };

export const CORE_PARTNERS: PartnerLogo[] = [
  { name: "Bank Indonesia", logo: "/images/payway/pay/bank-indonesia.png", sub: "Bank Sentral Republik Indonesia" },
  { name: "BRICK", logo: "/images/payway/pay/brick.png", sub: "Infrastruktur Finansial" },
  { name: "BMT", logo: "/images/payway/pay/bmt-reference.png" },
];

export const PAYMENT_PARTNERS: PartnerLogo[] = [
  { name: "Mandiri", logo: "/images/payway/pay/mandiri.svg" },
  { name: "BRI", logo: "/images/payway/pay/bri.svg" },
  { name: "BCA", logo: "/images/payway/pay/bca.svg" },
  { name: "BNI", logo: "/images/payway/pay/bni.svg" },
  { name: "CIMB Niaga", logo: "/images/payway/pay/cimb-niaga.svg" },
  { name: "Permata", logo: "/images/payway/pay/permata.svg" },
  { name: "QRIS", logo: "/images/payway/pay/qris.svg" },
  { name: "OVO", logo: "/images/payway/pay/ovo.svg" },
  { name: "GoPay", logo: "/images/payway/pay/gopay.svg" },
  { name: "DANA", logo: "/images/payway/pay/dana.svg" },
  { name: "ShopeePay", logo: "/images/payway/pay/shopeepay.svg" },
  { name: "LinkAja", logo: "/images/payway/pay/linkaja.svg" },
  { name: "Telkomsel", logo: "/images/payway/pay/telkomsel.svg" },
  { name: "XL", logo: "/images/payway/pay/xl.svg" },
  { name: "Indosat", logo: "/images/payway/pay/indosat.svg" },
  { name: "Tri", logo: "/images/payway/pay/tri.svg" },
  { name: "Smartfren", logo: "/images/payway/pay/smartfren.svg" },
];

export const TRUSTED_PARTNERS = [...CORE_PARTNERS, ...PAYMENT_PARTNERS];
