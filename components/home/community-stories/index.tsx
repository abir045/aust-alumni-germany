import Link from "next/link";
import { HeadingText } from "@/components/globals/typography/heading-text";
import { BodyText } from "@/components/globals/typography/body-text";
import { StoryCard } from "@/components/home/community-stories/story-card";
import {
  COMMUNITY_STORIES_DATA,
  type CommunityStory,
} from "@/constants/stories";
import { ROUTES } from "@/constants/routes";

interface CommunityStoriesSectionProps {
  stories?: CommunityStory[];
}

export function CommunityStoriesSection({
  stories = COMMUNITY_STORIES_DATA,
}: CommunityStoriesSectionProps) {
  return (
    <section className="bg-[#F8F9FF] py-16 md:py-24 dark:bg-[#081226]">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-12">
          <div>
            <BodyText variant="caption" className="text-secondary">
              MEMBER EXPERIENCES
            </BodyText>
            <HeadingText variant="h2" className="text-dark-blue">
              Community Stories
            </HeadingText>
          </div>

          <div>
            <Link
              href={ROUTES.BLOG.ROOT}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF2FF] px-4 py-2 text-xs font-bold text-dark-blue shadow-xs transition-colors hover:bg-[#D9E7FF] dark:bg-[#0F2B5C]/60 dark:text-[#9EBEFA] dark:hover:bg-[#0F2B5C]"
            >
              <span>Write a Story</span>
              <span role="img" aria-label="pen">
                ✍️
              </span>
            </Link>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityStoriesSection;
