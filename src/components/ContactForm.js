"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center items-center py-12 bg-gray-900 text-white"
    >
      <form
        action="https://formspree.io/f/myyobnrq"
        method="POST"
        className="bg-gray-800 p-5 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-3 text-center">Contact Me</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 mb-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 mb-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          className="w-full p-2 mb-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded text-white font-semibold transition-transform transform hover:scale-105"
        >
          Send Message 🚀
        </button>
      </form>
    </section>
  );
}
