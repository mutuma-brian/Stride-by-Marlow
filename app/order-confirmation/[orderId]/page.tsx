"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Download, Package } from "lucide-react"

interface OrderData {
  orderId: string
  items: any[]
  customer: {
    name: string
    email: string
    phone: string
    address: string
    city: string
    postalCode: string
  }
  totals: {
    subtotal: number
    shipping: number
    tax: number
    total: number
  }
  timestamp: string
}

export default function OrderConfirmationPage({ params }: { params: { orderId: string } }) {
  const [order, setOrder] = useState<OrderData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    const foundOrder = orders.find((o: OrderData) => o.orderId === params.orderId)
    setOrder(foundOrder || null)
    setLoading(false)
  }, [params.orderId])

  if (loading) {
    return (
      <div className="container-max py-12 text-center min-h-[calc(100vh-200px)]">
        <p className="text-muted-foreground">Loading order details...</p>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="container-max py-12 text-center min-h-[calc(100vh-200px)]">
        <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
        <p className="text-muted-foreground mb-6">We couldn't find your order details</p>
        <Button asChild>
          <Link href="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }

  const orderDate = new Date(order.timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="container-max py-12">
      {/* Success Message */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={32} className="text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-lg text-muted-foreground">Thank you for your purchase</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Order Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Info */}
          <div className="bg-secondary rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Order ID</p>
                <p className="font-semibold">{order.orderId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Order Date</p>
                <p className="font-semibold">{orderDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-semibold flex items-center gap-2">
                  <Package size={16} className="text-green-600" />
                  Processing
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                <p className="font-semibold">3-5 Business Days</p>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-secondary rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
            <p className="font-semibold">{order.customer.name}</p>
            <p className="text-muted-foreground">{order.customer.address}</p>
            <p className="text-muted-foreground">
              {order.customer.city}, {order.customer.postalCode}
            </p>
            <p className="text-muted-foreground mt-2">{order.customer.phone}</p>
            <p className="text-muted-foreground">{order.customer.email}</p>
          </div>

          {/* Order Items */}
          <div className="bg-secondary rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 pb-4 border-b border-border last:border-0">
                  <div className="w-20 h-20 bg-background rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">KES {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-secondary rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 mb-6 pb-6 border-b border-border">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>KES {order.totals.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>KES {order.totals.shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>KES {order.totals.tax.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>KES {order.totals.total.toLocaleString()}</span>
          </div>

          <div className="space-y-2">
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
              <Download size={16} />
              Download Invoice
            </Button>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>

          <div className="mt-6 p-4 bg-background rounded-lg">
            <p className="text-xs text-muted-foreground">
              A confirmation email has been sent to <span className="font-semibold">{order.customer.email}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-secondary rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">What's Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="font-semibold mb-2">1. Order Processing</p>
            <p className="text-sm text-muted-foreground">Your order is being prepared for shipment</p>
          </div>
          <div>
            <p className="font-semibold mb-2">2. Shipment</p>
            <p className="text-sm text-muted-foreground">You'll receive a tracking number via email</p>
          </div>
          <div>
            <p className="font-semibold mb-2">3. Delivery</p>
            <p className="text-sm text-muted-foreground">Your sneakers will arrive in 3-5 business days</p>
          </div>
        </div>
      </div>
    </div>
  )
}
