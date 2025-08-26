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

  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(proposal);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const downloadTxt = () => {
    const blob = new Blob([proposal], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "proposal.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const inputBase =
    "mt-1 w-full rounded-lg bg-white/[0.06] border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20 placeholder:text-white/40";

  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="rounded-2xl bg-hero px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Proposals & quotes{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]">
            in minutes
          </span>
        </h1>
        <p className="mt-4 text-white/75">
          Type a few fields, see the preview, copy or export.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <LinkButton href="/#try">Try free</LinkButton>
          <LinkButton href="/tools" variant="secondary">
            Browse tools
          </LinkButton>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="grid md:grid-cols-3 gap-5">
        <GlassCard>
          <div className="text-xs tracking-widest text-white/60 mb-1">STEP 1</div>
          <div className="font-semibold">Fill client & scope</div>
          <p className="text-sm text-white/70 mt-1">
            Add client name, service and price. Optional notes for timing or milestones.
          </p>
        </GlassCard>
        <GlassCard>
          <div className="text-xs tracking-widest text-white/60 mb-1">STEP 2</div>
          <div className="font-semibold">Preview instantly</div>
          <p className="text-sm text-white/70 mt-1">
            Your proposal renders live. Tweak text until it reads perfectly.
          </p>
        </GlassCard>
        <GlassCard>
          <div className="text-xs tracking-widest text-white/60 mb-1">STEP 3</div>
          <div className="font-semibold">Copy or export</div>
          <p className="text-sm text-white/70 mt-1">
            Copy to clipboard or download .txt. PDF & saved templates in Pro.
          </p>
        </GlassCard>
      </section>

      {/* GENERATOR + PREVIEW */}
      <section id="try" className="grid md:grid-cols-2 gap-6 anchor-offset">
        <GlassCard>
          <div className="grid gap-4">
            <label className="text-sm block">
              Client
              <input value={client} onChange={(e) => setClient(e.target.value)} placeholder="e.g., ACME LLC" autoComplete="organization" className={inputBase} />
            </label>
            <label className="text-sm block">
              Service / Scope
              <input value={service} onChange={(e) => setService(e.target.value)} placeholder="e.g., Website + copy" className={inputBase} />
            </label>
            <label className="text-sm block">
              Price
              <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g., $1,990" inputMode="decimal" className={inputBase} />
            </label>
            <label className="text-sm block">
              Notes (optional)
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Requirements, timeline, milestones…" rows={4} className={`${inputBase} resize-vertical`} />
            </label>
            <div className="flex gap-2">
              <Button type="button">Generate preview</Button>
              <Button type="button" variant="secondary" onClick={() => { setClient(""); setService(""); setPrice(""); setNotes(""); }}>
                Clear
              </Button>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Preview</h2>
            <div className="flex items-center gap-2">
              <Button variant="secondary" onClick={copy} aria-label="Copy proposal">Copy</Button>
              <Button variant="secondary" onClick={downloadTxt} aria-label="Download proposal as .txt">Download .txt</Button>
              <span aria-live="polite" className={`text-xs px-2 py-1 rounded-md border transition-opacity ${copied ? "opacity-100 bg-white/10 border-white/20" : "opacity-0"}`}>
                Copied!
              </span>
            </div>
          </div>
          <textarea readOnly value={proposal} className="min-h-[300px] w-full rounded-lg bg-black/40 border border-white/10 p-3 text-sm font-mono" />
          <p className="mt-3 text-xs text-white/60">Pro tip: Pro plan adds PDF export, saved templates, and branding.</p>
        </GlassCard>
      </section>
    </div>
  );
}
