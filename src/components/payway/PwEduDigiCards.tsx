"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";
import { MEMBERSHIP_POSTERS } from "@/components/payway/pw-campaign-posters";
import { ChevronRightIcon } from "@/components/payway/pw-icons";

type CardId = "edudigi" | "startup";

export function PwEduDigiCards() {
  const [edudigi, startup] = MEMBERSHIP_POSTERS;
  const [frontCard, setFrontCard] = useState<CardId>("edudigi");
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);
  const cards = [{ ...startup, id: "startup" as const }, { ...edudigi, id: "edudigi" as const }];

  const switchCard = () => setFrontCard(current => current === "edudigi" ? "startup" : "edudigi");

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
    suppressClick.current = false;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const dx = Math.abs(event.clientX - start.x);
    const dy = Math.abs(event.clientY - start.y);
    if (dx > 36 && dx > dy * 1.25) {
      suppressClick.current = true;
      switchCard();
    }
  };

  return (
    <figure
      className="saku-edudigi-cards"
      aria-label="Kartu Member Startup dan Kartu EduDigi"
      onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          switchCard();
        }
      }}
    >
      <div
        className="saku-edudigi-card-stage"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => { pointerStart.current = null; }}
      >
        {cards.map(card => (
          <button
            key={card.id}
            type="button"
            data-card={card.id}
            className={`saku-edudigi-card ${frontCard === card.id ? "saku-edudigi-card-front" : "saku-edudigi-card-back"}`}
            aria-label={`Tampilkan ${card.title} di depan`}
            aria-pressed={frontCard === card.id}
            onClick={event => {
              if (event.detail > 0 && suppressClick.current) {
                suppressClick.current = false;
                return;
              }
              setFrontCard(card.id);
            }}
          >
            <Image
              src={card.src}
              alt={card.title}
              width={card.width}
              height={card.height}
              sizes="(min-width: 1024px) 520px, 90vw"
              draggable={false}
              className="saku-edudigi-card-artwork"
            />
          </button>
        ))}
      </div>
      <figcaption className="saku-edudigi-card-controls">
        <button type="button" onClick={switchCard} aria-label="Kartu sebelumnya"><ChevronRightIcon className="h-5 w-5 rotate-180" /></button>
        <span aria-live="polite" aria-atomic="true">
          <strong>{frontCard === "edudigi" ? edudigi.title : startup.title}</strong>
          <small>Geser atau klik kartu</small>
        </span>
        <button type="button" onClick={switchCard} aria-label="Kartu berikutnya"><ChevronRightIcon className="h-5 w-5" /></button>
      </figcaption>
    </figure>
  );
}
