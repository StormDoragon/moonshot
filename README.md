# FB Monetization Orbit

A creator intelligence platform for Facebook pages and creator profiles.

## What it does
- analyzes post ideas
- scores monetization fit
- suggests timing windows
- generates content ideas
- tracks A/B experiments

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma + Postgres
- OpenAI API
- Vercel

## Local setup
1. Copy `.env.example` to `.env`
2. Install dependencies
3. Generate Prisma client
4. Push schema
5. Run dev

```bash
pnpm install
pnpm db:generate
pnpm db:push
pnpm dev
```

## Deploy to Vercel
1. Push repo to GitHub
2. Import repo in Vercel
3. Add env vars
4. Redeploy after env changes

## Important note
This product should be marketed as a decision-support and experimentation tool, not a guaranteed virality machine.
