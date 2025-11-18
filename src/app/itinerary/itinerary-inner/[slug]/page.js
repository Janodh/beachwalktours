import { tours } from "@/app/itinerary/tourData";
import TourHero from "./TourHero";
import TourSidebar from "./TourSidebar";
import TourDescription from "./TourDescription";
import TourItinerary from "./TourItinerary";
import TourIncludes from "./TourIncludes";
import CallToAction from "./CallToAction";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function TourInnerPage({ params }) {
  const { slug } = await params; // <-- FIXED

  const data = tours.find((t) => t.slug === slug);

  if (!data)
    return (
      <main>
        <Breadcrumbs />
        <div className="pt-28 text-center text-red-500 text-xl">
          Tour Not Found
        </div>
      </main>
    );

  return (
    <main>
      <Breadcrumbs />
      <div className="min-h-screen pt-28 bg-[#F5FAFD]">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-10">
            {data.title}
          </h1>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <TourHero images={data.images} />
            </div>

            <div className="lg:col-span-4">
              <TourSidebar pax={data.pax} days={data.days} />
            </div>
          </div>

          <TourDescription description={data.desc} />
          <TourItinerary items={data.itinerary} />
          <TourIncludes includes={data.includes} />
          <CallToAction />
        </div>
      </div>
    </main>
  );
}
