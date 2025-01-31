"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { libreFranklin, jetbrainsMono } from "@/app/fonts"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/router"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCartClick = () => {
    if (!isLoggedIn) {
      // Store the current page URL in localStorage
      localStorage.setItem("redirectAfterLogin", router.asPath)
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
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://dummyimage.com/48x48/ff6600/ffffff&text=SbM"
                alt="Stride by Marlow Logo"
                width={48}
                height={48}
              />
            </div>
            <span className={`${jetbrainsMono.className} text-3xl font-extrabold text-orange-500`}>
              STRIDE BY MARLOW
            </span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  `${libreFranklin.className} text-lg font-bold transition-colors duration-300 hover:text-orange-500`,
                  isScrolled ? "text-gray-700" : "text-white",
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
              className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
              onClick={handleCartClick}
            >
              <ShoppingCart size={24} />
            </Button>
            {isLoggedIn ? (
              <Link href="/profile">
                <Button
                  className={cn(
                    `${jetbrainsMono.className} bg-gradient-to-r from-orange-500 via-white to-orange-500 text-orange-600 hover:from-orange-600 hover:via-white hover:to-orange-600 transition-all duration-300`,
                    !isScrolled && "bg-white/10 backdrop-blur-sm hover:bg-white/20",
                    "hover:scale-105",
                  )}
                >
                  Profile
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button
                  className={cn(
                    `${jetbrainsMono.className} bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300`,
                    !isScrolled && "bg-white/10 backdrop-blur-sm hover:bg-white/20",
                    "hover:scale-105",
                  )}
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
          <button
            className="md:hidden text-orange-500 transition-transform duration-300 hover:scale-110"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`${libreFranklin.className} md:hidden absolute top-full left-0 right-0 bg-white shadow-md overflow-hidden`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-300 block text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className={`${jetbrainsMono.className} bg-gradient-to-r from-orange-500 via-white to-orange-500 text-orange-600 hover:from-orange-600 hover:via-white hover:to-orange-600 transition-colors w-full`}
                onClick={() => {
                  setIsOpen(false)
                  handleCartClick()
                }}
              >
                Cart
              </Button>
              {isLoggedIn ? (
                <Link href="/profile">
                  <Button
                    className={`${jetbrainsMono.className} bg-gradient-to-r from-orange-500 via-white to-orange-500 text-orange-600 hover:from-orange-600 hover:via-white hover:to-orange-600 transition-colors w-full`}
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button
                    className={`${jetbrainsMono.className} bg-gradient-to-r from-orange-500 via-white to-orange-500 text-orange-600 hover:from-orange-600 hover:via-white hover:to-orange-600 transition-colors w-full`}
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

