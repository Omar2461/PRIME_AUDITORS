"use client";
import { RefObject } from "react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

type clientSliderProps = {
  className?: string;
  logos: string[];
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
};

function ClientsSlider({
  className,
  logos,
  nextRef,
  prevRef,
}: clientSliderProps) {
  const renderLogos = logos.map((logo, idx) => {
    return (
      <SwiperSlide key={idx}>
        <Image src={logo} alt="Client Logo" width={500} height={500} priority />
      </SwiperSlide>
    );
  });

  return (
    <div className="overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={20}
        onBeforeInit={(swiper) => {
          if (
            typeof swiper.params.navigation === "object" &&
            swiper.params.navigation
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        // pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 2000 }}
        speed={1000}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 5,
          },
        }}
        className={`px-10  ${className}`}
      >
        {renderLogos}
      </Swiper>
     
    </div>
  );
}

export default ClientsSlider;
