import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-background flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
            <div className="text-8xl font-bold text-secondary">404</div>
            <h1 className="text-4xl font-bold text-foreground">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground">
              Oops! We couldn't find the page you're looking for. This might
              happen if the page has been removed or you entered a different
              URL.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Return to Home
              </Link>
              <Link
                to="/products"
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
