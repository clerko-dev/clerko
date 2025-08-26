  "use client";
  import { useState } from "react";

  export default function GeneratorSection() {
    const [client, setClient] = useState("");
    const [service, setService] = useState("");
    const [price, setPrice] = useState("");
    const [notes, setNotes] = useState("");

    return (
      <section id="generator" className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 space-y-4">
          <h2 className="h2 text-xl">Client</h2>
          <input className="input" placeholder="e.g. Acme Corp." value={client} onChange={(e)=>setClient(e.target.value)} />
          <input className="input" placeholder="Service" value={service} onChange={(e)=>setService(e.target.value)} />
          <input className="input" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
          <textarea className="textarea" placeholder="Notes" value={notes} onChange={(e)=>setNotes(e.target.value)} />
          <button className="btn-gradient w-full">Generate preview</button>
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
    );
  }
