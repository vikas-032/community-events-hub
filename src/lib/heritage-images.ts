/** Curated imagery — Unsplash (verified IDs) or /public/heritage when local mode is on */
export type HeritageImage = {
  src: string;
  alt: string;
  caption?: string;
};

const useLocalPhotos = process.env.NEXT_PUBLIC_USE_LOCAL_HERITAGE === "true";

const q = "w=1920&q=85&auto=format&fit=crop";
const thumb = "w=800&q=80&auto=format&fit=crop";

function heritageImage(localPath: string, unsplashUrl: string): string {
  return useLocalPhotos ? localPath : unsplashUrl;
}

export const HERITAGE_HERO: HeritageImage = {
  src: heritageImage(
    "/heritage/hero.jpg",
    `https://images.unsplash.com/photo-1599661046280-e842a1773441?${q}`,
  ),
  alt: "Hawa Mahal facade at golden hour, Jaipur",
  caption: "The Palace of Winds",
};

export const HERITAGE_GALLERY: HeritageImage[] = [
  {
    src: heritageImage(
      "/heritage/hawa-mahal.jpg",
      `https://images.unsplash.com/photo-1599661046280-e842a1773441?${thumb}`,
    ),
    alt: "Hawa Mahal, Jaipur",
    caption: "Hawa Mahal",
  },
  {
    src: heritageImage(
      "/heritage/amer-fort.jpg",
      `https://images.unsplash.com/photo-1477587458883-47145ed94245?${thumb}`,
    ),
    alt: "Amer Fort overlooking Maota Lake",
    caption: "Amer Fort",
  },
  {
    src: heritageImage(
      "/heritage/pink-city.jpg",
      `https://images.unsplash.com/photo-1583422409516-5245be061f65?${thumb}`,
    ),
    alt: "Pink City streetscape, Jaipur",
    caption: "Pink City",
  },
  {
    src: heritageImage(
      "/heritage/palace.jpg",
      `https://images.unsplash.com/photo-1609137144819-7a983e2c823b?${thumb}`,
    ),
    alt: "Ornate palace architecture, Rajasthan",
    caption: "Royal Jaipur",
  },
  {
    src: heritageImage(
      "/heritage/city-lights.jpg",
      `https://images.unsplash.com/photo-1566552886739-258549411dad?${thumb}`,
    ),
    alt: "Jaipur city panorama at dusk",
    caption: "City lights",
  },
  {
    src: heritageImage(
      "/heritage/fort-trails.jpg",
      `https://images.unsplash.com/photo-1524492412937-b28c1653018d?${thumb}`,
    ),
    alt: "Historic fort walls in Rajasthan",
    caption: "Fort trails",
  },
];

export function getEventCoverImage(eventId: string): HeritageImage {
  let index = 0;
  for (let i = 0; i < eventId.length; i++) {
    index = (index + eventId.charCodeAt(i)) % HERITAGE_GALLERY.length;
  }
  return HERITAGE_GALLERY[index];
}

export function isUsingLocalHeritagePhotos(): boolean {
  return useLocalPhotos;
}
