"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

// Dummy data for sales records
const initialSalesRecords = [
  { id: 1, date: "2023-06-01", customer: "Alice Johnson", product: "Nike Air Max 270", quantity: 1, total: 15999 },
  { id: 2, date: "2023-06-02", customer: "Bob Smith", product: "Adidas Ultraboost 21", quantity: 2, total: 37998 },
  { id: 3, date: "2023-06-03", customer: "Charlie Brown", product: "Puma RS-X³ Puzzle", quantity: 1, total: 12999 },
]

export function AdminSalesRecords() {
  const [salesRecords, setSalesRecords] = useState(initialSalesRecords)
  const [newRecord, setNewRecord] = useState({ date: "", customer: "", product: "", quantity: "", total: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewRecord((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddRecord = () => {
    const recordToAdd = {
      id: salesRecords.length + 1,
      date: newRecord.date,
      customer: newRecord.customer,
      product: newRecord.product,
      quantity: Number(newRecord.quantity),
      total: Number(newRecord.total),
    }
    setSalesRecords([...salesRecords, recordToAdd])
    setNewRecord({ date: "", customer: "", product: "", quantity: "", total: "" })
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Sales Record</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" name="date" type="date" value={newRecord.date} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customer">Customer</Label>
                <Input
                  id="customer"
                  name="customer"
                  value={newRecord.customer}
                  onChange={handleInputChange}
                  placeholder="Enter customer name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product">Product</Label>
                <Input
                  id="product"
                  name="product"
                  value={newRecord.product}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={newRecord.quantity}
                  onChange={handleInputChange}
                  placeholder="Enter quantity"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="total">Total (KES)</Label>
                <Input
                  id="total"
                  name="total"
                  type="number"
                  value={newRecord.total}
                  onChange={handleInputChange}
                  placeholder="Enter total amount"
                />
              </div>
            </div>
            <Button type="button" onClick={handleAddRecord}>
              Add Sales Record
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sales Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total (KES)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.customer}</TableCell>
                  <TableCell>{record.product}</TableCell>
                  <TableCell>{record.quantity}</TableCell>
                  <TableCell>{record.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

