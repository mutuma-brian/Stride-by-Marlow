"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, User, LogOut, Package, CreditCard, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { libreFranklin } from "@/app/fonts"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { useUser } from "@/contexts/UserContext"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, cart, logout } = useUser()
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
    if (!user) {
      router.push("/login")
    } else {
      router.push("/cart")
    }
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 mr-2 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              SM
            </div>
            <span className="text-3xl font-semibold text-orange-500">STRIDE BY MARLOW</span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${libreFranklin.className} text-lg font-bold transition-colors duration-300 text-orange-500 hover:text-orange-600`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className={cn(
                      `${libreFranklin.className} bg-gradient-to-r from-orange-500 via-white to-orange-500 text-orange-600 hover:from-orange-600 hover:via-white hover:to-orange-600 transition-all duration-300`,
                      !isScrolled && "bg-white/10 backdrop-blur-sm hover:bg-white/20",
                      "hover:scale-105",
                    )}
                  >
                    <User className="mr-2 h-4 w-4" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push("/profile")}>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/orders")}>
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/payment")}>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/settings")}>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    className={cn(
                      `${libreFranklin.className} bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300`,
                      !isScrolled && "bg-white/10 backdrop-blur-sm hover:bg-white/20",
                      "hover:scale-105",
                    )}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    className={cn(
                      `${libreFranklin.className} bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300`,
                      !isScrolled && "bg-white/10 backdrop-blur-sm hover:bg-white/20",
                      "hover:scale-105",
                    )}
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="relative text-orange-500 hover:text-orange-600 transition-colors duration-300"
              onClick={handleCartClick}
            >
              <ShoppingCart size={48} className="text-orange-500 fill-orange-500 stroke-white" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Button>
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
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-300 block text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/cart">
                <Button
                  className={`${libreFranklin.className} bg-gradient-to-r from-orange-500 via-white to-orange-500 text-orange-600 hover:from-orange-600 hover:via-white hover:to-orange-600 transition-colors w-full`}
                  onClick={() => {
                    setIsOpen(false)
                    handleCartClick()
                  }}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart
                  {cart.length > 0 && (
                    <Badge variant="destructive" className="ml-2">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </Badge>
                  )}
                </Button>
              </Link>
              {user ? (
                <>
                  <Link href="/profile">
                    <Button
                      className={`${libreFranklin.className} bg-gradient-to-r from-orange-500 via-white to-orange-500 text-orange-600 hover:from-orange-600 hover:via-white hover:to-orange-600 transition-colors w-full`}
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Button>
                  </Link>
                  <Button
                    className={`${libreFranklin.className} bg-gradient-to-r from-orange-500 via-white to-orange-500 text-orange-600 hover:from-orange-600 hover:via-white hover:to-orange-600 transition-colors w-full`}
                    onClick={() => {
                      setIsOpen(false)
                      handleLogout()
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      className={`${libreFranklin.className} bg-gradient-to-r from-orange-500 via-white to-orange-500 text-orange-600 hover:from-orange-600 hover:via-white hover:to-orange-600 transition-colors w-full`}
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button
                      className={`${libreFranklin.className} bg-gradient-to-r from-orange-500 via-white to-orange-500 text-orange-600 hover:from-orange-600 hover:via-white hover:to-orange-600 transition-colors w-full`}
                      onClick={() => setIsOpen(false)}
                    >
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

