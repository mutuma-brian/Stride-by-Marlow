"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react"

// Dummy data for customers
const initialCustomers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "+254712345678", totalOrders: 5 },
  { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "+254723456789", totalOrders: 3 },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", phone: "+254734567890", totalOrders: 7 },
]

export function AdminCustomerManagement() {
  const [customers, setCustomers] = useState(initialCustomers)
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "" })
  const [editingCustomer, setEditingCustomer] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewCustomer((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddCustomer = () => {
    const customerToAdd = {
      id: customers.length + 1,
      name: newCustomer.name,
      email: newCustomer.email,
      phone: newCustomer.phone,
      totalOrders: 0,
    }
    setCustomers([...customers, customerToAdd])
    setNewCustomer({ name: "", email: "", phone: "" })
  }

  const handleEditCustomer = (id: number) => {
    setEditingCustomer(id)
    const customerToEdit = customers.find((c) => c.id === id)
    if (customerToEdit) {
      setNewCustomer({
        name: customerToEdit.name,
        email: customerToEdit.email,
        phone: customerToEdit.phone,
      })
    }
  }

  const handleUpdateCustomer = () => {
    if (editingCustomer) {
      setCustomers(
        customers.map((c) =>
          c.id === editingCustomer
            ? {
                ...c,
                name: newCustomer.name,
                email: newCustomer.email,
                phone: newCustomer.phone,
              }
            : c,
        ),
      )
      setEditingCustomer(null)
      setNewCustomer({ name: "", email: "", phone: "" })
    }
  }

  const handleDeleteCustomer = (id: number) => {
    setCustomers(customers.filter((c) => c.id !== id))
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{editingCustomer ? "Edit Customer" : "Add New Customer"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={newCustomer.name}
                  onChange={handleInputChange}
                  placeholder="Enter customer name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={newCustomer.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={newCustomer.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <Button type="button" onClick={editingCustomer ? handleUpdateCustomer : handleAddCustomer}>
              {editingCustomer ? "Update Customer" : "Add Customer"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Total Orders</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.totalOrders}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => handleEditCustomer(customer.id)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteCustomer(customer.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

