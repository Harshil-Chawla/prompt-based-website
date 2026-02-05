import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-950 overflow-hidden pt-16">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px"
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-primary-foreground/90 border border-white/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Welcome to CampusThreads</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground leading-tight drop-shadow-lg">
                Wear Your Campus Pride 👕🎓
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-primary-foreground/95 max-w-lg drop-shadow-md font-medium">
              Discover official college hoodies, T-shirts, and accessories
              designed for students who love representing their campus in style.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
              <Link
                to="/products"
                className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-yellow-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
              >
                Shop Merchandise
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="px-8 py-4 border-3 border-primary-foreground text-primary-foreground font-bold rounded-xl hover:bg-primary-foreground/20 hover:shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                Explore Collections
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-md group">
              {/* Animated glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-accent to-secondary opacity-30 rounded-3xl blur-2xl group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>

              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl aspect-square flex items-center justify-center border-2 border-white/30 shadow-2xl group-hover:border-white/50 transition-all duration-500 group-hover:scale-105">
                <div className="text-center space-y-4 relative">
                  <div className="text-9xl animate-bounce">👕</div>
                  <p className="text-primary-foreground font-bold text-2xl drop-shadow-md">
                    Premium Merchandise
                  </p>
                  <p className="text-primary-foreground/80 text-sm">
                    Quality, Style & Pride
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-primary-foreground">
            <span className="text-sm font-bold drop-shadow-md">Scroll to explore</span>
            <svg
              className="w-6 h-6 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
