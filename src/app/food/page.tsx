import { JaipurFoodSection } from "@/components/food/JaipurFoodSection";
import { PageBanner } from "@/components/layout/PageBanner";
import { FOOD_LOCAL_ATTRIBUTION } from "@/lib/jaipur-food";
import { HERITAGE_GALLERY } from "@/lib/heritage-images";

export const metadata = {
  title: "Jaipur Food Guide",
  description: FOOD_LOCAL_ATTRIBUTION,
};

export default function FoodPage() {
  return (
    <div>
      <PageBanner
        title="Jaipur food guide"
        subtitle="Best places and areas — every recommendation sourced from local knowledge."
        image={HERITAGE_GALLERY[0]}
      />
      <JaipurFoodSection showViewAllLink={false} />
    </div>
  );
}
