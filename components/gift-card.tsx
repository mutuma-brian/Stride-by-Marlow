"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Image from "next/image"

const giftCardSchema = z.object({
  recipientEmail: z.string().email("Invalid email address"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number.parseFloat(val)) && Number.parseFloat(val) > 0, {
      message: "Amount must be a positive number",
    }),
  message: z.string().max(200, "Message must be 200 characters or less"),
})

export default function GiftCard() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(giftCardSchema),
  })

  const onSubmit = async (data: z.infer<typeof giftCardSchema>) => {
    setIsLoading(true)
    // Here you would typically send the data to your backend to process the gift card
    console.log("Gift card data:", data)
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating API call
    setIsLoading(false)
    toast({
      title: "Gift Card Sent",
      description: "Your gift card has been sent successfully!",
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Valentine's Day Gift Card</CardTitle>
        <CardDescription className="text-center">Send a special gift to your loved one</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <Image
            src="/valentine-gift-card.jpg"
            alt="Valentine's Day Gift Card"
            width={300}
            height={200}
            className="rounded-lg mx-auto"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="recipientEmail">Recipient's Email</Label>
            <Input
              id="recipientEmail"
              type="email"
              placeholder="Enter recipient's email"
              {...register("recipientEmail")}
            />
            {errors.recipientEmail && <p className="text-red-500 text-sm">{errors.recipientEmail.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (KES)</Label>
            <Input id="amount" type="number" placeholder="Enter amount" {...register("amount")} />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Personal Message</Label>
            <Input id="message" placeholder="Enter your message" {...register("message")} />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Gift Card"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

