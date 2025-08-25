// app/tools/csv-to-json/page.tsx
"use client";
import { useState } from "react";

type Row = Record<string, string>;

export default function CsvToJson() {
  const [csv, setCsv] = useState("");
  const [json, setJson] = useState("");

  const convert = () => {
    const lines = csv.trim().split(/\r?\n/);
    if (!lines.length) return setJson("[]");
    const headers = lines[0].split(",").map(h => h.trim());
    const rows: Row[] = lines.slice(1).map(line => {
      const cols = line.split(",");
      const obj: Row = {};
      headers.forEach((h, i) => (obj[h] = (cols[i] ?? "").trim()));
      return obj;
    });
    setJson(JSON.stringify(rows, null, 2));
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-3">CSV → JSON</h1>
      <textarea className="w-full border rounded p-2 h-40" placeholder="Paste CSV here" value={csv} onChange={e=>setCsv(e.target.value)} />
      <button onClick={convert} className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">Convert</button>
      <pre className="mt-3 bg-gray-50 p-3 rounded text-sm whitespace-pre-wrap">{json}</pre>
    </main>
  );
}
