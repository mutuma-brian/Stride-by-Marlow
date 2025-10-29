export default function Footer() {
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-lg transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-lg transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16.5 7.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5M12 9a3 3 0 110 6 3 3 0 010-6m0-2a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/shop" className="hover:opacity-100 transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="/shop?brand=nike" className="hover:opacity-100 transition">
                  Nike
                </a>
              </li>
              <li>
                <a href="/shop?brand=adidas" className="hover:opacity-100 transition">
                  Adidas
                </a>
              </li>
              <li>
                <a href="/shop?brand=puma" className="hover:opacity-100 transition">
                  Puma
                </a>
              </li>
              <li>
                <a href="/shop?brand=reebok" className="hover:opacity-100 transition">
                  Reebok
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/contact" className="hover:opacity-100 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:opacity-100 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:opacity-100 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:opacity-100 transition">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/track-order" className="hover:opacity-100 transition">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>support@stridemarlow.com</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+254 (0) 123 456 789</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <p>&copy; 2025 Stride by Marlow. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:opacity-100 transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:opacity-100 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
