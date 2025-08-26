"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import clsx from "clsx";

export default function GeneratorSection() {
  const [client, setClient] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");

  const proposal = useMemo(() => {
    return [
      `Client: ${client || "Your Client"}`,
      `Service: ${service || "Service description"}`,
      price ? `Price: ${price}` : "",
      notes ? `Notes: ${notes}` : "",
      "",
      "---",
      "",
      "Why choose us:",
      "- Speed: Fast turnaround and quick communication.",
      "- Quality: High-standard work with attention to detail.",
      "- Clarity: Transparent pricing and terms from the start.",
    ].filter(Boolean).join("\n");
  }, [client, service, price, notes]);

  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(proposal);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const download = () => {
    const blob = new Blob([proposal], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Clerko_Proposal.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="try" className="grid md:grid-cols-2 gap-6 anchor-offset">
      <GlassCard className="p-8">
        <h3 className="text-2xl font-bold mb-6">Proposal Generator</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="client" className="block text-sm font-medium mb-1 text-foreground/70">Client</label>
            <input type="text" id="client" className="form-input" placeholder="e.g. Acme Corp." value={client} onChange={(e) => setClient(e.target.value)} />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-1 text-foreground/70">Service</label>
            <input type="text" id="service" className="form-input" placeholder="e.g. Website redesign" value={service} onChange={(e) => setService(e.target.value)} />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1 text-foreground/70">Price</label>
            <input type="text" id="price" className="form-input" placeholder="e.g. $5,000 USD" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium mb-1 text-foreground/70">Notes</label>
            <textarea id="notes" className="form-textarea" placeholder="Any additional notes or details" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>
        </div>
      </GlassCard>
      <GlassCard className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Live Preview</h3>
          <span className={clsx("text-sm transition-opacity duration-200", copied ? "opacity-100" : "opacity-0")} aria-live="polite">Copied!</span>
        </div>
        <textarea readOnly value={proposal} className="form-textarea !min-h-[300px] cursor-text" />
        <div className="mt-4 flex flex-col md:flex-row gap-3">
          <Button onClick={copy}>Copy</Button>
          <Button onClick={download} variant="secondary">Download .txt</Button>
        </div>
      </GlassCard>
    </section>
  );
}