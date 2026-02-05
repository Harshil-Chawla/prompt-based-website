import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Wear Your Campus Pride 👕🎓
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-lg">
              Discover official college hoodies, T-shirts, and accessories
              designed for students who love representing their campus in style.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link
                to="/products"
                className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 group"
              >
                Shop Merchandise
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors">
                Explore Collections
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Placeholder for hero image */}
              <div className="bg-primary-foreground/10 rounded-2xl aspect-square flex items-center justify-center backdrop-blur-sm border border-primary-foreground/20">
                <div className="text-center space-y-4">
                  <div className="text-6xl">👕</div>
                  <p className="text-primary-foreground/70 text-lg font-medium">
                    Premium College Merchandise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
