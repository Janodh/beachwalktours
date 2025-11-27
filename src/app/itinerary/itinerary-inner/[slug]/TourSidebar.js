"use client";

import { useState } from "react";
import QuoteModal from "@/components/TourQuote";

export default function TourSidebar({ pax, days, tourName }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="bg-white shadow-lg rounded-2xl p-6 sticky top-32">
        <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">
          Tour Details
        </h3>

        <ul className="space-y-4 text-gray-700">
          <li className="flex justify-between border-b pb-3">
            <span className="font-medium">Duration:</span>
            <span>{days}</span>
          </li>

          <li className="flex justify-between border-b pb-3">
            <span className="font-medium">Group Size:</span>
            <span>{pax}</span>
          </li>
        </ul>

        <button
          onClick={openModal}
          className="mt-6 w-full py-3 bg-[#1e3a5f] hover:bg-[#162f4b] text-white font-semibold rounded-xl transition"
        >
          Book This Tour
        </button>
      </div>

      {/* Quote Modal */}
      {showModal && <QuoteModal tour={tourName} closeModal={closeModal} />}
    </>
  );
}
