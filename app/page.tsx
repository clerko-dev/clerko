"use client";
import { useMemo, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function Page() {
  const [client, setClient] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");

  const proposal = useMemo(() => [
    `Client: ${client || "Your Client"}`,
    `Scope: ${service || "Service description"}`,
    price ? `Price: ${price}` : "",
    notes ? `Notes: ${notes}` : "",
    "",
    "Why us: speed, quality, clear terms."
  ].filter(Boolean).join("\n"), [client, service, price, notes]);

  const copy = async () => { await navigator.clipboard.writeText(proposal); alert("Copied to clipboard."); };

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-2xl bg-hero p-8 md:p-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Proposals & quotes{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]">
            in minutes
          </span>
        </h1>
        <p className="mt-3 text-white/70">Type a few fields, see the preview, copy or export later.</p>
      </section>

      {/* GENERATOR + PREVIEW */}
      <section className="grid md:grid-cols-2 gap-6">
        <GlassCard>
          <div className="grid gap-4">
            <label className="text-sm">Client
              <input value={client} onChange={e=>setClient(e.target.value)} placeholder="e.g., ACME LLC"
                className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"/>
            </label>
            <label className="text-sm">Service / Scope
              <input value={service} onChange={e=>setService(e.target.value)} placeholder="e.g., Website + copy"
                className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"/>
            </label>
            <label className="text-sm">Price
              <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="e.g., $1,990"
                className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"/>
            </label>
            <label className="text-sm">Notes (optional)
              <textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Requirements, timeline, milestones…"
                rows={4}
                className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"/>
            </label>
            <Button className="mt-2">Generate preview</Button>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Preview</h2>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={copy}>Copy</Button>
              {/* Export to PDF (V1 soon) */}
            </div>
          </div>
          <textarea readOnly value={proposal} className="min-h-[280px] w-full rounded-lg bg-black/30 border border-white/10 p-3 text-sm"/>
          <p className="mt-3 text-xs text-white/60">Pro tip: Pro plan adds PDF export, saved templates, and branding.</p>
        </GlassCard>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-4">
        <GlassCard><div className="font-semibold">Templates</div><div className="text-sm text-white/70">Start with ready-made industry templates.</div></GlassCard>
        <GlassCard><div className="font-semibold">Export</div><div className="text-sm text-white/70">One-click (PDF/Docs/Notion — soon).</div></GlassCard>
        <GlassCard><div className="font-semibold">Tracking</div><div className="text-sm text-white/70">See if a client opened your proposal (Pro).</div></GlassCard>
      </section>
    </div>
  );
}