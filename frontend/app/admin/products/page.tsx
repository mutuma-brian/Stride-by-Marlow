"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ProductManagement() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike Air Max 270",
      description: "Comfortable running shoes",
      brand: "Nike",
      size: "42",
      price: 15999,
    },
    {
      id: 2,
      name: "Adidas Ultraboost 21",
      description: "High-performance running shoes",
      brand: "Adidas",
      size: "43",
      price: 18999,
    },
  ])
  const [newProduct, setNewProduct] = useState({ name: "", description: "", brand: "", size: "", price: "" })
  const [editingProduct, setEditingProduct] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1, price: Number(newProduct.price) }])
    setNewProduct({ name: "", description: "", brand: "", size: "", price: "" })
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
  }

  const handleUpdateProduct = () => {
    setProducts(products.map((p) => (p.id === editingProduct.id ? editingProduct : p)))
    setEditingProduct(null)
  }

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Product Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={newProduct.name} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" name="brand" value={newProduct.brand} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="size">Size</Label>
                <Input id="size" name="size" value={newProduct.size} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <Input id="price" name="price" type="number" value={newProduct.price} onChange={handleInputChange} />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
              />
            </div>
            <Button type="button" onClick={handleAddProduct}>
              Add Product
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
                <TableHead>Brand</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.size}</TableCell>
                  <TableCell>KES {product.price}</TableCell>
                  <TableCell>
                    <Button variant="outline" className="mr-2" onClick={() => handleEditProduct(product)}>
                      Edit
                    </Button>
                    <Button variant="destructive" onClick={() => handleDeleteProduct(product.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {editingProduct && (
        <Card>
          <CardHeader>
            <CardTitle>Edit Product</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-name">Name</Label>
                  <Input
                    id="edit-name"
                    name="name"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-brand">Brand</Label>
                  <Input
                    id="edit-brand"
                    name="brand"
                    value={editingProduct.brand}
                    onChange={(e) => setEditingProduct({ ...editingProduct, brand: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-size">Size</Label>
                  <Input
                    id="edit-size"
                    name="size"
                    value={editingProduct.size}
                    onChange={(e) => setEditingProduct({ ...editingProduct, size: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-price">Price</Label>
                  <Input
                    id="edit-price"
                    name="price"
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  name="description"
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                />
              </div>
              <Button type="button" onClick={handleUpdateProduct}>
                Update Product
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

