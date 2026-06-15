# Twogether

A clean MVP website for a Las Vegas couples social planning platform. This is a validation site only: no accounts, matching logic, payments, messaging, restaurant dashboard, native app, or backend database.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Lightweight lead capture endpoint

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

If the local Next.js cache ever gets stuck, restart with a clean cache:

```bash
npm run dev:clean
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npm run typecheck
```

Recommended pre-deploy check:

```bash
npm run lint
npm run typecheck
npm run build
```

## Scripts

- `npm run dev` starts the local Next.js development server.
- `npm run dev:clean` clears `.next` and starts the local development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build after `npm run build`.
- `npm run lint` checks the project with ESLint.
- `npm run typecheck` checks TypeScript without emitting build output.
- `npm run clean` removes the generated `.next` folder.

## Current Forms

The Founding Couples List and Venue Partner forms validate required fields in the browser and submit to `app/api/leads/route.ts`.

By default, the API route runs in placeholder mode and logs lead payloads on the server. Before sending to a wider audience, connect a real capture destination with:

```bash
LEAD_CAPTURE_WEBHOOK_URL="https://your-form-or-automation-webhook"
```

That webhook can point to Formspree, Airtable automation, Tally, Zapier, Make, a Supabase Edge Function, or another lightweight lead tool.

## Analytics

No paid analytics tool is required. The layout includes an analytics-ready placeholder in `app/layout.tsx`.

Good later options:

- Vercel Analytics
- Google Analytics
- Plausible

Add analytics only after you decide what conversion events matter, such as founding-couples submit, venue partner submit, and restaurant/venue CTA clicks.

## Deploy To Vercel

1. Push this project to a GitHub repository.
2. In Vercel, create a new project and import the GitHub repository.
3. Keep the default Next.js settings unless you have a specific reason to change them.
4. Add `LEAD_CAPTURE_WEBHOOK_URL` in Vercel project environment variables if you are ready to send form leads to a webhook.
5. Deploy the project.

This project is intentionally validation-only. It does not include accounts, matching logic, payments, messaging, a restaurant dashboard, a native app, or a real database.
