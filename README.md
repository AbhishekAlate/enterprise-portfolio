# enterprise-portfolio (Next.js + Expo Router)

Mobile-ready from day 1.

- `apps/web` — Next.js App Router (deploy to Vercel)
- `apps/mobile` — Expo + Expo Router (native)
- `packages/shared` — shared Zod schemas + API client

## Local dev
```bash
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
pnpm --filter web dev
pnpm --filter mobile start
```

## Vercel deploy (web)
In Vercel import:
- Root Directory: `apps/web`
- Install Command: `pnpm install`
- Build Command: `pnpm build`
