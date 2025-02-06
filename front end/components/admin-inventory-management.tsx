"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react"

// Dummy data for inventory
const initialInventory = [
  { id: 1, productName: "Nike Air Max 270", sku: "NKE-AM270", quantity: 50, reorderPoint: 20 },
  { id: 2, productName: "Adidas Ultraboost 21", sku: "ADS-UB21", quantity: 30, reorderPoint: 15 },
  { id: 3, productName: "Puma RS-X³ Puzzle", sku: "PMA-RSX3", quantity: 25, reorderPoint: 10 },
]

export function AdminInventoryManagement() {
  const [inventory, setInventory] = useState(initialInventory)
  const [newItem, setNewItem] = useState({ productName: "", sku: "", quantity: "", reorderPoint: "" })
  const [editingItem, setEditingItem] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewItem((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddItem = () => {
    const itemToAdd = {
      id: inventory.length + 1,
      productName: newItem.productName,
      sku: newItem.sku,
      quantity: Number(newItem.quantity),
      reorderPoint: Number(newItem.reorderPoint),
    }
    setInventory([...inventory, itemToAdd])
    setNewItem({ productName: "", sku: "", quantity: "", reorderPoint: "" })
  }

  const handleEditItem = (id: number) => {
    setEditingItem(id)
    const itemToEdit = inventory.find((item) => item.id === id)
    if (itemToEdit) {
      setNewItem({
        productName: itemToEdit.productName,
        sku: itemToEdit.sku,
        quantity: itemToEdit.quantity.toString(),
        reorderPoint: itemToEdit.reorderPoint.toString(),
      })
    }
  }

  const handleUpdateItem = () => {
    if (editingItem) {
      setInventory(
        inventory.map((item) =>
          item.id === editingItem
            ? {
                ...item,
                productName: newItem.productName,
                sku: newItem.sku,
                quantity: Number(newItem.quantity),
                reorderPoint: Number(newItem.reorderPoint),
              }
            : item,
        ),
      )
      setEditingItem(null)
      setNewItem({ productName: "", sku: "", quantity: "", reorderPoint: "" })
    }
  }

  const handleDeleteItem = (id: number) => {
    setInventory(inventory.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{editingItem ? "Edit Inventory Item" : "Add New Inventory Item"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name</Label>
                <Input
                  id="productName"
                  name="productName"
                  value={newItem.productName}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" name="sku" value={newItem.sku} onChange={handleInputChange} placeholder="Enter SKU" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={newItem.quantity}
                  onChange={handleInputChange}
                  placeholder="Enter quantity"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reorderPoint">Reorder Point</Label>
                <Input
                  id="reorderPoint"
                  name="reorderPoint"
                  type="number"
                  value={newItem.reorderPoint}
                  onChange={handleInputChange}
                  placeholder="Enter reorder point"
                />
              </div>
            </div>
            <Button type="button" onClick={editingItem ? handleUpdateItem : handleAddItem}>
              {editingItem ? "Update Item" : "Add Item"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Inventory List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Reorder Point</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.reorderPoint}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => handleEditItem(item.id)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteItem(item.id)}>
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

