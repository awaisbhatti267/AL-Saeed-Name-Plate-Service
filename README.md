# AL SAEED Name Plate Service — Official Website

A modern, responsive business website for **AL SAEED Name Plate Service**, based in Lahore, Pakistan. Built with Next.js 16, React 19, and Tailwind CSS v4.

---

## 🌐 Live Demo

> Deploying on Vercel — link will be updated here after deployment.

---

## 📸 Pages & Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen landing with CTA buttons |
| **Partners Ticker** | Infinite scrolling marquee of business partners |
| **Products** | 6 product cards with images, descriptions & prices |
| **About** | Business story, workshop image & stats |
| **Why Choose Us** | 4 feature highlight cards |
| **Contact** | Two-column form with map, info cards & subject dropdown |
| **Footer** | 4-column footer with social links, quick nav & contact info |

---

## 🏢 Business Info

> ⚠️ **Note:** The following details are placeholder/dummy data and should be replaced with real information before production use.

| Field | Current Value (Dummy) |
|---|---|
| Address | Link Hassan Town, Kharak Awan Town, Lahore |
| Phone | +92 300 4513694 |
| Email | info@alsaeed.pk *(dummy)* |
| Working Hours | Mon – Sat, 9AM – 5PM |
| Facebook | facebook.com/alsaeed.nameplate |

**To update:** Search for `dummy` or replace values in:
- `src/app/components/ContactForm.jsx` — contact info cards & map embed
- `src/app/components/Footer.jsx` — address, phone, email, social links
- `src/app/page.jsx` — about section stats & hero text

---

## 🤝 Business Partners

| Partner | Website |
|---|---|
| Transfopower | transfopower.com.pk |
| PEL (Pak Elektron Limited) | pel.com.pk |
| Trafo Link Pvt Ltd | trafolink.com |
| WAPDA | wapda.gov.pk |
| Govt of Punjab | punjab.gov.pk |
| LESCO | lesco.gov.pk |

---

## 🛠️ Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16.4.0 |
| React | 19.3.0 |
| Tailwind CSS | v4 |
| Node.js | 18+ recommended |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/alsaeed-nameplate.git
cd alsaeed-nameplate

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
└── app/
    ├── layout.js              # Root layout — Navbar + Footer
    ├── page.jsx               # Home page (SPA with anchor sections)
    ├── globals.css            # Tailwind import + scroll behaviour
    ├── about/
    │   └── page.js            # /about route
    ├── contact/
    │   └── page.jsx           # /contact route
    └── components/
        ├── Navbar.jsx         # Fixed navbar with scroll-aware active links
        ├── Footer.jsx         # 4-column footer with social icons
        ├── ContactForm.jsx    # Contact form with map embed
        ├── PartnersTicker.jsx # Infinite scrolling partners marquee
        └── ScrollLink.jsx     # Client-side smooth scroll anchor component
```

---

## ⚙️ Configuration

### Adding Real Partner Logos
Replace SVG logos in `src/app/components/PartnersTicker.jsx` with actual `<Image>` components:
```jsx
import Image from "next/image";
// Place logo files in /public/logos/
<Image src="/logos/pel.png" alt="PEL" width={48} height={48} />
```

### Wiring Up the Contact Form
The form currently logs to console. Replace the `handleSubmit` function in `ContactForm.jsx` with a real backend:
- **Option A:** Next.js Server Action
- **Option B:** API route at `src/app/api/contact/route.js`
- **Option C:** Third-party service (Resend, EmailJS, Formspree)

### Google Maps Embed
Update the `src` URL in the `<iframe>` inside `ContactForm.jsx` with a real Google Maps embed URL for the exact business location.

---

## 📦 Deployment on Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Framework will be auto-detected as **Next.js**
5. Click **Deploy** — live in ~2 minutes

---

## 📝 License

This project is for personal/business use by AL SAEED Name Plate Service.


## 👨‍💻 Author

**Muhammad Awais Bhatti**
Personal project — designed and developed for AL SAEED Name Plate Service, Lahore, Pakistan.

