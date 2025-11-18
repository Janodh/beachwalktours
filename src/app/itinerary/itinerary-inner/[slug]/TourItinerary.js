"use client";

import { useState } from "react";

export default function TourItinerary({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="my-14">
      <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-6">Itinerary</h2>

      <div className="bg-white shadow-xl rounded-2xl divide-y">
        {items.map((item, i) => (
          <div key={i} className="p-6">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex justify-between w-full text-left text-lg font-semibold text-[#1e3a5f]"
            >
              {item.day}
              <span>{open === i ? "✖️" : "➕"}</span>
            </button>

            {open === i && (
              <p className="mt-4 text-gray-600 whitespace-pre-line">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
