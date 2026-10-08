import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { AlumniMapSection } from "@/components/home/alumni-map";
import { UpcomingEventsSection } from "@/components/home/upcoming-events-section";
import { CommunityStoriesSection } from "@/components/home/community-stories";
import { AlumniSpotlightSection } from "@/components/home/alumni-spotlight";
import { CtaBanner } from "@/components/common/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AlumniMapSection />
      <UpcomingEventsSection />
      <CommunityStoriesSection />
      <AlumniSpotlightSection />
      <CtaBanner />
    </>
  );
}
