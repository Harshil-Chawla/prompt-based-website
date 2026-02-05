import { ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  emoji: string;
}

const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "College Hoodie",
    price: 49.99,
    image: "🧥",
    emoji: "🧥",
  },
  {
    id: 2,
    name: "Campus T-Shirt",
    price: 24.99,
    image: "👕",
    emoji: "👕",
  },
  {
    id: 3,
    name: "College Sweatshirt",
    price: 44.99,
    image: "🎽",
    emoji: "🎽",
  },
  {
    id: 4,
    name: "Baseball Cap",
    price: 19.99,
    image: "🧢",
    emoji: "🧢",
  },
  {
    id: 5,
    name: "Crew Socks Pack",
    price: 14.99,
    image: "🧦",
    emoji: "🧦",
  },
  {
    id: 6,
    name: "College Backpack",
    price: 59.99,
    image: "🎒",
    emoji: "🎒",
  },
];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 0, 100, 0.05) 25%, rgba(255, 0, 100, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 100, 0.05) 75%, rgba(255, 0, 100, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 100, 0.05) 25%, rgba(255, 0, 100, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 100, 0.05) 75%, rgba(255, 0, 100, 0.05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px"
        }}></div>
      </div>

      {/* Neon glow effects */}
      <div className="absolute -top-96 -right-96 w-96 h-96 bg-red-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-96 -left-96 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 drop-shadow-lg" style={{fontFamily: "Clash Display"}}>
            ✨ DRIP HARD OR GO HOME ✨
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
            Fire collection. Zero cap. Your campus deserves your style 💯
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-pink-500 transform hover:-translate-y-3"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Neon glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 opacity-0 group-hover:opacity-40 blur transition-opacity duration-500 rounded-2xl"></div>

              {/* Product Image Area */}
              <div className="relative h-72 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center overflow-hidden border-b-2 border-pink-500/30">
                <div
                  className={`text-9xl transition-all duration-500 transform ${
                    hoveredId === product.id ? "scale-125 rotate-12" : "scale-100 rotate-0"
                  }`}
                >
                  {product.emoji}
                </div>

                {/* Overlay on Hover */}
                {hoveredId === product.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center gap-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-4 bg-white text-black rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                      title="View Details"
                    >
                      <Eye className="w-7 h-7" />
                    </button>
                    <button
                      className="p-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="w-7 h-7" />
                    </button>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4 bg-gradient-to-b from-white/50 to-white">
                <h3 className="font-bold text-xl text-foreground group-hover:text-red-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent">
                    ${product.price}
                  </span>
                  <span className="text-xs font-bold text-white bg-red-600 px-3 py-1 rounded-full">
                    In Stock
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="py-3 px-4 bg-gray-100 text-foreground rounded-xl hover:bg-black hover:text-white transition-all duration-300 font-bold text-sm flex items-center justify-center gap-1 transform hover:scale-105"
                  >
                    <Eye className="w-4 h-4" />
                    Details
                  </button>
                  <button className="py-3 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 font-bold text-sm flex items-center justify-center gap-1 transform hover:scale-105">
                    <ShoppingCart className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <h2 className="text-3xl font-black text-black">
                  Product Details
                </h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-3xl text-gray-400 hover:text-black transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="flex flex-col gap-4">
                    <div className="h-96 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                      <div className="text-9xl">{selectedProduct.emoji}</div>
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-black text-black mb-2">
                        {selectedProduct.name}
                      </h3>
                      <p className="text-lg text-gray-600">
                        Premium college merchandise for students who value
                        quality and style.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="text-4xl font-black bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent">
                        ${selectedProduct.price}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-600">
                          In Stock
                        </span>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Size Selection */}
                    <div>
                      <label className="block text-sm font-bold text-black mb-3">
                        Size
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
                          <button
                            key={size}
                            className="py-2 px-3 border-2 border-gray-300 rounded-lg hover:border-red-600 hover:bg-red-50 hover:text-red-600 transition-colors font-semibold"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Selection */}
                    <div>
                      <label className="block text-sm font-bold text-black mb-3">
                        Color
                      </label>
                      <div className="flex gap-3">
                        <button
                          className="w-10 h-10 rounded-full bg-black hover:ring-2 ring-black/30 transition-all"
                          title="Black"
                        ></button>
                        <button
                          className="w-10 h-10 rounded-full bg-red-600 hover:ring-2 ring-red-600/30 transition-all"
                          title="Red"
                        ></button>
                        <button
                          className="w-10 h-10 rounded-full bg-gray-900 hover:ring-2 ring-gray-900/30 transition-all"
                          title="Dark Gray"
                        ></button>
                        <button
                          className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:ring-2 ring-gray-300/50 transition-all"
                          title="White"
                        ></button>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div>
                      <label className="block text-sm font-bold text-black mb-3">
                        Quantity
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                        <button className="px-4 py-2 text-lg hover:bg-gray-100 transition-colors">
                          −
                        </button>
                        <input
                          type="number"
                          defaultValue="1"
                          min="1"
                          className="w-12 text-center border-l border-r border-gray-300 outline-none"
                        />
                        <button className="px-4 py-2 text-lg hover:bg-gray-100 transition-colors">
                          +
                        </button>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full py-3 bg-gradient-to-r from-black to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-600/50 transition-all flex items-center justify-center gap-2 group">
                      <ShoppingCart className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
