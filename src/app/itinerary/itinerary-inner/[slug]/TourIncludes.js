export default function TourIncludes({ includes }) {
  return (
    <section className="my-14">
      <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-6">
        Price Includes
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {includes.map((inc, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
            <div className="text-4xl mb-3">{inc.icon}</div>
            <h3 className="font-semibold text-[#1e3a5f]">{inc.title}</h3>
            <p className="text-gray-600 text-sm">{inc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
