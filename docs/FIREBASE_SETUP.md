# Firebase setup (Jaipur Events Hub)

## 1. Create project

1. Go to [Firebase Console](https://console.firebase.google.com/) → **Add project**.
2. Name it e.g. `jaipur-events-hub`.
3. Disable Google Analytics for MVP (optional).

## 2. Enable services

### Authentication

1. **Build → Authentication → Get started**
2. Enable **Google** sign-in provider.
3. Add your domain under **Authorized domains** (`localhost` is already there; add your Vercel domain later).

### Firestore

1. **Build → Firestore Database → Create database**
2. Start in **production mode** (you will deploy rules from this repo).
3. Choose a region close to India if available (e.g. `asia-south1`).

### Storage (optional, for event cover images later)

1. **Build → Storage → Get started**

## 3. Register web app

1. Project settings (gear) → **Your apps** → Web `</>`
2. Copy config into `.env.local` (from `.env.example`).

```bash
cp .env.example .env.local
# fill in all NEXT_PUBLIC_FIREBASE_* values
```

## 4. Deploy security rules & indexes

Install Firebase CLI once:

```bash
npm install -g firebase-tools
firebase login
firebase init firestore
# select existing project, use firebase/firestore.rules and firebase/firestore.indexes.json
firebase deploy --only firestore
```

## 5. Seed sample events

In Firestore Console, create collection `events` with documents like:

| Field | Example |
|-------|---------|
| title | Jaipur Dev Meetup |
| slug | jaipur-dev-meetup |
| description | Monthly builder meetup… |
| startAt | `2026-06-14T10:00:00+05:30` (string) |
| venue | map: `{ name, area, mapsUrl }` |
| tags | array: `["tech","networking"]` |
| status | `published` |
| rsvpCount | number: `0` |

Copy structure from `src/lib/demo-data.ts`.

Collection `featuredReels`:

| Field | Example |
|-------|---------|
| title | Meetup highlights |
| instagramUrl | your real Reel URL |
| order | `1` |
| active | `true` |

## 6. Admin access (later)

Set custom claim `admin: true` via a one-time Cloud Function, or temporarily allow your UID in rules while building `/admin`.

## 7. Run locally

```bash
npm run dev
```

Open http://localhost:3000 — without env vars you see **demo mode**; with Firebase configured you see live data + RSVPs.

## Checklist

- [ ] Google Auth enabled
- [ ] Firestore created
- [ ] Rules + indexes deployed
- [ ] `.env.local` filled
- [ ] At least 3 `published` events in Firestore
- [ ] Authorized domain added before production deploy
