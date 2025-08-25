import Link from "next/link";
export const metadata = { title: "Clerko — Guides" };
const posts = [{ slug: "write-a-project-proposal", title: "How to write a project proposal (step by step)" }];
export default function HowToIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Guides</h1>
      <ul className="space-y-2">
        {posts.map(p => (
          <li key={p.slug} className="rounded-lg border border-white/10 hover:bg-white/10">
            <Link href={`/how-to/${p.slug}`} className="block px-4 py-3">{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}