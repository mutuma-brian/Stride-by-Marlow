import type { ReactNode } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminAuthProvider } from "@/components/admin-auth-provider"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminAuthProvider>
      <div className="flex h-screen bg-gray-100">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </AdminAuthProvider>
  )
}

