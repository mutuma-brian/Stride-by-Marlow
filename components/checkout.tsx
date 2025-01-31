"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

const checkoutSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^(?:254|\+254|0)?(7(?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/, "Invalid Kenyan phone number"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Amount must be a positive number",
    }),
})

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  })

  const onSubmit = async (data: z.infer<typeof checkoutSchema>) => {
    setIsLoading(true)
    // Here you would typically send the data to your backend for M-Pesa processing
    console.log("Checkout data:", data)
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating API call

    // Simulating M-Pesa confirmation
    const confirmationResult = Math.random() < 0.8 // 80% success rate for simulation

    setIsLoading(false)

    if (confirmationResult) {
      toast({
        title: "Payment Successful",
        description: "Your order has been placed successfully!",
      })
    } else {
      toast({
        title: "Payment Failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Checkout</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" {...register("fullName")} />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">M-Pesa Phone Number</Label>
            <Input id="phoneNumber" {...register("phoneNumber")} />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (KES)</Label>
            <Input id="amount" {...register("amount")} />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full gradient-bg" disabled={isLoading} onClick={handleSubmit(onSubmit)}>
          {isLoading ? "Processing Payment..." : "Pay with M-Pesa"}
        </Button>
      </CardFooter>
    </Card>
  )
}

