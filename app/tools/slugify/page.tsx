"use client";
import { useState } from "react";

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function Slugify() {
  const [input, setInput] = useState("");
  const out = slugify(input);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-3">Slugify</h1>
      <input className="w-full border rounded p-2" placeholder="Type a title..." value={input} onChange={e=>setInput(e.target.value)} />
      <p className="mt-3 text-sm text-gray-700">Slug: <code className="bg-gray-100 px-1 rounded">{out}</code></p>
    </main>
  );
}
