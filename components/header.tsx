"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-xs font-bold">
              SM
            </div>
            <span className="hidden sm:inline">STRIDE BY MARLOW</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-accent transition">
              Home
            </Link>
            <Link href="/shop" className="text-sm hover:text-accent transition">
              Shop
            </Link>
            <Link href="/about" className="text-sm hover:text-accent transition">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-accent transition">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="p-2 hover:bg-secondary rounded-lg transition">
              <ShoppingCart size={20} />
            </Link>
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link href="/register">Register</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <Link href="/" className="px-4 py-2 hover:bg-secondary rounded-lg transition">
              Home
            </Link>
            <Link href="/shop" className="px-4 py-2 hover:bg-secondary rounded-lg transition">
              Shop
            </Link>
            <Link href="/about" className="px-4 py-2 hover:bg-secondary rounded-lg transition">
              About
            </Link>
            <Link href="/contact" className="px-4 py-2 hover:bg-secondary rounded-lg transition">
              Contact
            </Link>
            <Button asChild className="w-full bg-accent hover:bg-accent/90">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/register">Register</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
