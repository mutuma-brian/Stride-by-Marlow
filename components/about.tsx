"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Stride by Marlow</h2>
            <p className="text-gray-600 mb-6">
              At Stride by Marlow, we believe that every step should be taken in style and comfort. Our passion for
              sneakers drives us to curate a collection that blends cutting-edge design with unparalleled comfort.
            </p>
            <p className="text-gray-600 mb-6">
              Founded by sneaker enthusiasts, we understand the importance of quality footwear in your daily life.
              Whether you're hitting the gym, exploring the city, or making a fashion statement, we've got the perfect
              pair for you.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Sneaker collection"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

