/** Heritage imagery — Pexels CDN or /public/heritage when local mode is on */
import { pexelsPhoto, PEXELS } from "@/lib/pexels-images";

export type HeritageImage = {
  src: string;
  alt: string;
  caption?: string;
};

const useLocalPhotos = process.env.NEXT_PUBLIC_USE_LOCAL_HERITAGE === "true";

function heritageImage(localPath: string, pexelsId: number, width = 1200): string {
  return useLocalPhotos ? localPath : pexelsPhoto(pexelsId, width);
}

export const HERITAGE_HERO: HeritageImage = {
  src: heritageImage("/heritage/hero.jpg", PEXELS.hawaMahal, 1920),
  alt: "Hawa Mahal facade at golden hour, Jaipur",
  caption: "The Palace of Winds",
};

export const HERITAGE_GALLERY: HeritageImage[] = [
  {
    src: heritageImage("/heritage/hawa-mahal.jpg", PEXELS.hawaMahal, 800),
    alt: "Hawa Mahal, Jaipur",
    caption: "Hawa Mahal",
  },
  {
    src: heritageImage("/heritage/amer-fort.jpg", PEXELS.amerFort, 800),
    alt: "Amer Fort overlooking Maota Lake",
    caption: "Amer Fort",
  },
  {
    src: heritageImage("/heritage/pink-city.jpg", PEXELS.jaipurCity, 800),
    alt: "Pink City streetscape, Jaipur",
    caption: "Pink City",
  },
  {
    src: heritageImage("/heritage/palace.jpg", PEXELS.indiaPalace, 800),
    alt: "Ornate palace architecture, Rajasthan",
    caption: "Royal Jaipur",
  },
  {
    src: heritageImage("/heritage/city-lights.jpg", PEXELS.nahargarhView, 800),
    alt: "Jaipur city panorama at dusk",
    caption: "City lights",
  },
  {
    src: heritageImage("/heritage/fort-trails.jpg", PEXELS.jaigarhFort, 800),
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
