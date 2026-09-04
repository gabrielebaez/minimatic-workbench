/**
 * Converts file names or path segments into human-readable titles.
 * e.g. "learn_minimatic_in_15_minutes.md" -> "Learn Minimatic In 15 Minutes"
 */
export function formatName(name: string): string {
  return name
    .replace(/\.md$/, '')
    .split(/[-_]/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
