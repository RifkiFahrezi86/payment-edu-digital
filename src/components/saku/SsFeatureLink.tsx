"use client";

import type { ReactNode } from "react";
import { openShowcaseTab, type ShowcaseTab } from "./ss-showcase-bus";

export function SsFeatureLink({ tab, children, className }: { tab: ShowcaseTab; children: ReactNode; className?: string }) {
  return <a href="#fitur" className={className} onClick={event => { event.preventDefault(); openShowcaseTab(tab); }}>{children}</a>;
}
