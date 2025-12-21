import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm text-zinc-400">Mobile-ready foundation (Next.js + Expo Router)</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          enterprise-portfolio
        </h1>
        <p className="max-w-2xl text-lg text-zinc-300">
          A forkable baseline you can evolve into an enterprise B2B dashboard (auth, tables,
          charts, admin) while keeping a polished marketing site.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/projects" className="rounded-lg bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-950 hover:opacity-90">Projects</Link>
          <Link href="/blog" className="rounded-lg border border-zinc-800 px-4 py-2 text-sm font-medium hover:bg-zinc-900">Blog</Link>
          <Link href="/contact" className="rounded-lg border border-zinc-800 px-4 py-2 text-sm font-medium hover:bg-zinc-900">Contact</Link>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
        <h2 className="text-lg font-semibold">Placeholders included</h2>
        <p className="mt-2 text-zinc-300">Each nav link has a placeholder page so you can start filling content immediately.</p>
      </section>
    </div>
  );
}
