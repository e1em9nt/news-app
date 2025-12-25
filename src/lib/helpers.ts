export function truncateWord(text: string, max = 100): string {
  const cleanText = text.trim();
  if (cleanText.length <= max) return cleanText;

  const cut = cleanText.slice(0, max);
  const lastSpaceIndex = cut.lastIndexOf(" ");
  return (lastSpaceIndex > 0 ? cut.slice(0, lastSpaceIndex) : cut) + "...";
}

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

export function normalizeImageUrl(url?: string) {
  if (!url) return;

  return url.startsWith("http://") ? url.replace("http://", "https://") : url;
}
