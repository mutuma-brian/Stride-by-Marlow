"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"

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
  role: "user" | "admin"
}

type UserContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (data: any) => Promise<boolean>
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (itemId: number) => void
  clearCart: () => void
  updateQuantity: (itemId: number, quantity: number) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])
  const { toast } = useToast()

  const dummyUsers = [
    { id: "1", name: "Admin User", email: "admin@example.com", password: "admin123", role: "admin" as const },
    { id: "2", name: "John Doe", email: "user@example.com", password: "user123", role: "user" as const },
  ]

  const login = async (email: string, password: string) => {
    const user = dummyUsers.find((u) => u.email === email && u.password === password)
    if (user) {
      const { password, ...userWithoutPassword } = user
      setUser(userWithoutPassword)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    clearCart()
  }

  const register = async (data: any) => {
    const newUser = {
      id: (dummyUsers.length + 1).toString(),
      name: data.name,
      email: data.email,
      role: "user" as const,
    }
    dummyUsers.push({ ...newUser, password: data.password })
    return true
  }

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
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    })
  }

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
  }

  const updateQuantity = (itemId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === itemId ? { ...item, quantity: Math.max(0, quantity) } : item)),
    )
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <UserContext.Provider
      value={{ user, login, logout, register, cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
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

export { UserProvider }

