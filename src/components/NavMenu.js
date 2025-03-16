"use client";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md fixed top-0 w-full z-50 backdrop-blur-lg bg-opacity-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <FaUserCircle className="text-3xl text-blue-400" />
            <h1 className="text-xl font-semibold tracking-wide">
              Rohit Chourey
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {[
            { id: "profile", label: "About Me" },
            { id: "skills", label: "Skills" },
            { id: "work-experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="hover:text-blue-400 transition duration-300"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-700 mt-2 p-4 rounded-lg space-y-4 text-center transition-all duration-300">
          {[
            { id: "profile", label: "About Me" },
            { id: "skills", label: "Skills" },
            { id: "work-experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="block w-full py-2 hover:bg-gray-600 rounded-lg text-lg"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavMenu;
