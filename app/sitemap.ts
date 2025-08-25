export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://clerko.vercel.app";
  const staticRoutes = ["/", "/tools", "/how-to", "/store", "/privacy", "/terms"];
  const howTo = ["/how-to/write-a-project-proposal"];
  const tools = ["/tools/csv-to-json","/tools/pdf-merge","/tools/image-to-webp","/tools/text-cleaner","/tools/slugify"];
  return [...staticRoutes, ...howTo, ...tools].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "/" ? 1 : 0.7,
  }));
}
