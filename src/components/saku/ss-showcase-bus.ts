export type ShowcaseTab = "edudigi" | "qtra" | "qris" | "transfer" | "ppob" | "passolo" | "merchant";

export const SHOWCASE_TAB_EVENT = "ss-showcase-tab";

/** Buka tab showcase dari komponen mana pun lalu scroll ke #fitur. */
export function openShowcaseTab(tab: ShowcaseTab) {
  window.dispatchEvent(new CustomEvent<ShowcaseTab>(SHOWCASE_TAB_EVENT, { detail: tab }));
  window.history.replaceState(null, "", "#fitur");
  document.getElementById("fitur")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
}
