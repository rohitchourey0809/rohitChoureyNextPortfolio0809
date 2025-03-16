"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile after clicking a link
    }
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Rohit Choure</h1>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
        {/* Navigation Links */}
        <div className={`md:flex ${isOpen ? "block" : "hidden"} space-x-6`}>
          <button
            onClick={() => scrollToSection("home")}
            className="text-white hover:text-blue-400"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("profile")}
            className="text-white hover:text-blue-400"
          >
            Profile
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white hover:text-blue-400"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-blue-400"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
