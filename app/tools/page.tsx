// app/tools/page.tsx
import Link from "next/link";
const tools = [
  { href: "/tools/csv-to-json", title: "CSV → JSON" },
  { href: "/tools/pdf-merge", title: "PDF Merge" },
  { href: "/tools/image-to-webp", title: "Image → WebP" },
  { href: "/tools/text-cleaner", title: "Text Cleaner" },
  { href: "/tools/slugify", title: "Slugify" },
];
export default function ToolsIndex() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Clerko Tools</h1>
      <ul className="grid gap-3">
        {tools.map(t => (
          <li key={t.href} className="border rounded p-3 hover:bg-gray-50">
            <Link href={t.href} className="font-medium">{t.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
