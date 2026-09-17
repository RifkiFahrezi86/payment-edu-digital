"use client";

import { useState } from "react";
import { PwCampaignPoster, type CampaignPoster } from "@/components/payway/pw-campaign-poster";
import { ArrowUpRightIcon, ChevronRightIcon } from "@/components/payway/pw-icons";

export function PwPosterGallery({ posters }: { posters: CampaignPoster[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePoster = posters[activeIndex];

  const changePoster = (direction: number) => {
    setActiveIndex(index => (index + direction + posters.length) % posters.length);
  };

  return (
    <div className="saku-poster-gallery" aria-label="Galeri informasi EduDigi">
      <div id="edudigi-poster-view" className="saku-poster-frame">
        <PwCampaignPoster poster={activePoster} />
      </div>
      <div className="saku-gallery-toolbar">
        <div className="saku-gallery-current" aria-live="polite" aria-atomic="true">
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(posters.length).padStart(2, "0")}</span>
          <h3>{activePoster.title}</h3>
        </div>
        <div className="saku-gallery-actions">
          <a href={activePoster.src} target="_blank" rel="noopener noreferrer" className="saku-poster-original">
            Lihat ukuran penuh <ArrowUpRightIcon />
          </a>
          <button type="button" onClick={() => changePoster(-1)} aria-label="Gambar EduDigi sebelumnya" aria-controls="edudigi-poster-view">
            <ChevronRightIcon className="h-5 w-5 rotate-180" />
          </button>
          <button type="button" onClick={() => changePoster(1)} aria-label="Gambar EduDigi berikutnya" aria-controls="edudigi-poster-view">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="saku-gallery-thumbnails">
        {posters.map((poster, index) => (
          <button
            type="button"
            key={poster.src}
            className={`saku-gallery-thumbnail${activeIndex === index ? " is-selected" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Tampilkan ${poster.title}`}
            aria-pressed={activeIndex === index}
            aria-controls="edudigi-poster-view"
          >
            <PwCampaignPoster poster={poster} thumbnail />
            <span>{poster.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
