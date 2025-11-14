"use client";

import "./vehicleRent.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Breadcrumbs from "@/components/Breadcrumbs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VehicleRentPage() {
  const cars = [
    { title: "CHR", image: "/card1.jpg", label: "5 Pax (with Baggage)" },
    {
      title: "Toyota Axio",
      image: "/card2.jpg",
      label: "3–5 Pax (with Baggage)",
    },
    {
      title: "Toyota Premio",
      image: "/card3.jpg",
      label: "3–5 Pax (with Baggage)",
    },
  ];

  const vans = [
    {
      title: "Toyota Hiace KDH",
      image: "/van-kdh.png",
      label: "10 Pax (with Baggage)",
    },
    {
      title: "Toyota Hiace Commuter",
      image: "/van-commuter.png",
      label: "9–15 Pax (with Baggage)",
    },
    {
      title: "Nissan Caravan",
      image: "/van-caravan.png",
      label: "8–14 Pax (with Baggage)",
    },
  ];

  const buses = [
    {
      title: "Toyota Coaster",
      image: "/bus-coaster.png",
      label: "15 Pax (with Baggage)",
    },
    {
      title: "Xiamen Golden Dragon",
      image: "/bus-xiamen.png",
      label: "35–50 Pax (with Baggage)",
    },
  ];

  return (
    <section className="bg-[#f8fcff] pb-20 bg-section  ">
      {/* ⭐ Breadcrumbs  */}
      <Breadcrumbs />
      <div className="container mx-auto px-6 vehicle-section">
        {/* ----------------------------- */}
        {/* Rent a Car With Driver */}
        {/* ----------------------------- */}
        <CategoryCarousel title="Rent a Car With Driver" data={cars} />

        {/* ----------------------------- */}
        {/* Rent a Van With Driver */}
        {/* ----------------------------- */}
        <CategoryCarousel title="Rent A Van With Driver" data={vans} />

        {/* ----------------------------- */}
        {/* Rent A Bus With Driver */}
        {/* ----------------------------- */}
        <CategoryCarousel title="Rent A Bus With Driver" data={buses} />
      </div>
    </section>
  );
}

/* ---------- Reusable Component ---------- */

function CategoryCarousel({ title, data }) {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">{title}</h3>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.title}>
            <VehicleCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

/* ---------- Card Component ---------- */

function VehicleCard({ item }) {
  return (
    <div className="carousel-card bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition">
      {/* Image */}
      <div className="relative h-48 w-full rounded-xl overflow-hidden bg-white flex items-center justify-center">
        <Image
          src={item.image}
          alt={item.title}
          width={350}
          height={260}
          className="object-contain"
        />
      </div>

      <h4 className="mt-4 text-lg font-semibold text-gray-700">{item.title}</h4>
      <p className="text-gray-500 text-sm">{item.label}</p>

      <button className="btn-yellow mt-4 w-fit">Request Quote</button>
    </div>
  );
}
