import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">C</span>
              </div>
              <h3 className="font-bold text-lg">CampusThreads</h3>
            </div>
            <p className="text-sm opacity-90">
              Proudly designed for students, by students.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm hover:text-secondary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-sm hover:text-secondary transition-colors"
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="text-sm hover:text-secondary transition-colors"
              >
                Cart
              </Link>
              <Link
                to="/contact"
                className="text-sm hover:text-secondary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors"
                title="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@campusthreads.com"
                className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center text-sm opacity-80">
            <p>&copy; 2024 CampusThreads. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
