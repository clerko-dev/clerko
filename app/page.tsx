"use client";
import { useMemo, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";

function Icon({ path }: { path: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-80">
      <path d={path} fill="currentColor" />
    </svg>
  );
}

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
    setTimeout(() => setCopied(false), 1400);
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

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="rounded-2xl bg-hero px-6 py-14 text-center">
        <h1 className="text-[34px] leading-tight md:text-6xl md:leading-[1.05] font-bold tracking-tight">
          Proposals & quotes{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]">
            in minutes
          </span>
        </h1>
        <p className="mt-4 text-white/75 max-w-2xl mx-auto">
          Create clean proposals by filling 3 fields. Copy, download, or export (PDF soon).
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <LinkButton href="/#try" className="btn-primary">Try free</LinkButton>
          <LinkButton href="/tools" className="btn-secondary">Browse tools</LinkButton>
        </div>
      </section>

      {/* STEPS */}
      <section className="grid md:grid-cols-3 gap-5">
        <GlassCard>
          <div className="flex items-start gap-3">
            <div className="mt-1 text-white/90">
              <Icon path="M4 4h16v2H4zm0 6h16v2H4zm0 6h10v2H4z" />
            </div>
            <div>
              <div className="text-xs tracking-widest text-white/60">STEP 1</div>
              <div className="font-semibold">Fill client & scope</div>
              <p className="text-sm text-white/70 mt-1">
                Add client name, service and price. Optional notes for timing or milestones.
              </p>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="flex items-start gap-3">
            <div className="mt-1 text-white/90">
              <Icon path="M3 5h18v14H3zM5 7v10h14V7z" />
            </div>
            <div>
              <div className="text-xs tracking-widest text-white/60">STEP 2</div>
              <div className="font-semibold">Preview instantly</div>
              <p className="text-sm text-white/70 mt-1">
                Your proposal renders live. Tweak text until it reads perfectly.
              </p>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="flex items-start gap-3">
            <div className="mt-1 text-white/90">
              <Icon path="M14 2H6a2 2 0 0 0-2 2v16l4-4h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
            </div>
            <div>
              <div className="text-xs tracking-widest text-white/60">STEP 3</div>
              <div className="font-semibold">Copy or export</div>
              <p className="text-sm text-white/70 mt-1">
                Copy to clipboard or download .txt. PDF & saved templates in Pro.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* GENERATOR */}
      <section id="try" className="grid md:grid-cols-2 gap-6 anchor-offset">
        <GlassCard>
          <div className="grid gap-5">
            <label className="text-sm block">
              <span className="text-white/80">Client</span>
              <input
                value={client}
                onChange={(e) => setClient(e.target.value)}
                placeholder="e.g., ACME LLC"
                autoComplete="organization"
                className="input mt-2"
              />
            </label>

            <label className="text-sm block">
              <span className="text-white/80">Service / Scope</span>
              <input
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="e.g., Website + copy"
                className="input mt-2"
              />
            </label>

            <label className="text-sm block">
              <span className="text-white/80">Price</span>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="e.g., $1,990"
                inputMode="decimal"
                className="input mt-2"
              />
            </label>

            <label className="text-sm block">
              <span className="text-white/80">Notes (optional)</span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Requirements, timeline, milestones…"
                className="textarea mt-2"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              <Button type="button" className="btn-primary">Generate preview</Button>
              <Button
                type="button"
                variant="secondary"
                className="btn-secondary"
                onClick={() => { setClient(""); setService(""); setPrice(""); setNotes(""); }}
              >
                Clear
              </Button>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Preview</h2>
            <div className="flex items-center gap-2">
              <Button variant="secondary" className="btn-secondary" onClick={copy} aria-label="Copy proposal">
                Copy
              </Button>
              <Button variant="secondary" className="btn-secondary" onClick={downloadTxt} aria-label="Download proposal as .txt">
                Download .txt
              </Button>
              <span
                aria-live="polite"
                className={`text-xs px-2 py-1 rounded-md border transition-opacity ${
                  copied ? "opacity-100 bg-white/10 border-white/20" : "opacity-0"
                }`}
              >
                Copied!
              </span>
            </div>
          </div>
          <textarea
            readOnly
            value={proposal}
            className="min-h-[320px] w-full rounded-lg bg-black/45 border border-white/10 p-3 text-sm font-mono"
          />
          <p className="mt-3 text-xs text-white/60">
            Pro tip: Pro plan adds PDF export, saved templates, and branding.
          </p>
        </GlassCard>
      </section>
    </div>
  );
}
