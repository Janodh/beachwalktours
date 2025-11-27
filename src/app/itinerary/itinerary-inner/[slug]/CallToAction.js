"use client";

import { useState } from "react";
import Link from "next/link";
import VehicleQuoteModal from "@/components/VehicleQuoteModal";

export default function CallToAction() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="my-20 text-center">
        <p className="uppercase text-sm tracking-widest text-blue-600">
          Call to action
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-[#1e3a5f]">
          Do you have any questions?
          <br />
          We are available 24/7
        </h2>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl">
            Get in Touch
          </button>

          {/* OPEN MODAL */}
          <Link href="/request-quote" passHref>
            <button className="border border-blue-500 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">
              Request A Free Quote →
            </button>
          </Link>
        </div>
      </section>

      {/* SHOW MODAL */}
      {/* {showModal && (
        <VehicleQuoteModal
          vehicle="General Inquiry"
          closeModal={() => setShowModal(false)}
        />
      )} */}
    </>
  );
}
