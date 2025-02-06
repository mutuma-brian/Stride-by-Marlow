"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { AdminDashboard } from "@/components/admin-dashboard"
import { AdminLogin } from "@/components/admin-login"
import { useUser } from "@/contexts/UserContext"

export default function AdminPage() {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user && user.role !== "admin") {
      router.push("/")
    }
  }, [user, router])

  if (!user || user.role !== "admin") {
    return <AdminLogin />
  }

  return <AdminDashboard />
}

