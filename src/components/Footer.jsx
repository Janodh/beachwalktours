import "./footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h4>Beach Walk Tours</h4>
          <p>
            Discover Sri Lanka with our trusted drivers and tailor-made tour
            packages. Comfort, culture, and adventure — all in one journey.
          </p>
        </div>

        <div>
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/itinerary">Tour Packages</a>
            </li>
            <li>
              <a href="/vehicle-rent">Car And Driver Rental</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h5>Get In Touch</h5>
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

          {/* Phone */}
          <p>
            📞{" "}
            <a
              href="tel:+9477 029 8911"
              className="text-blue-600 hover:underline"
            >
              +9477 029 8911
            </a>{" "}
            /{" "}
            <a
              href="tel:+9477 323 5936"
              className="text-blue-600 hover:underline"
            >
              +9477 323 5936
            </a>
          </p>

          {/* Email */}
          <p>
            ✉️{" "}
            <a
              href="mailto:info@beachwalktours.com"
              className="text-blue-600 hover:underline"
            >
              info@beachwalktours.com
            </a>
          </p>

          <div className="social-icons">
            {/* Facebook */}
            <a
              href="https://web.facebook.com/beachwalktours"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Beach Walk Tours Facebook"
            >
              <FaFacebookF />
            </a>

            {/* Instagram (replace if you have the link) */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/94770298911"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Beach Walk Tours. All rights reserved.
      </div>
    </footer>
  );
}
