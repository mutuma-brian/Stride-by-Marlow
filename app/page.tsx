"use client"

import { useState } from "react"
import { ShoppingCart, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: "KES 15,999",
    image: "/nike-air-max-270-black-white-sneaker.jpg",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    price: "KES 18,999",
    image: "/adidas-ultraboost-21-black-sneaker.jpg",
  },
  {
    id: 3,
    name: "Puma RS-X² Puzzle",
    price: "KES 12,999",
    image: "/puma-rs-x-puzzle-colorful-sneaker.jpg",
  },
  {
    id: 4,
    name: "Reebok Classic Leather",
    price: "KES 8,999",
    image: "/reebok-classic-leather-white-sneaker.jpg",
  },
  {
    id: 5,
    name: "New Balance 990v5",
    price: "KES 21,999",
    image: "/new-balance-990v5-grey-sneaker.jpg",
  },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
              SM
            </div>
            <h1 className="text-2xl font-bold tracking-tight">STRIDE BY MARLOW</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-orange-500 transition">
              Home
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Shop
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              About
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-700 rounded-lg transition">
              <ShoppingCart size={20} />
            </button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Login</Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Register</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=600&width=1200&query=sneaker hero image with person wearing black and orange sneakers)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 z-10">
          <h2 className="text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
            Step into Style with Stride by Marlow
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-md">
            Discover the perfect blend of comfort and fashion with our premium sneaker collection.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white text-base px-6 py-3">Shop Now</Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center mb-12">Featured Products</h3>

        {/* Search and Filter Bar */}
        <div className="flex gap-4 mb-8 items-center">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition">
            <Search size={20} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <Filter size={18} />
            <span>Filter</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
