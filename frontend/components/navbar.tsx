"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { libreFranklin } from "@/app/fonts"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/components/auth-provider"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const { user, logout } = useAuth()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCartClick = () => {
    if (!user) {
      router.push("/login")
    } else {
      router.push("/cart")
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled || ["/shop", "/about", "/contact"].includes(pathname)
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 mr-2 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              SM
            </div>
            <span className={cn("text-3xl", isScrolled ? "text-black" : "text-white")}>STRIDE BY MARLOW</span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  `${libreFranklin.className} text-lg transition-colors duration-300`,
                  isScrolled || ["/shop", "/about", "/contact"].includes(pathname)
                    ? "text-black hover:text-gray-600"
                    : "text-white hover:text-gray-300",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "transition-colors duration-300",
                isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300",
              )}
              onClick={handleCartClick}
            >
              <ShoppingCart size={24} />
            </Button>
            {user ? (
              <>
                <Link href="/profile">
                  <Button
                    className={cn(
                      `${libreFranklin.className} transition-all duration-300`,
                      "bg-orange-500 text-white hover:bg-orange-600",
                    )}
                  >
                    Profile
                  </Button>
                </Link>
                <Button
                  className={cn(
                    `${libreFranklin.className} transition-all duration-300`,
                    "bg-orange-500 text-white hover:bg-orange-600",
                  )}
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    className={cn(
                      `${libreFranklin.className} transition-all duration-300`,
                      "bg-orange-500 text-white hover:bg-orange-600",
                    )}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    className={cn(
                      `${libreFranklin.className} transition-all duration-300`,
                      "bg-orange-500 text-white hover:bg-orange-600",
                    )}
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
          <button
            className={cn(
              "md:hidden transition-transform duration-300 hover:scale-110",
              isScrolled ? "text-black" : "text-white",
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            <div className="p-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="mobile-menu-card" onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <Button
                className="mobile-menu-card"
                onClick={() => {
                  setIsOpen(false)
                  handleCartClick()
                }}
              >
                Cart
              </Button>
              {user ? (
                <>
                  <Link href="/profile">
                    <Button className="mobile-menu-card w-full" onClick={() => setIsOpen(false)}>
                      Profile
                    </Button>
                  </Link>
                  <Button
                    className="mobile-menu-card w-full"
                    onClick={() => {
                      logout()
                      setIsOpen(false)
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button className="mobile-menu-card w-full" onClick={() => setIsOpen(false)}>
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="mobile-menu-card w-full" onClick={() => setIsOpen(false)}>
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

