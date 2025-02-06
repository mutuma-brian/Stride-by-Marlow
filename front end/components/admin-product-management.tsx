"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react"

// Dummy data for products
const initialProducts = [
  { id: 1, name: "Nike Air Max 270", price: 15999, brand: "Nike", size: 42, stock: 50 },
  { id: 2, name: "Adidas Ultraboost 21", price: 18999, brand: "Adidas", size: 43, stock: 30 },
  { id: 3, name: "Puma RS-X³ Puzzle", price: 12999, brand: "Puma", size: 41, stock: 25 },
]

export function AdminProductManagement() {
  const [products, setProducts] = useState(initialProducts)
  const [newProduct, setNewProduct] = useState({ name: "", price: "", brand: "", size: "", stock: "" })
  const [editingProduct, setEditingProduct] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddProduct = () => {
    const productToAdd = {
      id: products.length + 1,
      name: newProduct.name,
      price: Number(newProduct.price),
      brand: newProduct.brand,
      size: Number(newProduct.size),
      stock: Number(newProduct.stock),
    }
    setProducts([...products, productToAdd])
    setNewProduct({ name: "", price: "", brand: "", size: "", stock: "" })
  }

  const handleEditProduct = (id: number) => {
    setEditingProduct(id)
    const productToEdit = products.find((p) => p.id === id)
    if (productToEdit) {
      setNewProduct({
        name: productToEdit.name,
        price: productToEdit.price.toString(),
        brand: productToEdit.brand,
        size: productToEdit.size.toString(),
        stock: productToEdit.stock.toString(),
      })
    }
  }

  const handleUpdateProduct = () => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct
            ? {
                ...p,
                name: newProduct.name,
                price: Number(newProduct.price),
                brand: newProduct.brand,
                size: Number(newProduct.size),
                stock: Number(newProduct.stock),
              }
            : p,
        ),
      )
      setEditingProduct(null)
      setNewProduct({ name: "", price: "", brand: "", size: "", stock: "" })
    }
  }

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{editingProduct ? "Edit Product" : "Add New Product"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price (KES)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Input
                  id="brand"
                  name="brand"
                  value={newProduct.brand}
                  onChange={handleInputChange}
                  placeholder="Enter brand"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="size">Size</Label>
                <Input
                  id="size"
                  name="size"
                  type="number"
                  value={newProduct.size}
                  onChange={handleInputChange}
                  placeholder="Enter size"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  value={newProduct.stock}
                  onChange={handleInputChange}
                  placeholder="Enter stock"
                />
              </div>
            </div>
            <Button type="button" onClick={editingProduct ? handleUpdateProduct : handleAddProduct}>
              {editingProduct ? "Update Product" : "Add Product"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Price (KES)</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.size}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => handleEditProduct(product.id)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(product.id)}>
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

