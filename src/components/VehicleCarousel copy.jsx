"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import VehicleQuoteModal from "@/components/VehicleQuoteModal";
import "./vehicleCarousel.css";

const items = [
  { title: "Toyota Premio", image: "/card1.jpg", label: "Private Car" },
  { title: "Toyota Hiace 12CH", image: "/card2.jpg", label: "Van" },
  { title: "XGems Golden Dragon", image: "/card3.jpg", label: "Bus" },
  { title: "Toyota Premio new", image: "/card1.jpg", label: "Private Car" },
  { title: "Toyota Hiace 12CH new", image: "/card2.jpg", label: "Van" },
  { title: "XGems Golden Dragon new", image: "/card3.jpg", label: "Bus" },
];

export default function VehicleCarousel() {
  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section id="vehicles" className="py-16 bg-[#f8fcff]">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">
          Rent a Car, Van, Luxury Car and Bus
        </h3>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
        >
          {items.map((it) => (
            <SwiperSlide key={it.title}>
              <div className="carousel-card bg-white p-4 rounded-xl shadow-md">
                <div className="relative h-48 w-full rounded-xl overflow-hidden">
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h4 className="mt-4 text-lg text-gray-800 font-semibold">
                  {it.title}
                </h4>
                <p className="text-gray-500 text-sm">{it.label}</p>

                <button
                  className="btn-yellow mt-4 w-full"
                  onClick={() => openModal(it.title)}
                >
                  Book Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* -------------------- MODAL -------------------- */}
      {showModal && (
        <VehicleQuoteModal vehicle={selectedVehicle} closeModal={closeModal} />
      )}
    </section>
  );
}
