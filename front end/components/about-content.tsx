"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutContent() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h1
        className="text-5xl font-bold mb-12 text-center text-orange-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Stride by Marlow
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-orange-500">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Stride by Marlow was founded in 2020 by a group of passionate sneaker enthusiasts who believed that
                everyone deserves to walk in comfort and style. Our journey began in a small workshop in Nairobi, where
                we crafted our first pair of sneakers with meticulous attention to detail and a commitment to quality.
              </p>
              <p className="text-gray-700">
                Today, we've grown into a beloved brand, known for our innovative designs and dedication to customer
                satisfaction. We continue to push the boundaries of sneaker technology while staying true to our roots
                of craftsmanship and style.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative h-64 md:h-auto rounded-lg overflow-hidden"
        >
          <Image
            src="/about-image.jpg"
            alt="Stride by Marlow workshop"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-orange-500">Our Mission</h2>
              <p className="text-gray-700">
                At Stride by Marlow, our mission is to provide our customers with the perfect blend of style, comfort,
                and performance. We believe that the right pair of sneakers can elevate your everyday experiences,
                whether you're hitting the gym, exploring the city, or simply going about your day.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-orange-500">Our Values</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Quality craftsmanship</li>
                <li>Innovative design</li>
                <li>Customer satisfaction</li>
                <li>Sustainability</li>
                <li>Community engagement</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Join Our Journey</h2>
            <p className="text-gray-700">
              We invite you to be a part of the Stride by Marlow family. Whether you're a seasoned sneakerhead or just
              starting your collection, we have something special for you. Step into comfort, step into style, and
              stride with confidence.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

