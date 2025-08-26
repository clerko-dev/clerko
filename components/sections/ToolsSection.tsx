export default function ToolsSection() {
  const tools = [
    { href: "/tools/csv-to-json", label: "CSV → JSON" },
    { href: "/tools/pdf-merge", label: "PDF merge" },
    { href: "/tools/image-to-webp", label: "Image → WebP" },
    { href: "/tools/text-cleaner", label: "Text cleaner" },
  ];
  return (
    <section className="glass rounded-2xl p-6 space-y-3">
      <h3 className="font-semibold">Popular tools</h3>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        {tools.map(t => (
          <li key={t.href}><a className="btn-outline hover:bg-white/5 w-full justify-center inline-flex" href={t.href}>{t.label}</a></li>
        ))}
      </ul>
    </section>
  );
}
