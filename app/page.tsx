"use client";

import { useMemo, useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";
import GlassCard from "@/components/ui/GlassCard";
import Image from "next/image";
import clsx from "clsx";

// Placeholder icons
const icons = {
  template: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L15.5 2z"/><path d="M12 17H8"/><path d="M12 13H8"/><path d="M14 2v6h6"/></svg>,
  export: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>,
  tracking: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
};

export default function Home() {
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
  const [copiedStatus, setCopiedStatus] = useState("");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(proposal);
      setCopied(true);
      setCopiedStatus("Copied!");
      setTimeout(() => {
        setCopied(false);
        setCopiedStatus("");
      }, 1500);
    } catch (err) {
      setCopied(false);
      setCopiedStatus("Failed to copy!");
      setTimeout(() => {
        setCopiedStatus("");
      }, 1500);
    }
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
    <div className="space-y-24">
      {/* HERO SECTION */}
      <section className="rounded-3xl bg-hero p-8 md:p-16 text-center shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Proposals & quotes <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandStart to-brandEnd">in minutes</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Type a few fields, get a clean proposal. Export, copy, send. Close deals faster.
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <LinkButton href="#try">Try free</LinkButton>
          <LinkButton href="/tools" variant="secondary">Browse tools</LinkButton>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section>
        <h2 className="text-center text-3xl font-bold mb-10">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard className="text-center">
            <h3 className="text-xl font-bold">1. Fill</h3>
            <p className="mt-2 text-white/70">Start with a template or from scratch. Add your client, scope, and pricing details.</p>
          </GlassCard>
          <GlassCard className="text-center">
            <h3 className="text-xl font-bold">2. Preview</h3>
            <p className="mt-2 text-white/70">See the magic happen. The tool instantly generates a clean, ready-to-send proposal.</p>
          </GlassCard>
          <GlassCard className="text-center">
            <h3 className="text-xl font-bold">3. Export</h3>
            <p className="mt-2 text-white/70">Copy the text, download a file, or export as PDF. It's ready to go wherever you need it.</p>
          </GlassCard>
        </div>
      </section>

      {/* GENERATOR SECTION */}
      <section id="try" className="grid md:grid-cols-2 gap-6 anchor-offset">
        <GlassCard>
          <h3 className="text-2xl font-bold mb-6">Proposal Generator</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="client" className="block text-sm font-medium mb-1 text-white/70">Client</label>
              <input type="text" id="client" className="input" placeholder="e.g. Acme Corp." value={client} onChange={(e) => setClient(e.target.value)} />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1 text-white/70">Service</label>
              <input type="text" id="service" className="input" placeholder="e.g. Website redesign" value={service} onChange={(e) => setService(e.target.value)} />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium mb-1 text-white/70">Price</label>
              <input type="text" id="price" className="input" placeholder="e.g. $5,000 USD" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-1 text-white/70">Notes</label>
              <textarea id="notes" className="textarea" placeholder="Any additional notes or details" value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Live Preview</h3>
            <div aria-live="polite" className={clsx("text-sm transition-opacity duration-200", copied ? "opacity-100" : "opacity-0")}>
              {copiedStatus}
            </div>
          </div>
          <textarea readOnly value={proposal} className="textarea !min-h-[300px] !bg-white/5 !text-white !cursor-text" />
          <div className="mt-4 flex flex-col md:flex-row gap-3">
            <Button className="w-full md:w-auto" onClick={copy}>Copy</Button>
            <Button className="w-full md:w-auto" onClick={download}>Download .txt</Button>
          </div>
        </GlassCard>
      </section>

      {/* FEATURES SECTION */}
      <section>
        <h2 className="text-center text-3xl font-bold mb-10">Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="text-center">
            <div className="flex justify-center mb-3">
              {icons.template({ className: "w-12 h-12 text-brandStart" })}
            </div>
            <h3 className="text-xl font-bold">Templates</h3>
            <p className="mt-2 text-white/70">Start with ready-to-use templates for any industry. No more staring at a blank page.</p>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="flex justify-center mb-3">
              {icons.export({ className: "w-12 h-12 text-brandStart" })}
            </div>
            <h3 className="text-xl font-bold">Export (soon)</h3>
            <p className="mt-2 text-white/70">One-click export to clean PDF or DOCX files to share with your clients. (Coming soon!)</p>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="flex justify-center mb-3">
              {icons.tracking({ className: "w-12 h-12 text-brandStart" })}
            </div>
            <h3 className="text-xl font-bold">Tracking (Pro)</h3>
            <p className="mt-2 text-white/70">Get notified when your client opens the proposal. Close deals with confidence. (Pro feature)</p>
          </GlassCard>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section>
        <h2 className="text-center text-3xl font-bold mb-10">Used by leading agencies & freelancers</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 w-24 bg-white/10 rounded-lg animate-pulse" />
          ))}
        </div>
      </section>
      
      {/* FAQ SECTION */}
      <section>
        <h2 className="text-center text-3xl font-bold mb-10">Frequently Asked Questions</h2>
        {/* Simplified accordion for brevity */}
        <div className="space-y-4">
          <GlassCard className="cursor-pointer hover:border-white/20 transition-colors">
            <h4 className="font-semibold text-lg">Is Clerko free to use?</h4>
            <p className="mt-2 text-white/70">Yes, our basic plan is completely free. It includes the core generator and a few templates. You only pay for Pro features like PDF export and tracking.</p>
          </GlassCard>
          <GlassCard className="cursor-pointer hover:border-white/20 transition-colors">
            <h4 className="font-semibold text-lg">Can I customize the templates?</h4>
            <p className="mt-2 text-white/70">Yes, every proposal is fully customizable. You can edit the text and add your own branding later on (Pro feature).</p>
          </GlassCard>
          {/* Add more FAQ items */}
        </div>
      </section>

      {/* PRICING TEASER */}
      <section>
        <h2 className="text-center text-3xl font-bold mb-10">Ready to close more deals?</h2>
        <GlassCard className="max-w-xl mx-auto text-center p-8 md:p-12">
          <h3 className="text-2xl font-bold">Start with our free plan</h3>
          <p className="mt-2 text-white/70">Get unlimited basic proposals, access to our free tools, and more. Upgrade to Pro for advanced features when you're ready.</p>
          <div className="mt-6">
            <LinkButton href="#try">Start for free</LinkButton>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}