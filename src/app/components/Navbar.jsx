"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "contact", name: "Contact" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar bg after scrolling 20px
      setScrolled(window.scrollY > 20);

      // Active section tracking
      const scrollPosition = window.scrollY + 200;
      NAV_LINKS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 select-none transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-xl"
          : "bg-red-600 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">

        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
          className="flex items-center gap-3 group"
        >
          <div className="relative hidden sm:flex items-center justify-center">
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
            <Image
              src="/ASN.webp"
              alt="AL SAEED Logo"
              width={50}
              height={50}
              className="relative object-contain rounded-full p-0.5"
            />
          </div>
          <h2 className="font-bold text-yellow-300 group-hover:text-amber-200 transition-colors text-sm sm:text-lg md:text-xl tracking-wide">
            AL SAEED NAME PLATE SERVICE
          </h2>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-base font-semibold">
            {NAV_LINKS.map(({ id, name }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                    className={`transition-all pb-1 ${
                      isActive
                        ? "text-yellow-300 font-bold border-b-2 border-yellow-300"
                        : "text-white hover:text-yellow-300 hover:border-b-2 border-yellow-300"
                    }`}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA button */}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-5 py-2 rounded-lg text-sm shadow-md active:scale-95 transition-all duration-200"
          >
            Order Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md bg-red-700 hover:bg-slate-800 text-yellow-300 border border-red-500 focus:outline-none active:scale-95 transition-all"
        >
          <svg
            className="w-6 h-6 fill-current pointer-events-none"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900 border-t-2 border-yellow-400 shadow-2xl">
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map(({ id, name }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      scrollTo(id);
                    }}
                    className={`block py-3 px-6 text-center text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-red-600 text-yellow-300"
                        : "text-white hover:bg-slate-800 hover:text-yellow-300"
                    }`}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
            {/* Mobile Order Now */}
            <li className="px-6 py-3">
              <button
                onClick={() => { setIsOpen(false); scrollTo("contact"); }}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-2 rounded-lg text-sm active:scale-95 transition-all"
              >
                Order Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
