"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, Settings, User, BarChart, FileText, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Settings", href: "/admin/settings", icon: Settings },
  { name: "Profile", href: "/admin/profile", icon: User },
  { name: "Sales", href: "/admin/sales", icon: BarChart },
  { name: "Reports", href: "/admin/reports", icon: FileText },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/admin">
            <span className="text-lg">Stride by Marlow Admin</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {sidebarItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                    pathname === item.href
                      ? "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                      : "transparent",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="mt-auto p-4">
          <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

