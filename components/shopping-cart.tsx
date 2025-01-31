"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2 } from "lucide-react"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

const initialCartItems: CartItem[] = [
  { id: 1, name: "StrideX Pro", price: 129.99, quantity: 1, image: "/stridex-pro.jpg" },
  { id: 2, name: "AeroGlide", price: 149.98, quantity: 2, image: "/aeroglide.jpg" },
]

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item)),
    )
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Your Shopping Cart</CardTitle>
      </CardHeader>
      <CardContent>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4 border-b">
            <div className="flex items-center space-x-4">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                className="w-16 text-center"
              />
              <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
        <Button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:from-orange-600 hover:to-purple-700">
          Proceed to Checkout
        </Button>
      </CardFooter>
    </Card>
  )
}

