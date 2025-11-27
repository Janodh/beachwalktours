"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import VehicleQuoteModal from "@/components/VehicleQuoteModal";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Beach Walk Tours"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/vehicle-rent" className="hover:text-blue-600">
                Vehicles
              </Link>
            </li>
            <li>
              <Link href="/itinerary" className="hover:text-blue-600">
                Itineraries
              </Link>
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

          {/* Desktop Button */}
          <Link href="/request-quote">
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
              Request A Free Quote
            </button>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700 text-3xl focus:outline-none"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white shadow-lg border-t px-6 py-4 space-y-4 animate-slideDown">
            <Link href="/" className="block text-gray-700 font-semibold">
              Home
            </Link>
            <Link
              href="/vehicle-rent"
              className="block text-gray-700 font-semibold"
            >
              Vehicles
            </Link>
            <Link
              href="/itinerary"
              className="block text-gray-700 font-semibold"
            >
              Itineraries
            </Link>
            <Link href="/contact" className="block text-gray-700 font-semibold">
              Contact
            </Link>
            <Link href="/aboutus" className="block text-gray-700 font-semibold">
              About Us
            </Link>
            <Link href="/request-quote">
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
                Request A Free Quote
              </button>
            </Link>
          </div>
        )}
      </header>

      {/* Modal */}
    </>
  );
}
