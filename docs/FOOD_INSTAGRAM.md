# Jaipur food — Instagram embeds

Food photos use **official Instagram embeds** (not hotlinked images). Instagram blocks direct image URLs, which is why Unsplash links often failed.

## Add a new influencer post

Edit `src/lib/jaipur-food-instagram.ts`:

1. Open the public post on Instagram → **⋯** → **Embed** → copy the link.
2. Extract the shortcode from the URL:
   - `https://www.instagram.com/reel/ABC123/` → `ABC123`, `mediaType: "reel"`
   - `https://www.instagram.com/p/ABC123/` → `ABC123`, `mediaType: "p"`
3. Add an entry with `influencerHandle`, `placeId`, and optional `areaId`.

## Suggested Jaipur food accounts

- [@foodie_bhartiyaa](https://www.instagram.com/foodie_bhartiyaa/) — Jaipur street food
- [@foodiee._.girl](https://www.instagram.com/foodiee._.girl/) — Rajasthani recipes
- [@curly.tales](https://www.instagram.com/curly.tales/) — City food discoveries

## Redeploy

```bash
npx vercel --prod
```
