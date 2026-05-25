import { JaipurFoodSection } from "@/components/food/JaipurFoodSection";
import { FOOD_LOCAL_ATTRIBUTION } from "@/lib/jaipur-food";

export const metadata = {
  title: "Jaipur Food Guide",
  description: FOOD_LOCAL_ATTRIBUTION,
};

export default function FoodPage() {
  return (
    <div>
      <div className="border-b border-white/5 bg-[#0a0a0a] pt-16">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-500/80">Food guide</p>
          <h1 className="font-display mt-2 text-3xl font-semibold text-white sm:text-4xl">
            Jaipur food from local Instagram
          </h1>
          <p className="mt-3 max-w-2xl text-stone-400">
            Best places and areas — recommendations from locals. Each reel plays once in the guide
            below.
          </p>
        </div>
      </div>
      <JaipurFoodSection showViewAllLink={false} />
    </div>
  );
}
