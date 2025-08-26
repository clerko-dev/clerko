export default function TemplatesSection() {
  const tags = ["Business proposal","Marketing plan","Service agreement","Software development"];
  return (
    <section className="glass rounded-2xl p-6 space-y-3">
      <h3 className="font-semibold">Ready‑made templates</h3>
      <div className="flex flex-wrap gap-3 text-sm">
        {tags.map(t => (<span key={t} className="btn-outline">{t}</span>))}
      </div>
    </section>
  );
}
