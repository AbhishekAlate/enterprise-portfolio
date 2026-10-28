import Link from "next/link";

export default function OpenClawLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl">
      <nav aria-label="OpenClaw" className="mb-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
        <Link className="hover:text-white focus-visible:underline" href="/openclaw">Overview</Link>
        <Link className="hover:text-white focus-visible:underline" href="/openclaw/privacy">Privacy policy</Link>
        <Link className="hover:text-white focus-visible:underline" href="/openclaw/terms">Terms of service</Link>
      </nav>
      <article className="space-y-8 text-base leading-7 text-zinc-300 [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-white [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-100 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </article>
    </div>
  );
}
