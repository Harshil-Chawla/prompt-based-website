import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-red-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/50">
                <span className="text-white font-black text-lg">C</span>
              </div>
              <h3 className="font-black text-2xl drop-shadow-md">CampusThreads</h3>
            </div>
            <p className="text-sm font-semibold opacity-90">
              🎓 Proudly designed for students, by students.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-black text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm font-semibold hover:text-secondary transition-colors hover:translate-x-1 transform duration-300"
              >
                → Home
              </Link>
              <Link
                to="/products"
                className="text-sm font-semibold hover:text-secondary transition-colors hover:translate-x-1 transform duration-300"
              >
                → Products
              </Link>
              <Link
                to="/cart"
                className="text-sm font-semibold hover:text-secondary transition-colors hover:translate-x-1 transform duration-300"
              >
                → Cart
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold hover:text-secondary transition-colors hover:translate-x-1 transform duration-300"
              >
                → Contact
              </Link>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-black text-lg">Connect With Us</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                title="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@campusthreads.com"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center text-sm font-semibold opacity-90">
            <p>✨ &copy; 2024 CampusThreads. Wear your campus pride! ✨</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
