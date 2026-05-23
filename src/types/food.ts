export type JaipurFoodArea =
  | "old-city"
  | "johari-bazaar"
  | "c-scheme"
  | "raja-park"
  | "malviya-nagar"
  | "mi-road"
  | "bapu-bazaar"
  | "amer-road";

export type JaipurFoodPlace = {
  id: string;
  name: string;
  area: JaipurFoodArea;
  areaLabel: string;
  mustTry: string[];
  description: string;
  localTip?: string;
  bestTime?: string;
  priceRange?: "budget" | "mid" | "splurge";
};

export type JaipurFoodAreaInfo = {
  id: JaipurFoodArea;
  name: string;
  vibe: string;
  summary: string;
};
