import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-xs font-bold">
                SM
              </div>
              <span>STRIDE BY MARLOW</span>
            </div>
            <p className="text-sm opacity-80 mb-4">Premium sneaker collection for every style and occasion.</p>
            <div className="flex gap-3">
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-lg transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-lg transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-lg transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/shop" className="hover:opacity-100 transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?brand=nike" className="hover:opacity-100 transition">
                  Nike
                </Link>
              </li>
              <li>
                <Link href="/shop?brand=adidas" className="hover:opacity-100 transition">
                  Adidas
                </Link>
              </li>
              <li>
                <Link href="/shop?brand=puma" className="hover:opacity-100 transition">
                  Puma
                </Link>
              </li>
              <li>
                <Link href="/shop?brand=reebok" className="hover:opacity-100 transition">
                  Reebok
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/contact" className="hover:opacity-100 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:opacity-100 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:opacity-100 transition">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:opacity-100 transition">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:opacity-100 transition">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>support@stridemarlow.com</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>+254 (0) 123 456 789</span>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <p>&copy; 2025 Stride by Marlow. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:opacity-100 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:opacity-100 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
