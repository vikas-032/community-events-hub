# Your Jaipur heritage photos

Drop your own images here, then enable local mode in `.env.local`:

```env
NEXT_PUBLIC_USE_LOCAL_HERITAGE=true
```

## Required filenames

| File | Used for |
|------|----------|
| `hero.jpg` | Home page hero (Ken Burns) — recommend 1920×1080+ |
| `hawa-mahal.jpg` | Gallery + event cards |
| `amer-fort.jpg` | Gallery + Events page banner |
| `pink-city.jpg` | Gallery + footer accent |
| `palace.jpg` | Gallery |
| `city-lights.jpg` | Gallery + Profile banner |
| `fort-trails.jpg` | Gallery |

**Formats:** `.jpg`, `.webp`, or `.png` (update paths in `src/lib/heritage-images.ts` if you use `.webp`).

**Tips**

- Landscape orientation works best; faces of monuments centered.
- Compress large files (~200–400 KB) with [Squoosh](https://squoosh.app) for faster loads.
- Without this flag, the app uses curated Unsplash fallbacks automatically.

## Food section images

Food photos are configured in `src/lib/jaipur-food-images.ts`. To use your own dish photos, replace the Unsplash URLs there or add files under `public/food/` and point `src` to `/food/your-image.jpg`.
