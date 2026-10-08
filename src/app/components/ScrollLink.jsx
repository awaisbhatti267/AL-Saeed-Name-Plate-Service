"use client";

export default function ScrollLink({ targetId, className, children }) {
  return (
    <a
      href={`#${targetId}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }}
      className={className}
    >
      {children}
    </a>
  );
}
