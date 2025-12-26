/**
 * Truncates a string to a maximum length without cutting off the last word
 *
 * @param text - input test to truncate
 * @param max - maximum allowed lenght (in characters). Defaults to 100
 * @returns the truncate string
 */
export function truncateWord(text: string, max = 100): string {
  const cleanText = text.trim();
  if (cleanText.length <= max) return cleanText;

  const cut = cleanText.slice(0, max);
  const lastSpaceIndex = cut.lastIndexOf(" ");
  return (lastSpaceIndex > 0 ? cut.slice(0, lastSpaceIndex) : cut) + "...";
}

/**
 * Formats an ISO date string as "Month D<suffix>, YYYY" in UTC
 *
 * @param iso - ISO date string
 * @returns formatted date string
 */
export function formatDate(iso: string): string {
  const date = new Date(iso);

  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const month = date.toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  });

  const suffix =
    day % 100 >= 11 && day % 100 <= 13
      ? "th"
      : day % 10 === 1
      ? "st"
      : day % 10 === 2
      ? "nd"
      : day % 10 === 3
      ? "rd"
      : "th";

  return `${month} ${day}${suffix}, ${year}`;
}

/**
 * Normalizes an image URL by upgrading an "http://" scheme to "https://"
 *
 * @param url - the URL to normalize
 * @returns normalized URL or underfined if no URL was provided
 */
export function normalizeImageUrl(url?: string) {
  if (!url) return;

  return url.startsWith("http://") ? url.replace("http://", "https://") : url;
}
