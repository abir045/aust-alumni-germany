import Link from "next/link";
import { HeadingText } from "@/components/globals/typography/heading-text";
import { BodyText } from "@/components/globals/typography/body-text";
import type { CommunityStory } from "@/constants/stories";

interface StoryCardProps {
  story: CommunityStory;
}

export function StoryCard({ story }: StoryCardProps) {
  const cardContent = (
    <article className="flex h-full flex-col justify-between rounded-[16px] border border-slate-200/80 bg-white p-6 md:p-7 shadow-xs transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {/* Top Content */}
      <div>
        {/* Tags & Read Time Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {story.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-[#EAF2FF] px-3 py-1 dark:bg-[#0F2B5C]/60"
              >
                <BodyText variant="caption" className="text-dark-blue">
                  {tag}
                </BodyText>
              </span>
            ))}
          </div>

          <BodyText variant="caption" className="text-desc-text">
            {story.readTime}
          </BodyText>
        </div>

        {/* Story Title */}
        <div className="mt-4 min-h-[56px]">
          <HeadingText variant="h4" className="text-dark-blue">
            {story.title}
          </HeadingText>
        </div>

        {/* Story Description */}
        <div className="mt-3">
          <BodyText variant="small" className="text-desc-text">
            {story.description}
          </BodyText>
        </div>
      </div>

      {/* Author Footer */}
      <div className="mt-8 flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
        {/* Author Avatar Initials */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-xs font-bold text-dark-blue dark:bg-[#0F2B5C]/60 dark:text-[#9EBEFA]">
          {story.author.initials}
        </div>

        {/* Author Details Column */}
        <div className="flex flex-col">
          <BodyText variant="small" className="text-dark-blue">
            {story.author.name}
          </BodyText>
          <BodyText variant="caption" className="text-desc-text">
            {story.author.details}
          </BodyText>
        </div>
      </div>
    </article>
  );

  if (story.href) {
    return (
      <Link href={story.href} className="block h-full group focus:outline-none">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

export default StoryCard;
