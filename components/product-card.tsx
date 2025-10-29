"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState("10")
  const [showSizeSelector, setShowSizeSelector] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: selectedSize,
    })
    setShowSizeSelector(false)
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">
        <div className="relative bg-secondary rounded-lg overflow-hidden mb-4 aspect-square">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h3 className="font-semibold text-lg group-hover:text-accent transition">{product.name}</h3>
          <p className="text-lg font-bold">KES {product.price.toLocaleString()}</p>

          {showSizeSelector ? (
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-1">
                {["7", "8", "9", "10", "11", "12", "13"].map((size) => (
                  <button
                    key={size}
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedSize(size)
                    }}
                    className={`py-1 text-xs rounded border transition ${
                      selectedSize === size
                        ? "bg-accent text-accent-foreground border-accent"
                        : "border-border hover:border-accent"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  handleAddToCart()
                }}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-sm"
              >
                <ShoppingCart size={14} />
                Add Size {selectedSize}
              </Button>
            </div>
          ) : (
            <Button
              onClick={(e) => {
                e.preventDefault()
                setShowSizeSelector(true)
              }}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </Link>
  )
}
