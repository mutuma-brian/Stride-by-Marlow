import { Home, ShoppingBag, Users, Package, DollarSign, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUser } from "@/contexts/UserContext"

type AdminSidebarProps = {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const { logout } = useUser()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out z-20 lg:relative lg:translate-x-0">
      <nav className="space-y-3">
        <Button
          variant="ghost"
          className={cn("w-full justify-start", activeTab === "overview" && "bg-gray-700 text-white")}
          onClick={() => setActiveTab("overview")}
        >
          <Home className="mr-2 h-4 w-4" />
          Overview
        </Button>
        <Button
          variant="ghost"
          className={cn("w-full justify-start", activeTab === "products" && "bg-gray-700 text-white")}
          onClick={() => setActiveTab("products")}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Products
        </Button>
        <Button
          variant="ghost"
          className={cn("w-full justify-start", activeTab === "customers" && "bg-gray-700 text-white")}
          onClick={() => setActiveTab("customers")}
        >
          <Users className="mr-2 h-4 w-4" />
          Customers
        </Button>
        <Button
          variant="ghost"
          className={cn("w-full justify-start", activeTab === "inventory" && "bg-gray-700 text-white")}
          onClick={() => setActiveTab("inventory")}
        >
          <Package className="mr-2 h-4 w-4" />
          Inventory
        </Button>
        <Button
          variant="ghost"
          className={cn("w-full justify-start", activeTab === "sales" && "bg-gray-700 text-white")}
          onClick={() => setActiveTab("sales")}
        >
          <DollarSign className="mr-2 h-4 w-4" />
          Sales
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </nav>
    </div>
  )
}

