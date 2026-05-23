import type { JaipurFoodArea, JaipurFoodAreaInfo, JaipurFoodPlace } from "@/types/food";

export const FOOD_LOCAL_ATTRIBUTION =
  "Every spot, dish, and tip on this page comes from Jaipur locals — home cooks, shop owners, and neighbourhood regulars who eat here daily. Not paid listings.";

export const JAIPUR_FOOD_AREAS: JaipurFoodAreaInfo[] = [
  {
    id: "old-city",
    name: "Old City (Pink City)",
    vibe: "Lanes, kachori stalls & sweet shops",
    summary:
      "The heart of street food — pyaaz kachori at dawn, rabri ghewar in season, and lassi breaks between haveli walks.",
  },
  {
    id: "johari-bazaar",
    name: "Johari Bazaar",
    vibe: "Bazaar bites between jewellery lanes",
    summary:
      "Grab quick snacks while exploring the market; locals duck into century-old mishthan bhandars for fresh savouries.",
  },
  {
    id: "mi-road",
    name: "MI Road",
    vibe: "Classic sit-down & late chai",
    summary:
      "Institutions locals trust for thali lunches, kulhad chai, and post-movie dinners — busy but consistent.",
  },
  {
    id: "c-scheme",
    name: "C-Scheme",
    vibe: "Cafés, chai & after-work meals",
    summary:
      "Where office crowds meet founders for chai; mix of Rajasthani comfort food and modern cafés.",
  },
  {
    id: "raja-park",
    name: "Raja Park",
    vibe: "North Indian & street chaat belts",
    summary:
      "Popular with families and students — loud, flavour-forward, and open late on weekends.",
  },
  {
    id: "malviya-nagar",
    name: "Malviya Nagar",
    vibe: "Student favourites & budget eats",
    summary:
      "Near colleges and co-working pockets — fast, filling, and what locals call “daily default” food.",
  },
  {
    id: "bapu-bazaar",
    name: "Bapu Bazaar",
    vibe: "Shopping + snack stops",
    summary:
      "Pair textile hunting with chaat corners locals use as meeting points between shops.",
  },
  {
    id: "amer-road",
    name: "Amer Road",
    vibe: "Fort day-trip fuel",
    summary:
      "Eat before or after Amer — locals pick simple dhabas and lassi stops over tourist-trap menus.",
  },
];

