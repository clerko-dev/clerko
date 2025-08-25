"use client";
import { useState } from "react";

export default function TextCleaner() {
  const [input, setInput] = useState("");
  const clean = input
    .replace(/\r/g, "")
    .replace(/[^\S\r\n]+/g, " ")
    .replace(/[ \t]+$/gm, "");

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-3">Text Cleaner</h1>
      <textarea className="w-full border rounded p-2 h-40" placeholder="Paste messy text" value={input} onChange={e=>setInput(e.target.value)} />
      <h2 className="mt-3 font-medium">Output</h2>
      <pre className="bg-gray-50 p-3 rounded text-sm whitespace-pre-wrap">{clean}</pre>
    </main>
  );
}
