"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

type User = {
  id: string
  name: string
  email: string
}

type UserContextType = {
  user: User | null
  login: (user: User) => void
  logout: () => void
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (itemId: number) => void
  clearCart: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const storedCart = localStorage.getItem("cart")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  const login = (userData: User) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <UserContext.Provider value={{ user, login, logout, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

