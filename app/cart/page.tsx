"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="container-max py-12 min-h-[calc(100vh-200px)]">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-secondary rounded-lg p-8 text-center">
              <ShoppingCart size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some sneakers to get started!</p>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6 pb-6 border-b border-border">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>KES 0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>KES 0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>KES 0</span>
              </div>
            </div>
            <div className="flex justify-between font-bold mb-6">
              <span>Total</span>
              <span>KES 0</span>
            </div>
            <Button disabled className="w-full bg-accent/50 text-accent-foreground cursor-not-allowed">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const shipping = total > 0 ? 500 : 0
  const tax = Math.round(total * 0.16)
  const finalTotal = total + shipping + tax

  return (
    <div className="container-max py-12 min-h-[calc(100vh-200px)]">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
        <button onClick={clearCart} className="text-sm text-muted-foreground hover:text-foreground transition">
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="bg-secondary rounded-lg p-4 flex gap-4">
                <div className="w-24 h-24 bg-background rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">Size: {item.size}</p>
                  <p className="text-lg font-bold text-accent">KES {item.price.toLocaleString()}</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="p-2 hover:bg-background rounded-lg transition text-muted-foreground hover:text-foreground"
                  >
                    <Trash2 size={18} />
                  </button>

                  <div className="flex items-center gap-2 bg-background rounded-lg p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      className="p-1 hover:bg-secondary rounded transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      className="p-1 hover:bg-secondary rounded transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <p className="font-bold">KES {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-3 mb-6 pb-6 border-b border-border">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>KES {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>KES {shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax (16%)</span>
              <span>KES {tax.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex justify-between font-bold mb-6 text-lg">
            <span>Total</span>
            <span>KES {finalTotal.toLocaleString()}</span>
          </div>
          <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-2">
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
          <Button asChild variant="outline" className="w-full mt-2 bg-transparent">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
