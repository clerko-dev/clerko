  "use client";
  import { useState } from "react";

  export default function Page() {
    const [client, setClient] = useState("");
    const [service, setService] = useState("");
    const [price, setPrice] = useState("");
    const [notes, setNotes] = useState("");

    return (
      <div className="space-y-14">
        {/* Hero */}
        <section className="text-center space-y-6 pt-4">
          <p className="text-sm uppercase tracking-widest text-foreground/60">Clerko</p>
          <h1 className="text-4xl md:text-6xl h1">Proposals & quotes in minutes</h1>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Quickly draft tailored proposals and quotes with our intuitive generator.
          </p>
          <div className="flex gap-3 justify-center">
            <a href="#generator" className="btn-gradient">Generate preview</a>
            <a href="/tools" className="btn-outline">Browse tools</a>
          </div>
        </section>

        {/* Form + Preview */}
        <section id="generator" className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h2 className="h2 text-xl">Client</h2>
            <input className="form-input" placeholder="e.g. Acme Corp." value={client} onChange={(e)=>setClient(e.target.value)} />
            <input className="form-input" placeholder="Service" value={service} onChange={(e)=>setService(e.target.value)} />
            <input className="form-input" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <textarea className="form-textarea" placeholder="Notes" value={notes} onChange={(e)=>setNotes(e.target.value)} />
            <div>
              <button className="btn-gradient w-full">Generate preview</button>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="h2 text-xl mb-3">Proposal preview</h2>
            <div className="rounded-xl border border-white/10 p-4 font-mono text-sm text-foreground/80 bg-black/20 h-64 overflow-auto">
{`Project: ${service || "Service"}
Client: ${client || "Your client"}
Total: ${price || "$5,000 USD"}

Notes:
${notes || "—"}`}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="glass rounded-2xl p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Feature title="Customizable templates" text="Tailor sections and style to match your brand." />
            <Feature title="Real‑time collaboration" text="Share, comment, and update together." />
            <Feature title="PDF export" text="Deliver polished PDFs in one click." />
          </div>
        </section>

        {/* Popular tools & How it works */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 space-y-3">
            <h3 className="font-semibold">Popular tools</h3>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li><a className="btn-outline hover:bg-white/5 w-full justify-center" href="/tools/csv-to-json">CSV → JSON</a></li>
              <li><a className="btn-outline hover:bg-white/5 w-full justify-center" href="/tools/pdf-merge">PDF merge</a></li>
              <li><a className="btn-outline hover:bg-white/5 w-full justify-center" href="/tools/image-to-webp">Image → WebP</a></li>
              <li><a className="btn-outline hover:bg-white/5 w-full justify-center" href="/tools/text-cleaner">Text cleaner</a></li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 space-y-3">
            <h3 className="font-semibold">How it works</h3>
            <ol className="space-y-2 text-sm text-foreground/80">
              <li>1) Pick a template</li>
              <li>2) Customize your proposal</li>
              <li>3) Generate a preview</li>
            </ol>
          </div>
        </section>

        {/* Templates */}
        <section className="glass rounded-2xl p-6 space-y-3">
          <h3 className="font-semibold">Ready‑made templates</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {["Business proposal","Marketing plan","Service agreement","Software development"].map((t)=>(
              <span key={t} className="btn-outline">{t}</span>
            ))}
          </div>
        </section>
      </div>
    );
  }

  function Feature({ title, text }: { title: string; text: string }) {
    return (
      <div className="rounded-xl border border-white/10 p-4">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-foreground/70 mt-1">{text}</p>
      </div>
    );
  }
