export default function ContactForm() {
  return (
    <form className="bg-white shadow rounded-lg p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Your full name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows="5"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
      >
        Send Message
      </button>
    </form>
  );
}
