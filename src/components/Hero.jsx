import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-section  ">
      <div className="h-[540px] w-full relative">
        <Image
          src="/hero.jpg"
          alt="Sri Lanka"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-6">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Sri Lanka Tour Packages
              </h1>
              <p className="mt-4 text-lg">
                Beach Walk Tours. Your journey to the best Sri Lanka
                experiences. Day tours, Transfers, Luxury cars and more.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#itineraries"
                  className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold"
                >
                  Browse Tours
                </a>
                <a
                  href="#vehicles"
                  className="inline-block border border-white px-6 py-3 rounded-md"
                >
                  Rent a Car
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
