import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Beach Walk Tours" className="h-16 w-auto" />
        </a>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
          <li>
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="/vehicle-rent" className="hover:text-blue-600">
              Vehicles
            </a>
          </li>
          <li>
            <a href="/itinerary" className="hover:text-blue-600">
              Itineraries
            </a>
          </li>

          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/aboutus" className="hover:text-blue-600">
              About Us
            </Link>
          </li>
        </ul>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/xxxxxxxxxx"
          className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
