import Image from "next/image";

export type CampaignPoster = {
  src: string;
  mobileSrc?: string;
  /** Dimensi mobileSrc bila rasionya berbeda dari src (mencegah lompatan layout). */
  mobileWidth?: number;
  mobileHeight?: number;
  width: number;
  height: number;
  title: string;
  description: string;
};

export function PwCampaignPoster({
  poster,
  thumbnail = false,
}: {
  poster: CampaignPoster;
  thumbnail?: boolean;
}) {
  return (
    <picture className="saku-poster-picture">
      {poster.mobileSrc && <source media="(max-width: 639px)" srcSet={poster.mobileSrc} width={poster.mobileWidth} height={poster.mobileHeight} />}
      <Image
        src={poster.src}
        alt={thumbnail ? "" : `${poster.title}. ${poster.description}`}
        width={poster.width}
        height={poster.height}
        sizes={thumbnail ? "(max-width: 639px) 28vw, 220px" : "(min-width: 1504px) 1440px, 96vw"}
        className="saku-poster-image"
      />
    </picture>
  );
}
