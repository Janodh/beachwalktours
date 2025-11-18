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
      "6Lf2yBAsAAAAABXXZVgXIFXMYbEqc1KWb_25yfbn",
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
            <p>📍 Galle Road, Colombo, Sri Lanka</p>
            <p>📞 +94 77 123 4567</p>
            <p>✉️ info@beachwalktours.com</p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=Colombo,Sri%20Lanka&output=embed"
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
