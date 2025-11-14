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
              <a href="/itineraries">Itineraries</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h5>Get In Touch</h5>
          <p>📍 Galle Road, Colombo</p>
          <p>📞 +94 77 123 4567</p>
          <p>✉️ info@beachwalktours.com</p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
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
