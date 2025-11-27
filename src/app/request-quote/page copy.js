"use client";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ form state for first_name, last_name, name
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    name: "",
  });

  // ✅ handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    // combine first + last name
    if (name === "first_name" || name === "last_name") {
      updatedForm.name =
        `${updatedForm.first_name} ${updatedForm.last_name}`.trim();
    }

    setForm(updatedForm);
  };

  // ✅ submit handler
  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const token = await grecaptcha.execute(
      "6LeGmxgsAAAAAL_OhPQVlaPjL-4ioJln-A5uStEQ",
      { action: "submit" }
    );

    const formData = new FormData(e.target);
    formData.append("recaptcha", token);

    const res = await fetch("/api/send-tour-quote", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
      setForm({ first_name: "", last_name: "", name: "" }); // reset state
    }
  }

  return (
    <div className="container mx-auto px-4 mt-10">
      <Breadcrumbs />

      <p className="text-lg text-gray-700 mt-4">
        Please fill out the form below for a general quote request.
      </p>

      <form onSubmit={submitForm} className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT CARD */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

            <div className="mb-4">
              <label className="font-medium">First Name</label>
              <input
                name="first_name"
                className="inputBox"
                required
                value={form.first_name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="font-medium">Last Name</label>
              <input
                name="last_name"
                className="inputBox"
                required
                value={form.last_name}
                onChange={handleChange}
              />
            </div>

            {/* hidden full name */}
            <input type="hidden" name="name" value={form.name} />

            <div className="mb-4">
              <label className="font-medium">Country</label>
              <input name="country" className="inputBox" required />
            </div>

            <div className="mb-4">
              <label className="font-medium">Email</label>
              <input name="email" type="email" className="inputBox" required />
            </div>

            <div className="mb-4">
              <label className="font-medium">Phone</label>
              <input name="phone" type="tel" className="inputBox" required />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Trip Details</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-medium">Adults</label>
                <input
                  name="adults"
                  type="number"
                  min="1"
                  className="inputBox"
                />
              </div>

              <div>
                <label className="font-medium">Children</label>
                <input
                  name="children"
                  type="number"
                  min="0"
                  className="inputBox"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="font-medium">From</label>
                <input name="arrival" type="date" className="inputBox" />
              </div>

              <div>
                <label className="font-medium">To</label>
                <input name="departure" type="date" className="inputBox" />
              </div>
            </div>

            <div className="mt-4">
              <label className="font-medium">Message</label>
              <textarea name="message" rows="4" className="inputBox"></textarea>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-6 py-3 rounded-xl text-white font-semibold transition ${
            loading ? "bg-gray-400" : "bg-blue-800 hover:bg-blue-900"
          }`}
        >
          {loading ? "Sending..." : "Request A Tailored Solution"}
        </button>

        {/* SUCCESS MESSAGE */}
        {success && (
          <p className="text-green-600 font-semibold mt-3">
            Your request has been sent successfully!
          </p>
        )}
        <div className="mt-8 mb-8 bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Quote Includes:</h3>

          <ul className="space-y-2 text-gray-700">
            <li>A/C Vehicle</li>
            <li>English Speaking Tourist Chauffeur</li>
            <li>Fuel, Tolls, Parking Expenses</li>
            <li>Chauffeur Accommodation & Meals</li>
            <li>Hotel Accommodation & Meals (On Request)</li>
            <li>Travel Insurance</li>
            <li>All Government Taxes</li>
          </ul>

          <div className="mt-4 bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg">
            <strong>No Hidden Charges At All.</strong>
          </div>
        </div>
      </form>
    </div>
  );
}
