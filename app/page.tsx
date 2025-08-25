// app/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [client, setClient] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [proposal, setProposal] = useState("");

  const generateProposal = () => {
    const text = `Proposal for ${client}

We are pleased to offer you our services: ${service}.

Total cost: ${price}.

Generated with Clerko.app 🚀`;
    setProposal(text);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-5">
        <span className="text-xl font-bold">Clerko</span>
        <div className="flex gap-6 text-sm">
          <Link href="/tools" className="hover:underline">Tools</Link>
          <Link href="/how-to" className="hover:underline">How-to</Link>
          <Link href="/store" className="hover:underline">Templates</Link>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-5 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Proposals & quotes in minutes.
          </h1>
          <p className="text-gray-600 mt-4">
            Type a few fields, get a clean proposal. Export, copy, send.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#generator" className="px-4 py-2 rounded bg-blue-600 text-white">Try free</a>
            <Link href="/store" className="px-4 py-2 rounded border">Browse templates</Link>
          </div>
          <p className="text-xs text-gray-400 mt-3">No login needed for the lite demo.</p>
        </div>

        {/* Generator */}
        <div id="generator" className="bg-white shadow-xl rounded-xl p-6">
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Client name"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Service / project"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border p-2 rounded"
            />
            <button
              onClick={generateProposal}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Generate Proposal
            </button>
            {proposal && (
              <pre className="mt-4 bg-gray-50 p-3 rounded text-sm whitespace-pre-wrap">{proposal}</pre>
            )}
          </div>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-5 py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Clerko — proposal OS.
      </footer>
    </main>
  );
}
