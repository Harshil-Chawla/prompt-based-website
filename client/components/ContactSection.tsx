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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-background rounded-lg shadow-sm p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Order Info & Support */}
          <div className="space-y-6">
            {/* Delivery Timeline */}
            <div className="bg-background rounded-lg shadow-sm p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Delivery Timeline
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Standard delivery: 5-7 business days. Express shipping
                    available for orders placed before 2 PM.
                  </p>
                </div>
              </div>
            </div>

            {/* Return Policy */}
            <div className="bg-background rounded-lg shadow-sm p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                  <RotateCcw className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Return Policy
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    30-day return policy on all items. Items must be in original
                    condition with tags attached. Free returns on campus.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-primary text-primary-foreground rounded-lg shadow-sm p-6 space-y-4">
              <h4 className="text-lg font-semibold">Direct Contact</h4>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-80">Email</p>
                  <a
                    href="mailto:contact@campusthreads.com"
                    className="hover:underline font-medium"
                  >
                    contact@campusthreads.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-80">WhatsApp</p>
                  <a
                    href="https://wa.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-medium"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <p className="text-sm opacity-80 pt-2">
                For bulk orders and campus partnerships, we offer special
                discounts. Get in touch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
