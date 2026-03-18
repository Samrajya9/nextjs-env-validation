# Next.js Environment Validation Project

This is a Next.js project showcasing how to implement type-safe environment variables using T3 Env and Zod.

## Setup & Running the Project

1. **Install dependencies:**
   ```bash
   pnpm install
   # or npm install / yarn / bun
   ```

2. **Set up Environment Variables:**
   Create a `.env.development.local` file (or other appropriate `.env` files) and populate the required variables based on `env.ts`.

3. **Run the development server:**
   ```bash
   pnpm dev
   # or npm run dev / yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learning

### Steps for Env Validation

To implement environment validation in a Next.js project, follow these steps:

1. **Install Packages**
   Install the required libraries: `@t3-oss/env-nextjs` and `zod`.
   ```bash
   pnpm add @t3-oss/env-nextjs zod
   ```

2. **Create `env.ts` File and Write Validation**
   Create a single source of truth (`env.ts`) for your environment variables by defining schemas for client and server variables using `zod`.

3. **Update `next.config.ts`**
   Import the newly created `env.ts` file at the very top of your Next.js config. This makes sure the validation runs automatically on build/start:
   ```typescript
   import "./env";
   import type { NextConfig } from "next";
   ```

4. **Add `output` and `transpilePackages` Config**
   Update the configuration object in `next.config.ts` to include:
   ```typescript
   output: process.env.NODE_ENV === "development" ? "standalone" : undefined,
   transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
   ```

**Reference Docs:**
- [T3 Env Next.js Docs](https://env.t3.gg/docs/nextjs)
- [Next.js Environment Variables Guide](https://nextjs.org/docs/pages/guides/environment-variables)

---

### 📍 Next.js Env Var Load Order (from highest precedence to lowest)

When you run your Next.js app (e.g., `next dev`, `next build`, `next start`):

1. `process.env` – already set environment variables from your shell
2. `.env.$(NODE_ENV).local` – e.g., `.env.development.local` or `.env.production.local`
3. `.env.local` – general local overrides (ignored in test mode)
4. `.env.$(NODE_ENV)` – e.g., `.env.development` or `.env.production`
5. `.env` – base fallback file if none of the above provided the value

**📌 Notes:**

- `.env.local` overrides defaults from other `.env.*` files.
- In test environments, Next.js doesn’t load `.env.local`.
- `NODE_ENV` can be `development`, `production`, or `test`.

**🧠 Example**

If you have:
- `NODE_ENV=development`
- `.env`
- `.env.development`
- `.env.local`
- `.env.development.local`

And they all define `API_URL`, Next.js will pick them in this order:

| Priority | File |
| :--- | :--- |
| 1 | value already in `process.env` |
| 2 | `.env.development.local` |
| 3 | `.env.local` |
| 4 | `.env.development` |
| 5 | `.env` |
