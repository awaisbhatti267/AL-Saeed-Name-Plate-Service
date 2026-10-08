import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";
import ScrollLink from "@/app/components/ScrollLink";
import PartnersTicker from "@/app/components/PartnersTicker";

// Product data
const PRODUCTS = [
  {
    id: 1,
    name: "Acrylic House Name Plate",
    desc: "Premium acrylic finish with golden lettering. Perfect for home entrances.",
    price: "Rs. 1,500",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "LED Illuminated Plate",
    desc: "Glowing LED backlit name plate for a modern, eye-catching look at night.",
    price: "Rs. 3,200",
    img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Steel Office Name Plate",
    desc: "Brushed stainless steel desk plate, ideal for corporate offices.",
    price: "Rs. 2,100",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Wooden Engraved Plate",
    desc: "Laser engraved on natural wood — gives a warm, classic feel.",
    price: "Rs. 1,800",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Vehicle Number Plate",
    desc: "Embossed vehicle registration plates — durable and government compliant.",
    price: "Rs. 950",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Custom Gate Sign",
    desc: "Large outdoor gate signs with weather-resistant coating.",
    price: "Rs. 4,500",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop",
  },
];

// Why choose us features
const FEATURES = [
  {
    icon: "🏆",
    title: "Premium Quality",
    desc: "We use top-grade materials — acrylic, steel, wood, and LED — ensuring every plate lasts for years.",
  },
  {
    icon: "✏️",
    title: "Fully Custom",
    desc: "Any name, any font, any color. We craft exactly what you envision.",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "Orders dispatched within 2–3 working days across Pakistan.",
  },
  {
    icon: "💰",
    title: "Affordable Prices",
    desc: "Competitive rates without compromising on finish or quality.",
  },
];

export default function HomePage() {
  return (
    <main>

      {/* ─── HERO SECTION ─── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-start items-center text-center px-6 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white overflow-hidden pt-28 pb-16"
      >
        {/* Background decorative blurs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-red-600 text-yellow-300 text-sm font-semibold px-4 py-1 rounded-full mb-6 tracking-widest uppercase">
            Lahore, Pakistan
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Premium Name Plates <br />
            <span className="text-yellow-300">Crafted For You</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
            From elegant home door plates to illuminated office signs — AL SAEED delivers
            quality name plates for every need, fully customised and delivered fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScrollLink
              targetId="contact"
              className="bg-red-600 hover:bg-red-700 text-yellow-300 font-bold px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95"
            >
              Order Now
            </ScrollLink>
            <ScrollLink
              targetId="about"
              className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-slate-900 font-bold px-8 py-4 rounded-xl transition-all active:scale-95"
            >
              Learn More
            </ScrollLink>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative z-10 mt-16 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop"
            alt="Name plate workshop"
            width={800}
            height={400}
            className="w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* ─── PARTNERS TICKER ─── */}
      <PartnersTicker />

      {/* ─── PRODUCTS SECTION ─── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              Our Products
            </h2>
            <p className="text-slate-500 text-lg">
              Explore our range of name plates for every purpose and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{product.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-600 font-extrabold text-lg">{product.price}</span>
                    <ScrollLink
                      targetId="contact"
                      className="text-sm bg-red-600 hover:bg-red-700 text-yellow-300 font-semibold px-4 py-2 rounded-lg transition-all active:scale-95"
                    >
                      Order
                    </ScrollLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Image side */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=500&fit=crop"
              alt="Our workshop"
              width={700}
              height={500}
              className="w-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="w-full lg:w-1/2">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
              AL SAEED Name Plate Service
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Based in Lahore (Link Hassan Town, Kharak Awan Town), we have been crafting high-quality name plates for homes,
              offices, and businesses for over a decade. Our skilled team uses precision
              tools and premium materials to deliver products that stand the test of time.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Whether you need a simple door plate or a fully illuminated gate sign, we
              handle every order with care and attention to detail. Custom fonts, colors,
              and sizes are all available.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We believe every name deserves to be displayed with pride and dignity —
              that is the philosophy behind everything we make.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-3xl font-extrabold text-red-600">10+</p>
                <p className="text-slate-500 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-red-600">1500+</p>
                <p className="text-slate-500 text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-red-600">20+</p>
                <p className="text-slate-500 text-sm">Product Types</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Why Choose <span className="text-yellow-300">AL SAEED?</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Here is what sets us apart from the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-800 rounded-2xl p-6 text-center hover:bg-red-900 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-yellow-300 mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Get In Touch
          </h2>
          <p className="text-slate-500 text-lg">
            Place your order or ask us anything — we reply within 24 hours.
          </p>
        </div>
        <ContactForm />
      </section>

    </main>
  );
}
