import ContactForm from "../../components/ContactForm";
export default function Contact() {
  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-10">
          Have questions or need custom travel assistance? Send us a message,
          and we’ll get back to you shortly.
        </p>

        <ContactForm />

        <div className="text-center text-sm text-gray-500 mt-10">
          <p>📍 Beach Walk Tours, Colombo, Sri Lanka</p>
          <p>📞 +94 77 123 4567 | ✉️ info@beachwalktours.com</p>
        </div>
      </div>
    </section>
  );
}
