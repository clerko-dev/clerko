"use client";
import { useMemo, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";

export default function Page() {
  const [client, setClient] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);

  const proposal = useMemo(
    () =>
      [
        `Client: ${client || "Your Client"}`,
        `Scope: ${service || "Service description"}`,
        price ? `Price: ${price}` : "",
        notes ? `Notes: ${notes}` : "",
        "",
        "Why us: speed, quality, clear terms.",
      ]
        .filter(Boolean)
        .join("\n"),
    [client, service, price, notes]
  );

  const copy = async () => {
    await navigator.clipboard.writeText(proposal);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  const downloadTxt = () => {
    const blob = new Blob([proposal], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `proposal_${(client || "client").replace(/\s+/g, "-").toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clear = () => { setClient(""); setService(""); setPrice(""); setNotes(""); };

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="bg-hero rounded-2xl p-8 md:p-12 border border-white/10">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Proposals & quotes{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]">
              in minutes
            </span>
          </h1>
          <p className="max-w-2xl text-white/70">
            Create clean proposals by filling 3 fields. Copy, download, or export (PDF soon).
          </p>
          <div className="flex flex-wrap gap-2">
            <LinkButton href="#try" className="min-w-[140px]">Try free</LinkButton>
            <LinkButton href="/tools" variant="secondary">Browse tools</LinkButton>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="grid md:grid-cols-3 gap-4">
        <GlassCard>
          <div className="text-xs uppercase tracking-wider text-white/50 mb-1">Step 1</div>
          <div className="font-semibold">Fill client & scope</div>
          <p className="text-sm text-white/70 mt-1">Add client name, service and price. Optional notes for timing or milestones.</p>
        </GlassCard>
        <GlassCard>
          <div className="text-xs uppercase tracking-wider text-white/50 mb-1">Step 2</div>
          <div className="font-semibold">Preview instantly</div>
          <p className="text-sm text-white/70 mt-1">Your proposal renders live. Tweak text until it reads perfectly.</p>
        </GlassCard>
        <GlassCard>
          <div className="text-xs uppercase tracking-wider text-white/50 mb-1">Step 3</div>
          <div className="font-semibold">Copy or export</div>
          <p className="text-sm text-white/70 mt-1">Copy to clipboard or download .txt. PDF & saved templates in Pro.</p>
        </GlassCard>
      </section>

      {/* GENERATOR */}
      <section id="try" className="grid md:grid-cols-2 gap-6 anchor-offset">
        <GlassCard className="border-white/15">
          <div className="grid gap-4">
            <label className="text-sm">Client
              <input value={client} onChange={e=>setClient(e.target.value)} placeholder="e.g., ACME LLC" className="input mt-1"/>
            </label>
            <label className="text-sm">Service / Scope
              <input value={service} onChange={e=>setService(e.target.value)} placeholder="e.g., Website + copy" className="input mt-1"/>
            </label>
            <label className="text-sm">Price
              <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="e.g., $1,990" className="input mt-1"/>
            </label>
            <label className="text-sm">Notes (optional)
              <textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Requirements, timeline, milestones…" className="textarea mt-1" rows={5}/>
            </label>
            <div className="flex gap-2">
              <Button type="button">Generate preview</Button>
              <Button type="button" variant="secondary" onClick={clear}>Clear</Button>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Preview</h2>
            <div className="flex items-center gap-2">
              <Button type="button" variant="secondary" onClick={copy}>Copy</Button>
              <Button type="button" variant="secondary" onClick={downloadTxt}>Download .txt</Button>
              {copied && <span className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/20">Copied!</span>}
            </div>
          </div>
          <textarea readOnly value={proposal} className="textarea min-h-[300px] w-full" />
          <p className="mt-3 text-xs text-white/60">Pro tip: Pro plan adds PDF export, saved templates, and branding.</p>
        </GlassCard>
      </section>
    </div>
  );
}
