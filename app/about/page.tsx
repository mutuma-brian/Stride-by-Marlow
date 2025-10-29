import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container-max py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">About Stride by Marlow</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Stride by Marlow is a premium sneaker retailer dedicated to bringing the world's finest footwear to
            enthusiasts and collectors. Founded with a passion for quality and style, we curate an exclusive collection
            of sneakers from the world's most respected brands.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
          <p>
            We believe that sneakers are more than just shoes—they're a form of self-expression. Our mission is to
            provide our customers with access to authentic, high-quality sneakers that combine comfort, style, and
            craftsmanship.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Why Choose Us</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>100% Authentic Products - All sneakers are verified and authentic</li>
            <li>Expert Curation - Hand-picked selection from top brands</li>
            <li>Fast Shipping - Quick delivery across Kenya</li>
            <li>Customer Support - Dedicated team to help you find the perfect pair</li>
            <li>Easy Returns - Hassle-free return policy</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
          <p>
            What started as a passion project has grown into a trusted destination for sneaker enthusiasts. We've
            partnered with leading brands and distributors to bring you the latest releases and timeless classics.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">Have questions? We'd love to hear from you.</p>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
