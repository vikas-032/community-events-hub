# Jaipur Community Events Hub

Next.js + Firebase app for tech meetups, cultural events, and curated Instagram highlights in Jaipur.

## Stack

- **Frontend:** Next.js 16 (App Router), React 19, Tailwind CSS 4
- **Backend:** Firebase Auth (Google), Firestore, Storage (later)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Demo mode:** Works without Firebase using sample events in `src/lib/demo-data.ts`.

**Live mode:** Copy `.env.example` → `.env.local`, add Firebase keys, deploy Firestore rules. See [docs/FIREBASE_SETUP.md](docs/FIREBASE_SETUP.md).

## Routes

| Path | Description |
|------|-------------|
| `/` | Home + featured events + reels |
| `/events` | Filterable event list |
| `/events/[slug]` | Event detail + RSVP |
| `/profile` | Signed-in user's RSVPs |
| `/about` | Brand story |

## Project structure

```text
src/
  app/              # Pages
  components/       # UI
  context/          # AuthProvider
  lib/firebase/     # Client SDK init
  lib/firestore/    # Events, RSVPs, reels
  types/            # TypeScript models
firebase/
  firestore.rules
  firestore.indexes.json
```

## Deploy on Vercel

Full guide: **[docs/DEPLOY_VERCEL.md](docs/DEPLOY_VERCEL.md)**

Quick CLI:

```bash
npx vercel login
npx vercel        # preview URL
npx vercel --prod # production
```

Add Firebase env vars in the Vercel dashboard and authorize your `*.vercel.app` domain in Firebase Auth.

## Next steps

1. Connect Firebase ([setup guide](docs/FIREBASE_SETUP.md))
2. Seed real events in Firestore
3. Replace demo Reel URLs with your Instagram links
4. Add `/admin` for event CRUD (protected by `admin` custom claim)
5. Deploy to Vercel ([deploy guide](docs/DEPLOY_VERCEL.md))
