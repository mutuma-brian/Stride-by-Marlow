"use client"

import Image from "next/image"
import { libreFranklin } from "@/app/fonts"
import { cn } from "@/lib/utils"
import { CheckCircle } from "lucide-react"

export function About() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <Image
              src="/premium-sneaker-collection.jpg"
              alt="About Stride by Marlow"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className={cn("text-4xl md:text-5xl font-bold mb-6", libreFranklin.className)}>
              About <span className="text-orange-500">Stride by Marlow</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              Founded in 2020, Stride by Marlow is Kenya's premier destination for authentic, premium sneakers. We
              believe that great sneakers are more than just shoes—they're a statement of style, culture, and
              individuality.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Our carefully curated collection features the latest releases from top brands including Nike, Adidas,
              Puma, and Reebok. Every product is authentic and sourced directly from authorized distributors.
            </p>

            <div className="space-y-4">
              {[
                "100% Authentic Products",
                "Fast & Reliable Shipping",
                "Expert Customer Support",
                "Competitive Pricing",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
