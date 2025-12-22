export function truncateWord(text: string, max = 100) {
  const clean = text.trim();
  if (clean.length <= max) return clean;

  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + "...";
}

export function formatDate(iso: string) {
  const d = new Date(iso);

  const day = d.getUTCDate();
  const year = d.getUTCFullYear();

  const month = d.toLocaleString("en-US", { month: "long", timeZone: "UTC" });

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
