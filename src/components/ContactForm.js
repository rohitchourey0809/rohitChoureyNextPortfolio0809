"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-white">Contact Me</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
}
