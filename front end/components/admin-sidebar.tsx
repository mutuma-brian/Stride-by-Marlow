import Link from "next/link"
import { useRouter } from "next/navigation"
import { Home, ShoppingBag, Users, BarChart2, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type AdminSidebarProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

export function AdminSidebar({ open, setOpen }: AdminSidebarProps) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    router.push("/admin/login")
  }

  return (
    <div
      className={cn(
        "bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out z-20",
        open ? "translate-x-0" : "-translate-x-full",
        "lg:relative lg:translate-x-0",
      )}
    >
      <nav>
        <Link
          href="/admin/dashboard"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link
          href="/admin/products"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <ShoppingBag className="inline-block mr-2" size={20} />
          Products
        </Link>
        <Link
          href="/admin/customers"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Users className="inline-block mr-2" size={20} />
          Customers
        </Link>
        <Link
          href="/admin/analytics"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <BarChart2 className="inline-block mr-2" size={20} />
          Analytics
        </Link>
        <Link
          href="/admin/settings"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Settings className="inline-block mr-2" size={20} />
          Settings
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
          onClick={handleLogout}
        >
          <LogOut className="inline-block mr-2" size={20} />
          Logout
        </Button>
      </nav>
    </div>
  )
}

