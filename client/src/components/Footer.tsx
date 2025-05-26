import { Link } from "wouter";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <span className="text-white font-bold text-2xl tracking-wide">
                S&S International
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading manufacturer and exporter of high-quality handicrafts,
              delivering exceptional craftsmanship to global markets.
            </p>
            <p className="text-gray-400 text-sm">
              Handcrafted Elegance, Globally Delivered
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-blue-400 mt-1 mr-3 h-5 w-5" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a
                    href="mailto:s&sinternational@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    s&sinternational@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-blue-400 mt-1 mr-3 h-5 w-5" />
                <div>
                  <p className="text-gray-300">Address</p>
                  <a
                    href="https://maps.app.goo.gl/rN7EYQDABV45Y6U1A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    D173, EPIP Export Zone UPSIDC
                    <br />
                    Kasana, Greater Noida
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MessageCircle className="text-green-500 mt-1 mr-3 h-5 w-5" />
                <div>
                  <p className="text-gray-300">WhatsApp</p>
                  <a
                    href="https://wa.me/919910929368"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors duration-200"
                  >
                    Shresth Rajiv
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/">
                <span className="block text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className="block text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  About Us
                </span>
              </Link>
              <Link href="/services">
                <span className="block text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Services
                </span>
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Copyright 2025 | S&S International | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
