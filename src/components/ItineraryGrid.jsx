"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./ItineraryGrid.css";
import QuoteModal from "@/components/TourQuote";
import Link from "next/link";

const tours = [
  {
    title: "14 Days Diversity Tour",
    days: "14 Day / 13 Night",
    pax: "Any size",
    images: ["/card4.jpg", "/card5.jpg"],
    desc: "Get onboard on a magical 14–day journey through diverse landscapes...",
  },
  {
    title: "4 Days flagship Itinerary",
    days: "4 Day / 3 Night",
    pax: "Any size",
    images: ["/card5.jpg", "/card6.jpg"],
    desc: "Extraordinary landscapes, rich culture, and our one-of-a-kind itineraries...",
  },
  {
    title: "12 Days Cultural & Heritage Tour",
    days: "12 Day / 11 Night",
    pax: "Any size",
    images: ["/card6.jpg", "/card4.jpg"],
    desc: "This 12-day journey will launch in the lively coastal hub of Negombo...",
  },
];

export default function ItineraryGrid() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");

  const openModal = (tourName) => {
    setSelectedTour(tourName);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section className="py-14 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h3 className="text-3xl font-bold mb-8 text-gray-800 mt-6 text-center md:text-left">
          Our Popular Itineraries
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((t, i) => (
            <article key={i} className="tour-card">
              {/* Swiper Slider */}
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="tour-img-slider"
              >
                {t.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative h-60 sm:h-64 rounded-xl overflow-hidden">
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

              {/* Pax + Duration */}
              <div className="flex items-center justify-between mt-3 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">👥</span> {t.pax}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📅</span> {t.days}
                </div>
              </div>

              {/* Title */}
              <h4 className="mt-4 text-xl font-semibold text-gray-800">
                {t.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {t.desc}
              </p>

              {/* Button */}
              <button
                className="btn-yellow mt-5 w-full sm:w-auto"
                onClick={() => openModal(t.title)}
              >
                Request A Free Quote
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && <QuoteModal tour={selectedTour} closeModal={closeModal} />}
    </section>
  );
}
