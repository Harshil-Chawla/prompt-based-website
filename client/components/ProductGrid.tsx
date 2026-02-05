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
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured College Merchandise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our most popular college wear — comfortable, stylish, and
            made just for campus life.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product Image Area */}
              <div className="relative h-64 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                <div
                  className={`text-8xl transition-transform duration-300 ${
                    hoveredId === product.id ? "scale-110" : "scale-100"
                  }`}
                >
                  {product.emoji}
                </div>

                {/* Overlay on Hover */}
                {hoveredId === product.id && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-6 h-6" />
                    </button>
                    <button
                      className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-yellow-400 transition-colors"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="py-2 px-3 bg-muted text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-sm flex items-center justify-center gap-1"
                  >
                    <Eye className="w-4 h-4" />
                    Details
                  </button>
                  <button className="py-2 px-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm flex items-center justify-center gap-1">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 flex justify-between items-center p-6 border-b border-border bg-background">
                <h2 className="text-2xl font-bold text-foreground">
                  Product Details
                </h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-2xl text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="flex flex-col gap-4">
                    <div className="h-96 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <div className="text-9xl">{selectedProduct.emoji}</div>
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {selectedProduct.name}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        Premium college merchandise for students who value
                        quality and style.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="text-4xl font-bold text-primary">
                        ${selectedProduct.price}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          In Stock
                        </span>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Size Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Size
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
                          <button
                            key={size}
                            className="py-2 px-3 border-2 border-border rounded-lg hover:border-primary hover:text-primary transition-colors font-semibold"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Color
                      </label>
                      <div className="flex gap-3">
                        <button
                          className="w-10 h-10 rounded-full bg-primary hover:ring-2 ring-primary/50 transition-all"
                          title="Blue"
                        ></button>
                        <button
                          className="w-10 h-10 rounded-full bg-secondary hover:ring-2 ring-secondary/50 transition-all"
                          title="Gold"
                        ></button>
                        <button
                          className="w-10 h-10 rounded-full bg-gray-900 hover:ring-2 ring-gray-900/50 transition-all"
                          title="Black"
                        ></button>
                        <button
                          className="w-10 h-10 rounded-full bg-white border-2 border-border hover:ring-2 ring-gray-400/50 transition-all"
                          title="White"
                        ></button>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Quantity
                      </label>
                      <div className="flex items-center border border-border rounded-lg w-fit">
                        <button className="px-4 py-2 text-lg hover:bg-muted transition-colors">
                          −
                        </button>
                        <input
                          type="number"
                          defaultValue="1"
                          min="1"
                          className="w-12 text-center border-l border-r border-border outline-none"
                        />
                        <button className="px-4 py-2 text-lg hover:bg-muted transition-colors">
                          +
                        </button>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
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
    </section>
  );
}
