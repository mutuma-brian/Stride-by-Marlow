"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("")
  const [order, setOrder] = useState<any>(null)
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearched(true)

    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    const foundOrder = orders.find((o: any) => o.orderId === orderId)
    setOrder(foundOrder || null)
  }

  return (
    <div className="container-max py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Track Your Order</h1>
          <p className="text-lg text-muted-foreground">Enter your order ID to track your sneakers</p>
        </div>

        <form onSubmit={handleSearch} className="mb-12">
          <div className="flex gap-2">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter your order ID (e.g., ORD-1234567890)"
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground"
              required
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
              <Search size={18} />
              Track
            </Button>
          </div>
        </form>

        {searched && !order && (
          <div className="bg-secondary rounded-lg p-8 text-center">
            <p className="text-muted-foreground mb-4">Order not found</p>
            <p className="text-sm text-muted-foreground">Please check your order ID and try again</p>
          </div>
        )}

        {order && (
          <div className="space-y-6">
            {/* Order Status */}
            <div className="bg-secondary rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Order Status</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">Order Confirmed</p>
                    <p className="text-sm text-muted-foreground">{new Date(order.timestamp).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Processing</p>
                    <p className="text-sm text-muted-foreground">Your order is being prepared</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Shipped</p>
                    <p className="text-sm text-muted-foreground">Coming soon</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-bold">
                    4
                  </div>
                  <div>
                    <p className="font-semibold">Delivered</p>
                    <p className="text-sm text-muted-foreground">Coming soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-secondary rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Order Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order ID</span>
                  <span className="font-semibold">{order.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Items</span>
                  <span className="font-semibold">{order.items.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Amount</span>
                  <span className="font-semibold">KES {order.totals.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated Delivery</span>
                  <span className="font-semibold">3-5 Business Days</span>
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="bg-secondary rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Items</h2>
              <div className="space-y-3">
                {order.items.map((item: any) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex justify-between items-center pb-3 border-b border-border last:border-0"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Size {item.size} x {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">KES {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