export const JAIPUR_FOOD_PLACES: JaipurFoodPlace[] = [
  {
    id: "rawat-mishthan",
    name: "Rawat Mishthan Bhandar",
    area: "johari-bazaar",
    areaLabel: "Johari Bazaar",
    mustTry: ["Pyaaz kachori", "Mirchi vada", "Mawa kachori"],
    description:
      "Locals queue before 8 AM when the batch is freshest. The kachori should shatter, not soak — that’s how you know it’s right.",
    localTip: "Takeaway and eat standing nearby; seating fills fast on Sundays.",
    bestTime: "Early morning",
    priceRange: "budget",
  },
  {
    id: "lmb",
    name: "LMB (Laxmi Misthan Bhandar)",
    area: "johari-bazaar",
    areaLabel: "Johari Bazaar",
    mustTry: ["Rajasthani thali", "Ghewar", "Rabri"],
    description:
      "A landmark locals bring out-of-town family to — not trendy, but the thali still matches what grandmothers expect at festivals.",
    localTip: "Ask for seasonal sweets; ghewar peaks around Teej and Gangaur.",
    priceRange: "mid",
  },
  {
    id: "lassi-wala",
    name: "Lassi Wala (MI Road)",
    area: "mi-road",
    areaLabel: "MI Road",
    mustTry: ["Kesar malai lassi", "Kulfi"],
    description:
      "Thick, capped with malai — locals treat it as dessert, not a drink. Everyone has an opinion on whether you mix or scoop.",
    localTip: "Small glass is enough unless you’re sharing after a spicy meal.",
    priceRange: "budget",
  },
  {
    id: "niros",
    name: "Niros",
    area: "mi-road",
    areaLabel: "MI Road",
    mustTry: ["Laal maas", "Paneer butter masala", "Chocolate cake"],
    description:
      "Generations of Jaipur families celebrate here. Locals say come for laal maas with bajra roti — the cake is a nostalgic bonus.",
    bestTime: "Lunch or early dinner",
    priceRange: "mid",
  },
  {
    id: "old-city-kachori-gali",
    name: "Kachori Gali (Old City)",
    area: "old-city",
    areaLabel: "Old City",
    mustTry: ["Pyaaz kachori", "Aloo samosa", "Jalebi"],
    description:
      "A lane locals shortcut through on the way to Hawa Mahal — follow the oil smell and the crowd, not the biggest sign.",
    localTip: "Pair with sweet shops two lanes over for jalebi still on the tray.",
    bestTime: "Before 10 AM",
    priceRange: "budget",
  },
  {
    id: "spice-court",
    name: "Spice Court",
    area: "c-scheme",
    areaLabel: "C-Scheme",
    mustTry: ["Dal baati churma", "Ker sangri", "Gatte ki sabzi"],
    description:
      "When locals want a proper Rajasthani plate without leaving central Jaipur — baati should be crisp outside, soft inside.",
    localTip: "Weekend evenings need a short wait; locals call ahead for groups.",
    priceRange: "mid",
  },
  {
    id: "social-jaipur",
    name: "Social / C-Scheme cafés strip",
    area: "c-scheme",
    areaLabel: "C-Scheme",
    mustTry: ["Filter coffee", "Small plates", "Late chai"],
    description:
      "Tech and startup folks meet here between events — locals use it for conversations, not “authentic Rajasthan” hunting.",
    localTip: "Walk the inner lanes for cheaper chai if you’re on a budget.",
    priceRange: "mid",
  },
  {
    id: "raja-park-chaat",
    name: "Raja Park Chaat Corner",
    area: "raja-park",
    areaLabel: "Raja Park",
    mustTry: ["Pani puri", "Aloo tikki", "Dahi bhalla"],
    description:
      "Evening ritual for students and families — locals judge by how crisp the puri stays and how tangy the pani is.",
    bestTime: "5 PM – 9 PM",
    priceRange: "budget",
  },
  {
    id: "peacock-rooftop",
    name: "Peacock Rooftop (Old City views)",
    area: "old-city",
    areaLabel: "Old City",
    mustTry: ["Thali", "Masala chai", "Sunset views"],
    description:
      "Locals recommend for guests who want Pink City rooftops — food is decent; the view and breeze are the real draw.",
    localTip: "Book near sunset; old-city lights come on slowly — worth the wait.",
    priceRange: "splurge",
  },
  {
    id: "amer-dhaba-strip",
    name: "Amer Road Dhabas",
    area: "amer-road",
    areaLabel: "Amer Road",
    mustTry: ["Dal baati", "Tandoori roti", "Lassi"],
    description:
      "After Amer Fort, locals skip flashy boards and pick dhabas where truck drivers eat — simple menu, hot roti, fair price.",
    localTip: "Eat light before the fort climb; heavy baati after, not before.",
    priceRange: "budget",
  },
  {
    id: "bapu-bazaar-chai",
    name: "Bapu Bazaar Chai Stalls",
    area: "bapu-bazaar",
    areaLabel: "Bapu Bazaar",
    mustTry: ["Kulhad chai", "Bun maska", "Samosa"],
    description:
      "Shopping breaks mean chai here — locals know which stall boils fresh milk each hour by the crowd out front.",
    priceRange: "budget",
  },
  {
    id: "malviya-nagar-tiffin",
    name: "Malviya Nagar Tiffin & Dosa Lane",
    area: "malviya-nagar",
    areaLabel: "Malviya Nagar",
    mustTry: ["Masala dosa", "Home-style thali", "Chai"],
    description:
      "Daily lunch for college crowds and remote workers — locals rotate between two-three trusted tiffin counters.",
    localTip: "Lunch rush 1–2 PM; come at 12:30 or after 2:30.",
    priceRange: "budget",
  },
];

export function getFoodAreaById(id: JaipurFoodArea): JaipurFoodAreaInfo | undefined {
  return JAIPUR_FOOD_AREAS.find((a) => a.id === id);
}

export function getFoodPlacesByArea(area: JaipurFoodArea | "all"): JaipurFoodPlace[] {
  if (area === "all") return JAIPUR_FOOD_PLACES;
  return JAIPUR_FOOD_PLACES.filter((p) => p.area === area);
}
