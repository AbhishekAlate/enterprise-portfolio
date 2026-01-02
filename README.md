# 🚀 Enterprise-Ready Portfolio  
### Production-grade web & mobile architecture -> designed to be forked, extended, and shipped

> **Designing and shipping production-grade web and mobile systems.**

This repository is intentionally **not a static portfolio** or a visual demo.  
It is a **real, production-ready foundation** that demonstrates how modern engineering teams design, validate, deploy, and evolve software systems over time.

If you are a developer forking this repository, you are starting from a **clean, scalable baseline** — not just a demo.

If you are a hiring manager, engineering manager, or senior engineer reviewing this repository, you are looking at the **same architectural patterns** I use when building real products.  

---

## 🧠 About this website

This website was built with a single guiding principle:

> **Treat even small projects like production systems.**

Rather than optimizing for speed of setup or visual flash, this portfolio prioritizes:
- clear architectural boundaries
- shared contracts instead of duplicated logic
- server-first rendering and correctness
- realistic deployment workflows
- long-term extensibility

The result is a portfolio that can naturally evolve into:
- a SaaS product
- a B2B dashboard
- a mobile-first application
- or a multi-client production platform

…without rewriting the foundations.

---

## ✨ Why this portfolio is different

Most portfolios optimize for **appearance**.  
This one optimizes for **engineering judgment**.

What you’ll notice here:
- Architecture before UI (I still made it pretty though ;))
- Shared contracts across clients
- Web and mobile parity
- Real deployment pipeline
- Forkable by design

---

## 🗂 Repository structure (Monorepo)

```txt
enterprise-portfolio/
├── apps/
│   ├── web/
│   └── mobile/
├── packages/
│   └── shared/
└── README.md
```

---

## 🧱 Component-level architecture

```txt
Web Client ─┐
            ├──▶ Shared Domain (@repo/shared)
Mobile App ─┘            │
                         ▼
                   Next.js API Routes
                          │
                          ▼
                   Vercel Serverless
```

---

## 🧠 Frameworks and interaction

### Next.js
- Server Components
- App Router
- API Routes

### Expo
- Native mobile app
- File-based routing
- Same API contracts

### Zod
- Shared validation
- Runtime safety

---

## 🧑‍💻 Local development

- Complete prerequisites if you're missing any
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" # Remove this if you have Homebrew
brew install node
npm install -g corepack
```
- Run to start local development
```bash
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
pnpm --filter web dev
pnpm --filter mobile start
```

---

## ☁️ Deploy to Vercel

- Root Directory: apps/web
- Install Command:
```bash
cd ../.. && pnpm install
```
- Build Command:
```bash
cd ../.. && pnpm --filter web build
```

---

## 🌐 For Custom domain (Recommended to refer vercel documenation to avoid outdated server information)

```txt
A @ 76.76.21.21
CNAME www cname.vercel-dns.com
```

---

## 🔁 Fork this repo

Fork this repository to jump-start a production-ready platform.

---

## 📌 Final note

Built with scalability, correctness, and real-world production in mind.
