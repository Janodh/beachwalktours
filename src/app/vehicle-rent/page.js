"use client";

import { useState } from "react";
import "./vehicleRent.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Breadcrumbs from "@/components/Breadcrumbs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VehicleRentPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const cars = [
    { title: "CHR", image: "/chr.jpg", label: "5 Pax (with Baggage)" },
    {
      title: "Toyota Axio",
      image: "/axio.jpg",
      label: "1–3 Pax (with Baggage)",
    },
    {
      title: "Toyota Premio",
      image: "/premio.jpg",
      label: "1–3 Pax (with Baggage)",
    },
    {
      title: "Toyota Prius",
      image: "/prius.jpg",
      label: "1–3 Pax (with Baggage)",
    },
    {
      title: "Nissan Teana 250XV",
      image: "/teana.jpg",
      label: "1–3 Pax (with Baggage)",
    },

    // ⭐ Missing ones added
    {
      title: "Honda Fit Shuttle",
      image: "/fit-shuttle.jpg",
      label: "1–3 Pax (with Baggage)",
    },
    {
      title: "Honda Insight",
      image: "/insight.jpg",
      label: "1–3 Pax (with Baggage)",
    },
    {
      title: "Toyota Allion",
      image: "/allion.jpg",
      label: "1–3 Pax (with Baggage)",
    },
    {
      title: "Toyota Aqua",
      image: "/aqua.jpg",
      label: "1–3 Pax (with Baggage)",
    },
    {
      title: "BMW 520D",
      image: "/bmw520d.jpg",
      label: "1–3 Pax (with Baggage)",
    },
    {
      title: "Honda Vezel",
      image: "/vezel.jpg",
      label: "1–3 Pax (with Baggage)",
    },
  ];

  const vans = [
    {
      title: "Toyota Hiace KDH",
      image: "/kdh.jpg",
      label: "10 Pax (with Baggage)",
    },
    {
      title: "Toyota Hiace Commuter",
      image: "/hiace.png",
      label: "9–15 Pax (with Baggage)",
    },
    {
      title: "Nissan Caravan",
      image: "/carevn.jpg",
      label: "8–14 Pax (with Baggage)",
    },
    {
      title: "Mercedes-Benz Vito",
      image: "/vito.jpg",
      label: "1–6 Pax (with Baggage)",
    },
    {
      title: "Toyota Alphard",
      image: "/alphard.jpg",
      label: "1–6 Pax (with Baggage)",
    },
    {
      title: "Nissan NV200",
      image: "/nv200.jpg",
      label: "1–7 Pax (with Baggage)",
    },
  ];

  const buses = [
    {
      title: "Toyota Coaster",
      image: "/coaster.jpg",
      label: "15 Pax (with Baggage)",
    },
    {
      title: "Xiamen Golden Dragon",
      image: "/xiamen.jpg",
      label: "35–50 Pax (with Baggage)",
    },
    {
      title: "Mitsubishi Rosa",
      image: "/rosa.jpg",
      label: "20–29 Pax (with Baggage)",
    },
    {
      title: "Nissan Civilian",
      image: "/civilian.jpg",
      label: "20–29 Pax (with Baggage)",
    },
    {
      title: "Xiamen Golden Dragon Navigator",
      image: "/golden-dragon-nav.jpg",
      label: "45–60 Pax (with Baggage)",
    },
  ];

  return (
    <section className="bg-[#f8fcff] pb-20 bg-section">
      <Breadcrumbs />
      <div className="container mx-auto px-6 vehicle-section">
        <CategoryCarousel
          title="Rent a Car With Driver"
          data={cars}
          openModal={openModal}
        />
        <CategoryCarousel
          title="Rent A Van With Driver"
          data={vans}
          openModal={openModal}
        />
        <CategoryCarousel
          title="Rent A Bus With Driver"
          data={buses}
          openModal={openModal}
        />
      </div>

      {/* -------------------- MODAL -------------------- */}
      {showModal && (
        <QuoteModal vehicle={selectedVehicle} closeModal={closeModal} />
      )}
    </section>
  );
}

/* ---------- Reusable Category Carousel ---------- */

function CategoryCarousel({ title, data, openModal }) {
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
            <VehicleCard item={item} openModal={openModal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

/* ---------- Vehicle Card ---------- */

function VehicleCard({ item, openModal }) {
  return (
    <div className="carousel-card bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition">
      <div className="relative h-48 w-full rounded-xl overflow-hidden flex items-center justify-center">
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

      <button
        className="btn-yellow mt-4 w-fit"
        onClick={() => openModal(item.title)}
      >
        Request A Free Quote
      </button>
    </div>
  );
}
/* ---------- Quote Modal Component ---------- */

function QuoteModal({ vehicle, closeModal }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Run reCAPTCHA v3
    const token = await grecaptcha.execute(
      "6LeGmxgsAAAAAL_OhPQVlaPjL-4ioJln-A5uStEQ",
      { action: "submit" }
    );

    const formData = new FormData(e.target);
    formData.append("vehicle", vehicle);
    formData.append("recaptcha", token);

    const res = await fetch("/api/send-quote", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-xl relative animate-fadeIn 
                  max-h-[100vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-[#1e3a5f]">
          Request A Free Quote
        </h2>

        {success && (
          <p className="text-green-600 mb-4 font-medium">
            ✅ Your quote request has been sent successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="vehicle" value={vehicle} />

          <div>
            <label className="font-medium">Name</label>
            <input name="name" type="text" className="inputBox" required />
          </div>

          <div>
            <label className="font-medium">Email</label>
            <input name="email" type="email" className="inputBox" required />
          </div>

          <div>
            <label className="font-medium">Phone</label>
            <input name="phone" type="tel" className="inputBox" required />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="font-medium">Adults</label>
              <input name="adults" type="number" className="inputBox" />
            </div>

            <div className="w-1/2">
              <label className="font-medium">Children</label>
              <input name="children" type="number" className="inputBox" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="font-medium">Arrival Date</label>
              <input name="arrival" type="date" className="inputBox" />
            </div>

            <div className="w-1/2">
              <label className="font-medium">Departure Date</label>
              <input name="departure" type="date" className="inputBox" />
            </div>
          </div>

          <div>
            <label className="font-medium">Country</label>
            <input name="country" type="text" className="inputBox" />
          </div>

          <div>
            <label className="font-medium">Message</label>
            <textarea name="message" rows="3" className="inputBox"></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1e3a5f] text-white py-3 rounded-xl hover:bg-[#162e4a] transition font-semibold"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
