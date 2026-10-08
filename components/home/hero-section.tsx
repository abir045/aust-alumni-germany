"use client";

import Image from "next/image";
import { HeadingText } from "@/components/globals/typography/heading-text";
import { cn } from "@/lib/utils";

interface HeroCardProps {
  src: string;
  alt: string;
  className?: string;
  rotation?: string;
}

function HeroImageCard({ src, alt, className, rotation = "rotate-0" }: HeroCardProps) {
  return (
    <div
      className={cn(
        "pointer-events-none select-none absolute rounded-2xl md:rounded-3xl overflow-hidden border border-white/25 shadow-2xl shadow-black/50",
        rotation,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 120px, (max-width: 1024px) 200px, 260px"
        className="object-cover"
        priority
      />
      {/* 40% #0F2B5C Overlay (Figma spec) */}
      <div className="absolute inset-0 bg-[#0F2B5C]/40" />
    </div>
  );
}

export function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-[80dvh] overflow-hidden bg-[#0F2B5C] flex flex-col justify-between items-center py-6 px-4">
      {/* 2nd Center Radial Vignette (Figma #0F2B5C Stops: 0% @ 75%, 38% @ 50%, 70% @ 0%) */}
      {/* <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] md:w-[900px] md:h-[650px] lg:w-[1100px] lg:h-[750px] rounded-[20px] pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(15, 43, 92, 0.75) 0%, rgba(15, 43, 92, 0.50) 38%, rgba(15, 43, 92, 0) 70%)",
        }}
      /> */}

      {/* 1st Center Radial Glow (Exact Figma Specs: 35% #FFFFFF 100% / 35% #FFFFFF 0% @ 4% Appearance) */}

      {/* <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 35%, rgba(255, 255, 255, 0) 35.2%)",
        }}
      /> */}

      <div className="absolute inset-0 pointer-events-none z-10 flex items-start justify-center">
        <div
          className="mt-[15%] h-[48%] w-[54%] rounded-[50%] bg-white/6 blur-2xl"
        />
      </div>







      {/* ================= BACKGROUND FLOATING PHOTO MOSAIC ================= */}
      <div className="absolute inset-0 max-w-[1760px] mx-auto pointer-events-none">
        {/* TOP ROW - Visible on mobile & desktop */}
        <HeroImageCard
          src="/home/hero/Alumni seminar lecture.png"
          alt="Alumni seminar lecture"
          rotation="-rotate-2"
          className="top-3 left-2 w-[110px] h-[80px] sm:top-4 sm:left-[2%] sm:w-[180px] sm:h-[130px] xl:w-[220px] xl:h-[150px]"
        />
        <HeroImageCard
          src="/home/hero/Bangladeshi graduate in Germany.png"
          alt="Bangladeshi graduate in Germany"
          rotation="rotate-1"
          className="top-2 left-[24%] w-[185px] h-[130px] xl:w-[230px] xl:h-[160px] hidden sm:block"
        />
        <HeroImageCard
          src="/home/hero/Café meetup in Berlin.png"
          alt="Café meetup in Berlin"
          rotation="-rotate-1"
          className="top-3 right-2 w-[110px] h-[80px] sm:right-[32%] sm:w-[180px] sm:h-[130px] xl:w-[220px] xl:h-[150px]"
        />
        <HeroImageCard
          src="/home/hero/University campus meetup.png"
          alt="University campus meetup"
          rotation="rotate-2"
          className="top-6 right-[15%] w-[190px] h-[135px] xl:w-[230px] xl:h-[160px] hidden md:block"
        />
        <HeroImageCard
          src="/home/hero/Tech seminar discussion.png"
          alt="Tech seminar discussion"
          rotation="-rotate-2"
          className="top-2 right-[2%] w-[190px] h-[130px] xl:w-[230px] xl:h-[155px] hidden lg:block"
        />

        {/* FLANKING CARDS - LEFT */}
        <HeroImageCard
          src="/home/hero/Social mixer Stammtisch.png"
          alt="Social mixer Stammtisch"
          rotation="rotate-1"
          className="top-[30%] left-[1%] w-[170px] h-[120px] xl:w-[210px] xl:h-[145px] hidden lg:block"
        />
        <HeroImageCard
          src="/home/hero/Software engineering collaboration.png"
          alt="Software engineering collaboration"
          rotation="-rotate-2"
          className="top-[24%] left-[15%] w-[195px] h-[135px] xl:w-[245px] xl:h-[170px] hidden md:block"
        />
        <HeroImageCard
          src="/home/hero/Alumni group study discussion.png"
          alt="Alumni group study discussion"
          rotation="-rotate-1"
          className="top-[48%] left-[0%] w-[190px] h-[135px] xl:w-[230px] xl:h-[160px] hidden lg:block"
        />

        {/* FLANKING CARDS - RIGHT */}
        <HeroImageCard
          src="/home/hero/Tech group pairing.png"
          alt="Tech group pairing"
          rotation="rotate-2"
          className="top-[24%] right-[22%] w-[195px] h-[135px] xl:w-[240px] xl:h-[170px] hidden md:block"
        />
        <HeroImageCard
          src="/home/hero/Tech meetup group.png"
          alt="Tech meetup group"
          rotation="-rotate-1"
          className="top-[30%] right-[1%] w-[180px] h-[130px] xl:w-[220px] xl:h-[150px] hidden lg:block"
        />
        <HeroImageCard
          src="/home/hero/Career mentorship round table.png"
          alt="Career mentorship round table"
          rotation="rotate-2"
          className="top-[50%] right-[0%] w-[190px] h-[130px] xl:w-[230px] xl:h-[155px] hidden lg:block"
        />

        {/* BOTTOM ROW - Visible on mobile & desktop */}
        <HeroImageCard
          src="/home/hero/Friends reunion in Hamburg.png"
          alt="Friends reunion in Hamburg"
          rotation="-rotate-2"
          className="bottom-14 left-2 w-[115px] h-[85px] sm:bottom-12 sm:left-[4%] sm:w-[190px] sm:h-[135px] xl:w-[235px] xl:h-[160px]"
        />
        <HeroImageCard
          src="/home/hero/Colleagues collaborating.png"
          alt="Colleagues collaborating"
          rotation="rotate-1"
          className="bottom-4 left-[24%] w-[205px] h-[140px] xl:w-[250px] xl:h-[175px] hidden sm:block"
        />
        <HeroImageCard
          src="/home/hero/Alumni friendship meetup.png"
          alt="Alumni friendship meetup"
          rotation="-rotate-1"
          className="bottom-10 left-[43%] w-[180px] h-[130px] xl:w-[220px] xl:h-[150px] hidden xl:block"
        />
        <HeroImageCard
          src="/home/hero/Young professionals workshop.png"
          alt="Young professionals workshop"
          rotation="rotate-1"
          className="bottom-12 right-[27%] w-[190px] h-[135px] xl:w-[230px] xl:h-[160px] hidden sm:block"
        />
        <HeroImageCard
          src="/home/hero/img1.png"
          alt="Keynote speech at summit"
          rotation="rotate-2"
          className="bottom-14 right-2 w-[115px] h-[85px] sm:bottom-4 sm:right-[3%] sm:w-[210px] sm:h-[145px] xl:w-[255px] xl:h-[175px]"
        />
      </div>

      {/* ================= CENTER TITLE LOCKUP ================= */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 select-none my-auto">
        <HeadingText
          variant="display"
          as="h1"
          className="font-playfair text-white text-center uppercase"
        >
          Connecting AUST
          <br />
          Alumni Across
          <span className="block font-playfair italic font-normal text-[#F7941D] capitalize mt-1 sm:mt-2">
            Germany
          </span>
        </HeadingText>
      </div>

      {/* ================= BOTTOM BOUNCE SCROLL INDICATOR ================= */}
      <div className="relative z-20 pt-2 flex flex-col items-center">
        <button
          onClick={scrollToContent}
          type="button"
          aria-label="Scroll to next section"
          className="p-1 opacity-80 hover:opacity-100 transition-opacity animate-bounce cursor-pointer"
        >
          <Image
            src="/home/hero/arrow-down.svg"
            alt="Scroll down"
            width={24}
            height={60}
            className="w-5 h-auto object-contain"
          />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;

