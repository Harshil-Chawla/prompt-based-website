import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";

export default function Cart() {
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
              <ShoppingCart className="w-16 h-16 mx-auto text-primary/50" />
              <h1 className="text-4xl font-bold text-foreground">Your Cart</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your cart is currently empty. Start adding college merchandise
                to get started!
              </p>
              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Continue Shopping
                </Link>
                <Link
                  to="/"
                  className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-card rounded-lg border border-border p-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  Your Items
                </h2>
                <div className="py-8 text-center text-muted-foreground">
                  <p>No items in your cart yet</p>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 space-y-4 h-fit">
                <h3 className="text-lg font-bold text-foreground">
                  Order Summary
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>$0.00</span>
                  </div>
                  <div className="border-t border-border pt-2 mt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>$0.00</span>
                  </div>
                </div>
                <button
                  disabled
                  className="w-full py-2 bg-muted text-muted-foreground rounded-lg font-semibold cursor-not-allowed"
                >
                  Proceed to Order
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
