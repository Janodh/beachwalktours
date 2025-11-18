export default function TourDescription({ description }) {
  return (
    <section className="my-14">
      <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
        Description of Itinerary
      </h2>
      <p className="text-gray-600 leading-7 whitespace-pre-line">
        {description}
      </p>
    </section>
  );
}
