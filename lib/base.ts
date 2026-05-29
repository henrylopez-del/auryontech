// Prefixes public assets with the GitHub Pages basePath so they resolve under a sub-path.
export const withBase = (p: string) => `${process.env.NEXT_PUBLIC_BP ?? ""}${p}`;
