"use client";

import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: "📍",
    title: "Our Location",
    detail: "Link Hassan Town, Kharak Awan Town",
    sub: "Lahore, Pakistan",
  },
  {
    icon: "📞",
    title: "Phone / WhatsApp",
    detail: "+92 300 12345678",
    sub: "Mon – Sat, 9AM – 5PM",
  },
  {
    icon: "📧",
    title: "Email Us",
    detail: "info@alsaeed.pk",
    sub: "We reply within 24 hours",
  },
  {
    icon: "🕐",
    title: "Working Hours",
    detail: "Mon – Saturday",
    sub: "9:00 AM – 5:00 PM",
  },
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("username"),
      email: formData.get("useremail"),
      phone: formData.get("userphone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // TODO: Replace with your actual API / Server Action
    try {
      await new Promise((r) => setTimeout(r, 1000)); // simulate network delay
      console.log("Form submitted:", data);
      setStatus("success");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-4 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          {/* ── LEFT: Info Panel ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Heading */}
            <div>
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
                Reach Out
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Let&apos;s Talk
              </h2>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Have a custom order in mind? Want a quote? Just drop us a
                message and we&apos;ll get back to you shortly.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {CONTACT_INFO.map(({ icon, title, detail, sub }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-yellow-400/50 transition-colors"
                >
                  <span className="text-2xl mt-0.5">{icon}</span>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                      {title}
                    </p>
                    <p className="text-white font-bold text-sm mt-0.5">{detail}</p>
                    <p className="text-slate-400 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-slate-700 flex-1 min-h-[160px] bg-slate-800 flex items-center justify-center relative">
              <iframe
                title="AL SAEED Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.5!2d74.3536!3d31.4728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLink+Hassan+Town%2C+Kharak+Awan+Town%2C+Lahore!5e0!3m2!1sen!2spk!4v1"
                className="w-full h-full min-h-[160px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── RIGHT: Form Panel ── */}
          <div className="lg:col-span-3 bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col">

            {/* Form header */}
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-white">
                Send Us a Message
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Fill in the details below and we&apos;ll respond within 24 hours.
              </p>
            </div>

            {/* Status banners */}
            {status === "success" && (
              <div className="mb-5 flex items-center gap-3 bg-green-900/40 border border-green-600 text-green-400 rounded-xl px-4 py-3 text-sm font-semibold">
                <span className="text-xl">✅</span>
                Your message was sent successfully! We&apos;ll be in touch soon.
              </div>
            )}
            {status === "error" && (
              <div className="mb-5 flex items-center gap-3 bg-red-900/40 border border-red-600 text-red-400 rounded-xl px-4 py-3 text-sm font-semibold">
                <span className="text-xl">❌</span>
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">

              {/* Name + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="username" className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">👤</span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Your name"
                      required
                      className="w-full pl-9 pr-4 py-3 bg-slate-900 text-white rounded-xl border border-slate-600 placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="userphone" className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">📱</span>
                    <input
                      type="tel"
                      name="userphone"
                      id="userphone"
                      placeholder="+92 300 12345678"
                      className="w-full pl-9 pr-4 py-3 bg-slate-900 text-white rounded-xl border border-slate-600 placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="useremail" className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">✉️</span>
                  <input
                    type="email"
                    name="useremail"
                    id="useremail"
                    placeholder="your@email.com"
                    required
                    className="w-full pl-9 pr-4 py-3 bg-slate-900 text-white rounded-xl border border-slate-600 placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Subject dropdown */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Subject <span className="text-red-400">*</span>
                </label>
                <select
                  name="subject"
                  id="subject"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-slate-900 text-white rounded-xl border border-slate-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm appearance-none"
                >
                  <option value="" disabled className="text-slate-500">
                    Select a subject...
                  </option>
                  <option value="order">Place an Order</option>
                  <option value="quote">Request a Quote</option>
                  <option value="custom">Custom Design Inquiry</option>
                  <option value="delivery">Delivery / Shipping</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Describe your requirement — plate type, size, name to engrave, quantity..."
                  rows={5}
                  required
                  className="w-full p-4 bg-slate-900 text-white rounded-xl border border-slate-600 placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all resize-none text-sm flex-1"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-900 disabled:cursor-not-allowed text-yellow-300 font-bold py-3.5 rounded-xl shadow-lg shadow-red-900/30 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 text-base"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>🚀</span> Send Message
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
