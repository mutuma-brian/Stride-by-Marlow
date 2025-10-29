"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import { libreFranklin } from "@/app/fonts"
import { cn } from "@/lib/utils"

interface Product {
  id: number
  name: string
  brand: string
  price: number
  image: string
  rating: number
  reviews: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Air Max 90",
    brand: "Nike",
    price: 12999,
    image: "/nike-air-max-90-sneaker.jpg",
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 2,
    name: "Ultraboost 22",
    brand: "Adidas",
    price: 14999,
    image: "/adidas-ultraboost-22-sneaker.jpg",
    rating: 4.7,
    reviews: 95,
  },
  {
    id: 3,
    name: "RS-X",
    brand: "Puma",
    price: 9999,
    image: "/puma-rs-x-sneaker.jpg",
    rating: 4.6,
    reviews: 72,
  },
  {
    id: 4,
    name: "Classic Leather",
    brand: "Reebok",
    price: 8999,
    image: "/reebok-classic-leather-sneaker.jpg",
    rating: 4.5,
    reviews: 54,
  },
]

export function FeaturedProducts() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={cn("text-4xl md:text-5xl font-bold mb-4", libreFranklin.className)}>
            Featured <span className="text-orange-500">Products</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Discover our handpicked selection of premium sneakers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 mb-4 h-64">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-500 hover:bg-orange-600"
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{product.brand}</p>
                  <h3 className="font-semibold text-lg">{product.name}</h3>

                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < Math.floor(product.rating)
                            ? "fill-orange-500 text-orange-500"
                            : "text-gray-300 dark:text-gray-600",
                        )}
                      />
                    ))}
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">({product.reviews})</span>
                  </div>

                  <p className="text-xl font-bold text-orange-500">KES {product.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
