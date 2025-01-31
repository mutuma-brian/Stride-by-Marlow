"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/router"

const featuredProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 15999,
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-shoes-2V5C4p.png",
    brand: "Nike",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    price: 18999,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    brand: "Adidas",
  },
  {
    id: 3,
    name: "Puma RS-X³ Puzzle",
    price: 12999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371570/04/sv01/fnd/IND/fmt/png/PUMA-x-RUBIK'S-RS-X³-PUZZLE-Sneakers",
    brand: "Puma",
  },
  {
    id: 4,
    name: "Reebok Classic Leather",
    price: 8999,
    image:
      "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/e21e6ce4dc0f43c89688ab45018a437e_9366/Classic_Leather_Shoes_White_49799_01_standard.jpg",
    brand: "Reebok",
  },
  {
    id: 5,
    name: "New Balance 990v5",
    price: 21999,
    image: "https://nb.scene7.com/is/image/NB/m990gl5_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    brand: "New Balance",
  },
  {
    id: 6,
    name: "Asics Gel-Nimbus 23",
    price: 16999,
    image: "https://images.asics.com/is/image/asics/1011B004_020_SR_RT_GLB?$sfcc-product$",
    brand: "Asics",
  },
  {
    id: 7,
    name: "Converse Chuck Taylor All Star",
    price: 6999,
    image:
      "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw715cd132/images/a_107/M9166_A_107X1.jpg?sw=964",
    brand: "Converse",
  },
  {
    id: 8,
    name: "Vans Old Skool",
    price: 7999,
    image: "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?$583x583$",
    brand: "Vans",
  },
  {
    id: 9,
    name: "Under Armour HOVR Phantom",
    price: 14999,
    image:
      "https://underarmour.scene7.com/is/image/Underarmour/3023005-102_DEFAULT?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640",
    brand: "Under Armour",
  },
  {
    id: 10,
    name: "Skechers Go Walk",
    price: 5999,
    image: "https://image.skechers.com/img/productimages/xlarge/124602_BKW.jpg",
    brand: "Skechers",
  },
  {
    id: 11,
    name: "Brooks Ghost 14",
    price: 13999,
    image:
      "https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw9f6f2e8d/original/110369/110369-012-l-ghost-14-mens-cushion-running-shoe.jpg?sw=900&sh=900&sm=fit",
    brand: "Brooks",
  },
  {
    id: 12,
    name: "Hoka One One Clifton 8",
    price: 15999,
    image:
      "https://cdn.runrepeat.com/i/hoka-one-one/36632/hoka-one-one-clifton-8-running-shoes-black-white-10-black-white-c8c4-600.jpg",
    brand: "Hoka One One",
  },
  {
    id: 13,
    name: "Salomon Speedcross 5",
    price: 14999,
    image: "https://www.salomon.com/sites/default/files/products-images/L40684000_5a0c2a9c9c244.jpg",
    brand: "Salomon",
  },
  {
    id: 14,
    name: "Mizuno Wave Rider 25",
    price: 13999,
    image:
      "https://mizunoshop.imgix.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/J/1/J1GC210301-01.jpg",
    brand: "Mizuno",
  },
  {
    id: 15,
    name: "On Cloud X",
    price: 16999,
    image: "https://on-website.s3.amazonaws.com/cloud-x-black-asphalt-m-g1.png",
    brand: "On",
  },
  {
    id: 16,
    name: "Saucony Ride 14",
    price: 12999,
    image:
      "https://www.saucony.com/dw/image/v2/BBVV_PRD/on/demandware.static/-/Sites-saucony_us-Library/default/dwf0f6ce7c/content/seasonal-content/homepage/2021/02/ride14-flagship-plp-image.jpg",
    brand: "Saucony",
  },
  {
    id: 17,
    name: "Merrell Moab 2",
    price: 11999,
    image:
      "https://www.merrell.com/dw/image/v2/BBPJ_PRD/on/demandware.static/-/Sites-merrell-master/default/dw9d53f67b/images/J06029/J06029_MAIN.jpg?sw=680&sh=680&sm=fit",
    brand: "Merrell",
  },
  {
    id: 18,
    name: "Timberland 6-Inch Premium",
    price: 24999,
    image: "https://images.timberland.com/is/image/timberland/10061024-HERO?$496x496$",
    brand: "Timberland",
  },
  {
    id: 19,
    name: "Dr. Martens 1460",
    price: 18999,
    image: "https://i1.adis.ws/i/drmartens/11822006.80.jpg",
    brand: "Dr. Martens",
  },
  {
    id: 20,
    name: "Birkenstock Arizona",
    price: 9999,
    image:
      "https://www.birkenstock.com/dw/image/v2/BDXC_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0980612b/951301/951301.jpg",
    brand: "Birkenstock",
  },
]

// ... rest of the component remains the same

export default function FeaturedProducts() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(featuredProducts)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const router = useRouter()
  const isLoggedIn = false // Replace with actual authentication logic

  useEffect(() => {
    const filtered = featuredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredProducts(filtered)

    const newSuggestions = featuredProducts
      .map((product) => product.name)
      .filter((name) => name.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 5)
    setSuggestions(newSuggestions)
  }, [searchTerm])

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

  return (
    <section className="py-20 bg-cover bg-center" style={{ backgroundImage: "url('/products-background.jpg')" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Featured Products</h2>
        <div className="mb-8 relative bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            {searchTerm && (
              <button onClick={clearSearch} className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <X size={20} />
              </button>
            )}
            <Button className="ml-2 btn-primary">
              <Search size={20} />
            </Button>
          </div>
          {suggestions.length > 0 && searchTerm && (
            <ul className="absolute z-10 bg-white border rounded mt-1 w-full left-0">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSearchTerm(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <CardContent className="p-0 flex-grow flex flex-col">
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
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-gray-600 mb-2">KES {product.price.toLocaleString()}</p>
                    </div>
                    <Button className="w-full btn-primary mt-auto" onClick={() => handleAddToCart(product.id)}>
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

