import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Truck, Clock, MapPin, Shield } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="container-max py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Shipping Information</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          {/* Shipping Options */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Shipping Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Truck size={24} className="text-accent" />
                  <h3 className="text-lg font-bold text-foreground">Standard Shipping</h3>
                </div>
                <p className="text-sm mb-2">3-5 Business Days</p>
                <p className="text-sm">KES 500</p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={24} className="text-accent" />
                  <h3 className="text-lg font-bold text-foreground">Express Shipping</h3>
                </div>
                <p className="text-sm mb-2">1-2 Business Days</p>
                <p className="text-sm">KES 1,500</p>
              </div>
            </div>
          </div>

          {/* Shipping Coverage */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Shipping Coverage</h2>
            <p>
              We currently ship to all locations within Kenya. Orders are processed and shipped from our warehouse in
              Nairobi.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Free shipping on orders over KES 10,000</li>
              <li>Same-day processing for orders placed before 2 PM</li>
              <li>Real-time tracking for all shipments</li>
              <li>Insured delivery for all packages</li>
            </ul>
          </div>

          {/* Tracking */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Order Tracking</h2>
            <p>
              Once your order ships, you'll receive a tracking number via email. You can use this number to track your
              package in real-time on our tracking page.
            </p>
            <Button asChild className="mt-4 bg-accent hover:bg-accent/90">
              <Link href="/track-order">Track Your Order</Link>
            </Button>
          </div>

          {/* Delivery */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Delivery</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Delivery Address</h3>
                  <p>
                    Ensure your delivery address is accurate and complete. We deliver to residential and commercial
                    addresses.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Package Safety</h3>
                  <p>
                    All packages are carefully packed and insured. If your package arrives damaged, contact us
                    immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* International */}
          <div className="bg-secondary rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">International Shipping</h2>
            <p>
              We're currently expanding our shipping options to include international destinations. Check back soon for
              updates!
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">Have questions?</h2>
          <p className="text-muted-foreground mb-6">Our support team is ready to help</p>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
