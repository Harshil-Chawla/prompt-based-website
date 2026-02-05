import { Mail, Phone, Truck, RotateCcw } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted via-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            📬 Get In Touch With Us 📬
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Have questions or want to place a bulk order? Reach out to us
            easily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-muted rounded-2xl shadow-xl p-8 border border-border/50 hover:shadow-2xl transition-shadow duration-500">
            <h3 className="text-3xl font-black text-foreground mb-8">
              ✉️ Send us a Message
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none font-medium"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                🚀 Submit Inquiry
              </button>
            </form>
          </div>

          {/* Order Info & Support */}
          <div className="space-y-6">
            {/* Delivery Timeline */}
            <div className="bg-gradient-to-br from-white to-muted rounded-2xl shadow-lg p-6 border border-border/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                  <Truck className="w-6 h-6 text-primary font-bold" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    🚚 Delivery Timeline
                  </h4>
                  <p className="text-muted-foreground text-sm font-medium">
                    Standard delivery: 5-7 business days. Express shipping
                    available for orders placed before 2 PM.
                  </p>
                </div>
              </div>
            </div>

            {/* Return Policy */}
            <div className="bg-gradient-to-br from-white to-muted rounded-2xl shadow-lg p-6 border border-border/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl">
                  <RotateCcw className="w-6 h-6 text-accent font-bold" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    ↩️ Return Policy
                  </h4>
                  <p className="text-muted-foreground text-sm font-medium">
                    30-day return policy on all items. Items must be in original
                    condition with tags attached. Free returns on campus.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-gradient-to-br from-primary via-blue-600 to-cyan-500 text-primary-foreground rounded-2xl shadow-xl p-6 space-y-5 border border-white/20">
              <h4 className="text-2xl font-black">📞 Direct Contact</h4>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-sm font-semibold opacity-90">Email</p>
                  <a
                    href="mailto:contact@campusthreads.com"
                    className="hover:underline font-bold drop-shadow-sm"
                  >
                    contact@campusthreads.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-sm font-semibold opacity-90">WhatsApp</p>
                  <a
                    href="https://wa.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-bold drop-shadow-sm"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4">
                <p className="text-sm font-medium opacity-90">
                  💼 For bulk orders and campus partnerships, we offer special
                  discounts. Get in touch!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
