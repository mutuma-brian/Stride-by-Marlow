"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { User, ShoppingBag, CreditCard, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUser } from "@/contexts/UserContext"
import { useRouter } from "next/navigation"

export function UserSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useUser()
  const router = useRouter()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (!user) return null

  return (
    <>
      <Button variant="ghost" size="icon" className="fixed top-20 right-4 z-50" onClick={toggleSidebar}>
        <User size={24} />
      </Button>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 p-4"
      >
        <h2 className="text-2xl font-bold mb-6">Welcome, {user.name}</h2>
        <nav className="space-y-4">
          <Link href="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
            <User size={20} />
            <span>Profile</span>
          </Link>
          <Link href="/orders" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
            <ShoppingBag size={20} />
            <span>Orders</span>
          </Link>
          <Link href="/payment" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
            <CreditCard size={20} />
            <span>Payment Methods</span>
          </Link>
          <Link href="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
          <Button
            variant="ghost"
            className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 w-full justify-start"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </Button>
        </nav>
      </motion.div>
    </>
  )
}

