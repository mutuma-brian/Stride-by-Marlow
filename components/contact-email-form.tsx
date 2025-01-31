"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters long" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
  issueType: z.string().min(1, { message: "Please select an issue type" }),
})

export default function ContactEmailForm() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const issueType = watch("issueType")

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    setIsLoading(true)
    const { name, email, subject, message, issueType } = data
    const mailtoLink = `mailto:info@stridemarlow.com?subject=${encodeURIComponent(`[${issueType}] ${subject}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
    setIsLoading(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Contact Us</CardTitle>
        <CardDescription className="text-center">
          Fill out this form to send us an email. It will open in your default email application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Your Name" {...register("name")} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="issueType">Issue Type</Label>
            <Select onValueChange={(value) => register("issueType").onChange({ target: { value } })}>
              <SelectTrigger>
                <SelectValue placeholder="Select an issue type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Order Inquiry">Order Inquiry</SelectItem>
                <SelectItem value="Product Question">Product Question</SelectItem>
                <SelectItem value="Return/Exchange">Return/Exchange</SelectItem>
                <SelectItem value="Feedback">Feedback</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.issueType && <p className="text-red-500 text-sm">{errors.issueType.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" type="text" placeholder="Subject of your message" {...register("subject")} />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message here..." {...register("message")} />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
            disabled={isLoading}
          >
            {isLoading ? "Preparing Email..." : "Send Email"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

