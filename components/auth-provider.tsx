"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
  phone: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (name: string, email: string, phone: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check if user is logged in (e.g., by checking localStorage or a token)
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // Implement your login logic here
    // For demo purposes, we'll just set a dummy user
    const dummyUser = { id: "1", name: "John Doe", email, phone: "+254712345678" }
    setUser(dummyUser)
    localStorage.setItem("user", JSON.stringify(dummyUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const register = async (name: string, email: string, phone: string, password: string) => {
    // Implement your registration logic here
    // For demo purposes, we'll just set a dummy user
    const dummyUser = { id: "1", name, email, phone }
    setUser(dummyUser)
    localStorage.setItem("user", JSON.stringify(dummyUser))
  }

  return <AuthContext.Provider value={{ user, login, logout, register }}>{children}</AuthContext.Provider>
}
