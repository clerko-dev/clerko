// app/page.tsx
"use client";
import { useState } from "react";

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
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Clerko — Proposals in Minutes
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Client name"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Service / project"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        />
        <button
          onClick={generateProposal}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Generate Proposal
        </button>

        {proposal && (
          <pre className="mt-4 bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap">
            {proposal}
          </pre>
        )}
      </div>
    </main>
  );
}
