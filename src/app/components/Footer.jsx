"use client";

import Image from "next/image";

const QUICK_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact" },
];

const PRODUCTS = [
  "Acrylic House Name Plate",
  "LED Illuminated Plate",
  "Steel Office Name Plate",
  "Wooden Engraved Plate",
  "Vehicle Number Plate",
  "Custom Gate Sign",
];

const CURRENT_YEAR = new Date().getFullYear();

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/ASN.webp"
              alt="AL SAEED Logo"
              width={50}
              height={40}
              className="rounded-full object-contain"
            />
            <span className="font-extrabold text-yellow-300 text-lg leading-tight">
              AL SAEED
              <br />
              <span className="text-sm font-semibold text-slate-400 tracking-wider">
                NAME PLATE SERVICE
              </span>
            </span>
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            Premium name plates crafted with precision for homes, offices, and
            businesses across Pakistan. Quality you can see, durability you can
            trust.
          </p>

          {/* Social links */}
          <div className="flex gap-3 mt-1">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/alsaeed.nameplate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4 fill-current text-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-slate-800 hover:bg-pink-600 p-2 rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/92300123456789"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="bg-slate-800 hover:bg-green-600 p-2 rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4 fill-current text-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.526 5.855L.057 23.25a.75.75 0 00.916.916l5.395-1.469A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.677-.524-5.198-1.433l-.37-.222-3.84 1.045 1.045-3.84-.222-.37A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 uppercase tracking-widest">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="text-slate-400 hover:text-yellow-300 text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="text-red-500 group-hover:translate-x-1 transition-transform inline-block">
                    ›
                  </span>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 uppercase tracking-widest">
            Our Products
          </h3>
          <ul className="flex flex-col gap-3">
            {PRODUCTS.map((product) => (
              <li
                key={product}
                className="text-slate-400 text-sm flex items-center gap-2"
              >
                <span className="text-red-500">›</span>
                {product}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 uppercase tracking-widest">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-sm text-slate-400">
              <span className="text-yellow-400 text-lg mt-0.5" aria-hidden="true">📍</span>
              <span>Link Hassan Town, Kharak Awan Town, Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-400">
              <span className="text-yellow-400 text-lg" aria-hidden="true">📞</span>
              <a
                href="tel:+923004513694"
                className="hover:text-yellow-300 transition-colors"
              >
                +92 300 123456789
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-400">
              <span className="text-yellow-400 text-lg" aria-hidden="true">📧</span>
              <a
                href="mailto:info@alsaeed.pk"
                className="hover:text-yellow-300 transition-colors"
              >
                info@alsaeed.pk
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-400">
              <span className="text-yellow-400 text-lg" aria-hidden="true">🕐</span>
              <span>Mon – Sat: 9:00 AM – 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>&copy; {CURRENT_YEAR} AL SAEED Name Plate Service. All rights reserved.</p>
          <p>
            Made with ❤️ in{" "}
            <span className="text-yellow-400 font-semibold">Lahore, Pakistan</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
