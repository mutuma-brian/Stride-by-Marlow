"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const products: Record<string, any> = {
  "1": {
    id: 1,
    name: "Nike Air Max 270",
    price: 15999,
    image: "/nike-air-max-270-black-white-sneaker.jpg",
    category: "Nike",
    description:
      "Experience ultimate comfort with the Nike Air Max 270. Featuring a large Air unit in the heel and a curved Air Max unit in the forefoot, these sneakers provide exceptional cushioning and a sleek silhouette.",
    specs: ["Size: 7-13 US", "Color: Black/White", "Material: Mesh & Synthetic", "Weight: 280g"],
    inStock: true,
  },
  "2": {
    id: 2,
    name: "Adidas Ultraboost 21",
    price: 18999,
    image: "/adidas-ultraboost-21-black-sneaker.jpg",
    category: "Adidas",
    description:
      "The Ultraboost 21 combines responsive cushioning with a sleek design. The Boost midsole provides energy return with every step, making these perfect for both casual wear and athletic activities.",
    specs: ["Size: 6-13 US", "Color: Black", "Material: Primeknit", "Weight: 290g"],
    inStock: true,
  },
  "3": {
    id: 3,
    name: "Puma RS-X² Puzzle",
    price: 12999,
    image: "/puma-rs-x-puzzle-colorful-sneaker.jpg",
    category: "Puma",
    description:
      "Make a statement with the vibrant Puma RS-X² Puzzle. This retro-inspired sneaker features a unique puzzle-like design with bold colors and comfortable cushioning.",
    specs: ["Size: 5-13 US", "Color: Multi-color", "Material: Suede & Mesh", "Weight: 270g"],
    inStock: true,
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id]
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("10")
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addItem } = useCart()
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="container-max py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button asChild>
          <Link href="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      size: selectedSize,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="container-max py-8">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/shop" className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to Shop
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-secondary rounded-lg overflow-hidden aspect-square">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-accent mb-6">KES {product.price.toLocaleString()}</p>

            <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3">Size (US)</label>
              <div className="grid grid-cols-4 gap-2">
                {["7", "8", "9", "10", "11", "12", "13"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 rounded-lg border transition ${
                      selectedSize === size
                        ? "bg-accent text-accent-foreground border-accent"
                        : "border-border hover:border-accent"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition"
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button
              onClick={handleAddToCart}
              className={`w-full gap-2 py-6 text-base transition ${
                addedToCart
                  ? "bg-green-600 hover:bg-green-600 text-white"
                  : "bg-accent hover:bg-accent/90 text-accent-foreground"
              }`}
            >
              <ShoppingCart size={20} />
              {addedToCart ? "Added to Cart!" : "Add to Cart"}
            </Button>
            <Button
              variant="outline"
              className="w-full gap-2 bg-transparent"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
              {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            </Button>
          </div>

          {/* Specs */}
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="font-semibold mb-4">Specifications</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {product.specs.map((spec: string, i: number) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-border pt-12">
        <h2 className="text-2xl font-bold mb-6">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(products)
            .filter((p: any) => p.id !== product.id)
            .slice(0, 4)
            .map((p: any) => (
              <Link key={p.id} href={`/product/${p.id}`} className="group">
                <div className="bg-secondary rounded-lg overflow-hidden mb-3 aspect-square">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <h3 className="font-semibold group-hover:text-accent transition">{p.name}</h3>
                <p className="text-accent font-bold">KES {p.price.toLocaleString()}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
