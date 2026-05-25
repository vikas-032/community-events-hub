# Put Jaipur Events Hub on Google (Search + Reviews)

Your site is already prepared for Google:

- **Sitemap:** `https://community-events-hub-orcin.vercel.app/sitemap.xml`
- **Robots:** `https://community-events-hub-orcin.vercel.app/robots.txt`
- **Reviews page:** `/reviews` (public, indexable, with star ratings schema)

Follow these steps in order.

---

## Part 1 — Google Search (show your website in search results)

### Step 1: Add site URL to Vercel (recommended)

In [Vercel → Project → Settings → Environment Variables](https://vercel.com):

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://community-events-hub-orcin.vercel.app` |

Redeploy after saving.

### Step 2: Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Click **Add property** → choose **URL prefix**.
3. Enter: `https://community-events-hub-orcin.vercel.app`
4. **Verify ownership** — easiest method:
   - **HTML tag:** Copy the meta tag Google gives you.
   - Add it to `src/app/layout.tsx` inside `metadata` as `verification: { google: "YOUR_CODE" }` OR use Vercel’s Google integration if available.
   - Alternative: **DNS** record at your domain provider (if you use a custom domain later).

5. After verified, go to **Sitemaps** → submit:
   ```
   https://community-events-hub-orcin.vercel.app/sitemap.xml
   ```

6. Use **URL inspection** → paste your homepage → **Request indexing**.

Indexing can take a few days to a few weeks for a new site.

### Step 3: Request indexing for key pages

In Search Console, request indexing for:

- `/`
- `/events`
- `/blog`
- `/food`
- `/reviews`
- `/blog/amer-fort` (and other blog URLs)

---

## Part 2 — Reviews by everyone (on your website)

### How it works

- Anyone can **read** reviews at [/reviews](https://community-events-hub-orcin.vercel.app/reviews).
- Users **sign in with Google** to post a review (1–5 stars + text).
- Reviews are stored in Firestore collection `reviews`.
- Google can show **aggregate rating** structured data on the reviews page (SEO).

### Firebase setup (required for live reviews)

1. **Authentication** → enable **Google** (already documented).
2. **Firestore** → deploy updated rules from this repo:
   ```bash
   firebase deploy --only firestore:rules
   ```
3. **Authorized domains** — add your Vercel URL in Firebase Auth settings.
4. Add all `NEXT_PUBLIC_FIREBASE_*` vars in Vercel → redeploy.

Without Firebase, demo reviews still show so the page is not empty.

### Firestore index (if queries fail)

If reviews fail to load with an index error, create a single-field index on `reviews.createdAt` (descending) in Firebase Console → Firestore → Indexes.

---

## Part 3 — Google Business reviews (optional, different from website)

**Google star reviews in Google Maps** come from a **Google Business Profile**, not from your website code.

If you have a physical business or brand in Jaipur:

1. Go to [Google Business Profile](https://business.google.com).
2. Create or claim your listing (name, address, website = your Vercel URL).
3. Customers leave reviews on **Google Maps** — separate from `/reviews` on your site.

You can link to your site from the Business Profile website field.

---

## Part 4 — Grow visibility (after indexing)

- Share `https://community-events-hub-orcin.vercel.app/reviews` and ask visitors to leave a review after sign-in.
- Post blog links (`/blog/hawa-mahal`, etc.) on social media.
- Keep adding real events in Firestore so `/events` stays fresh (Google likes updated content).

---

## Checklist

| Task | Done? |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` in Vercel | |
| Search Console property added | |
| Sitemap submitted | |
| Homepage indexing requested | |
| Firebase Google Auth + Firestore rules deployed | |
| `/reviews` works with sign-in | |

---

## Quick links

- Live site: https://community-events-hub-orcin.vercel.app
- Sitemap: https://community-events-hub-orcin.vercel.app/sitemap.xml
- Reviews: https://community-events-hub-orcin.vercel.app/reviews
- Search Console: https://search.google.com/search-console
