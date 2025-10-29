"use client"

import { useState } from "react"
import { ShoppingCart, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-xs font-bold">
                SM
              </div>
              <span className="font-bold text-lg hidden sm:inline">STRIDE BY MARLOW</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm hover:text-accent transition">
                Home
              </Link>
              <Link href="/shop" className="text-sm hover:text-accent transition">
                Shop
              </Link>
              <Link href="/about" className="text-sm hover:text-accent transition">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:text-accent transition">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Step into Style with Stride by Marlow</h1>
            <p className="text-lg opacity-90 mb-8">
              Discover the perfect blend of comfort and fashion with our premium sneaker collection.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

        {/* Search and Filter Bar */}
        <div className="flex gap-4 mb-8">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Filter size={18} />
            Filter
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="aspect-square bg-secondary flex items-center justify-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/stylish-sneaker.png"
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-accent font-bold mb-4">{product.price}</p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center gap-2">
                  <ShoppingCart size={16} />
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
