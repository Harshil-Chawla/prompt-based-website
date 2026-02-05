import { Mail, Phone, Truck, RotateCcw } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(236, 72, 153, 0.05) 25%, rgba(236, 72, 153, 0.05) 26%, transparent 27%, transparent 74%, rgba(236, 72, 153, 0.05) 75%, rgba(236, 72, 153, 0.05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Neon glow effects */}
      <div className="absolute -top-96 -right-96 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute -bottom-96 -left-96 w-96 h-96 bg-red-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-5xl sm:text-6xl font-black text-white mb-6"
              style={{ fontFamily: "Clash Display" }}
            >
              SLIDE INTO OUR DMS 📬
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
              Got questions? Want bulk orders? Drop a message. We vibe back fast
              💬
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 border-2 border-pink-500/30 hover:border-pink-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-600/20">
              <h3
                className="text-3xl font-black text-white mb-8"
                style={{ fontFamily: "Space Grotesk" }}
              >
                MESSAGE US 💌
              </h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-pink-300 mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border-2 border-pink-500/30 bg-gray-950 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-all duration-300 font-medium placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-pink-300 mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-pink-500/30 bg-gray-950 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-all duration-300 font-medium placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-pink-300 mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="What's up?"
                    className="w-full px-4 py-3 border-2 border-pink-500/30 bg-gray-950 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-all duration-300 font-medium placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-pink-300 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Spill the tea..."
                    className="w-full px-4 py-3 border-2 border-pink-500/30 bg-gray-950 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition-all duration-300 resize-none font-medium placeholder:text-gray-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white font-black rounded-xl hover:shadow-lg hover:shadow-pink-600/50 transform hover:scale-105 transition-all duration-300 border border-pink-400/50 text-lg"
                >
                  🚀 SEND IT
                </button>
              </form>
            </div>

            {/* Order Info & Support */}
            <div className="space-y-6">
              {/* Delivery Timeline */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 border-2 border-pink-500/30 hover:border-pink-500/60 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-pink-600/30 to-red-600/30 rounded-xl">
                    <Truck className="w-6 h-6 text-pink-400 font-bold" />
                  </div>
                  <div>
                    <h4
                      className="text-xl font-black text-pink-300 mb-2"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      🚚 SHIPPING (NO CAP)
                    </h4>
                    <p className="text-gray-400 text-sm font-medium">
                      5-7 business days standard. Flex with express if you're in
                      a rush 💨
                    </p>
                  </div>
                </div>
              </div>

              {/* Return Policy */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 border-2 border-pink-500/30 hover:border-pink-500/60 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-pink-600/30 to-red-600/30 rounded-xl">
                    <RotateCcw className="w-6 h-6 text-pink-400 font-bold" />
                  </div>
                  <div>
                    <h4
                      className="text-xl font-black text-pink-300 mb-2"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      ↩️ RETURNS (30 DAYS)
                    </h4>
                    <p className="text-gray-400 text-sm font-medium">
                      Not vibing with it? Send it back. No questions. All good
                      💯
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-gray-900 via-pink-950/30 to-gray-800 text-white rounded-2xl shadow-xl p-6 space-y-5 border-2 border-pink-600">
                <h4
                  className="text-2xl font-black text-pink-300"
                  style={{ fontFamily: "Clash Display" }}
                >
                  REACH US 📲
                </h4>

                <div className="flex items-center gap-3">
                  <div className="p-3 bg-pink-600/30 rounded-lg">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pink-300">EMAIL</p>
                    <a
                      href="mailto:contact@campusthreads.com"
                      className="hover:text-pink-400 font-bold drop-shadow-sm transition-colors"
                    >
                      contact@campusthreads.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 bg-pink-600/30 rounded-lg">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-pink-300">
                      WHATSAPP
                    </p>
                    <a
                      href="https://wa.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-400 font-bold drop-shadow-sm transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="border-t border-pink-600/30 pt-4">
                  <p className="text-sm font-bold text-pink-300">
                    💼 BULK ORDERS? PARTNERSHIPS? HIT US UP. WE GOT DEALS 🔥
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
