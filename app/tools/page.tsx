import Link from "next/link";
const items = [
  { slug: "csv-to-json", name: "CSV → JSON" },
  { slug: "pdf-merge", name: "PDF Merge" },
  { slug: "image-to-webp", name: "Image → WEBP" },
  { slug: "text-cleaner", name: "Text Cleaner" },
  { slug: "slugify", name: "Slugify" },
];
export const metadata = { title: "Clerko — Tools" };
export default function ToolsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Tools</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map(it => (
          <Link key={it.slug} href={`/tools/${it.slug}`} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
            <div className="font-medium">{it.name}</div>
            <div className="text-sm text-white/70">Open tool</div>
          </Link>
        ))}
      </div>
    </div>
  );
}