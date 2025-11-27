"use client";
import "./TourQuote.css";

import { useState } from "react";

export default function QuoteModal({ tour, closeModal }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.target);

    const res = await fetch("/api/send-tour-quote", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset(); // clear form
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-xl relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-[#1e3a5f]">
          Request A Free Quote – {tour}
        </h2>

        {/* SUCCESS MESSAGE */}
        {success && (
          <p className="text-green-600 mb-4 font-medium">
            ✅ Your quote request has been sent successfully!
          </p>
        )}

        <form onSubmit={submitForm} className="space-y-4">
          <input type="hidden" name="tour" value={tour} />

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
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-semibold transition 
            ${loading ? "bg-gray-400" : "bg-[#1e3a5f] hover:bg-[#162e4a]"}`}
          >
            {loading ? "Sending..." : "Send Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
