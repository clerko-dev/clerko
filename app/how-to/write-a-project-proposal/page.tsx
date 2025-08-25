export const metadata = { title: "How to write a project proposal (step by step)" };
export default function Page() {
  return (
    <main className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">How to write a project proposal (step by step)</h1>
      <div className="space-y-3 text-white/90">
        <p>Simple structure: Context → Scope → Timeline → Price → Terms → CTA.</p>
        <ol className="list-decimal ml-5 space-y-2">
          <li>Define the problem and goal.</li>
          <li>List the scope (bullet points).</li>
          <li>Provide timeline and milestones.</li>
          <li>Quote (flat or range) and payment terms.</li>
          <li>CTA: “Approve and we start”.</li>
        </ol>
        <p className="text-sm text-white/60">Try the generator on the homepage.</p>
      </div>
    </main>
  );
}
