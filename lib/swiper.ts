import type { SwiperOptions } from "swiper/types";

export const defaultCarouselConfig: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export const heroCarouselConfig: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};
