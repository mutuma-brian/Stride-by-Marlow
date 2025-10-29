"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { libreFranklin } from "@/app/fonts"
import { cn } from "@/lib/utils"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4">
          <Mail className="w-12 h-12 text-white" />
        </div>

        <h2 className={cn("text-4xl md:text-5xl font-bold text-white mb-4", libreFranklin.className)}>Stay Updated</h2>

        <p className="text-white/90 text-lg mb-8">
          Subscribe to our newsletter for exclusive deals, new releases, and sneaker tips delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
          />
          <Button type="submit" className="bg-white text-orange-600 hover:bg-white/90 whitespace-nowrap">
            Subscribe
          </Button>
        </form>

        {isSubmitted && (
          <p className="text-white mt-4 text-sm">✓ Thanks for subscribing! Check your email for confirmation.</p>
        )}
      </div>
    </section>
  )
}
