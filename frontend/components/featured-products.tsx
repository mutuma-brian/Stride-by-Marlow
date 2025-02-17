"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, X, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const featuredProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 15999,
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-shoes-2V5C4p.png",
    brand: "Nike",
    size: "42",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    price: 18999,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    brand: "Adidas",
    size: "43",
  },
  {
    id: 3,
    name: "Puma RS-X³ Puzzle",
    price: 12999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371570/04/sv01/fnd/IND/fmt/png/PUMA-x-RUBIK'S-RS-X³-PUZZLE-Sneakers",
    brand: "Puma",
    size: "41",
  },
  {
    id: 4,
    name: "Reebok Classic Leather",
    price: 8999,
    image:
      "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/e21e6ce4dc0f43c89688ab45018a437e_9366/Classic_Leather_Shoes_White_49799_01_standard.jpg",
    brand: "Reebok",
    size: "44",
  },
  {
    id: 5,
    name: "New Balance 990v5",
    price: 21999,
    image: "https://nb.scene7.com/is/image/NB/m990gl5_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    brand: "New Balance",
    size: "45",
  },
]

export function FeaturedProducts() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(featuredProducts)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const router = useRouter()
  const isLoggedIn = false // Replace with actual authentication logic

  const [filters, setFilters] = useState({
    brand: "",
    size: "",
    priceRange: [0, 25000],
  })

  useEffect(() => {
    const filtered = featuredProducts.filter(
      (product) =>
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filters.brand === "" || product.brand === filters.brand) &&
        (filters.size === "" || product.size === filters.size) &&
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1],
    )
    setFilteredProducts(filtered)

    const newSuggestions = featuredProducts
      .map((product) => product.name)
      .filter((name) => name.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 5)
    setSuggestions(newSuggestions)
  }, [searchTerm, filters])

  const handleAddToCart = (productId: number) => {
    if (!isLoggedIn) {
      router.push("/login")
    } else {
      console.log(`Added product ${productId} to cart`)
    }
  }

  const clearSearch = () => {
    setSearchTerm("")
  }

  const handleFilterChange = (key: string, value: string | number[]) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="mb-8 relative flex items-center">
          <div className="flex-grow flex items-center">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            {searchTerm && (
              <Button variant="ghost" size="icon" onClick={clearSearch} className="absolute right-12">
                <X className="h-4 w-4" />
              </Button>
            )}
            <Button className="ml-2">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="ml-2">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Filter Products</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="brand">Brand</Label>
                  <Select value={filters.brand} onValueChange={(value) => handleFilterChange("brand", value)}>
                    <SelectTrigger id="brand">
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Brands">All Brands</SelectItem>
                      <SelectItem value="Nike">Nike</SelectItem>
                      <SelectItem value="Adidas">Adidas</SelectItem>
                      <SelectItem value="Puma">Puma</SelectItem>
                      <SelectItem value="Reebok">Reebok</SelectItem>
                      <SelectItem value="New Balance">New Balance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="size">Size</Label>
                  <Select value={filters.size} onValueChange={(value) => handleFilterChange("size", value)}>
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Sizes">All Sizes</SelectItem>
                      <SelectItem value="41">41</SelectItem>
                      <SelectItem value="42">42</SelectItem>
                      <SelectItem value="43">43</SelectItem>
                      <SelectItem value="44">44</SelectItem>
                      <SelectItem value="45">45</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Price Range</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      value={filters.priceRange[0]}
                      onChange={(e) =>
                        handleFilterChange("priceRange", [Number(e.target.value), filters.priceRange[1]])
                      }
                      className="w-24"
                    />
                    <span>-</span>
                    <Input
                      type="number"
                      value={filters.priceRange[1]}
                      onChange={(e) =>
                        handleFilterChange("priceRange", [filters.priceRange[0], Number(e.target.value)])
                      }
                      className="w-24"
                    />
                  </div>
                  <Slider
                    min={0}
                    max={25000}
                    step={1000}
                    value={filters.priceRange}
                    onValueChange={(value) => handleFilterChange("priceRange", value)}
                    className="mt-2"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {suggestions.length > 0 && searchTerm && (
          <ul className="absolute z-10 bg-background border rounded mt-1 w-full left-0">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="p-2 hover:bg-muted cursor-pointer" onClick={() => setSearchTerm(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <CardContent className="p-0 flex-grow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground mb-2">KES {product.price.toLocaleString()}</p>
                    </div>
                    <Button className="w-full" onClick={() => handleAddToCart(product.id)}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

