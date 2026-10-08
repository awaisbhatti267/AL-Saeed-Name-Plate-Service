import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "AL SAEED Name Plate Service",
  description: "AL SAEED Name Plate Service — quality name plates crafted with precision in Lahore, Pakistan. Get in touch with us today.",
  icons: {
    icon: "/ASN.webp",
    apple: "/ASN.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}