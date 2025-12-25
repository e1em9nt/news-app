import type { ReactNode } from "react";

export function parseKeywords(query: string): string[] {
  return Array.from(
    new Set(
      query
        .toLowerCase()
        .split(/[,\s]+/g)
        .map((s) => s.trim())
        .filter(Boolean)
    )
  );
}

// counts DISTINCT keyword presence
export function countKeywordHits(text: string, keywords: string[]): number {
  const hay = text.toLowerCase();
  let hits = 0;
  for (const keyword of keywords) {
    if (keyword && hay.includes(keyword)) hits += 1;
  }
  return hits;
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function highlightText(text: string, keywords: string[]): ReactNode {
  if (!text) return text;
  if (!keywords.length) return text;

  const escaped = keywords.map(escapeRegExp);
  const regExp = new RegExp(`(${escaped.join("|")})`, "gi");

  const parts = text.split(regExp);

  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <mark key={i} className="search-highlight">
          {part}
        </mark>
      );
    }
    return part;
  });
}
