"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type AdminUser = {
  id: string
  name: string
  email: string
}

type AdminAuthContextType = {
  adminUser: AdminUser | null
  adminLogin: (email: string, password: string) => Promise<void>
  adminLogout: () => void
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined)

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext)
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider")
  }
  return context
}

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if admin is logged in (e.g., by checking localStorage or a token)
    const storedAdminUser = localStorage.getItem("adminUser")
    if (storedAdminUser) {
      setAdminUser(JSON.parse(storedAdminUser))
    } else {
      router.push("/admin/login")
    }
  }, [router])

  const adminLogin = async (email: string, password: string) => {
    // Implement your admin login logic here
    // For demo purposes, we'll just set a dummy admin user
    if (email === "admin@example.com" && password === "admin123") {
      const dummyAdminUser = { id: "1", name: "Admin User", email }
      setAdminUser(dummyAdminUser)
      localStorage.setItem("adminUser", JSON.stringify(dummyAdminUser))
    } else {
      throw new Error("Invalid credentials")
    }
  }

  const adminLogout = () => {
    setAdminUser(null)
    localStorage.removeItem("adminUser")
    router.push("/admin/login")
  }

  return (
    <AdminAuthContext.Provider value={{ adminUser, adminLogin, adminLogout }}>{children}</AdminAuthContext.Provider>
  )
}

