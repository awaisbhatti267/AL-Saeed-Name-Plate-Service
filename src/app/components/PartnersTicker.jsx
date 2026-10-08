"use client";

import { useEffect } from "react";

const PARTNERS = [
  {
    name: "Transfopower",
    subtitle: "Committed to Engineering Excellence",
    nameColor: "#1B3A8C",
    url: "https://www.transfopower.com.pk",
    logo: (
      <svg viewBox="0 0 80 80" width="48" height="48" aria-hidden="true">
        <polygon points="40,4 76,40 40,76 4,40" fill="#1B3A8C" />
        <polygon points="44,18 32,42 42,42 36,62 52,36 41,36" fill="#E63027" />
      </svg>
    ),
  },
  {
    name: "PEL",
    subtitle: "Pak Elektron Limited",
    nameColor: "#1A7DC4",
    url: "https://www.pel.com.pk",
    logo: (
      <svg viewBox="0 0 80 80" width="48" height="48" aria-hidden="true">
        <circle cx="40" cy="40" r="36" fill="none" stroke="#1A7DC4" strokeWidth="8" />
        <circle cx="40" cy="40" r="26" fill="white" />
        <text x="40" y="47" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1A7DC4" fontFamily="Arial, sans-serif">PEL</text>
      </svg>
    ),
  },
  {
    name: "Trafo Link",
    subtitle: "Pvt Ltd — Engineering Excellence",
    nameColor: "#C0392B",
    url: "https://www.trafolink.com",
    logo: (
      <svg viewBox="0 0 80 80" width="48" height="48" aria-hidden="true">
        <circle cx="40" cy="40" r="22" fill="none" stroke="#4A7FA5" strokeWidth="6" />
        <circle cx="40" cy="40" r="10" fill="#4A7FA5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <line
              key={deg}
              x1={40 + 22 * Math.cos(rad)} y1={40 + 22 * Math.sin(rad)}
              x2={40 + 30 * Math.cos(rad)} y2={40 + 30 * Math.sin(rad)}
              stroke="#4A7FA5" strokeWidth="5" strokeLinecap="round"
            />
          );
        })}
        <polygon points="43,22 35,40 41,40 37,58 49,36 42,36" fill="#C0392B" />
      </svg>
    ),
  },
  {
    name: "WAPDA",
    subtitle: "Water & Power Development Authority",
    nameColor: "#006633",
    url: "https://www.wapda.gov.pk",
    logo: (
      <svg viewBox="0 0 80 80" width="48" height="48" aria-hidden="true">
        <circle cx="40" cy="40" r="34" fill="#006633" />
        <text x="40" y="38" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">WAPDA</text>
        <text x="40" y="54" textAnchor="middle" fontSize="8" fill="#90EE90" fontFamily="Arial, sans-serif">PAKISTAN</text>
      </svg>
    ),
  },
  {
    name: "Govt of Punjab",
    subtitle: "Government of Punjab, Pakistan",
    nameColor: "#1a5c2a",
    url: "https://www.punjab.gov.pk",
    logo: (
      <svg viewBox="0 0 80 80" width="48" height="48" aria-hidden="true">
        <circle cx="40" cy="40" r="36" fill="#1a5c2a" />
        <circle cx="40" cy="40" r="22" fill="none" stroke="white" strokeWidth="3" />
        <circle cx="50" cy="40" r="18" fill="#1a5c2a" />
        <polygon points="30,26 31.8,31.5 37.5,31.5 33,35 34.8,40.5 30,37 25.2,40.5 27,35 22.5,31.5 28.2,31.5" fill="white" />
      </svg>
    ),
  },
  {
    name: "LESCO",
    subtitle: "Lahore Electric Supply Company",
    nameColor: "#003087",
    url: "https://www.lesco.gov.pk",
    logo: (
      <svg viewBox="0 0 80 80" width="48" height="48" aria-hidden="true">
        <rect x="8" y="8" width="64" height="64" rx="8" fill="#003087" />
        <text x="40" y="40" textAnchor="middle" fontSize="15" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">LESCO</text>
        <text x="40" y="55" textAnchor="middle" fontSize="7" fill="#aabbcc" fontFamily="Arial, sans-serif">LAHORE</text>
      </svg>
    ),
  },
];

// Triplicate for perfectly seamless loop
const TICKER_ITEMS = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export default function PartnersTicker() {
  useEffect(() => {
    const styleId = "ticker-keyframe";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes ticker {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-33.333%); }
      }
      .ticker-track {
        animation: ticker 30s linear infinite;
      }
      .ticker-track:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section
      style={{ backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}
      className="py-12 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
          Trusted By
        </span>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
          Our Business Partners
        </h2>
      </div>

      {/* Ticker wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div
          style={{ background: "linear-gradient(to right, #f8fafc, transparent)" }}
          className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        />
        <div
          style={{ background: "linear-gradient(to left, #f8fafc, transparent)" }}
          className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        />

        {/* Scrolling strip */}
        <div className="ticker-track" style={{ display: "flex", width: "max-content" }}>
          {TICKER_ITEMS.map((partner, i) => (
            <a
              key={`${partner.name}-${i}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${partner.name}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                margin: "0 24px",
                padding: "16px 24px",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                border: "1px solid #f1f5f9",
                minWidth: "220px",
                userSelect: "none",
                textDecoration: "none",
                transition: "box-shadow 0.2s, border-color 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.13)";
                e.currentTarget.style.borderColor = "#fbbf24";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderColor = "#f1f5f9";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {partner.logo}
              <div>
                <p style={{ fontWeight: 800, fontSize: "15px", color: partner.nameColor, lineHeight: 1.2 }}>
                  {partner.name}
                </p>
                <p style={{ color: "#94a3b8", fontSize: "11px", marginTop: "3px", maxWidth: "130px", lineHeight: 1.4 }}>
                  {partner.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
