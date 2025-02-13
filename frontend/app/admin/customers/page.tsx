"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CustomerManagement() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "+254712345678" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+254723456789" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "+254734567890" },
  ])
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "" })
  const [editingCustomer, setEditingCustomer] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewCustomer({ ...newCustomer, [name]: value })
  }

  const handleAddCustomer = () => {
    setCustomers([...customers, { ...newCustomer, id: customers.length + 1 }])
    setNewCustomer({ name: "", email: "", phone: "" })
  }

  const handleEditCustomer = (customer) => {
    setEditingCustomer(customer)
  }

  const handleUpdateCustomer = () => {
    setCustomers(customers.map((c) => (c.id === editingCustomer.id ? editingCustomer : c)))
    setEditingCustomer(null)
  }

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter((c) => c.id !== id))
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Customer Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Add New Customer</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={newCustomer.name} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={newCustomer.email} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" value={newCustomer.phone} onChange={handleInputChange} />
              </div>
            </div>
            <Button type="button" onClick={handleAddCustomer}>
              Add Customer
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
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>
                    <Button variant="outline" className="mr-2" onClick={() => handleEditCustomer(customer)}>
                      Edit
                    </Button>
                    <Button variant="destructive" onClick={() => handleDeleteCustomer(customer.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {editingCustomer && (
        <Card>
          <CardHeader>
            <CardTitle>Edit Customer</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="edit-name">Name</Label>
                  <Input
                    id="edit-name"
                    name="name"
                    value={editingCustomer.name}
                    onChange={(e) => setEditingCustomer({ ...editingCustomer, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-email">Email</Label>
                  <Input
                    id="edit-email"
                    name="email"
                    type="email"
                    value={editingCustomer.email}
                    onChange={(e) => setEditingCustomer({ ...editingCustomer, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-phone">Phone</Label>
                  <Input
                    id="edit-phone"
                    name="phone"
                    value={editingCustomer.phone}
                    onChange={(e) => setEditingCustomer({ ...editingCustomer, phone: e.target.value })}
                  />
                </div>
              </div>
              <Button type="button" onClick={handleUpdateCustomer}>
                Update Customer
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

