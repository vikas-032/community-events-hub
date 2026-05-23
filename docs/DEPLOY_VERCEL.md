# Deploy Jaipur Events Hub on Vercel

Two ways to deploy — pick one.

---

## Option A — Vercel CLI (fastest, no GitHub required)

### 1. Log in

In PowerShell, from the project folder:

```powershell
cd "d:\No file\community-events-hub"
npx vercel login
```

Follow the browser link and approve access.

### 2. Deploy preview

```powershell
npx vercel
```

Answer the prompts:

| Prompt | Answer |
|--------|--------|
| Set up and deploy? | **Y** |
| Which scope? | Your account |
| Link to existing project? | **N** (first time) |
| Project name? | `jaipur-events-hub` (or any name) |
| Directory? | **./** (press Enter) |
| Override settings? | **N** |

You get a URL like `https://jaipur-events-hub-xxx.vercel.app`.

### 3. Deploy production

```powershell
npx vercel --prod
```

---

## Option B — GitHub + Vercel Dashboard

### 1. Push code to GitHub

1. Create a new repo on [github.com/new](https://github.com/new) (e.g. `jaipur-events-hub`).
2. In PowerShell:

```powershell
cd "d:\No file\community-events-hub"
git add .
git commit -m "Prepare Jaipur Events Hub for Vercel deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jaipur-events-hub.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Sign in with GitHub.
3. **Import** your `jaipur-events-hub` repository.
4. Vercel auto-detects **Next.js** — leave defaults:
   - Framework: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output: default
5. Add **Environment Variables** (see below) before clicking **Deploy**.

Every `git push` to `main` will redeploy automatically.

---

## Environment variables (Vercel dashboard)

In **Project → Settings → Environment Variables**, add:

### Firebase (required for auth + RSVPs)

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | From Firebase Console |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `your-project.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Your project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `your-project.appspot.com` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | From Firebase |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | From Firebase |

Copy values from `.env.local` or Firebase → Project settings → Your apps → Web.

### Optional

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_USE_LOCAL_HERITAGE` | `false` (or `true` if you add images under `public/heritage/`) |

Apply to **Production**, **Preview**, and **Development**, then **Redeploy**.

Without Firebase vars, the site still runs in **demo mode** (sample events, no RSVP).

---

## After deploy — Firebase auth

1. Firebase Console → **Authentication** → **Settings** → **Authorized domains**.
2. Add:
   - `your-project.vercel.app`
   - Your custom domain (if you add one in Vercel)

Otherwise Google sign-in will fail on the live URL.

---

## Custom domain (optional)

1. Vercel → **Project → Settings → Domains**.
2. Add your domain and follow DNS instructions.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails | Run `npm run build` locally; fix errors first |
| Images not loading | Unsplash is allowed in `next.config.ts`; redeploy after config changes |
| Google login fails | Add Vercel URL to Firebase authorized domains |
| RSVPs don’t save | Check Firestore rules deployed + env vars on Vercel |
| Old demo content | Clear cache or open incognito |

---

## Useful commands

```powershell
# Production deploy (CLI)
npx vercel --prod

# List deployments
npx vercel ls

# Open project in browser
npx vercel open
```
