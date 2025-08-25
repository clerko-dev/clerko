"use client";
import { useState } from "react";

export default function ImageToWebp() {
  const [url, setUrl] = useState("");
  const [out, setOut] = useState<string | null>(null);

  const convert = async () => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const bitmap = await createImageBitmap(blob);
      const canvas = document.createElement("canvas");
      canvas.width = bitmap.width; canvas.height = bitmap.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(bitmap, 0, 0);
      const webpData = canvas.toDataURL("image/webp", 0.9);
      setOut(webpData);
    } catch (e) {
      setOut("Error: can't load/convert this image URL.");
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-3">Image → WebP</h1>
      <input className="w-full border rounded p-2" placeholder="Paste image URL (jpg/png)" value={url} onChange={e=>setUrl(e.target.value)} />
      <button onClick={convert} className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">Convert</button>
      {out && (out.startsWith("data:") ? <img src={out} alt="webp" className="mt-3 max-w-full rounded" /> : <p className="mt-3 text-red-600">{out}</p>)}
    </main>
  );
}
