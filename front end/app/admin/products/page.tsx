"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2, Camera, Search, ArrowUpDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for products
const initialProducts = [
  { id: 1, name: "Nike Air Max 270", price: 15999, brand: "Nike", size: 42, image: "/placeholder.svg" },
  { id: 2, name: "Adidas Ultraboost 21", price: 18999, brand: "Adidas", size: 43, image: "/placeholder.svg" },
  { id: 3, name: "Puma RS-X³ Puzzle", price: 12999, brand: "Puma", size: 41, image: "/placeholder.svg" },
  { id: 4, name: "Reebok Classic Leather", price: 8999, brand: "Reebok", size: 44, image: "/placeholder.svg" },
  { id: 5, name: "New Balance 990v5", price: 21999, brand: "New Balance", size: 42, image: "/placeholder.svg" },
]

export default function AdminProducts() {
  const [products, setProducts] = useState(initialProducts)
  const [newProduct, setNewProduct] = useState({ name: "", price: "", brand: "", size: "", image: "" })
  const [editingProduct, setEditingProduct] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState<"name" | "price" | "brand" | "size">("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddProduct = () => {
    const productToAdd = {
      id: products.length + 1,
      name: newProduct.name,
      price: Number.parseInt(newProduct.price),
      brand: newProduct.brand,
      size: Number.parseInt(newProduct.size),
      image: newProduct.image || "/placeholder.svg",
    }
    setProducts([...products, productToAdd])
    setNewProduct({ name: "", price: "", brand: "", size: "", image: "" })
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
        image: productToEdit.image,
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
                price: Number.parseInt(newProduct.price),
                brand: newProduct.brand,
                size: Number.parseInt(newProduct.size),
                image: newProduct.image,
              }
            : p,
        ),
      )
      setEditingProduct(null)
      setNewProduct({ name: "", price: "", brand: "", size: "", image: "" })
    }
  }

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewProduct((prev) => ({ ...prev, image: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const openCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleSort = (field: "name" | "price" | "brand" | "size") => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const filteredAndSortedProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1
      if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1
      return 0
    })

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Product Management</h1>
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
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Product Image</Label>
              <div className="flex items-center space-x-2">
                <Button type="button" onClick={openCamera}>
                  <Camera className="mr-2 h-4 w-4" /> Take Picture
                </Button>
                <Input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  className="hidden"
                  ref={fileInputRef}
                />
                {newProduct.image && (
                  <img
                    src={newProduct.image || "/placeholder.svg"}
                    alt="Product"
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
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
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={sortField} onValueChange={(value: "name" | "price" | "brand" | "size") => handleSort(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="brand">Brand</SelectItem>
                <SelectItem value="size">Size</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>
                  <Button variant="ghost" onClick={() => handleSort("name")}>
                    Name <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" onClick={() => handleSort("price")}>
                    Price (KES) <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" onClick={() => handleSort("brand")}>
                    Brand <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" onClick={() => handleSort("size")}>
                    Size <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.size}</TableCell>
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

