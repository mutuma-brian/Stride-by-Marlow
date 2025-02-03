"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const newProducts = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus 38",
    price: 13999,
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/22d53167-3ef7-46f3-b7a7-4f4a2a2376b5/air-zoom-pegasus-38-road-running-shoes-Hmsj6Q.png",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    price: 19999,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
  },
  {
    id: 3,
    name: "Puma Deviate Nitro 2",
    price: 15999,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/377061/01/sv01/fnd/IND/fmt/png",
  },
]

export function NewCollection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          New Collection
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">KES {product.price.toLocaleString()}</p>
                    <Button className="w-full">
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

