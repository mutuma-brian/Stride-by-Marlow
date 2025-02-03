"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { AdminDashboard } from "@/components/admin-dashboard"

const DUMMY_PASSWORD = "admin123" // This is just for demonstration purposes

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === DUMMY_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return <AdminDashboard />
}

