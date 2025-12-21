export const metadata = { title: "Blog" };

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="text-zinc-300">Write posts here. Later, swap this for MDX or a CMS without changing your layout.</p>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
        <p className="text-sm text-zinc-400">Placeholder page — replace this with real content when you're ready.</p>
      </div>
    </div>
  );
}
