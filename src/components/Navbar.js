"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Rohit Choure</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} space-x-6`}>
          <Link href="/" className="text-white hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-400">
            About
          </Link>
          <Link href="/projects" className="text-white hover:text-blue-400">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
