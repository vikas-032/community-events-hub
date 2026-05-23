import { MyRsvps } from "@/components/profile/MyRsvps";
import { PageBanner } from "@/components/layout/PageBanner";
import { HERITAGE_GALLERY } from "@/lib/heritage-images";

export const metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <div>
      <PageBanner
        title="Your profile"
        subtitle="Events you've RSVP'd to across Jaipur."
        image={HERITAGE_GALLERY[4]}
      />
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <MyRsvps />
      </div>
    </div>
  );
}
