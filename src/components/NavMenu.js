"use client";
import { useState, useCallback } from "react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking a link
    }
  }, []);

  // Navigation links
  const navLinks = [
    { id: "profile", label: "Profile" },
    { id: "skills", label: "Skills" },
    { id: "work-experience", label: "Work Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2" aria-label="Home">
            <FaUserCircle className="text-3xl text-blue-400" />
            <h1 className="text-xl font-bold">Rohit Chourey</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="hover:underline focus:underline transition duration-300"
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-700 mt-2 p-4 rounded-lg space-y-4 text-center transition-all duration-300">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="block w-full py-2 hover:bg-gray-600 focus:bg-gray-600 rounded-lg"
                aria-label={`Navigate to ${label}`}
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