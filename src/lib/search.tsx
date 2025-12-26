import type { ReactNode } from "react";

/**
 * Parses a keyword query into a de-duplicated list of lowercase keywords. Splits on commas and whitespace, trims, removes empty entries
 *
 * @param query - the raw keyword query string
 * @returns an array of unique, lowercase keywords
 */
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

/**
 * Counts how many distinct keywords are present in the given text (case-insensitive)
 *
 * @param text - the text to search within
 * @param keywords - keywords to check for presence
 * @returns the number of distinct keywords found in the text
 */
export function countKeywordHits(text: string, keywords: string[]): number {
  const hay = text.toLowerCase();
  let hits = 0;
  for (const keyword of keywords) {
    if (keyword && hay.includes(keyword)) hits += 1;
  }
  return hits;
}

/**
 * Escapes characters that have special meaning in regular expressions
 *
 * @param str - the string to escape
 * @returns the escaped string safe for use
 */
function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Returns a ReactNode where occurrences of any keyword are wrapped in a <mark> element
 *
 * @param text - the input text to highlight
 * @param keywords - keywords to highlight within the text
 * @returns ReactNode with highlighted keyword matches
 */
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
