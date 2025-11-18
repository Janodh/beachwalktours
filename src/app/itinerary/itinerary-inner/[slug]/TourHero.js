"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TourHero({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="rounded-2xl shadow-xl"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden">
            <Image src={img} alt="Tour Image" fill className="object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
