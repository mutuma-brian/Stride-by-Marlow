"use client"

import { useState, useMemo } from "react"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

const allProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 15999,
    image: "/nike-air-max-270-black-white-sneaker.jpg",
    category: "Nike",
    brand: "nike",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    price: 18999,
    image: "/adidas-ultraboost-21-black-sneaker.jpg",
    category: "Adidas",
    brand: "adidas",
  },
  {
    id: 3,
    name: "Puma RS-X² Puzzle",
    price: 12999,
    image: "/puma-rs-x-puzzle-colorful-sneaker.jpg",
    category: "Puma",
    brand: "puma",
  },
  {
    id: 4,
    name: "Reebok Classic Leather",
    price: 8999,
    image: "/reebok-classic-leather-white-sneaker.jpg",
    category: "Reebok",
    brand: "reebok",
  },
  {
    id: 5,
    name: "New Balance 990v5",
    price: 21999,
    image: "/new-balance-990v5-grey-sneaker.jpg",
    category: "New Balance",
    brand: "newbalance",
  },
]

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState([0, 30000])
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesBrand = !selectedBrand || product.brand === selectedBrand
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      return matchesSearch && matchesBrand && matchesPrice
    })
  }, [searchQuery, selectedBrand, priceRange])

  return (
    <div className="container-max py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Shop</h1>
        <p className="text-muted-foreground">Browse our complete collection of premium sneakers</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div
          className={`fixed md:relative inset-0 md:inset-auto w-64 bg-background md:bg-transparent z-40 md:z-auto transform transition-transform ${
            showFilters ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="p-4 md:p-0 space-y-6">
            <div className="flex items-center justify-between md:hidden">
              <h2 className="font-bold text-lg">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="p-2">
                <X size={20} />
              </button>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-semibold mb-2">Search</label>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground"
              />
            </div>

            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-semibold mb-3">Brand</label>
              <div className="space-y-2">
                {["nike", "adidas", "puma", "reebok", "newbalance"].map((brand) => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="brand"
                      value={brand}
                      checked={selectedBrand === brand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm capitalize">{brand === "newbalance" ? "New Balance" : brand}</span>
                  </label>
                ))}
                {selectedBrand && (
                  <button onClick={() => setSelectedBrand(null)} className="text-sm text-accent hover:underline mt-2">
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-semibold mb-3">Price Range</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="30000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="text-sm text-muted-foreground">
                  KES {priceRange[0].toLocaleString()} - KES {priceRange[1].toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">{filteredProducts.length} products</p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-secondary transition"
            >
              <Filter size={16} />
              Filters
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No products found</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedBrand(null)
                  setPriceRange([0, 30000])
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
