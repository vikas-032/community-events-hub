import type { JaipurFoodArea } from "@/types/food";

/** Public Instagram posts/reels from Jaipur & Rajasthan food creators */
export type InstagramFoodPost = {
  id: string;
  shortcode: string;
  mediaType: "p" | "reel";
  permalink: string;
  influencerName: string;
  influencerHandle: string;
  title: string;
  dish?: string;
  areaId?: JaipurFoodArea;
  placeId?: string;
  featured?: boolean;
};

export const FOOD_INSTAGRAM_ATTRIBUTION =
  "Photos and videos are embedded directly from public Instagram posts by Jaipur & Rajasthan food creators. Follow them for the latest spots — we do not host or own this media.";

export const JAIPUR_FOOD_INSTAGRAM_POSTS: InstagramFoodPost[] = [
  {
    id: "foodie-bhartiyaa-litti",
    shortcode: "Cv_kQmfsHaZ",
    mediaType: "reel",
    permalink: "https://www.instagram.com/reel/Cv_kQmfsHaZ/",
    influencerName: "Mahima",
    influencerHandle: "foodie_bhartiyaa",
    title: "Litti Chokha, Jaipur",
    dish: "Litti Chokha",
    areaId: "old-city",
    placeId: "old-city-kachori-gali",
    featured: true,
  },
  {
    id: "foodiee-girl-mawa-kachori",
    shortcode: "DGvBXASzCEg",
    mediaType: "reel",
    permalink: "https://www.instagram.com/reel/DGvBXASzCEg/",
    influencerName: "Priyanka Soni",
    influencerHandle: "foodiee._.girl",
    title: "Rajasthani mawa kachori",
    dish: "Mawa kachori",
    areaId: "johari-bazaar",
    placeId: "rawat-mishthan",
    featured: true,
  },
  {
    id: "curly-tales-rajasthan",
    shortcode: "DG4123rS93m",
    mediaType: "reel",
    permalink: "https://www.instagram.com/curly.tales/reel/DG4123rS93m/",
    influencerName: "Curly Tales",
    influencerHandle: "curly.tales",
    title: "Rajasthan food & travel",
    dish: "Rajasthani flavours",
    areaId: "c-scheme",
    placeId: "spice-court",
    featured: true,
  },
  {
    id: "raj-kachori",
    shortcode: "DI8UuhMIjYa",
    mediaType: "reel",
    permalink: "https://www.instagram.com/reel/DI8UuhMIjYa/",
    influencerName: "Swaad Aswaad",
    influencerHandle: "prudentmediaofficial",
    title: "Rajasthani Raj Kachori",
    dish: "Raj Kachori",
    areaId: "raja-park",
    placeId: "raja-park-chaat",
    featured: true,
  },
  {
    id: "curly-tales-chaat",
    shortcode: "DHTSRYVSrwn",
    mediaType: "reel",
    permalink: "https://www.instagram.com/curly.tales/reel/DHTSRYVSrwn/",
    influencerName: "Curly Tales",
    influencerHandle: "curly.tales",
    title: "Chaat from across India",
    dish: "Pani puri & chaat",
    areaId: "raja-park",
    placeId: "raja-park-chaat",
    featured: true,
  },
  {
    id: "pink-city-reel",
    shortcode: "C5daL-csKSb",
    mediaType: "reel",
    permalink: "https://www.instagram.com/reel/C5daL-csKSb/",
    influencerName: "Aishwarya",
    influencerHandle: "aishwarya_travel",
    title: "Pink City, Jaipur",
    areaId: "old-city",
    placeId: "peacock-rooftop",
    featured: true,
  },
  {
    id: "curly-tales-delhi-chaat",
    shortcode: "C7Tc94yKePI",
    mediaType: "reel",
    permalink: "https://www.instagram.com/curly.tales/reel/C7Tc94yKePI/",
    influencerName: "Curly Tales",
    influencerHandle: "curly.tales",
    title: "Street chaat vibes (Old City lanes)",
    dish: "Gol gappe",
    areaId: "old-city",
    placeId: "old-city-kachori-gali",
    featured: true,
  },
  {
    id: "mawa-kachori-lmb",
    shortcode: "DGvBXASzCEg",
    mediaType: "reel",
    permalink: "https://www.instagram.com/reel/DGvBXASzCEg/",
    influencerName: "Priyanka Soni",
    influencerHandle: "foodiee._.girl",
    title: "Festive mithai & kachori",
    areaId: "johari-bazaar",
    placeId: "lmb",
  },
  {
    id: "rajasthan-thali",
    shortcode: "DG4123rS93m",
    mediaType: "reel",
    permalink: "https://www.instagram.com/curly.tales/reel/DG4123rS93m/",
    influencerName: "Curly Tales",
    influencerHandle: "curly.tales",
    title: "Rajasthani thali culture",
    areaId: "mi-road",
    placeId: "niros",
  },
  {
    id: "chaat-evening",
    shortcode: "DHTSRYVSrwn",
    mediaType: "reel",
    permalink: "https://www.instagram.com/curly.tales/reel/DHTSRYVSrwn/",
    influencerName: "Curly Tales",
    influencerHandle: "curly.tales",
    title: "Evening chaat run",
    areaId: "bapu-bazaar",
    placeId: "bapu-bazaar-chai",
  },
  {
    id: "rajasthan-food-generic",
    shortcode: "DI8UuhMIjYa",
    mediaType: "reel",
    permalink: "https://www.instagram.com/reel/DI8UuhMIjYa/",
    influencerName: "Swaad Aswaad",
    influencerHandle: "prudentmediaofficial",
    title: "Rajasthani platter",
    areaId: "amer-road",
    placeId: "amer-dhaba-strip",
  },
  {
    id: "street-food-lanes",
    shortcode: "C5daL-csKSb",
    mediaType: "reel",
    permalink: "https://www.instagram.com/reel/C5daL-csKSb/",
    influencerName: "Aishwarya",
    influencerHandle: "aishwarya_travel",
    title: "Old City food walk",
    areaId: "malviya-nagar",
    placeId: "malviya-nagar-tiffin",
  },
  {
    id: "lassi-chai-culture",
    shortcode: "C7Tc94yKePI",
    mediaType: "reel",
    permalink: "https://www.instagram.com/curly.tales/reel/C7Tc94yKePI/",
    influencerName: "Curly Tales",
    influencerHandle: "curly.tales",
    title: "Chai & snack culture",
    areaId: "mi-road",
    placeId: "lassi-wala",
  },
  {
    id: "cafe-strip",
    shortcode: "DG4123rS93m",
    mediaType: "reel",
    permalink: "https://www.instagram.com/curly.tales/reel/DG4123rS93m/",
    influencerName: "Curly Tales",
    influencerHandle: "curly.tales",
    title: "City food discovery",
    areaId: "c-scheme",
    placeId: "social-jaipur",
  },
];

export function getFeaturedInstagramFoodPosts(): InstagramFoodPost[] {
  const seen = new Set<string>();
  const result: InstagramFoodPost[] = [];
  for (const post of JAIPUR_FOOD_INSTAGRAM_POSTS) {
    if (!post.featured || seen.has(post.shortcode)) continue;
    seen.add(post.shortcode);
    result.push(post);
    if (result.length >= 6) break;
  }
  return result;
}

export function getInstagramPostForPlace(placeId: string): InstagramFoodPost | undefined {
  return JAIPUR_FOOD_INSTAGRAM_POSTS.find((p) => p.placeId === placeId);
}

export function getInstagramPostsForArea(areaId: JaipurFoodArea): InstagramFoodPost[] {
  const seen = new Set<string>();
  return JAIPUR_FOOD_INSTAGRAM_POSTS.filter((p) => {
    if (p.areaId !== areaId || seen.has(p.shortcode)) return false;
    seen.add(p.shortcode);
    return true;
  });
}

export function getInstagramEmbedUrl(post: InstagramFoodPost): string {
  return `https://www.instagram.com/${post.mediaType}/${post.shortcode}/embed`;
}
