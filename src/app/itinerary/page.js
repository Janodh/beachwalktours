"use client";

import "./itinerary.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Breadcrumbs from "@/components/Breadcrumbs";
import { tours } from "./tourData";

import "swiper/css";
import "swiper/css/pagination";

// user tourData
// const tours = [
//   {
//     title: "14 Days Diversity Tour",
//     days: "14 Day / 13 Night",
//     pax: "Any size",
//     images: ["/card4.jpg", "/card5.jpg"], // two images
//     desc: "Get onboard on a magical 14–day journey through diverse landscapes and rich cultural heritage...",
//   },
//   {
//     title: "4 Days flagship Itinerary",
//     days: "4 Day / 3 Night",
//     pax: "Any size",
//     images: ["/card5.jpg", "/card6.jpg"],
//     desc: "Extraordinary landscapes, rich culture, and our one-of-a-kind itineraries...",
//   },
//   {
//     title: "12 Days Cultural & Heritage Tour",
//     days: "12 Day / 11 Night",
//     pax: "Any size",
//     images: ["/card6.jpg", "/card4.jpg"],
//     desc: "This 12-day journey will launch in the lively coastal hub of Negombo...",
//   },
//   {
//     title: "5 Days flagship Itinerary",
//     days: "5 Day / 4 Night",
//     pax: "Any size",
//     images: ["/card5.jpg", "/card6.jpg"],
//     desc: "Extraordinary landscapes, rich culture, and our one-of-a-kind itineraries...",
//   },
//   {
//     title: "15 Days Cultural & Heritage Tour",
//     days: "15 Day / 14 Night",
//     pax: "Any size",
//     images: ["/card6.jpg", "/card4.jpg"],
//     desc: "This 12-day journey will launch in the lively coastal hub of Negombo...",
//   },
// ];

export default function Itinerarypage() {
  return (
    <section className="bg-slate-50 pb-16">
      {/* ⭐ Breadcrumbs */}
      <Breadcrumbs />

      <div className="container mx-auto px-4 sm:px-6">
        <h3 className="text-3xl font-bold mb-8 text-gray-800 mt-6 text-center md:text-left">
          Our Popular Itineraries
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((t, i) => (
            <article key={i} className="tour-card">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="tour-img-slider"
              >
                {t.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative h-60 sm:h-64 w-full rounded-xl overflow-hidden">
                      <Image
                        src={img}
                        alt={t.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex items-center justify-between mt-3 text-gray-600 text-sm">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-lg">👥</span> {t.pax}
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-lg">📅</span> {t.days}
                </div>
              </div>

              <h4 className="mt-4 text-xl font-semibold text-gray-800">
                {t.title}
              </h4>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {t.desc}
              </p>

              <button className="btn-yellow mt-5 w-full sm:w-auto">
                Request Quote
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
