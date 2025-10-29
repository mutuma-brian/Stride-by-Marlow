"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const router = useRouter()
  const [step, setStep] = useState<"shipping" | "payment" | "review">("shipping")
  const [isProcessing, setIsProcessing] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const shipping = total > 0 ? 500 : 0
  const tax = Math.round(total * 0.16)
  const finalTotal = total + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step === "shipping") {
      if (!formData.firstName || !formData.email || !formData.address || !formData.city) {
        alert("Please fill in all shipping details")
        return
      }
      setStep("payment")
    } else if (step === "payment") {
      if (!formData.cardName || !formData.cardNumber || !formData.expiryDate || !formData.cvv) {
        alert("Please fill in all payment details")
        return
      }
      setStep("review")
    } else if (step === "review") {
      setIsProcessing(true)
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Create order
      const orderId = `ORD-${Date.now()}`
      const orderData = {
        orderId,
        items,
        customer: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
        },
        totals: {
          subtotal: total,
          shipping,
          tax,
          total: finalTotal,
        },
        timestamp: new Date().toISOString(),
      }

      // Save order to localStorage
      const orders = JSON.parse(localStorage.getItem("orders") || "[]")
      orders.push(orderData)
      localStorage.setItem("orders", JSON.stringify(orders))

      // Clear cart and redirect
      clearCart()
      router.push(`/order-confirmation/${orderId}`)
    }
  }

  if (items.length === 0) {
    return (
      <div className="container-max py-12 text-center min-h-[calc(100vh-200px)]">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Add items to your cart before checking out</p>
        <Button asChild>
          <Link href="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container-max py-8">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/cart" className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to Cart
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Checkout Form */}
        <div className="lg:col-span-2">
          {/* Progress Steps */}
          <div className="flex gap-4 mb-8">
            {["shipping", "payment", "review"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition ${
                    step === s
                      ? "bg-accent text-accent-foreground"
                      : ["shipping", "payment", "review"].indexOf(step) > i
                        ? "bg-green-600 text-white"
                        : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {["shipping", "payment", "review"].indexOf(step) > i ? <Check size={16} /> : i + 1}
                </div>
                <span className="text-sm font-semibold capitalize hidden sm:inline">{s}</span>
                {i < 2 && <div className="w-8 h-0.5 bg-border hidden sm:block"></div>}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Shipping Information */}
            {(step === "shipping" || step === "payment" || step === "review") && (
              <div className={`space-y-4 ${step !== "shipping" ? "opacity-50 pointer-events-none" : ""}`}>
                <h2 className="text-2xl font-bold">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={step !== "shipping"}
                    className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground disabled:opacity-50"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    disabled={step !== "shipping"}
                    className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground disabled:opacity-50"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={step !== "shipping"}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground disabled:opacity-50"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={step !== "shipping"}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground disabled:opacity-50"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  disabled={step !== "shipping"}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground disabled:opacity-50"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    disabled={step !== "shipping"}
                    className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground disabled:opacity-50"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    disabled={step !== "shipping"}
                    className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground disabled:opacity-50"
                  />
                </div>
              </div>
            )}

            {/* Payment Information */}
            {(step === "payment" || step === "review") && (
              <div className={`space-y-4 ${step !== "payment" ? "opacity-50 pointer-events-none" : ""}`}>
                <h2 className="text-2xl font-bold">Payment Information</h2>
                <input
                  type="text"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  disabled={step !== "payment"}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground disabled:opacity-50"
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  disabled={step !== "payment"}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground disabled:opacity-50"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    disabled={step !== "payment"}
                    className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground disabled:opacity-50"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    disabled={step !== "payment"}
                    className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground disabled:opacity-50"
                  />
                </div>
              </div>
            )}

            {/* Review Order */}
            {step === "review" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Review Your Order</h2>
                <div className="bg-secondary rounded-lg p-4 space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Shipping To:</p>
                    <p className="font-semibold">
                      {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">{formData.address}</p>
                    <p className="text-sm text-muted-foreground">
                      {formData.city}, {formData.postalCode}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {step !== "shipping" && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    if (step === "payment") setStep("shipping")
                    else if (step === "review") setStep("payment")
                  }}
                  className="bg-transparent"
                >
                  Back
                </Button>
              )}
              <Button
                type="submit"
                disabled={isProcessing}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isProcessing ? "Processing..." : step === "review" ? "Place Order" : "Continue"}
              </Button>
            </div>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-secondary rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 mb-6 pb-6 border-b border-border max-h-64 overflow-y-auto">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Size {item.size} x {item.quantity}
                  </p>
                </div>
                <p className="font-semibold">KES {(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))}
          </div>

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

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>KES {finalTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
