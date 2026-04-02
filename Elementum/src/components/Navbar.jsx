// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative px-6 md:px-10 py-5 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-sans tracking-tight text-gray-900">
          Elementum
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-highlight transition">Home</a>
          <a href="#" className="hover:text-highlight transition">Studio</a>
          <a href="#" className="hover:text-highlight transition">Service</a>
          <a href="#" className="hover:text-highlight transition">Blog</a>
        </div>

        {/** Svg Icon */}
         {/* Mobile menu button */}
        <button
          className=" focus:outline-none text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
             <div>
            <img
            src="/bars.png"
            width={26}
            height={26}
            />
        </div>
        </button>
      </div>
       

       

      {/* Mobile Menu (collapsible) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 text-gray-700  pb-4 font-[var(--font-body) ">
          <a href="#" className="hover:text-highlight transition">Home</a>
          <a href="#" className="hover:text-highlight transition">Studio</a>
          <a href="#" className="hover:text-highlight transition">Service</a>
          <a href="#" className="hover:text-highlight transition">Blog</a>
        </div>
      )}
    </nav>
  );
}