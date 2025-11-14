import "./contact.css";
import Breadcrumbs from "@/components/Breadcrumbs";
export default function Contact() {
  return (
    <section className="contact-page bg-section  ">
      <Breadcrumbs />
      <div className="contact-container">
        {/* Left Side – Info */}
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
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Right Side – Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Type your message..."
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
