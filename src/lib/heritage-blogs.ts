import { pexelsPhoto, PEXELS } from "@/lib/pexels-images";
import type { HeritageBlog } from "@/types/blog";

const img = (photoId: number, alt: string) => ({
  src: pexelsPhoto(photoId, 1200),
  alt,
});

export const HERITAGE_BLOGS: HeritageBlog[] = [
  {
    slug: "amer-fort",
    title: "Amer Fort",
    subtitle: "The hilltop citadel above Maota Lake",
    excerpt:
      "Rajput grandeur, mirror palaces, and elephant paths — Amer is Jaipur’s most cinematic fort.",
    area: "Amer, ~11 km from city centre",
    readTime: "4 min",
    image: img(PEXELS.amerFort, "Amer Fort reflected near Maota Lake, Jaipur"),
    publishedAt: "2026-05-01",
    highlights: ["Sheesh Mahal", "Sunset views", "Sound & light show"],
    localTip: "Locals often visit early morning or late afternoon to skip midday heat on the climb.",
    body: [
      "Amer Fort (often called Amber Fort) rises above Maota Lake on a ridge that once guarded the Kachwaha capital. Built and expanded from the 16th century onward, it blends Hindu layout with Mughal ornament — courtyards, jalis, and marble halls that catch the low Rajasthan sun.",
      "The Ganesh Pol gateway leads into palaces where maharajas held court. Sheesh Mahal, the Hall of Mirrors, was designed so a single lamp could light the room with a galaxy of reflections — still a highlight on guided tours.",
      "You can walk up the old ramp, ride jeeps, or take elephants to the main gate (book ethically and early). Many Jaipur itineraries pair Amer with Jaigarh Fort on the ridge above, which guarded the kingdom’s treasury.",
      "After exploring, stop for kachori or lassi on the road back — Amer Road dhabas are where drivers and families eat, not only tourists.",
    ],
  },
  {
    slug: "hawa-mahal",
    title: "Hawa Mahal",
    subtitle: "The Palace of Winds in the Pink City",
    excerpt:
      "A honeycomb facade of 953 windows — built for breeze, privacy, and royal processions.",
    area: "Old City, Badi Chaupar",
    readTime: "3 min",
    image: img(PEXELS.hawaMahal, "Hawa Mahal facade at golden hour, Jaipur"),
    publishedAt: "2026-05-03",
    highlights: ["Street photography", "City Palace nearby", "Sunrise light"],
    localTip: "Shoot from the café terraces across the street for the classic frontal view.",
    body: [
      "Hawa Mahal was completed in 1799 as an extension of the City Palace — a five-storey screen of sandstone jharokhas so royal women could observe street festivals without being seen from below.",
      "The name means “Palace of Winds.” The lattice work was engineering as much as aesthetics: cross-ventilation through the facade cooled the chambers behind it in Jaipur’s dry heat.",
      "From the street it looks like a vertical theatre set; inside, narrow ramps connect a few open floors with views over the Old City bazaars. Pair a visit with Johari Bazaar and Kachori Gali for a full morning in the Pink City.",
      "At golden hour the terracotta pink glows against the sky — one reason it remains Jaipur’s most photographed wall.",
    ],
  },
  {
    slug: "jal-mahal",
    title: "Jal Mahal",
    subtitle: "The Water Palace on Man Sagar Lake",
    excerpt:
      "A floating silhouette at dusk — four storeys hidden beneath the lake’s surface.",
    area: "Amer Road, Man Sagar Lake",
    readTime: "3 min",
    image: img(PEXELS.jalMahal, "Jal Mahal water palace on Man Sagar Lake, Jaipur"),
    publishedAt: "2026-05-05",
    highlights: ["Sunset photography", "Lake walk", "Amer Fort nearby"],
    localTip: "You cannot enter the palace; plan a stop while driving between Amer and the city.",
    body: [
      "Jal Mahal appears to float on Man Sagar Lake along Amer Road — a Rajput pleasure palace renovated in the 18th century, with Mughal gardens that once framed the water’s edge.",
      "Four submerged levels lie below the waterline; only the top pavilion is visible. Restoration work on the lake and wetlands has brought more birds and calmer reflections in recent years.",
      "There is no public entry inside the palace today, but the promenade and viewpoints along the road are favourite sunset stops. Locals pause here after Amer Fort before heading back into town.",
      "Bring a zoom lens: the palace is about atmosphere from a distance — ripples, monsoon clouds, and the Aravalli hills behind Amer.",
    ],
  },
  {
    slug: "nahargarh-fort",
    title: "Nahargarh Fort",
    subtitle: "The tiger fort above Jaipur",
    excerpt:
      "City-wide sunsets, ramparts, and the Madhavendra Bhawan suites.",
    area: "Aravalli hills, west of city",
    readTime: "4 min",
    image: img(PEXELS.nahargarhView, "Nahargarh Fort overlooking Jaipur city"),
    publishedAt: "2026-05-07",
    highlights: ["Panoramic views", "Sunset point", "Padao restaurant"],
    localTip: "Weekend evenings get crowded at the main sunset wall — arrive 45 minutes early.",
    body: [
      "Nahargarh — “abode of tigers” — was strengthened in the 18th century to shield Jaipur along with Amer and Jaigarh. Its walls follow the ridge like a broken spine above the Pink City.",
      "Madhavendra Bhawan inside the fort is a series of identical suites for the king and his queens, each with kitchens and courtyards — a glimpse of court life away from the main palace.",
      "The real draw for many visitors is the view: Jaipur spreads below in a haze of pink, especially at sunset when the city lights begin to match the sky.",
      "The fort pairs well with a evening plan: explore walls, eat at the hill restaurants, and descend before the gates get busy on the way down.",
    ],
  },
  {
    slug: "jaigarh-fort",
    title: "Jaigarh Fort",
    subtitle: "The victory fort and home of Jaivana cannon",
    excerpt:
      "Above Amer, guarding treasuries and offering rugged Aravalli walks.",
    area: "Cheel ka Teela, above Amer",
    readTime: "3 min",
    image: img(PEXELS.jaigarhFort, "Jaigarh Fort ramparts in the Aravalli hills"),
    publishedAt: "2026-05-09",
    highlights: ["Jaivana cannon", "Amer views", "Museum displays"],
    localTip: "Combine tickets/planning with Amer — same ridge, different gates.",
    body: [
      "Jaigarh was never conquered in battle — hence “fort of victory.” It sits on Cheel ka Teela (Hill of Eagles) and was built to protect Amer and store state wealth.",
      "The Jaivana cannon, once among the world’s largest on wheels, sits in the courtyard as a symbol of Rajput military pride. Foundries and water systems here supplied Amer below.",
      "Walks along the ramparts give wide views of Amer Fort, Maota Lake, and the green Aravalli folds. The fort feels more austere than Amer’s palaces — stone, watchtowers, and wind.",
      "History lovers often visit Amer first for architecture, then Jaigarh for defence and engineering — locals recommend starting early before summer heat on exposed stone.",
    ],
  },
  {
    slug: "albert-hall-museum",
    title: "Albert Hall Museum",
    subtitle: "Rajasthan’s oldest museum in the Ram Niwas Garden",
    excerpt:
      "Indo-Saracenic architecture, mummies, and crafts under one Indo-Gothic roof.",
    area: "Ram Niwas Garden, MI Road",
    readTime: "3 min",
    image: img(PEXELS.albertHall, "Albert Hall Museum exterior, Jaipur"),
    publishedAt: "2026-05-11",
    highlights: ["Night lighting", "Textiles & armour", "Garden walks"],
    localTip: "The building is stunning after dark when lit — even a short exterior visit is worth it.",
    body: [
      "Opened in 1887 as a temporary hall for the Prince of Wales visit, Albert Hall became Rajasthan’s state museum — a Indo-Saracenic landmark at the entrance to Ram Niwas Garden.",
      "Inside you’ll find miniature paintings, jewellery, armour, pottery, and an Egyptian mummy that surprises first-time visitors. Galleries trace Rajasthani tribes, crafts, and court culture.",
      "The garden around the museum is where families stroll on cooler evenings. MI Road and Old Jaipur’s cafés are a short ride away — easy to pair with Lassi Wala or Niros for lunch.",
      "For event-goers in Jaipur, Albert Hall is a cultural anchor: exhibitions and city festivals often reference this address when they say “Ram Niwas Garden.”",
    ],
  },
  {
    slug: "patrika-gate",
    title: "Patrika Gate",
    subtitle: "Nine hand-painted arches of modern Jaipur",
    excerpt:
      "A burst of colour on Jawahar Circle — Jaipur’s most Instagrammed gate since 2016.",
    area: "Jawahar Circle, Tonk Road",
    readTime: "3 min",
    image: img(PEXELS.patrikaGate, "Colourful Patrika Gate arches, Jaipur"),
    publishedAt: "2026-05-13",
    highlights: ["Photography", "Free exterior", "Jawahar Circle park"],
    localTip: "Morning light is softer; evenings bring crowds for reels and portraits.",
    body: [
      "Patrika Gate is part of the Patrika building complex — nine adjacent gateways painted with Rajasthani motifs, folklore, and city scenes. It was designed to echo traditional pol gates while celebrating contemporary Jaipur.",
      "Unlike historic forts, this is open urban art: walk through successive arches where every surface is mural — elephants, festivals, maps, and craft symbols in saturated colour.",
      "Jawahar Circle park around it is one of Asia’s larger traffic circles with walking paths; locals jog here at dawn before the heat.",
      "It has become a symbol of “new Pink City” creativity — often on the same itinerary as Albert Hall and C-Scheme meetups for visitors who want heritage plus a bold photo stop.",
    ],
  },
];

export function getAllBlogs(): HeritageBlog[] {
  return HERITAGE_BLOGS;
}

export function getBlogBySlug(slug: string): HeritageBlog | undefined {
  return HERITAGE_BLOGS.find((b) => b.slug === slug);
}

export function getBlogSlugs(): string[] {
  return HERITAGE_BLOGS.map((b) => b.slug);
}
