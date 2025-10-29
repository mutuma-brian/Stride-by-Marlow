import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ReturnsPage() {
  return (
    <div className="container-max py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Returns & Exchanges</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Return Policy</h2>
            <p>
              We want you to be completely satisfied with your purchase. If you're not happy with your sneakers, we
              offer a hassle-free 30-day return policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Return Eligibility</h2>
            <p>To be eligible for a return, your sneakers must meet the following conditions:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Unworn and in original condition</li>
              <li>Original packaging and tags intact</li>
              <li>Returned within 30 days of purchase</li>
              <li>Proof of purchase (order confirmation)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">How to Return</h2>
            <ol className="list-decimal list-inside space-y-3 mt-4">
              <li>Contact our support team at support@stridemarlow.com</li>
              <li>Provide your order number and reason for return</li>
              <li>Receive a return shipping label</li>
              <li>Pack your sneakers securely and ship them back</li>
              <li>Receive a refund within 5-7 business days</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Exchanges</h2>
            <p>
              If you'd like to exchange your sneakers for a different size or style, we make it easy. Simply contact our
              support team and we'll arrange an exchange at no additional cost (excluding shipping).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Damaged or Defective Items</h2>
            <p>
              If your sneakers arrive damaged or defective, we'll replace them or issue a full refund immediately.
              Please contact us within 48 hours of delivery with photos of the damage.
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Non-Returnable Items</h2>
            <p>The following items cannot be returned:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Worn or used sneakers</li>
              <li>Items without original packaging</li>
              <li>Items returned after 30 days</li>
              <li>Items purchased on clearance (final sale)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">Need help with a return?</h2>
          <p className="text-muted-foreground mb-6">Our support team is here to assist you</p>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
