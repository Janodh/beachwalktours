"use client";
import "./contact.css";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Load reCAPTCHA v3
    const token = await grecaptcha.execute(
      "6LeGmxgsAAAAAL_OhPQVlaPjL-4ioJln-A5uStEQ",
      { action: "contact_form" }
    );

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      token,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    }
  }

  return (
    <section className="contact-page bg-section">
      <Breadcrumbs />

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p className="subtitle">
            We’d love to hear from you! Reach out for bookings, tour packages,
            or custom travel inquiries.
          </p>

          <div className="info-details">
            <p>
              📍{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Beach+Walk+Tours,+Dungalpitiya,+Negombo,+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Beach Walk Tours, Dungalpitiya, Negombo, Sri Lanka
              </a>
            </p>

            <p>
              📞{" "}
              <a
                href="tel:+94770298911"
                className="text-blue-600 hover:underline"
              >
                +94 77 029 8911
              </a>{" "}
              /{" "}
              <a
                href="tel:+94773235936"
                className="text-blue-600 hover:underline"
              >
                +94 77 323 5936
              </a>
            </p>

            <p>
              ✉️{" "}
              <a
                href="mailto:info@beachwalktours.com"
                className="text-blue-600 hover:underline"
              >
                info@beachwalktours.com
              </a>
            </p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126670.38394537024!2d79.77585101623751!3d7.189441092514729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c6bb2f73b%3A0xa51626e908186f3e!2sNegombo!5e0!3m2!1sen!2slk!4v1764156025185!5m2!1sen!2slk"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>

          {success && (
            <p className="success-msg">✅ Message sent successfully!</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input name="name" type="text" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input name="subject" type="text" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" required></textarea>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
