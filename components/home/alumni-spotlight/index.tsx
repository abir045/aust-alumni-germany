"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

// Swiper core styles
import "swiper/css";

import { HeadingText } from "@/components/globals/typography/heading-text";
import { BodyText } from "@/components/globals/typography/body-text";
import { SpotlightCard } from "@/components/home/alumni-spotlight/spotlight-card";
import {
  ALUMNI_SPOTLIGHT_DATA,
  type AlumniSpotlightItem,
} from "@/constants/spotlight";

interface AlumniSpotlightSectionProps {
  spotlights?: AlumniSpotlightItem[];
}

export function AlumniSpotlightSection({
  spotlights = ALUMNI_SPOTLIGHT_DATA,
}: AlumniSpotlightSectionProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleSelectIndex = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  return (
    <section className="bg-(--color-surface-light-blue) py-16 md:py-24 dark:bg-[#081226]">
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <BodyText variant="caption" className="text-secondary">
            INSPIRATION & CAMARADERIE
          </BodyText>
          <HeadingText variant="h2" className="text-dark-blue">
            Alumni Spotlight
          </HeadingText>
        </div>

        {/* Swiper Slider Container */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            speed={600}
            loop={spotlights.length > 1}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full "
          >
            {spotlights.map((spotlight) => (
              <SwiperSlide key={spotlight.id}>
                <SpotlightCard
                  spotlight={spotlight}
                  currentIndex={activeIndex}
                  totalCount={spotlights.length}
                  onPrev={handlePrev}
                  onNext={handleNext}
                  onSelectIndex={handleSelectIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default AlumniSpotlightSection;
