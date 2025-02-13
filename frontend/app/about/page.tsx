import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Stride by Marlow</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  Stride by Marlow was founded in 2020 with a simple mission: to provide high-quality, stylish sneakers
                  to sneaker enthusiasts in Kenya and beyond. Our journey began in a small workshop in Nairobi, where we
                  crafted our first pair of sneakers with meticulous attention to detail and a commitment to quality.
                </p>
                <p className="text-lg">
                  Today, we've grown into a beloved brand, known for our innovative designs and dedication to customer
                  satisfaction. We continue to push the boundaries of sneaker technology while staying true to our roots
                  of craftsmanship and style.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/about-image.jpg"
                  alt="Stride by Marlow workshop"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Quality craftsmanship in every pair</li>
              <li>Innovative design that pushes boundaries</li>
              <li>Customer satisfaction as our top priority</li>
              <li>Sustainability in our materials and processes</li>
              <li>Supporting local communities and artisans</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}

