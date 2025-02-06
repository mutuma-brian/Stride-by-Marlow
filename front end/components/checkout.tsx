"use client"

import { useState } from "react"
import { useUser } from "@/contexts/UserContext"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Checkout() {
  const { cart, clearCart } = useUser()
  const [mpesaNumber, setMpesaNumber] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = async () => {
    if (!mpesaNumber) {
      toast({
        title: "Error",
        description: "Please enter your M-Pesa number",
        variant: "destructive",
      })
      return
    }

    // Simulate M-Pesa payment process
    toast({
      title: "Processing Payment",
      description: "Please wait while we process your payment...",
    })

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Simulate successful payment
    clearCart()
    toast({
      title: "Payment Successful",
      description: "Your order has been placed successfully!",
    })
    router.push("/")
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Checkout</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>KES {item.price.toFixed(2)}</TableCell>
                <TableCell>KES {(item.price * item.quantity).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 text-right">
          <p className="text-lg font-bold">Total: KES {total.toFixed(2)}</p>
        </div>
        <div className="mt-6">
          <label htmlFor="mpesa-number" className="block text-sm font-medium text-gray-700">
            M-Pesa Number
          </label>
          <Input
            type="tel"
            id="mpesa-number"
            placeholder="Enter your M-Pesa number"
            value={mpesaNumber}
            onChange={(e) => setMpesaNumber(e.target.value)}
            className="mt-1"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleCheckout} className="w-full">
          Pay with M-Pesa
        </Button>
      </CardFooter>
    </Card>
  )
}

