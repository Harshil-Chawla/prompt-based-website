import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ProductGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
