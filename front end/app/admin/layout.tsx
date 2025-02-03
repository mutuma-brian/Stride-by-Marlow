"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import type React from "react" // Added import for React

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("adminLoggedIn")
    if (!adminLoggedIn) {
      router.push("/admin/login")
    }
  }, [router])

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

