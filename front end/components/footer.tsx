import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  const openSocialMedia = (platform: string) => {
    let url = ""
    switch (platform) {
      case "facebook":
        url = "https://www.facebook.com/stridemarlow"
        break
      case "twitter":
        url = "https://twitter.com/stridemarlow"
        break
      case "instagram":
        url = "https://www.instagram.com/stridemarlow"
        break
    }
    window.open(url, "_blank")
  }

  const openEmail = () => {
    const subject = "Official Inquiry: Stride by Marlow"
    const body = "Dear Stride by Marlow Team,\n\nI am writing to inquire about...\n\nBest regards,\n[Your Name]"
    window.location.href = `mailto:info@stridemarlow.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Stride by Marlow</h3>
            <p className="text-gray-400 mb-4">Step into style, stride with confidence.</p>
            <div className="flex space-x-4">
              <button
                onClick={() => openSocialMedia("facebook")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button
                onClick={() => openSocialMedia("twitter")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={() => openSocialMedia("instagram")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button onClick={() => openEmail()} className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping-returns" className="text-gray-400 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-400 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-400 hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Nairobi, Imenti House</p>
            <p className="text-gray-400 mb-2">First Floor, Stall No: A19</p>
            <p className="text-gray-400 mb-2">
              Phone:{" "}
              <a href="tel:+254714470576" className="hover:text-white transition-colors">
                +254 714470576
              </a>
            </p>
            <p className="text-gray-400">
              Email:{" "}
              <a href="mailto:info@stridemarlow.com" className="hover:text-white transition-colors">
                info@stridemarlow.com
              </a>
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Payment Details</h3>
            <div className="flex items-center space-x-2">
              <Image src="/mpesa-icon.png" alt="M-Pesa" width={24} height={24} />
              <p className="text-gray-400">Paybill: 714777</p>
            </div>
            <p className="text-gray-400">Account No: 0714470576</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 Stride by Marlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

