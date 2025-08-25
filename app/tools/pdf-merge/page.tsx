"use client";
import { useState } from "react";

/**
 * Minimal placeholder: na MVP pokazujemy interfejs i info, że merge działa w wersji desktop (backend wkrótce).
 * Dzięki temu mamy stronę pod SEO i leady. Docelowo podepniemy backend/worker.
 */
export default function PdfMerge() {
  const [files, setFiles] = useState<FileList | null>(null);
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-3">PDF Merge</h1>
      <input type="file" accept="application/pdf" multiple onChange={e=>setFiles(e.target.files)} />
      <p className="text-sm text-gray-600 mt-3">
        Upload PDFs (2+). In the next update we'll merge them in your browser and let you download the result.
      </p>
      {files && <p className="text-sm mt-2">Selected: {Array.from(files).map(f=>f.name).join(", ")}</p>}
    </main>
  );
}
