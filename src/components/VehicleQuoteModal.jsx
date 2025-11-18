"use client";
import "./TourQuote.css";
import { useState } from "react";

export default function VehicleQuoteModal({ vehicle, closeModal }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Get reCAPTCHA v3 token
    const token = await grecaptcha.execute(
      "6Lf2yBAsAAAAABXXZVgXIFXMYbEqc1KWb_25yfbn",
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
      <div className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-xl relative animate-fadeIn max-h-[100vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-[#1e3a5f]">
          Request Quote
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
