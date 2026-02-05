import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-border p-12 text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">
                Products Page
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This page is ready for development! You can customize the
                products listing, filtering, and sorting features here.
              </p>
              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  View Featured Products on Home
                </Link>
                <Link
                  to="/"
                  className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
