import "./aboutus.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs />

      {/* Intro */}
      <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 mb-20">
        <h2 className="text-center text-lg text-[#1e3a5f] font-semibold">
          Beach Walk Tours:
          <br />
          Your Journey to Sun-kissed Beaches of Sri Lanka.
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed text-justify">
          We at Beach Walk are one of the leading tour operators in Sri Lanka
          and we believe that travel is not just about lifelong memorable
          moments but new, soul enriching experiences. We craft outstanding Sri
          Lanka tour packages, which are full of unique and immersive
          experiences. From the very start of your journey with us, you will
          find a smooth blend of luxury, authenticity, and personalized service
          as we work to exceed all of your travel expectations at every
          juncture.
        </p>
        <p className="mt-3 text-gray-600 leading-relaxed text-justify">
          Our passionate team, consist of locals who are extremely devoted to
          showing you the island's cultural richness, striking landscapes, and
          warm hospitality, is what truly sets us apart. With our best chauffeur
          service in Sri Lanka, we offer insider access to hidden gems, secret
          paths, and off-the-beaten-path adventures that will leave you in awe.
        </p>
        <p className="mt-3 text-gray-600 leading-relaxed text-justify">
          Your extraordinary journey starts here with Beach Walk.
        </p>
      </section>

      <section className="grid md:grid-cols-2 max-w-6xl mx-auto gap-10 px-6 items-center mb-24">
        <img src="/ab.png" alt="Traveler" className="rounded-xl w-full" />
        <div>
          <span className="text-sm font-semibold text-[#1e3a5f]">
            Our Location
          </span>
          <h3 className="text-2xl font-bold text-[#1e3a5f] mt-2">
            Our Location – Negombo
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
            Located in the coastal city of Negombo, Beach Walk Tours serves as a
            gateway to Sri Lanka’s most beautiful shorelines. With convenient
            access to the airport and popular beach destinations, we ensure your
            holiday begins smoothly and comfortably.
          </p>
        </div>
      </section>

      {/* Journey + Founder */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 mb-24">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <span className="text-sm font-semibold text-[#1e3a5f]">About Us</span>
          <h3 className="text-2xl font-bold text-[#1e3a5f] mt-2">
            Our Journey
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
            Beach Walk Tours was founded in Negombo with a vision to provide
            travelers with exceptional tour experiences across Sri Lanka’s
            coastlines. Over the years, we have expanded our services to include
            customized tours, airport transfers, and curated excursions.
          </p>
          <p className="mt-2 text-gray-600 leading-relaxed text-justify">
            With a passion for hospitality, our team delivers quality service
            built on trust, care, and professionalism.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <span className="text-sm font-semibold text-[#1e3a5f]">Founder</span>
          <h3 className="text-2xl font-bold text-[#1e3a5f] mt-2">
            Meet the Founder
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
            Our founder brings years of experience in tourism and hospitality,
            ensuring every guest receives exceptional service. With deep
            knowledge of Sri Lanka’s destinations, routes, culture, and people,
            he built Beach Walk Tours with the mission of making travel
            memorable, easy, and reliable for visitors from around the world.
          </p>
          <p className="mt-4 font-semibold text-[#1e3a5f]">Shamith Perera</p>
          <p className="text-sm text-gray-500">Founder, Beach Walk Tours</p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h3 className="text-center text-3xl font-bold text-[#1e3a5f] mb-10">
          What We Offer
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {[
              "Sri Lanka Tour Packages",
              "Sri Lanka Chauffeur Service",
              "Visa Assistance in Sri Lanka",
              "Day Tours & Excursions",
              "Hotel Reservations",
            ].map((item, i) => (
              <div key={i}>
                <h4 className="font-semibold text-[#1e3a5f]">
                  {String(i + 1).padStart(2, "0")}. {item}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed text-justify mt-1">
                  We provide personalized and reliable services to ensure your
                  journey is smooth and enjoyable.
                </p>
              </div>
            ))}
          </div>

          <img
            src="/airplane.png"
            className="w-full rounded-xl"
            alt="Airplane"
          />
        </div>
      </section>

      {/* A Decade of Excellence */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-24">
        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
          A Decade of Excellence
        </h3>
        <p className="text-gray-600 leading-relaxed">
          With over ten years in the travel industry, we have proudly served
          thousands of tourists from across the world. Our dedication to
          customer satisfaction and safe travel has earned Beach Walk Tours a
          reputation for excellence.
        </p>
      </section>

      {/* Contact Cards */}
  <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 mb-24">

  {/* Phone */}
  <a
    href="tel:+94770298911"
    className="bg-white shadow-lg rounded-2xl p-6 text-center block hover:shadow-xl transition"
  >
    <FaPhoneAlt className="text-[#1e3a5f] text-3xl mx-auto mb-3" />
    <p className="font-semibold text-[#1e3a5f]">+9477 029 8911</p>
    <p className="text-gray-500 text-sm mt-2">Call for inquiries</p>
  </a>

  {/* Email */}
  <a
    href="mailto:info@beachwalktours.com"
    className="bg-white shadow-lg rounded-2xl p-6 text-center block hover:shadow-xl transition"
  >
    <FaEnvelope className="text-[#1e3a5f] text-3xl mx-auto mb-3" />
    <p className="font-semibold text-[#1e3a5f]">info@beachwalktours.com</p>
    <p className="text-gray-500 text-sm mt-2">Write to us</p>
  </a>

  {/* Location */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Beach+Walk+Tours,+Dungalpitiya,+Negombo,+Sri+Lanka"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white shadow-lg rounded-2xl p-6 text-center block hover:shadow-xl transition"
  >
    <FaMapMarkerAlt className="text-[#1e3a5f] text-3xl mx-auto mb-3" />
    <p className="font-semibold text-[#1e3a5f]">
      Beach Walk Tours, Dungalpitiya, Negombo, Sri Lanka
    </p>
    <p className="text-gray-500 text-sm mt-2">Visit us anytime</p>
  </a>

</section>

    </main>
  );
}
