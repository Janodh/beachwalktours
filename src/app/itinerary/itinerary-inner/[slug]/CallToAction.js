export default function CallToAction() {
  return (
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
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-xl">
          Get in Touch
        </button>
        <button className="border border-yellow-500 text-yellow-600 px-6 py-3 rounded-xl">
          Request Quote →
        </button>
      </div>
    </section>
  );
}
