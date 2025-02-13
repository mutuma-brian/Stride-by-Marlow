"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const mpesaSchema = z.object({
  phoneNumber: z
    .string()
    .regex(/^(?:254|\+254|0)?(7(?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/, "Invalid Kenyan phone number"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number.parseFloat(val)) && Number.parseFloat(val) > 0, {
      message: "Amount must be a positive number",
    }),
})

export default function MpesaPaymentForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mpesaSchema),
  })

  const onSubmit = async (data: z.infer<typeof mpesaSchema>) => {
    setIsLoading(true)
    // Here you would typically send the data to your backend to initiate the M-PESA payment
    console.log("M-PESA payment data:", data)
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating API call
    setIsLoading(false)
    toast({
      title: "Payment Initiated",
      description: "Please check your phone for the M-PESA prompt to complete the payment.",
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">M-PESA Payment</CardTitle>
        <CardDescription className="text-center">Enter your phone number and amount to pay</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" type="tel" placeholder="e.g., 0712345678" {...register("phoneNumber")} />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (KES)</Label>
            <Input id="amount" type="number" placeholder="Enter amount" {...register("amount")} />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Pay with M-PESA"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-500">M-PESA Paybill: 714777 | Account No: 0714470576</p>
      </CardFooter>
    </Card>
  )
}

