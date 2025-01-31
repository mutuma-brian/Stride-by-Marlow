import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

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
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </button>
              <button
                onClick={() => openSocialMedia("twitter")}
                className="text-sky-500 hover:text-sky-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </button>
              <button
                onClick={() => openSocialMedia("instagram")}
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </button>
              <button onClick={() => openEmail()} className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
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
            <a
              href="tel:+254714470576"
              className="text-gray-400 hover:text-white transition-colors flex items-center mb-2"
            >
              <Phone className="h-4 w-4 mr-2" />
              +254 714470576
            </a>
            <a
              href="mailto:info@stridemarlow.com"
              className="text-gray-400 hover:text-white transition-colors flex items-center mb-4"
            >
              <Mail className="h-4 w-4 mr-2" />
              info@stridemarlow.com
            </a>
            <h3 className="text-lg font-semibold mt-4 mb-2">Payment Details</h3>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                <path
                  fill="#4CAF50"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                />
                <path
                  fill="#FFF"
                  d="M24,10c7.732,0,14,6.268,14,14s-6.268,14-14,14s-14-6.268-14-14S16.268,10,24,10 M24,17c-3.863,0-7,3.136-7,7c0,3.863,3.137,7,7,7s7-3.137,7-7C31,20.136,27.863,17,24,17"
                />
              </svg>
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

const openEmail = () => {
  const subject = "Official Inquiry: Stride by Marlow"
  const body = "Dear Stride by Marlow Team,\n\nI am writing to inquire about...\n\nBest regards,\n[Your Name]"
  window.location.href = `mailto:info@stridemarlow.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

