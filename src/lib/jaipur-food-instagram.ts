import type { JaipurFoodArea } from "@/types/food";

/** Public Instagram posts/reels — each shortcode appears only once in this list */
export type InstagramFoodPost = {
  id: string;
  shortcode: string;
  mediaType: "p" | "reel";
  permalink: string;
  influencerName: string;
  influencerHandle: string;
  title: string;
  dish?: string;
};

export const FOOD_INSTAGRAM_ATTRIBUTION =
  "Photos and videos are embedded directly from public Instagram posts by Jaipur & Rajasthan food creators. Follow them for the latest spots — we do not host or own this media.";

/** Unique reels only — no duplicate shortcodes */
export const JAIPUR_FOOD_INSTAGRAM_REELS: InstagramFoodPost[] = [
  {
    id: "reel-litti-chokha",
    shortcode: "Cv_kQmfsHaZ",
    mediaType: "reel",
    permalink: "https://www.instagram.com/reel/Cv_kQmfsHaZ/",
    influencerName: "Mahima",
    influencerHandle: "foodie_bhartiyaa",
    title: "Litti Chokha, Jaipur",
    dish: "Litti Chokha",
  },
  {
    id: "reel-mawa-kachori",
    shortcode: "DGvBXASzCEg",
    mediaType: "reel",
    permalink: "https://www.instagram.com/reel/DGvBXASzCEg/",
    influencerName: "Priyanka Soni",
    influencerHandle: "foodiee._.girl",
    title: "Rajasthani mawa kachori",
    dish: "Mawa kachori",
  },
  {
    id: "reel-rajasthan-food",
    shortcode: "DG4123rS93m",
    mediaType: "reel",
    permalink: "https://www.instagram.com/curly.tales/reel/DG4123rS93m/",
    influencerName: "Curly Tales",
    influencerHandle: "curly.tales",
    title: "Rajasthan food & travel",
    dish: "Rajasthani flavours",
  },
  {
    id: "reel-raj-kachori",
    shortcode: "DI8UuhMIjYa",
    mediaType: "reel",
    permalink: "https://www.instagram.com/reel/DI8UuhMIjYa/",
    influencerName: "Swaad Aswaad",
    influencerHandle: "prudentmediaofficial",
    title: "Rajasthani Raj Kachori",
    dish: "Raj Kachori",
  },
  {
    id: "reel-chaat-india",
    shortcode: "DHTSRYVSrwn",
    mediaType: "reel",
    permalink: "https://www.instagram.com/curly.tales/reel/DHTSRYVSrwn/",
    influencerName: "Curly Tales",
    influencerHandle: "curly.tales",
    title: "Chaat from across India",
    dish: "Pani puri & chaat",
  },
  {
    id: "reel-pink-city",
    shortcode: "C5daL-csKSb",
    mediaType: "reel",
    permalink: "https://www.instagram.com/reel/C5daL-csKSb/",
    influencerName: "Aishwarya",
    influencerHandle: "aishwarya_travel",
    title: "Pink City, Jaipur",
    dish: "Old City vibes",
  },
  {
    id: "reel-street-chaat",
    shortcode: "C7Tc94yKePI",
    mediaType: "reel",
    permalink: "https://www.instagram.com/curly.tales/reel/C7Tc94yKePI/",
    influencerName: "Curly Tales",
    influencerHandle: "curly.tales",
    title: "Street chaat vibes",
    dish: "Gol gappe",
  },
];

/** One reel per place max — places not listed show no embed (avoids repeats) */
export const PLACE_INSTAGRAM_REEL: Partial<Record<string, string>> = {
  "old-city-kachori-gali": "reel-litti-chokha",
  "rawat-mishthan": "reel-mawa-kachori",
  "spice-court": "reel-rajasthan-food",
  "raja-park-chaat": "reel-raj-kachori",
  "peacock-rooftop": "reel-pink-city",
  "lassi-wala": "reel-street-chaat",
  "niros": "reel-chaat-india",
};

/** Area → reel for text-only preview link (no second embed on cards) */
export const AREA_INSTAGRAM_REEL: Partial<Record<JaipurFoodArea, string>> = {
  "old-city": "reel-litti-chokha",
  "johari-bazaar": "reel-mawa-kachori",
  "c-scheme": "reel-rajasthan-food",
  "raja-park": "reel-raj-kachori",
  "mi-road": "reel-street-chaat",
  "malviya-nagar": "reel-chaat-india",
  "bapu-bazaar": "reel-pink-city",
  "amer-road": "reel-rajasthan-food",
};

const reelById = new Map(JAIPUR_FOOD_INSTAGRAM_REELS.map((r) => [r.id, r]));

export function getReelById(reelId: string): InstagramFoodPost | undefined {
  return reelById.get(reelId);
}

export function getFeaturedInstagramFoodPosts(): InstagramFoodPost[] {
  return JAIPUR_FOOD_INSTAGRAM_REELS;
}

export function getInstagramPostForPlace(placeId: string): InstagramFoodPost | undefined {
  const reelId = PLACE_INSTAGRAM_REEL[placeId];
  return reelId ? getReelById(reelId) : undefined;
}

export function getInstagramReelForArea(areaId: JaipurFoodArea): InstagramFoodPost | undefined {
  const reelId = AREA_INSTAGRAM_REEL[areaId];
  return reelId ? getReelById(reelId) : undefined;
}

export function getInstagramEmbedUrl(post: InstagramFoodPost): string {
  return `https://www.instagram.com/${post.mediaType}/${post.shortcode}/embed`;
}
