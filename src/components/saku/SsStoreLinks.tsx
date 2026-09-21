import Image from "next/image";

export function SsStoreLinks() {
  return (
    <div className="ss-store-links">
      {[
        { name: "Google Play", caption: "TEMUKAN DI", icon: "google-play.svg", href: "https://play.google.com/store/apps/details?id=com.saku_sultan" },
        { name: "App Store", caption: "DOWNLOAD DI", icon: "app-store.svg", href: "https://apps.apple.com/id/app/saku-sultan/id6444094885" },
      ].map(store => (
        <a key={store.name} href={store.href} target="_blank" rel="noopener noreferrer" className="ss-store-button">
          <Image src={`/images/payway/${store.icon}`} alt="" width={28} height={28} />
          <span><small>{store.caption}</small><strong>{store.name}</strong></span>
        </a>
      ))}
    </div>
  );
}
