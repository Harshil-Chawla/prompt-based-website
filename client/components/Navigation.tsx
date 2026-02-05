import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white via-blue-50 to-cyan-50 shadow-lg border-b-2 border-primary/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 transform group-hover:scale-110">
              <span className="text-primary-foreground font-black text-lg">C</span>
            </div>
            <span className="hidden sm:inline font-black text-xl text-primary drop-shadow-sm">
              CampusThreads
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-bold group relative"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/products"
              className="text-foreground hover:text-primary transition-colors font-bold group relative"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-bold group relative"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="relative p-2 text-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300 group"
              title="Shopping Cart"
            >
              <div className="p-2 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <span className="absolute top-0 right-0 w-5 h-5 bg-gradient-to-r from-secondary to-yellow-300 text-secondary-foreground text-xs rounded-full flex items-center justify-center font-black shadow-lg animate-pulse">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link
              to="/"
              className="block px-2 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-2 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="block px-2 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
