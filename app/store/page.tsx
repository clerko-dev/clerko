export const metadata = { title: "Clerko — Templates" };
const items = [
  { id: "marketing-proposal", name: "Marketing Proposal", price: "$9" },
  { id: "webdev-proposal", name: "Web Dev Proposal", price: "$9" },
  { id: "seo-proposal", name: "SEO Proposal", price: "$9" },
  { id: "maintenance-contract", name: "Maintenance Contract", price: "$7" },
  { id: "nda-template", name: "NDA Template", price: "$5" },
  { id: "sow-template", name: "Statement of Work (SOW)", price: "$12" },
  { id: "consulting-proposal", name: "Consulting Proposal", price: "$9" },
  { id: "ppc-proposal", name: "PPC Proposal", price: "$9" },
  { id: "social-media-proposal", name: "Social Media Proposal", price: "$9" },
  { id: "branding-proposal", name: "Branding Proposal", price: "$9" },
];
export default function StorePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Templates</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map(x => (
          <div key={x.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="font-medium">{x.name}</div>
            <div className="text-sm text-white/70 mb-3">Start fast with a ready-made file.</div>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">{x.price}</span>
              <button className="text-sm rounded-md border border-white/20 px-3 py-1 hover:bg-white/10">Preview</button>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-white/60">Payments and full files arrive in Pro (Stripe/Lemon Squeezy).</p>
    </div>
  );
}
